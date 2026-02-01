// testsData.js - Contains all test questions for all levels
const testsData = {
    // ==================== TEST 1: BEGINNER ====================
     // ==================== TEST 5: ENGLISH TEST ONE ====================
    '1': {
        id: 'english_test_one',
        title: {
            en: 'ENGLISH TEST ONE',
            sw: 'MTIHANI WA KIINGEREZA WA KWANZA',
            fr: 'TEST D\'ANGLAIS NUMÉRO UN'
        },
        time: '60 minutes',
        totalMarks: 100,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SECTION A: Write TRUE or FALSE (25 questions - 50 marks)',
                    sw: 'SEHEMU A: Andika KWELI au SI KWELI (maswali 25 - alama 50)',
                    fr: 'SECTION A: Écrivez VRAI ou FAUX (25 questions - 50 points)'
                },
                subQuestions: [
                    {
                        text: { 
                            en: '"Good morning" is used in the morning.', 
                            sw: '"Good morning" hutumiwa asubuhi.', 
                            fr: '"Good morning" est utilisé le matin.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"Good night" is used when meeting someone in the afternoon.', 
                            sw: '"Good night" hutumiwa unapokutana na mtu mchana.', 
                            fr: '"Good night" est utilisé lorsqu\'on rencontre quelqu\'un l\'après-midi.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"How are you?" is a greeting.', 
                            sw: '"How are you?" ni salam.', 
                            fr: '"How are you?" est une salutation.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"Goodbye" is used when you arrive.', 
                            sw: '"Goodbye" hutumiwa unapofika.', 
                            fr: '"Goodbye" est utilisé lorsque vous arrivez.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"Long time no see" is used when you meet after a long time.', 
                            sw: '"Long time no see" hutumiwa unapokutana baada ya muda mrefu.', 
                            fr: '"Long time no see" est utilisé lorsqu\'on se rencontre après longtemps.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"I am a student" is in the present tense.', 
                            sw: '"I am a student" iko katika wakati uliopo.', 
                            fr: '"I am a student" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"She was my friend" is in the past tense.', 
                            sw: '"She was my friend" iko katika wakati uliopita.', 
                            fr: '"She was my friend" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"They will be happy" is in the future tense.', 
                            sw: '"They will be happy" iko katika wakati ujao.', 
                            fr: '"They will be happy" est au futur.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"He have a bicycle" is a correct sentence.', 
                            sw: '"He have a bicycle" ni sentensi sahihi.', 
                            fr: '"He have a bicycle" est une phrase correcte.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"We are at school" is in the present tense.', 
                            sw: '"We are at school" iko katika wakati uliopo.', 
                            fr: '"We are at school" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"I had two brothers" is in the past tense.', 
                            sw: '"I had two brothers" iko katika wakati uliopita.', 
                            fr: '"I had two brothers" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"She will has a cat" is a correct sentence.', 
                            sw: '"She will has a cat" ni sentensi sahihi.', 
                            fr: '"She will has a cat" est une phrase correcte.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"They were tired" is in the past tense.', 
                            sw: '"They were tired" iko katika wakati uliopita.', 
                            fr: '"They were tired" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"You are my neighbor" is in the present tense.', 
                            sw: '"You are my neighbor" iko katika wakati uliopo.', 
                            fr: '"You are my neighbor" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"He will have a car" is in the future tense.', 
                            sw: '"He will have a car" iko katika wakati ujao.', 
                            fr: '"He will have a car" est au futur.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '3:15 can be read as "quarter past three".', 
                            sw: '3:15 inaweza kusomwa kama "robo baada ya tatu".', 
                            fr: '3:15 peut être lu comme "quart après trois".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '9:00 can be read as "nine o\'clock".', 
                            sw: '9:00 inaweza kusomwa kama "saa tisa".', 
                            fr: '9:00 peut être lu comme "neuf heures".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'The number 27 is written "twenty-seven".', 
                            sw: 'Nambari 27 imeandikwa "twenty-seven".', 
                            fr: 'Le nombre 27 s\'écrit "twenty-seven".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'The number 450 is written "four hundred and fifty".', 
                            sw: 'Nambari 450 imeandikwa "four hundred and fifty".', 
                            fr: 'Le nombre 450 s\'écrit "four hundred and fifty".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '1st is an ordinal number.', 
                            sw: '1st ni nambari ya kihesabu.', 
                            fr: '1st est un nombre ordinal.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'My father\'s brother is my uncle.', 
                            sw: 'Kaka ya baba yangu ni mjomba wangu.', 
                            fr: 'Le frère de mon père est mon oncle.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'My mother\'s sister is my aunt.', 
                            sw: 'Dada ya mama yangu ni shangazi yangu.', 
                            fr: 'La sœur de ma mère est ma tante.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'A hospital is a place where students learn.', 
                            sw: 'Hospitali ni mahali ambapo wanafunzi husoma.', 
                            fr: 'Un hôpital est un endroit où les étudiants apprennent.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: 'A church is a place where people pray.', 
                            sw: 'Kanisa ni mahali ambapo watu husali.', 
                            fr: 'Une église est un endroit où les gens prient.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'A bank is a place where we keep money safely.', 
                            sw: 'Benki ni mahali ambapo tunaweka pesa kwa usalama.', 
                            fr: 'Une banque est un endroit où nous gardons l\'argent en sécurité.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SECTION B: Multiple Choice - Choose the correct answer (A, B, C or D) (25 questions - 50 marks)',
                    sw: 'SEHEMU B: Chaguo Nyingi - Chagua jibu sahihi (A, B, C au D) (maswali 25 - alama 50)',
                    fr: 'SECTION B: Choix Multiple - Choisissez la bonne réponse (A, B, C ou D) (25 questions - 50 points)'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'You meet your teacher in the morning. What do you say?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye', 
                            sw: 'Unakutana na mwalimu wako asubuhi. Unasema nini?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye', 
                            fr: 'Vous rencontrez votre professeur le matin. Que dites-vous?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'You leave your friend at school. You say:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see', 
                            sw: 'Unaacha rafiki yako shuleni. Unasema:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see', 
                            fr: 'Vous quittez votre ami à l\'école. Vous dites:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'She _____ my friend.\nA. am\nB. is\nC. are\nD. were', 
                            sw: 'Yeye _____ rafiki yangu.\nA. am\nB. is\nC. are\nD. were', 
                            fr: 'Elle _____ mon amie.\nA. am\nB. is\nC. are\nD. were' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'They _____ happy yesterday.\nA. are\nB. is\nC. were\nD. will', 
                            sw: 'Wao _____ furaha jana.\nA. are\nB. is\nC. were\nD. will', 
                            fr: 'Ils _____ heureux hier.\nA. are\nB. is\nC. were\nD. will' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'He _____ a bicycle.\nA. have\nB. has\nC. had\nD. will', 
                            sw: 'Yeye _____ baiskeli.\nA. have\nB. has\nC. had\nD. will', 
                            fr: 'Il _____ un vélo.\nA. have\nB. has\nC. had\nD. will' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"I am at school" in past tense becomes:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school', 
                            sw: '"I am at school" katika wakati uliopita inakuwa:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school', 
                            fr: '"I am at school" au passé devient:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"She has a pen" in future tense becomes:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen', 
                            sw: '"She has a pen" katika wakati ujao inakuwa:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen', 
                            fr: '"She has a pen" au futur devient:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '7:30 is read as:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen', 
                            sw: '7:30 inasomwa kama:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen', 
                            fr: '7:30 se lit comme:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '12:45 is read as:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock', 
                            sw: '12:45 inasomwa kama:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock', 
                            fr: '12:45 se lit comme:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'The number 103 in words is:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen', 
                            sw: 'Nambari 103 kwa maneno ni:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen', 
                            fr: 'Le nombre 103 en lettres est:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'The ordinal form of 2 is:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth', 
                            sw: 'Fomu ya kihesabu ya 2 ni:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth', 
                            fr: 'La forme ordinale de 2 est:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'Happiness is a kind of:\nA. Place\nB. Number\nC. Feeling\nD. Family', 
                            sw: 'Furaha ni aina ya:\nA. Mahali\nB. Nambari\nC. Hisia\nD. Familia', 
                            fr: 'Le bonheur est une sorte de:\nA. Lieu\nB. Nombre\nC. Sentiment\nD. Famille' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"Anger" shows that someone is:\nA. Happy\nB. Calm\nC. Angry\nD. Proud', 
                            sw: '"Anger" inaonyesha kuwa mtu ni:\nA. Furaha\nB. Utulivu\nC. Hasira\nD. Majivuno', 
                            fr: '"Anger" montre que quelqu\'un est:\nA. Heureux\nB. Calme\nC. En colère\nD. Fier' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My father is my:\nA. Brother\nB. Uncle\nC. Parent\nD. Son', 
                            sw: 'Baba yangu ni:\nA. Kaka\nB. Mjomba\nC. Mzazi\nD. Mwana', 
                            fr: 'Mon père est mon:\nA. Frère\nB. Oncle\nC. Parent\nD. Fils' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My grandfather is my father\'s:\nA. Brother\nB. Father\nC. Son\nD. Uncle', 
                            sw: 'Babu yangu ni:\nA. Kaka\nB. Baba\nC. Mwana\nD. Mjomba', 
                            fr: 'Mon grand-père est le _____ de mon père.\nA. Frère\nB. Père\nC. Fils\nD. Oncle' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do students learn?\nA. Hospital\nB. Market\nC. School\nD. Church', 
                            sw: 'Wanafunzi husoma wapi?\nA. Hospitali\nB. Sokoni\nC. Shuleni\nD. Kanisani', 
                            fr: 'Où les étudiants apprennent-ils?\nA. Hôpital\nB. Marché\nC. École\nD. Église' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'Where do sick people go?\nA. Bank\nB. Hospital\nC. Library\nD. Church', 
                            sw: 'Wagonjwa huenda wapi?\nA. Benki\nB. Hospitali\nC. Maktaba\nD. Kanisa', 
                            fr: 'Où vont les personnes malades?\nA. Banque\nB. Hôpital\nC. Bibliothèque\nD. Église' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do people buy food?\nA. Market\nB. Bank\nC. School\nD. Office', 
                            sw: 'Watu hununua chakula wapi?\nA. Sokoni\nB. Benki\nC. Shuleni\nD. Ofisini', 
                            fr: 'Où les gens achètent-ils de la nourriture?\nA. Marché\nB. Banque\nC. École\nD. Bureau' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'Where do we watch movies?\nA. Church\nB. Cinema\nC. School\nD. Hospital', 
                            sw: 'Tunaangalia sinema wapi?\nA. Kanisa\nB. Sinema\nC. Shule\nD. Hospitali', 
                            fr: 'Où regardons-nous des films?\nA. Église\nB. Cinéma\nC. École\nD. Hôpital' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do we play football?\nA. Library\nB. Classroom\nC. Playground\nD. Bank', 
                            sw: 'Tunacheza mpira wapi?\nA. Maktaba\nB. Darasani\nC. Uwanja wa michezo\nD. Benki', 
                            fr: 'Où jouons-nous au football?\nA. Bibliothèque\nB. Salle de classe\nC. Terrain de jeu\nD. Banque' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"We _____ tired" (present tense)\nA. is\nB. are\nC. was\nD. will', 
                            sw: '"Sisi _____ uchovu" (wakati uliopo)\nA. is\nB. are\nC. was\nD. will', 
                            fr: '"Nous _____ fatigués" (présent)\nA. is\nB. are\nC. was\nD. will' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"He _____ my neighbor" (past tense)\nA. is\nB. are\nC. was\nD. will', 
                            sw: '"Yeye _____ jirani yangu" (wakati uliopita)\nA. is\nB. are\nC. was\nD. will', 
                            fr: '"Il _____ mon voisin" (passé)\nA. is\nB. are\nC. was\nD. will' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"They _____ happy tomorrow"\nA. are\nB. were\nC. will be\nD. is', 
                            sw: '"Wao _____ furaha kesho"\nA. are\nB. were\nC. will be\nD. is', 
                            fr: '"Ils _____ heureux demain"\nA. are\nB. were\nC. will be\nD. is' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My mother\'s sister is my:\nA. Aunt\nB. Uncle\nC. Cousin\nD. Sister', 
                            sw: 'Dada ya mama yangu ni:\nA. Shangazi\nB. Mjomba\nC. Binamu\nD. Dada', 
                            fr: 'La sœur de ma mère est ma:\nA. Tante\nB. Oncle\nC. Cousine\nD. Sœur' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'A library is a place where we:\nA. Sleep\nB. Pray\nC. Buy food\nD. Read quietly', 
                            sw: 'Maktaba ni mahali ambapo sisi:\nA. Kulala\nB. Kusali\nC. Kununua chakula\nD. Kusoma kwa utulivu', 
                            fr: 'Une bibliothèque est un endroit où nous:\nA. Dormons\nB. Prions\nC. Achetons de la nourriture\nD. Lisons tranquillement' 
                        },
                        answer: { en: 'D', sw: 'D', fr: 'D' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'ENGLISH TEST ONE INSTRUCTIONS\n• Answer ALL questions.\n• Section A: Write TRUE or FALSE.\n• Section B: Choose the correct answer (A, B, C or D).\n• Time: 60 minutes\n• Total Marks: 100\n• Passing score: 60%',
            sw: 'MAELEKEZO YA MTIHANI WA KIINGEREZA WA KWANZA\n• Jibu maswali YOTE.\n• Sehemu A: Andika KWELI au SI KWELI.\n• Sehemu B: Chagua jibu sahihi (A, B, C au D).\n• Muda: dakika 60\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
            fr: 'INSTRUCTIONS DU TEST D\'ANGLAIS NUMÉRO UN\n• Répondez à TOUTES les questions.\n• Section A: Écrivez VRAI ou FAUX.\n• Section B: Choisissez la bonne réponse (A, B, C ou D).\n• Temps: 60 minutes\n• Total des points: 100\n• Score de passage: 60%'
        }
    },

    // ==================== TEST 2: INTERMEDIATE ====================
    '2': {
        id: 'test_intermediate',
        title: {
            en: 'INTERMEDIATE LEVEL TEST',
            sw: 'MTIHANI WA KIWANGO CHA KATI',
            fr: 'TEST NIVEAU INTERMÉDIAIRE'
        },
        time: '45 minutes',
        totalMarks: 75,
        questions: [
            {
                number: 1,
                text: {
                    en: 'English Grammar - Choose the correct answer.',
                    sw: 'Sarufi ya Kiingereza - Chagua jibu sahihi.',
                    fr: 'Grammaire anglaise - Choisissez la bonne réponse.'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'She _____ to school every day.\nA. go\nB. goes\nC. going\nD. gone', 
                            sw: 'Yeye _____ shuleni kila siku.\nA. kwenda\nB. huenda\nC. akienda\nD. amekwenda', 
                            fr: 'Elle _____ à l\'école chaque jour.\nA. aller\nB. va\nC. allant\nD. est allée' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'They _____ football yesterday.\nA. play\nB. played\nC. playing\nD. will play', 
                            sw: 'Wao _____ mpira wa miguu jana.\nA. cheza\nB. walicheza\nC. wakicheza\nD. watacheza', 
                            fr: 'Ils _____ football hier.\nA. jouer\nB. ont joué\nC. jouant\nD. joueront' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'I _____ English now.\nA. study\nB. studied\nC. am studying\nD. will study', 
                            sw: 'Mimi _____ Kiingereza sasa.\nA. soma\nB. nilisoma\nC. ninasoma\nD. nitasoma', 
                            fr: 'Je _____ anglais maintenant.\nA. étudie\nB. ai étudié\nC. suis en train d\'étudier\nD. étudierai' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'He _____ a teacher.\nA. is\nB. are\nC. am\nD. be', 
                            sw: 'Yeye _____ mwalimu.\nA. ni\nB. ni\nC. ni\nD. kuwa', 
                            fr: 'Il _____ professeur.\nA. est\nB. sont\nC. suis\nD. être' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'We _____ happy today.\nA. is\nB. are\nC. am\nD. be', 
                            sw: 'Sisi _____ furaha leo.\nA. ni\nB. ni\nC. ni\nD. kuwa', 
                            fr: 'Nous _____ heureux aujourd\'hui.\nA. est\nB. sommes\nC. suis\nD. être' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'Mathematics - Solve the problems.',
                    sw: 'Hisabati - Tatua matatizo.',
                    fr: 'Mathématiques - Résolvez les problèmes.'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'What is 15 × 3?\nA. 30\nB. 35\nC. 40\nD. 45', 
                            sw: '15 × 3 ni ngapi?\nA. 30\nB. 35\nC. 40\nD. 45', 
                            fr: 'Que fait 15 × 3?\nA. 30\nB. 35\nC. 40\nD. 45' 
                        },
                        answer: { en: 'D', sw: 'D', fr: 'D' }
                    },
                    {
                        text: { 
                            en: 'If a = 5 and b = 3, what is a² + b²?\nA. 25\nB. 34\nC. 16\nD. 64', 
                            sw: 'Kama a = 5 na b = 3, a² + b² ni ngapi?\nA. 25\nB. 34\nC. 16\nD. 64', 
                            fr: 'Si a = 5 et b = 3, que fait a² + b²?\nA. 25\nB. 34\nC. 16\nD. 64' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'What is 25% of 200?\nA. 25\nB. 50\nC. 75\nD. 100', 
                            sw: '25% ya 200 ni ngapi?\nA. 25\nB. 50\nC. 75\nD. 100', 
                            fr: 'Que fait 25% de 200?\nA. 25\nB. 50\nC. 75\nD. 100' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'INTERMEDIATE LEVEL TEST INSTRUCTIONS\n• Answer all questions.\n• Read each question carefully.\n• Time: 45 minutes\n• Passing score: 70%',
            sw: 'MAELEKEZO YA MTIHANI WA KIWANGO CHA KATI\n• Jibu maswali yote.\n• Soma kila swali kwa makini.\n• Muda: dakika 45\n• Alama ya kupita: 70%',
            fr: 'INSTRUCTIONS DU TEST INTERMÉDIAIRE\n• Répondez à toutes les questions.\n• Lisez chaque question attentivement.\n• Temps: 45 minutes\n• Score de passage: 70%'
        }
    },

    // ==================== TEST 3: ADVANCED ====================
    '3': {
        id: 'test_advanced',
        title: {
            en: 'ADVANCED LEVEL TEST',
            sw: 'MTIHANI WA KIWANGO CHA JUU',
            fr: 'TEST NIVEAU AVANCÉ'
        },
        time: '60 minutes',
        totalMarks: 100,
        questions: [
            {
                number: 1,
                text: {
                    en: 'Advanced English - Choose the correct answer.',
                    sw: 'Kiingereza cha Juu - Chagua jibu sahihi.',
                    fr: 'Anglais avancé - Choisissez la bonne réponse.'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'If I _____ you, I would study harder.\nA. am\nB. was\nC. were\nD. be', 
                            sw: 'Kama mimi _____ wewe, ningesoma kwa bidii zaidi.\nA. ni\nB. nilikuwa\nC. ningekuwa\nD. kuwa', 
                            fr: 'Si je _____ toi, j\'étudierais plus dur.\nA. suis\nB. étais\nC. étais\nD. être' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'She _____ working here since 2010.\nA. has been\nB. have been\nC. is\nD. was', 
                            sw: 'Yeye _____ kufanya kazi hapa tangu 2010.\nA. amekuwa\nB. wamekuwa\nC. ni\nD. alikuwa', 
                            fr: 'Elle _____ travaille ici depuis 2010.\nA. a été\nB. ont été\nC. est\nD. était' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'By next year, I _____ my degree.\nA. complete\nB. completed\nC. will complete\nD. will have completed', 
                            sw: 'Kufikia mwaka ujao, mimi _____ shahada yangu.\nA. kamili\nB. nilikamilisha\nC. nitakamilisha\nD. nitakuwa nimekamilisha', 
                            fr: 'D\'ici l\'année prochaine, je _____ mon diplôme.\nA. compléter\nB. ai complété\nC. compléterai\nD. aurai complété' 
                        },
                        answer: { en: 'D', sw: 'D', fr: 'D' }
                    },
                    {
                        text: { 
                            en: 'The book _____ by the student.\nA. read\nB. reads\nC. is reading\nD. is being read', 
                            sw: 'Kitabu _____ na mwanafunzi.\nA. soma\nB. inasoma\nC. kinasomwa\nD. kimekusomwa', 
                            fr: 'Le livre _____ par l\'étudiant.\nA. lire\nB. lit\nC. est en train de lire\nD. est en train d\'être lu' 
                        },
                        answer: { en: 'D', sw: 'C', fr: 'D' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'Science Questions',
                    sw: 'Maswali ya Sayansi',
                    fr: 'Questions scientifiques'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'What is the chemical symbol for water?\nA. O2\nB. CO2\nC. H2O\nD. NaCl', 
                            sw: 'Alama ya kikemikali ya maji ni ipi?\nA. O2\nB. CO2\nC. H2O\nD. NaCl', 
                            fr: 'Quel est le symbole chimique de l\'eau?\nA. O2\nB. CO2\nC. H2O\nD. NaCl' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'Which planet is known as the Red Planet?\nA. Venus\nB. Mars\nC. Jupiter\nD. Saturn', 
                            sw: 'Sayari ipi inajulikana kama Sayari Nyekundu?\nA. Zuhura\nB. Mirihi\nC. Mshtarii\nD. Zohali', 
                            fr: 'Quelle planète est connue sous le nom de Planète Rouge?\nA. Vénus\nB. Mars\nC. Jupiter\nD. Saturne' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'What force pulls objects toward Earth?\nA. Magnetism\nB. Gravity\nC. Friction\nD. Electricity', 
                            sw: 'Nguvu ipi huvuta vitu kuelekea Dunia?\nA. Umeme\nB. Uvutano\nC. Msuguano\nD. Umeme', 
                            fr: 'Quelle force attire les objets vers la Terre?\nA. Magnétisme\nB. Gravité\nC. Friction\nD. Électricité' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'ADVANCED LEVEL TEST INSTRUCTIONS\n• Answer all questions carefully.\n• Time: 60 minutes\n• Each correct answer = 2 marks\n• Passing score: 75%',
            sw: 'MAELEKEZO YA MTIHANI WA KIWANGO CHA JUU\n• Jibu maswali yote kwa makini.\n• Muda: dakika 60\n• Kila jibu sahihi = alama 2\n• Alama ya kupita: 75%',
            fr: 'INSTRUCTIONS DU TEST AVANCÉ\n• Répondez à toutes les questions soigneusement.\n• Temps: 60 minutes\n• Chaque bonne réponse = 2 points\n• Score de passage: 75%'
        }
    },

    // ==================== TEST 4: EXPERT ====================
    '4': {
        id: 'test_expert',
        title: {
            en: 'EXPERT LEVEL TEST',
            sw: 'MTIHANI WA KIWANGO CHA MTAALAMU',
            fr: 'TEST NIVEAU EXPERT'
        },
        time: '90 minutes',
        totalMarks: 150,
        questions: [
            {
                number: 1,
                text: {
                    en: 'Expert English Grammar - Fill in the blanks.',
                    sw: 'Sarufi ya Kiingereza ya Mtaalamu - Jaza nafasi.',
                    fr: 'Grammaire anglaise experte - Remplissez les blancs.'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'He _____ (work) here for ten years before he retired.', 
                            sw: 'Yeye _____ (fanya kazi) hapa kwa miaka kumi kabla ya kustaafu.', 
                            fr: 'Il _____ (travailler) ici pendant dix ans avant de prendre sa retraite.' 
                        },
                        answer: { en: 'had worked', sw: 'alikuwa amefanya kazi', fr: 'avait travaillé' }
                    },
                    {
                        text: { 
                            en: 'If she _____ (study) harder, she would have passed.', 
                            sw: 'Kama yeye _____ (soma) kwa bidii zaidi, angefaulu.', 
                            fr: 'Si elle _____ (étudier) plus dur, elle aurait réussi.' 
                        },
                        answer: { en: 'had studied', sw: 'angalisoma', fr: 'avait étudié' }
                    },
                    {
                        text: { 
                            en: 'By the time you arrive, we _____ (finish) the project.', 
                            sw: 'Kufikia wakati utakapofika, sisi _____ (kamilisha) mradi.', 
                            fr: 'D\'ici ton arrivée, nous _____ (terminer) le projet.' 
                        },
                        answer: { en: 'will have finished', sw: 'tutakuwa tumekamilisha', fr: 'aurons terminé' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'Logic and Reasoning',
                    sw: 'Mantiki na Ufahamu',
                    fr: 'Logique et Raisonnement'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'All cats are animals. Some animals are pets. Therefore:\nA. All cats are pets\nB. Some cats are pets\nC. No cats are pets\nD. All pets are cats', 
                            sw: 'Paka wote ni wanyama. Baadhi ya wanyama ni wanyama wa kipenzi. Kwa hivyo:\nA. Paka wote ni wanyama wa kipenzi\nB. Baadhi ya paka ni wanyama wa kipenzi\nC. Hakuna paka yeyote ni wanyama wa kipenzi\nD. Wanyama wote wa kipenzi ni paka', 
                            fr: 'Tous les chats sont des animaux. Certains animaux sont des animaux de compagnie. Par conséquent:\nA. Tous les chats sont des animaux de compagnie\nB. Certains chats sont des animaux de compagnie\nC. Aucun chat n\'est un animal de compagnie\nD. Tous les animaux de compagnie sont des chats' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'If A > B and B > C, then:\nA. A > C\nB. A < C\nC. A = C\nD. Cannot determine', 
                            sw: 'Kama A > B na B > C, basi:\nA. A > C\nB. A < C\nC. A = C\nD. Haiwezi kubainishwa', 
                            fr: 'Si A > B et B > C, alors:\nA. A > C\nB. A < C\nC. A = C\nD. Ne peut pas déterminer' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    }
                ]
            },
            {
                number: 3,
                text: {
                    en: 'Essay Question (Write a short paragraph)',
                    sw: 'Swali la Insha (Andika kifungu kifupi)',
                    fr: 'Question de rédaction (Écrivez un court paragraphe)'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'Explain why education is important for personal development.', 
                            sw: 'Eleza kwa nini elimu ni muhimu kwa maendeleo ya kibinafsi.', 
                            fr: 'Expliquez pourquoi l\'éducation est importante pour le développement personnel.' 
                        },
                        answer: { en: '[Student should write a paragraph explaining the importance of education]', sw: '[Mwanafunzi aandike kifungu akielezea umuhimu wa elimu]', fr: '[L\'étudiant doit écrire un paragraphe expliquant l\'importance de l\'éducation]' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'EXPERT LEVEL TEST INSTRUCTIONS\n• Answer all questions thoroughly.\n• Essay questions require complete paragraphs.\n• Time: 90 minutes\n• Passing score: 80%',
            sw: 'MAELEKEZO YA MTIHANI WA KIWANGO CHA MTAALAMU\n• Jibu maswali yote kwa kina.\n• Maswali ya insha yanahitaji vifungu kamili.\n• Muda: dakika 90\n• Alama ya kupita: 80%',
            fr: 'INSTRUCTIONS DU TEST EXPERT\n• Répondez à toutes les questions de manière approfondie.\n• Les questions de rédaction nécessitent des paragraphes complets.\n• Temps: 90 minutes\n• Score de passage: 80%'
        }
    },

    // ==================== TEST 5: ENGLISH TEST ONE ====================
    '5': {
        id: 'english_test_one',
        title: {
            en: 'ENGLISH TEST ONE',
            sw: 'MTIHANI WA KIINGEREZA WA KWANZA',
            fr: 'TEST D\'ANGLAIS NUMÉRO UN'
        },
        time: '60 minutes',
        totalMarks: 100,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SECTION A: Write TRUE or FALSE (25 questions - 50 marks)',
                    sw: 'SEHEMU A: Andika KWELI au SI KWELI (maswali 25 - alama 50)',
                    fr: 'SECTION A: Écrivez VRAI ou FAUX (25 questions - 50 points)'
                },
                subQuestions: [
                    {
                        text: { 
                            en: '"Good morning" is used in the morning.', 
                            sw: '"Good morning" hutumiwa asubuhi.', 
                            fr: '"Good morning" est utilisé le matin.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"Good night" is used when meeting someone in the afternoon.', 
                            sw: '"Good night" hutumiwa unapokutana na mtu mchana.', 
                            fr: '"Good night" est utilisé lorsqu\'on rencontre quelqu\'un l\'après-midi.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"How are you?" is a greeting.', 
                            sw: '"How are you?" ni salam.', 
                            fr: '"How are you?" est une salutation.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"Goodbye" is used when you arrive.', 
                            sw: '"Goodbye" hutumiwa unapofika.', 
                            fr: '"Goodbye" est utilisé lorsque vous arrivez.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"Long time no see" is used when you meet after a long time.', 
                            sw: '"Long time no see" hutumiwa unapokutana baada ya muda mrefu.', 
                            fr: '"Long time no see" est utilisé lorsqu\'on se rencontre après longtemps.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"I am a student" is in the present tense.', 
                            sw: '"I am a student" iko katika wakati uliopo.', 
                            fr: '"I am a student" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"She was my friend" is in the past tense.', 
                            sw: '"She was my friend" iko katika wakati uliopita.', 
                            fr: '"She was my friend" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"They will be happy" is in the future tense.', 
                            sw: '"They will be happy" iko katika wakati ujao.', 
                            fr: '"They will be happy" est au futur.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"He have a bicycle" is a correct sentence.', 
                            sw: '"He have a bicycle" ni sentensi sahihi.', 
                            fr: '"He have a bicycle" est une phrase correcte.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"We are at school" is in the present tense.', 
                            sw: '"We are at school" iko katika wakati uliopo.', 
                            fr: '"We are at school" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"I had two brothers" is in the past tense.', 
                            sw: '"I had two brothers" iko katika wakati uliopita.', 
                            fr: '"I had two brothers" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"She will has a cat" is a correct sentence.', 
                            sw: '"She will has a cat" ni sentensi sahihi.', 
                            fr: '"She will has a cat" est une phrase correcte.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: '"They were tired" is in the past tense.', 
                            sw: '"They were tired" iko katika wakati uliopita.', 
                            fr: '"They were tired" est au passé.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"You are my neighbor" is in the present tense.', 
                            sw: '"You are my neighbor" iko katika wakati uliopo.', 
                            fr: '"You are my neighbor" est au présent.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '"He will have a car" is in the future tense.', 
                            sw: '"He will have a car" iko katika wakati ujao.', 
                            fr: '"He will have a car" est au futur.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '3:15 can be read as "quarter past three".', 
                            sw: '3:15 inaweza kusomwa kama "robo baada ya tatu".', 
                            fr: '3:15 peut être lu comme "quart après trois".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '9:00 can be read as "nine o\'clock".', 
                            sw: '9:00 inaweza kusomwa kama "saa tisa".', 
                            fr: '9:00 peut être lu comme "neuf heures".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'The number 27 is written "twenty-seven".', 
                            sw: 'Nambari 27 imeandikwa "twenty-seven".', 
                            fr: 'Le nombre 27 s\'écrit "twenty-seven".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'The number 450 is written "four hundred and fifty".', 
                            sw: 'Nambari 450 imeandikwa "four hundred and fifty".', 
                            fr: 'Le nombre 450 s\'écrit "four hundred and fifty".' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: '1st is an ordinal number.', 
                            sw: '1st ni nambari ya kihesabu.', 
                            fr: '1st est un nombre ordinal.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'My father\'s brother is my uncle.', 
                            sw: 'Kaka ya baba yangu ni mjomba wangu.', 
                            fr: 'Le frère de mon père est mon oncle.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'My mother\'s sister is my aunt.', 
                            sw: 'Dada ya mama yangu ni shangazi yangu.', 
                            fr: 'La sœur de ma mère est ma tante.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'A hospital is a place where students learn.', 
                            sw: 'Hospitali ni mahali ambapo wanafunzi husoma.', 
                            fr: 'Un hôpital est un endroit où les étudiants apprennent.' 
                        },
                        answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                    },
                    {
                        text: { 
                            en: 'A church is a place where people pray.', 
                            sw: 'Kanisa ni mahali ambapo watu husali.', 
                            fr: 'Une église est un endroit où les gens prient.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    },
                    {
                        text: { 
                            en: 'A bank is a place where we keep money safely.', 
                            sw: 'Benki ni mahali ambapo tunaweka pesa kwa usalama.', 
                            fr: 'Une banque est un endroit où nous gardons l\'argent en sécurité.' 
                        },
                        answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SECTION B: Multiple Choice - Choose the correct answer (A, B, C or D) (25 questions - 50 marks)',
                    sw: 'SEHEMU B: Chaguo Nyingi - Chagua jibu sahihi (A, B, C au D) (maswali 25 - alama 50)',
                    fr: 'SECTION B: Choix Multiple - Choisissez la bonne réponse (A, B, C ou D) (25 questions - 50 points)'
                },
                subQuestions: [
                    {
                        text: { 
                            en: 'You meet your teacher in the morning. What do you say?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye', 
                            sw: 'Unakutana na mwalimu wako asubuhi. Unasema nini?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye', 
                            fr: 'Vous rencontrez votre professeur le matin. Que dites-vous?\nA. Good night\nB. Good evening\nC. Good morning\nD. Goodbye' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'You leave your friend at school. You say:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see', 
                            sw: 'Unaacha rafiki yako shuleni. Unasema:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see', 
                            fr: 'Vous quittez votre ami à l\'école. Vous dites:\nA. Hello\nB. Goodbye\nC. Good night\nD. Long time no see' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'She _____ my friend.\nA. am\nB. is\nC. are\nD. were', 
                            sw: 'Yeye _____ rafiki yangu.\nA. am\nB. is\nC. are\nD. were', 
                            fr: 'Elle _____ mon amie.\nA. am\nB. is\nC. are\nD. were' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'They _____ happy yesterday.\nA. are\nB. is\nC. were\nD. will', 
                            sw: 'Wao _____ furaha jana.\nA. are\nB. is\nC. were\nD. will', 
                            fr: 'Ils _____ heureux hier.\nA. are\nB. is\nC. were\nD. will' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'He _____ a bicycle.\nA. have\nB. has\nC. had\nD. will', 
                            sw: 'Yeye _____ baiskeli.\nA. have\nB. has\nC. had\nD. will', 
                            fr: 'Il _____ un vélo.\nA. have\nB. has\nC. had\nD. will' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"I am at school" in past tense becomes:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school', 
                            sw: '"I am at school" katika wakati uliopita inakuwa:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school', 
                            fr: '"I am at school" au passé devient:\nA. I am at school\nB. I was at school\nC. I will be at school\nD. I have at school' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"She has a pen" in future tense becomes:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen', 
                            sw: '"She has a pen" katika wakati ujao inakuwa:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen', 
                            fr: '"She has a pen" au futur devient:\nA. She had a pen\nB. She has a pen\nC. She will have a pen\nD. She is a pen' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '7:30 is read as:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen', 
                            sw: '7:30 inasomwa kama:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen', 
                            fr: '7:30 se lit comme:\nA. Seven o\'clock\nB. Half past seven\nC. Quarter past seven\nD. Seven fifteen' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '12:45 is read as:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock', 
                            sw: '12:45 inasomwa kama:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock', 
                            fr: '12:45 se lit comme:\nA. Quarter to one\nB. Quarter past twelve\nC. Half past twelve\nD. Twelve o\'clock' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'The number 103 in words is:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen', 
                            sw: 'Nambari 103 kwa maneno ni:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen', 
                            fr: 'Le nombre 103 en lettres est:\nA. One hundred three\nB. One hundred and three\nC. One three zero\nD. Thirteen' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'The ordinal form of 2 is:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth', 
                            sw: 'Fomu ya kihesabu ya 2 ni:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth', 
                            fr: 'La forme ordinale de 2 est:\nA. Two\nB. Twoth\nC. Second\nD. Twentieth' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'Happiness is a kind of:\nA. Place\nB. Number\nC. Feeling\nD. Family', 
                            sw: 'Furaha ni aina ya:\nA. Mahali\nB. Nambari\nC. Hisia\nD. Familia', 
                            fr: 'Le bonheur est une sorte de:\nA. Lieu\nB. Nombre\nC. Sentiment\nD. Famille' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"Anger" shows that someone is:\nA. Happy\nB. Calm\nC. Angry\nD. Proud', 
                            sw: '"Anger" inaonyesha kuwa mtu ni:\nA. Furaha\nB. Utulivu\nC. Hasira\nD. Majivuno', 
                            fr: '"Anger" montre que quelqu\'un est:\nA. Heureux\nB. Calme\nC. En colère\nD. Fier' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My father is my:\nA. Brother\nB. Uncle\nC. Parent\nD. Son', 
                            sw: 'Baba yangu ni:\nA. Kaka\nB. Mjomba\nC. Mzazi\nD. Mwana', 
                            fr: 'Mon père est mon:\nA. Frère\nB. Oncle\nC. Parent\nD. Fils' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My grandfather is my father\'s:\nA. Brother\nB. Father\nC. Son\nD. Uncle', 
                            sw: 'Babu yangu ni:\nA. Kaka\nB. Baba\nC. Mwana\nD. Mjomba', 
                            fr: 'Mon grand-père est le _____ de mon père.\nA. Frère\nB. Père\nC. Fils\nD. Oncle' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do students learn?\nA. Hospital\nB. Market\nC. School\nD. Church', 
                            sw: 'Wanafunzi husoma wapi?\nA. Hospitali\nB. Sokoni\nC. Shuleni\nD. Kanisani', 
                            fr: 'Où les étudiants apprennent-ils?\nA. Hôpital\nB. Marché\nC. École\nD. Église' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'Where do sick people go?\nA. Bank\nB. Hospital\nC. Library\nD. Church', 
                            sw: 'Wagonjwa huenda wapi?\nA. Benki\nB. Hospitali\nC. Maktaba\nD. Kanisa', 
                            fr: 'Où vont les personnes malades?\nA. Banque\nB. Hôpital\nC. Bibliothèque\nD. Église' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do people buy food?\nA. Market\nB. Bank\nC. School\nD. Office', 
                            sw: 'Watu hununua chakula wapi?\nA. Sokoni\nB. Benki\nC. Shuleni\nD. Ofisini', 
                            fr: 'Où les gens achètent-ils de la nourriture?\nA. Marché\nB. Banque\nC. École\nD. Bureau' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'Where do we watch movies?\nA. Church\nB. Cinema\nC. School\nD. Hospital', 
                            sw: 'Tunaangalia sinema wapi?\nA. Kanisa\nB. Sinema\nC. Shule\nD. Hospitali', 
                            fr: 'Où regardons-nous des films?\nA. Église\nB. Cinéma\nC. École\nD. Hôpital' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: 'Where do we play football?\nA. Library\nB. Classroom\nC. Playground\nD. Bank', 
                            sw: 'Tunacheza mpira wapi?\nA. Maktaba\nB. Darasani\nC. Uwanja wa michezo\nD. Benki', 
                            fr: 'Où jouons-nous au football?\nA. Bibliothèque\nB. Salle de classe\nC. Terrain de jeu\nD. Banque' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"We _____ tired" (present tense)\nA. is\nB. are\nC. was\nD. will', 
                            sw: '"Sisi _____ uchovu" (wakati uliopo)\nA. is\nB. are\nC. was\nD. will', 
                            fr: '"Nous _____ fatigués" (présent)\nA. is\nB. are\nC. was\nD. will' 
                        },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { 
                            en: '"He _____ my neighbor" (past tense)\nA. is\nB. are\nC. was\nD. will', 
                            sw: '"Yeye _____ jirani yangu" (wakati uliopita)\nA. is\nB. are\nC. was\nD. will', 
                            fr: '"Il _____ mon voisin" (passé)\nA. is\nB. are\nC. was\nD. will' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: '"They _____ happy tomorrow"\nA. are\nB. were\nC. will be\nD. is', 
                            sw: '"Wao _____ furaha kesho"\nA. are\nB. were\nC. will be\nD. is', 
                            fr: '"Ils _____ heureux demain"\nA. are\nB. were\nC. will be\nD. is' 
                        },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { 
                            en: 'My mother\'s sister is my:\nA. Aunt\nB. Uncle\nC. Cousin\nD. Sister', 
                            sw: 'Dada ya mama yangu ni:\nA. Shangazi\nB. Mjomba\nC. Binamu\nD. Dada', 
                            fr: 'La sœur de ma mère est ma:\nA. Tante\nB. Oncle\nC. Cousine\nD. Sœur' 
                        },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { 
                            en: 'A library is a place where we:\nA. Sleep\nB. Pray\nC. Buy food\nD. Read quietly', 
                            sw: 'Maktaba ni mahali ambapo sisi:\nA. Kulala\nB. Kusali\nC. Kununua chakula\nD. Kusoma kwa utulivu', 
                            fr: 'Une bibliothèque est un endroit où nous:\nA. Dormons\nB. Prions\nC. Achetons de la nourriture\nD. Lisons tranquillement' 
                        },
                        answer: { en: 'D', sw: 'D', fr: 'D' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'ENGLISH TEST ONE INSTRUCTIONS\n• Answer ALL questions.\n• Section A: Write TRUE or FALSE.\n• Section B: Choose the correct answer (A, B, C or D).\n• Time: 60 minutes\n• Total Marks: 100\n• Passing score: 60%',
            sw: 'MAELEKEZO YA MTIHANI WA KIINGEREZA WA KWANZA\n• Jibu maswali YOTE.\n• Sehemu A: Andika KWELI au SI KWELI.\n• Sehemu B: Chagua jibu sahihi (A, B, C au D).\n• Muda: dakika 60\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
            fr: 'INSTRUCTIONS DU TEST D\'ANGLAIS NUMÉRO UN\n• Répondez à TOUTES les questions.\n• Section A: Écrivez VRAI ou FAUX.\n• Section B: Choisissez la bonne réponse (A, B, C ou D).\n• Temps: 60 minutes\n• Total des points: 100\n• Score de passage: 60%'
        }
    }
};

module.exports = testsData;