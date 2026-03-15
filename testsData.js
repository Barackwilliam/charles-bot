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


    '3': {
        "id": "english_test_three",
        "title": {
            "en": "ENGLISH TEST 3 (CONJUNCTIONS)",
            "sw": "MTIHANI WA KIINGEREZA WA TATU (VIUNGANISHI)",
            "fr": "TEST D'ANGLAIS NUMÉRO 3 (CONJONCTIONS)"
        },
        "time": "60 minutes",
        "totalMarks": 100,
        "questions": [
            {
                "number": 1,
                "text": {
                    "en": "SECTION A: TRUE / FALSE (20 questions - 40 marks)",
                    "sw": "SEHEMU A: KWELI / SI KWELI (Maswali 20 - Alama 40)",
                    "fr": "SECTION A: VRAI / FAUX (20 questions - 40 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "\"And\" is a conjunction.",
                            "sw": "\"And\" ni kiunganishi.",
                            "fr": "\"And\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"But\" is a conjunction.",
                            "sw": "\"But\" ni kiunganishi.",
                            "fr": "\"But\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Because\" is a conjunction.",
                            "sw": "\"Because\" ni kiunganishi.",
                            "fr": "\"Because\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Although\" is a conjunction.",
                            "sw": "\"Although\" ni kiunganishi.",
                            "fr": "\"Although\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"So\" is a conjunction.",
                            "sw": "\"So\" ni kiunganishi.",
                            "fr": "\"So\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Until\" is a conjunction.",
                            "sw": "\"Until\" ni kiunganishi.",
                            "fr": "\"Until\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Unless\" is a conjunction.",
                            "sw": "\"Unless\" ni kiunganishi.",
                            "fr": "\"Unless\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"While\" is a conjunction.",
                            "sw": "\"While\" ni kiunganishi.",
                            "fr": "\"While\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Before\" is a conjunction.",
                            "sw": "\"Before\" ni kiunganishi.",
                            "fr": "\"Before\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"After\" is a conjunction.",
                            "sw": "\"After\" ni kiunganishi.",
                            "fr": "\"After\" est une conjonction."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"And\" is used to show contrast.",
                            "sw": "\"And\" inatumika kuonyesha tofauti.",
                            "fr": "\"And\" est utilisé pour montrer un contraste."
                        },
                        "answer": {
                            "en": "FALSE",
                            "sw": "SI KWELI",
                            "fr": "FAUX"
                        }
                    },
                    {
                        "text": {
                            "en": "\"But\" is used to show contrast.",
                            "sw": "\"But\" inatumika kuonyesha tofauti.",
                            "fr": "\"But\" est utilisé pour montrer un contraste."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Because\" shows reason.",
                            "sw": "\"Because\" inaonyesha sababu.",
                            "fr": "\"Because\" montre une raison."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"So\" shows result.",
                            "sw": "\"So\" inaonyesha matokeo.",
                            "fr": "\"So\" montre un résultat."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Or\" shows choice.",
                            "sw": "\"Or\" inaonyesha chaguo.",
                            "fr": "\"Or\" montre un choix."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Although\" shows contrast.",
                            "sw": "\"Although\" inaonyesha tofauti.",
                            "fr": "\"Although\" montre un contraste."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Until\" shows time.",
                            "sw": "\"Until\" inaonyesha wakati.",
                            "fr": "\"Until\" montre le temps."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"While\" shows time.",
                            "sw": "\"While\" inaonyesha wakati.",
                            "fr": "\"While\" montre le temps."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"Unless\" shows condition.",
                            "sw": "\"Unless\" inaonyesha sharti.",
                            "fr": "\"Unless\" montre une condition."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "\"And\" shows addition.",
                            "sw": "\"And\" inaonyesha kuongeza.",
                            "fr": "\"And\" montre une addition."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    }
                ]
            },
            {
                "number": 2,
                "text": {
                    "en": "SECTION B: MULTIPLE CHOICE - Choose the correct conjunction (A, B, C, or D) (20 questions - 40 marks)",
                    "sw": "SEHEMU B: CHAGUO NYINGI - Chagua kiunganishi sahihi (A, B, C, au D) (Maswali 20 - Alama 40)",
                    "fr": "SECTION B: CHOIX MULTIPLE - Choisissez la conjonction correcte (A, B, C, ou D) (20 questions - 40 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "I wanted to go out ____ it was raining heavily.\nA. and\nB. but\nC. because\nD. or",
                            "sw": "Nilitaka kutoka nje ____ ilikuwa inanyesha sana.\nA. and\nB. but\nC. because\nD. or",
                            "fr": "Je voulais sortir ____ il pleuvait beaucoup.\nA. and\nB. but\nC. because\nD. or"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "She studied hard ____ she passed the examination.\nA. because\nB. so\nC. but\nD. or",
                            "sw": "Alisoma kwa bidii ____ alipita mtihani.\nA. because\nB. so\nC. but\nD. or",
                            "fr": "Elle a étudié dur ____ elle a réussi l'examen.\nA. because\nB. so\nC. but\nD. or"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "He is poor ____ honest.\nA. but\nB. and\nC. because\nD. or",
                            "sw": "Yeye ni maskini ____ mwaminifu.\nA. but\nB. and\nC. because\nD. or",
                            "fr": "Il est pauvre ____ honnête.\nA. but\nB. and\nC. because\nD. or"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "We stayed at home ____ the weather was bad.\nA. because\nB. but\nC. or\nD. and",
                            "sw": "Tulikaa nyumbani ____ hali ya hewa ilikuwa mbaya.\nA. because\nB. but\nC. or\nD. and",
                            "fr": "Nous sommes restés à la maison ____ le temps était mauvais.\nA. because\nB. but\nC. or\nD. and"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "You can come with us ____ you finish your work early.\nA. unless\nB. if\nC. because\nD. but",
                            "sw": "Unaweza kuja na sisi ____ utamaliza kazi yako mapema.\nA. unless\nB. if\nC. because\nD. but",
                            "fr": "Vous pouvez venir avec nous ____ vous finissez votre travail tôt.\nA. unless\nB. if\nC. because\nD. but"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "I was tired ____ I continued working.\nA. but\nB. because\nC. so\nD. or",
                            "sw": "Nilichoka ____ niliendelea kufanya kazi.\nA. but\nB. because\nC. so\nD. or",
                            "fr": "J'étais fatigué ____ j'ai continué à travailler.\nA. but\nB. because\nC. so\nD. or"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "She did not attend the class ____ she was sick.\nA. so\nB. because\nC. but\nD. and",
                            "sw": "Hakuhudhuria darasani ____ alikuwa mgonjwa.\nA. so\nB. because\nC. but\nD. and",
                            "fr": "Elle n'a pas assisté au cours ____ elle était malade.\nA. so\nB. because\nC. but\nD. and"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Hurry up ____ you will be late for school.\nA. or\nB. and\nC. because\nD. but",
                            "sw": "Harakisha ____ utachelewa shuleni.\nA. or\nB. and\nC. because\nD. but",
                            "fr": "Dépêche-toi ____ tu seras en retard pour l'école.\nA. or\nB. and\nC. because\nD. but"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "I like English ____ I want to speak it fluently.\nA. because\nB. but\nC. or\nD. although",
                            "sw": "Napenda Kiingereza ____ nataka kuizungumza kwa ufasaha.\nA. because\nB. but\nC. or\nD. although",
                            "fr": "J'aime l'anglais ____ je veux le parler couramment.\nA. because\nB. but\nC. or\nD. although"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "He failed the exam ____ he studied very little.\nA. but\nB. because\nC. and\nD. so",
                            "sw": "Alifeli mtihani ____ alisoma kidogo sana.\nA. but\nB. because\nC. and\nD. so",
                            "fr": "Il a échoué à l'examen ____ il a très peu étudié.\nA. but\nB. because\nC. and\nD. so"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "You can either stay here ____ go home.\nA. and\nB. or\nC. but\nD. so",
                            "sw": "Unaweza ama kukaa hapa ____ kurudi nyumbani.\nA. and\nB. or\nC. but\nD. so",
                            "fr": "Vous pouvez soit rester ici ____ rentrer à la maison.\nA. and\nB. or\nC. but\nD. so"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "We continued playing ____ it was raining.\nA. because\nB. although\nC. so\nD. and",
                            "sw": "Tuliendelea kucheza ____ ilikuwa inanyesha.\nA. because\nB. although\nC. so\nD. and",
                            "fr": "Nous avons continué à jouer ____ il pleuvait.\nA. because\nB. although\nC. so\nD. and"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Study hard ____ you will fail.\nA. or\nB. and\nC. because\nD. but",
                            "sw": "Soma kwa bidii ____ utafeli.\nA. or\nB. and\nC. because\nD. but",
                            "fr": "Étudie dur ____ tu échoueras.\nA. or\nB. and\nC. because\nD. but"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "She smiled ____ she was sad.\nA. although\nB. because\nC. so\nD. and",
                            "sw": "Alitabasamu ____ alikuwa na huzuni.\nA. although\nB. because\nC. so\nD. and",
                            "fr": "Elle a souri ____ elle était triste.\nA. although\nB. because\nC. so\nD. and"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "I will wait ____ you arrive.\nA. until\nB. because\nC. but\nD. or",
                            "sw": "Nitangoja ____ utafika.\nA. until\nB. because\nC. but\nD. or",
                            "fr": "J'attendrai ____ tu arriveras.\nA. until\nB. because\nC. but\nD. or"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "He speaks loudly ____ he is angry.\nA. because\nB. but\nC. or\nD. and",
                            "sw": "Anaongea kwa sauti kubwa ____ yeye ni mwenye hasira.\nA. because\nB. but\nC. or\nD. and",
                            "fr": "Il parle fort ____ il est en colère.\nA. because\nB. but\nC. or\nD. and"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "I called him ____ he did not answer.\nA. but\nB. and\nC. so\nD. because",
                            "sw": "Nilimwita ____ hakujibu.\nA. but\nB. and\nC. so\nD. because",
                            "fr": "Je l'ai appelé ____ il n'a pas répondu.\nA. but\nB. and\nC. so\nD. because"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "She laughed ____ she was tired.\nA. although\nB. because\nC. and\nD. so",
                            "sw": "Alicheka ____ alikuwa amechoka.\nA. although\nB. because\nC. and\nD. so",
                            "fr": "Elle a ri ____ elle était fatiguée.\nA. although\nB. because\nC. and\nD. so"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "I waited ____ he arrived.\nA. until\nB. because\nC. but\nD. or",
                            "sw": "Nilimngoja ____ alifika.\nA. until\nB. because\nC. but\nD. or",
                            "fr": "J'ai attendu ____ il est arrivé.\nA. until\nB. because\nC. but\nD. or"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "We will go ____ the weather is good.\nA. if\nB. but\nC. so\nD. because",
                            "sw": "Tutaenda ____ hali ya hewa ni nzuri.\nA. if\nB. but\nC. so\nD. because",
                            "fr": "Nous irons ____ le temps est bon.\nA. if\nB. but\nC. so\nD. because"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    }
                ]
            },
            {
                "number": 3,
                "text": {
                    "en": "SECTION C: ONE WORD ANSWER - Fill in the blank with ONE conjunction only (10 questions - 20 marks)",
                    "sw": "SEHEMU C: JIBU LA NENO MOJA - Jaza nafasi na kiunganishi MOJA tu (Maswali 10 - Alama 20)",
                    "fr": "SECTION C: RÉPONSE EN UN MOT - Remplissez le vide avec UNE conjonction seulement (10 questions - 20 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "I stayed at home ______ it was raining.",
                            "sw": "Nilikaa nyumbani ______ ilikuwa inanyesha.",
                            "fr": "Je suis resté à la maison ______ il pleuvait."
                        },
                        "answer": {
                            "en": "because",
                            "sw": "kwa sababu",
                            "fr": "parce que"
                        }
                    },
                    {
                        "text": {
                            "en": "She tried hard ______ she failed.",
                            "sw": "Alijaribu kwa bidii ______ alishindwa.",
                            "fr": "Elle a essayé dur ______ elle a échoué."
                        },
                        "answer": {
                            "en": "but",
                            "sw": "lakini",
                            "fr": "mais"
                        }
                    },
                    {
                        "text": {
                            "en": "We will go ______ the weather is good.",
                            "sw": "Tutaenda ______ hali ya hewa ni nzuri.",
                            "fr": "Nous irons ______ le temps est bon."
                        },
                        "answer": {
                            "en": "if",
                            "sw": "ikiwa",
                            "fr": "si"
                        }
                    },
                    {
                        "text": {
                            "en": "He rested ______ he finished work.",
                            "sw": "Alipumzika ______ alimaliza kazi.",
                            "fr": "Il s'est reposé ______ il a terminé son travail."
                        },
                        "answer": {
                            "en": "after",
                            "sw": "baada ya",
                            "fr": "après"
                        }
                    },
                    {
                        "text": {
                            "en": "She laughed ______ she was tired.",
                            "sw": "Alicheka ______ alikuwa amechoka.",
                            "fr": "Elle a ri ______ elle était fatiguée."
                        },
                        "answer": {
                            "en": "although",
                            "sw": "ingawa",
                            "fr": "bien que"
                        }
                    },
                    {
                        "text": {
                            "en": "I waited ______ he arrived.",
                            "sw": "Nilimngoja ______ alifika.",
                            "fr": "J'ai attendu ______ il est arrivé."
                        },
                        "answer": {
                            "en": "until",
                            "sw": "mpaka",
                            "fr": "jusqu'à ce que"
                        }
                    },
                    {
                        "text": {
                            "en": "He was sick ______ he stayed home.",
                            "sw": "Alikuwa mgonjwa ______ alikaa nyumbani.",
                            "fr": "Il était malade ______ il est resté à la maison."
                        },
                        "answer": {
                            "en": "so",
                            "sw": "kwa hivyo",
                            "fr": "donc"
                        }
                    },
                    {
                        "text": {
                            "en": "You can come ______ you are busy.",
                            "sw": "Unaweza kuja ______ umejaa shughuli.",
                            "fr": "Vous pouvez venir ______ vous êtes occupé."
                        },
                        "answer": {
                            "en": "although",
                            "sw": "ingawa",
                            "fr": "bien que"
                        }
                    },
                    {
                        "text": {
                            "en": "She studied ______ her friends played.",
                            "sw": "Alisoma ______ marafiki wake walicheza.",
                            "fr": "Elle a étudié ______ ses amis jouaient."
                        },
                        "answer": {
                            "en": "while",
                            "sw": "wakati",
                            "fr": "pendant que"
                        }
                    },
                    {
                        "text": {
                            "en": "I called ______ I left.",
                            "sw": "Niliita ______ niliondoka.",
                            "fr": "J'ai appelé ______ je suis parti."
                        },
                        "answer": {
                            "en": "and",
                            "sw": "na",
                            "fr": "et"
                        }
                    }
                ]
            }
        ],
        "instructions": {
            "en": "CHARLES ACADEMY – ENGLISH TEST 4 (CONJUNCTIONS)\n\nINSTRUCTIONS\n• Answer ALL questions.\n• Choose the correct answer.\n• Write ONE word only where required.\n• No sentences or paragraphs.\n• Write letter only corresponding to answer on multiple choice.\n• Time: 60 minutes\n• Total Marks: 100\n• Passing score: 60%",
            "sw": "CHARLES ACADEMY – MTIHANI WA KIINGEREZA WA NNE (VIUNGANISHI)\n\nMAELEKEZO\n• Jibu maswali YOTE.\n• Chagua jibu sahihi.\n• Andika neno MOJA tu inapohitajika.\n• Hakuna sentensi au aya ndefu.\n• Andika herufi tu inayolingana na jibu kwenye chaguo nyingi.\n• Muda: dakika 60\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%",
            "fr": "CHARLES ACADEMY – TEST D'ANGLAIS NUMÉRO 4 (CONJONCTIONS)\n\nINSTRUCTIONS\n• Répondez à TOUTES les questions.\n• Choisissez la bonne réponse.\n• Écrivez UN mot seulement là où c'est requis.\n• Pas de phrases ou de paragraphes.\n• Écrivez seulement la lettre correspondant à la réponse pour le choix multiple.\n• Temps: 60 minutes\n• Total des points: 100\n• Score de passage: 60%"
        },
        "markingGuide": {
            "en": {
                "sectionA": [
                    "TRUE", "TRUE", "TRUE", "TRUE", "TRUE",
                    "TRUE", "TRUE", "TRUE", "TRUE", "TRUE",
                    "FALSE", "TRUE", "TRUE", "TRUE", "TRUE",
                    "TRUE", "TRUE", "TRUE", "TRUE", "TRUE"
                ],
                "sectionB": [
                    "B", "B", "A", "A", "B",
                    "A", "B", "A", "A", "B",
                    "B", "B", "A", "A", "A",
                    "A", "A", "B", "A", "A"
                ],
                "sectionC": [
                    "because", "but", "if", "after", "although",
                    "until", "so", "although", "while", "and"
                ]
            },
            "sw": {
                "sectionA": [
                    "KWELI", "KWELI", "KWELI", "KWELI", "KWELI",
                    "KWELI", "KWELI", "KWELI", "KWELI", "KWELI",
                    "SI KWELI", "KWELI", "KWELI", "KWELI", "KWELI",
                    "KWELI", "KWELI", "KWELI", "KWELI", "KWELI"
                ],
                "sectionB": [
                    "B", "B", "A", "A", "B",
                    "A", "B", "A", "A", "B",
                    "B", "B", "A", "A", "A",
                    "A", "A", "B", "A", "A"
                ],
                "sectionC": [
                    "kwa sababu", "lakini", "ikiwa", "baada ya", "ingawa",
                    "mpaka", "kwa hivyo", "ingawa", "wakati", "na"
                ]
            },
            "fr": {
                "sectionA": [
                    "VRAI", "VRAI", "VRAI", "VRAI", "VRAI",
                    "VRAI", "VRAI", "VRAI", "VRAI", "VRAI",
                    "FAUX", "VRAI", "VRAI", "VRAI", "VRAI",
                    "VRAI", "VRAI", "VRAI", "VRAI", "VRAI"
                ],
                "sectionB": [
                    "B", "B", "A", "A", "B",
                    "A", "B", "A", "A", "B",
                    "B", "B", "A", "A", "A",
                    "A", "A", "B", "A", "A"
                ],
                "sectionC": [
                    "parce que", "mais", "si", "après", "bien que",
                    "jusqu'à ce que", "donc", "bien que", "pendant que", "et"
                ]
            }
        }
    }
