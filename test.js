// test.js - Handles all test logic for English and Kiswahili
const testData = {
    // ==================== ENGLISH TESTS ====================
    'english': {
        'test_1': {
            id: 'english_test_1',
            title: {
                en: 'CHARLES ACADEMY – ENGLISH TEST 1',
                sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA 1',
                fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS 1'
            },
            time: '1 Hour',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'QUESTION 1: SELF-INTRODUCTION (10 marks)\nWrite 5–10 sentences about yourself. Include:\n• Your name, age, and country\n• Your hobbies or interests\n• Your favorite subject\n• A short goal for studying English',
                        sw: 'SWALI 1: UTAMBULISHO WA MWENYEWE (Alama 10)\nAndika sentensi 5–10 kuhusu wewe mwenyewe. Jumuisha:\n• Jina lako, umri, na nchi\n• Shauku au masilahi yako\n• Somo unalolipenda\n• Lengo fupi la kujifunza Kiingereza',
                        fr: 'QUESTION 1: AUTO-PRÉSENTATION (10 points)\nÉcrivez 5–10 phrases sur vous-même. Incluez:\n• Votre nom, âge et pays\n• Vos hobbies ou centres d\'intérêt\n• Votre matière préférée\n• Un objectif court pour apprendre l\'anglais'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Write your self-introduction:', 
                                sw: 'Andika utambulisho wako wa mwenyewe:', 
                                fr: 'Écrivez votre auto-présentation:' 
                            },
                            answer: { 
                                en: '[Student writes about themselves]', 
                                sw: '[Mwanafunzi anaandika kuhusu yeye mwenyewe]', 
                                fr: '[L\'étudiant écrit sur lui-même]' 
                            }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'QUESTION 2: GREETINGS AND FAREWELLS (10 marks)',
                        sw: 'SWALI 2: SALAMU NA KUAGA (Alama 10)',
                        fr: 'QUESTION 2: SALUTATIONS ET ADIEUX (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. You meet your teacher in the morning. (Good morning / Good evening / Good night)', 
                                sw: '1. Unakutana na mwalimu wako asubuhi. (Habari za asubuhi / Habari za jioni / Usiku mwema)', 
                                fr: '1. Vous rencontrez votre professeur le matin. (Bonjour / Bonsoir / Bonne nuit)' 
                            },
                            answer: { 
                                en: 'Good morning', 
                                sw: 'Habari za asubuhi', 
                                fr: 'Bonjour' 
                            }
                        },
                        {
                            text: { 
                                en: '2. You leave your friend at school. (Goodbye / Hello / Good morning)', 
                                sw: '2. Unaacha rafiki yako shuleni. (Kwaheri / Hujambo / Habari za asubuhi)', 
                                fr: '2. Vous quittez votre ami à l\'école. (Au revoir / Bonjour / Bonjour)' 
                            },
                            answer: { 
                                en: 'Goodbye', 
                                sw: 'Kwaheri', 
                                fr: 'Au revoir' 
                            }
                        },
                        {
                            text: { 
                                en: '3. You meet a friend after a long time. (How are you? / Long time no see / Nice to meet you)', 
                                sw: '3. Unakutana na rafiki baada ya muda mrefu. (Habari yako? / Muda mrefu bila kuonana / Nimefurahi kukutana nawe)', 
                                fr: '3. Vous rencontrez un ami après longtemps. (Comment ça va? / Longtemps sans voir / Enchanté de vous rencontrer)' 
                            },
                            answer: { 
                                en: 'Long time no see', 
                                sw: 'Muda mrefu bila kuonana', 
                                fr: 'Longtemps sans voir' 
                            }
                        },
                        {
                            text: { 
                                en: '4. Someone says "How are you?" How do you respond? (I\'m fine, thank you / Good night / Long time no see)', 
                                sw: '4. Mtu anasema "Habari yako?" Unajibu vipi? (Nzuri, asante / Usiku mwema / Muda mrefu bila kuonana)', 
                                fr: '4. Quelqu\'un dit "Comment ça va?" Comment répondez-vous? (Je vais bien, merci / Bonne nuit / Longtemps sans voir)' 
                            },
                            answer: { 
                                en: 'I\'m fine, thank you', 
                                sw: 'Nzuri, asante', 
                                fr: 'Je vais bien, merci' 
                            }
                        },
                        {
                            text: { 
                                en: '5. Before going to sleep, you say: (Good night / Good morning / Hello)', 
                                sw: '5. Kabla ya kulala, unasema: (Usiku mwema / Habari za asubuhi / Hujambo)', 
                                fr: '5. Avant de dormir, vous dites: (Bonne nuit / Bonjour / Bonjour)' 
                            },
                            answer: { 
                                en: 'Good night', 
                                sw: 'Usiku mwema', 
                                fr: 'Bonne nuit' 
                            }
                        },
                        {
                            text: { 
                                en: 'B. Match greetings with responses:\n1. How are you? 2. Good night 3. Nice to meet you 4. Long time no see 5. Hello\na) Nice to meet you too b) I\'m fine, thank you c) Good night, sleep well d) Long time no see! e) Hello!', 
                                sw: 'B. Linganisha salam na majibu:\n1. Habari yako? 2. Usiku mwema 3. Nimefurahi kukutana nawe 4. Muda mrefu bila kuonana 5. Hujambo\na) Nimefurahi pia b) Nzuri, asante c) Usiku mwema, lala salama d) Muda mrefu bila kuonana! e) Hujambo!', 
                                fr: 'B. Associez les salutations avec les réponses:\n1. Comment ça va? 2. Bonne nuit 3. Enchanté de vous rencontrer 4. Longtemps sans voir 5. Bonjour\na) Enchanté aussi b) Je vais bien, merci c) Bonne nuit, dormez bien d) Longtemps sans voir! e) Bonjour!' 
                            },
                            answer: { 
                                en: '1-b, 2-c, 3-a, 4-d, 5-e', 
                                sw: '1-b, 2-c, 3-a, 4-d, 5-e', 
                                fr: '1-b, 2-c, 3-a, 4-d, 5-e' 
                            }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'QUESTION 3: PRESENT TENSE (10 marks)\nFill in the blanks with the correct form of "to be" or "to have" (1 mark each):',
                        sw: 'SWALI 3: WAKATI ULIOPO (Alama 10)\nJaza nafasi zilizo wazi kwa umbo sahihi la "kuwa" au "kuwa na" (alama 1 kwa kila swali):',
                        fr: 'QUESTION 3: PRÉSENT (10 points)\nRemplissez les blancs avec la forme correcte de "être" ou "avoir" (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I ____ a student.', sw: '1. Mimi ____ mwanafunzi.', fr: '1. Je ____ étudiant.' },
                            answer: { en: 'am', sw: 'ni', fr: 'suis' }
                        },
                        {
                            text: { en: '2. She ____ my friend.', sw: '2. Yeye ____ rafiki yangu.', fr: '2. Elle ____ mon ami.' },
                            answer: { en: 'is', sw: 'ni', fr: 'est' }
                        },
                        {
                            text: { en: '3. They ____ happy.', sw: '3. Wao ____ wafurahi.', fr: '3. Ils ____ heureux.' },
                            answer: { en: 'are', sw: 'ni', fr: 'sont' }
                        },
                        {
                            text: { en: '4. He ____ a bicycle.', sw: '4. Yeye ____ baiskeli.', fr: '4. Il ____ un vélo.' },
                            answer: { en: 'has', sw: 'ana', fr: 'a' }
                        },
                        {
                            text: { en: '5. We ____ at school.', sw: '5. Sisi ____ shuleni.', fr: '5. Nous ____ à l\'école.' },
                            answer: { en: 'are', sw: 'tuko', fr: 'sommes' }
                        },
                        {
                            text: { en: '6. I ____ two brothers.', sw: '6. Mimi ____ ndugu wawili.', fr: '6. J\'____ deux frères.' },
                            answer: { en: 'have', sw: 'na', fr: 'ai' }
                        },
                        {
                            text: { en: '7. She ____ a cat.', sw: '7. Yeye ____ paka.', fr: '7. Elle ____ un chat.' },
                            answer: { en: 'has', sw: 'ana', fr: 'a' }
                        },
                        {
                            text: { en: '8. You ____ my neighbor.', sw: '8. Wewe ____ jirani yangu.', fr: '8. Tu ____ mon voisin.' },
                            answer: { en: 'are', sw: 'ni', fr: 'es' }
                        },
                        {
                            text: { en: '9. They ____ tired.', sw: '9. Wao ____ wachovu.', fr: '9. Ils ____ fatigués.' },
                            answer: { en: 'are', sw: 'ni', fr: 'sont' }
                        },
                        {
                            text: { en: '10. We ____ a new book.', sw: '10. Sisi ____ kitabu kipya.', fr: '10. Nous ____ un nouveau livre.' },
                            answer: { en: 'have', sw: 'tuna', fr: 'avons' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'QUESTION 4: PAST TENSE (10 marks)\nRewrite these sentences in the past tense (1 mark each):',
                        sw: 'SWALI 4: WAKATI ULIO PITA (Alama 10)\nAndika tena sentensi hizi kwa wakati uliopita (alama 1 kwa kila swali):',
                        fr: 'QUESTION 4: PASSÉ (10 points)\nRéécrivez ces phrases au passé (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I am at school. →', sw: '1. Mimi niko shuleni. →', fr: '1. Je suis à l\'école. →' },
                            answer: { en: 'I was at school.', sw: 'Nilikuwa shuleni.', fr: 'J\'étais à l\'école.' }
                        },
                        {
                            text: { en: '2. She has a pen. →', sw: '2. Yeye ana kalamu. →', fr: '2. Elle a un stylo. →' },
                            answer: { en: 'She had a pen.', sw: 'Alikuwa na kalamu.', fr: 'Elle avait un stylo.' }
                        },
                        {
                            text: { en: '3. They are late. →', sw: '3. Wao wamechelewa. →', fr: '3. Ils sont en retard. →' },
                            answer: { en: 'They were late.', sw: 'Walikuwa wamechelewa.', fr: 'Ils étaient en retard.' }
                        },
                        {
                            text: { en: '4. He has a car. →', sw: '4. Yeye ana gari. →', fr: '4. Il a une voiture. →' },
                            answer: { en: 'He had a car.', sw: 'Alikuwa na gari.', fr: 'Il avait une voiture.' }
                        },
                        {
                            text: { en: '5. We are happy. →', sw: '5. Sisi tuko wafurahi. →', fr: '5. Nous sommes heureux. →' },
                            answer: { en: 'We were happy.', sw: 'Tulikuwa wafurahi.', fr: 'Nous étions heureux.' }
                        },
                        {
                            text: { en: '6. I have a dog. →', sw: '6. Mimi nina mbwa. →', fr: '6. J\'ai un chien. →' },
                            answer: { en: 'I had a dog.', sw: 'Nilikuwa na mbwa.', fr: 'J\'avais un chien.' }
                        },
                        {
                            text: { en: '7. You are my friend. →', sw: '7. Wewe ni rafiki yangu. →', fr: '7. Tu es mon ami. →' },
                            answer: { en: 'You were my friend.', sw: 'Ulikuwa rafiki yangu.', fr: 'Tu étais mon ami.' }
                        },
                        {
                            text: { en: '8. She has two sisters. →', sw: '8. Yeye ana dada wawili. →', fr: '8. Elle a deux sœurs. →' },
                            answer: { en: 'She had two sisters.', sw: 'Alikuwa na dada wawili.', fr: 'Elle avait deux sœurs.' }
                        },
                        {
                            text: { en: '9. We are tired. →', sw: '9. Sisi tuko wachovu. →', fr: '9. Nous sommes fatigués. →' },
                            answer: { en: 'We were tired.', sw: 'Tulikuwa wachovu.', fr: 'Nous étions fatigués.' }
                        },
                        {
                            text: { en: '10. He has a book. →', sw: '10. Yeye ana kitabu. →', fr: '10. Il a un livre. →' },
                            answer: { en: 'He had a book.', sw: 'Alikuwa na kitabu.', fr: 'Il avait un livre.' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'QUESTION 5: FUTURE TENSE (10 marks)\nRewrite these sentences in future tense (1 mark each):',
                        sw: 'SWALI 5: WAKATI UJAO (Alama 10)\nAndika tena sentensi hizi kwa wakati ujao (alama 1 kwa kila swali):',
                        fr: 'QUESTION 5: FUTUR (10 points)\nRéécrivez ces phrases au futur (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I am at home. →', sw: '1. Mimi niko nyumbani. →', fr: '1. Je suis à la maison. →' },
                            answer: { en: 'I will be at home.', sw: 'Nitakuwa nyumbani.', fr: 'Je serai à la maison.' }
                        },
                        {
                            text: { en: '2. She has a cat. →', sw: '2. Yeye ana paka. →', fr: '2. Elle a un chat. →' },
                            answer: { en: 'She will have a cat.', sw: 'Atakuwa na paka.', fr: 'Elle aura un chat.' }
                        },
                        {
                            text: { en: '3. They are happy. →', sw: '3. Wao ni wafurahi. →', fr: '3. Ils sont heureux. →' },
                            answer: { en: 'They will be happy.', sw: 'Watakuwa wafurahi.', fr: 'Ils seront heureux.' }
                        },
                        {
                            text: { en: '4. He has a bicycle. →', sw: '4. Yeye ana baiskeli. →', fr: '4. Il a un vélo. →' },
                            answer: { en: 'He will have a bicycle.', sw: 'Atakuwa na baiskeli.', fr: 'Il aura un vélo.' }
                        },
                        {
                            text: { en: '5. We are late. →', sw: '5. Sisi tumechelewa. →', fr: '5. Nous sommes en retard. →' },
                            answer: { en: 'We will be late.', sw: 'Tutakuwa wamechelewa.', fr: 'Nous serons en retard.' }
                        },
                        {
                            text: { en: '6. I have a pen. →', sw: '6. Mimi nina kalamu. →', fr: '6. J\'ai un stylo. →' },
                            answer: { en: 'I will have a pen.', sw: 'Nitakuwa na kalamu.', fr: 'J\'aurai un stylo.' }
                        },
                        {
                            text: { en: '7. You are my friend. →', sw: '7. Wewe ni rafiki yangu. →', fr: '7. Tu es mon ami. →' },
                            answer: { en: 'You will be my friend.', sw: 'Utakuwa rafiki yangu.', fr: 'Tu seras mon ami.' }
                        },
                        {
                            text: { en: '8. She has a book. →', sw: '8. Yeye ana kitabu. →', fr: '8. Elle a un livre. →' },
                            answer: { en: 'She will have a book.', sw: 'Atakuwa na kitabu.', fr: 'Elle aura un livre.' }
                        },
                        {
                            text: { en: '9. We are tired. →', sw: '9. Sisi tuko wachovu. →', fr: '9. Nous sommes fatigués. →' },
                            answer: { en: 'We will be tired.', sw: 'Tutakuwa wachovu.', fr: 'Nous serons fatigués.' }
                        },
                        {
                            text: { en: '10. He has a car. →', sw: '10. Yeye ana gari. →', fr: '10. Il a une voiture. →' },
                            answer: { en: 'He will have a car.', sw: 'Atakuwa na gari.', fr: 'Il aura une voiture.' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'QUESTION 6: READING TIME AND COUNTING (10 marks)',
                        sw: 'SWALI 6: KUSOMA SAA NA KUHESABU (Alama 10)',
                        fr: 'QUESTION 6: LIRE L\'HEURE ET COMPTER (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: 'A. Write the time in words:\n1. 3:15 →', sw: 'A. Andika saa kwa maneno:\n1. 3:15 →', fr: 'A. Écrivez l\'heure en mots:\n1. 3:15 →' },
                            answer: { en: 'Quarter past three / Three fifteen', sw: 'Robo ya nne / Saa tatu na robo', fr: 'Trois heures quinze / Quart après trois' }
                        },
                        {
                            text: { en: '2. 12:45 →', sw: '2. 12:45 →', fr: '2. 12:45 →' },
                            answer: { en: 'Quarter to one / Twelve forty-five', sw: 'Robo ya kwanza / Saa kumi na mbili arobaini na tano', fr: 'Une heure moins le quart / Douze heures quarante-cinq' }
                        },
                        {
                            text: { en: '3. 7:30 →', sw: '3. 7:30 →', fr: '3. 7:30 →' },
                            answer: { en: 'Half past seven / Seven thirty', sw: 'Nusu ya nane / Saa saba na nusu', fr: 'Sept heures et demie / Sept heures trente' }
                        },
                        {
                            text: { en: '4. 9:00 →', sw: '4. 9:00 →', fr: '4. 9:00 →' },
                            answer: { en: 'Nine o\'clock', sw: 'Saa tisa', fr: 'Neuf heures' }
                        },
                        {
                            text: { en: '5. 11:20 →', sw: '5. 11:20 →', fr: '5. 11:20 →' },
                            answer: { en: 'Twenty past eleven / Eleven twenty', sw: 'Saa kumi na moja na dakika ishirini', fr: 'Onze heures vingt / Vingt après onze' }
                        },
                        {
                            text: { en: 'B. Write numbers in words:\n6. 27 →', sw: 'B. Andika nambari kwa maneno:\n6. 27 →', fr: 'B. Écrivez les nombres en mots:\n6. 27 →' },
                            answer: { en: 'Twenty-seven', sw: 'Ishirini na saba', fr: 'Vingt-sept' }
                        },
                        {
                            text: { en: '7. 103 →', sw: '7. 103 →', fr: '7. 103 →' },
                            answer: { en: 'One hundred and three', sw: 'Mia moja na tatu', fr: 'Cent trois' }
                        },
                        {
                            text: { en: '8. 450 →', sw: '8. 450 →', fr: '8. 450 →' },
                            answer: { en: 'Four hundred and fifty', sw: 'Mia nne na hamsini', fr: 'Quatre cent cinquante' }
                        },
                        {
                            text: { en: '9. 125 →', sw: '9. 125 →', fr: '9. 125 →' },
                            answer: { en: 'One hundred and twenty-five', sw: 'Mia moja ishirini na tano', fr: 'Cent vingt-cinq' }
                        },
                        {
                            text: { en: '10. 360 →', sw: '10. 360 →', fr: '10. 360 →' },
                            answer: { en: 'Three hundred and sixty', sw: 'Mia tatu na sitini', fr: 'Trois cent soixante' }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'QUESTION 7: ORDINAL AND CARDINAL NUMBERS (10 marks)\nWrite the ordinal numbers (1–10) and the cardinal numbers (11–20) (1 mark each):',
                        sw: 'SWALI 7: NAMBARI ZA KIASHIRIA NA NAMBARI ZA MSINGI (Alama 10)\nAndika nambari za kiashiria (1–10) na nambari za msingi (11–20) (alama 1 kwa kila swali):',
                        fr: 'QUESTION 7: NOMBRES ORDINAUX ET CARDINAUX (10 points)\nÉcrivez les nombres ordinaux (1–10) et les nombres cardinaux (11–20) (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. 1 →', sw: '1. 1 →', fr: '1. 1 →' },
                            answer: { en: 'First', sw: 'Kwanza', fr: 'Premier' }
                        },
                        {
                            text: { en: '2. 2 →', sw: '2. 2 →', fr: '2. 2 →' },
                            answer: { en: 'Second', sw: 'Pili', fr: 'Deuxième' }
                        },
                        {
                            text: { en: '3. 3 →', sw: '3. 3 →', fr: '3. 3 →' },
                            answer: { en: 'Third', sw: 'Tatu', fr: 'Troisième' }
                        },
                        {
                            text: { en: '4. 4 →', sw: '4. 4 →', fr: '4. 4 →' },
                            answer: { en: 'Fourth', sw: 'Nne', fr: 'Quatrième' }
                        },
                        {
                            text: { en: '5. 5 →', sw: '5. 5 →', fr: '5. 5 →' },
                            answer: { en: 'Fifth', sw: 'Tano', fr: 'Cinquième' }
                        },
                        {
                            text: { en: '6. 11 →', sw: '6. 11 →', fr: '6. 11 →' },
                            answer: { en: 'Eleven', sw: 'Kumi na moja', fr: 'Onze' }
                        },
                        {
                            text: { en: '7. 12 →', sw: '7. 12 →', fr: '7. 12 →' },
                            answer: { en: 'Twelve', sw: 'Kumi na mbili', fr: 'Douze' }
                        },
                        {
                            text: { en: '8. 13 →', sw: '8. 13 →', fr: '8. 13 →' },
                            answer: { en: 'Thirteen', sw: 'Kumi na tatu', fr: 'Treize' }
                        },
                        {
                            text: { en: '9. 14 →', sw: '9. 14 →', fr: '9. 14 →' },
                            answer: { en: 'Fourteen', sw: 'Kumi na nne', fr: 'Quatorze' }
                        },
                        {
                            text: { en: '10. 15 →', sw: '10. 15 →', fr: '10. 15 →' },
                            answer: { en: 'Fifteen', sw: 'Kumi na tano', fr: 'Quinze' }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'QUESTION 8: EXPRESSING FEELINGS (10 marks)\nWrite one sentence expressing each feeling (1 mark each):',
                        sw: 'SWALI 8: KUELEZA HISIA (Alama 10)\nAndika sentensi moja kuonyesha kila hisia (alama 1 kwa kila swali):',
                        fr: 'QUESTION 8: EXPRIMER DES SENTIMENTS (10 points)\nÉcrivez une phrase exprimant chaque sentiment (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Happiness →', sw: '1. Furaha →', fr: '1. Bonheur →' },
                            answer: { en: '[Student writes a sentence about happiness]', sw: '[Mwanafunzi anaandika sentensi kuhusu furaha]', fr: '[L\'étudiant écrit une phrase sur le bonheur]' }
                        },
                        {
                            text: { en: '2. Sadness →', sw: '2. Huzuni →', fr: '2. Tristesse →' },
                            answer: { en: '[Student writes a sentence about sadness]', sw: '[Mwanafunzi anaandika sentensi kuhusu huzuni]', fr: '[L\'étudiant écrit une phrase sur la tristesse]' }
                        },
                        {
                            text: { en: '3. Sympathy →', sw: '3. Huruma →', fr: '3. Sympathie →' },
                            answer: { en: '[Student writes a sentence about sympathy]', sw: '[Mwanafunzi anaandika sentensi kuhusu huruma]', fr: '[L\'étudiant écrit une phrase sur la sympathie]' }
                        },
                        {
                            text: { en: '4. Excitement →', sw: '4. Msisimko →', fr: '4. Excitation →' },
                            answer: { en: '[Student writes a sentence about excitement]', sw: '[Mwanafunzi anaandika sentensi kuhusu msisimko]', fr: '[L\'étudiant écrit une phrase sur l\'excitation]' }
                        },
                        {
                            text: { en: '5. Anger →', sw: '5. Hasira →', fr: '5. Colère →' },
                            answer: { en: '[Student writes a sentence about anger]', sw: '[Mwanafunzi anaandika sentensi kuhusu hasira]', fr: '[L\'étudiant écrit une phrase sur la colère]' }
                        },
                        {
                            text: { en: '6. Fear →', sw: '6. Hofu →', fr: '6. Peur →' },
                            answer: { en: '[Student writes a sentence about fear]', sw: '[Mwanafunzi anaandika sentensi kuhusu hofu]', fr: '[L\'étudiant écrit une phrase sur la peur]' }
                        },
                        {
                            text: { en: '7. Love →', sw: '7. Upendo →', fr: '7. Amour →' },
                            answer: { en: '[Student writes a sentence about love]', sw: '[Mwanafunzi anaandika sentensi kuhusu upendo]', fr: '[L\'étudiant écrit une phrase sur l\'amour]' }
                        },
                        {
                            text: { en: '8. Surprise →', sw: '8. Mshangao →', fr: '8. Surprise →' },
                            answer: { en: '[Student writes a sentence about surprise]', sw: '[Mwanafunzi anaandika sentensi kuhusu mshangao]', fr: '[L\'étudiant écrit une phrase sur la surprise]' }
                        },
                        {
                            text: { en: '9. Pride →', sw: '9. Kiburi (chanya) →', fr: '9. Fierté →' },
                            answer: { en: '[Student writes a sentence about pride]', sw: '[Mwanafunzi anaandika sentensi kuhusu kiburi chanya]', fr: '[L\'étudiant écrit une phrase sur la fierté]' }
                        },
                        {
                            text: { en: '10. Shame →', sw: '10. Aibu →', fr: '10. Honte →' },
                            answer: { en: '[Student writes a sentence about shame]', sw: '[Mwanafunzi anaandika sentensi kuhusu aibu]', fr: '[L\'étudiant écrit une phrase sur la honte]' }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'QUESTION 9: FAMILY MEMBERS (10 marks)\nFill in the blanks (1 mark each):',
                        sw: 'SWALI 9: WANAJAMII (Alama 10)\nJaza nafasi zilizo wazi (alama 1 kwa kila swali):',
                        fr: 'QUESTION 9: MEMBRES DE LA FAMILLE (10 points)\nRemplissez les blancs (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. My father\'s brother is my _______.', sw: '1. Ndugu wa baba yangu ni _______ yangu.', fr: '1. Le frère de mon père est mon _______.' },
                            answer: { en: 'uncle', sw: 'mjomba', fr: 'oncle' }
                        },
                        {
                            text: { en: '2. My mother\'s sister is my _______.', sw: '2. Dada wa mama yangu ni _______ yangu.', fr: '2. La sœur de ma mère est ma _______.' },
                            answer: { en: 'aunt', sw: 'shangazi', fr: 'tante' }
                        },
                        {
                            text: { en: '3. My parents have two children. My brother and I are _______.', sw: '3. Wazazi wangu wana watoto wawili. Ndugu yangu na mimi ni _______.', fr: '3. Mes parents ont deux enfants. Mon frère et moi sommes _______.' },
                            answer: { en: 'siblings', sw: 'ndugu', fr: 'frères et sœurs' }
                        },
                        {
                            text: { en: '4. My father is my _______.', sw: '4. Baba yangu ni _______ yangu.', fr: '4. Mon père est mon _______.' },
                            answer: { en: 'parent', sw: 'mzazi', fr: 'parent' }
                        },
                        {
                            text: { en: '5. My mother is my _______.', sw: '5. Mama yangu ni _______ yangu.', fr: '5. Ma mère est ma _______.' },
                            answer: { en: 'parent', sw: 'mzazi', fr: 'parent' }
                        },
                        {
                            text: { en: '6. My sister is my _______.', sw: '6. Dada yangu ni _______ yangu.', fr: '6. Ma sœur est ma _______.' },
                            answer: { en: 'sibling', sw: 'ndugu', fr: 'sœur' }
                        },
                        {
                            text: { en: '7. My grandfather is my _______.', sw: '7. Babu yangu ni _______ yangu.', fr: '7. Mon grand-père est mon _______.' },
                            answer: { en: 'grandfather / grandparent', sw: 'babu', fr: 'grand-père' }
                        },
                        {
                            text: { en: '8. My grandmother is my _______.', sw: '8. Bibi yangu ni _______ yangu.', fr: '8. Ma grand-mère est ma _______.' },
                            answer: { en: 'grandmother / grandparent', sw: 'bibi', fr: 'grand-mère' }
                        },
                        {
                            text: { en: '9. My uncle is my _______.', sw: '9. Mjomba wangu ni _______ yangu.', fr: '9. Mon oncle est mon _______.' },
                            answer: { en: 'relative', sw: 'jamaa', fr: 'parent' }
                        },
                        {
                            text: { en: '10. My aunt is my _______.', sw: '10. Shangazi yangu ni _______ yangu.', fr: '10. Ma tante est ma _______.' },
                            answer: { en: 'relative', sw: 'jamaa', fr: 'parente' }
                        }
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'QUESTION 10: PLACES AND DAILY LIFE (10 marks)\nWrite the correct place (1 mark each):',
                        sw: 'SWALI 10: MAHALI NA MAISHA YA KILA SIKU (Alama 10)\nAndika mahali sahihi (alama 1 kwa kila swali):',
                        fr: 'QUESTION 10: LIEUX ET VIE QUOTIDIENNE (10 points)\nÉcrivez le bon endroit (1 point par question):'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Where do students learn? →', sw: '1. Wanafunzi hujifunza wapi? →', fr: '1. Où les étudiants apprennent-ils? →' },
                            answer: { en: 'School', sw: 'Shule', fr: 'École' }
                        },
                        {
                            text: { en: '2. Where do sick people go? →', sw: '2. Wagonjwa huenda wapi? →', fr: '2. Où vont les malades? →' },
                            answer: { en: 'Hospital', sw: 'Hospitali', fr: 'Hôpital' }
                        },
                        {
                            text: { en: '3. Where do people buy food? →', sw: '3. Watu hununua chakula wapi? →', fr: '3. Où les gens achètent-ils de la nourriture? →' },
                            answer: { en: 'Market / Supermarket', sw: 'Soko / Duka', fr: 'Marché / Supermarché' }
                        },
                        {
                            text: { en: '4. Where do we pray? →', sw: '4. Tunasali wapi? →', fr: '4. Où prions-nous? →' },
                            answer: { en: 'Church / Mosque / Temple', sw: 'Kanisa / Msikiti / Hekalu', fr: 'Église / Mosquée / Temple' }
                        },
                        {
                            text: { en: '5. Where do we sleep at night? →', sw: '5. Tunakolala usiku wapi? →', fr: '5. Où dormons-nous la nuit? →' },
                            answer: { en: 'Bedroom / Home', sw: 'Chumba cha kulala / Nyumba', fr: 'Chambre / Maison' }
                        },
                        {
                            text: { en: '6. Where do we go to watch movies? →', sw: '6. Tunaenda wapi kuangalia sinema? →', fr: '6. Où allons-nous regarder des films? →' },
                            answer: { en: 'Cinema / Movie theater', sw: 'Sinema', fr: 'Cinéma' }
                        },
                        {
                            text: { en: '7. Where do we play football? →', sw: '7. Tunaenda wapi kucheza mpira? →', fr: '7. Où jouons-nous au football? →' },
                            answer: { en: 'Stadium / Field', sw: 'Uwanja', fr: 'Stade / Terrain' }
                        },
                        {
                            text: { en: '8. Where do we study books quietly? →', sw: '8. Tunasoma vitabu kimya kimya wapi? →', fr: '8. Où étudions-nous les livres en silence? →' },
                            answer: { en: 'Library', sw: 'Maktaba', fr: 'Bibliothèque' }
                        },
                        {
                            text: { en: '9. Where do we cross the road safely? →', sw: '9. Tunavuka barabara kwa usalama wapi? →', fr: '9. Où traversons-nous la route en sécurité? →' },
                            answer: { en: 'Zebra crossing / Pedestrian crossing', sw: 'Kivuko cha watu', fr: 'Passage piéton' }
                        },
                        {
                            text: { en: '10. Where do we keep our money safely? →', sw: '10. Tunahifadhi pesa zetu kwa usalama wapi? →', fr: '10. Où gardons-nous notre argent en sécurité? →' },
                            answer: { en: 'Bank', sw: 'Benki', fr: 'Banque' }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS:\n• Answer all questions.\n• For multiple-choice questions, circle the correct answer.\n• Write your answers clearly.\n• Total marks: 100',
                sw: 'MAELEKEZO:\n• Jibu maswali yote.\n• Kwa maswali ya chaguo nyingi, zungushia duara jibu sahihi.\n• Andika majibu yako kwa uwazi.\n• Jumla ya alama: 100',
                fr: 'INSTRUCTIONS:\n• Répondez à toutes les questions.\n• Pour les questions à choix multiples, encerclez la bonne réponse.\n• Écrivez vos réponses clairement.\n• Total des points: 100'
            }
        },
        
        'test_2': {
            id: 'english_test_2',
            title: {
                en: 'CHARLES ACADEMY – ENGLISH TEST 2',
                sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA 2',
                fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS 2'
            },
            time: '1 Hour',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'QUESTION 1: SENTENCE TRANSFORMATION (10 marks)',
                        sw: 'SWALI 1: MABADILIKO YA SENTENSI (Alama 10)',
                        fr: 'QUESTION 1: TRANSFORMATION DE PHRASES (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I am a student. → Rewrite in past tense:', sw: '1. Mimi ni mwanafunzi. → Andika kwa wakati uliopita:', fr: '1. Je suis étudiant. → Réécrivez au passé:' },
                            answer: { en: 'I was a student.', sw: 'Nilikuwa mwanafunzi.', fr: 'J\'étais étudiant.' }
                        },
                        {
                            text: { en: '2. She has a bicycle. → Rewrite in future tense:', sw: '2. Yeye ana baiskeli. → Andika kwa wakati ujao:', fr: '2. Elle a un vélo. → Réécrivez au futur:' },
                            answer: { en: 'She will have a bicycle.', sw: 'Atakuwa na baiskeli.', fr: 'Elle aura un vélo.' }
                        },
                        {
                            text: { en: '3. They are happy. → Rewrite in negative form:', sw: '3. Wao ni wafurahi. → Andika kwa umbo hasi:', fr: '3. Ils sont heureux. → Réécrivez à la forme négative:' },
                            answer: { en: 'They are not happy.', sw: 'Wao si wafurahi.', fr: 'Ils ne sont pas heureux.' }
                        },
                        {
                            text: { en: '4. If I ____ (be) rich, I would travel the world:', sw: '4. Kama mimi ____ (kuwa) tajiri, ningesafiri ulimwenguni:', fr: '4. Si je ____ (être) riche, je voyagerais dans le monde:' },
                            answer: { en: 'were', sw: 'ningekuwa', fr: 'étais' }
                        },
                        {
                            text: { en: '5. He drinks milk every morning. → Rewrite in past tense:', sw: '5. Yeye hunywa maziwa kila asubuhi. → Andika kwa wakati uliopita:', fr: '5. Il boit du lait chaque matin. → Réécrivez au passé:' },
                            answer: { en: 'He drank milk every morning.', sw: 'Alikunywa maziwa kila asubuhi.', fr: 'Il buvait du lait chaque matin.' }
                        },
                        {
                            text: { en: '6. I ____ (study) English now:', sw: '6. Mimi ____ (soma) Kiingereza sasa:', fr: '6. Je ____ (étudier) l\'anglais maintenant:' },
                            answer: { en: 'am studying', sw: 'ninasoma', fr: 'suis en train d\'étudier' }
                        },
                        {
                            text: { en: '7. We play football. → Rewrite using subjunctive: "If we…":', sw: '7. Sisi hucheza mpira. → Andika kwa kutumia kiashiria: "Kama sisi…":', fr: '7. Nous jouons au football. → Réécrivez en utilisant le subjonctif: "Si nous…":' },
                            answer: { en: 'If we played football, we would enjoy it.', sw: 'Kama sisi tungecheza mpira, tungefurahiya.', fr: 'Si nous jouions au football, nous l\'apprécierions.' }
                        },
                        {
                            text: { en: '8. She goes to school every day. → Rewrite in future tense:', sw: '8. Yeye huenda shuleni kila siku. → Andika kwa wakati ujao:', fr: '8. Elle va à l\'école chaque jour. → Réécrivez au futur:' },
                            answer: { en: 'She will go to school every day.', sw: 'Ataenda shuleni kila siku.', fr: 'Elle ira à l\'école chaque jour.' }
                        },
                        {
                            text: { en: '9. They would pass the test if they ____ (study) harder:', sw: '9. Wangepita mtihani kama wangeli ____ (soma) kwa bidii:', fr: '9. Ils réussiraient le test s\'ils ____ (étudier) plus dur:' },
                            answer: { en: 'studied', sw: 'wanasoma', fr: 'étudiaient' }
                        },
                        {
                            text: { en: '10. I like apples. → Rewrite in negative form:', sw: '10. Mimi napenda maembe. → Andika kwa umbo hasi:', fr: '10. J\'aime les pommes. → Réécrivez à la forme négative:' },
                            answer: { en: 'I do not like apples.', sw: 'Sipendi maembe.', fr: 'Je n\'aime pas les pommes.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'QUESTION 2: IDENTIFY NOUNS (10 marks)',
                        sw: 'SWALI 2: TAMBUA NOMINO (Alama 10)',
                        fr: 'QUESTION 2: IDENTIFIEZ LES NOMS (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Happiness cannot be bought → Type of noun:', sw: '1. Furaha haiwezi kununuliwa → Aina ya nomino:', fr: '1. Le bonheur ne peut pas être acheté → Type de nom:' },
                            answer: { en: 'Abstract noun', sw: 'Nomino ya dhana', fr: 'Nom abstrait' }
                        },
                        {
                            text: { en: '2. London is the capital of England → Type of noun:', sw: '2. Londoni ni mji mkuu wa Uingereza → Aina ya nomino:', fr: '2. Londres est la capitale de l\'Angleterre → Type de nom:' },
                            answer: { en: 'Proper noun', sw: 'Nomino binafsi', fr: 'Nom propre' }
                        },
                        {
                            text: { en: '3. The team won the match → Type of noun:', sw: '3. Timu ilishinda mechi → Aina ya nomino:', fr: '3. L\'équipe a gagné le match → Type de nom:' },
                            answer: { en: 'Collective noun', sw: 'Nomino ya jamii', fr: 'Nom collectif' }
                        },
                        {
                            text: { en: '4. I have two books → Type of noun:', sw: '4. Mimi nina vitabu viwili → Aina ya nomino:', fr: '4. J\'ai deux livres → Type de nom:' },
                            answer: { en: 'Common noun / Countable noun', sw: 'Nomino ya kawaida / Nomino inayoweza kuhesabiwa', fr: 'Nom commun / Nom dénombrable' }
                        },
                        {
                            text: { en: '5. Courage is important → Type of noun:', sw: '5. Ujasiri ni muhimu → Aina ya nomino:', fr: '5. Le courage est important → Type de nom:' },
                            answer: { en: 'Abstract noun', sw: 'Nomino ya dhana', fr: 'Nom abstrait' }
                        },
                        {
                            text: { en: '6. My mother is a doctor → Type of noun:', sw: '6. Mama yangu ni daktari → Aina ya nomino:', fr: '6. Ma mère est médecin → Type de nom:' },
                            answer: { en: 'Common noun', sw: 'Nomino ya kawaida', fr: 'Nom commun' }
                        },
                        {
                            text: { en: '7. Water is essential for life → Type of noun:', sw: '7. Maji ni muhimu kwa maisha → Aina ya nomino:', fr: '7. L\'eau est essentielle à la vie → Type de nom:' },
                            answer: { en: 'Uncountable noun', sw: 'Nomino isiyoweza kuhesabiwa', fr: 'Nom indénombrable' }
                        },
                        {
                            text: { en: '8. A flock of birds is flying → Type of noun:', sw: '8. Kundi la ndege linapaa → Aina ya nomino:', fr: '8. Un troupeau d\'oiseaux vole → Type de nom:' },
                            answer: { en: 'Collective noun', sw: 'Nomino ya jamii', fr: 'Nom collectif' }
                        },
                        {
                            text: { en: '9. I ate an apple → Type of noun:', sw: '9. Nilila embe → Aina ya nomino:', fr: '9. J\'ai mangé une pomme → Type de nom:' },
                            answer: { en: 'Common noun / Countable noun', sw: 'Nomino ya kawaida / Nomino inayoweza kuhesabiwa', fr: 'Nom commun / Nom dénombrable' }
                        },
                        {
                            text: { en: '10. Charles Academy is in Burundi → Type of noun:', sw: '10. Charles Academy iko Burundi → Aina ya nomino:', fr: '10. Charles Academy est au Burundi → Type de nom:' },
                            answer: { en: 'Proper noun', sw: 'Nomino binafsi', fr: 'Nom propre' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'QUESTION 3: FILL IN THE BLANKS (10 marks)',
                        sw: 'SWALI 3: JAZA NAFASI ZILIZO WAZI (Alama 10)',
                        fr: 'QUESTION 3: REMPLISSEZ LES BLANCS (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I ____ (be) at school yesterday →', sw: '1. Mimi ____ (kuwa) shuleni jana →', fr: '1. Je ____ (être) à l\'école hier →' },
                            answer: { en: 'was', sw: 'nilikuwa', fr: 'étais' }
                        },
                        {
                            text: { en: '2. She ____ (have) a cat now →', sw: '2. Yeye ____ (kuwa na) paka sasa →', fr: '2. Elle ____ (avoir) un chat maintenant →' },
                            answer: { en: 'has', sw: 'ana', fr: 'a' }
                        },
                        {
                            text: { en: '3. We ____ (go) to the park tomorrow →', sw: '3. Sisi ____ (kwenda) bustani kesho →', fr: '3. Nous ____ (aller) au parc demain →' },
                            answer: { en: 'will go', sw: 'tutaenda', fr: 'irons' }
                        },
                        {
                            text: { en: '4. If it ____ (rain) today, we will stay home →', sw: '4. Kama ita ____ (kunyesha) leo, tutakaa nyumbani →', fr: '4. S\'il ____ (pleuvoir) aujourd\'hui, nous resterons à la maison →' },
                            answer: { en: 'rains', sw: 'kunyesha', fr: 'pleut' }
                        },
                        {
                            text: { en: '5. They ____ (play) football last week →', sw: '5. Wao ____ (cheza) mpira wiki iliyopita →', fr: '5. Ils ____ (jouer) au football la semaine dernière →' },
                            answer: { en: 'played', sw: 'walicheza', fr: 'ont joué' }
                        },
                        {
                            text: { en: '6. I ____ (write) a letter at this moment →', sw: '6. Mimi ____ (andika) barua kwa sasa →', fr: '6. Je ____ (écrire) une lettre en ce moment →' },
                            answer: { en: 'am writing', sw: 'ninaandika', fr: 'suis en train d\'écrire' }
                        },
                        {
                            text: { en: '7. He ____ (drink) water every morning →', sw: '7. Yeye ____ (kunywa) maji kila asubuhi →', fr: '7. Il ____ (boire) de l\'eau chaque matin →' },
                            answer: { en: 'drinks', sw: 'hunywa', fr: 'boit' }
                        },
                        {
                            text: { en: '8. You ____ (study) English yesterday →', sw: '8. Wewe ____ (soma) Kiingereza jana →', fr: '8. Tu ____ (étudier) l\'anglais hier →' },
                            answer: { en: 'studied', sw: 'ulisoma', fr: 'as étudié' }
                        },
                        {
                            text: { en: '9. If I ____ (know) the answer, I would tell you →', sw: '9. Kama mimi ____ (kujua) jibu, ningekwambia →', fr: '9. Si je ____ (savoir) la réponse, je te le dirais →' },
                            answer: { en: 'knew', sw: 'ningekujua', fr: 'savais' }
                        },
                        {
                            text: { en: '10. She ____ (read) a book tomorrow →', sw: '10. Yeye ____ (kusoma) kitabu kesho →', fr: '10. Elle ____ (lire) un livre demain →' },
                            answer: { en: 'will read', sw: 'atasoma', fr: 'lira' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'QUESTION 4: MULTIPLE CHOICE (10 marks)',
                        sw: 'SWALI 4: CHAGUO NYINGI (Alama 10)',
                        fr: 'QUESTION 4: CHOIX MULTIPLES (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Which is an abstract noun?\n☐ A) Chair ☐ B) Happiness ☐ C) Dog → Answer:', sw: '1. Ni nani nomino ya dhana?\n☐ A) Kit ☐ B) Furaha ☐ C) Mbwa → Jibu:', fr: '1. Quel est un nom abstrait?\n☐ A) Chaise ☐ B) Bonheur ☐ C) Chien → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '2. Which is a collective noun?\n☐ A) Team ☐ B) Table ☐ C) Apple → Answer:', sw: '2. Ni nani nomino ya jamii?\n☐ A) Timu ☐ B) Meza ☐ C) Embe → Jibu:', fr: '2. Quel est un nom collectif?\n☐ A) Équipe ☐ B) Table ☐ C) Pomme → Réponse:' },
                            answer: { en: 'A', sw: 'A', fr: 'A' }
                        },
                        {
                            text: { en: '3. He ____ to school yesterday.\n☐ A) go ☐ B) went ☐ C) goes → Answer:', sw: '3. Yeye ____ shuleni jana.\n☐ A) kwenda ☐ B) alikwenda ☐ C) huenda → Jibu:', fr: '3. Il ____ à l\'école hier.\n☐ A) aller ☐ B) est allé ☐ C) va → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '4. They ____ studying English now.\n☐ A) is ☐ B) are ☐ C) am → Answer:', sw: '4. Wao ____ kujifunza Kiingereza sasa.\n☐ A) ni ☐ B) ni ☐ C) ni → Jibu:', fr: '4. Ils ____ étudier l\'anglais maintenant.\n☐ A) est ☐ B) sont ☐ C) suis → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '5. If I ____ rich, I would buy a house.\n☐ A) am ☐ B) was ☐ C) be → Answer:', sw: '5. Kama mimi ____ tajiri, ningenunua nyumba.\n☐ A) ni ☐ B) nilikuwa ☐ C) kuwa → Jibu:', fr: '5. Si je ____ riche, j\'achèterais une maison.\n☐ A) suis ☐ B) étais ☐ C) être → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '6. She ____ a new bicycle next week.\n☐ A) has ☐ B) will have ☐ C) had → Answer:', sw: '6. Yeye ____ baiskeli mpya wiki ijayo.\n☐ A) ana ☐ B) atakuwa na ☐ C) alikuwa na → Jibu:', fr: '6. Elle ____ un nouveau vélo la semaine prochaine.\n☐ A) a ☐ B) aura ☐ C) avait → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '7. Which is a proper noun?\n☐ A) cat ☐ B) London ☐ C) table → Answer:', sw: '7. Ni nani nomino binafsi?\n☐ A) paka ☐ B) Londoni ☐ C) meza → Jibu:', fr: '7. Quel est un nom propre?\n☐ A) chat ☐ B) Londres ☐ C) table → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '8. Courage and love are examples of ____ nouns.\n☐ A) concrete ☐ B) abstract ☐ C) collective → Answer:', sw: '8. Ujasiri na upendo ni mifano ya nomino ____.\n☐ A) halisi ☐ B) za dhana ☐ C) za jamii → Jibu:', fr: '8. Le courage et l\'amour sont des exemples de noms ____.\n☐ A) concrets ☐ B) abstraits ☐ C) collectifs → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '9. I ____ dinner yesterday.\n☐ A) eat ☐ B) ate ☐ C) will eat → Answer:', sw: '9. Mimi ____ chakula cha jioni jana.\n☐ A) kula ☐ B) nilikula ☐ C) nitakula → Jibu:', fr: '9. J\'____ dîner hier.\n☐ A) manger ☐ B) ai mangé ☐ C) mangerai → Réponse:' },
                            answer: { en: 'B', sw: 'B', fr: 'B' }
                        },
                        {
                            text: { en: '10. They ____ to the market tomorrow.\n☐ A) go ☐ B) went ☐ C) will go → Answer:', sw: '10. Wao ____ sokoni kesho.\n☐ A) kwenda ☐ B) walikwenda ☐ C) wataenda → Jibu:', fr: '10. Ils ____ au marché demain.\n☐ A) aller ☐ B) sont allés ☐ C) iront → Réponse:' },
                            answer: { en: 'C', sw: 'C', fr: 'C' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'QUESTION 5: SENTENCE COMPLETION (10 marks)',
                        sw: 'SWALI 5: UKAMILISHAJI WA SENTENSI (Alama 10)',
                        fr: 'QUESTION 5: COMPLÉTION DE PHRASES (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I would help you if I ____ (know) the answer →', sw: '1. Ningekusaidia kama ningeli ____ (kujua) jibu →', fr: '1. Je t\'aiderais si je ____ (savoir) la réponse →' },
                            answer: { en: 'knew', sw: 'kujua', fr: 'savais' }
                        },
                        {
                            text: { en: '2. If she ____ (study) hard, she will pass →', sw: '2. Kama yeye ____ (soma) kwa bidii, atapita →', fr: '2. Si elle ____ (étudier) dur, elle réussira →' },
                            answer: { en: 'studies', sw: 'anasoma', fr: 'étudie' }
                        },
                        {
                            text: { en: '3. We ____ (be) happy tomorrow →', sw: '3. Sisi ____ (kuwa) wafurahi kesho →', fr: '3. Nous ____ (être) heureux demain →' },
                            answer: { en: 'will be', sw: 'tutakuwa', fr: 'serons' }
                        },
                        {
                            text: { en: '4. He ____ (eat) breakfast yesterday →', sw: '4. Yeye ____ (kula) kifungua kinywa jana →', fr: '4. Il ____ (manger) le petit-déjeuner hier →' },
                            answer: { en: 'ate', sw: 'alikula', fr: 'a mangé' }
                        },
                        {
                            text: { en: '5. They ____ (go) to school every day →', sw: '5. Wao ____ (kwenda) shuleni kila siku →', fr: '5. Ils ____ (aller) à l\'école chaque jour →' },
                            answer: { en: 'go', sw: 'huenda', fr: 'vont' }
                        },
                        {
                            text: { en: '6. I ____ (write) a letter now →', sw: '6. Mimi ____ (andika) barua sasa →', fr: '6. Je ____ (écrire) une lettre maintenant →' },
                            answer: { en: 'am writing', sw: 'ninaandika', fr: 'suis en train d\'écrire' }
                        },
                        {
                            text: { en: '7. She would travel if she ____ (have) money →', sw: '7. Yeye angesafiri kama ange ____ (kuwa na) pesa →', fr: '7. Elle voyagerait si elle ____ (avoir) de l\'argent →' },
                            answer: { en: 'had', sw: 'kuwa na', fr: 'avait' }
                        },
                        {
                            text: { en: '8. You ____ (drink) milk every morning →', sw: '8. Wewe ____ (kunywa) maziwa kila asubuhi →', fr: '8. Tu ____ (boire) du lait chaque matin →' },
                            answer: { en: 'drink', sw: 'hunywa', fr: 'bois' }
                        },
                        {
                            text: { en: '9. The students ____ (play) football last week →', sw: '9. Wanafunzi ____ (cheza) mpira wiki iliyopita →', fr: '9. Les étudiants ____ (jouer) au football la semaine dernière →' },
                            answer: { en: 'played', sw: 'walicheza', fr: 'ont joué' }
                        },
                        {
                            text: { en: '10. I ____ (like) apples very much →', sw: '10. Mimi ____ (penda) maembe sana →', fr: '10. J\'____ (aimer) beaucoup les pommes →' },
                            answer: { en: 'like', sw: 'napenda', fr: 'aime' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'QUESTION 6: NOUN CLASSIFICATION (10 marks)',
                        sw: 'SWALI 6: UAINISHI WA NOMINO (Alama 10)',
                        fr: 'QUESTION 6: CLASSIFICATION DES NOMS (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Rice → Countable / Uncountable / Collective → Answer:', sw: '1. Mchele → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '1. Riz → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '2. Apple → Countable / Uncountable / Collective → Answer:', sw: '2. Embe → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '2. Pomme → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Countable', sw: 'Inayoweza kuhesabiwa', fr: 'Dénombrable' }
                        },
                        {
                            text: { en: '3. Water → Countable / Uncountable / Collective → Answer:', sw: '3. Maji → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '3. Eau → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '4. Chair → Countable / Uncountable / Collective → Answer:', sw: '4. Kit → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '4. Chaise → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Countable', sw: 'Inayoweza kuhesabiwa', fr: 'Dénombrable' }
                        },
                        {
                            text: { en: '5. Sugar → Countable / Uncountable / Collective → Answer:', sw: '5. Sukari → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '5. Sucre → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '6. Book → Countable / Uncountable / Collective → Answer:', sw: '6. Kitabu → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '6. Livre → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Countable', sw: 'Inayoweza kuhesabiwa', fr: 'Dénombrable' }
                        },
                        {
                            text: { en: '7. Money → Countable / Uncountable / Collective → Answer:', sw: '7. Pesa → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '7. Argent → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '8. Dog → Countable / Uncountable / Collective → Answer:', sw: '8. Mbwa → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '8. Chien → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Countable', sw: 'Inayoweza kuhesabiwa', fr: 'Dénombrable' }
                        },
                        {
                            text: { en: '9. Milk → Countable / Uncountable / Collective → Answer:', sw: '9. Maziwa → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '9. Lait → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '10. Team → Countable / Uncountable / Collective → Answer:', sw: '10. Timu → Inayoweza kuhesabiwa / Isiyoweza kuhesabiwa / Ya jamii → Jibu:', fr: '10. Équipe → Dénombrable / Indénombrable / Collectif → Réponse:' },
                            answer: { en: 'Collective', sw: 'Ya jamii', fr: 'Collectif' }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'QUESTION 7: CORRECT THE SENTENCE (10 marks)',
                        sw: 'SWALI 7: SAHIHISHA SENTENSI (Alama 10)',
                        fr: 'QUESTION 7: CORRIGEZ LA PHRASE (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. He go to school yesterday →', sw: '1. Yeye kwenda shuleni jana →', fr: '1. Il aller à l\'école hier →' },
                            answer: { en: 'He went to school yesterday.', sw: 'Yeye alikwenda shuleni jana.', fr: 'Il est allé à l\'école hier.' }
                        },
                        {
                            text: { en: '2. She has two cat →', sw: '2. Yeye ana paka mbili →', fr: '2. Elle a deux chat →' },
                            answer: { en: 'She has two cats.', sw: 'Yeye ana paka wawili.', fr: 'Elle a deux chats.' }
                        },
                        {
                            text: { en: '3. I am go to the park tomorrow →', sw: '3. Mimi ni kwenda bustani kesho →', fr: '3. Je suis aller au parc demain →' },
                            answer: { en: 'I will go to the park tomorrow.', sw: 'Mimi nitaenda bustani kesho.', fr: 'J\'irai au parc demain.' }
                        },
                        {
                            text: { en: '4. They is happy now →', sw: '4. Wao ni furaha sasa →', fr: '4. Ils est heureux maintenant →' },
                            answer: { en: 'They are happy now.', sw: 'Wao ni wafurahi sasa.', fr: 'Ils sont heureux maintenant.' }
                        },
                        {
                            text: { en: '5. If it rains tomorrow, we will stayed home →', sw: '5. Kama itanyesha kesho, sisi tutakaa nyumbani →', fr: '5. S\'il pleut demain, nous resterons à la maison →' },
                            answer: { en: 'If it rains tomorrow, we will stay home.', sw: 'Kama itanyesha kesho, tutakaa nyumbani.', fr: 'S\'il pleut demain, nous resterons à la maison.' }
                        },
                        {
                            text: { en: '6. We goes to school every day →', sw: '6. Sisi huenda shuleni kila siku →', fr: '6. Nous va à l\'école chaque jour →' },
                            answer: { en: 'We go to school every day.', sw: 'Sisi huenda shuleni kila siku.', fr: 'Nous allons à l\'école chaque jour.' }
                        },
                        {
                            text: { en: '7. I writing a letter now →', sw: '7. Mimi kuandika barua sasa →', fr: '7. Je écrire une lettre maintenant →' },
                            answer: { en: 'I am writing a letter now.', sw: 'Mimi ninaandika barua sasa.', fr: 'Je suis en train d\'écrire une lettre maintenant.' }
                        },
                        {
                            text: { en: '8. She drinked water yesterday →', sw: '8. Yeye kunywa maji jana →', fr: '8. Elle a bu de l\'eau hier →' },
                            answer: { en: 'She drank water yesterday.', sw: 'Yeye alikunywa maji jana.', fr: 'Elle a bu de l\'eau hier.' }
                        },
                        {
                            text: { en: '9. The team are playing football →', sw: '9. Timu ni kucheza mpira →', fr: '9. L\'équipe sont jouer au football →' },
                            answer: { en: 'The team is playing football.', sw: 'Timu inacheza mpira.', fr: 'L\'équipe joue au football.' }
                        },
                        {
                            text: { en: '10. He have a new book →', sw: '10. Yeye kuwa na kitabu kipya →', fr: '10. Il avoir un nouveau livre →' },
                            answer: { en: 'He has a new book.', sw: 'Yeye ana kitabu kipya.', fr: 'Il a un nouveau livre.' }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'QUESTION 8: MATCHING (10 marks)\nMatch the left column with the correct answer on the right:',
                        sw: 'SWALI 8: KULINGANISHA (Alama 10)\nLinganisha safu ya kushoto na jibu sahihi kulia:',
                        fr: 'QUESTION 8: ASSOCIATION (10 points)\nAssociez la colonne de gauche avec la bonne réponse à droite:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Matching:\n1. I am happy\n2. She went to school\n3. If I were rich…\n4. Water\n5. Team\n6. Chair\n7. Love\n8. London\n9. I will study tomorrow\n10. Apples\n\na) Future tense\nb) Past tense\nc) Conditional tense\nd) Uncountable noun\ne) Collective noun\nf) Concrete noun\ng) Abstract noun\nh) Proper noun\ni) Future tense\nj) Countable noun', 
                                sw: 'Kulinganisha:\n1. Mimi ni mwenye furaha\n2. Yeye alikwenda shule\n3. Kama ningekuwa tajiri…\n4. Maji\n5. Timu\n6. Kit\n7. Upendo\n8. Londoni\n9. Nitasoma kesho\n10. Maembe\n\na) Wakati ujao\nb) Wakati uliopita\nc) Wakati masharti\nd) Nomino isiyoweza kuhesabiwa\ne) Nomino ya jamii\nf) Nomino halisi\ng) Nomino ya dhana\nh) Nomino binafsi\ni) Wakati ujao\nj) Nomino inayoweza kuhesabiwa', 
                                fr: 'Association:\n1. Je suis heureux\n2. Elle est allée à l\'école\n3. Si j\'étais riche…\n4. Eau\n5. Équipe\n6. Chaise\n7. Amour\n8. Londres\n9. J\'étudierai demain\n10. Pommes\n\na) Futur\nb) Passé\nc) Conditionnel\nd) Nom indénombrable\ne) Nom collectif\nf) Nom concret\ng) Nom abstrait\nh) Nom propre\ni) Futur\nj) Nom dénombrable' 
                            },
                            answer: { 
                                en: '1-a, 2-b, 3-c, 4-d, 5-e, 6-f, 7-g, 8-h, 9-i, 10-j', 
                                sw: '1-a, 2-b, 3-c, 4-d, 5-e, 6-f, 7-g, 8-h, 9-i, 10-j', 
                                fr: '1-a, 2-b, 3-c, 4-d, 5-e, 6-f, 7-g, 8-h, 9-i, 10-j' 
                            }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'QUESTION 9: SENTENCE WRITING (10 marks)',
                        sw: 'SWALI 9: KUANDIKA SENTENSI (Alama 10)',
                        fr: 'QUESTION 9: ÉCRITURE DE PHRASES (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Write a sentence using a proper noun →', sw: '1. Andika sentensi ukitumia nomino binafsi →', fr: '1. Écrivez une phrase en utilisant un nom propre →' },
                            answer: { en: '[Student writes a sentence with proper noun]', sw: '[Mwanafunzi anaandika sentensi na nomino binafsi]', fr: '[L\'étudiant écrit une phrase avec un nom propre]' }
                        },
                        {
                            text: { en: '2. Write a sentence using an abstract noun →', sw: '2. Andika sentensi ukitumia nomino ya dhana →', fr: '2. Écrivez une phrase en utilisant un nom abstrait →' },
                            answer: { en: '[Student writes a sentence with abstract noun]', sw: '[Mwanafunzi anaandika sentensi na nomino ya dhana]', fr: '[L\'étudiant écrit une phrase avec un nom abstrait]' }
                        },
                        {
                            text: { en: '3. Write a sentence using a collective noun →', sw: '3. Andika sentensi ukitumia nomino ya jamii →', fr: '3. Écrivez une phrase en utilisant un nom collectif →' },
                            answer: { en: '[Student writes a sentence with collective noun]', sw: '[Mwanafunzi anaandika sentensi na nomino ya jamii]', fr: '[L\'étudiant écrit une phrase avec un nom collectif]' }
                        },
                        {
                            text: { en: '4. Write a sentence using countable nouns →', sw: '4. Andika sentensi ukitumia nomino zinazoweza kuhesabiwa →', fr: '4. Écrivez une phrase en utilisant des noms dénombrables →' },
                            answer: { en: '[Student writes a sentence with countable nouns]', sw: '[Mwanafunzi anaandika sentensi na nomino zinazoweza kuhesabiwa]', fr: '[L\'étudiant écrit une phrase avec des noms dénombrables]' }
                        },
                        {
                            text: { en: '5. Write a sentence using uncountable nouns →', sw: '5. Andika sentensi ukitumia nomino zisizoweza kuhesabiwa →', fr: '5. Écrivez une phrase en utilisant des noms indénombrables →' },
                            answer: { en: '[Student writes a sentence with uncountable nouns]', sw: '[Mwanafunzi anaandika sentensi na nomino zisizoweza kuhesabiwa]', fr: '[L\'étudiant écrit une phrase avec des noms indénombrables]' }
                        },
                        {
                            text: { en: '6. Write a sentence in past tense →', sw: '6. Andika sentensi kwa wakati uliopita →', fr: '6. Écrivez une phrase au passé →' },
                            answer: { en: '[Student writes a sentence in past tense]', sw: '[Mwanafunzi anaandika sentensi kwa wakati uliopita]', fr: '[L\'étudiant écrit une phrase au passé]' }
                        },
                        {
                            text: { en: '7. Write a sentence in present tense →', sw: '7. Andika sentensi kwa wakati uliopo →', fr: '7. Écrivez une phrase au présent →' },
                            answer: { en: '[Student writes a sentence in present tense]', sw: '[Mwanafunzi anaandika sentensi kwa wakati uliopo]', fr: '[L\'étudiant écrit une phrase au présent]' }
                        },
                        {
                            text: { en: '8. Write a sentence in future tense →', sw: '8. Andika sentensi kwa wakati ujao →', fr: '8. Écrivez une phrase au futur →' },
                            answer: { en: '[Student writes a sentence in future tense]', sw: '[Mwanafunzi anaandika sentensi kwa wakati ujao]', fr: '[L\'étudiant écrit une phrase au futur]' }
                        },
                        {
                            text: { en: '9. Write a sentence in conditional tense →', sw: '9. Andika sentensi kwa wakati masharti →', fr: '9. Écrivez une phrase au conditionnel →' },
                            answer: { en: '[Student writes a sentence in conditional tense]', sw: '[Mwanafunzi anaandika sentensi kwa wakati masharti]', fr: '[L\'étudiant écrit une phrase au conditionnel]' }
                        },
                        {
                            text: { en: '10. Write a sentence using subjunctive tense →', sw: '10. Andika sentensi ukitumia wakati kiashiria →', fr: '10. Écrivez une phrase en utilisant le subjonctif →' },
                            answer: { en: '[Student writes a sentence in subjunctive tense]', sw: '[Mwanafunzi anaandika sentensi kwa wakati kiashiria]', fr: '[L\'étudiant écrit une phrase au subjonctif]' }
                        }
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'QUESTION 10: MIXED EXERCISES (10 marks)',
                        sw: 'SWALI 10: MAZOEZI YA MCHANGANYIKO (Alama 10)',
                        fr: 'QUESTION 10: EXERCICES MIXTES (10 points)'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I ____ (be) at home now →', sw: '1. Mimi ____ (kuwa) nyumbani sasa →', fr: '1. Je ____ (être) à la maison maintenant →' },
                            answer: { en: 'am', sw: 'niko', fr: 'suis' }
                        },
                        {
                            text: { en: '2. They ____ (study) English yesterday →', sw: '2. Wao ____ (soma) Kiingereza jana →', fr: '2. Ils ____ (étudier) l\'anglais hier →' },
                            answer: { en: 'studied', sw: 'walisoma', fr: 'ont étudié' }
                        },
                        {
                            text: { en: '3. If I ____ (have) money, I would buy a car →', sw: '3. Kama ningeli ____ (kuwa na) pesa, ningenunua gari →', fr: '3. Si j\'____ (avoir) de l\'argent, j\'achèterais une voiture →' },
                            answer: { en: 'had', sw: 'kuwa na', fr: 'avais' }
                        },
                        {
                            text: { en: '4. He ____ (drink) milk every morning →', sw: '4. Yeye ____ (kunywa) maziwa kila asubuhi →', fr: '4. Il ____ (boire) du lait chaque matin →' },
                            answer: { en: 'drinks', sw: 'hunywa', fr: 'boit' }
                        },
                        {
                            text: { en: '5. Courage is important → Identify noun type:', sw: '5. Ujasiri ni muhimu → Tambua aina ya nomino:', fr: '5. Le courage est important → Identifiez le type de nom:' },
                            answer: { en: 'Abstract noun', sw: 'Nomino ya dhana', fr: 'Nom abstrait' }
                        },
                        {
                            text: { en: '6. The flock of birds → Identify collective noun:', sw: '6. Kundi la ndege → Tambua nomino ya jamii:', fr: '6. Le troupeau d\'oiseaux → Identifiez le nom collectif:' },
                            answer: { en: 'Flock', sw: 'Kundi', fr: 'Troupeau' }
                        },
                        {
                            text: { en: '7. I like apples → Rewrite negative:', sw: '7. Mimi napenda maembe → Andika tena kwa umbo hasi:', fr: '7. J\'aime les pommes → Réécrivez à la forme négative:' },
                            answer: { en: 'I do not like apples.', sw: 'Sipendi maembe.', fr: 'Je n\'aime pas les pommes.' }
                        },
                        {
                            text: { en: '8. She ____ (read) a book tomorrow →', sw: '8. Yeye ____ (kusoma) kitabu kesho →', fr: '8. Elle ____ (lire) un livre demain →' },
                            answer: { en: 'will read', sw: 'atasoma', fr: 'lira' }
                        },
                        {
                            text: { en: '9. Water → Countable or uncountable?', sw: '9. Maji → Inayoweza kuhesabiwa au isiyoweza kuhesabiwa?', fr: '9. Eau → Dénombrable ou indénombrable?' },
                            answer: { en: 'Uncountable', sw: 'Isiyoweza kuhesabiwa', fr: 'Indénombrable' }
                        },
                        {
                            text: { en: '10. Charles Academy → Identify noun type:', sw: '10. Charles Academy → Tambua aina ya nomino:', fr: '10. Charles Academy → Identifiez le type de nom:' },
                            answer: { en: 'Proper noun', sw: 'Nomino binafsi', fr: 'Nom propre' }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS:\n• Answer all questions.\n• Write clearly in the spaces provided.\n• Circle the correct answer for multiple-choice questions.\n• Total marks: 100',
                sw: 'MAELEKEZO:\n• Jibu maswali yote.\n• Andika wazi katika nafasi zilizotolewa.\n• Zungushia duara jibu sahihi kwa maswali ya chaguo nyingi.\n• Jumla ya alama: 100',
                fr: 'INSTRUCTIONS:\n• Répondez à toutes les questions.\n• Écrivez clairement dans les espaces fournis.\n• Encerclez la bonne réponse pour les questions à choix multiples.\n• Total des points: 100'
            }
        },
        
        'test_3': {
            id: 'english_test_3',
            title: {
                en: 'CHARLES ACADEMY – ENGLISH TEST 3',
                sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA 3',
                fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS 3'
            },
            time: '1 Hour',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'QUESTION 1: FILL IN THE BLANKS (20 marks)\nComplete each sentence using a correct conjunction.',
                        sw: 'SWALI 1: JAZA NAFASI ZILIZO WAZI (Alama 20)\nKamilisha kila sentensi kwa kutumia kiunganishi sahihi.',
                        fr: 'QUESTION 1: REMPLISSEZ LES BLANCS (20 points)\nComplétez chaque phrase en utilisant une conjonction correcte.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I wanted to go out ______ it was raining heavily.', sw: '1. Nilitaka kutoka ______ ilikuwa inanyesha mvua nyingi.', fr: '1. Je voulais sortir ______ il pleuvait abondamment.' },
                            answer: { en: 'but', sw: 'lakini', fr: 'mais' }
                        },
                        {
                            text: { en: '2. She studied hard ______ she passed the examination.', sw: '2. Yeye alisoma kwa bidii ______ alipita mtihani.', fr: '2. Elle a étudié dur ______ elle a réussi l\'examen.' },
                            answer: { en: 'and', sw: 'na', fr: 'et' }
                        },
                        {
                            text: { en: '3. He is poor ______ honest.', sw: '3. Yeye ni maskini ______ mwaminifu.', fr: '3. Il est pauvre ______ honnête.' },
                            answer: { en: 'but', sw: 'lakini', fr: 'mais' }
                        },
                        {
                            text: { en: '4. We stayed at home ______ the weather was bad.', sw: '4. Tulikaa nyumbani ______ hali ya hewa ilikuwa mbaya.', fr: '4. Nous sommes restés à la maison ______ le temps était mauvais.' },
                            answer: { en: 'because', sw: 'kwa sababu', fr: 'parce que' }
                        },
                        {
                            text: { en: '5. You can come with us ______ you finish your work early.', sw: '5. Unaweza kuja na sisi ______ utamaliza kazi yako mapema.', fr: '5. Tu peux venir avec nous ______ tu finis ton travail tôt.' },
                            answer: { en: 'if', sw: 'kama', fr: 'si' }
                        },
                        {
                            text: { en: '6. I was tired ______ I continued working.', sw: '6. Nilikuwa nimechoka ______ niliendelea kufanya kazi.', fr: '6. J\'étais fatigué ______ j\'ai continué à travailler.' },
                            answer: { en: 'but', sw: 'lakini', fr: 'mais' }
                        },
                        {
                            text: { en: '7. She did not attend the class ______ she was sick.', sw: '7. Yeye hakuhudhuria darasa ______ alikuwa mgonjwa.', fr: '7. Elle n\'a pas assisté au cours ______ elle était malade.' },
                            answer: { en: 'because', sw: 'kwa sababu', fr: 'parce que' }
                        },
                        {
                            text: { en: '8. Hurry up ______ you will be late for school.', sw: '8. Harakisha ______ utachelewa shuleni.', fr: '8. Dépêche-toi ______ tu seras en retard à l\'école.' },
                            answer: { en: 'or', sw: 'au', fr: 'ou' }
                        },
                        {
                            text: { en: '9. I like English ______ I want to speak it fluently.', sw: '9. Napenda Kiingereza ______ nataka kuzungumza kwa ufasaha.', fr: '9. J\'aime l\'anglais ______ je veux le parler couramment.' },
                            answer: { en: 'because', sw: 'kwa sababu', fr: 'parce que' }
                        },
                        {
                            text: { en: '10. He failed the exam ______ he studied very little.', sw: '10. Yeye alishindwa mtihani ______ alisoma kidogo sana.', fr: '10. Il a échoué à l\'examen ______ il a très peu étudié.' },
                            answer: { en: 'because', sw: 'kwa sababu', fr: 'parce que' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'QUESTION 2: MULTIPLE CHOICE QUESTIONS (20 marks)\nChoose the correct conjunction.',
                        sw: 'SWALI 2: MASWALI YA CHAGUO NYINGI (Alama 20)\nChagua kiunganishi sahihi.',
                        fr: 'QUESTION 2: QUESTIONS À CHOIX MULTIPLES (20 points)\nChoisissez la bonne conjonction.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I wanted to help him, ______ he refused.\n(a) and (b) but (c) because → Answer:', sw: '1. Nilitaka kumsaidia, ______ alikataa.\n(a) na (b) lakini (c) kwa sababu → Jibu:', fr: '1. Je voulais l\'aider, ______ il a refusé.\n(a) et (b) mais (c) parce que → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '2. You can either stay here ______ go home.\n(a) and (b) or (c) but → Answer:', sw: '2. Unaweza ama kukaa hapa ______ kuenda nyumbani.\n(a) na (b) au (c) lakini → Jibu:', fr: '2. Tu peux soit rester ici ______ rentrer à la maison.\n(a) et (b) ou (c) mais → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '3. He did not come ______ he was tired.\n(a) because (b) and (c) or → Answer:', sw: '3. Yeye hakuja ______ alikuwa amechoka.\n(a) kwa sababu (b) na (c) au → Jibu:', fr: '3. Il n\'est pas venu ______ il était fatigué.\n(a) parce que (b) et (c) ou → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        },
                        {
                            text: { en: '4. She was hungry, ______ she cooked food.\n(a) although (b) so (c) but → Answer:', sw: '4. Yeye alikuwa na njaa, ______ alipika chakula.\n(a) ingawa (b) hivyo (c) lakini → Jibu:', fr: '4. Elle avait faim, ______ elle a cuisiné de la nourriture.\n(a) bien que (b) donc (c) mais → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '5. I will wait ______ you arrive.\n(a) until (b) because (c) but → Answer:', sw: '5. Nitangojea ______ utafika.\n(a) mpaka (b) kwa sababu (c) lakini → Jibu:', fr: '5. J\'attendrai ______ tu arrives.\n(a) jusqu\'à ce que (b) parce que (c) mais → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        },
                        {
                            text: { en: '6. He speaks loudly ______ he is angry.\n(a) because (b) but (c) or → Answer:', sw: '6. Yeye anazungumza kwa sauti kubwa ______ yeye ni mwenye hasira.\n(a) kwa sababu (b) lakini (c) au → Jibu:', fr: '6. Il parle fort ______ il est en colère.\n(a) parce que (b) mais (c) ou → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        },
                        {
                            text: { en: '7. We continued playing ______ it was raining.\n(a) because (b) although (c) so → Answer:', sw: '7. Tuliendelea kucheza ______ ilikuwa inanyesha.\n(a) kwa sababu (b) ingawa (c) hivyo → Jibu:', fr: '7. Nous avons continué à jouer ______ il pleuvait.\n(a) parce que (b) bien que (c) donc → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '8. Study hard ______ you will fail.\n(a) or (b) because (c) and → Answer:', sw: '8. Soma kwa bidii ______ utashindwa.\n(a) au (b) kwa sababu (c) na → Jibu:', fr: '8. Étudie dur ______ tu échoueras.\n(a) ou (b) parce que (c) et → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        },
                        {
                            text: { en: '9. She smiled ______ she was sad.\n(a) although (b) because (c) so → Answer:', sw: '9. Yeye alitabasamu ______ alikuwa na huzuni.\n(a) ingawa (b) kwa sababu (c) hivyo → Jibu:', fr: '9. Elle a souri ______ elle était triste.\n(a) bien que (b) parce que (c) donc → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        },
                        {
                            text: { en: '10. I called him ______ he did not answer.\n(a) but (b) and (c) so → Answer:', sw: '10. Nimlimpigia simu ______ hakujibu.\n(a) lakini (b) na (c) hivyo → Jibu:', fr: '10. Je l\'ai appelé ______ il n\'a pas répondu.\n(a) mais (b) et (c) donc → Réponse:' },
                            answer: { en: 'a', sw: 'a', fr: 'a' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'QUESTION 3: IDENTIFY THE CONJUNCTION (15 marks)\nUnderline the conjunction in each sentence and write it in the space provided.',
                        sw: 'SWALI 3: TAMBUA KIUNGANISHI (Alama 15)\nPigia mstari kiunganishi katika kila sentensi na uandike katika nafasi iliyotolewa.',
                        fr: 'QUESTION 3: IDENTIFIEZ LA CONJONCTION (15 points)\nSoulignez la conjonction dans chaque phrase et écrivez-la dans l\'espace fourni.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I stayed at home because it was raining. →', sw: '1. Nilikaa nyumbani kwa sababu ilikuwa inanyesha. →', fr: '1. Je suis resté à la maison parce qu\'il pleuvait. →' },
                            answer: { en: 'because', sw: 'kwa sababu', fr: 'parce que' }
                        },
                        {
                            text: { en: '2. She tried hard but she failed. →', sw: '2. Yeye alijaribu kwa bidii lakini alishindwa. →', fr: '2. Elle a essayé dur mais elle a échoué. →' },
                            answer: { en: 'but', sw: 'lakini', fr: 'mais' }
                        },
                        {
                            text: { en: '3. We will go if the weather is good. →', sw: '3. Tutaenda kama hali ya hewa ni nzuri. →', fr: '3. Nous irons si le temps est bon. →' },
                            answer: { en: 'if', sw: 'kama', fr: 'si' }
                        },
                        {
                            text: { en: '4. He rested after he finished work. →', sw: '4. Yeye alipumzika baada ya kumaliza kazi. →', fr: '4. Il s\'est reposé après avoir fini le travail. →' },
                            answer: { en: 'after', sw: 'baada ya', fr: 'après' }
                        },
                        {
                            text: { en: '5. She laughed although she was tired. →', sw: '5. Yeye alicheka ingawa alikuwa amechoka. →', fr: '5. Elle a ri bien qu\'elle était fatiguée. →' },
                            answer: { en: 'although', sw: 'ingawa', fr: 'bien que' }
                        },
                        {
                            text: { en: '6. I waited until he arrived. →', sw: '6. Nilingojea mpaka alipofika. →', fr: '6. J\'ai attendu jusqu\'à ce qu\'il arrive. →' },
                            answer: { en: 'until', sw: 'mpaka', fr: 'jusqu\'à ce que' }
                        },
                        {
                            text: { en: '7. He was sick so he stayed home. →', sw: '7. Yeye alikuwa mgonjwa hivyo alikaa nyumbani. →', fr: '7. Il était malade donc il est resté à la maison. →' },
                            answer: { en: 'so', sw: 'hivyo', fr: 'donc' }
                        },
                        {
                            text: { en: '8. You can come unless you are busy. →', sw: '8. Unaweza kuja isipokuwa uko na shughuli. →', fr: '8. Tu peux venir à moins que tu sois occupé. →' },
                            answer: { en: 'unless', sw: 'isipokuwa', fr: 'à moins que' }
                        },
                        {
                            text: { en: '9. She studied while her friends played. →', sw: '9. Yeye alisoma wakati rafiki zake walikuwa wanacheza. →', fr: '9. Elle a étudié pendant que ses amis jouaient. →' },
                            answer: { en: 'while', sw: 'wakati', fr: 'pendant que' }
                        },
                        {
                            text: { en: '10. I called before I left. →', sw: '10. Nilimpigia simu kabla ya kuondoka. →', fr: '10. J\'ai appelé avant de partir. →' },
                            answer: { en: 'before', sw: 'kabla ya', fr: 'avant' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'QUESTION 4: JOIN THE SENTENCES (15 marks)\nJoin each pair of sentences using a suitable conjunction.',
                        sw: 'SWALI 4: UNGANISHA SENTENSI (Alama 15)\nUnganisha kila jozi ya sentensi kwa kutumia kiunganishi kinachofaa.',
                        fr: 'QUESTION 4: REJOIGNEZ LES PHRASES (15 points)\nRejoignez chaque paire de phrases en utilisant une conjonction appropriée.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I was tired. I finished my homework. →', sw: '1. Nilikuwa nimechoka. Nilimaliza kazi yangu ya nyumbani. →', fr: '1. J\'étais fatigué. J\'ai fini mes devoirs. →' },
                            answer: { en: 'I was tired but I finished my homework.', sw: 'Nilikuwa nimechoka lakini nilimaliza kazi yangu ya nyumbani.', fr: 'J\'étais fatigué mais j\'ai fini mes devoirs.' }
                        },
                        {
                            text: { en: '2. He is young. He is very intelligent. →', sw: '2. Yeye ni mdogo. Yeye ni mwenye akili sana. →', fr: '2. Il est jeune. Il est très intelligent. →' },
                            answer: { en: 'He is young but he is very intelligent.', sw: 'Yeye ni mdogo lakini yeye ni mwenye akili sana.', fr: 'Il est jeune mais il est très intelligent.' }
                        },
                        {
                            text: { en: '3. We stayed inside. It was raining. →', sw: '3. Tulikaa ndani. Ilikuwa inanyesha. →', fr: '3. Nous sommes restés à l\'intérieur. Il pleuvait. →' },
                            answer: { en: 'We stayed inside because it was raining.', sw: 'Tulikaa ndani kwa sababu ilikuwa inanyesha.', fr: 'Nous sommes restés à l\'intérieur parce qu\'il pleuvait.' }
                        },
                        {
                            text: { en: '4. She studied hard. She passed the exam. →', sw: '4. Yeye alisoma kwa bidii. Alipita mtihani. →', fr: '4. Elle a étudié dur. Elle a réussi l\'examen. →' },
                            answer: { en: 'She studied hard so she passed the exam.', sw: 'Yeye alisoma kwa bidii hivyo alipita mtihani.', fr: 'Elle a étudié dur donc elle a réussi l\'examen.' }
                        },
                        {
                            text: { en: '5. I will call you. I arrive home. →', sw: '5. Nitakupigia simu. Nafika nyumbani. →', fr: '5. Je t\'appellerai. J\'arrive à la maison. →' },
                            answer: { en: 'I will call you when I arrive home.', sw: 'Nitakupigia simu ninapofika nyumbani.', fr: 'Je t\'appellerai quand j\'arriverai à la maison.' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'QUESTION 5: CORRECT THE SENTENCES (15 marks)\nRewrite the sentences correctly using proper conjunctions.',
                        sw: 'SWALI 5: SAHIHISHA SENTENSI (Alama 15)\nAndika tena sentensi kwa usahihi kwa kutumia viunganishi vilivyofaa.',
                        fr: 'QUESTION 5: CORRIGEZ LES PHRASES (15 points)\nRéécrivez les phrases correctement en utilisant des conjonctions appropriées.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. I like English I like French. →', sw: '1. Napenda Kiingereza napenda Kifaransa. →', fr: '1. J\'aime l\'anglais j\'aime le français. →' },
                            answer: { en: 'I like English and I like French.', sw: 'Napenda Kiingereza na napenda Kifaransa.', fr: 'J\'aime l\'anglais et j\'aime le français.' }
                        },
                        {
                            text: { en: '2. He was sick he went to school. →', sw: '2. Yeye alikuwa mgonjwa yeye alikwenda shule. →', fr: '2. Il était malade il est allé à l\'école. →' },
                            answer: { en: 'He was sick but he went to school.', sw: 'Yeye alikuwa mgonjwa lakini alikwenda shule.', fr: 'Il était malade mais il est allé à l\'école.' }
                        },
                        {
                            text: { en: '3. Study hard you will fail. →', sw: '3. Soma kwa bidii utashindwa. →', fr: '3. Étudie dur tu échoueras. →' },
                            answer: { en: 'Study hard or you will fail.', sw: 'Soma kwa bidii au utashindwa.', fr: 'Étudie dur ou tu échoueras.' }
                        },
                        {
                            text: { en: '4. She was tired she continued working. →', sw: '4. Yeye alikuwa amechoka yeye aliendelea kufanya kazi. →', fr: '4. Elle était fatiguée elle a continué à travailler. →' },
                            answer: { en: 'She was tired but she continued working.', sw: 'Yeye alikuwa amechoka lakini aliendelea kufanya kazi.', fr: 'Elle était fatiguée mais elle a continué à travailler.' }
                        },
                        {
                            text: { en: '5. I waited he did not come. →', sw: '5. Nilingojea yeye hakuja. →', fr: '5. J\'ai attendu il n\'est pas venu. →' },
                            answer: { en: 'I waited but he did not come.', sw: 'Nilingojea lakini yeye hakuja.', fr: 'J\'ai attendu mais il n\'est pas venu.' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'QUESTION 6: COMPLETE THE PARAGRAPH (15 marks)\nFill in the blanks using suitable conjunctions.',
                        sw: 'SWALI 6: KAMILISHA KIFUNGU (Alama 15)\nJaza nafasi zilizo wazi kwa kutumia viunganishi vilivyofaa.',
                        fr: 'QUESTION 6: COMPLÉTEZ LE PARAGRAPHE (15 points)\nRemplissez les blancs en utilisant des conjonctions appropriées.'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Complete the paragraph:\nI wanted to attend the lesson ______ I was sick. ______ I felt weak, I tried to study at home. I rested ______ I felt better. I will attend the class tomorrow ______ the teacher allows me. I am determined to succeed ______ English is important for my future.', 
                                sw: 'Kamilisha kifungu:\nNilitaka kuhudhuria somo ______ nilikuwa mgonjwa. ______ nilijisikia dhaifu, nilijaribu kusoma nyumbani. Nilipumzika ______ nilijisikia vizuri. Nitahudhuria darasa kesho ______ mwalimu akanikubali. Nimeamua kufanikiwa ______ Kiingereza ni muhimu kwa mustakabali wangu.', 
                                fr: 'Complétez le paragraphe:\nJe voulais assister à la leçon ______ j\'étais malade. ______ je me sentais faible, j\'ai essayé d\'étudier à la maison. Je me suis reposé ______ je me suis senti mieux. J\'assisterai au cours demain ______ le professeur me le permet. Je suis déterminé à réussir ______ l\'anglais est important pour mon avenir.' 
                            },
                            answer: { 
                                en: 'but, Although, until, if, because', 
                                sw: 'lakini, Ingawa, mpaka, kama, kwa sababu', 
                                fr: 'mais, Bien que, jusqu\'à, si, parce que' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Read each question carefully before answering.\n3. Write clearly and neatly.\n4. For multiple-choice questions, choose the correct answer.\n5. Use correct grammar and spelling.\n6. Total Marks: 100',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Soma kila swali kwa makini kabla ya kujibu.\n3. Andika kwa uwazi na usafi.\n4. Kwa maswali ya chaguo nyingi, chagua jibu sahihi.\n5. Tumia sarufi na maandishi sahihi.\n6. Jumla ya Alama: 100',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Lisez chaque question attentivement avant de répondre.\n3. Écrivez clairement et soigneusement.\n4. Pour les questions à choix multiples, choisissez la bonne réponse.\n5. Utilisez une grammaire et une orthographe correctes.\n6. Total des Points: 100'
            }
        },
        
        'test_4': {
            id: 'english_test_4',
            title: {
                en: 'CHARLES ACADEMY – ENGLISH TEST 4',
                sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA 4',
                fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS 4'
            },
            time: '1 Hour',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'READING PASSAGE\n"The Importance of Reading\nReading is one of the most important skills in learning a language. When people read, they gain new knowledge, improve their vocabulary, and understand how sentences are formed. Reading also helps learners to think clearly and express their ideas better.\nMany students find reading difficult at first because they do not understand all the words. However, reading regularly helps them become more confident. They learn to guess the meaning of new words from the context and understand the main idea of a text without knowing every word.\nIn today\'s world, reading is not limited to books. People read messages, news, emails, and online articles every day. Students who read often perform better in school because they understand instructions and exam questions more easily.\nFor these reasons, reading should be practiced daily. Even reading for a short time each day can make a big difference in a learner\'s language ability."',
                        sw: 'KIFUNGU CHA KUSOMA\n"Umuhimu wa Kusoma\nKusoma ni moja ya stadi muhimu zaidi katika kujifunza lugha. Watu wanaposoma, wanapata ujuzi mpya, wanaboresha msamiati wao, na wanaelewa jinsi sentensi zinavyoundwa. Kusoma pia husaidia wanaojifunza kufikiria kwa uwazi na kueleza mawazo yao vyema zaidi.\nWanafunzi wengi hupata ugumu wa kusoma mwanzoni kwa sababu hawaelewi maneno yote. Hata hivyo, kusoma mara kwa mara huwasaidia kuwa na ujasiri zaidi. Wanajifunza kukisia maana ya maneno mapya kutoka katika muktadha na kuelewa wazo kuu la maandishi bila kujua kila neno.\nKatika ulimwengu wa leo, kusoma si mdogo kwa vitabu tu. Watu husoma ujumbe, habari, barua pepe, na makala mtandaoni kila siku. Wanafunzi ambao husoma mara kwa mara hufanya vyema zaidi shuleni kwa sababu wanaelewa maagizo na maswali ya mtihani kwa urahisi zaidi.\nKwa sababu hizi, kusoma kinapaswa kufanywa kila siku. Hata kusoma kwa muda mfupi kila siku kunaweza kufanya tofauti kubwa katika uwezo wa lugha wa mwanajifunza."',
                        fr: 'PASSAGE DE LECTURE\n"L\'Importance de la Lecture\nLa lecture est l\'une des compétences les plus importantes dans l\'apprentissage d\'une langue. Lorsque les gens lisent, ils acquièrent de nouvelles connaissances, améliorent leur vocabulaire et comprennent comment les phrases sont formées. La lecture aide également les apprenants à penser clairement et à exprimer leurs idées mieux.\nDe nombreux étudiants trouvent la lecture difficile au début parce qu\'ils ne comprennent pas tous les mots. Cependant, lire régulièrement les aide à devenir plus confiants. Ils apprennent à deviner le sens des nouveaux mots à partir du contexte et à comprendre l\'idée principale d\'un texte sans connaître chaque mot.\nDans le monde d\'aujourd\'hui, la lecture n\'est pas limitée aux livres. Les gens lisent des messages, des nouvelles, des courriels et des articles en ligne chaque jour. Les étudiants qui lisent souvent réussissent mieux à l\'école parce qu\'ils comprennent les instructions et les questions d\'examen plus facilement.\nPour ces raisons, la lecture devrait être pratiquée quotidiennement. Même lire pendant un court moment chaque jour peut faire une grande différence dans les capacités linguistiques d\'un apprenant."'
                    },
                    subQuestions: [
                        {
                            text: { en: 'QUESTION 1: COMPREHENSION QUESTIONS (30 marks)\n1. What is one benefit of reading mentioned in the passage?', sw: 'SWALI 1: MASWALI YA UELEWA (Alama 30)\n1. Faida moja ya kusoma iliyotajwa katika kifungu ni nini?', fr: 'QUESTION 1: QUESTIONS DE COMPRÉHENSION (30 points)\n1. Quel est un avantage de la lecture mentionné dans le passage?' },
                            answer: { en: 'Reading helps learners gain new knowledge and improve vocabulary.', sw: 'Kusoma husaidia wanaojifunza kupata ujuzi mpya na kuboresha msamiati.', fr: 'La lecture aide les apprenants à acquérir de nouvelles connaissances et à améliorer leur vocabulaire.' }
                        },
                        {
                            text: { en: '2. Why do some students find reading difficult at first?', sw: '2. Kwa nini wanafunzi wengine hupata ugumu wa kusoma mwanzoni?', fr: '2. Pourquoi certains étudiants trouvent-ils la lecture difficile au début?' },
                            answer: { en: 'Because they do not understand all the words in the text.', sw: 'Kwa sababu hawaelewi maneno yote katika maandishi.', fr: 'Parce qu\'ils ne comprennent pas tous les mots dans le texte.' }
                        },
                        {
                            text: { en: '3. How does regular reading help learners?', sw: '3. Kusoma mara kwa mara husaidia vipi wanaojifunza?', fr: '3. Comment la lecture régulière aide-t-elle les apprenants?' },
                            answer: { en: 'It helps them become more confident and understand context.', sw: 'Huwasaidia kuwa na ujasiri zaidi na kuelewa muktadha.', fr: 'Elle les aide à devenir plus confiants et à comprendre le contexte.' }
                        },
                        {
                            text: { en: '4. Mention two things people read in today\'s world.', sw: '4. Taja vitu viwili ambavyo watu husoma katika ulimwengu wa leo.', fr: '4. Mentionnez deux choses que les gens lisent dans le monde d\'aujourd\'hui.' },
                            answer: { en: 'Messages/emails and online articles/news.', sw: 'Ujumbe/barua pepe na makala/habari mtandaoni.', fr: 'Messages/courriels et articles/nouvelles en ligne.' }
                        },
                        {
                            text: { en: '5. Why do students who read often perform better in school?', sw: '5. Kwa nini wanafunzi ambao husoma mara kwa mara hufanya vyema zaidi shuleni?', fr: '5. Pourquoi les étudiants qui lisent souvent réussissent-ils mieux à l\'école?' },
                            answer: { en: 'Because they understand instructions and exam questions more easily.', sw: 'Kwa sababu wanaelewa maagizo na maswali ya mtihani kwa urahisi zaidi.', fr: 'Parce qu\'ils comprennent les instructions et les questions d\'examen plus facilement.' }
                        },
                        {
                            text: { en: '6. According to the passage, is it necessary to understand every word when reading? Explain.', sw: '6. Kulingana na kifungu, je, ni lazima kuelewa kila neno wakati wa kusoma? Eleza.', fr: '6. Selon le passage, est-il nécessaire de comprendre chaque mot en lisant? Expliquez.' },
                            answer: { en: 'No, it is not necessary. Readers can guess meanings from context and understand main ideas without knowing every word.', sw: 'Hapana, sio lazima. Wasomaji wanaweza kukisia maana kutoka kwa muktadha na kuelewa mawazo makuu bila kujua kila neno.', fr: 'Non, ce n\'est pas nécessaire. Les lecteurs peuvent deviner les significations à partir du contexte et comprendre les idées principales sans connaître chaque mot.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'QUESTION 2: MULTIPLE-CHOICE QUESTIONS (20 marks)\nChoose the correct answer.',
                        sw: 'SWALI 2: MASWALI YA CHAGUO NYINGI (Alama 20)\nChagua jibu sahihi.',
                        fr: 'QUESTION 2: QUESTIONS À CHOIX MULTIPLES (20 points)\nChoisissez la bonne réponse.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Reading helps learners to:\n(a) forget words\n(b) improve vocabulary\n(c) waste time → Answer:', sw: '1. Kusoma husaidia wanaojifunza:\n(a) kusahau maneno\n(b) kuboresha msamiati\n(c) kupoteza muda → Jibu:', fr: '1. La lecture aide les apprenants à:\n(a) oublier les mots\n(b) améliorer le vocabulaire\n(c) perdre du temps → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '2. Students become confident in reading by:\n(a) avoiding books\n(b) reading regularly\n(c) memorizing words only → Answer:', sw: '2. Wanafunzi hukua ujasiri katika kusoma kwa:\n(a) kuepuka vitabu\n(b) kusoma mara kwa mara\n(c) kukariri maneno tu → Jibu:', fr: '2. Les étudiants deviennent confiants en lecture en:\n(a) évitant les livres\n(b) lisant régulièrement\n(c) mémorisant seulement les mots → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '3. The passage says reading is important because it helps people:\n(a) sleep well\n(b) think clearly\n(c) travel faster → Answer:', sw: '3. Kifungu kinasema kusoma ni muhimu kwa sababu husaidia watu:\n(a) kulala vizuri\n(b) kufikiria kwa uwazi\n(c) kusafiri kwa kasi → Jibu:', fr: '3. Le passage dit que la lecture est importante parce qu\'elle aide les gens à:\n(a) bien dormir\n(b) penser clairement\n(c) voyager plus vite → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '4. Reading is limited to books only.\n(a) True\n(b) False → Answer:', sw: '4. Kusoma ni mdogo kwa vitabu tu.\n(a) Kweli\n(b) Sio kweli → Jibu:', fr: '4. La lecture est limitée aux livres seulement.\n(a) Vrai\n(b) Faux → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        },
                        {
                            text: { en: '5. The best title for this passage is:\n(a) Books and Exams\n(b) The Importance of Reading\n(c) Online Learning → Answer:', sw: '5. Kichwa bora cha kifungu hiki ni:\n(a) Vitabu na Mitihani\n(b) Umuhimu wa Kusoma\n(c) Kujifunza Mtandaoni → Jibu:', fr: '5. Le meilleur titre pour ce passage est:\n(a) Livres et Examens\n(b) L\'Importance de la Lecture\n(c) Apprentissage en Ligne → Réponse:' },
                            answer: { en: 'b', sw: 'b', fr: 'b' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'QUESTION 3: VOCABULARY FROM THE PASSAGE (15 marks)\nFind words in the passage that mean the same as the following.',
                        sw: 'SWALI 3: MSAMIATI KUTOKA KIFUNGU (Alama 15)\nTafuta maneno katika kifungu yanayomaanisha sawa na yafuatayo.',
                        fr: 'QUESTION 3: VOCABULAIRE DU PASSAGE (15 points)\nTrouvez des mots dans le passage qui signifient la même chose que les suivants.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Advantage →', sw: '1. Faida →', fr: '1. Avantage →' },
                            answer: { en: 'benefit', sw: 'faida', fr: 'bénéfice' }
                        },
                        {
                            text: { en: '2. Understand →', sw: '2. Kuelewa →', fr: '2. Comprendre →' },
                            answer: { en: 'comprehend', sw: 'kuelewa', fr: 'comprendre' }
                        },
                        {
                            text: { en: '3. Afraid or unsure →', sw: '3. Hofu au bila hakika →', fr: '3. Peur ou incertain →' },
                            answer: { en: 'difficult / not confident', sw: 'ugumu / bila ujasiri', fr: 'difficile / pas confiant' }
                        },
                        {
                            text: { en: '4. Limited →', sw: '4. Mdogo →', fr: '4. Limité →' },
                            answer: { en: 'not limited / restricted', sw: 'si mdogo / kikomo', fr: 'pas limité / restreint' }
                        },
                        {
                            text: { en: '5. Learner →', sw: '5. Mwanajifunza →', fr: '5. Apprenant →' },
                            answer: { en: 'student / learner', sw: 'mwanafunzi / mwanajifunza', fr: 'étudiant / apprenant' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'QUESTION 4: TRUE OR FALSE (15 marks)\nWrite True or False.',
                        sw: 'SWALI 4: KWELI AU SI KWELI (Alama 15)\nAndika Kweli au Sio kweli.',
                        fr: 'QUESTION 4: VRAI OU FAUX (15 points)\nÉcrivez Vrai ou Faux.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Reading helps people express their ideas better. →', sw: '1. Kusoma husaidia watu kueleza mawazo yao vyema zaidi. →', fr: '1. La lecture aide les gens à mieux exprimer leurs idées. →' },
                            answer: { en: 'True', sw: 'Kweli', fr: 'Vrai' }
                        },
                        {
                            text: { en: '2. Students must know all words to understand a text. →', sw: '2. Wanafunzi lazima wajue maneno yote kuelewa maandishi. →', fr: '2. Les étudiants doivent connaître tous les mots pour comprendre un texte. →' },
                            answer: { en: 'False', sw: 'Sio kweli', fr: 'Faux' }
                        },
                        {
                            text: { en: '3. People read many things every day. →', sw: '3. Watu husoma vitu vingi kila siku. →', fr: '3. Les gens lisent beaucoup de choses chaque jour. →' },
                            answer: { en: 'True', sw: 'Kweli', fr: 'Vrai' }
                        },
                        {
                            text: { en: '4. Reading has no effect on school performance. →', sw: '4. Kusoma haina athari yoyote kwa utendaji shuleni. →', fr: '4. La lecture n\'a aucun effet sur les performances scolaires. →' },
                            answer: { en: 'False', sw: 'Sio kweli', fr: 'Faux' }
                        },
                        {
                            text: { en: '5. Reading daily can improve language ability. →', sw: '5. Kusoma kila siku kunaweza kuboresha uwezo wa lugha. →', fr: '5. Lire quotidiennement peut améliorer les capacités linguistiques. →' },
                            answer: { en: 'True', sw: 'Kweli', fr: 'Vrai' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'QUESTION 5: INFERENCE QUESTIONS (10 marks)\nAnswer briefly.',
                        sw: 'SWALI 5: MASWALI YA KUTOA MAANA (Alama 10)\nJibu kwa ufupi.',
                        fr: 'QUESTION 5: QUESTIONS D\'INFÉRENCE (10 points)\nRépondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Why do you think reading helps students understand exam questions?', sw: '1. Unafikiri kwa nini kusoma husaidia wanafunzi kuelewa maswali ya mtihani?', fr: '1. Pourquoi pensez-vous que la lecture aide les étudiants à comprendre les questions d\'examen?' },
                            answer: { en: 'Because reading improves comprehension skills and vocabulary.', sw: 'Kwa sababu kusoma huboresha stadi za uelewa na msamiati.', fr: 'Parce que la lecture améliore les compétences de compréhension et le vocabulaire.' }
                        },
                        {
                            text: { en: '2. What may happen to a student who never practices reading?', sw: '2. Nini kinaweza kutokea kwa mwanafunzi ambaye hajawahi kujizoeza kusoma?', fr: '2. Que peut-il arriver à un étudiant qui ne pratique jamais la lecture?' },
                            answer: { en: 'They may struggle with understanding texts and have limited vocabulary.', sw: 'Wanaweza kukabiliana na ugumu wa kuelewa maandishi na kuwa na msamiati mdogo.', fr: 'Ils peuvent avoir des difficultés à comprendre les textes et avoir un vocabulaire limité.' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'QUESTION 6: SUMMARY WRITING (10 marks)\nWrite a short summary of the passage (3–4 sentences).',
                        sw: 'SWALI 6: KUANDIKA MUHTASARI (Alama 10)\nAndika muhtasari mfupi wa kifungu (sentensi 3–4).',
                        fr: 'QUESTION 6: RÉDACTION DE RÉSUMÉ (10 points)\nÉcrivez un court résumé du passage (3–4 phrases).'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Write your summary:', sw: 'Andika muhtasari wako:', fr: 'Écrivez votre résumé:' },
                            answer: { en: '[Student writes a summary of the passage]', sw: '[Mwanafunzi anaandika muhtasari wa kifungu]', fr: '[L\'étudiant écrit un résumé du passage]' }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Read the passage carefully before answering the questions.\n2. Answer ALL questions.\n3. Write your answers clearly and in complete sentences where required.\n4. For multiple-choice questions, circle the correct answer.\n5. Use your own words unless stated otherwise.\n6. Total Marks: 100',
                sw: 'MAELEKEZO\n1. Soma kifungu kwa makini kabla ya kujibu maswali.\n2. Jibu maswali YOTE.\n3. Andika majibu yako kwa uwazi na kwa sentensi kamili inapohitajika.\n4. Kwa maswali ya chaguo nyingi, zungushia duara jibu sahihi.\n5. Tumia maneno yako mwenyewe isipokuwa imetajwa vinginevyo.\n6. Jumla ya Alama: 100',
                fr: 'INSTRUCTIONS\n1. Lisez le passage attentivement avant de répondre aux questions.\n2. Répondez à TOUTES les questions.\n3. Écrivez vos réponses clairement et en phrases complètes si nécessaire.\n4. Pour les questions à choix multiples, encerclez la bonne réponse.\n5. Utilisez vos propres mots sauf indication contraire.\n6. Total des Points: 100'
            }
        },
        
        'test_5': {
            id: 'english_test_5',
            title: {
                en: 'CHARLES ACADEMY – ENGLISH TEST 5',
                sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA 5',
                fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS 5'
            },
            time: '1 Hour',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'QUESTION 1: SENTENCE CONSTRUCTION (20 marks)\nWrite correct and complete sentences using the given words.',
                        sw: 'SWALI 1: KUUNDA SENTENSI (Alama 20)\nAndika sentensi sahihi na kamili kwa kutumia maneno uliyopewa.',
                        fr: 'QUESTION 1: CONSTRUCTION DE PHRASES (20 points)\nÉcrivez des phrases correctes et complètes en utilisant les mots donnés.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. English / important / language →', sw: '1. Kiingereza / muhimu / lugha →', fr: '1. Anglais / important / langue →' },
                            answer: { en: 'English is an important language.', sw: 'Kiingereza ni lugha muhimu.', fr: 'L\'anglais est une langue importante.' }
                        },
                        {
                            text: { en: '2. I / like / reading / books →', sw: '2. Mimi / penda / kusoma / vitabu →', fr: '2. Je / aimer / lire / livres →' },
                            answer: { en: 'I like reading books.', sw: 'Mimi napenda kusoma vitabu.', fr: 'J\'aime lire des livres.' }
                        },
                        {
                            text: { en: '3. Students / study / every day →', sw: '3. Wanafunzi / soma / kila siku →', fr: '3. Étudiants / étudier / chaque jour →' },
                            answer: { en: 'Students study every day.', sw: 'Wanafunzi husoma kila siku.', fr: 'Les étudiants étudient chaque jour.' }
                        },
                        {
                            text: { en: '4. She / write / letter →', sw: '4. Yeye / andika / barua →', fr: '4. Elle / écrire / lettre →' },
                            answer: { en: 'She writes a letter.', sw: 'Yeye anaandika barua.', fr: 'Elle écrit une lettre.' }
                        },
                        {
                            text: { en: '5. We / learn / English / school →', sw: '5. Sisi / jifunza / Kiingereza / shule →', fr: '5. Nous / apprendre / anglais / école →' },
                            answer: { en: 'We learn English at school.', sw: 'Sisi hujifunza Kiingereza shuleni.', fr: 'Nous apprenons l\'anglais à l\'école.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'QUESTION 2: COMPLETE THE SENTENCES (15 marks)\nComplete the following sentences with suitable words.',
                        sw: 'SWALI 2: KAMILISHA SENTENSI (Alama 15)\nKamilisha sentensi zifuatazo kwa maneno yanayofaa.',
                        fr: 'QUESTION 2: COMPLÉTEZ LES PHRASES (15 points)\nComplétez les phrases suivantes avec des mots appropriés.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. My name is ___________________________.', sw: '1. Jina langu ni ___________________________.', fr: '1. Mon nom est ___________________________.' },
                            answer: { en: '[Student writes their name]', sw: '[Mwanafunzi anaandika jina lake]', fr: '[L\'étudiant écrit son nom]' }
                        },
                        {
                            text: { en: '2. I am ______ years old.', sw: '2. Mimi nina umri wa ______ miaka.', fr: '2. J\'ai ______ ans.' },
                            answer: { en: '[Student writes their age]', sw: '[Mwanafunzi anaandika umri wake]', fr: '[L\'étudiant écrit son âge]' }
                        },
                        {
                            text: { en: '3. I come from ___________________________.', sw: '3. Ninatoka ___________________________.', fr: '3. Je viens de ___________________________.' },
                            answer: { en: '[Student writes their country/city]', sw: '[Mwanafunzi anaandika nchi yake/mji wake]', fr: '[L\'étudiant écrit son pays/ville]' }
                        },
                        {
                            text: { en: '4. My favorite subject is __________________.', sw: '4. Somo langu napendalo ni __________________.', fr: '4. Ma matière préférée est __________________.' },
                            answer: { en: '[Student writes their favorite subject]', sw: '[Mwanafunzi anaandika somo analolipenda]', fr: '[L\'étudiant écrit sa matière préférée]' }
                        },
                        {
                            text: { en: '5. I want to learn English because ______________________________.', sw: '5. Nataka kujifunza Kiingereza kwa sababu ______________________________.', fr: '5. Je veux apprendre l\'anglais parce que ______________________________.' },
                            answer: { en: '[Student writes their reason]', sw: '[Mwanafunzi anaandika sababu yake]', fr: '[L\'étudiant écrit sa raison]' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'QUESTION 3: REARRANGE THE WORDS (15 marks)\nRearrange the words to form correct sentences.',
                        sw: 'SWALI 3: PANGENDA MANENO (Alama 15)\nPanga maneno upya kuunda sentensi sahihi.',
                        fr: 'QUESTION 3: RÉARRANGEZ LES MOTS (15 points)\nRéarrangez les mots pour former des phrases correctes.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. English / learning / am / I →', sw: '1. Kiingereza / kujifunza / nina / Mimi →', fr: '1. Anglais / apprendre / suis / Je →' },
                            answer: { en: 'I am learning English.', sw: 'Mimi ninajifunza Kiingereza.', fr: 'Je suis en train d\'apprendre l\'anglais.' }
                        },
                        {
                            text: { en: '2. school / every / go / I / day →', sw: '2. shule / kila / kwenda / Mimi / siku →', fr: '2. école / chaque / aller / Je / jour →' },
                            answer: { en: 'I go to school every day.', sw: 'Mimi huenda shuleni kila siku.', fr: 'Je vais à l\'école chaque jour.' }
                        },
                        {
                            text: { en: '3. teacher / our / kind / is →', sw: '3. mwalimu / wetu / mwema / ni →', fr: '3. professeur / notre / gentil / est →' },
                            answer: { en: 'Our teacher is kind.', sw: 'Mwalimu wetu ni mwema.', fr: 'Notre professeur est gentil.' }
                        },
                        {
                            text: { en: '4. books / reading / enjoy / I →', sw: '4. vitabu / kusoma / furahia / Mimi →', fr: '4. livres / lire / aime / Je →' },
                            answer: { en: 'I enjoy reading books.', sw: 'Mimi nahisi furaha kusoma vitabu.', fr: 'J\'aime lire des livres.' }
                        },
                        {
                            text: { en: '5. students / homework / their / do →', sw: '5. wanafunzi / kazi ya nyumbani / zao / fanya →', fr: '5. étudiants / devoirs / leurs / faire →' },
                            answer: { en: 'Students do their homework.', sw: 'Wanafunzi hufanya kazi yao ya nyumbani.', fr: 'Les étudiants font leurs devoirs.' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'QUESTION 4: PARAGRAPH WRITING (20 marks)\nWrite a short paragraph of 5–6 sentences on the topic below.',
                        sw: 'SWALI 4: KUANDIKA KIFUNGU (Alama 20)\nAndika kifungu kifupi cha sentensi 5–6 kuhusu mada iliyo hapa chini.',
                        fr: 'QUESTION 4: RÉDACTION DE PARAGRAPHE (20 points)\nÉcrivez un court paragraphe de 5–6 phrases sur le sujet ci-dessous.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Topic: My Favorite Subject\n\nWrite your paragraph:', sw: 'Mada: Somo Ninayolipenda\n\nAndika kifungu chako:', fr: 'Sujet: Ma Matière Préférée\n\nÉcrivez votre paragraphe:' },
                            answer: { en: '[Student writes a paragraph about their favorite subject]', sw: '[Mwanafunzi anaandika kifungu kuhusu somo analolipenda]', fr: '[L\'étudiant écrit un paragraphe sur sa matière préférée]' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'QUESTION 5: GUIDED WRITING (15 marks)\nWrite a paragraph using the guiding questions.',
                        sw: 'SWALI 5: KUANDIKA KWA MAELEKEZO (Alama 15)\nAndika kifungu kwa kutumia maswali ya kuongoza.',
                        fr: 'QUESTION 5: RÉDACTION GUIDÉE (15 points)\nÉcrivez un paragraphe en utilisant les questions guides.'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Topic: My Daily Routine\nGuiding questions:\n• What time do you wake up?\n• What do you do in the morning?\n• What do you do during the day?\n• What do you do in the evening?\n\nWrite your paragraph:', 
                                sw: 'Mada: Mpangilio Wangu wa Kila Siku\nMaswali ya kuongoza:\n• Unamka saa ngapi?\n• Unafanya nini asubuhi?\n• Unafanya nini mchana?\n• Unafanya nini jioni?\n\nAndika kifungu chako:', 
                                fr: 'Sujet: Ma Routine Quotidienne\nQuestions guides:\n• À quelle heure vous réveillez-vous?\n• Que faites-vous le matin?\n• Que faites-vous pendant la journée?\n• Que faites-vous le soir?\n\nÉcrivez votre paragraphe:' 
                            },
                            answer: { 
                                en: '[Student writes about their daily routine]', 
                                sw: '[Mwanafunzi anaandika kuhusu mpangilio wake wa kila siku]', 
                                fr: '[L\'étudiant écrit sur sa routine quotidienne]' 
                            }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'QUESTION 6: FREE WRITING (15 marks)\nWrite a composition of 8–10 sentences on ONE of the following topics.',
                        sw: 'SWALI 6: KUANDIKA BILA VIZUIZI (Alama 15)\nAndika insha ya sentensi 8–10 kuhusu MOJA ya mada zifuatazo.',
                        fr: 'QUESTION 6: RÉDACTION LIBRE (15 points)\nÉcrivez une composition de 8–10 phrases sur UN des sujets suivants.'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Choose ONE topic:\na) The Importance of Education\nb) My Best Friend\nc) Why I Want to Learn English\n\nWrite your composition:', 
                                sw: 'Chagua MADA MOJA:\na) Umuhimu wa Elimu\nb) Rafiki Yangu Bora\nc) Kwa Nini Nataka Kujifunza Kiingereza\n\nAndika insha yako:', 
                                fr: 'Choisissez UN sujet:\na) L\'Importance de l\'Éducation\nb) Mon Meilleur Ami\nc) Pourquoi Je Veux Apprendre l\'Anglais\n\nÉcrivez votre composition:' 
                            },
                            answer: { 
                                en: '[Student writes a composition on chosen topic]', 
                                sw: '[Mwanafunzi anaandika insha kuhusu mada aliyochagua]', 
                                fr: '[L\'étudiant écrit une composition sur le sujet choisi]' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Write clearly and neatly.\n3. Use correct grammar, spelling, and punctuation.\n4. Organize your ideas properly.\n5. Use additional paper if necessary.\n6. Total Marks: 100',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Andika kwa uwazi na usafi.\n3. Tumia sarufi, maandishi, na alama za uakifishaji sahihi.\n4. Panga mawazo yako kwa usahihi.\n5. Tumia karatasi ya ziada ikihitajika.\n6. Jumla ya Alama: 100',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Écrivez clairement et soigneusement.\n3. Utilisez une grammaire, une orthographe et une ponctuation correctes.\n4. Organisez vos idées correctement.\n5. Utilisez du papier supplémentaire si nécessaire.\n6. Total des Points: 100'
            }
        }
    },
    
    // ==================== KISWAHILI TESTS ====================
    'kiswahili': {
        'kusoma_test_3': {
            id: 'kiswahili_kusoma_3',
            title: {
                en: 'CHARLES ACADEMY – KISWAHILI KUSOMA TEST 3',
                sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI KUSOMA 3',
                fr: 'CHARLES ACADEMY – TEST DE LECTURE KISWAHILI 3'
            },
            language: 'sw', // Always in Kiswahili
            time: '1 Saa',
            totalMarks: 50,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SEHEMU A – MSOMO WA KIFUPI (20 Alama)\nSoma maandishi yafuatayo kisha jibu maswali:\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake. Familia pia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto."',
                        sw: 'SEHEMU A – MSOMO WA KIFUPI (20 Alama)\nSoma maandishi yafuatayo kisha jibu maswali:\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake. Familia pia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto."',
                        fr: 'PARTIE A – LECTURE COURTE (20 Points)\nLisez le texte suivant puis répondez aux questions:\n"La paix est importante dans la société. Lorsque les gens coopèrent et se respectent, leur vie s\'améliore. Chacun doit aider les autres et prendre soin de son environnement. La famille contribue également au développement de la société en offrant une bonne éducation aux enfants."'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Nini maana ya "amani"? (2 Alama)', 
                                sw: '1. Nini maana ya "amani"? (2 Alama)', 
                                fr: '1. Que signifie "amani"? (2 Points)' 
                            },
                            answer: { 
                                en: 'Amani maana yake ni hali ya utulivu na usalama.', 
                                sw: 'Amani maana yake ni hali ya utulivu na usalama.', 
                                fr: 'Amani signifie un état de tranquillité et de sécurité.' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Kwa nini maisha ya watu yanakuwa bora wanaposhirikiana? (2 Alama)', 
                                sw: '2. Kwa nini maisha ya watu yanakuwa bora wanaposhirikiana? (2 Alama)', 
                                fr: '2. Pourquoi la vie des gens s\'améliore-t-elle lorsqu\'ils coopèrent? (2 Points)' 
                            },
                            answer: { 
                                en: 'Maisha yanakuwa bora kwa sababu kushirikiana huleta umoja na mafanikio.', 
                                sw: 'Maisha yanakuwa bora kwa sababu kushirikiana huleta umoja na mafanikio.', 
                                fr: 'La vie s\'améliore parce que la coopération apporte l\'unité et le succès.' 
                            }
                        },
                        {
                            text: { 
                                en: '3. Toa maneno mawili yanayohusiana na kusaidia wengine. (2 Alama)', 
                                sw: '3. Toa maneno mawili yanayohusiana na kusaidia wengine. (2 Alama)', 
                                fr: '3. Donnez deux mots liés à l\'aide aux autres. (2 Points)' 
                            },
                            answer: { 
                                en: 'Maneno: ushirikiano, huruma', 
                                sw: 'Maneno: ushirikiano, huruma', 
                                fr: 'Mots : coopération, compassion' 
                            }
                        },
                        {
                            text: { 
                                en: '4. Andika sentensi moja kuhusu umuhimu wa familia kulingana na maandishi. (3 Alama)', 
                                sw: '4. Andika sentensi moja kuhusu umuhimu wa familia kulingana na maandishi. (3 Alama)', 
                                fr: '4. Écrivez une phrase sur l\'importance de la famille selon le texte. (3 Points)' 
                            },
                            answer: { 
                                en: 'Familia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto.', 
                                sw: 'Familia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto.', 
                                fr: 'La famille contribue au développement de la société en offrant une bonne éducation aux enfants.' 
                            }
                        },
                        {
                            text: { 
                                en: '5. Eleza kwa maneno yako mwenyewe umuhimu wa kuheshimiana. (3 Alama)', 
                                sw: '5. Eleza kwa maneno yako mwenyewe umuhimu wa kuheshimiana. (3 Alama)', 
                                fr: '5. Expliquez avec vos propres mots l\'importance du respect mutuel. (3 Points)' 
                            },
                            answer: { 
                                en: 'Kuheshimiana huleta amani na maelewano katika jamii.', 
                                sw: 'Kuheshimiana huleta amani na maelewano katika jamii.', 
                                fr: 'Se respecter mutuellement apporte la paix et l\'harmonie dans la société.' 
                            }
                        },
                        {
                            text: { 
                                en: '6. Toa sentensi fupi kuhusu utunzaji wa mazingira. (3 Alama)', 
                                sw: '6. Toa sentensi fupi kuhusu utunzaji wa mazingira. (3 Alama)', 
                                fr: '6. Donnez une courte phrase sur la protection de l\'environnement. (3 Points)' 
                            },
                            answer: { 
                                en: 'Kila mtu anapaswa kutunza mazingira yake.', 
                                sw: 'Kila mtu anapaswa kutunza mazingira yake.', 
                                fr: 'Chacun doit prendre soin de son environnement.' 
                            }
                        },
                        {
                            text: { 
                                en: '7. Chagua neno sahihi kuhitimisha maandishi: "Familia inachangia _____."\n☐ Shughuli za biashara ☐ Maendeleo ya jamii ☐ Michezo pekee (3 Alama)', 
                                sw: '7. Chagua neno sahihi kuhitimisha maandishi: "Familia inachangia _____."\n☐ Shughuli za biashara ☐ Maendeleo ya jamii ☐ Michezo pekee (3 Alama)', 
                                fr: '7. Choisissez le mot correct pour conclure le texte: "La famille contribue _____."\n☐ Activités commerciales ☐ Développement de la société ☐ Sports seulement (3 Points)' 
                            },
                            answer: { 
                                en: 'Maendeleo ya jamii', 
                                sw: 'Maendeleo ya jamii', 
                                fr: 'Développement de la société' 
                            }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SEHEMU B – MSOMO WA KIREFU (20 Alama)\nSoma hadithi hii kisha jibu maswali:\n"Juma alikuwa mtoto mwenye shauku ya kusoma. Kila asubuhi, alikusanya vitabu vyake na kwenda maktaba ya shule. Alipokuwa akisoma, alijifunza mambo mapya kuhusu wanyama, mimea, na historia ya nchi yake. Rafiki zake walimkaribisha pia maktaba ili wanasome pamoja. Juma alijua elimu ni ufunguo wa maisha bora."',
                        sw: 'SEHEMU B – MSOMO WA KIREFU (20 Alama)\nSoma hadithi hii kisha jibu maswali:\n"Juma alikuwa mtoto mwenye shauku ya kusoma. Kila asubuhi, alikusanya vitabu vyake na kwenda maktaba ya shule. Alipokuwa akisoma, alijifunza mambo mapya kuhusu wanyama, mimea, na historia ya nchi yake. Rafiki zake walimkaribisha pia maktaba ili wanasome pamoja. Juma alijua elimu ni ufunguo wa maisha bora."',
                        fr: 'PARTIE B – LECTURE LONGUE (20 Points)\nLisez cette histoire puis répondez aux questions:\n"Juma était un enfant passionné de lecture. Chaque matin, il rassemblait ses livres et allait à la bibliothèque de l\'école. Quand il lisait, il apprenait de nouvelles choses sur les animaux, les plantes et l\'histoire de son pays. Ses amis l\'invitaient aussi à la bibliothèque pour qu\'ils lisent ensemble. Juma savait que l\'éducation est la clé d\'une meilleure vie."'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Nini tabia kuu ya Juma? (2 Alama)', 
                                sw: '1. Nini tabia kuu ya Juma? (2 Alama)', 
                                fr: '1. Quelle est la principale caractéristique de Juma? (2 Points)' 
                            },
                            answer: { 
                                en: 'Juma alikuwa na shauku ya kusoma.', 
                                sw: 'Juma alikuwa na shauku ya kusoma.', 
                                fr: 'Juma était passionné de lecture.' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Anapenda kwenda wapi kila asubuhi? (2 Alama)', 
                                sw: '2. Anapenda kwenda wapi kila asubuhi? (2 Alama)', 
                                fr: '2. Où aime-t-il aller chaque matin? (2 Points)' 
                            },
                            answer: { 
                                en: 'Anapenda kwenda maktaba ya shule.', 
                                sw: 'Anapenda kwenda maktaba ya shule.', 
                                fr: 'Il aime aller à la bibliothèque de l\'école.' 
                            }
                        },
                        {
                            text: { 
                                en: '3. Andika vitu vitatu alivyovijifunza Juma. (3 Alama)', 
                                sw: '3. Andika vitu vitatu alivyovijifunza Juma. (3 Alama)', 
                                fr: '3. Écrivez trois choses que Juma a apprises. (3 Points)' 
                            },
                            answer: { 
                                en: 'Alijifunza kuhusu wanyama, mimea, na historia ya nchi yake.', 
                                sw: 'Alijifunza kuhusu wanyama, mimea, na historia ya nchi yake.', 
                                fr: 'Il a appris sur les animaux, les plantes et l\'histoire de son pays.' 
                            }
                        },
                        {
                            text: { 
                                en: '4. Ni nani aliyeenda pamoja na Juma maktaba? (2 Alama)', 
                                sw: '4. Ni nani aliyeenda pamoja na Juma maktaba? (2 Alama)', 
                                fr: '4. Qui est allé avec Juma à la bibliothèque? (2 Points)' 
                            },
                            answer: { 
                                en: 'Rafiki zake.', 
                                sw: 'Rafiki zake.', 
                                fr: 'Ses amis.' 
                            }
                        },
                        {
                            text: { 
                                en: '5. Kwa nini Juma anafahamu kuwa elimu ni muhimu? (3 Alama)', 
                                sw: '5. Kwa nini Juma anafahamu kuwa elimu ni muhimu? (3 Alama)', 
                                fr: '5. Pourquoi Juma sait-il que l\'éducation est importante? (3 Points)' 
                            },
                            answer: { 
                                en: 'Kwa sababu elimu ni ufunguo wa maisha bora.', 
                                sw: 'Kwa sababu elimu ni ufunguo wa maisha bora.', 
                                fr: 'Parce que l\'éducation est la clé d\'une meilleure vie.' 
                            }
                        },
                        {
                            text: { 
                                en: '6. Andika sentensi fupi kuhusu umuhimu wa kusoma kwa watoto. (3 Alama)', 
                                sw: '6. Andika sentensi fupi kuhusu umuhimu wa kusoma kwa watoto. (3 Alama)', 
                                fr: '6. Écrivez une courte phrase sur l\'importance de la lecture pour les enfants. (3 Points)' 
                            },
                            answer: { 
                                en: 'Kusoma kunawasaidia watoto kujifunza na kukua kielimu.', 
                                sw: 'Kusoma kunawasaidia watoto kujifunza na kukua kielimu.', 
                                fr: 'La lecture aide les enfants à apprendre et à grandir intellectuellement.' 
                            }
                        },
                        {
                            text: { 
                                en: '7. Chagua neno sahihi: "Juma alijua elimu ni _____ wa maisha bora."\n☐ Kifaa ☐ Ufunguo ☐ Zawadi (2 Alama)', 
                                sw: '7. Chagua neno sahihi: "Juma alijua elimu ni _____ wa maisha bora."\n☐ Kifaa ☐ Ufunguo ☐ Zawadi (2 Alama)', 
                                fr: '7. Choisissez le mot correct: "Juma savait que l\'éducation est _____ d\'une meilleure vie."\n☐ Appareil ☐ Clé ☐ Cadeau (2 Points)' 
                            },
                            answer: { 
                                en: 'Ufunguo', 
                                sw: 'Ufunguo', 
                                fr: 'Clé' 
                            }
                        },
                        {
                            text: { 
                                en: '8. Andika neno lingine linalomaanisha "shauku" katika maandishi haya. (3 Alama)', 
                                sw: '8. Andika neno lingine linalomaanisha "shauku" katika maandishi haya. (3 Alama)', 
                                fr: '8. Écrivez un autre mot qui signifie "passion" dans ce texte. (3 Points)' 
                            },
                            answer: { 
                                en: 'Pendo, hamu, mapenzi', 
                                sw: 'Pendo, hamu, mapenzi', 
                                fr: 'Amour, désir, affection' 
                            }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SEHEMU C – KUANDIKA INSHI FUPI (10 Alama)\nMaelekezo: Andika insha fupi ya sentensi 5–7 kuhusu mada ya:\n• "Jumla ya siku yangu shuleni" au\n• "Kitabu ninachopenda kusoma"',
                        sw: 'SEHEMU C – KUANDIKA INSHI FUPI (10 Alama)\nMaelekezo: Andika insha fupi ya sentensi 5–7 kuhusu mada ya:\n• "Jumla ya siku yangu shuleni" au\n• "Kitabu ninachopenda kusoma"',
                        fr: 'PARTIE C – RÉDACTION COURTE (10 Points)\nInstructions: Écrivez une courte composition de 5–7 phrases sur le thème de:\n• "Le résumé de ma journée à l\'école" ou\n• "Le livre que j\'aime lire"'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Andika insha yako hapa:', 
                                sw: 'Andika insha yako hapa:', 
                                fr: 'Écrivez votre composition ici:' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika insha yake]', 
                                sw: '[Mwanafunzi anaandika insha yake]', 
                                fr: '[L\'étudiant écrit sa composition]' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Soma maandishi kwa makini kabla ya kujibu maswali.\n2. Andika majibu kwa lugha sahihi ya Kiswahili.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                sw: 'MAELEKEZO\n1. Soma maandishi kwa makini kabla ya kujibu maswali.\n2. Andika majibu kwa lugha sahihi ya Kiswahili.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                fr: 'INSTRUCTIONS\n1. Lisez les textes attentivement avant de répondre aux questions.\n2. Écrivez les réponses en Kiswahili correct.\n3. Chaque question a ses points indiqués.\n4. Total des points = 50'
            }
        },
        
        'maandishi_test_4': {
            id: 'kiswahili_maandishi_4',
            title: {
                en: 'CHARLES ACADEMY – KISWAHILI MAANDISHI TEST 4',
                sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI MAANDISHI 4',
                fr: 'CHARLES ACADEMY – TEST D\'ÉCRITURE KISWAHILI 4'
            },
            language: 'sw', // Always in Kiswahili
            time: '1 Saa',
            totalMarks: 50,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SEHEMU A – INSHA FUPI (15 Alama)\nMaelekezo: Andika insha fupi ya 5–7 sentensi kuhusu moja ya mada hizi:',
                        sw: 'SEHEMU A – INSHA FUPI (15 Alama)\nMaelekezo: Andika insha fupi ya 5–7 sentensi kuhusu moja ya mada hizi:',
                        fr: 'PARTIE A – RÉDACTION COURTE (15 Points)\nInstructions: Écrivez une courte composition de 5–7 phrases sur l\'un de ces sujets:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Shule Yangu – Eleza darasa, walimu, wenzako, na shughuli unazofanya. (7 Alama)', 
                                sw: '1. Shule Yangu – Eleza darasa, walimu, wenzako, na shughuli unazofanya. (7 Alama)', 
                                fr: '1. Mon École – Décrivez la classe, les enseignants, vos camarades et les activités que vous faites. (7 Points)' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika kuhusu shule yake]', 
                                sw: '[Mwanafunzi anaandika kuhusu shule yake]', 
                                fr: '[L\'étudiant écrit sur son école]' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Rafiki Yangu – Eleza jina, tabia, umri, na mambo unayopenda kufanya pamoja. (8 Alama)', 
                                sw: '2. Rafiki Yangu – Eleza jina, tabia, umri, na mambo unayopenda kufanya pamoja. (8 Alama)', 
                                fr: '2. Mon Ami – Décrivez le nom, la personnalité, l\'âge et les choses que vous aimez faire ensemble. (8 Points)' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika kuhusu rafiki yake]', 
                                sw: '[Mwanafunzi anaandika kuhusu rafiki yake]', 
                                fr: '[L\'étudiant écrit sur son ami]' 
                            }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SEHEMU B – BARUA (10 Alama)\nMaelekezo: Andika barua fupi kwa rafiki au mwalimu kuhusu mojawapo ya hizi:',
                        sw: 'SEHEMU B – BARUA (10 Alama)\nMaelekezo: Andika barua fupi kwa rafiki au mwalimu kuhusu mojawapo ya hizi:',
                        fr: 'PARTIE B – LETTRE (10 Points)\nInstructions: Écrivez une courte lettre à un ami ou à un enseignant sur l\'un des sujets suivants:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Unamueleza rafiki kuhusu likizo yako ya shule. (5 Alama)', 
                                sw: '1. Unamueleza rafiki kuhusu likizo yako ya shule. (5 Alama)', 
                                fr: '1. Vous expliquez à un ami vos vacances scolaires. (5 Points)' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika barua kwa rafiki]', 
                                sw: '[Mwanafunzi anaandika barua kwa rafiki]', 
                                fr: '[L\'étudiant écrit une lettre à un ami]' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Unamshukuru mwalimu kwa msaada aliokupa kwenye masomo. (5 Alama)', 
                                sw: '2. Unamshukuru mwalimu kwa msaada aliokupa kwenye masomo. (5 Alama)', 
                                fr: '2. Vous remerciez un enseignant pour l\'aide qu\'il vous a apportée dans vos études. (5 Points)' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika barua kwa mwalimu]', 
                                sw: '[Mwanafunzi anaandika barua kwa mwalimu]', 
                                fr: '[L\'étudiant écrit une lettre à un enseignant]' 
                            }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SEHEMU C – MAELEZO YA KUFIKIRA (10 Alama)\nMaelekezo: Andika maandishi fupi ya 3–5 sentensi kwa kutumia maneno yafuatayo kwa usahihi:',
                        sw: 'SEHEMU C – MAELEZO YA KUFIKIRA (10 Alama)\nMaelekezo: Andika maandishi fupi ya 3–5 sentensi kwa kutumia maneno yafuatayo kwa usahihi:',
                        fr: 'PARTIE C – DESCRIPTION CRÉATIVE (10 Points)\nInstructions: Écrivez un court texte de 3–5 phrases en utilisant les mots suivants correctement:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Furaha – __________\n2. Hasira – __________\n3. Familia – __________\n4. Shule – __________\n5. Rafiki – __________', 
                                sw: '1. Furaha – __________\n2. Hasira – __________\n3. Familia – __________\n4. Shule – __________\n5. Rafiki – __________', 
                                fr: '1. Joie – __________\n2. Colère – __________\n3. Famille – __________\n4. École – __________\n5. Ami – __________' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika sentensi kwa maneno haya]', 
                                sw: '[Mwanafunzi anaandika sentensi kwa maneno haya]', 
                                fr: '[L\'étudiant écrit des phrases avec ces mots]' 
                            }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'SEHEMU D – MAANDISHI YA KUONESHA MTINDO WA MUDA (15 Alama)\nMaelekezo: Andika maandishi fupi ya 5–7 sentensi ukitumia vitenzi kwa muda wa sasa, uliopita, na ujao:',
                        sw: 'SEHEMU D – MAANDISHI YA KUONESHA MTINDO WA MUDA (15 Alama)\nMaelekezo: Andika maandishi fupi ya 5–7 sentensi ukitumia vitenzi kwa muda wa sasa, uliopita, na ujao:',
                        fr: 'PARTIE D – ÉCRITURE MONTRANT LE STYLE TEMPOREL (15 Points)\nInstructions: Écrivez un court texte de 5–7 phrases en utilisant des verbes au présent, passé et futur:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Eleza shughuli zako za kila siku. (Sasa) – 5 Alama', 
                                sw: '1. Eleza shughuli zako za kila siku. (Sasa) – 5 Alama', 
                                fr: '1. Décrivez vos activités quotidiennes. (Présent) – 5 Points' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika kwa wakati uliopo]', 
                                sw: '[Mwanafunzi anaandika kwa wakati uliopo]', 
                                fr: '[L\'étudiant écrit au présent]' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Eleza shughuli ulizofanya jana au wiki iliyopita. (Uliopita) – 5 Alama', 
                                sw: '2. Eleza shughuli ulizofanya jana au wiki iliyopita. (Uliopita) – 5 Alama', 
                                fr: '2. Décrivez les activités que vous avez faites hier ou la semaine dernière. (Passé) – 5 Points' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika kwa wakati uliopita]', 
                                sw: '[Mwanafunzi anaandika kwa wakati uliopita]', 
                                fr: '[L\'étudiant écrit au passé]' 
                            }
                        },
                        {
                            text: { 
                                en: '3. Eleza mpango wako wa kesho au wikendi ijayo. (Ujao) – 5 Alama', 
                                sw: '3. Eleza mpango wako wa kesho au wikendi ijayo. (Ujao) – 5 Alama', 
                                fr: '3. Décrivez votre plan pour demain ou le week-end prochain. (Futur) – 5 Points' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika kwa wakati ujao]', 
                                sw: '[Mwanafunzi anaandika kwa wakati ujao]', 
                                fr: '[L\'étudiant écrit au futur]' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa lugha safi na ufasaha.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                sw: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa lugha safi na ufasaha.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                fr: 'INSTRUCTIONS\n1. Répondez à toutes les questions en Kiswahili correct.\n2. Écrivez les réponses dans un langage propre et correct.\n3. Chaque question a ses points indiqués.\n4. Total des points = 50'
            }
        },
        
        'sarufi_test_2': {
            id: 'kiswahili_sarufi_2',
            title: {
                en: 'CHARLES ACADEMY – KISWAHILI SARUFI TEST 2',
                sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI SARUFI 2',
                fr: 'CHARLES ACADEMY – TEST DE GRAMMAIRE KISWAHILI 2'
            },
            language: 'sw', // Always in Kiswahili
            time: '1 Saa',
            totalMarks: 50,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SEHEMU A – NOMINO (NOUNS) (10 Alama)\nMaelekezo: Tambua na andika aina ya nomino katika kila sentensi.',
                        sw: 'SEHEMU A – NOMINO (10 Alama)\nMaelekezo: Tambua na andika aina ya nomino katika kila sentensi.',
                        fr: 'PARTIE A – NOMS (10 Points)\nInstructions: Identifiez et écrivez le type de nom dans chaque phrase.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Kitabu hiki ni kizuri. (2 Alama)', sw: '1. Kitabu hiki ni kizuri. (2 Alama)', fr: '1. Ce livre est bon. (2 Points)' },
                            answer: { en: 'Nomino ya kawaida', sw: 'Nomino ya kawaida', fr: 'Nom commun' }
                        },
                        {
                            text: { en: '2. Rafiki yangu anapenda michezo. (2 Alama)', sw: '2. Rafiki yangu anapenda michezo. (2 Alama)', fr: '2. Mon ami aime les sports. (2 Points)' },
                            answer: { en: 'Nomino binafsi', sw: 'Nomino binafsi', fr: 'Nom propre' }
                        },
                        {
                            text: { en: '3. Wanyama pori wanapanda mlima. (2 Alama)', sw: '3. Wanyama pori wanapanda mlima. (2 Alama)', fr: '3. Les animaux sauvages escaladent la montagne. (2 Points)' },
                            answer: { en: 'Nomino za wingi', sw: 'Nomino za wingi', fr: 'Noms au pluriel' }
                        },
                        {
                            text: { en: '4. Mwalimu alisoma somo leo. (2 Alama)', sw: '4. Mwalimu alisoma somo leo. (2 Alama)', fr: '4. L\'enseignant a étudié la leçon aujourd\'hui. (2 Points)' },
                            answer: { en: 'Nomino binafsi', sw: 'Nomino binafsi', fr: 'Nom propre' }
                        },
                        {
                            text: { en: '5. Shule yetu ipo mjini. (2 Alama)', sw: '5. Shule yetu ipo mjini. (2 Alama)', fr: '5. Notre école est en ville. (2 Points)' },
                            answer: { en: 'Nomino ya umma', sw: 'Nomino ya umma', fr: 'Nom collectif' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SEHEMU B – VITENZI (VERBS) (10 Alama)\nMaelekezo: Badilisha vitenzi vilivyo ndani ya mabano kwa muda wa sasa, uliopita, na ujao.',
                        sw: 'SEHEMU B – VITENZI (10 Alama)\nMaelekezo: Badilisha vitenzi vilivyo ndani ya mabano kwa muda wa sasa, uliopita, na ujao.',
                        fr: 'PARTIE B – VERBES (10 Points)\nInstructions: Changez les verbes entre parenthèses au présent, passé et futur.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. (Kula) Mimi _____ chakula kila siku. – sasa (1 Alama)', sw: '1. (Kula) Mimi _____ chakula kila siku. – sasa (1 Alama)', fr: '1. (Manger) Je _____ de la nourriture chaque jour. – présent (1 Point)' },
                            answer: { en: 'ninala', sw: 'ninala', fr: 'mange' }
                        },
                        {
                            text: { en: '2. (Kula) Mimi _____ chakula jana. – uliopita (1 Alama)', sw: '2. (Kula) Mimi _____ chakula jana. – uliopita (1 Alama)', fr: '2. (Manger) J\'_____ de la nourriture hier. – passé (1 Point)' },
                            answer: { en: 'nilikula', sw: 'nilikula', fr: 'ai mangé' }
                        },
                        {
                            text: { en: '3. (Kula) Mimi _____ chakula kesho. – ujao (1 Alama)', sw: '3. (Kula) Mimi _____ chakula kesho. – ujao (1 Alama)', fr: '3. (Manger) Je _____ de la nourriture demain. – futur (1 Point)' },
                            answer: { en: 'nitakula', sw: 'nitakula', fr: 'mangerai' }
                        },
                        {
                            text: { en: '4. (Soma) Yeye _____ kitabu kila asubuhi. – sasa (1 Alama)', sw: '4. (Soma) Yeye _____ kitabu kila asubuhi. – sasa (1 Alama)', fr: '4. (Lire) Il _____ un livre chaque matin. – présent (1 Point)' },
                            answer: { en: 'anasoma', sw: 'anasoma', fr: 'lit' }
                        },
                        {
                            text: { en: '5. (Soma) Yeye _____ kitabu jana. – uliopita (1 Alama)', sw: '5. (Soma) Yeye _____ kitabu jana. – uliopita (1 Alama)', fr: '5. (Lire) Il _____ un livre hier. – passé (1 Point)' },
                            answer: { en: 'alisoma', sw: 'alisoma', fr: 'a lu' }
                        },
                        {
                            text: { en: '6. (Soma) Yeye _____ kitabu kesho. – ujao (1 Alama)', sw: '6. (Soma) Yeye _____ kitabu kesho. – ujao (1 Alama)', fr: '6. (Lire) Il _____ un livre demain. – futur (1 Point)' },
                            answer: { en: 'atasoma', sw: 'atasoma', fr: 'lira' }
                        },
                        {
                            text: { en: '7. (Cheka) Wanafunzi _____ kwenye darasa. – sasa (1 Alama)', sw: '7. (Cheka) Wanafunzi _____ kwenye darasa. – sasa (1 Alama)', fr: '7. (Rire) Les étudiants _____ en classe. – présent (1 Point)' },
                            answer: { en: 'wanacheka', sw: 'wanacheka', fr: 'rient' }
                        },
                        {
                            text: { en: '8. (Cheka) Wanafunzi _____ jana. – uliopita (1 Alama)', sw: '8. (Cheka) Wanafunzi _____ jana. – uliopita (1 Alama)', fr: '8. (Rire) Les étudiants _____ hier. – passé (1 Point)' },
                            answer: { en: 'walicheka', sw: 'walicheka', fr: 'ont ri' }
                        },
                        {
                            text: { en: '9. (Cheka) Wanafunzi _____ kesho. – ujao (1 Alama)', sw: '9. (Cheka) Wanafunzi _____ kesho. – ujao (1 Alama)', fr: '9. (Rire) Les étudiants _____ demain. – futur (1 Point)' },
                            answer: { en: 'watacheka', sw: 'watacheka', fr: 'riront' }
                        },
                        {
                            text: { en: '10. (Andika) Ninyi _____ barua kesho. – ujao (1 Alama)', sw: '10. (Andika) Ninyi _____ barua kesho. – ujao (1 Alama)', fr: '10. (Écrire) Vous _____ une lettre demain. – futur (1 Point)' },
                            answer: { en: 'mtaandika', sw: 'mtaandika', fr: 'écrirez' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SEHEMU C – VIAMBATISHI NA VIUNGANISHI (5 Alama)\nMaelekezo: Jaza sentensi kwa kutumia kiambatisho au kiunganishi kinachofaa.',
                        sw: 'SEHEMU C – VIAMBATISHI NA VIUNGANISHI (5 Alama)\nMaelekezo: Jaza sentensi kwa kutumia kiambatisho au kiunganishi kinachofaa.',
                        fr: 'PARTIE C – PRÉPOSITIONS ET CONJONCTIONS (5 Points)\nInstructions: Remplissez les phrases en utilisant la préposition ou la conjonction appropriée.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Mimi ninapenda chai, _____ hapendi kahawa. (1 Alama)', sw: '1. Mimi ninapenda chai, _____ hapendi kahawa. (1 Alama)', fr: '1. J\'aime le thé, _____ je n\'aime pas le café. (1 Point)' },
                            answer: { en: 'lakini', sw: 'lakini', fr: 'mais' }
                        },
                        {
                            text: { en: '2. Yeye alisoma somo, _____ alijibu maswali yote. (1 Alama)', sw: '2. Yeye alisoma somo, _____ alijibu maswali yote. (1 Alama)', fr: '2. Il a étudié la leçon, _____ il a répondu à toutes les questions. (1 Point)' },
                            answer: { en: 'na', sw: 'na', fr: 'et' }
                        },
                        {
                            text: { en: '3. Tumeenda sokoni _____ tukarudi nyumbani. (1 Alama)', sw: '3. Tumeenda sokoni _____ tukarudi nyumbani. (1 Alama)', fr: '3. Nous sommes allés au marché _____ nous sommes retournés à la maison. (1 Point)' },
                            answer: { en: 'na', sw: 'na', fr: 'et' }
                        },
                        {
                            text: { en: '4. Nitalala mapema leo, _____ kesho nitakuwa na nguvu. (1 Alama)', sw: '4. Nitalala mapema leo, _____ kesho nitakuwa na nguvu. (1 Alama)', fr: '4. Je dormirai tôt ce soir, _____ demain j\'aurai de l\'énergie. (1 Point)' },
                            answer: { en: 'ili', sw: 'ili', fr: 'afin que' }
                        },
                        {
                            text: { en: '5. Siku zote nasoma kabla ya kupumzika, _____ nashinda mtihani. (1 Alama)', sw: '5. Siku zote nasoma kabla ya kupumzika, _____ nashinda mtihani. (1 Alama)', fr: '5. Je lis toujours avant de me reposer, _____ je réussis l\'examen. (1 Point)' },
                            answer: { en: 'kwa hivyo', sw: 'kwa hivyo', fr: 'donc' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'SEHEMU D – MUUNDO WA SENTENSI (10 Alama)\nMaelekezo: Andika sentensi sahihi kulingana na maneno yaliyotolewa.',
                        sw: 'SEHEMU D – MUUNDO WA SENTENSI (10 Alama)\nMaelekezo: Andika sentensi sahihi kulingana na maneno yaliyotolewa.',
                        fr: 'PARTIE D – STRUCTURE DE PHRASES (10 Points)\nInstructions: Écrivez des phrases correctes selon les mots donnés.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. (rafiki / kuja / kesho) – _________________________ (2 Alama)', sw: '1. (rafiki / kuja / kesho) – _________________________ (2 Alama)', fr: '1. (ami / venir / demain) – _________________________ (2 Points)' },
                            answer: { en: 'Rafiki atakuja kesho.', sw: 'Rafiki atakuja kesho.', fr: 'L\'ami viendra demain.' }
                        },
                        {
                            text: { en: '2. (mwalimu / kusoma / sasa) – _________________________ (2 Alama)', sw: '2. (mwalimu / kusoma / sasa) – _________________________ (2 Alama)', fr: '2. (enseignant / lire / maintenant) – _________________________ (2 Points)' },
                            answer: { en: 'Mwalimu anasoma sasa.', sw: 'Mwalimu anasoma sasa.', fr: 'L\'enseignant lit maintenant.' }
                        },
                        {
                            text: { en: '3. (wanafunzi / kucheza / wikiendi) – _________________________ (2 Alama)', sw: '3. (wanafunzi / kucheza / wikiendi) – _________________________ (2 Alama)', fr: '3. (étudiants / jouer / week-end) – _________________________ (2 Points)' },
                            answer: { en: 'Wanafunzi hucheza wikiendi.', sw: 'Wanafunzi hucheza wikiendi.', fr: 'Les étudiants jouent le week-end.' }
                        },
                        {
                            text: { en: '4. (mimi / kula / chakula / asubuhi) – _________________________ (2 Alama)', sw: '4. (mimi / kula / chakula / asubuhi) – _________________________ (2 Alama)', fr: '4. (je / manger / nourriture / matin) – _________________________ (2 Points)' },
                            answer: { en: 'Mimi ninala chakula asubuhi.', sw: 'Mimi ninala chakula asubuhi.', fr: 'Je mange de la nourriture le matin.' }
                        },
                        {
                            text: { en: '5. (wewe / kusafiri / jana / mji) – _________________________ (2 Alama)', sw: '5. (wewe / kusafiri / jana / mji) – _________________________ (2 Alama)', fr: '5. (tu / voyager / hier / ville) – _________________________ (2 Points)' },
                            answer: { en: 'Wewe ulisafiri jana mjini.', sw: 'Wewe ulisafiri jana mjini.', fr: 'Tu as voyagé en ville hier.' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'SEHEMU E – KIAMBATISHI CHA WAKATI (10 Alama)\nMaelekezo: Andika sentensi kwa kutumia viunganishi vya wakati vilivyo ndani ya mabano.',
                        sw: 'SEHEMU E – KIAMBATISHI CHA WAKATI (10 Alama)\nMaelekezo: Andika sentensi kwa kutumia viunganishi vya wakati vilivyo ndani ya mabano.',
                        fr: 'PARTIE E – PRÉPOSITION DE TEMPS (10 Points)\nInstructions: Écrivez des phrases en utilisant les conjonctions de temps entre parenthèses.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Nilipomaliza kazi, (baada / kabla) _____ nililala. (2 Alama)', sw: '1. Nilipomaliza kazi, (baada / kabla) _____ nililala. (2 Alama)', fr: '1. Quand j\'ai fini le travail, (après / avant) _____ je me suis couché. (2 Points)' },
                            answer: { en: 'baada ya', sw: 'baada ya', fr: 'après' }
                        },
                        {
                            text: { en: '2. (Wakati / Kabla) _____ nikiwa shuleni, nilipata barua. (2 Alama)', sw: '2. (Wakati / Kabla) _____ nikiwa shuleni, nilipata barua. (2 Alama)', fr: '2. (Pendant / Avant) _____ j\'étais à l\'école, j\'ai reçu une lettre. (2 Points)' },
                            answer: { en: 'Wakati', sw: 'Wakati', fr: 'Pendant' }
                        },
                        {
                            text: { en: '3. Nitalala mapema, (baada / kabla) _____ nitafanya mazoezi. (2 Alama)', sw: '3. Nitalala mapema, (baada / kabla) _____ nitafanya mazoezi. (2 Alama)', fr: '3. Je dormirai tôt, (après / avant) _____ je ferai des exercices. (2 Points)' },
                            answer: { en: 'kabla ya', sw: 'kabla ya', fr: 'avant' }
                        },
                        {
                            text: { en: '4. Nilipokuwa sokoni, (wakati / kabla) _____ niliona rafiki yangu. (2 Alama)', sw: '4. Nilipokuwa sokoni, (wakati / kabla) _____ niliona rafiki yangu. (2 Alama)', fr: '4. Quand j\'étais au marché, (pendant / avant) _____ j\'ai vu mon ami. (2 Points)' },
                            answer: { en: 'wakati', sw: 'wakati', fr: 'pendant' }
                        },
                        {
                            text: { en: '5. Tutaenda shuleni, (baada / kabla) _____ tutakula chakula cha mchana. (2 Alama)', sw: '5. Tutaenda shuleni, (baada / kabla) _____ tutakula chakula cha mchana. (2 Alama)', fr: '5. Nous irons à l\'école, (après / avant) _____ nous mangerons le déjeuner. (2 Points)' },
                            answer: { en: 'kabla ya', sw: 'kabla ya', fr: 'avant' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'SEHEMU F – ANDIKA INSHI FUPI (5 Alama)\nMaelekezo: Andika inshi fupi ya 5–7 sentensi kuhusu mada ya "Rafiki Yangu" ukitumia vitenzi vya muda wa sasa, uliopita, na ujao.',
                        sw: 'SEHEMU F – ANDIKA INSHI FUPI (5 Alama)\nMaelekezo: Andika inshi fupi ya 5–7 sentensi kuhusu mada ya "Rafiki Yangu" ukitumia vitenzi vya muda wa sasa, uliopita, na ujao.',
                        fr: 'PARTIE F – RÉDACTION COURTE (5 Points)\nInstructions: Écrivez une courte composition de 5–7 phrases sur le thème "Mon Ami" en utilisant des verbes au présent, passé et futur.'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Andika inshi yako hapa:', 
                                sw: 'Andika inshi yako hapa:', 
                                fr: 'Écrivez votre composition ici:' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika inshi kuhusu rafiki yake]', 
                                sw: '[Mwanafunzi anaandika inshi kuhusu rafiki yake]', 
                                fr: '[L\'étudiant écrit une composition sur son ami]' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Jibu maswali yote kwa usahihi.\n2. Andika majibu kwa lugha fasaha ya Kiswahili.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                sw: 'MAELEKEZO\n1. Jibu maswali yote kwa usahihi.\n2. Andika majibu kwa lugha fasaha ya Kiswahili.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 50',
                fr: 'INSTRUCTIONS\n1. Répondez à toutes les questions avec précision.\n2. Écrivez les réponses en Kiswahili correct.\n3. Chaque question a ses points indiqués.\n4. Total des points = 50'
            }
        },
        
        'test_1': {
            id: 'kiswahili_test_1',
            title: {
                en: 'CHARLES ACADEMY – KISWAHILI TEST 1',
                sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI 1',
                fr: 'CHARLES ACADEMY – TEST DE KISWAHILI 1'
            },
            language: 'sw', // Always in Kiswahili
            time: '1 Saa',
            totalMarks: 50,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SEHEMU A – SALAMU NA KUAGA (5 Alama)\nMaelekezo: Andika salamu au maneno ya kuaga yanayofaa kulingana na hali zilizotolewa.',
                        sw: 'SEHEMU A – SALAMU NA KUAGA (5 Alama)\nMaelekezo: Andika salamu au maneno ya kuaga yanayofaa kulingana na hali zilizotolewa.',
                        fr: 'PARTIE A – SALUTATIONS ET ADIEUX (5 Points)\nInstructions: Écrivez des salutations ou des mots d\'adieu appropriés selon les situations données.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Unakutana na mwalimu asubuhi – __________ (1 Alama)', sw: '1. Unakutana na mwalimu asubuhi – __________ (1 Alama)', fr: '1. Vous rencontrez un enseignant le matin – __________ (1 Point)' },
                            answer: { en: 'Habari za asubuhi', sw: 'Habari za asubuhi', fr: 'Bonjour' }
                        },
                        {
                            text: { en: '2. Unakutana na rafiki mchana – __________ (1 Alama)', sw: '2. Unakutana na rafiki mchana – __________ (1 Alama)', fr: '2. Vous rencontrez un ami l\'après-midi – __________ (1 Point)' },
                            answer: { en: 'Habari za mchana', sw: 'Habari za mchana', fr: 'Bonjour' }
                        },
                        {
                            text: { en: '3. Unakutana na jirani usiku – __________ (1 Alama)', sw: '3. Unakutana na jirani usiku – __________ (1 Alama)', fr: '3. Vous rencontrez un voisin le soir – __________ (1 Point)' },
                            answer: { en: 'Habari za jioni', sw: 'Habari za jioni', fr: 'Bonsoir' }
                        },
                        {
                            text: { en: '4. Unapoondoka kazini – __________ (1 Alama)', sw: '4. Unapoondoka kazini – __________ (1 Alama)', fr: '4. Quand vous quittez le travail – __________ (1 Point)' },
                            answer: { en: 'Kwaheri', sw: 'Kwaheri', fr: 'Au revoir' }
                        },
                        {
                            text: { en: '5. Unapoondoka shule – __________ (1 Alama)', sw: '5. Unapoondoka shule – __________ (1 Alama)', fr: '5. Quand vous quittez l\'école – __________ (1 Point)' },
                            answer: { en: 'Kwaheri', sw: 'Kwaheri', fr: 'Au revoir' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SEHEMU B – KUHESABU (5 Alama)\nMaelekezo: Andika nambari zifuatazo kwa maneno.',
                        sw: 'SEHEMU B – KUHESABU (5 Alama)\nMaelekezo: Andika nambari zifuatazo kwa maneno.',
                        fr: 'PARTIE B – COMPTER (5 Points)\nInstructions: Écrivez les nombres suivants en mots.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. 12 – __________ (1 Alama)', sw: '1. 12 – __________ (1 Alama)', fr: '1. 12 – __________ (1 Point)' },
                            answer: { en: 'kumi na mbili', sw: 'kumi na mbili', fr: 'douze' }
                        },
                        {
                            text: { en: '2. 37 – __________ (1 Alama)', sw: '2. 37 – __________ (1 Alama)', fr: '2. 37 – __________ (1 Point)' },
                            answer: { en: 'thelathini na saba', sw: 'thelathini na saba', fr: 'trente-sept' }
                        },
                        {
                            text: { en: '3. 145 – __________ (1 Alama)', sw: '3. 145 – __________ (1 Alama)', fr: '3. 145 – __________ (1 Point)' },
                            answer: { en: 'mia moja arobaini na tano', sw: 'mia moja arobaini na tano', fr: 'cent quarante-cinq' }
                        },
                        {
                            text: { en: '4. 298 – __________ (1 Alama)', sw: '4. 298 – __________ (1 Alama)', fr: '4. 298 – __________ (1 Point)' },
                            answer: { en: 'mia mbili tisini na nane', sw: 'mia mbili tisini na nane', fr: 'deux cent quatre-vingt-dix-huit' }
                        },
                        {
                            text: { en: '5. 500 – __________ (1 Alama)', sw: '5. 500 – __________ (1 Alama)', fr: '5. 500 – __________ (1 Point)' },
                            answer: { en: 'mia tano', sw: 'mia tano', fr: 'cinq cents' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SEHEMU C – UTAMBULISHO (5 Alama)\nMaelekezo: Andika sentensi fupi ukijitambulisha au kumtambulisha mwingine.',
                        sw: 'SEHEMU C – UTAMBULISHO (5 Alama)\nMaelekezo: Andika sentensi fupi ukijitambulisha au kumtambulisha mwingine.',
                        fr: 'PARTIE C – PRÉSENTATION (5 Points)\nInstructions: Écrivez de courtes phrases vous présentant ou présentant quelqu\'un d\'autre.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Jina – Asha, Umri – 15, Nchi – Tanzania (1 Alama)', sw: '1. Jina – Asha, Umri – 15, Nchi – Tanzania (1 Alama)', fr: '1. Nom – Asha, Âge – 15, Pays – Tanzanie (1 Point)' },
                            answer: { en: 'Jina langu ni Asha, nina umri wa miaka 15, ninatoka Tanzania.', sw: 'Jina langu ni Asha, nina umri wa miaka 15, ninatoka Tanzania.', fr: 'Je m\'appelle Asha, j\'ai 15 ans, je viens de Tanzanie.' }
                        },
                        {
                            text: { en: '2. Jina – Hamisi, Umri – 17, Shule – Charles Academy (1 Alama)', sw: '2. Jina – Hamisi, Umri – 17, Shule – Charles Academy (1 Alama)', fr: '2. Nom – Hamisi, Âge – 17, École – Charles Academy (1 Point)' },
                            answer: { en: 'Jina langu ni Hamisi, nina umri wa miaka 17, ninasoma Charles Academy.', sw: 'Jina langu ni Hamisi, nina umri wa miaka 17, ninasoma Charles Academy.', fr: 'Je m\'appelle Hamisi, j\'ai 17 ans, j\'étudie à Charles Academy.' }
                        },
                        {
                            text: { en: '3. Jina – Neema, Umri – 16, Mji – Bujumbura (1 Alama)', sw: '3. Jina – Neema, Umri – 16, Mji – Bujumbura (1 Alama)', fr: '3. Nom – Neema, Âge – 16, Ville – Bujumbura (1 Point)' },
                            answer: { en: 'Jina langu ni Neema, nina umri wa miaka 16, ninatoka Bujumbura.', sw: 'Jina langu ni Neema, nina umri wa miaka 16, ninatoka Bujumbura.', fr: 'Je m\'appelle Neema, j\'ai 16 ans, je viens de Bujumbura.' }
                        },
                        {
                            text: { en: '4. Jina – Daniel, Umri – 18, Nchi – Burundi (1 Alama)', sw: '4. Jina – Daniel, Umri – 18, Nchi – Burundi (1 Alama)', fr: '4. Nom – Daniel, Âge – 18, Pays – Burundi (1 Point)' },
                            answer: { en: 'Jina langu ni Daniel, nina umri wa miaka 18, ninatoka Burundi.', sw: 'Jina langu ni Daniel, nina umri wa miaka 18, ninatoka Burundi.', fr: 'Je m\'appelle Daniel, j\'ai 18 ans, je viens du Burundi.' }
                        },
                        {
                            text: { en: '5. Jina – Fatuma, Umri – 15, Shule – Charles Academy (1 Alama)', sw: '5. Jina – Fatuma, Umri – 15, Shule – Charles Academy (1 Alama)', fr: '5. Nom – Fatuma, Âge – 15, École – Charles Academy (1 Point)' },
                            answer: { en: 'Jina langu ni Fatuma, nina umri wa miaka 15, ninasoma Charles Academy.', sw: 'Jina langu ni Fatuma, nina umri wa miaka 15, ninasoma Charles Academy.', fr: 'Je m\'appelle Fatuma, j\'ai 15 ans, j\'étudie à Charles Academy.' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'SEHEMU D – MAENEO NA MAHALI (5 Alama)\nMaelekezo: Andika maneno au sentensi fupi kulingana na mahali.',
                        sw: 'SEHEMU D – MAENEO NA MAHALI (5 Alama)\nMaelekezo: Andika maneno au sentensi fupi kulingana na mahali.',
                        fr: 'PARTIE D – LIEUX ET ENDROITS (5 Points)\nInstructions: Écrivez des mots ou de courtes phrases selon l\'endroit.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Mahali pa kupumzika – __________ (1 Alama)', sw: '1. Mahali pa kupumzika – __________ (1 Alama)', fr: '1. Endroit pour se reposer – __________ (1 Point)' },
                            answer: { en: 'nyumbani', sw: 'nyumbani', fr: 'maison' }
                        },
                        {
                            text: { en: '2. Mahali pa shule – __________ (1 Alama)', sw: '2. Mahali pa shule – __________ (1 Alama)', fr: '2. Endroit de l\'école – __________ (1 Point)' },
                            answer: { en: 'darasa', sw: 'darasa', fr: 'classe' }
                        },
                        {
                            text: { en: '3. Mahali pa sokoni – __________ (1 Alama)', sw: '3. Mahali pa sokoni – __________ (1 Alama)', fr: '3. Endroit au marché – __________ (1 Point)' },
                            answer: { en: 'duka', sw: 'duka', fr: 'boutique' }
                        },
                        {
                            text: { en: '4. Mahali pa maktaba – __________ (1 Alama)', sw: '4. Mahali pa maktaba – __________ (1 Alama)', fr: '4. Endroit à la bibliothèque – __________ (1 Point)' },
                            answer: { en: 'rafu za vitabu', sw: 'rafu za vitabu', fr: 'rayons de livres' }
                        },
                        {
                            text: { en: '5. Mahali pa nyumba ya jirani – __________ (1 Alama)', sw: '5. Mahali pa nyumba ya jirani – __________ (1 Alama)', fr: '5. Endroit chez le voisin – __________ (1 Point)' },
                            answer: { en: 'jirani', sw: 'jirani', fr: 'voisin' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'SEHEMU E – KUONESHA FURAHA NA HASIRA (5 Alama)\nMaelekezo: Andika sentensi fupi zinazoonyesha furaha au hasira.',
                        sw: 'SEHEMU E – KUONESHA FURAHA NA HASIRA (5 Alama)\nMaelekezo: Andika sentensi fupi zinazoonyesha furaha au hasira.',
                        fr: 'PARTIE E – MONTRER LA JOIE ET LA COLÈRE (5 Points)\nInstructions: Écrivez de courtes phrases montrant la joie ou la colère.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Kuonyesha furaha – __________ (1 Alama)', sw: '1. Kuonyesha furaha – __________ (1 Alama)', fr: '1. Montrer la joie – __________ (1 Point)' },
                            answer: { en: 'Nimefurahi sana leo!', sw: 'Nimefurahi sana leo!', fr: 'Je suis très heureux aujourd\'hui!' }
                        },
                        {
                            text: { en: '2. Kuonyesha furaha – __________ (1 Alama)', sw: '2. Kuonyesha furaha – __________ (1 Alama)', fr: '2. Montrer la joie – __________ (1 Point)' },
                            answer: { en: 'Ninashangilia kwa furaha!', sw: 'Ninashangilia kwa furaha!', fr: 'Je célèbre avec joie!' }
                        },
                        {
                            text: { en: '3. Kuonyesha hasira – __________ (1 Alama)', sw: '3. Kuonyesha hasira – __________ (1 Alama)', fr: '3. Montrer la colère – __________ (1 Point)' },
                            answer: { en: 'Nimekasirika sana!', sw: 'Nimekasirika sana!', fr: 'Je suis très en colère!' }
                        },
                        {
                            text: { en: '4. Kuonyesha hasira – __________ (1 Alama)', sw: '4. Kuonyesha hasira – __________ (1 Alama)', fr: '4. Montrer la colère – __________ (1 Point)' },
                            answer: { en: 'Haiwezekani!', sw: 'Haiwezekani!', fr: 'C\'est impossible!' }
                        },
                        {
                            text: { en: '5. Kuonyesha furaha au hasira – __________ (1 Alama)', sw: '5. Kuonyesha furaha au hasira – __________ (1 Alama)', fr: '5. Montrer la joie ou la colère – __________ (1 Point)' },
                            answer: { en: 'Sijui nifurahishe au nikasirike!', sw: 'Sijui nifurahishe au nikasirike!', fr: 'Je ne sais pas si je dois être joyeux ou en colère!' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'SEHEMU F – WANYAMA NA VIUNGANISHI VYA WAKATI (5 Alama)\nMaelekezo:',
                        sw: 'SEHEMU F – WANYAMA NA VIUNGANISHI VYA WAKATI (5 Alama)\nMaelekezo:',
                        fr: 'PARTIE F – ANIMAUX ET CONJONCTIONS DE TEMPS (5 Points)\nInstructions:'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: '1. Andika jina la wanyama 3 wa porini – __________ (3 Alama)', 
                                sw: '1. Andika jina la wanyama 3 wa porini – __________ (3 Alama)', 
                                fr: '1. Écrivez le nom de 3 animaux sauvages – __________ (3 Points)' 
                            },
                            answer: { 
                                en: 'Simba, ndovu, twiga', 
                                sw: 'Simba, ndovu, twiga', 
                                fr: 'Lion, éléphant, girafe' 
                            }
                        },
                        {
                            text: { 
                                en: '2. Tumia kiunganishi cha wakati "kabla" katika sentensi – __________ (1 Alama)', 
                                sw: '2. Tumia kiunganishi cha wakati "kabla" katika sentensi – __________ (1 Alama)', 
                                fr: '2. Utilisez la conjonction de temps "avant" dans une phrase – __________ (1 Point)' 
                            },
                            answer: { 
                                en: 'Nitalala kabla ya masaa kumi usiku.', 
                                sw: 'Nitalala kabla ya masaa kumi usiku.', 
                                fr: 'Je dormirai avant dix heures du soir.' 
                            }
                        },
                        {
                            text: { 
                                en: '3. Tumia kiunganishi cha wakati "baada" katika sentensi – __________ (1 Alama)', 
                                sw: '3. Tumia kiunganishi cha wakati "baada" katika sentensi – __________ (1 Alama)', 
                                fr: '3. Utilisez la conjonction de temps "après" dans une phrase – __________ (1 Point)' 
                            },
                            answer: { 
                                en: 'Nitasoma baada ya kula chakula.', 
                                sw: 'Nitasoma baada ya kula chakula.', 
                                fr: 'J\'étudierai après avoir mangé.' 
                            }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'SEHEMU G – MDA WA SASA, MDA ULIOPITWA, NA MDA WA UJAO (10 Alama)\nMaelekezo: Andika sentensi fupi kwa kutumia vitenzi vilivyoonyeshwa kwa mda wa sasa, mda uliopita, na mda wa ujao.',
                        sw: 'SEHEMU G – MDA WA SASA, MDA ULIOPITWA, NA MDA WA UJAO (10 Alama)\nMaelekezo: Andika sentensi fupi kwa kutumia vitenzi vilivyoonyeshwa kwa mda wa sasa, mda uliopita, na mda wa ujao.',
                        fr: 'PARTIE G – TEMPS PRÉSENT, PASSÉ ET FUTUR (10 Points)\nInstructions: Écrivez de courtes phrases en utilisant les verbes indiqués au présent, passé et futur.'
                    },
                    subQuestions: [
                        {
                            text: { en: '1. Kutoka kwa kitenzi kula – sasa – __________ (1 Alama)', sw: '1. Kutoka kwa kitenzi kula – sasa – __________ (1 Alama)', fr: '1. Du verbe manger – présent – __________ (1 Point)' },
                            answer: { en: 'Ninala chakula.', sw: 'Ninala chakula.', fr: 'Je mange de la nourriture.' }
                        },
                        {
                            text: { en: '2. Kutoka kwa kitenzi kula – uliopita – __________ (1 Alama)', sw: '2. Kutoka kwa kitenzi kula – uliopita – __________ (1 Alama)', fr: '2. Du verbe manger – passé – __________ (1 Point)' },
                            answer: { en: 'Nilikula chakula.', sw: 'Nilikula chakula.', fr: 'J\'ai mangé de la nourriture.' }
                        },
                        {
                            text: { en: '3. Kutoka kwa kitenzi kula – ujao – __________ (1 Alama)', sw: '3. Kutoka kwa kitenzi kula – ujao – __________ (1 Alama)', fr: '3. Du verbe manger – futur – __________ (1 Point)' },
                            answer: { en: 'Nitakula chakula.', sw: 'Nitakula chakula.', fr: 'Je mangerai de la nourriture.' }
                        },
                        {
                            text: { en: '4. Kutoka kwa kitenzi soma – sasa – __________ (1 Alama)', sw: '4. Kutoka kwa kitenzi soma – sasa – __________ (1 Alama)', fr: '4. Du verbe lire – présent – __________ (1 Point)' },
                            answer: { en: 'Ninasoma kitabu.', sw: 'Ninasoma kitabu.', fr: 'Je lis un livre.' }
                        },
                        {
                            text: { en: '5. Kutoka kwa kitenzi soma – uliopita – __________ (1 Alama)', sw: '5. Kutoka kwa kitenzi soma – uliopita – __________ (1 Alama)', fr: '5. Du verbe lire – passé – __________ (1 Point)' },
                            answer: { en: 'Nilisoma kitabu.', sw: 'Nilisoma kitabu.', fr: 'J\'ai lu un livre.' }
                        },
                        {
                            text: { en: '6. Kutoka kwa kitenzi soma – ujao – __________ (1 Alama)', sw: '6. Kutoka kwa kitenzi soma – ujao – __________ (1 Alama)', fr: '6. Du verbe lire – futur – __________ (1 Point)' },
                            answer: { en: 'Nitasoma kitabu.', sw: 'Nitasoma kitabu.', fr: 'Je lirai un livre.' }
                        },
                        {
                            text: { en: '7. Kutoka kwa kitenzi cheka – sasa – __________ (1 Alama)', sw: '7. Kutoka kwa kitenzi cheka – sasa – __________ (1 Alama)', fr: '7. Du verbe rire – présent – __________ (1 Point)' },
                            answer: { en: 'Ninacheka.', sw: 'Ninacheka.', fr: 'Je ris.' }
                        },
                                                {
                            text: { en: '9. Kutoka kwa kitenzi cheka – ujao – __________ (1 Alama)', sw: '9. Kutoka kwa kitenzi cheka – ujao – __________ (1 Alama)', fr: '9. Du verbe rire – futur – __________ (1 Point)' },
                            answer: { en: 'Nitacheka.', sw: 'Nitacheka.', fr: 'Je rirai.' }
                        },
                        {
                            text: { en: '10. Kutoka kwa kitenzi andika – ujao – __________ (1 Alama)', sw: '10. Kutoka kwa kitenzi andika – ujao – __________ (1 Alama)', fr: '10. Du verbe écrire – futur – __________ (1 Point)' },
                            answer: { en: 'Nitaandika barua.', sw: 'Nitaandika barua.', fr: 'J\'écrirai une lettre.' }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'SEHEMU H – MAANDISHI/INSHI (5 Alama)\nMaelekezo: Andika inshi fupi ya 5–7 sentensi kuhusu "Shule Yangu".',
                        sw: 'SEHEMU H – MAANDISHI/INSHI (5 Alama)\nMaelekezo: Andika inshi fupi ya 5–7 sentensi kuhusu "Shule Yangu".',
                        fr: 'PARTIE H – RÉDACTION/COMPOSITION (5 Points)\nInstructions: Écrivez une courte composition de 5–7 phrases sur "Mon École".'
                    },
                    subQuestions: [
                        {
                            text: { 
                                en: 'Andika inshi yako hapa:', 
                                sw: 'Andika inshi yako hapa:', 
                                fr: 'Écrivez votre composition ici:' 
                            },
                            answer: { 
                                en: '[Mwanafunzi anaandika inshi kuhusu shule yake]', 
                                sw: '[Mwanafunzi anaandika inshi kuhusu shule yake]', 
                                fr: '[L\'étudiant écrit une composition sur son école]' 
                            }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'MAELEKEZO YA MTIHANI\n1. Jibu maswali yote.\n2. Andika majibu kwa ufafanuzi na usahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama za mtihani ni 50.',
                sw: 'MAELEKEZO YA MTIHANI\n1. Jibu maswali yote.\n2. Andika majibu kwa ufafanuzi na usahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama za mtihani ni 50.',
                fr: 'INSTRUCTIONS DU TEST\n1. Répondez à toutes les questions.\n2. Écrivez les réponses avec clarté et précision.\n3. Chaque question a ses points indiqués.\n4. Total des points du test est de 50.'
            }
        }
    }
};

