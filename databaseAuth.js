// databaseAuth.js - Stores WhatsApp auth in database
const crypto = require('crypto');

class DatabaseAuth {
    constructor() {
        console.log('🔧 Initializing Database Auth Storage...');
        this.supabase = require('./learningDb').supabase;
        
        // Use environment variable or generate encryption key
        this.encryptionKey = process.env.ENCRYPTION_KEY || 
                             Buffer.from('naycamtrebtnntoelucs-supabase-key-charles').toString('base64').substring(0, 32);
    }

    // Encrypt auth data
    encryptData(data) {
        try {
            const algorithm = 'aes-256-cbc';
            const iv = crypto.randomBytes(16);
            const key = crypto.createHash('sha256').update(this.encryptionKey).digest('base64').substr(0, 32);
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            
            let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
            encrypted += cipher.final('hex');
            
            return {
                iv: iv.toString('hex'),
                data: encrypted,
                algorithm: algorithm
            };
        } catch (error) {
            console.error('❌ Encryption error:', error);
            return null;
        }
    }

    // Decrypt auth data
    decryptData(encryptedData) {
        try {
            const algorithm = encryptedData.algorithm || 'aes-256-cbc';
            const iv = Buffer.from(encryptedData.iv, 'hex');
            const key = crypto.createHash('sha256').update(this.encryptionKey).digest('base64').substr(0, 32);
            const encryptedText = Buffer.from(encryptedData.data, 'hex');
            
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            let decrypted = decipher.update(encryptedText);
            decrypted = Buffer.concat([decrypted, decipher.final()]);
            
            return JSON.parse(decrypted.toString());
        } catch (error) {
            console.error('❌ Decryption error:', error);
            return null;
        }
    }

    // Save auth to database
    async saveAuth(authData) {
        try {
            if (!this.supabase) {
                console.log('⚠️ Database not available, auth will be saved locally');
                return { success: false, local: true };
            }
            
            const encryptedData = this.encryptData(authData);
            if (!encryptedData) {
                throw new Error('Encryption failed');
            }
            
            // Save to whatsapp_auth table
            const { error } = await this.supabase
                .from('whatsapp_auth')
                .upsert({
                    bot_id: 'charles_academy',
                    auth_data: encryptedData,
                    updated_at: new Date().toISOString(),
                    created_at: new Date().toISOString()
                }, { onConflict: 'bot_id' });
            
            if (error) {
                console.error('❌ Database save error:', error.message);
                
                // Try to create table if it doesn't exist
                await this.createAuthTable();
                
                // Try again
                const { error: retryError } = await this.supabase
                    .from('whatsapp_auth')
                    .upsert({
                        bot_id: 'charles_academy',
                        auth_data: encryptedData,
                        updated_at: new Date().toISOString(),
                        created_at: new Date().toISOString()
                    }, { onConflict: 'bot_id' });
                
                if (retryError) throw retryError;
            }
            
            console.log('✅ Auth saved to database');
            return { success: true, local: false };
            
        } catch (error) {
            console.error('❌ Error saving auth to database:', error.message);
            return { success: false, error: error.message, local: true };
        }
    }

    // Load auth from database
    async loadAuth() {
        try {
            if (!this.supabase) {
                console.log('⚠️ Database not available, using local auth');
                return null;
            }
            
            const { data, error } = await this.supabase
                .from('whatsapp_auth')
                .select('auth_data')
                .eq('bot_id', 'charles_academy')
                .single();
            
            if (error) {
                console.log('📝 No auth found in database, starting fresh');
                return null;
            }
            
            if (!data || !data.auth_data) {
                return null;
            }
            
            const decryptedData = this.decryptData(data.auth_data);
            if (!decryptedData) {
                throw new Error('Decryption failed');
            }
            
            console.log('✅ Auth loaded from database');
            return decryptedData;
            
        } catch (error) {
            console.error('❌ Error loading auth from database:', error.message);
            return null;
        }
    }

    // Clear auth from database
    async clearAuth() {
        try {
            if (!this.supabase) return { success: true };
            
            const { error } = await this.supabase
                .from('whatsapp_auth')
                .delete()
                .eq('bot_id', 'charles_academy');
            
            if (error) throw error;
            
            console.log('🗑️ Auth cleared from database');
            return { success: true };
            
        } catch (error) {
            console.error('❌ Error clearing auth:', error.message);
            return { success: false, error: error.message };
        }
    }

    // Create auth table if it doesn't exist
    async createAuthTable() {
        try {
            if (!this.supabase) return false;
            
            // Try to create table via SQL (if permissions allow)
            const { error } = await this.supabase.rpc('create_auth_table');
            
            if (error) {
                console.log('⚠️ Could not create table via RPC, you need to create it manually');
                console.log('📋 SQL to create table:');
                console.log(`
                    CREATE TABLE IF NOT EXISTS whatsapp_auth (
                        id SERIAL PRIMARY KEY,
                        bot_id TEXT UNIQUE NOT NULL,
                        auth_data JSONB NOT NULL,
                        created_at TIMESTAMP DEFAULT NOW(),
                        updated_at TIMESTAMP DEFAULT NOW()
                    );
                `);
            }
            
            return true;
            
        } catch (error) {
            console.error('❌ Error creating auth table:', error.message);
            return false;
        }
    }

    // Backup auth to database (called periodically)
    async backupAuth(authData) {
        try {
            const result = await this.saveAuth(authData);
            if (result.success) {
                console.log('💾 Auth backup completed');
            }
            return result;
        } catch (error) {
            console.error('❌ Auth backup failed:', error.message);
            return { success: false, error: error.message };
        }
    }
}

module.exports = new DatabaseAuth();