,

    // ==================== TEST 4: EXPERT ====================
    
    
    '4': {
        "id": "english_test_four",
        "title": {
            "en": "ENGLISH TEST 4 (READING SKILLS)",
            "sw": "MTIHANI WA KIINGEREZA WA FOUR (UJUMBE WA KUSOMA)",
            "fr": "TEST D'ANGLAIS NUMÉRO 4 (COMPÉTENCES DE LECTURE)"
        },
        "time": "60 minutes",
        "totalMarks": 100,
        "questions": [
            {
                "number": 1,
                "text": {
                    "en": "SECTION A: TRUE / FALSE (10 questions - 20 marks)",
                    "sw": "SEHEMU A: KWELI / SI KWELI (Maswali 10 - Alama 20)",
                    "fr": "SECTION A: VRAI / FAUX (10 questions - 20 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "Reading improves vocabulary.",
                            "sw": "Kusoma kunaboresha msamiati.",
                            "fr": "La lecture améliore le vocabulaire."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "Students must understand every word to comprehend a text.",
                            "sw": "Wanafunzi lazima waelewe kila neno ili kuelewa maandishi.",
                            "fr": "Les élèves doivent comprendre chaque mot pour comprendre un texte."
                        },
                        "answer": {
                            "en": "FALSE",
                            "sw": "SI KWELI",
                            "fr": "FAUX"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading helps learners express ideas.",
                            "sw": "Kusoma kunasaidia wanafunzi kuelezea mawazo.",
                            "fr": "La lecture aide les apprenants à exprimer des idées."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "People read emails and news every day.",
                            "sw": "Watu husoma barua pepe na habari kila siku.",
                            "fr": "Les gens lisent des e-mails et des nouvelles tous les jours."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading has no effect on school performance.",
                            "sw": "Kusoma hakuna athari kwa utendaji shuleni.",
                            "fr": "La lecture n'a aucun effet sur les performances scolaires."
                        },
                        "answer": {
                            "en": "FALSE",
                            "sw": "SI KWELI",
                            "fr": "FAUX"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading regularly makes students confident.",
                            "sw": "Kusoma mara kwa mara kunawafanya wanafunzi wawe na ujasiri.",
                            "fr": "Lire régulièrement rend les élèves confiants."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading is limited only to books.",
                            "sw": "Kusoma kuna mipaka kwenye vitabu tu.",
                            "fr": "La lecture se limite uniquement aux livres."
                        },
                        "answer": {
                            "en": "FALSE",
                            "sw": "SI KWELI",
                            "fr": "FAUX"
                        }
                    },
                    {
                        "text": {
                            "en": "Learners can guess meanings from context.",
                            "sw": "Wanafunzi wanaweza kukisia maana kutoka kwa muktadha.",
                            "fr": "Les apprenants peuvent deviner les significations à partir du contexte."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    },
                    {
                        "text": {
                            "en": "Short daily reading has no impact on learning.",
                            "sw": "Kusoma kwa muda mfupi kila siku hakuna athari kwa kujifunza.",
                            "fr": "Une lecture quotidienne courte n'a aucun impact sur l'apprentissage."
                        },
                        "answer": {
                            "en": "FALSE",
                            "sw": "SI KWELI",
                            "fr": "FAUX"
                        }
                    },
                    {
                        "text": {
                            "en": "Students who read often understand instructions better.",
                            "sw": "Wanafunzi ambao husoma mara nyingi huelewa maagizo vizuri zaidi.",
                            "fr": "Les élèves qui lisent souvent comprennent mieux les instructions."
                        },
                        "answer": {
                            "en": "TRUE",
                            "sw": "KWELI",
                            "fr": "VRAI"
                        }
                    }
                ]
            },
            {
                "number": 2,
                "text": {
                    "en": "SECTION B: MULTIPLE CHOICE - Choose the correct answer (A, B, or C) (10 questions - 30 marks)",
                    "sw": "SEHEMU B: CHAGUO NYINGI - Chagua jibu sahihi (A, B, au C) (Maswali 10 - Alama 30)",
                    "fr": "SECTION B: CHOIX MULTIPLE - Choisissez la bonne réponse (A, B, ou C) (10 questions - 30 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "Reading helps learners to:\nA. forget words\nB. improve vocabulary\nC. waste time",
                            "sw": "Kusoma kunasaidia wanafunzi kwa:\nA. kusahau maneno\nB. kuboresha msamiati\nC. kupoteza muda",
                            "fr": "La lecture aide les apprenants à:\nA. oublier les mots\nB. améliorer le vocabulaire\nC. perdre du temps"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Students become confident in reading by:\nA. avoiding books\nB. reading regularly\nC. memorizing words only",
                            "sw": "Wanafunzi wanakuwa na ujasiri katika kusoma kwa:\nA. kuepuka vitabu\nB. kusoma mara kwa mara\nC. kukariri maneno tu",
                            "fr": "Les élèves deviennent confiants en lecture en:\nA. évitant les livres\nB. lisant régulièrement\nC. mémorisant uniquement les mots"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "The passage says reading is important because it helps people:\nA. sleep well\nB. think clearly\nC. travel faster",
                            "sw": "Ujumbe unasema kusoma ni muhimu kwa sababu kunawasaidia watu:\nA. kulala vizuri\nB. kufikiri kwa uwazi\nC. kusafiri haraka",
                            "fr": "Le passage dit que la lecture est importante car elle aide les gens à:\nA. bien dormir\nB. penser clairement\nC. voyager plus vite"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading is limited to books only.\nA. True\nB. False",
                            "sw": "Kusoma kuna mipaka kwenye vitabu tu.\nA. Kweli\nB. Si Kweli",
                            "fr": "La lecture se limite uniquement aux livres.\nA. Vrai\nB. Faux"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "The best title for this passage is:\nA. Books and Exams\nB. The Importance of Reading\nC. Online Learning",
                            "sw": "Kichwa bora cha ujumbe huu ni:\nA. Vitabu na Mitihani\nB. Umuhimu wa Kusoma\nC. Kujifunza Mtandaoni",
                            "fr": "Le meilleur titre pour ce passage est:\nA. Livres et Examens\nB. L'Importance de la Lecture\nC. Apprentissage en Ligne"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Learners can understand a text without knowing every word by:\nA. guessing from context\nB. memorizing all words\nC. skipping difficult texts",
                            "sw": "Wanafunzi wanaweza kuelewa maandishi bila kujua kila neno kwa:\nA. kukisia kutoka kwa muktadha\nB. kukariri maneno yote\nC. kuruka maandishi magumu",
                            "fr": "Les apprenants peuvent comprendre un texte sans connaître chaque mot en:\nA. devinant à partir du contexte\nB. mémorisant tous les mots\nC. sautant les textes difficiles"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading messages, news, and online articles helps learners:\nA. improve vocabulary\nB. waste time\nC. forget what they read",
                            "sw": "Kusoma ujumbe, habari, na makala mtandaoni kunawasaidia wanafunzi:\nA. kuboresha msamiati\nB. kupoteza muda\nC. kusahau waliyosoma",
                            "fr": "Lire des messages, des nouvelles et des articles en ligne aide les apprenants à:\nA. améliorer le vocabulaire\nB. perdre du temps\nC. oublier ce qu'ils ont lu"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "Regular reading helps learners to:\nA. be more confident\nB. be lazy\nC. avoid thinking",
                            "sw": "Kusoma kwa kawaida kunawasaidia wanafunzi:\nA. kuwa na ujasiri zaidi\nB. kuwa wavivu\nC. kuepuka kufikiri",
                            "fr": "La lecture régulière aide les apprenants à:\nA. être plus confiants\nB. être paresseux\nC. éviter de penser"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    },
                    {
                        "text": {
                            "en": "Daily reading even for a short time:\nA. makes no difference\nB. helps language ability\nC. only helps in exams",
                            "sw": "Kusoma kila siku hata kwa muda mfupi:\nA. hakuna tofauti\nB. kunasaidia uwezo wa lugha\nC. kunasaidia tu katika mitihani",
                            "fr": "La lecture quotidienne, même pendant un court moment:\nA. ne fait aucune différence\nB. aide les capacités linguistiques\nC. n'aide que pour les examens"
                        },
                        "answer": {
                            "en": "B",
                            "sw": "B",
                            "fr": "B"
                        }
                    },
                    {
                        "text": {
                            "en": "Students who read often perform better in school because:\nA. they understand instructions better\nB. they memorize everything\nC. they sleep less",
                            "sw": "Wanafunzi ambao husoma mara nyingi hufanya vizuri zaidi shuleni kwa sababu:\nA. huelewa maagizo vizuri zaidi\nB. wanakumbuka kila kitu\nC. hulala chini",
                            "fr": "Les élèves qui lisent souvent réussissent mieux à l'école car:\nA. ils comprennent mieux les instructions\nB. ils mémorisent tout\nC. ils dorment moins"
                        },
                        "answer": {
                            "en": "A",
                            "sw": "A",
                            "fr": "A"
                        }
                    }
                ]
            },
            {
                "number": 3,
                "text": {
                    "en": "SECTION C: ONE WORD ANSWER - Fill in the blank with ONE word only (5 questions - 10 marks)",
                    "sw": "SEHEMU C: JIBU LA NENO MOJA - Jaza nafasi na neno MOJA tu (Maswali 5 - Alama 10)",
                    "fr": "SECTION C: RÉPONSE EN UN MOT - Remplissez le vide avec UN mot seulement (5 questions - 10 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "Another word for 'benefit' is ______.",
                            "sw": "Neno lingine la 'faida' ni ______.",
                            "fr": "Un autre mot pour 'bénéfice' est ______."
                        },
                        "answer": {
                            "en": "advantage",
                            "sw": "faida",
                            "fr": "avantage"
                        }
                    },
                    {
                        "text": {
                            "en": "Another word for 'understand' is ______.",
                            "sw": "Neno lingine la 'kuelewa' ni ______.",
                            "fr": "Un autre mot pour 'comprendre' est ______."
                        },
                        "answer": {
                            "en": "comprehend",
                            "sw": "elewa",
                            "fr": "comprendre"
                        }
                    },
                    {
                        "text": {
                            "en": "Another word for 'afraid or unsure' is ______.",
                            "sw": "Neno lingine la 'hofu au kutokuwa na uhakika' ni ______.",
                            "fr": "Un autre mot pour 'peur ou incertain' est ______."
                        },
                        "answer": {
                            "en": "insecure",
                            "sw": "wasiwasi",
                            "fr": "insecure"
                        }
                    },
                    {
                        "text": {
                            "en": "Another word for 'limited' is ______.",
                            "sw": "Neno lingine la 'mdogo' ni ______.",
                            "fr": "Un autre mot pour 'limité' est ______."
                        },
                        "answer": {
                            "en": "restricted",
                            "sw": "mepesi",
                            "fr": "restreint"
                        }
                    },
                    {
                        "text": {
                            "en": "Another word for 'learner' is ______.",
                            "sw": "Neno lingine la 'mwanafunzi' ni ______.",
                            "fr": "Un autre mot pour 'apprenant' est ______."
                        },
                        "answer": {
                            "en": "student",
                            "sw": "mwanafunzi",
                            "fr": "étudiant"
                        }
                    }
                ]
            },
            {
                "number": 4,
                "text": {
                    "en": "SECTION D: MATCHING - Match Column A with Column B (5 questions - 10 marks)",
                    "sw": "SEHEMU D: KULINGANISHA - Linganisha Safu A na Safu B (Maswali 5 - Alama 10)",
                    "fr": "SECTION D: ASSOCIATION - Assortissez la Colonne A avec la Colonne B (5 questions - 10 points)"
                },
                "subQuestions": [
                    {
                        "text": {
                            "en": "Reading improves vocabulary → __________",
                            "sw": "Kusoma kunaboresha msamiati → __________",
                            "fr": "La lecture améliore le vocabulaire → __________"
                        },
                        "answer": {
                            "en": "Skill",
                            "sw": "Ujuzi",
                            "fr": "Compétence"
                        }
                    },
                    {
                        "text": {
                            "en": "Guessing meaning from context → __________",
                            "sw": "Kukisia maana kutoka kwa muktadha → __________",
                            "fr": "Devinette de sens à partir du contexte → __________"
                        },
                        "answer": {
                            "en": "Strategy",
                            "sw": "Mkakati",
                            "fr": "Stratégie"
                        }
                    },
                    {
                        "text": {
                            "en": "Emails and news → __________",
                            "sw": "Barua pepe na habari → __________",
                            "fr": "E-mails et nouvelles → __________"
                        },
                        "answer": {
                            "en": "Materials",
                            "sw": "Vifaa",
                            "fr": "Matériaux"
                        }
                    },
                    {
                        "text": {
                            "en": "Reading daily → __________",
                            "sw": "Kusoma kila siku → __________",
                            "fr": "Lecture quotidienne → __________"
                        },
                        "answer": {
                            "en": "Habit",
                            "sw": "Tabia",
                            "fr": "Habitude"
                        }
                    },
                    {
                        "text": {
                            "en": "Learners → __________",
                            "sw": "Wanafunzi → __________",
                            "fr": "Apprenants → __________"
                        },
                        "answer": {
                            "en": "People",
                            "sw": "Watu",
                            "fr": "Personnes"
                        }
                    }
                ]
            }
        ],
        "instructions": {
            "en": "CHARLES ACADEMY – ENGLISH TEST 3 (READING SKILLS)\n\nINSTRUCTIONS\n• Read the passage carefully.\n• Answer ALL questions.\n• Use ONE word only where required.\n• Circle the correct answer for multiple-choice questions.\n• No long paragraph writing.\n• Time: 60 minutes\n• Total Marks: 100\n• Passing score: 60%",
            "sw": "CHARLES ACADEMY – MTIHANI WA KIINGEREZA WA TATU (UJUMBE WA KUSOMA)\n\nMAELEKEZO\n• Soma ujumbe kwa makini.\n• Jibu maswali YOTE.\n• Tumia neno MOJA tu inapohitajika.\n• Zungusha jibu sahihi kwa maswali ya chaguo nyingi.\n• Hakuna uandishi wa aya ndefu.\n• Muda: dakika 60\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%",
            "fr": "CHARLES ACADEMY – TEST D'ANGLAIS NUMÉRO 3 (COMPÉTENCES DE LECTURE)\n\nINSTRUCTIONS\n• Lisez le passage attentivement.\n• Répondez à TOUTES les questions.\n• Utilisez UN mot seulement là où c'est requis.\n• Encerclez la bonne réponse pour les questions à choix multiples.\n• Pas de rédaction de paragraphe long.\n• Temps: 60 minutes\n• Total des points: 100\n• Score de passage: 60%"
        },
        "markingGuide": {
            "en": {
                "sectionA": [
                    "TRUE", "FALSE", "TRUE", "TRUE", "FALSE",
                    "TRUE", "FALSE", "TRUE", "FALSE", "TRUE"
                ],
                "sectionB": [
                    "B", "B", "B", "B", "B",
                    "A", "A", "A", "B", "A"
                ],
                "sectionC": [
                    "advantage", "comprehend", "insecure", "restricted", "student"
                ],
                "sectionD": [
                    "Skill", "Strategy", "Materials", "Habit", "People"
                ]
            },
            "sw": {
                "sectionA": [
                    "KWELI", "SI KWELI", "KWELI", "KWELI", "SI KWELI",
                    "KWELI", "SI KWELI", "KWELI", "SI KWELI", "KWELI"
                ],
                "sectionB": [
                    "B", "B", "B", "B", "B",
                    "A", "A", "A", "B", "A"
                ],
                "sectionC": [
                    "faida", "elewa", "wasiwasi", "mepesi", "mwanafunzi"
                ],
                "sectionD": [
                    "Ujuzi", "Mkakati", "Vifaa", "Tabia", "Watu"
                ]
            },
            "fr": {
                "sectionA": [
                    "VRAI", "FAUX", "VRAI", "VRAI", "FAUX",
                    "VRAI", "FAUX", "VRAI", "FAUX", "VRAI"
                ],
                "sectionB": [
                    "B", "B", "B", "B", "B",
                    "A", "A", "A", "B", "A"
                ],
                "sectionC": [
                    "avantage", "comprendre", "insecure", "restreint", "étudiant"
                ],
                "sectionD": [
                    "Compétence", "Stratégie", "Matériaux", "Habitude", "Personnes"
                ]
            }
        }
    }