class TestHandler {
    constructor() {
        this.testSessions = new Map(); // jid -> test session
        this.userStates = new Map(); // jid -> { step: 'selecting_course', selectedCourse: null }
    }
    
    // Initialize user state
    initUserState(jid) {
        if (!this.userStates.has(jid)) {
            this.userStates.set(jid, {
                step: 'idle',
                selectedCourse: null,
                selectedTest: null,
                language: 'en'
            });
        }
        return this.userStates.get(jid);
    }
    
    // Clear user state
    clearUserState(jid) {
        this.userStates.delete(jid);
    }
    
    // Get test menu with course selection
    getTestMenu(language = 'en') {
        const menuTexts = {
            en: `📝 *TEST SELECTION*\n\n` +
                `Select a subject by typing:\n\n` +
                `📚 ENGLISH_TESTS - English Language Tests\n` +
                `🇹🇿 KISWAHILI_TESTS - Kiswahili Tests\n\n` +
                `*Type the word in CAPITAL LETTERS*\n` +
                `Example: Type "ENGLISH_TESTS" for English tests`,
                
            sw: `📝 *UCHAGUZI WA MTIHANI*\n\n` +
                `Chagua somo kwa kuandika:\n\n` +
                `📚 ENGLISH_TESTS - Mitihani ya Lugha ya Kiingereza\n` +
                `🇹🇿 KISWAHILI_TESTS - Mitihani ya Kiswahili\n\n` +
                `*Andika neno kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "ENGLISH_TESTS" kwa mitihani ya Kiingereza`,
                
            fr: `📝 *SÉLECTION DE TEST*\n\n` +
                `Sélectionnez une matière en tapant:\n\n` +
                `📚 ENGLISH_TESTS - Tests de Langue Anglaise\n` +
                `🇹🇿 KISWAHILI_TESTS - Tests de Kiswahili\n\n` +
                `*Tapez le mot en MAJUSCULES*\n` +
                `Exemple: Tapez "ENGLISH_TESTS" pour les tests d'anglais`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Get English tests selection
    getEnglishTestsMenu(language = 'en') {
        const menuTexts = {
            en: `📚 *ENGLISH TESTS*\n\n` +
                `Available English tests:\n\n` +
                `TEST 1 - English Basic Skills\n` +
                `TEST 2 - Grammar & Sentence Structure\n` +
                `TEST 3 - Conjunctions & Sentence Joining\n` +
                `TEST 4 - Reading Skills\n` +
                `TEST 5 - Writing Skills\n\n` +
                `*Type the test name in CAPITAL LETTERS*\n` +
                `Example: Type "TEST 1" for English Test 1`,
                
            sw: `📚 *MITIHANI YA KIINGEREZA*\n\n` +
                `Mitihani ya Kiingereza inayopatikana:\n\n` +
                `TEST 1 - Stadi za Msingi za Kiingereza\n` +
                `TEST 2 - Sarufi na Muundo wa Sentensi\n` +
                `TEST 3 - Viunganishi na Kuunganisha Sentensi\n` +
                `TEST 4 - Stadi za Kusoma\n` +
                `TEST 5 - Stadi za Kuandika\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "TEST 1" kwa Mtihani wa Kiingereza 1`,
                
            fr: `📚 *TESTS D'ANGLAIS*\n\n` +
                `Tests d'anglais disponibles:\n\n` +
                `TEST 1 - Compétences de Base en Anglais\n` +
                `TEST 2 - Grammaire & Structure de Phrases\n` +
                `TEST 3 - Conjonctions & Jonction de Phrases\n` +
                `TEST 4 - Compétences de Lecture\n` +
                `TEST 5 - Compétences d'Écriture\n\n` +
                `*Tapez le nom du test en MAJUSCULES*\n` +
                `Exemple: Tapez "TEST 1" pour le Test d'Anglais 1`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Get Kiswahili tests selection
    getKiswahiliTestsMenu(language = 'en') {
        // Kiswahili tests are always displayed in Kiswahili
        const menuTexts = {
            en: `🇹🇿 *MITIHANI YA KISWAHILI*\n\n` +
                `Mitihani ya Kiswahili inayopatikana:\n\n` +
                `KUSOMA-TEST 3 - Mtihani wa Kusoma\n` +
                `MAANDISHI-TEST 4 - Mtihani wa Maandishi\n` +
                `SARUFI-TEST 2 - Mtihani wa Sarufi\n` +
                `TEST 1 - Mtihani wa Kawaida\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "KUSOMA-TEST 3"`,
                
            sw: `🇹🇿 *MITIHANI YA KISWAHILI*\n\n` +
                `Mitihani ya Kiswahili inayopatikana:\n\n` +
                `KUSOMA-TEST 3 - Mtihani wa Kusoma\n` +
                `MAANDISHI-TEST 4 - Mtihani wa Maandishi\n` +
                `SARUFI-TEST 2 - Mtihani wa Sarufi\n` +
                `TEST 1 - Mtihani wa Kawaida\n\n` +
                `*Andika jina la mtihani kwa HERUFI KUBWA*\n` +
                `Mfano: Andika "KUSOMA-TEST 3"`,
                
            fr: `🇹🇿 *TESTS DE KISWAHILI*\n\n` +
                `Tests de Kiswahili disponibles:\n\n` +
                `KUSOMA-TEST 3 - Test de Lecture\n` +
                `MAANDISHI-TEST 4 - Test d'Écriture\n` +
                `SARUFI-TEST 2 - Test de Grammaire\n` +
                `TEST 1 - Test Standard\n\n` +
                `*Tapez le nom du test en MAJUSCULES*\n` +
                `Exemple: Tapez "KUSOMA-TEST 3"`
        };
        
        return menuTexts[language] || menuTexts.en;
    }
    
    // Handle user input for TEST command
    handleUserInput(jid, text, userLanguage = 'en') {
        const upperText = text.toUpperCase().trim();
        const userState = this.initUserState(jid);
        userState.language = userLanguage;
        
        // If user has active test, handle test response
        if (this.hasActiveTest(jid)) {
            return { type: 'test_response', data: upperText };
        }
        
        // Handle course selection
        if (userState.step === 'selecting_course') {
            return this.handleCourseSelection(jid, upperText, userLanguage);
        }
        
        // Handle test selection
        if (userState.step === 'selecting_test') {
            return this.handleTestSelection(jid, upperText, userLanguage);
        }
        
        // Default: start test selection
        if (upperText === 'TEST') {
            userState.step = 'selecting_course';
            return { 
                type: 'show_menu', 
                data: this.getTestMenu(userLanguage) 
            };
        }
        
        return { type: 'invalid', data: null };
    }
    
    // Handle course selection (English or Kiswahili)
    handleCourseSelection(jid, input, userLanguage) {
        const userState = this.userStates.get(jid);
        const courseMap = {
            'ENGLISH_TESTS': 'english',
            'ENGLISH': 'english',
            'ENG': 'english',
            'KISWAHILI_TESTS': 'kiswahili',
            'KISWAHILI': 'kiswahili',
            'SWAHILI': 'kiswahili',
            'SW': 'kiswahili'
        };
        
        if (courseMap[input]) {
            userState.selectedCourse = courseMap[input];
            userState.step = 'selecting_test';
            
            if (courseMap[input] === 'english') {
                return {
                    type: 'show_course_tests',
                    data: this.getEnglishTestsMenu(userLanguage)
                };
            } else {
                // For Kiswahili, always show in Kiswahili
                return {
                    type: 'show_course_tests',
                    data: this.getKiswahiliTestsMenu(userLanguage)
                };
            }
        } else {
            return {
                type: 'invalid_choice',
                data: this.getInvalidChoiceText(userLanguage) + '\n\n' + this.getTestMenu(userLanguage)
            };
        }
    }
    
    // Handle test selection
    handleTestSelection(jid, input, userLanguage) {
        const userState = this.userStates.get(jid);
        const courseId = userState.selectedCourse;
        
        if (!courseId) {
            userState.step = 'selecting_course';
            return {
                type: 'show_menu',
                data: this.getTestMenu(userLanguage)
            };
        }
        
        // Map test names to test IDs
        const testMaps = {
            'english': {
                'TEST 1': 'test_1',
                'TEST1': 'test_1',
                'TEST 2': 'test_2',
                'TEST2': 'test_2',
                'TEST 3': 'test_3',
                'TEST3': 'test_3',
                'TEST 4': 'test_4',
                'TEST4': 'test_4',
                'TEST 5': 'test_5',
                'TEST5': 'test_5'
            },
            'kiswahili': {
                'KUSOMA-TEST 3': 'kusoma_test_3',
                'KUSOMA': 'kusoma_test_3',
                'KUSOMA TEST 3': 'kusoma_test_3',
                'MAANDISHI-TEST 4': 'maandishi_test_4',
                'MAANDISHI': 'maandishi_test_4',
                'MAANDISHI TEST 4': 'maandishi_test_4',
                'SARUFI-TEST 2': 'sarufi_test_2',
                'SARUFI': 'sarufi_test_2',
                'SARUFI TEST 2': 'sarufi_test_2',
                'TEST 1': 'test_1',
                'TEST1': 'test_1'
            }
        };
        
        const testMap = testMaps[courseId] || {};
        const testId = testMap[input];
        
        if (testId) {
            // Start the test
            const test = this.startTest(jid, courseId, testId, userLanguage);
            
            if (test.error) {
                return {
                    type: 'error',
                    data: this.getErrorText(userLanguage)
                };
            }
            
            // Clear user state
            this.clearUserState(jid);
            
            // Get test instructions and first question
            const instructions = this.getTestInstructions(jid);
            const question = this.getCurrentQuestion(jid);
            
            let startText = `📝 *${test.testSession.title}*\n\n`;
            startText += `⏰ Time: ${test.testSession.time}\n`;
            startText += `📊 Total Marks: ${test.testSession.totalMarks}\n\n`;
            startText += `📋 *Instructions:*\n${instructions}\n\n`;
            
            if (question) {
                startText += `*First Question:*\n\n`;
                startText += this.formatTestQuestion(question, test.testSession.displayLanguage);
            }
            
            startText += `\n\nType your answer or CANCEL to stop.`;
            
            return {
                type: 'test_started',
                data: startText
            };
        } else {
            if (courseId === 'english') {
                return {
                    type: 'invalid_choice',
                    data: this.getInvalidChoiceText(userLanguage) + '\n\n' + 
                          this.getEnglishTestsMenu(userLanguage)
                };
            } else {
                return {
                    type: 'invalid_choice',
                    data: this.getInvalidChoiceText(userLanguage) + '\n\n' + 
                          this.getKiswahiliTestsMenu(userLanguage)
                };
            }
        }
    }
    
    // Start a test for a user
    startTest(jid, courseId, testId, userLanguage = 'en') {
        const course = testData[courseId];
        if (!course || !course[testId]) {
            return { error: true, message: 'Test not found' };
        }
        
        const test = course[testId];
        
        // Determine display language
        // For Kiswahili tests, always use Kiswahili
        const displayLanguage = courseId === 'kiswahili' ? 'sw' : userLanguage;
        
        const testSession = {
            jid: jid,
            courseId: courseId,
            testId: testId,
            userLanguage: userLanguage,
            displayLanguage: displayLanguage,
            title: test.title[displayLanguage],
            time: test.time,
            totalMarks: test.totalMarks,
            instructions: test.instructions[displayLanguage],
            questions: test.questions,
            currentQuestion: 0,
            currentSubQuestion: 0,
            answers: [],
            startTime: Date.now(),
            score: 0,
            completed: false
        };
        
        this.testSessions.set(jid, testSession);
        return { success: true, testSession };
    }
    
    // Get current question
    getCurrentQuestion(jid) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return null;
        
        if (session.currentQuestion >= session.questions.length) {
            session.completed = true;
            return null;
        }
        
        const question = session.questions[session.currentQuestion];
        const subQuestion = question.subQuestions[session.currentSubQuestion];
        
        return {
            questionNumber: session.currentQuestion + 1,
            subQuestionNumber: session.currentSubQuestion + 1,
            totalQuestions: session.questions.length,
            totalSubQuestions: question.subQuestions.length,
            text: question.text[session.displayLanguage],
            subText: subQuestion.text[session.displayLanguage],
            answer: subQuestion.answer[session.displayLanguage]
        };
    }
    
    // Submit answer
    submitAnswer(jid, answer) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return { error: true, message: 'No active test' };
        
        const question = session.questions[session.currentQuestion];
        const subQuestion = question.subQuestions[session.currentSubQuestion];
        
        // Store answer
        session.answers.push({
            questionNumber: session.currentQuestion + 1,
            subQuestionNumber: session.currentSubQuestion + 1,
            userAnswer: answer,
            correctAnswer: subQuestion.answer[session.displayLanguage],
            isCorrect: this.checkAnswer(answer, subQuestion.answer[session.displayLanguage])
        });
        
        // Move to next sub-question
        session.currentSubQuestion++;
        
        // If all sub-questions done, move to next question
        if (session.currentSubQuestion >= question.subQuestions.length) {
            session.currentQuestion++;
            session.currentSubQuestion = 0;
        }
        
        // Check if test is complete
        if (session.currentQuestion >= session.questions.length) {
            session.completed = true;
            session.endTime = Date.now();
            session.score = this.calculateScore(session);
            
            // Save to database
            this.saveTestResults(session);
        }
        
        return { 
            success: true, 
            isComplete: session.completed,
            nextQuestion: !session.completed
        };
    }
    
    // Check if answer is correct
    checkAnswer(userAnswer, correctAnswer) {
        const user = userAnswer.toLowerCase().trim();
        const correct = correctAnswer.toLowerCase().trim();
        
        // For open-ended questions, check if answer contains keywords
        if (correct.includes('[') && correct.includes(']')) {
            // This is an open-ended question, accept any reasonable answer
            return user.length > 3; // Minimum length check
        }
        
        // For specific answers, do exact or partial match
        return user === correct || correct.includes(user) || user.includes(correct);
    }
    
    // Calculate score
    calculateScore(session) {
        const correctAnswers = session.answers.filter(a => a.isCorrect).length;
        const totalQuestions = session.answers.length;
        
        return totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
    }
    
    // Get test results
    getTestResults(jid) {
        const session = this.testSessions.get(jid);
        if (!session || !session.completed) return null;
        
        const timeTaken = Math.round((session.endTime - session.startTime) / 1000 / 60); // in minutes
        const correctAnswers = session.answers.filter(a => a.isCorrect).length;
        const totalQuestions = session.answers.length;
        
        return {
            title: session.title,
            course: session.courseId,
            score: session.score,
            correctAnswers: correctAnswers,
            totalQuestions: totalQuestions,
            timeTaken: timeTaken,
            passed: session.score >= 70,
            answers: session.answers
        };
    }
    
    // Save test results to database
    async saveTestResults(session) {
        try {
            const results = {
                student_jid: session.jid,
                course_id: session.courseId,
                test_id: session.testId,
                test_title: session.title,
                score: session.score,
                total_questions: session.answers.length,
                correct_answers: session.answers.filter(a => a.isCorrect).length,
                time_taken: Math.round((session.endTime - session.startTime) / 1000),
                passed: session.score >= 70,
                completed_at: new Date().toISOString(),
                answers: JSON.stringify(session.answers)
            };
            
            console.log(`📊 Test results saved for ${session.jid}: ${session.score}%`);
        } catch (error) {
            console.error('Error saving test results:', error);
        }
    }
    
    // Cancel test
    cancelTest(jid) {
        this.testSessions.delete(jid);
        this.clearUserState(jid);
        return { success: true };
    }
    
    // Check if user has active test
    hasActiveTest(jid) {
        const session = this.testSessions.get(jid);
        return session && !session.completed;
    }
    
    // Get active test info
    getActiveTestInfo(jid) {
        const session = this.testSessions.get(jid);
        if (!session || session.completed) return null;
        
        const current = this.getCurrentQuestion(jid);
        const answered = session.answers.length;
        const totalSubQuestions = session.questions.reduce((sum, q) => sum + q.subQuestions.length, 0);
        
        return {
            course: session.courseId,
            test: session.testId,
            title: session.title,
            progress: `${answered}/${totalSubQuestions}`,
            currentQuestion: current ? current.questionNumber : 0,
            totalQuestions: session.questions.length
        };
    }
    
    // Get test instructions
    getTestInstructions(jid) {
        const session = this.testSessions.get(jid);
        if (!session) return null;
        
        return session.instructions;
    }
    
    // Format test question for display
    formatTestQuestion(question, language) {
        let text = `📝 *Question ${question.questionNumber}.${question.subQuestionNumber}*\n\n`;
        text += `${question.text}\n\n`;
        
        if (question.subText && question.subText.trim() !== '') {
            text += `➡️ ${question.subText}\n\n`;
        }
        
        text += `Progress: ${question.questionNumber}/${question.totalQuestions} `;
        text += `(Sub-question ${question.subQuestionNumber}/${question.totalSubQuestions})\n\n`;
        
        // Add answer instruction based on language
        const answerInstructions = {
            en: '✍️ Type your answer:',
            sw: '✍️ Andika jibu lako:',
            fr: '✍️ Tapez votre réponse:'
        };
        
        text += answerInstructions[language] || answerInstructions.en;
        
        return text;
    }
    
    // Get test result text
    getTestResultText(results, language = 'en') {
        const texts = {
            en: `📝 *TEST RESULTS*\n\n` +
                `📚 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Time Taken: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 CONGRATULATIONS! YOU PASSED! 🎉' : '📚 Keep practicing! Try again.'}\n\n` +
                `Type MENU to continue.`,
                
            sw: `📝 *MATOKEO YA MTIHANI*\n\n` +
                `📚 Mtihani: ${results.title}\n` +
                `📊 Alama: ${results.score}%\n` +
                `✅ Sahihi: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Muda Uliochukuliwa: ${results.timeTaken} dakika\n\n` +
                `${results.passed ? '🎉 HONGERA! UMEWEZA KUPITA! 🎉' : '📚 Endelea kujizoeza! Jaribu tena.'}\n\n` +
                `Andika MENU kuendelea.`,
                
            fr: `📝 *RÉSULTATS DU TEST*\n\n` +
                `📚 Test: ${results.title}\n` +
                `📊 Score: ${results.score}%\n` +
                `✅ Correct: ${results.correctAnswers}/${results.totalQuestions}\n` +
                `⏰ Temps Pris: ${results.timeTaken} minutes\n\n` +
                `${results.passed ? '🎉 FÉLICITATIONS ! VOUS AVEZ RÉUSSI ! 🎉' : '📚 Continuez à pratiquer ! Réessayez.'}\n\n` +
                `Tapez MENU pour continuer.`
        };
        
        return texts[language] || texts.en;
    }
    
    // Get error text
    getErrorText(language = 'en') {
        const texts = {
            en: '❌ An error occurred. Please try again.',
            sw: '❌ Hitilafu imetokea. Tafadhali jaribu tena.',
            fr: '❌ Une erreur s\'est produite. Veuillez réessayer.'
        };
        return texts[language] || texts.en;
    }
    
    // Get invalid choice text
    getInvalidChoiceText(language = 'en') {
        const texts = {
            en: '❌ Invalid choice. Please type one of the options shown.',
            sw: '❌ Chaguo batili. Tafadhali andika moja ya chaguo zilizoonyeshwa.',
            fr: '❌ Choix invalide. Veuillez taper l\'une des options affichées.'
        };
        return texts[language] || texts.en;
    }
}

module.exports = new TestHandler();