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
    id: 'english_test_two',
    title: {
        en: 'ENGLISH TEST 2 (OBJECTIVE VERSION)',
        sw: 'MTIHANI WA KIINGEREZA WA PILI (Toleo Lengwa)',
        fr: 'TEST D\'ANGLAIS NUMÉRO 2 (VERSION OBJECTIVE)'
    },
    time: '60 minutes',
    totalMarks: 100,
    questions: [
        {
            number: 1,
            text: {
                en: 'SECTION A: TRUE / FALSE (10 questions - 20 marks)',
                sw: 'SEHEMU A: KWELI / SI KWELI (Maswali 10 - Alama 20)',
                fr: 'SECTION A: VRAI / FAUX (10 questions - 20 points)'
            },
            subQuestions: [
                {
                    text: { 
                        en: '"I am a student" is in present tense.', 
                        sw: '"I am a student" iko katika wakati uliopo.', 
                        fr: '"I am a student" est au présent.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"She has a bicycle" is in future tense.', 
                        sw: '"She has a bicycle" iko katika wakati ujao.', 
                        fr: '"She has a bicycle" est au futur.' 
                    },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { 
                        en: '"They were happy" is in past tense.', 
                        sw: '"They were happy" iko katika wakati uliopita.', 
                        fr: '"They were happy" est au passé.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"If I were rich" is a conditional sentence.', 
                        sw: '"If I were rich" ni sentensi ya masharti.', 
                        fr: '"If I were rich" est une phrase conditionnelle.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"He drinks milk every morning" is present tense.', 
                        sw: '"He drinks milk every morning" iko katika wakati uliopo.', 
                        fr: '"He drinks milk every morning" est au présent.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"Happiness" is an abstract noun.', 
                        sw: '"Happiness" ni nomino dhahania.', 
                        fr: '"Happiness" est un nom abstrait.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"London" is a proper noun.', 
                        sw: '"London" ni nomino ya pekee.', 
                        fr: '"London" est un nom propre.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"Team" is a collective noun.', 
                        sw: '"Team" ni nomino ya jamii.', 
                        fr: '"Team" est un nom collectif.' 
                    },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { 
                        en: '"Books" is an uncountable noun.', 
                        sw: '"Books" ni nomino isiyohesabika.', 
                        fr: '"Books" est un nom indénombrable.' 
                    },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { 
                        en: '"Courage" is a concrete noun.', 
                        sw: '"Courage" ni nomino ya konkreti.', 
                        fr: '"Courage" est un nom concret.' 
                    },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                }
            ]
        },
        {
            number: 2,
            text: {
                en: 'SECTION B: MULTIPLE CHOICE - Choose the correct answer (A, B, or C) (10 questions - 30 marks)',
                sw: 'SEHEMU B: CHAGUO NYINGI - Chagua jibu sahihi (A, B, au C) (Maswali 10 - Alama 30)',
                fr: 'SECTION B: CHOIX MULTIPLE - Choisissez la bonne réponse (A, B, ou C) (10 questions - 30 points)'
            },
            subQuestions: [
                {
                    text: { 
                        en: 'Which is an abstract noun?\nA. Chair\nB. Happiness\nC. Dog', 
                        sw: 'Ni ipi nomino dhahania?\nA. Kit\nB. Furaha\nC. Mbwa', 
                        fr: 'Lequel est un nom abstrait?\nA. Chaise\nB. Bonheur\nC. Chien' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Which is a collective noun?\nA. Team\nB. Table\nC. Apple', 
                        sw: 'Ni ipi nomino ya jamii?\nA. Timu\nB. Meza\nC. Tufaha', 
                        fr: 'Lequel est un nom collectif?\nA. Équipe\nB. Table\nC. Pomme' 
                    },
                    answer: { en: 'A', sw: 'A', fr: 'A' }
                },
                {
                    text: { 
                        en: 'He ____ to school yesterday.\nA. go\nB. went\nC. goes', 
                        sw: 'Yeye ____ shuleni jana.\nA. go\nB. went\nC. goes', 
                        fr: 'Il ____ à l\'école hier.\nA. go\nB. went\nC. goes' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'They ____ studying English now.\nA. is\nB. are\nC. am', 
                        sw: 'Wao ____ kusoma Kiingereza sasa.\nA. is\nB. are\nC. am', 
                        fr: 'Ils ____ étudier l\'anglais maintenant.\nA. is\nB. are\nC. am' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'If I ____ rich, I would buy a house.\nA. am\nB. was\nC. were', 
                        sw: 'Kama mimi ____ tajiri, ningenunua nyumba.\nA. am\nB. was\nC. were', 
                        fr: 'Si je ____ riche, j\'achèterais une maison.\nA. am\nB. was\nC. were' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'She ____ a new bicycle next week.\nA. has\nB. will have\nC. had', 
                        sw: 'Yeye ____ baiskeli mpya wiki ijayo.\nA. has\nB. will have\nC. had', 
                        fr: 'Elle ____ un nouveau vélo la semaine prochaine.\nA. has\nB. will have\nC. had' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Which is a proper noun?\nA. cat\nB. London\nC. table', 
                        sw: 'Ni ipi nomino ya pekee?\nA. paka\nB. London\nC. meza', 
                        fr: 'Lequel est un nom propre?\nA. chat\nB. Londres\nC. table' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: '"Courage" and "love" are ____ nouns.\nA. concrete\nB. abstract\nC. collective', 
                        sw: '"Courage" na "love" ni nomino ____.\nA. konkreti\nB. dhahania\nC. za jamii', 
                        fr: '"Courage" et "love" sont des noms ____.\nA. concrets\nB. abstraits\nC. collectifs' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'I ____ dinner yesterday.\nA. eat\nB. ate\nC. will eat', 
                        sw: 'Mimi ____ chakula cha jioni jana.\nA. eat\nB. ate\nC. will eat', 
                        fr: 'J\'ai ____ dîner hier.\nA. eat\nB. ate\nC. will eat' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'They ____ to the market tomorrow.\nA. go\nB. went\nC. will go', 
                        sw: 'Wao ____ sokoni kesho.\nA. go\nB. went\nC. will go', 
                        fr: 'Ils ____ au marché demain.\nA. go\nB. went\nC. will go' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                }
            ]
        },
        {
            number: 3,
            text: {
                en: 'SECTION C: ONE WORD ANSWER - Fill in the blank with ONE word only (10 questions - 20 marks)',
                sw: 'SEHEMU C: JIBU LA NENO MOJA - Jaza nafasi na neno MOJA tu (Maswali 10 - Alama 20)',
                fr: 'SECTION C: RÉPONSE EN UN MOT - Remplissez le vide avec UN mot seulement (10 questions - 20 points)'
            },
            subQuestions: [
                {
                    text: { 
                        en: 'I ____ at school yesterday.', 
                        sw: 'Mimi ____ shuleni jana.', 
                        fr: 'J\'____ à l\'école hier.' 
                    },
                    answer: { en: 'was', sw: 'nilikuwa', fr: 'étais' }
                },
                {
                    text: { 
                        en: 'She ____ a cat now.', 
                        sw: 'Yeye ____ paka sasa.', 
                        fr: 'Elle ____ un chat maintenant.' 
                    },
                    answer: { en: 'has', sw: 'ana', fr: 'a' }
                },
                {
                    text: { 
                        en: 'We ____ to the park tomorrow.', 
                        sw: 'Sisi ____ bustani kesho.', 
                        fr: 'Nous ____ au parc demain.' 
                    },
                    answer: { en: 'will go', sw: 'tutaenda', fr: 'irons' }
                },
                {
                    text: { 
                        en: 'They ____ football last week.', 
                        sw: 'Wao ____ mpira wiki iliyopita.', 
                        fr: 'Ils ____ football la semaine dernière.' 
                    },
                    answer: { en: 'played', sw: 'walicheza', fr: 'ont joué' }
                },
                {
                    text: { 
                        en: 'He ____ milk every morning.', 
                        sw: 'Yeye ____ mchuzi kila asubuhi.', 
                        fr: 'Il ____ du lait chaque matin.' 
                    },
                    answer: { en: 'drinks', sw: 'anakunywa', fr: 'boit' }
                },
                {
                    text: { 
                        en: 'If I ____ rich, I would travel.', 
                        sw: 'Kama mimi ____ tajiri, ningesafiri.', 
                        fr: 'Si je ____ riche, je voyagerais.' 
                    },
                    answer: { en: 'were', sw: 'ningekuwa', fr: 'étais' }
                },
                {
                    text: { 
                        en: 'She ____ a book tomorrow.', 
                        sw: 'Yeye ____ kitabu kesho.', 
                        fr: 'Elle ____ un livre demain.' 
                    },
                    answer: { en: 'will read', sw: 'atasoma', fr: 'liras' }
                },
                {
                    text: { 
                        en: 'Water is a/an ____ noun.', 
                        sw: 'Maji ni nomino ____.', 
                        fr: 'L\'eau est un nom ____.' 
                    },
                    answer: { en: 'uncountable', sw: 'isiyohesabika', fr: 'indénombrable' }
                },
                {
                    text: { 
                        en: 'Team is a ____ noun.', 
                        sw: 'Timu ni nomino ____.', 
                        fr: 'Équipe est un nom ____.' 
                    },
                    answer: { en: 'collective', sw: 'ya jamii', fr: 'collectif' }
                },
                {
                    text: { 
                        en: 'London is a ____ noun.', 
                        sw: 'London ni nomino ____.', 
                        fr: 'Londres est un nom ____.' 
                    },
                    answer: { en: 'proper', sw: 'ya pekee', fr: 'propre' }
                }
            ]
        },
        {
            number: 4,
            text: {
                en: 'SECTION D: ONE WORD CLASSIFICATION - Classify each noun with ONE word (10 questions - 30 marks)',
                sw: 'SEHEMU D: UGAWAJI WA NENO MOJA - Gawanya kila nomino kwa neno MOJA (Maswali 10 - Alama 30)',
                fr: 'SECTION D: CLASSIFICATION EN UN MOT - Classez chaque nom avec UN mot (10 questions - 30 points)'
            },
            subQuestions: [
                {
                    text: { 
                        en: 'Happiness → __________', 
                        sw: 'Furaha → __________', 
                        fr: 'Bonheur → __________' 
                    },
                    answer: { en: 'abstract', sw: 'dhahania', fr: 'abstrait' }
                },
                {
                    text: { 
                        en: 'Water → __________', 
                        sw: 'Maji → __________', 
                        fr: 'Eau → __________' 
                    },
                    answer: { en: 'uncountable', sw: 'isiyohesabika', fr: 'indénombrable' }
                },
                {
                    text: { 
                        en: 'Team → __________', 
                        sw: 'Timu → __________', 
                        fr: 'Équipe → __________' 
                    },
                    answer: { en: 'collective', sw: 'ya jamii', fr: 'collectif' }
                },
                {
                    text: { 
                        en: 'Apple → __________', 
                        sw: 'Tufaha → __________', 
                        fr: 'Pomme → __________' 
                    },
                    answer: { en: 'countable', sw: 'inayohesabika', fr: 'dénombrable' }
                },
                {
                    text: { 
                        en: 'London → __________', 
                        sw: 'London → __________', 
                        fr: 'Londres → __________' 
                    },
                    answer: { en: 'proper', sw: 'ya pekee', fr: 'propre' }
                },
                {
                    text: { 
                        en: 'Milk → __________', 
                        sw: 'Maziwa → __________', 
                        fr: 'Lait → __________' 
                    },
                    answer: { en: 'uncountable', sw: 'isiyohesabika', fr: 'indénombrable' }
                },
                {
                    text: { 
                        en: 'Courage → __________', 
                        sw: 'Ujasiri → __________', 
                        fr: 'Courage → __________' 
                    },
                    answer: { en: 'abstract', sw: 'dhahania', fr: 'abstrait' }
                },
                {
                    text: { 
                        en: 'Books → __________', 
                        sw: 'Vitabu → __________', 
                        fr: 'Livres → __________' 
                    },
                    answer: { en: 'countable', sw: 'zinazohesabika', fr: 'dénombrable' }
                },
                {
                    text: { 
                        en: 'Sugar → __________', 
                        sw: 'Sukari → __________', 
                        fr: 'Sucre → __________' 
                    },
                    answer: { en: 'uncountable', sw: 'isiyohesabika', fr: 'indénombrable' }
                },
                {
                    text: { 
                        en: 'Charles Academy → __________', 
                        sw: 'Charles Academy → __________', 
                        fr: 'Charles Academy → __________' 
                    },
                    answer: { en: 'proper', sw: 'ya pekee', fr: 'propre' }
                }
            ]
        }
    ],
    instructions: {
        en: 'CHARLES ACADEMY – ENGLISH TEST 2 (OBJECTIVE VERSION)\n\nINSTRUCTIONS\n• Answer ALL questions\n• Use ONE word only where required\n• Circle the correct answer\n• No long sentences\n• Time: 60 minutes\n• Total Marks: 100\n• Passing score: 60%',
        sw: 'CHARLES ACADEMY – MTIHANI WA KIINGEREZA WA PILI (Toleo Lengwa)\n\nMAELEKEZO\n• Jibu maswali YOTE\n• Tumia neno MOJA tu inapohitajika\n• Zungusha jibu sahihi\n• Hakuna sentensi ndefu\n• Muda: dakika 60\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
        fr: 'CHARLES ACADEMY – TEST D\'ANGLAIS NUMÉRO 2 (VERSION OBJECTIVE)\n\nINSTRUCTIONS\n• Répondez à TOUTES les questions\n• Utilisez UN mot seulement là où c\'est requis\n• Encerclez la bonne réponse\n• Pas de phrases longues\n• Temps: 60 minutes\n• Total des points: 100\n• Score de passage: 60%'
    },
    markingGuide: {
        en: {
            sectionA: [
                'TRUE', 'FALSE', 'TRUE', 'TRUE', 'TRUE',
                'TRUE', 'TRUE', 'TRUE', 'FALSE', 'FALSE'
            ],
            sectionB: [
                'B', 'A', 'B', 'B', 'C',
                'B', 'B', 'B', 'B', 'C'
            ],
            sectionC: [
                'was', 'has', 'will go', 'played', 'drinks',
                'were', 'will read', 'uncountable', 'collective', 'proper'
            ],
            sectionD: [
                'abstract', 'uncountable', 'collective', 'countable', 'proper',
                'uncountable', 'abstract', 'countable', 'uncountable', 'proper'
            ]
        },
        sw: {
            sectionA: [
                'KWELI', 'SI KWELI', 'KWELI', 'KWELI', 'KWELI',
                'KWELI', 'KWELI', 'KWELI', 'SI KWELI', 'SI KWELI'
            ],
            sectionB: [
                'B', 'A', 'B', 'B', 'C',
                'B', 'B', 'B', 'B', 'C'
            ],
            sectionC: [
                'nilikuwa', 'ana', 'tutaenda', 'walicheza', 'anakunywa',
                'ningekuwa', 'atasoma', 'isiyohesabika', 'ya jamii', 'ya pekee'
            ],
            sectionD: [
                'dhahania', 'isiyohesabika', 'ya jamii', 'inayohesabika', 'ya pekee',
                'isiyohesabika', 'dhahania', 'zinazohesabika', 'isiyohesabika', 'ya pekee'
            ]
        },
        fr: {
            sectionA: [
                'VRAI', 'FAUX', 'VRAI', 'VRAI', 'VRAI',
                'VRAI', 'VRAI', 'VRAI', 'FAUX', 'FAUX'
            ],
            sectionB: [
                'B', 'A', 'B', 'B', 'C',
                'B', 'B', 'B', 'B', 'C'
            ],
            sectionC: [
                'étais', 'a', 'irons', 'ont joué', 'boit',
                'étais', 'liras', 'indénombrable', 'collectif', 'propre'
            ],
            sectionD: [
                'abstrait', 'indénombrable', 'collectif', 'dénombrable', 'propre',
                'indénombrable', 'abstrait', 'dénombrable', 'indénombrable', 'propre'
            ]
        }
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