,
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
    },

    // ==================== TEST 6: KISWAHILI TEST ONE ====================
    '6': {
        id: 'kiswahili_test_one',
        title: {
            en: 'KISWAHILI TEST ONE',
            sw: 'MTIHANI WA KISWAHILI WA KWANZA',
            fr: 'TEST DE KISWAHILI NUMÉRO UN'
        },
        time: '60 minutes',
        totalMarks: 50,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nMaelekezo: Andika KWELI au SI KWELI.',
                    sw: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nMaelekezo: Andika KWELI au SI KWELI.',
                    fr: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nMaelekezo: Andika KWELI au SI KWELI.'
                },
                subQuestions: [
                    {
                        text: { en: 'Salamu "Habari za asubuhi" hutumika asubuhi.', sw: 'Salamu "Habari za asubuhi" hutumika asubuhi.', fr: 'Salamu "Habari za asubuhi" hutumika asubuhi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Nambari 12 kwa maneno ni kumi na mbili.', sw: 'Nambari 12 kwa maneno ni kumi na mbili.', fr: 'Nambari 12 kwa maneno ni kumi na mbili.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Nambari 37 kwa maneno ni thelathini na saba.', sw: 'Nambari 37 kwa maneno ni thelathini na saba.', fr: 'Nambari 37 kwa maneno ni thelathini na saba.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Sentensi ya utambulisho lazima iwe na jina la mtu.', sw: 'Sentensi ya utambulisho lazima iwe na jina la mtu.', fr: 'Sentensi ya utambulisho lazima iwe na jina la mtu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Shule ni mahali pa kujifunzia.', sw: 'Shule ni mahali pa kujifunzia.', fr: 'Shule ni mahali pa kujifunzia.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Soko ni mahali pa kununua na kuuza bidhaa.', sw: 'Soko ni mahali pa kununua na kuuza bidhaa.', fr: 'Soko ni mahali pa kununua na kuuza bidhaa.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Maktaba ni mahali pa kusoma vitabu.', sw: 'Maktaba ni mahali pa kusoma vitabu.', fr: 'Maktaba ni mahali pa kusoma vitabu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Mtu mwenye furaha huweza kucheka.', sw: 'Mtu mwenye furaha huweza kucheka.', fr: 'Mtu mwenye furaha huweza kucheka.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Hasira ni hisia nzuri kila wakati.', sw: 'Hasira ni hisia nzuri kila wakati.', fr: 'Hasira ni hisia nzuri kila wakati.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Simba ni mnyama wa porini.', sw: 'Simba ni mnyama wa porini.', fr: 'Simba ni mnyama wa porini.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kiunganishi "kabla" kinaonyesha tukio lililotokea kwanza.', sw: 'Kiunganishi "kabla" kinaonyesha tukio lililotokea kwanza.', fr: 'Kiunganishi "kabla" kinaonyesha tukio lililotokea kwanza.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kiunganishi "baada" kinaonyesha tukio lililofuata.', sw: 'Kiunganishi "baada" kinaonyesha tukio lililofuata.', fr: 'Kiunganishi "baada" kinaonyesha tukio lililofuata.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Ninakula" ni sentensi ya mda wa sasa.', sw: '"Ninakula" ni sentensi ya mda wa sasa.', fr: '"Ninakula" ni sentensi ya mda wa sasa.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Nilikula" ni sentensi ya mda uliopita.', sw: '"Nilikula" ni sentensi ya mda uliopita.', fr: '"Nilikula" ni sentensi ya mda uliopita.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Nitakula" ni sentensi ya mda wa ujao.', sw: '"Nitakula" ni sentensi ya mda wa ujao.', fr: '"Nitakula" ni sentensi ya mda wa ujao.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SEHEMU B – CHAGUA JIBU SAHIHI (20 Alama)\nMaelekezo: Chagua jibu sahihi A, B, C, au D.',
                    sw: 'SEHEMU B – CHAGUA JIBU SAHIHI (20 Alama)\nMaelekezo: Chagua jibu sahihi A, B, C, au D.',
                    fr: 'SEHEMU B – CHAGUA JIBU SAHIHI (20 Alama)\nMaelekezo: Chagua jibu sahihi A, B, C, au D.'
                },
                subQuestions: [
                    {
                        text: { en: 'Salamu ya mchana ni ipi?\nA. Habari za asubuhi\nB. Habari za mchana\nC. Habari za usiku\nD. Kwaheri', sw: 'Salamu ya mchana ni ipi?\nA. Habari za asubuhi\nB. Habari za mchana\nC. Habari za usiku\nD. Kwaheri', fr: 'Salamu ya mchana ni ipi?\nA. Habari za asubuhi\nB. Habari za mchana\nC. Habari za usiku\nD. Kwaheri' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Nambari 145 kwa maneno ni:\nA. Mia moja arobaini na tano\nB. Mia moja hamsini\nC. Mia mbili arobaini na tano\nD. Mia moja arobaini', sw: 'Nambari 145 kwa maneno ni:\nA. Mia moja arobaini na tano\nB. Mia moja hamsini\nC. Mia mbili arobaini na tano\nD. Mia moja arobaini', fr: 'Nambari 145 kwa maneno ni:\nA. Mia moja arobaini na tano\nB. Mia moja hamsini\nC. Mia mbili arobaini na tano\nD. Mia moja arobaini' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Nambari 500 kwa maneno ni:\nA. Mia tano\nB. Mia nne\nC. Elfu moja\nD. Mia sita', sw: 'Nambari 500 kwa maneno ni:\nA. Mia tano\nB. Mia nne\nC. Elfu moja\nD. Mia sita', fr: 'Nambari 500 kwa maneno ni:\nA. Mia tano\nB. Mia nne\nC. Elfu moja\nD. Mia sita' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi sahihi ya utambulisho ni ipi?\nA. Jina langu ni Asha\nB. Maji ni baridi\nC. Kitabu kiko mezani\nD. Mbwa anakimbia', sw: 'Sentensi sahihi ya utambulisho ni ipi?\nA. Jina langu ni Asha\nB. Maji ni baridi\nC. Kitabu kiko mezani\nD. Mbwa anakimbia', fr: 'Sentensi sahihi ya utambulisho ni ipi?\nA. Jina langu ni Asha\nB. Maji ni baridi\nC. Kitabu kiko mezani\nD. Mbwa anakimbia' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Mahali pa kusoma vitabu ni:\nA. Sokoni\nB. Maktaba\nC. Shuleni\nD. Nyumbani', sw: 'Mahali pa kusoma vitabu ni:\nA. Sokoni\nB. Maktaba\nC. Shuleni\nD. Nyumbani', fr: 'Mahali pa kusoma vitabu ni:\nA. Sokoni\nB. Maktaba\nC. Shuleni\nD. Nyumbani' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Mahali pa kununua bidhaa ni:\nA. Sokoni\nB. Darasani\nC. Maktabani\nD. Hospitalini', sw: 'Mahali pa kununua bidhaa ni:\nA. Sokoni\nB. Darasani\nC. Maktabani\nD. Hospitalini', fr: 'Mahali pa kununua bidhaa ni:\nA. Sokoni\nB. Darasani\nC. Maktabani\nD. Hospitalini' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Neno linaloonyesha furaha ni:\nA. Hasira\nB. Tabasamu\nC. Huzuni\nD. Hofu', sw: 'Neno linaloonyesha furaha ni:\nA. Hasira\nB. Tabasamu\nC. Huzuni\nD. Hofu', fr: 'Neno linaloonyesha furaha ni:\nA. Hasira\nB. Tabasamu\nC. Huzuni\nD. Hofu' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno linaloonyesha hasira ni:\nA. Tabasamu\nB. Furaha\nC. Kukasirika\nD. Kucheka', sw: 'Neno linaloonyesha hasira ni:\nA. Tabasamu\nB. Furaha\nC. Kukasirika\nD. Kucheka', fr: 'Neno linaloonyesha hasira ni:\nA. Tabasamu\nB. Furaha\nC. Kukasirika\nD. Kucheka' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Mnyama wa porini ni:\nA. Simba\nB. Mbwa\nC. Paka\nD. Kuku', sw: 'Mnyama wa porini ni:\nA. Simba\nB. Mbwa\nC. Paka\nD. Kuku', fr: 'Mnyama wa porini ni:\nA. Simba\nB. Mbwa\nC. Paka\nD. Kuku' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi ipi iko katika mda wa sasa?\nA. Ninakula\nB. Nilikula\nC. Nitakula\nD. Nimekula', sw: 'Sentensi ipi iko katika mda wa sasa?\nA. Ninakula\nB. Nilikula\nC. Nitakula\nD. Nimekula', fr: 'Sentensi ipi iko katika mda wa sasa?\nA. Ninakula\nB. Nilikula\nC. Nitakula\nD. Nimekula' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi ipi iko katika mda uliopita?\nA. Nitacheka\nB. Nilicheka\nC. Ninacheka\nD. Nacheka', sw: 'Sentensi ipi iko katika mda uliopita?\nA. Nitacheka\nB. Nilicheka\nC. Ninacheka\nD. Nacheka', fr: 'Sentensi ipi iko katika mda uliopita?\nA. Nitacheka\nB. Nilicheka\nC. Ninacheka\nD. Nacheka' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Sentensi ipi iko katika mda wa ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma', sw: 'Sentensi ipi iko katika mda wa ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma', fr: 'Sentensi ipi iko katika mda wa ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Kiunganishi cha wakati ni:\nA. kabla\nB. nyumba\nC. kitabu\nD. rafiki', sw: 'Kiunganishi cha wakati ni:\nA. kabla\nB. nyumba\nC. kitabu\nD. rafiki', fr: 'Kiunganishi cha wakati ni:\nA. kabla\nB. nyumba\nC. kitabu\nD. rafiki' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Neno "baada" linaonyesha:\nA. wakati uliopita\nB. wakati ujao\nC. tukio linalofuata\nD. tukio lisilo na mpangilio', sw: 'Neno "baada" linaonyesha:\nA. wakati uliopita\nB. wakati ujao\nC. tukio linalofuata\nD. tukio lisilo na mpangilio', fr: 'Neno "baada" linaonyesha:\nA. wakati uliopita\nB. wakati ujao\nC. tukio linalofuata\nD. tukio lisilo na mpangilio' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Neno "kabla" linaonyesha:\nA. tukio la kwanza\nB. tukio la mwisho\nC. tukio la sasa\nD. tukio lisilo na mpangilio', sw: 'Neno "kabla" linaonyesha:\nA. tukio la kwanza\nB. tukio la mwisho\nC. tukio la sasa\nD. tukio lisilo na mpangilio', fr: 'Neno "kabla" linaonyesha:\nA. tukio la kwanza\nB. tukio la mwisho\nC. tukio la sasa\nD. tukio lisilo na mpangilio' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    }
                ]
            },
            {
                number: 3,
                text: {
                    en: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nMaelekezo: Andika neno moja tu.',
                    sw: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nMaelekezo: Andika neno moja tu.',
                    fr: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nMaelekezo: Andika neno moja tu.'
                },
                subQuestions: [
                    {
                        text: { en: 'Salamu ya kuaga ni ______.', sw: 'Salamu ya kuaga ni ______.', fr: 'Salamu ya kuaga ni ______.' },
                        answer: { en: 'Kwaheri', sw: 'Kwaheri', fr: 'Kwaheri' }
                    },
                    {
                        text: { en: 'Nambari 12 kwa maneno ni ______.', sw: 'Nambari 12 kwa maneno ni ______.', fr: 'Nambari 12 kwa maneno ni ______.' },
                        answer: { en: 'Kumi', sw: 'Kumi', fr: 'Kumi' }
                    },
                    {
                        text: { en: 'Mahali pa kusoma vitabu ni ______.', sw: 'Mahali pa kusoma vitabu ni ______.', fr: 'Mahali pa kusoma vitabu ni ______.' },
                        answer: { en: 'Maktaba', sw: 'Maktaba', fr: 'Maktaba' }
                    },
                    {
                        text: { en: 'Mnyama wa porini ni ______.', sw: 'Mnyama wa porini ni ______.', fr: 'Mnyama wa porini ni ______.' },
                        answer: { en: 'Simba', sw: 'Simba', fr: 'Simba' }
                    },
                    {
                        text: { en: 'Kiunganishi cha wakati ni ______.', sw: 'Kiunganishi cha wakati ni ______.', fr: 'Kiunganishi cha wakati ni ______.' },
                        answer: { en: 'Kabla', sw: 'Kabla', fr: 'Kabla' }
                    },
                    {
                        text: { en: 'Mtu anayefundisha shuleni ni ______.', sw: 'Mtu anayefundisha shuleni ni ______.', fr: 'Mtu anayefundisha shuleni ni ______.' },
                        answer: { en: 'Mwalimu', sw: 'Mwalimu', fr: 'Mwalimu' }
                    },
                    {
                        text: { en: 'Mahali pa kuuza bidhaa ni ______.', sw: 'Mahali pa kuuza bidhaa ni ______.', fr: 'Mahali pa kuuza bidhaa ni ______.' },
                        answer: { en: 'Soko', sw: 'Soko', fr: 'Soko' }
                    },
                    {
                        text: { en: 'Mtu mwenye furaha huweza ______.', sw: 'Mtu mwenye furaha huweza ______.', fr: 'Mtu mwenye furaha huweza ______.' },
                        answer: { en: 'Kucheka', sw: 'Kucheka', fr: 'Kucheka' }
                    },
                    {
                        text: { en: 'Kitenzi "kula" katika mda wa sasa ni ______.', sw: 'Kitenzi "kula" katika mda wa sasa ni ______.', fr: 'Kitenzi "kula" katika mda wa sasa ni ______.' },
                        answer: { en: 'Ninakula', sw: 'Ninakula', fr: 'Ninakula' }
                    },
                    {
                        text: { en: 'Kitenzi "soma" katika mda wa ujao ni ______.', sw: 'Kitenzi "soma" katika mda wa ujao ni ______.', fr: 'Kitenzi "soma" katika mda wa ujao ni ______.' },
                        answer: { en: 'Nitasoma', sw: 'Nitasoma', fr: 'Nitasoma' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'CHARLES ACADEMY – KISWAHILI TEST ONE\n\nINSTRUCTIONS\n• Answer ALL questions.\n• Section A: Write KWELI or SI KWELI.\n• Section B: Choose the correct answer (A, B, C or D).\n• Section C: Write ONE word only.\n• Time: 60 minutes\n• Total Marks: 50\n• Passing score: 60%',
            sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI WA KWANZA\n\nMAELEKEZO\n• Jibu maswali YOTE.\n• Sehemu A: Andika KWELI au SI KWELI.\n• Sehemu B: Chagua jibu sahihi (A, B, C au D).\n• Sehemu C: Andika neno MOJA tu.\n• Muda: dakika 60\n• Jumla ya Alama: 50\n• Alama ya kupita: 60%',
            fr: 'CHARLES ACADEMY – TEST DE KISWAHILI NUMÉRO UN\n\nINSTRUCTIONS\n• Répondez à TOUTES les questions.\n• Section A: Écrivez KWELI ou SI KWELI.\n• Section B: Choisissez la bonne réponse (A, B, C ou D).\n• Section C: Écrivez UN mot seulement.\n• Temps: 60 minutes\n• Total des points: 50\n• Score de passage: 60%'
        },
        markingGuide: {
            en: {
                sectionA: ['KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['B','A','A','A','B','A','B','C','A','A','B','C','A','C','A'],
                sectionC: ['Kwaheri','Kumi','Maktaba','Simba','Kabla','Mwalimu','Soko','Kucheka','Ninakula','Nitasoma']
            },
            sw: {
                sectionA: ['KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['B','A','A','A','B','A','B','C','A','A','B','C','A','C','A'],
                sectionC: ['Kwaheri','Kumi','Maktaba','Simba','Kabla','Mwalimu','Soko','Kucheka','Ninakula','Nitasoma']
            },
            fr: {
                sectionA: ['KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['B','A','A','A','B','A','B','C','A','A','B','C','A','C','A'],
                sectionC: ['Kwaheri','Kumi','Maktaba','Simba','Kabla','Mwalimu','Soko','Kucheka','Ninakula','Nitasoma']
            }
        }
    },

    // ==================== TEST 7: KISWAHILI SARUFI ====================
    '7': {
        id: 'kiswahili_sarufi',
        title: {
            en: 'KISWAHILI TEST 2 (SARUFI)',
            sw: 'MTIHANI WA KISWAHILI 2 (SARUFI)',
            fr: 'TEST DE KISWAHILI 2 (SARUFI)'
        },
        time: '60 minutes',
        totalMarks: 50,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nAndika KWELI au SI KWELI.',
                    sw: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nAndika KWELI au SI KWELI.',
                    fr: 'SEHEMU A – KWELI AU SI KWELI (15 Alama)\nAndika KWELI au SI KWELI.'
                },
                subQuestions: [
                    {
                        text: { en: 'Nomino ni jina la mtu, mahali au kitu.', sw: 'Nomino ni jina la mtu, mahali au kitu.', fr: 'Nomino ni jina la mtu, mahali au kitu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "mwalimu" ni nomino.', sw: 'Neno "mwalimu" ni nomino.', fr: 'Neno "mwalimu" ni nomino.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "soma" ni nomino.', sw: 'Neno "soma" ni nomino.', fr: 'Neno "soma" ni nomino.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Vitenzi vinaonyesha kitendo.', sw: 'Vitenzi vinaonyesha kitendo.', fr: 'Vitenzi vinaonyesha kitendo.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Ninakula" ni kitenzi cha mda wa sasa.', sw: '"Ninakula" ni kitenzi cha mda wa sasa.', fr: '"Ninakula" ni kitenzi cha mda wa sasa.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Nilikula" ni kitenzi cha mda uliopita.', sw: '"Nilikula" ni kitenzi cha mda uliopita.', fr: '"Nilikula" ni kitenzi cha mda uliopita.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Nitakula" ni kitenzi cha mda wa ujao.', sw: '"Nitakula" ni kitenzi cha mda wa ujao.', fr: '"Nitakula" ni kitenzi cha mda wa ujao.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kiunganishi hutumika kuunganisha sentensi.', sw: 'Kiunganishi hutumika kuunganisha sentensi.', fr: 'Kiunganishi hutumika kuunganisha sentensi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "na" ni kiunganishi.', sw: 'Neno "na" ni kiunganishi.', fr: 'Neno "na" ni kiunganishi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Sentensi lazima iwe na kitenzi.', sw: 'Sentensi lazima iwe na kitenzi.', fr: 'Sentensi lazima iwe na kitenzi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "wanafunzi" linaonyesha wingi.', sw: 'Neno "wanafunzi" linaonyesha wingi.', fr: 'Neno "wanafunzi" linaonyesha wingi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "rafiki yangu" linaonyesha umiliki.', sw: 'Neno "rafiki yangu" linaonyesha umiliki.', fr: 'Neno "rafiki yangu" linaonyesha umiliki.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Neno "baada" linaonyesha wakati.', sw: 'Neno "baada" linaonyesha wakati.', fr: 'Neno "baada" linaonyesha wakati.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: '"Wakati" hutumika kuonyesha tukio linalotokea.', sw: '"Wakati" hutumika kuonyesha tukio linalotokea.', fr: '"Wakati" hutumika kuonyesha tukio linalotokea.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Sentensi inaweza kuwa na nomino na kitenzi.', sw: 'Sentensi inaweza kuwa na nomino na kitenzi.', fr: 'Sentensi inaweza kuwa na nomino na kitenzi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SEHEMU B – MULTIPLE CHOICE (20 Alama)\nChagua jibu sahihi A, B, C, au D.',
                    sw: 'SEHEMU B – MULTIPLE CHOICE (20 Alama)\nChagua jibu sahihi A, B, C, au D.',
                    fr: 'SEHEMU B – MULTIPLE CHOICE (20 Alama)\nChagua jibu sahihi A, B, C, au D.'
                },
                subQuestions: [
                    {
                        text: { en: 'Nomino ni:\nA. jina la mtu, kitu au mahali\nB. kitendo\nC. kivumishi\nD. kiwakilishi', sw: 'Nomino ni:\nA. jina la mtu, kitu au mahali\nB. kitendo\nC. kivumishi\nD. kiwakilishi', fr: 'Nomino ni:\nA. jina la mtu, kitu au mahali\nB. kitendo\nC. kivumishi\nD. kiwakilishi' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Neno lipi ni nomino?\nA. soma\nB. rafiki\nC. kula\nD. cheka', sw: 'Neno lipi ni nomino?\nA. soma\nB. rafiki\nC. kula\nD. cheka', fr: 'Neno lipi ni nomino?\nA. soma\nB. rafiki\nC. kula\nD. cheka' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Kitenzi kinaonyesha:\nA. rangi\nB. kitendo\nC. jina\nD. wakati', sw: 'Kitenzi kinaonyesha:\nA. rangi\nB. kitendo\nC. jina\nD. wakati', fr: 'Kitenzi kinaonyesha:\nA. rangi\nB. kitendo\nC. jina\nD. wakati' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Sentensi ipi ina kitenzi cha sasa?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nimekula', sw: 'Sentensi ipi ina kitenzi cha sasa?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nimekula', fr: 'Sentensi ipi ina kitenzi cha sasa?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nimekula' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Sentensi ipi ina kitenzi cha uliopita?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nakula', sw: 'Sentensi ipi ina kitenzi cha uliopita?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nakula', fr: 'Sentensi ipi ina kitenzi cha uliopita?\nA. Nilikula\nB. Ninakula\nC. Nitakula\nD. Nakula' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi ipi ina kitenzi cha ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma', sw: 'Sentensi ipi ina kitenzi cha ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma', fr: 'Sentensi ipi ina kitenzi cha ujao?\nA. Nilisoma\nB. Ninasoma\nC. Nitasoma\nD. Nimesoma' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Neno lipi ni kiunganishi?\nA. na\nB. kitabu\nC. mtoto\nD. mwalimu', sw: 'Neno lipi ni kiunganishi?\nA. na\nB. kitabu\nC. mtoto\nD. mwalimu', fr: 'Neno lipi ni kiunganishi?\nA. na\nB. kitabu\nC. mtoto\nD. mwalimu' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Neno "wanafunzi" linaonyesha:\nA. umoja\nB. wingi\nC. umiliki\nD. wakati', sw: 'Neno "wanafunzi" linaonyesha:\nA. umoja\nB. wingi\nC. umiliki\nD. wakati', fr: 'Neno "wanafunzi" linaonyesha:\nA. umoja\nB. wingi\nC. umiliki\nD. wakati' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno "yangu" linaonyesha:\nA. wingi\nB. umiliki\nC. wakati\nD. rangi', sw: 'Neno "yangu" linaonyesha:\nA. wingi\nB. umiliki\nC. wakati\nD. rangi', fr: 'Neno "yangu" linaonyesha:\nA. wingi\nB. umiliki\nC. wakati\nD. rangi' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno linaloonyesha wakati ni:\nA. baada\nB. mtoto\nC. nyumba\nD. meza', sw: 'Neno linaloonyesha wakati ni:\nA. baada\nB. mtoto\nC. nyumba\nD. meza', fr: 'Neno linaloonyesha wakati ni:\nA. baada\nB. mtoto\nC. nyumba\nD. meza' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi sahihi ni:\nA. Rafiki kuja kesho\nB. Rafiki yangu atakuja kesho\nC. Kuja rafiki kesho\nD. Kesho rafiki', sw: 'Sentensi sahihi ni:\nA. Rafiki kuja kesho\nB. Rafiki yangu atakuja kesho\nC. Kuja rafiki kesho\nD. Kesho rafiki', fr: 'Sentensi sahihi ni:\nA. Rafiki kuja kesho\nB. Rafiki yangu atakuja kesho\nC. Kuja rafiki kesho\nD. Kesho rafiki' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Sentensi sahihi ya sasa ni:\nA. Mwalimu anasoma\nB. Mwalimu alisoma\nC. Mwalimu atasoma\nD. Mwalimu amesoma', sw: 'Sentensi sahihi ya sasa ni:\nA. Mwalimu anasoma\nB. Mwalimu alisoma\nC. Mwalimu atasoma\nD. Mwalimu amesoma', fr: 'Sentensi sahihi ya sasa ni:\nA. Mwalimu anasoma\nB. Mwalimu alisoma\nC. Mwalimu atasoma\nD. Mwalimu amesoma' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi sahihi ya ujao ni:\nA. Wanafunzi walicheza\nB. Wanafunzi wanacheza\nC. Wanafunzi watacheza\nD. Wanafunzi wamecheza', sw: 'Sentensi sahihi ya ujao ni:\nA. Wanafunzi walicheza\nB. Wanafunzi wanacheza\nC. Wanafunzi watacheza\nD. Wanafunzi wamecheza', fr: 'Sentensi sahihi ya ujao ni:\nA. Wanafunzi walicheza\nB. Wanafunzi wanacheza\nC. Wanafunzi watacheza\nD. Wanafunzi wamecheza' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Kiunganishi hutumika:\nA. kuonyesha kitendo\nB. kuunganisha sentensi\nC. kuonyesha rangi\nD. kuonyesha jina', sw: 'Kiunganishi hutumika:\nA. kuonyesha kitendo\nB. kuunganisha sentensi\nC. kuonyesha rangi\nD. kuonyesha jina', fr: 'Kiunganishi hutumika:\nA. kuonyesha kitendo\nB. kuunganisha sentensi\nC. kuonyesha rangi\nD. kuonyesha jina' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno lipi linaonyesha umiliki?\nA. yangu\nB. wao\nC. sisi\nD. wote', sw: 'Neno lipi linaonyesha umiliki?\nA. yangu\nB. wao\nC. sisi\nD. wote', fr: 'Neno lipi linaonyesha umiliki?\nA. yangu\nB. wao\nC. sisi\nD. wote' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    }
                ]
            },
            {
                number: 3,
                text: {
                    en: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nAndika neno moja tu.',
                    sw: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nAndika neno moja tu.',
                    fr: 'SEHEMU C – ANDIKA NENO MOJA (15 Alama)\nAndika neno moja tu.'
                },
                subQuestions: [
                    {
                        text: { en: 'Jina la mtu, kitu au mahali huitwa ______.', sw: 'Jina la mtu, kitu au mahali huitwa ______.', fr: 'Jina la mtu, kitu au mahali huitwa ______.' },
                        answer: { en: 'Nomino', sw: 'Nomino', fr: 'Nomino' }
                    },
                    {
                        text: { en: 'Neno linaloonyesha kitendo huitwa ______.', sw: 'Neno linaloonyesha kitendo huitwa ______.', fr: 'Neno linaloonyesha kitendo huitwa ______.' },
                        answer: { en: 'Kitenzi', sw: 'Kitenzi', fr: 'Kitenzi' }
                    },
                    {
                        text: { en: 'Neno la kuunganisha sentensi huitwa ______.', sw: 'Neno la kuunganisha sentensi huitwa ______.', fr: 'Neno la kuunganisha sentensi huitwa ______.' },
                        answer: { en: 'Kiunganishi', sw: 'Kiunganishi', fr: 'Kiunganishi' }
                    },
                    {
                        text: { en: 'Kitenzi cha sasa cha "kula" ni ______.', sw: 'Kitenzi cha sasa cha "kula" ni ______.', fr: 'Kitenzi cha sasa cha "kula" ni ______.' },
                        answer: { en: 'Ninakula', sw: 'Ninakula', fr: 'Ninakula' }
                    },
                    {
                        text: { en: 'Kitenzi cha uliopita cha "kula" ni ______.', sw: 'Kitenzi cha uliopita cha "kula" ni ______.', fr: 'Kitenzi cha uliopita cha "kula" ni ______.' },
                        answer: { en: 'Nilikula', sw: 'Nilikula', fr: 'Nilikula' }
                    },
                    {
                        text: { en: 'Kitenzi cha ujao cha "kula" ni ______.', sw: 'Kitenzi cha ujao cha "kula" ni ______.', fr: 'Kitenzi cha ujao cha "kula" ni ______.' },
                        answer: { en: 'Nitakula', sw: 'Nitakula', fr: 'Nitakula' }
                    },
                    {
                        text: { en: 'Neno "wanafunzi" linaonyesha ______.', sw: 'Neno "wanafunzi" linaonyesha ______.', fr: 'Neno "wanafunzi" linaonyesha ______.' },
                        answer: { en: 'Wingi', sw: 'Wingi', fr: 'Wingi' }
                    },
                    {
                        text: { en: 'Neno linaloonyesha umiliki ni ______.', sw: 'Neno linaloonyesha umiliki ni ______.', fr: 'Neno linaloonyesha umiliki ni ______.' },
                        answer: { en: 'Umiliki', sw: 'Umiliki', fr: 'Umiliki' }
                    },
                    {
                        text: { en: 'Neno la kuonyesha wakati ni ______.', sw: 'Neno la kuonyesha wakati ni ______.', fr: 'Neno la kuonyesha wakati ni ______.' },
                        answer: { en: 'Wakati', sw: 'Wakati', fr: 'Wakati' }
                    },
                    {
                        text: { en: 'Mtu anayefundisha shuleni ni ______.', sw: 'Mtu anayefundisha shuleni ni ______.', fr: 'Mtu anayefundisha shuleni ni ______.' },
                        answer: { en: 'Mwalimu', sw: 'Mwalimu', fr: 'Mwalimu' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'CHARLES ACADEMY – KISWAHILI TEST 2 (SARUFI)\n\nINSTRUCTIONS\n• Answer ALL questions.\n• Section A: Write KWELI or SI KWELI.\n• Section B: Choose the correct answer (A, B, C or D).\n• Section C: Write ONE word only.\n• Time: 60 minutes\n• Total Marks: 50\n• Passing score: 60%',
            sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI 2 (SARUFI)\n\nMAELEKEZO\n• Jibu maswali YOTE.\n• Sehemu A: Andika KWELI au SI KWELI.\n• Sehemu B: Chagua jibu sahihi (A, B, C au D).\n• Sehemu C: Andika neno MOJA tu.\n• Muda: dakika 60\n• Jumla ya Alama: 50\n• Alama ya kupita: 60%',
            fr: 'CHARLES ACADEMY – TEST DE KISWAHILI 2 (SARUFI)\n\nINSTRUCTIONS\n• Répondez à TOUTES les questions.\n• Section A: Écrivez KWELI ou SI KWELI.\n• Section B: Choisissez la bonne réponse (A, B, C ou D).\n• Section C: Écrivez UN mot seulement.\n• Temps: 60 minutes\n• Total des points: 50\n• Score de passage: 60%'
        },
        markingGuide: {
            en: {
                sectionA: ['KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['A','B','B','B','A','C','A','B','B','A','B','A','C','B','A'],
                sectionC: ['Nomino','Kitenzi','Kiunganishi','Ninakula','Nilikula','Nitakula','Wingi','Umiliki','Wakati','Mwalimu']
            },
            sw: {
                sectionA: ['KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['A','B','B','B','A','C','A','B','B','A','B','A','C','B','A'],
                sectionC: ['Nomino','Kitenzi','Kiunganishi','Ninakula','Nilikula','Nitakula','Wingi','Umiliki','Wakati','Mwalimu']
            },
            fr: {
                sectionA: ['KWELI','KWELI','SI KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionB: ['A','B','B','B','A','C','A','B','B','A','B','A','C','B','A'],
                sectionC: ['Nomino','Kitenzi','Kiunganishi','Ninakula','Nilikula','Nitakula','Wingi','Umiliki','Wakati','Mwalimu']
            }
        }
    },

    // ==================== TEST 8: KISWAHILI KUSOMA ====================
    '8': {
        id: 'kiswahili_kusoma',
        title: {
            en: 'KISWAHILI TEST 3 (KUSOMA)',
            sw: 'MTIHANI WA KISWAHILI 3 (KUSOMA)',
            fr: 'TEST DE KISWAHILI 3 (KUSOMA)'
        },
        time: '60 minutes',
        totalMarks: 50,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SEHEMU A – MSOMO WA KIFUPI (25 Alama)\n\nSoma maandishi yafuatayo:\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake. Familia pia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto."\n\nA. Andika KWELI au SI KWELI:',
                    sw: 'SEHEMU A – MSOMO WA KIFUPI (25 Alama)\n\nSoma maandishi yafuatayo:\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake. Familia pia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto."\n\nA. Andika KWELI au SI KWELI:',
                    fr: 'SEHEMU A – MSOMO WA KIFUPI (25 Alama)\n\nSoma maandishi yafuatayo:\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake. Familia pia inachangia maendeleo ya jamii kwa kutoa malezi bora kwa watoto."\n\nA. Andika KWELI au SI KWELI:'
                },
                subQuestions: [
                    {
                        text: { en: 'Amani ni jambo muhimu kwa jamii.', sw: 'Amani ni jambo muhimu kwa jamii.', fr: 'Amani ni jambo muhimu kwa jamii.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Watu wanaposhirikiana, maisha yao yanakuwa mabaya.', sw: 'Watu wanaposhirikiana, maisha yao yanakuwa mabaya.', fr: 'Watu wanaposhirikiana, maisha yao yanakuwa mabaya.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Kila mtu anapaswa kusaidia wengine.', sw: 'Kila mtu anapaswa kusaidia wengine.', fr: 'Kila mtu anapaswa kusaidia wengine.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Familia haina mchango katika malezi ya watoto.', sw: 'Familia haina mchango katika malezi ya watoto.', fr: 'Familia haina mchango katika malezi ya watoto.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Kutunza mazingira ni muhimu.', sw: 'Kutunza mazingira ni muhimu.', fr: 'Kutunza mazingira ni muhimu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):',
                    sw: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):',
                    fr: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):'
                },
                subQuestions: [
                    {
                        text: { en: 'Familia inachangia _____ kwa jamii:\nA. Michezo pekee\nB. Shughuli za biashara\nC. Maendeleo ya jamii', sw: 'Familia inachangia _____ kwa jamii:\nA. Michezo pekee\nB. Shughuli za biashara\nC. Maendeleo ya jamii', fr: 'Familia inachangia _____ kwa jamii:\nA. Michezo pekee\nB. Shughuli za biashara\nC. Maendeleo ya jamii' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Neno linalohusiana na kusaidia wengine ni:\nA. Kucheka\nB. Kutoa msaada\nC. Kucheza', sw: 'Neno linalohusiana na kusaidia wengine ni:\nA. Kucheka\nB. Kutoa msaada\nC. Kucheza', fr: 'Neno linalohusiana na kusaidia wengine ni:\nA. Kucheka\nB. Kutoa msaada\nC. Kucheza' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Maisha bora yanatokana na:\nA. Kuheshimiana\nB. Kukimbizana\nC. Kusahau majukumu', sw: 'Maisha bora yanatokana na:\nA. Kuheshimiana\nB. Kukimbizana\nC. Kusahau majukumu', fr: 'Maisha bora yanatokana na:\nA. Kuheshimiana\nB. Kukimbizana\nC. Kusahau majukumu' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Neno linalohusiana na utunzaji wa mazingira ni:\nA. Kuandika\nB. Kutunza\nC. Kukimbia', sw: 'Neno linalohusiana na utunzaji wa mazingira ni:\nA. Kuandika\nB. Kutunza\nC. Kukimbia', fr: 'Neno linalohusiana na utunzaji wa mazingira ni:\nA. Kuandika\nB. Kutunza\nC. Kukimbia' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno linalohusiana na malezi bora ya watoto ni:\nA. Familia\nB. Mchezo\nC. Shule', sw: 'Neno linalohusiana na malezi bora ya watoto ni:\nA. Familia\nB. Mchezo\nC. Shule', fr: 'Neno linalohusiana na malezi bora ya watoto ni:\nA. Familia\nB. Mchezo\nC. Shule' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    }
                ]
            },
            {
                number: 3,
                text: {
                    en: 'SEHEMU B – MSOMO WA KIREFU (25 Alama)\n\nSoma hadithi:\n"Juma alikuwa mtoto mwenye shauku ya kusoma. Kila asubuhi, alikusanya vitabu vyake na kwenda maktaba ya shule. Alipokuwa akisoma, alijifunza mambo mapya kuhusu wanyama, mimea, na historia ya nchi yake. Rafiki zake walimkaribisha pia maktaba ili wanasome pamoja. Juma alijua elimu ni ufunguo wa maisha bora."\n\nA. Andika KWELI au SI KWELI:',
                    sw: 'SEHEMU B – MSOMO WA KIREFU (25 Alama)\n\nSoma hadithi:\n"Juma alikuwa mtoto mwenye shauku ya kusoma. Kila asubuhi, alikusanya vitabu vyake na kwenda maktaba ya shule. Alipokuwa akisoma, alijifunza mambo mapya kuhusu wanyama, mimea, na historia ya nchi yake. Rafiki zake walimkaribisha pia maktaba ili wanasome pamoja. Juma alijua elimu ni ufunguo wa maisha bora."\n\nA. Andika KWELI au SI KWELI:',
                    fr: 'SEHEMU B – MSOMO WA KIREFU (25 Alama)\n\nSoma hadithi:\n"Juma alikuwa mtoto mwenye shauku ya kusoma. Kila asubuhi, alikusanya vitabu vyake na kwenda maktaba ya shule. Alipokuwa akisoma, alijifunza mambo mapya kuhusu wanyama, mimea, na historia ya nchi yake. Rafiki zake walimkaribisha pia maktaba ili wanasome pamoja. Juma alijua elimu ni ufunguo wa maisha bora."\n\nA. Andika KWELI au SI KWELI:'
                },
                subQuestions: [
                    {
                        text: { en: 'Juma alikuwa na shauku ya kusoma.', sw: 'Juma alikuwa na shauku ya kusoma.', fr: 'Juma alikuwa na shauku ya kusoma.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Alikosa kwenda maktaba kila asubuhi.', sw: 'Alikosa kwenda maktaba kila asubuhi.', fr: 'Alikosa kwenda maktaba kila asubuhi.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Alijifunza kuhusu wanyama, mimea, na historia.', sw: 'Alijifunza kuhusu wanyama, mimea, na historia.', fr: 'Alijifunza kuhusu wanyama, mimea, na historia.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Rafiki zake hawakuenda maktaba.', sw: 'Rafiki zake hawakuenda maktaba.', fr: 'Rafiki zake hawakuenda maktaba.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Juma alijua elimu ni muhimu.', sw: 'Juma alijua elimu ni muhimu.', fr: 'Juma alijua elimu ni muhimu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 4,
                text: {
                    en: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):',
                    sw: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):',
                    fr: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):'
                },
                subQuestions: [
                    {
                        text: { en: 'Juma alijua elimu ni _____ wa maisha bora.\nA. Kifaa\nB. Ufunguo\nC. Zawadi', sw: 'Juma alijua elimu ni _____ wa maisha bora.\nA. Kifaa\nB. Ufunguo\nC. Zawadi', fr: 'Juma alijua elimu ni _____ wa maisha bora.\nA. Kifaa\nB. Ufunguo\nC. Zawadi' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Anapenda kwenda wapi kila asubuhi?\nA. Shule ya michezo\nB. Maktaba ya shule\nC. Shule ya muziki', sw: 'Anapenda kwenda wapi kila asubuhi?\nA. Shule ya michezo\nB. Maktaba ya shule\nC. Shule ya muziki', fr: 'Anapenda kwenda wapi kila asubuhi?\nA. Shule ya michezo\nB. Maktaba ya shule\nC. Shule ya muziki' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Tabia kuu ya Juma ni:\nA. Ujasiri\nB. Shauku ya kusoma\nC. Kukimbia', sw: 'Tabia kuu ya Juma ni:\nA. Ujasiri\nB. Shauku ya kusoma\nC. Kukimbia', fr: 'Tabia kuu ya Juma ni:\nA. Ujasiri\nB. Shauku ya kusoma\nC. Kukimbia' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Ni nani aliyeenda naye maktaba?\nA. Wazazi wake\nB. Rafiki zake\nC. Jirani', sw: 'Ni nani aliyeenda naye maktaba?\nA. Wazazi wake\nB. Rafiki zake\nC. Jirani', fr: 'Ni nani aliyeenda naye maktaba?\nA. Wazazi wake\nB. Rafiki zake\nC. Jirani' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno lingine linalomaanisha "shauku" ni:\nA. Hamasa\nB. Furaha\nC. Mapenzi', sw: 'Neno lingine linalomaanisha "shauku" ni:\nA. Hamasa\nB. Furaha\nC. Mapenzi', fr: 'Neno lingine linalomaanisha "shauku" ni:\nA. Hamasa\nB. Furaha\nC. Mapenzi' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'CHARLES ACADEMY – KISWAHILI TEST 3 (KUSOMA)\n\nINSTRUCTIONS\n• Read the passages carefully.\n• Answer ALL questions.\n• Write KWELI or SI KWELI for True/False sections.\n• Choose the correct answer for Multiple Choice sections.\n• Time: 60 minutes\n• Total Marks: 50\n• Passing score: 60%',
            sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI 3 (KUSOMA)\n\nMAELEKEZO\n• Soma maandishi kwa makini.\n• Jibu maswali YOTE.\n• Andika KWELI au SI KWELI kwa sehemu za True/False.\n• Chagua jibu sahihi kwa sehemu za Multiple Choice.\n• Muda: dakika 60\n• Jumla ya Alama: 50\n• Alama ya kupita: 60%',
            fr: 'CHARLES ACADEMY – TEST DE KISWAHILI 3 (KUSOMA)\n\nINSTRUCTIONS\n• Lisez les passages attentivement.\n• Répondez à TOUTES les questions.\n• Écrivez KWELI ou SI KWELI pour les sections Vrai/Faux.\n• Choisissez la bonne réponse pour les sections à choix multiples.\n• Temps: 60 minutes\n• Total des points: 50\n• Score de passage: 60%'
        },
        markingGuide: {
            en: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['C','B','A','B','A'],
                sectionC: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionD: ['B','B','B','B','A']
            },
            sw: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['C','B','A','B','A'],
                sectionC: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionD: ['B','B','B','B','A']
            },
            fr: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['C','B','A','B','A'],
                sectionC: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionD: ['B','B','B','B','A']
            }
        }
    },

    // ==================== TEST 9: KISWAHILI MAANDISHI ====================
    '9': {
        id: 'kiswahili_maandishi',
        title: {
            en: 'KISWAHILI TEST 4 (MAANDISHI)',
            sw: 'MTIHANI WA KISWAHILI 4 (MAANDISHI)',
            fr: 'TEST DE KISWAHILI 4 (MAANDISHI)'
        },
        time: '60 minutes',
        totalMarks: 50,
        questions: [
            {
                number: 1,
                text: {
                    en: 'SEHEMU A – MSINGI WA HISIA NA MAELEZO (25 Alama)\nA. Andika KWELI au SI KWELI:',
                    sw: 'SEHEMU A – MSINGI WA HISIA NA MAELEZO (25 Alama)\nA. Andika KWELI au SI KWELI:',
                    fr: 'SEHEMU A – MSINGI WA HISIA NA MAELEZO (25 Alama)\nA. Andika KWELI au SI KWELI:'
                },
                subQuestions: [
                    {
                        text: { en: 'Furaha ni hisia nzuri inayojitokeza wakati mtu anafurahia jambo.', sw: 'Furaha ni hisia nzuri inayojitokeza wakati mtu anafurahia jambo.', fr: 'Furaha ni hisia nzuri inayojitokeza wakati mtu anafurahia jambo.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Hasira ni hisia ya furaha na amani.', sw: 'Hasira ni hisia ya furaha na amani.', fr: 'Hasira ni hisia ya furaha na amani.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Familia ni kundi la watu wanaohusiana na kukaa pamoja.', sw: 'Familia ni kundi la watu wanaohusiana na kukaa pamoja.', fr: 'Familia ni kundi la watu wanaohusiana na kukaa pamoja.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Rafiki ni mtu ambaye hatusaidii au kushirikiana naye.', sw: 'Rafiki ni mtu ambaye hatusaidii au kushirikiana naye.', fr: 'Rafiki ni mtu ambaye hatusaidii au kushirikiana naye.' },
                        answer: { en: 'SI KWELI', sw: 'SI KWELI', fr: 'SI KWELI' }
                    },
                    {
                        text: { en: 'Shule ni mahali pa kujifunzia na kupata elimu.', sw: 'Shule ni mahali pa kujifunzia na kupata elimu.', fr: 'Shule ni mahali pa kujifunzia na kupata elimu.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 2,
                text: {
                    en: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):',
                    sw: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):',
                    fr: 'SEHEMU A – B. Chagua jibu sahihi (Multiple Choice):'
                },
                subQuestions: [
                    {
                        text: { en: 'Neno linalohusiana na furaha ni:\nA. Uchungu\nB. Furaha\nC. Hasira', sw: 'Neno linalohusiana na furaha ni:\nA. Uchungu\nB. Furaha\nC. Hasira', fr: 'Neno linalohusiana na furaha ni:\nA. Uchungu\nB. Furaha\nC. Hasira' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Neno linalohusiana na hasira ni:\nA. Hasira\nB. Amani\nC. Furaha', sw: 'Neno linalohusiana na hasira ni:\nA. Hasira\nB. Amani\nC. Furaha', fr: 'Neno linalohusiana na hasira ni:\nA. Hasira\nB. Amani\nC. Furaha' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Familia inahusiana na:\nA. Rafiki tu\nB. Watu wanaohusiana na mnyumba\nC. Shule pekee', sw: 'Familia inahusiana na:\nA. Rafiki tu\nB. Watu wanaohusiana na mnyumba\nC. Shule pekee', fr: 'Familia inahusiana na:\nA. Rafiki tu\nB. Watu wanaohusiana na mnyumba\nC. Shule pekee' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Rafiki ni mtu:\nA. Anayecheza peke yake\nB. Anayecheza na kushirikiana nawe\nC. Anayecheka tu', sw: 'Rafiki ni mtu:\nA. Anayecheza peke yake\nB. Anayecheza na kushirikiana nawe\nC. Anayecheka tu', fr: 'Rafiki ni mtu:\nA. Anayecheza peke yake\nB. Anayecheza na kushirikiana nawe\nC. Anayecheka tu' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Shule ni mahali pa:\nA. Kula chakula tu\nB. Kujifunza na kupata elimu\nC. Kukimbia tu', sw: 'Shule ni mahali pa:\nA. Kula chakula tu\nB. Kujifunza na kupata elimu\nC. Kukimbia tu', fr: 'Shule ni mahali pa:\nA. Kula chakula tu\nB. Kujifunza na kupata elimu\nC. Kukimbia tu' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    }
                ]
            },
            {
                number: 3,
                text: {
                    en: 'SEHEMU B – MUDA WA KITENDO (25 Alama)\nA. Andika KWELI au SI KWELI:',
                    sw: 'SEHEMU B – MUDA WA KITENDO (25 Alama)\nA. Andika KWELI au SI KWELI:',
                    fr: 'SEHEMU B – MUDA WA KITENDO (25 Alama)\nA. Andika KWELI au SI KWELI:'
                },
                subQuestions: [
                    {
                        text: { en: 'Kitenzi cha sasa kinaonyesha kitendo kinachoendelea sasa.', sw: 'Kitenzi cha sasa kinaonyesha kitendo kinachoendelea sasa.', fr: 'Kitenzi cha sasa kinaonyesha kitendo kinachoendelea sasa.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kitenzi cha uliopita kinaonyesha kitendo kilichotokea jana au zamani.', sw: 'Kitenzi cha uliopita kinaonyesha kitendo kilichotokea jana au zamani.', fr: 'Kitenzi cha uliopita kinaonyesha kitendo kilichotokea jana au zamani.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kitenzi cha ujao kinaonyesha kitendo kitakachotokea baadaye.', sw: 'Kitenzi cha ujao kinaonyesha kitendo kitakachotokea baadaye.', fr: 'Kitenzi cha ujao kinaonyesha kitendo kitakachotokea baadaye.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kila sentensi lazima iwe na kitenzi.', sw: 'Kila sentensi lazima iwe na kitenzi.', fr: 'Kila sentensi lazima iwe na kitenzi.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    },
                    {
                        text: { en: 'Kutumia vitenzi kwa muda tofauti kunasaidia kueleza mpangilio wa matukio.', sw: 'Kutumia vitenzi kwa muda tofauti kunasaidia kueleza mpangilio wa matukio.', fr: 'Kutumia vitenzi kwa muda tofauti kunasaidia kueleza mpangilio wa matukio.' },
                        answer: { en: 'KWELI', sw: 'KWELI', fr: 'KWELI' }
                    }
                ]
            },
            {
                number: 4,
                text: {
                    en: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):',
                    sw: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):',
                    fr: 'SEHEMU B – B. Chagua jibu sahihi (Multiple Choice):'
                },
                subQuestions: [
                    {
                        text: { en: 'Sentensi inayotumia kitenzi cha sasa ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', sw: 'Sentensi inayotumia kitenzi cha sasa ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', fr: 'Sentensi inayotumia kitenzi cha sasa ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Sentensi inayotumia kitenzi cha uliopita ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', sw: 'Sentensi inayotumia kitenzi cha uliopita ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', fr: 'Sentensi inayotumia kitenzi cha uliopita ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu' },
                        answer: { en: 'A', sw: 'A', fr: 'A' }
                    },
                    {
                        text: { en: 'Sentensi inayotumia kitenzi cha ujao ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', sw: 'Sentensi inayotumia kitenzi cha ujao ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu', fr: 'Sentensi inayotumia kitenzi cha ujao ni:\nA. Nilisoma kitabu\nB. Ninasoma kitabu\nC. Nitasoma kitabu' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    },
                    {
                        text: { en: 'Kitenzi cha sasa cha "kula" ni:\nA. Nilikuwa nakula\nB. Nakula\nC. Nitakula', sw: 'Kitenzi cha sasa cha "kula" ni:\nA. Nilikuwa nakula\nB. Nakula\nC. Nitakula', fr: 'Kitenzi cha sasa cha "kula" ni:\nA. Nilikuwa nakula\nB. Nakula\nC. Nitakula' },
                        answer: { en: 'B', sw: 'B', fr: 'B' }
                    },
                    {
                        text: { en: 'Kitenzi cha ujao cha "andika" ni:\nA. Ninaandika\nB. Niliandika\nC. Nitaandika', sw: 'Kitenzi cha ujao cha "andika" ni:\nA. Ninaandika\nB. Niliandika\nC. Nitaandika', fr: 'Kitenzi cha ujao cha "andika" ni:\nA. Ninaandika\nB. Niliandika\nC. Nitaandika' },
                        answer: { en: 'C', sw: 'C', fr: 'C' }
                    }
                ]
            }
        ],
        instructions: {
            en: 'CHARLES ACADEMY – KISWAHILI TEST 4 (MAANDISHI)\n\nINSTRUCTIONS\n• Answer ALL questions in Kiswahili.\n• Write KWELI or SI KWELI for True/False sections.\n• Choose the correct answer for Multiple Choice sections.\n• Time: 60 minutes\n• Total Marks: 50\n• Passing score: 60%',
            sw: 'CHARLES ACADEMY – MTIHANI WA KISWAHILI 4 (MAANDISHI)\n\nMAELEKEZO\n• Jibu maswali YOTE kwa Kiswahili fasaha.\n• Andika KWELI au SI KWELI kwa sehemu za True/False.\n• Chagua jibu sahihi kwa sehemu za Multiple Choice.\n• Muda: dakika 60\n• Jumla ya Alama: 50\n• Alama ya kupita: 60%',
            fr: 'CHARLES ACADEMY – TEST DE KISWAHILI 4 (MAANDISHI)\n\nINSTRUCTIONS\n• Répondez à TOUTES les questions en Kiswahili.\n• Écrivez KWELI ou SI KWELI pour les sections Vrai/Faux.\n• Choisissez la bonne réponse pour les sections à choix multiples.\n• Temps: 60 minutes\n• Total des points: 50\n• Score de passage: 60%'
        },
        markingGuide: {
            en: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['B','A','B','B','B'],
                sectionC: ['KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionD: ['B','A','C','B','C']
            },
            sw: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['B','A','B','B','B'],
                sectionC: ['KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionD: ['B','A','C','B','C']
            },
            fr: {
                sectionA: ['KWELI','SI KWELI','KWELI','SI KWELI','KWELI'],
                sectionB: ['B','A','B','B','B'],
                sectionC: ['KWELI','KWELI','KWELI','KWELI','KWELI'],
                sectionD: ['B','A','C','B','C']
            }
        }
    }
};

module.exports = testsData;