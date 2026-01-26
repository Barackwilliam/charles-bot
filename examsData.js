// examsData.js - Contains all exam questions for all courses
const examsData = {
    // ==================== ENGLISH EXAMS ====================
    'english': {
       'writing_skills': {
    id: 'english_writing',
    title: {
        en: 'FINAL EXAMINATION – WRITING SKILLS',
        sw: 'MTIHANI WA MWISHO – UANDISHI',
        fr: 'EXAMEN FINAL – COMPÉTENCES EN ÉCRITURE'
    },
    time: '2 Hours',
    totalMarks: 100,
    questions: [
        {
            number: 1,
            text: {
                en: 'Write TRUE or FALSE for each statement.',
                sw: 'Andika KWELI au SI KWELI kwa kila taarifa.',
                fr: 'Écrivez VRAI ou FAUX pour chaque énoncé.'
            },
            subQuestions: [
                {
                    text: { en: 'A sentence must begin with a capital letter.', sw: 'Sentensi lazima ianze na herufi kubwa.', fr: 'Une phrase doit commencer par une majuscule.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“She go to school every day” is a correct sentence.', sw: '“Yeye kwenda shuleni kila siku” ni sentensi sahihi.', fr: '“Elle aller à l\'école chaque jour” est une phrase correcte.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'The past tense of “go” is “went”.', sw: 'Wakati uliopita wa “kwenda” ni “aliwenda”.', fr: 'Le passé de “aller” est “est allé”.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: 'We use “is” with singular subjects.', sw: 'Tunatumia “ni” na vitu vya umoja.', fr: 'Nous utilisons “est” avec des sujets singuliers.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“They is playing football” is grammatically correct.', sw: '“Wao ni kucheza mpira” ni sahihi kisarufi.', fr: '“Ils est jouer au football” est grammaticalement correct.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'A paragraph should have more than one sentence.', sw: 'Kifungu kinapaswa kuwa na zaidi ya sentensi moja.', fr: 'Un paragraphe doit avoir plus d\'une phrase.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“Because” is a conjunction.', sw: '“Kwa sababu” ni kiunganishi.', fr: '“Parce que” est une conjonction.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: 'The future tense can be formed using “will”.', sw: 'Wakati ujao unaweza kutengenezwa kwa kutumia “ata”.', fr: 'Le futur peut être formé en utilisant “va”.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“He don’t like rice” is a correct sentence.', sw: '“Yeye si kupenda wali” ni sentensi sahihi.', fr: '“Il ne pas aimer riz” est une phrase correcte.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'An adjective describes a noun.', sw: 'Kivumishi kinaelezea nomino.', fr: 'Un adjectif décrit un nom.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“Burundi” is a preposition.', sw: '“Burundi” ni kihusishi.', fr: '“Burundi” est une préposition.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'The comparative of “tall” is “taller”.', sw: 'Kilinganishi cha “mrefu” ni “mrefu zaidi”.', fr: 'Le comparatif de “grand” est “plus grand”.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“She has finished her work” is in the present perfect tense.', sw: '“Yeye amemaliza kazi yake” iko katika wakati uliopo kamili.', fr: '“Elle a fini son travail” est au présent parfait.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: 'A question sentence ends with a full stop.', sw: 'Sentensi ya swali huishia na nukta.', fr: 'Une phrase interrogative se termine par un point.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: '“Although” is used to join two ideas.', sw: '“Ingawa” hutumiwa kuunganisha mawazo mawili.', fr: '“Bien que” est utilisé pour joindre deux idées.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“I am study English now” is correct grammar.', sw: '“Mimi ni kusoma Kiingereza sasa” ni sahihi kisarufi.', fr: '“Je suis étudier anglais maintenant” est grammaticalement correct.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'A passive sentence focuses on the action, not the doer.', sw: 'Sentensi ya kufanywa inalenga kitendo, sio kifanya.', fr: 'Une phrase passive se concentre sur l\'action, pas sur l\'acteur.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“At” is used with specific time.', sw: '“Saa” hutumiwa na wakati maalum.', fr: '“À” est utilisé avec un temps spécifique.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“Friends” is a singular noun.', sw: '“Marafiki” ni nomino ya umoja.', fr: '“Amis” est un nom singulier.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'A topic sentence shows the main idea of a paragraph.', sw: 'Sentensi ya mada inaonyesha wazo kuu la kifungu.', fr: 'Une phrase thème montre l\'idée principale d\'un paragraphe.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“We was happy yesterday” is correct English.', sw: '“Sisi alikuwa na furaha jana” ni Kiingereza sahihi.', fr: '“Nous était heureux hier” est un anglais correct.' },
                    answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' }
                },
                {
                    text: { en: 'Verbs show action or state.', sw: 'Vitenzi vinaonyesha kitendo au hali.', fr: 'Les verbes montrent l\'action ou l\'état.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“My favourite subject is English” is a complete sentence.', sw: '“Somo langu napendalo ni Kiingereza” ni sentensi kamili.', fr: '“Ma matière préférée est l\'anglais” est une phrase complète.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: '“If” is a conjunction.', sw: '“Kama” ni kiunganishi.', fr: '“Si” est une conjonction.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                },
                {
                    text: { en: 'The superlative of “good” is “best”.', sw: 'Kushinda cha “nzuri” ni “bora zaidi”.', fr: 'Le superlatif de “bon” est “meilleur”.' },
                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                }
            ]
        },
        {
            number: 2,
            text: {
                en: 'Choose the correct answer from the options given.',
                sw: 'Chagua jibu sahihi kutoka kwa chaguo zilizotolewa.',
                fr: 'Choisissez la bonne réponse parmi les options données.'
            },
            subQuestions: [
                {
                    text: { 
                        en: 'Choose the correct sentence:\nA. She go to school every day.\nB. She goes to school every day.\nC. She going to school every day.\nD. She gone to school every day.', 
                        sw: 'Chagua sentensi sahihi:\nA. Yeye kwenda shuleni kila siku.\nB. Yeye huenda shuleni kila siku.\nC. Yeye akienda shuleni kila siku.\nD. Yeye amekwenda shuleni kila siku.', 
                        fr: 'Choisissez la phrase correcte:\nA. Elle aller à l\'école chaque jour.\nB. Elle va à l\'école chaque jour.\nC. Elle allant à l\'école chaque jour.\nD. Elle est allée à l\'école chaque jour.' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'The plural of "child" is:\nA. Childs\nB. Childes\nC. Children\nD. Childrens', 
                        sw: 'Wingi wa "mtoto" ni:\nA. Watotos\nB. Watotoe\nC. Watoto\nD. Watotos', 
                        fr: 'Le pluriel de "enfant" est:\nA. Enfants\nB. Enfantes\nC. Enfants\nD. Enfantss' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct verb: "I _____ English now."\nA. study\nB. studied\nC. am studying\nD. will study', 
                        sw: 'Chagua kitenzi sahihi: "Mimi _____ Kiingereza sasa."\nA. soma\nB. nilisoma\nC. ninasoma\nD. nitasoma', 
                        fr: 'Choisissez le verbe correct: "Je _____ anglais maintenant."\nA. étudie\nB. ai étudié\nC. suis en train d\'étudier\nD. étudierai' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'The past tense of "eat" is:\nA. eated\nB. eats\nC. eating\nD. ate', 
                        sw: 'Wakati uliopita wa "kula" ni:\nA. niliwala\nB. anakula\nC. kula\nD. alikula', 
                        fr: 'Le passé de "manger" est:\nA. mangé\nB. mange\nC. mangeant\nD. a mangé' 
                    },
                    answer: { en: 'D', sw: 'D', fr: 'D' }
                },
                {
                    text: { 
                        en: 'Choose the correct preposition: "The book is _____ the table."\nA. in\nB. on\nC. at\nD. by', 
                        sw: 'Chagua kihusishi sahihi: "Kitabu kiko _____ meza."\nA. ndani ya\nB. juu ya\nC. kwenye\nD. kando ya', 
                        fr: 'Choisissez la préposition correcte: "Le livre est _____ la table."\nA. dans\nB. sur\nC. à\nD. par' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Which word is a conjunction?\nA. Quickly\nB. Teacher\nC. Because\nD. School', 
                        sw: 'Neno lipi ni kiunganishi?\nA. Kwa haraka\nB. Mwalimu\nC. Kwa sababu\nD. Shule', 
                        fr: 'Quel mot est une conjonction?\nA. Rapidement\nB. Professeur\nC. Parce que\nD. École' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct sentence:\nA. He don\'t like vegetables.\nB. He doesn\'t likes vegetables.\nC. He doesn\'t like vegetables.\nD. He don\'t likes vegetables.', 
                        sw: 'Chagua sentensi sahihi:\nA. Yeye si kupenda mboga.\nB. Yeye hasipendi mboga.\nC. Yeye hapendi mboga.\nD. Yeye si kupenda mboga.', 
                        fr: 'Choisissez la phrase correcte:\nA. Il ne pas aimer légumes.\nB. Il ne aime pas légumes.\nC. Il n\'aime pas les légumes.\nD. Il ne pas aimer légumes.' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'The future form of "I go to school" is:\nA. I went to school.\nB. I am going to school.\nC. I will go to school.\nD. I have gone to school.', 
                        sw: 'Umboni wa wakati ujao wa "Ninaenda shuleni" ni:\nA. Nilienda shuleni.\nB. Ninaenda shuleni.\nC. Nitakwenda shuleni.\nD. Nimekwenda shuleni.', 
                        fr: 'La forme future de "Je vais à l\'école" est:\nA. Je suis allé à l\'école.\nB. Je vais à l\'école.\nC. J\'irai à l\'école.\nD. Je suis allé à l\'école.' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Which one is an adjective?\nA. Run\nB. Happy\nC. Quickly\nD. Eat', 
                        sw: 'Lipia ni kivumishi?\nA. Kimbia\nB. Furaha\nC. Kwa haraka\nD. Kula', 
                        fr: 'Lequel est un adjectif?\nA. Courir\nB. Heureux\nC. Rapidement\nD. Manger' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Choose the correct article: "I saw _____ man."\nA. a\nB. an\nC. the\nD. no article', 
                        sw: 'Chagua kihisishi sahihi: "Nilimwona _____ mtu."\nA. mtu\nB. (hakuna)\nC. (hakuna)\nD. (hakuna)', 
                        fr: 'Choisissez l\'article correct: "J\'ai vu _____ homme."\nA. un\nB. (aucun)\nC. (aucun)\nD. (aucun)' 
                    },
                    answer: { en: 'A', sw: 'A', fr: 'A' }
                },
                {
                    text: { 
                        en: 'The comparative of "big" is:\nA. big\nB. more big\nC. biggest\nD. bigger', 
                        sw: 'Kilinganishi cha "kubwa" ni:\nA. kubwa\nB. kubwa zaidi\nC. kubwa zaidi\nD. kubwa zaidi', 
                        fr: 'Le comparatif de "grand" est:\nA. grand\nB. plus grand\nC. le plus grand\nD. plus grand' 
                    },
                    answer: { en: 'D', sw: 'D', fr: 'D' }
                },
                {
                    text: { 
                        en: 'Choose the correct sentence:\nA. They is playing football.\nB. They are playing football.\nC. They am playing football.\nD. They be playing football.', 
                        sw: 'Chagua sentensi sahihi:\nA. Wao ni kucheza mpira.\nB. Wao wanacheza mpira.\nC. Wao nina kucheza mpira.\nD. Wao kuwa kucheza mpira.', 
                        fr: 'Choisissez la phrase correcte:\nA. Ils est jouer au football.\nB. Ils jouent au football.\nC. Ils suis jouer au football.\nD. Ils être jouer au football.' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Which is a correct question?\nA. You like English?\nB. Like you English?\nC. Do you like English?\nD. You do like English?', 
                        sw: 'Ni swali lipi sahihi?\nA. Unapenda Kiingereza?\nB. Penda wewe Kiingereza?\nC. Je, unapenda Kiingereza?\nD. Wewe unapenda Kiingereza?', 
                        fr: 'Quelle est une question correcte?\nA. Vous aimez anglais?\nB. Aimez vous anglais?\nC. Aimez-vous l\'anglais?\nD. Vous faites aimer anglais?' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct tense: "She _____ to school yesterday."\nA. go\nB. goes\nC. going\nD. went', 
                        sw: 'Chagua wakati sahihi: "Yeye _____ shuleni jana."\nA. kwenda\nB. huenda\nC. akienda\nD. alienda', 
                        fr: 'Choisissez le temps correct: "Elle _____ à l\'école hier."\nA. aller\nB. va\nC. allant\nD. est allée' 
                    },
                    answer: { en: 'D', sw: 'D', fr: 'D' }
                },
                {
                    text: { 
                        en: 'Which sentence is passive?\nA. She writes a letter.\nB. A letter is written by her.\nC. She is writing a letter.\nD. She wrote a letter.', 
                        sw: 'Sentensi ipi ni ya kufanywa?\nA. Yeye anaandika barua.\nB. Barua imeandikwa naye.\nC. Yeye anaandika barua.\nD. Yeye aliandika barua.', 
                        fr: 'Quelle phrase est passive?\nA. Elle écrit une lettre.\nB. Une lettre est écrite par elle.\nC. Elle est en train d\'écrire une lettre.\nD. Elle a écrit une lettre.' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Choose the correct conjunction: "I stayed home _____ it was raining."\nA. but\nB. and\nC. because\nD. or', 
                        sw: 'Chagua kiunganishi sahihi: "Nilibaki nyumbani _____ ilikuwa inanyesha."\nA. lakini\nB. na\nC. kwa sababu\nD. au', 
                        fr: 'Choisissez la conjonction correcte: "Je suis resté à la maison _____ il pleuvait."\nA. mais\nB. et\nC. parce que\nD. ou' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Which one is a noun?\nA. Beautiful\nB. Quickly\nC. Teacher\nD. Running', 
                        sw: 'Ni neno lipi nomino?\nA. Mzuri\nB. Kwa haraka\nC. Mwalimu\nD. Kukimbia', 
                        fr: 'Lequel est un nom?\nA. Beau\nB. Rapidement\nC. Professeur\nD. Courir' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct form: "He _____ homework already."\nA. finish\nB. finished\nC. finishing\nD. has finished', 
                        sw: 'Chagua umbo sahihi: "Yeye _____ kazi ya nyumbani tayari."\nA. maliza\nB. alimaliza\nC. akiimaliza\nD. ameshamaliza', 
                        fr: 'Choisissez la forme correcte: "Il _____ les devoirs déjà."\nA. finir\nB. a fini\nC. finissant\nD. a fini' 
                    },
                    answer: { en: 'D', sw: 'D', fr: 'D' }
                },
                {
                    text: { 
                        en: 'The superlative of "small" is:\nA. smaller\nB. small\nC. smallest\nD. more small', 
                        sw: 'Kushinda cha "dogo" ni:\nA. dogo zaidi\nB. dogo\nC. dogo zaidi\nD. dogo zaidi', 
                        fr: 'Le superlatif de "petit" est:\nA. plus petit\nB. petit\nC. le plus petit\nD. plus petit' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct preposition: "We will meet _____ 5 p.m."\nA. in\nB. on\nC. at\nD. by', 
                        sw: 'Chagua kihusishi sahihi: "Tutakutana _____ saa kumi na moja."\nA. ndani ya\nB. juu ya\nC. saa\nD. kando ya', 
                        fr: 'Choisissez la préposition correcte: "Nous nous rencontrerons _____ 17h00."\nA. dans\nB. sur\nC. à\nD. par' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Which sentence is correct?\nA. I am like reading books.\nB. I like reading books.\nC. I am liking read books.\nD. I like read books.', 
                        sw: 'Sentensi ipi ni sahihi?\nA. Mimi ni kama kusoma vitabu.\nB. Napenda kusoma vitabu.\nC. Mimi nina kupenda kusoma vitabu.\nD. Napenda kusoma vitabu.', 
                        fr: 'Quelle phrase est correcte?\nA. Je suis comme lire des livres.\nB. J\'aime lire des livres.\nC. Je suis en train d\'aimer lire des livres.\nD. J\'aime lire des livres.' 
                    },
                    answer: { en: 'B', sw: 'B', fr: 'B' }
                },
                {
                    text: { 
                        en: 'Choose the correct word: "My favourite _____ is English."\nA. teacher\nB. school\nC. subject\nD. classroom', 
                        sw: 'Chagua neno sahihi: "_____ langu napendalo ni Kiingereza."\nA. mwalimu\nB. shule\nC. somo\nD. darasa', 
                        fr: 'Choisissez le mot correct: "Ma _____ préférée est l\'anglais."\nA. professeur\nB. école\nC. matière\nD. salle de classe' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Which one is a pronoun?\nA. Book\nB. Run\nC. She\nD. Happy', 
                        sw: 'Ni neno lipi kiwakilishi?\nA. Kitabu\nB. Kimbia\nC. Yeye\nD. Furaha', 
                        fr: 'Lequel est un pronom?\nA. Livre\nB. Courir\nC. Elle\nD. Heureux' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Choose the correct sentence:\nA. We was happy yesterday.\nB. We are happy yesterday.\nC. We were happy yesterday.\nD. We be happy yesterday.', 
                        sw: 'Chagua sentensi sahihi:\nA. Sisi alikuwa na furaha jana.\nB. Sisi ni wenye furaha jana.\nC. Sisi tulikuwa na furaha jana.\nD. Sisi kuwa na furaha jana.', 
                        fr: 'Choisissez la phrase correcte:\nA. Nous était heureux hier.\nB. Nous sommes heureux hier.\nC. Nous étions heureux hier.\nD. Nous être heureux hier.' 
                    },
                    answer: { en: 'C', sw: 'C', fr: 'C' }
                },
                {
                    text: { 
                        en: 'Which sentence shows future tense?\nA. I eat rice.\nB. I ate rice.\nC. I am eating rice.\nD. I will eat rice.', 
                        sw: 'Sentensi ipi inaonyesha wakati ujao?\nA. Ninakula wali.\nB. Nilikula wali.\nC. Nina kula wali.\nD. Nitakula wali.', 
                        fr: 'Quelle phrase montre le futur?\nA. Je mange du riz.\nB. J\'ai mangé du riz.\nC. Je suis en train de manger du riz.\nD. Je mangerai du riz.' 
                    },
                    answer: { en: 'D', sw: 'D', fr: 'D' }
                }
            ]
        }
    ],
    instructions: {
        en: 'GENERAL INSTRUCTIONS\n• Answer ALL questions.\n• Choose the correct answer for Multiple Choice questions.\n• Write TRUE or FALSE for each statement in Section A.\n• Each question carries equal marks.',
        sw: 'MAELEKEZO YA JUMLA\n• Jibu maswali YOTE.\n• Chagua jibu sahihi kwa maswali ya Chaguo Nyingi.\n• Andika KWELI au SI KWELI kwa kila taarifa katika Sehemu A.\n• Kila swali lina alama sawa.',
        fr: 'INSTRUCTIONS GÉNÉRALES\n• Répondez à TOUTES les questions.\n• Choisissez la bonne réponse pour les questions à choix multiples.\n• Écrivez VRAI ou FAUX pour chaque énoncé de la Section A.\n• Chaque question porte des points égaux.'
    }
},











    "reading_skills": {
        "id": "english_reading",
        "title": {
            "en": "FINAL EXAMINATION – READING SKILLS",
            "sw": "MTIHANI WA MWISHO – USOMAJI",
            "fr": "EXAMEN FINAL – COMPÉTENCES DE LECTURE"
        },
        "time": "2 Hours",
        "totalMarks": 100,
        "questions": [
            {
                "number": 1,
                "text": {
                    "en": "Read the passage 'The Value of Education' and answer TRUE or FALSE for each statement.",
                    "sw": "Soma kifungu 'Thamani ya Elimu' na ujibu KWELI au SI KWELI kwa kila taarifa.",
                    "fr": "Lisez le passage 'La Valeur de l'Éducation' et répondez VRAI ou FAUX pour chaque énoncé."
                },
                "subQuestions": [
                    {
                        "text": { "en": "Education plays an important role in people's lives.", "sw": "Elimu ina jukumu muhimu katika maisha ya watu.", "fr": "L'éducation joue un rôle important dans la vie des gens." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education helps people gain knowledge.", "sw": "Elimu inasaidia watu kupata ujuzi.", "fr": "L'éducation aide les gens à acquérir des connaissances." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education helps people lose confidence.", "sw": "Elimu inasaidia watu kupoteza ujasiri.", "fr": "L'éducation aide les gens à perdre confiance." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "An educated person can make better decisions.", "sw": "Mtu aliyeelimika anaweza kufanya maamuzi bora.", "fr": "Une personne éduquée peut prendre de meilleures décisions." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "An educated person cannot solve problems easily.", "sw": "Mtu aliyeelimika hawezi kutatua matatizo kwa urahisi.", "fr": "Une personne éduquée ne peut pas résoudre facilement les problèmes." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Education is learned only in schools.", "sw": "Elimu hujifunzwa shuleni pekee.", "fr": "L'éducation s'apprend uniquement à l'école." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "People can learn from books and the internet.", "sw": "Watu wanaweza kujifunza kutoka kwa vitabu na intaneti.", "fr": "Les gens peuvent apprendre à partir de livres et d'internet." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "People cannot learn from daily experiences.", "sw": "Watu hawawezi kujifunza kutokana na uzoefu wa kila siku.", "fr": "Les gens ne peuvent pas apprendre des expériences quotidiennes." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Schools provide guidance.", "sw": "Shule hutoa mwongozo.", "fr": "Les écoles fournissent des conseils." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Schools do not provide discipline.", "sw": "Shule hazitoi nidhamu.", "fr": "Les écoles ne fournissent pas de discipline." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Schools provide structured learning.", "sw": "Shule hutoa ujifunzaji uliopangwa.", "fr": "Les écoles fournissent un apprentissage structuré." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Students who attend school regularly perform better.", "sw": "Wanafunzi wanaohudhuria shule kwa ukawaida hufanya vyema zaidi.", "fr": "Les élèves qui fréquentent régulièrement l'école réussissent mieux." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Regular school attendance helps future careers.", "sw": "Uwepo wa kawaida shule husaidia kazi za baadaye.", "fr": "La fréquentation régulière de l'école aide les carrières futures." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education helps reduce poverty.", "sw": "Elimu inasaidia kupunguza umaskini.", "fr": "L'éducation aide à réduire la pauvreté." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education makes living standards worse.", "sw": "Elimu hufanya viwango vya maisha kuwa mabaya zaidi.", "fr": "L'éducation aggrave le niveau de vie." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Educated people can find better jobs.", "sw": "Watu walioelimika wanaweza kupata kazi bora.", "fr": "Les personnes éduquées peuvent trouver de meilleurs emplois." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Educated people cannot support their families.", "sw": "Watu walioelimika hawawezi kuwasaidia familia zao.", "fr": "Les personnes éduquées ne peuvent pas subvenir aux besoins de leur famille." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Education helps improve living standards.", "sw": "Elimu inasaidia kuboresha viwango vya maisha.", "fr": "L'éducation aide à améliorer le niveau de vie." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education should not be encouraged.", "sw": "Elimu haipaswi kutiwa moyo.", "fr": "L'éducation ne devrait pas être encouragée." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Education should be encouraged for everyone.", "sw": "Elimu inapaswa kutiwa moyo kwa kila mtu.", "fr": "L'éducation devrait être encouragée pour tous." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education helps people develop skills.", "sw": "Elimu inasaidia watu kuendeleza ujuzi.", "fr": "L'éducation aide les gens à développer des compétences." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education makes people make bad decisions.", "sw": "Elimu hufanya watu wafanye maamuzi mabaya.", "fr": "L'éducation fait que les gens prennent de mauvaises décisions." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    },
                    {
                        "text": { "en": "Education helps people build confidence.", "sw": "Elimu inasaidia watu kujenga ujasiri.", "fr": "L'éducation aide les gens à renforcer la confiance." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education helps people solve problems.", "sw": "Elimu inasaidia watu kutatua matatizo.", "fr": "L'éducation aide les gens à résoudre les problèmes." },
                        "answer": { "en": "TRUE", "sw": "KWELI", "fr": "VRAI" }
                    },
                    {
                        "text": { "en": "Education has no importance in life.", "sw": "Elimu haina umuhimu wowote katika maisha.", "fr": "L'éducation n'a aucune importance dans la vie." },
                        "answer": { "en": "FALSE", "sw": "SI KWELI", "fr": "FAUX" }
                    }
                ]
            },
            {
                "number": 2,
                "text": {
                    "en": "Read the passage 'A Day in the Life of a Student' and choose the correct answer from the options given.",
                    "sw": "Soma kifungu 'Siku Katika Maisha ya Mwanafunzi' na chagua jibu sahihi kutoka kwa chaguo zilizotolewa.",
                    "fr": "Lisez le passage 'Une Journée dans la Vie d'un Étudiant' et choisissez la bonne réponse parmi les options données."
                },
                "subQuestions": [
                    {
                        "text": { 
                            "en": "James is a student at:\nA. Bright School\nB. City Academy\nC. Charles Academy\nD. Green School", 
                            "sw": "James ni mwanafunzi wa:\nA. Shule ya Bright\nB. Chuo cha City\nC. Chuo cha Charles\nD. Shule ya Green", 
                            "fr": "James est étudiant à:\nA. École Bright\nB. Académie City\nC. Académie Charles\nD. École Green" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James wakes up:\nA. late every morning\nB. early every morning\nC. slowly every morning\nD. at night every morning", 
                            "sw": "James huamka:\nA. marehemu kila asubuhi\nB. mapema kila asubuhi\nC. polepole kila asubuhi\nD. usiku kila asubuhi", 
                            "fr": "James se réveille:\nA. tard chaque matin\nB. tôt chaque matin\nC. lentement chaque matin\nD. la nuit chaque matin" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James prepares for his:\nA. games in the morning\nB. meals in the morning\nC. lessons in the morning\nD. sleep in the morning", 
                            "sw": "James hujiandaa kwa:\nA. michezo yake asubuhi\nB. milo yake asubuhi\nC. masomo yake asubuhi\nD. kulala kwake asubuhi", 
                            "fr": "James se prépare pour ses:\nA. jeux le matin\nB. repas le matin\nC. leçons le matin\nD. sommeil le matin" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "After breakfast, James:\nA. sleeps\nB. reviews his notes\nC. plays football\nD. goes out", 
                            "sw": "Baada ya kiamsha kinywa, James:\nA. analala\nB. hakiki maelezo yake\nC. anaicheza mpira wa miguu\nD. anatoka nje", 
                            "fr": "Après le petit-déjeuner, James:\nA. dort\nB. revise ses notes\nC. joue au football\nD. sort" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James attends classes through:\nA. radio\nB. television\nC. WhatsApp\nD. books", 
                            "sw": "James huhudhuria madarasa kupitia:\nA. redio\nB. televisheni\nC. WhatsApp\nD. vitabu", 
                            "fr": "James assiste aux cours par:\nA. radio\nB. télévision\nC. WhatsApp\nD. livres" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James watches during the day:\nA. cartoons\nB. movies\nC. recorded videos\nD. news", 
                            "sw": "James huangalia wakati wa mchana:\nA. katuni\nB. filamu\nC. video zilizorekodiwa\nD. habari", 
                            "fr": "James regarde pendant la journée:\nA. dessins animés\nB. films\nC. vidéos enregistrées\nD. actualités" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James completes exercises sent by his:\nA. friends\nB. parents\nC. teachers\nD. brothers", 
                            "sw": "James hukamilisha mazoezi yaliyotumwa na:\nA. marafiki zake\nB. wazazi wake\nC. walimu wake\nD. ndugu zake", 
                            "fr": "James termine les exercices envoyés par ses:\nA. amis\nB. parents\nC. enseignants\nD. frères" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "In the evening, James:\nA. plays games\nB. revises his lessons\nC. sleeps early\nD. travels", 
                            "sw": "Jioni, James:\nA. hucheza michezo\nB. hukariri masomo yake\nC. hulala mapema\nD. anasafiri", 
                            "fr": "Le soir, James:\nA. joue à des jeux\nB. revise ses leçons\nC. se couche tôt\nD. voyage" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James asks questions when he does not:\nA. eat\nB. sleep\nC. understand\nD. walk", 
                            "sw": "James huuliza maswali wakati ha:\nA. kuli\nB. kulali\nC. kuelewi\nD. kutembee", 
                            "fr": "James pose des questions quand il ne:\nA. mange pas\nB. dort pas\nC. comprend pas\nD. marche pas" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James believes that lead to success:\nA. money and power\nB. food and rest\nC. discipline and hard work\nD. games and friends", 
                            "sw": "James anaamini kuwa husababisha mafanikio:\nA. pesa na nguvu\nB. chakula na kupumzika\nC. nidhamu na kazi ngumu\nD. michezo na marafiki", 
                            "fr": "James croit que mènent au succès:\nA. argent et pouvoir\nB. nourriture et repos\nC. discipline et travail acharné\nD. jeux et amis" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James hopes to achieve his:\nA. fears\nB. games\nC. dreams\nD. holidays", 
                            "sw": "James anatumai kufikia:\nA. hofu zake\nB. michezo yake\nC. ndoto zake\nD. likizo zake", 
                            "fr": "James espère réaliser ses:\nA. craintes\nB. jeux\nC. rêves\nD. vacances" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James wants to help his:\nA. teachers\nB. friends\nC. family\nD. community", 
                            "sw": "James anataka kusaidia:\nA. walimu wake\nB. marafiki zake\nC. familia yake\nD. jamii yake", 
                            "fr": "James veut aider sa:\nA. enseignants\nB. amis\nC. famille\nD. communauté" 
                        },
                        "answer": { "en": "D", "sw": "D", "fr": "D" }
                    },
                    {
                        "text": { 
                            "en": "James attends classes:\nA. physical\nB. holiday\nC. online\nD. weekend", 
                            "sw": "James huhudhuria madarasa ya:\nA. mwili\nB. likizo\nC. mtandaoni\nD. wikendi", 
                            "fr": "James suit des cours:\nA. physiques\nB. vacances\nC. en ligne\nD. week-end" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James studies using videos:\nA. music\nB. funny\nC. recorded\nD. short", 
                            "sw": "James husoma kwa kutumia video za:\nA. muziki\nB. za kuchekesha\nC. zilizorekodiwa\nD. fupi", 
                            "fr": "James étudie en utilisant des vidéos:\nA. musique\nB. drôles\nC. enregistrées\nD. courtes" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James revises what he has:\nA. eaten\nB. learned\nC. lost\nD. forgotten", 
                            "sw": "James hukariri kile ambacho ame:\nA. kula\nB. jifunza\nC. poteza\nD. sahau", 
                            "fr": "James révise ce qu'il a:\nA. mangé\nB. appris\nC. perdu\nD. oublié" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James studies because he wants to:\nA. sleep\nB. succeed\nC. travel\nD. play", 
                            "sw": "James husoma kwa sababu anataka:\nA. kulala\nB. kufaulu\nC. kusafiri\nD. kucheza", 
                            "fr": "James étudie parce qu'il veut:\nA. dormir\nB. réussir\nC. voyager\nD. jouer" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James prepares for lessons in the:\nA. afternoon\nB. evening\nC. morning\nD. night", 
                            "sw": "James hujiandaa kwa masomo katika:\nA. alasiri\nB. jioni\nC. asubuhi\nD. usiku", 
                            "fr": "James se prépare pour les leçons le:\nA. après-midi\nB. soir\nC. matin\nD. nuit" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James attends classes after:\nA. lunch\nB. dinner\nC. breakfast\nD. sleep", 
                            "sw": "James huhudhuria madarasa baada ya:\nA. chakula cha mchana\nB. chakula cha jioni\nC. kiamsha kinywa\nD. kulala", 
                            "fr": "James assiste aux cours après:\nA. déjeuner\nB. dîner\nC. petit-déjeuner\nD. sommeil" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James asks questions in the:\nA. classroom\nB. group\nC. market\nD. home", 
                            "sw": "James huuliza maswali katika:\nA. darasani\nB. kikundi\nC. soko\nD. nyumbani", 
                            "fr": "James pose des questions dans le:\nA. salle de classe\nB. groupe\nC. marché\nD. maison" 
                        },
                        "answer": { "en": "B", "sw": "B", "fr": "B" }
                    },
                    {
                        "text": { 
                            "en": "James believes discipline is important for:\nA. rest\nB. food\nC. success\nD. play", 
                            "sw": "James anaamini nidhamu ni muhimu kwa:\nA. kupumzika\nB. chakula\nC. mafanikio\nD. kucheza", 
                            "fr": "James croit que la discipline est importante pour:\nA. se reposer\nB. nourriture\nC. succès\nD. jouer" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James wants to help his community in the:\nA. past\nB. present\nC. future\nD. morning", 
                            "sw": "James anataka kusaidia jamii yake katika:\nA. zamani\nB. sasa\nC. baadaye\nD. asubuhi", 
                            "fr": "James veut aider sa communauté dans le:\nA. passé\nB. présent\nC. futur\nD. matin" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James studies mainly using learning:\nA. radio\nB. school only\nC. online\nD. games", 
                            "sw": "James husoma haswa kwa kutumia ujifunzaji wa:\nA. redio\nB. shule pekee\nC. mtandaoni\nD. michezo", 
                            "fr": "James étudie principalement en utilisant l'apprentissage:\nA. radio\nB. uniquement scolaire\nC. en ligne\nD. jeux" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James watches videos sent by his:\nA. friends\nB. parents\nC. teachers\nD. students", 
                            "sw": "James huangalia video zinazotumwa na:\nA. marafiki zake\nB. wazazi wake\nC. walimu wake\nD. wanafunzi wake", 
                            "fr": "James regarde des vidéos envoyées par ses:\nA. amis\nB. parents\nC. enseignants\nD. étudiants" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James hopes to use education to achieve his:\nA. toys\nB. fears\nC. dreams\nD. meals", 
                            "sw": "James anatumai kutumia elimu kufikia:\nA. toyoyi zake\nB. hofu zake\nC. ndoto zake\nD. milo yake", 
                            "fr": "James espère utiliser l'éducation pour réaliser ses:\nA. jouets\nB. craintes\nC. rêves\nD. repas" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    },
                    {
                        "text": { 
                            "en": "James uses his education to help his:\nA. pets\nB. toys\nC. community\nD. games", 
                            "sw": "James hutumia elimu yake kusaidia:\nA. wanyama wa kipenzi wake\nB. toyoyi zake\nC. jamii yake\nD. michezo yake", 
                            "fr": "James utilise son éducation pour aider sa:\nA. animaux de compagnie\nB. jouets\nC. communauté\nD. jeux" 
                        },
                        "answer": { "en": "C", "sw": "C", "fr": "C" }
                    }
                ]
            }
        ],
        "instructions": {
            "en": "GENERAL INSTRUCTIONS\n• Read the passages carefully before answering.\n• Answer ALL questions.\n• Write TRUE or FALSE for each statement in Section A.\n• Choose the correct answer for Multiple Choice questions.\n• Each TRUE/FALSE question carries 2 marks.\n• Each Multiple Choice question carries 2 marks.",
            "sw": "MAELEKEZO YA JUMLA\n• Soma vifungu kwa makini kabla ya kujibu.\n• Jibu maswali YOTE.\n• Andika KWELI au SI KWELI kwa kila taarifa katika Sehemu A.\n• Chagua jibu sahihi kwa maswali ya Chaguo Nyingi.\n• Kila swali la KWELI/SI KWELI lina alama 2.\n• Kila swali la Chaguo Nyingi lina alama 2.",
            "fr": "INSTRUCTIONS GÉNÉRALES\n• Lisez attentivement les passages avant de répondre.\n• Répondez à TOUTES les questions.\n• Écrivez VRAI ou FAUX pour chaque énoncé de la Section A.\n• Choisissez la bonne réponse pour les questions à choix multiples.\n• Chaque question VRAI/FAUX vaut 2 points.\n• Chaque question à choix multiples vaut 2 points."
        }
    },

        











        'grammar': {
            id: 'english_grammar',
            title: {
                en: 'FINAL EXAMINATION – ENGLISH GRAMMAR',
                sw: 'MTIHANI WA MWISHO – SARUFI YA KIINGEREZA',
                fr: 'EXAMEN FINAL – GRAMMAIRE ANGLAISE'
            },
            time: '2 Hours',
            totalMarks: 100,
            instructions: {
                en: 'GENERAL INSTRUCTIONS\n• Answer ALL questions.\n• Each question carries FIVE (5) marks.\n• Each sub-question carries ONE (1) mark.\n• Write clearly and neatly.',
                sw: 'MAELEKEZO YA JUMLA\n• Jibu maswali YOTE.\n• Kila swali lina alama TANO (5).\n• Kila swali ndogo lina alama MOJA (1).\n• Andika kwa uwazi na usafi.',
                fr: 'INSTRUCTIONS GÉNÉRALES\n• Répondez à TOUTES les questions.\n• Chaque question vaut CINQ (5) points.\n• Chaque sous-question vaut UN (1) point.\n• Écrivez clairement et soigneusement.'
            },
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Choose the correct answer.',
                        sw: 'Chagua jibu sahihi.',
                        fr: 'Choisissez la bonne réponse.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She _____ to school every day. (go / goes / going)',
                                sw: 'Yeye _____ shuleni kila siku. (kwenda / huenda / anaenda)',
                                fr: 'Elle _____ à l\'école chaque jour. (aller / va / allant)'
                            },
                            answer: {
                                en: 'goes',
                                sw: 'huenda',
                                fr: 'va'
                            }
                        },
                        {
                            text: {
                                en: 'They _____ football yesterday. (play / played / playing)',
                                sw: 'Wao _____ mpira jana. (cheza / waliicheza / wakicheza)',
                                fr: 'Ils _____ football hier. (jouer / ont joué / jouant)'
                            },
                            answer: {
                                en: 'played',
                                sw: 'waliicheza',
                                fr: 'ont joué'
                            }
                        },
                        {
                            text: {
                                en: 'He is _____ honest man. (a / an / the)',
                                sw: 'Yeye ni _____ mtu mwaminifu. (a / an / the)',
                                fr: 'Il est _____ homme honnête. (un / un / le)'
                            },
                            answer: {
                                en: 'an',
                                sw: 'an',
                                fr: 'un'
                            }
                        },
                        {
                            text: {
                                en: 'We _____ English tomorrow. (study / studied / will study)',
                                sw: 'Sisi _____ Kiingereza kesho. (soma / tulisoma / tutasoma)',
                                fr: 'Nous _____ anglais demain. (étudier / avons étudié / étudierons)'
                            },
                            answer: {
                                en: 'will study',
                                sw: 'tutasoma',
                                fr: 'étudierons'
                            }
                        },
                        {
                            text: {
                                en: 'The book is _____ the table. (on / in / at)',
                                sw: 'Kitabu kiko _____ meza. (juu ya / ndani ya / karibu na)',
                                fr: 'Le livre est _____ la table. (sur / dans / à)'
                            },
                            answer: {
                                en: 'on',
                                sw: 'juu ya',
                                fr: 'sur'
                            }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'Fill in the blanks with the correct form of the verb.',
                        sw: 'Jaza nafasi zilizoachwa wazi kwa kutumia umbo sahihi la kitenzi.',
                        fr: 'Remplissez les blancs avec la forme correcte du verbe.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She _____ (be) happy today.',
                                sw: 'Yeye _____ (kuwa) furaha leo.',
                                fr: 'Elle _____ (être) heureuse aujourd\'hui.'
                            },
                            answer: {
                                en: 'is',
                                sw: 'ni',
                                fr: 'est'
                            }
                        },
                        {
                            text: {
                                en: 'They _____ (go) to school every morning.',
                                sw: 'Wao _____ (kwenda) shuleni kila asubuhi.',
                                fr: 'Ils _____ (aller) à l\'école chaque matin.'
                            },
                            answer: {
                                en: 'go',
                                sw: 'huenda',
                                fr: 'vont'
                            }
                        },
                        {
                            text: {
                                en: 'He _____ (write) a letter yesterday.',
                                sw: 'Yeye _____ (andika) barua jana.',
                                fr: 'Il _____ (écrire) une lettre hier.'
                            },
                            answer: {
                                en: 'wrote',
                                sw: 'aliandika',
                                fr: 'a écrit'
                            }
                        },
                        {
                            text: {
                                en: 'We _____ (study) English now.',
                                sw: 'Sisi _____ (soma) Kiingereza sasa.',
                                fr: 'Nous _____ (étudier) l\'anglais maintenant.'
                            },
                            answer: {
                                en: 'are studying',
                                sw: 'tunasoma',
                                fr: 'étudions'
                            }
                        },
                        {
                            text: {
                                en: 'I _____ (finish) my work already.',
                                sw: 'Mimi _____ (maliza) kazi yangu tayari.',
                                fr: 'J\'ai _____ (finir) mon travail déjà.'
                            },
                            answer: {
                                en: 'have finished',
                                sw: 'nimeshamaliza',
                                fr: 'ai fini'
                            }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'Choose the correct word.',
                        sw: 'Chagua neno sahihi.',
                        fr: 'Choisissez le mot correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She speaks English (fluent / fluently).',
                                sw: 'Yeye anaongea Kiingereza (kwa ufasaha / kifasaha).',
                                fr: 'Elle parle anglais (courant / couramment).'
                            },
                            answer: {
                                en: 'fluently',
                                sw: 'kwa ufasaha',
                                fr: 'couramment'
                            }
                        },
                        {
                            text: {
                                en: 'This is the (good / best) book.',
                                sw: 'Hiki ndicho kitabu (nzuri / bora).',
                                fr: 'C\'est le livre (bon / meilleur).'
                            },
                            answer: {
                                en: 'best',
                                sw: 'bora',
                                fr: 'meilleur'
                            }
                        },
                        {
                            text: {
                                en: 'He runs (fast / fastly).',
                                sw: 'Yeye anakimbia (haraka / kwa haraka).',
                                fr: 'Il court (vite / rapidement).'
                            },
                            answer: {
                                en: 'fast',
                                sw: 'haraka',
                                fr: 'vite'
                            }
                        },
                        {
                            text: {
                                en: 'Today is (cold / colder) than yesterday.',
                                sw: 'Leo ni (baridi / baridi zaidi) kuliko jana.',
                                fr: 'Aujourd\'hui est (froid / plus froid) qu\'hier.'
                            },
                            answer: {
                                en: 'colder',
                                sw: 'baridi zaidi',
                                fr: 'plus froid'
                            }
                        },
                        {
                            text: {
                                en: 'She sings very (good / well).',
                                sw: 'Yeye anaimba (vizuri / vizuri sana).',
                                fr: 'Elle chante très (bien / bon).'
                            },
                            answer: {
                                en: 'well',
                                sw: 'vizuri',
                                fr: 'bien'
                            }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'Fill in the blanks with a, an, the, some, or any.',
                        sw: 'Jaza nafasi zilizoachwa wazi kwa kutumia a, an, the, some, au any.',
                        fr: 'Remplissez les blancs avec a, an, the, some ou any.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'I saw _____ elephant.',
                                sw: 'Nilimwona _____ tembo.',
                                fr: 'J\'ai vu _____ éléphant.'
                            },
                            answer: {
                                en: 'an',
                                sw: 'tembo',
                                fr: 'un'
                            }
                        },
                        {
                            text: {
                                en: 'She bought _____ apples.',
                                sw: 'Alinunua _____ maapulo.',
                                fr: 'Elle a acheté _____ pommes.'
                            },
                            answer: {
                                en: 'some',
                                sw: 'baadhi ya',
                                fr: 'des'
                            }
                        },
                        {
                            text: {
                                en: '_____ sun rises in the east.',
                                sw: '_____ jua linachomoza mashariki.',
                                fr: '_____ soleil se lève à l\'est.'
                            },
                            answer: {
                                en: 'The',
                                sw: 'Jua',
                                fr: 'Le'
                            }
                        },
                        {
                            text: {
                                en: 'Do you have _____ money?',
                                sw: 'Je, una _____ pesa?',
                                fr: 'As-tu _____ argent?'
                            },
                            answer: {
                                en: 'any',
                                sw: 'yoyote',
                                fr: 'de l\''
                            }
                        },
                        {
                            text: {
                                en: 'He is _____ teacher.',
                                sw: 'Yeye ni _____ mwalimu.',
                                fr: 'Il est _____ professeur.'
                            },
                            answer: {
                                en: 'a',
                                sw: 'mwalimu',
                                fr: 'un'
                            }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'Choose the correct conjunction.',
                        sw: 'Chagua kiunganishi sahihi.',
                        fr: 'Choisissez la conjonction correcte.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'I was tired _____ I continued working. (but / because)',
                                sw: 'Nilikuwa nimechoka _____ niliendelea kufanya kazi. (lakini / kwa sababu)',
                                fr: 'J\'étais fatigué _____ j\'ai continué à travailler. (mais / parce que)'
                            },
                            answer: {
                                en: 'but',
                                sw: 'lakini',
                                fr: 'mais'
                            }
                        },
                        {
                            text: {
                                en: 'She stayed home _____ she was sick. (although / because)',
                                sw: 'Alibakia nyumbani _____ alikuwa mgonjwa. (ingawa / kwa sababu)',
                                fr: 'Elle est restée à la maison _____ elle était malade. (bien que / parce que)'
                            },
                            answer: {
                                en: 'because',
                                sw: 'kwa sababu',
                                fr: 'parce que'
                            }
                        },
                        {
                            text: {
                                en: 'I will call you _____ I arrive. (when / but)',
                                sw: 'Nitakupigia simu _____ ninafika. (wakati / lakini)',
                                fr: 'Je t\'appellerai _____ j\'arrive. (quand / mais)'
                            },
                            answer: {
                                en: 'when',
                                sw: 'wakati',
                                fr: 'quand'
                            }
                        },
                        {
                            text: {
                                en: 'He is poor _____ honest. (and / but)',
                                sw: 'Yeye ni maskini _____ mwaminifu. (na / lakini)',
                                fr: 'Il est pauvre _____ honnête. (et / mais)'
                            },
                            answer: {
                                en: 'but',
                                sw: 'lakini',
                                fr: 'mais'
                            }
                        },
                        {
                            text: {
                                en: 'Hurry up _____ you will be late. (or / because)',
                                sw: 'Harakisha _____ utachelewa. (au / kwa sababu)',
                                fr: 'Dépêche-toi _____ tu seras en retard. (ou / parce que)'
                            },
                            answer: {
                                en: 'or',
                                sw: 'au',
                                fr: 'ou'
                            }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'Fill in the blanks with correct prepositions.',
                        sw: 'Jaza nafasi zilizoachwa wazi kwa kutumia vihusishi sahihi.',
                        fr: 'Remplissez les blancs avec les prépositions correctes.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'The book is _____ the bag.',
                                sw: 'Kitabu kiko _____ mfukoni.',
                                fr: 'Le livre est _____ le sac.'
                            },
                            answer: {
                                en: 'in',
                                sw: 'ndani ya',
                                fr: 'dans'
                            }
                        },
                        {
                            text: {
                                en: 'We go to school _____ the morning.',
                                sw: 'Tunakwenda shuleni _____ asubuhi.',
                                fr: 'Nous allons à l\'école _____ le matin.'
                            },
                            answer: {
                                en: 'in',
                                sw: 'asubuhi',
                                fr: 'le'
                            }
                        },
                        {
                            text: {
                                en: 'He lives _____ Burundi.',
                                sw: 'Yeye anaishi _____ Burundi.',
                                fr: 'Il habite _____ Burundi.'
                            },
                            answer: {
                                en: 'in',
                                sw: 'Burundi',
                                fr: 'au'
                            }
                        },
                        {
                            text: {
                                en: 'She arrived _____ time.',
                                sw: 'Alifika _____ wakati.',
                                fr: 'Elle est arrivée _____ temps.'
                            },
                            answer: {
                                en: 'on',
                                sw: 'wakati',
                                fr: 'à'
                            }
                        },
                        {
                            text: {
                                en: 'The cat is _____ the chair.',
                                sw: 'Paka yuko _____ kiti.',
                                fr: 'Le chat est _____ la chaise.'
                            },
                            answer: {
                                en: 'under',
                                sw: 'chini ya',
                                fr: 'sous'
                            }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'Rewrite as instructed.',
                        sw: 'Andika upya kama ilivyoagizwa.',
                        fr: 'Réécrivez comme demandé.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She likes tea. (Negative)',
                                sw: 'Yeye anapenda chai. (Hasibu)',
                                fr: 'Elle aime le thé. (Négatif)'
                            },
                            answer: {
                                en: 'She does not like tea.',
                                sw: 'Yeye hapendi chai.',
                                fr: 'Elle n\'aime pas le thé.'
                            }
                        },
                        {
                            text: {
                                en: 'He is a teacher. (Question)',
                                sw: 'Yeye ni mwalimu. (Swali)',
                                fr: 'Il est professeur. (Question)'
                            },
                            answer: {
                                en: 'Is he a teacher?',
                                sw: 'Je, yeye ni mwalimu?',
                                fr: 'Est-il professeur?'
                            }
                        },
                        {
                            text: {
                                en: 'They are happy. (Past tense)',
                                sw: 'Wao ni wenye furaha. (Wakati uliopita)',
                                fr: 'Ils sont heureux. (Passé)'
                            },
                            answer: {
                                en: 'They were happy.',
                                sw: 'Walikuwa wenye furaha.',
                                fr: 'Ils étaient heureux.'
                            }
                        },
                        {
                            text: {
                                en: 'I went to school. (Future tense)',
                                sw: 'Nilikwenda shuleni. (Wakati ujao)',
                                fr: 'Je suis allé à l\'école. (Futur)'
                            },
                            answer: {
                                en: 'I will go to school.',
                                sw: 'Nitakwenda shuleni.',
                                fr: 'J\'irai à l\'école.'
                            }
                        },
                        {
                            text: {
                                en: 'She can swim. (Negative)',
                                sw: 'Yeye anaweza kuogelea. (Hasibu)',
                                fr: 'Elle sait nager. (Négatif)'
                            },
                            answer: {
                                en: 'She cannot swim.',
                                sw: 'Yeye hawezi kuogelea.',
                                fr: 'Elle ne sait pas nager.'
                            }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'Rearrange the words to make correct sentences.',
                        sw: 'Panga upya maneno ili kutengeneza sentensi sahihi.',
                        fr: 'Réarrangez les mots pour former des phrases correctes.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'English / learning / am / I',
                                sw: 'Kiingereza / kujifunza / nina / mimi',
                                fr: 'Anglais / apprendre / suis / je'
                            },
                            answer: {
                                en: 'I am learning English.',
                                sw: 'Mimi ninajifunza Kiingereza.',
                                fr: 'Je suis en train d\'apprendre l\'anglais.'
                            }
                        },
                        {
                            text: {
                                en: 'every / school / go / day / I',
                                sw: 'kila / shule / kwenda / siku / mimi',
                                fr: 'chaque / école / aller / jour / je'
                            },
                            answer: {
                                en: 'I go to school every day.',
                                sw: 'Mimi huenda shuleni kila siku.',
                                fr: 'Je vais à l\'école tous les jours.'
                            }
                        },
                        {
                            text: {
                                en: 'teacher / our / kind / is',
                                sw: 'mwalimu / wetu / mwenye huruma / ni',
                                fr: 'professeur / notre / gentil / est'
                            },
                            answer: {
                                en: 'Our teacher is kind.',
                                sw: 'Mwalimu wetu ni mwenye huruma.',
                                fr: 'Notre professeur est gentil.'
                            }
                        },
                        {
                            text: {
                                en: 'books / reading / enjoy / I',
                                sw: 'vitabu / kusoma / kufurahia / mimi',
                                fr: 'livres / lire / aimer / je'
                            },
                            answer: {
                                en: 'I enjoy reading books.',
                                sw: 'Mimi napenda kusoma vitabu.',
                                fr: 'J\'aime lire des livres.'
                            }
                        },
                        {
                            text: {
                                en: 'homework / students / do / their',
                                sw: 'kazi ya nyumbani / wanafunzi / fanya / zao',
                                fr: 'devoirs / étudiants / faire / leurs'
                            },
                            answer: {
                                en: 'Students do their homework.',
                                sw: 'Wanafunzi wanafanya kazi zao za nyumbani.',
                                fr: 'Les étudiants font leurs devoirs.'
                            }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'Correct the sentences.',
                        sw: 'Sahihisha sentensi.',
                        fr: 'Corrigez les phrases.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She go to school every day.',
                                sw: 'Yeye kwenda shuleni kila siku.',
                                fr: 'Elle aller à l\'école chaque jour.'
                            },
                            answer: {
                                en: 'She goes to school every day.',
                                sw: 'Yeye huenda shuleni kila siku.',
                                fr: 'Elle va à l\'école chaque jour.'
                            }
                        },
                        {
                            text: {
                                en: 'They is playing football.',
                                sw: 'Wao ni kucheza mpira.',
                                fr: 'Ils est jouer au football.'
                            },
                            answer: {
                                en: 'They are playing football.',
                                sw: 'Wao wanacheza mpira.',
                                fr: 'Ils jouent au football.'
                            }
                        },
                        {
                            text: {
                                en: 'I did not went yesterday.',
                                sw: 'Mimi si kwenda jana.',
                                fr: 'Je n\'ai pas aller hier.'
                            },
                            answer: {
                                en: 'I did not go yesterday.',
                                sw: 'Mimi sikuenda jana.',
                                fr: 'Je ne suis pas allé hier.'
                            }
                        },
                        {
                            text: {
                                en: 'He don\'t like coffee.',
                                sw: 'Yeye si kipenda kahawa.',
                                fr: 'Il ne pas aimer café.'
                            },
                            answer: {
                                en: 'He doesn\'t like coffee.',
                                sw: 'Yeye hapendi kahawa.',
                                fr: 'Il n\'aime pas le café.'
                            }
                        },
                        {
                            text: {
                                en: 'We was happy.',
                                sw: 'Sisi alikuwa na furaha.',
                                fr: 'Nous était heureux.'
                            },
                            answer: {
                                en: 'We were happy.',
                                sw: 'Sisi tulikuwa na furaha.',
                                fr: 'Nous étions heureux.'
                            }
                        }
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'Change to plural form.',
                        sw: 'Badilisha kuwa umoja.',
                        fr: 'Changez au pluriel.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'Child',
                                sw: 'Mtoto',
                                fr: 'Enfant'
                            },
                            answer: {
                                en: 'Children',
                                sw: 'Watoto',
                                fr: 'Enfants'
                            }
                        },
                        {
                            text: {
                                en: 'Woman',
                                sw: 'Mwanamke',
                                fr: 'Femme'
                            },
                            answer: {
                                en: 'Women',
                                sw: 'Wanawake',
                                fr: 'Femmes'
                            }
                        },
                        {
                            text: {
                                en: 'Tooth',
                                sw: 'Jino',
                                fr: 'Dent'
                            },
                            answer: {
                                en: 'Teeth',
                                sw: 'Men',
                                fr: 'Dents'
                            }
                        },
                        {
                            text: {
                                en: 'City',
                                sw: 'Jiji',
                                fr: 'Ville'
                            },
                            answer: {
                                en: 'Cities',
                                sw: 'Miji',
                                fr: 'Villes'
                            }
                        },
                        {
                            text: {
                                en: 'Box',
                                sw: 'Sanduku',
                                fr: 'Boîte'
                            },
                            answer: {
                                en: 'Boxes',
                                sw: 'Masanduku',
                                fr: 'Boîtes'
                            }
                        }
                    ]
                },
                {
                    number: 11,
                    text: {
                        en: 'Choose the correct tense.',
                        sw: 'Chagua wakati sahihi.',
                        fr: 'Choisissez le temps correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'I _____ English now. (study / studied)',
                                sw: 'Mimi _____ Kiingereza sasa. (soma / nilisoma)',
                                fr: 'Je _____ anglais maintenant. (étudier / étudié)'
                            },
                            answer: {
                                en: 'study',
                                sw: 'ninasoma',
                                fr: 'étudie'
                            }
                        },
                        {
                            text: {
                                en: 'She _____ yesterday. (comes / came)',
                                sw: 'Yeye _____ jana. (kuja / alikuja)',
                                fr: 'Elle _____ hier. (vient / vint)'
                            },
                            answer: {
                                en: 'came',
                                sw: 'alikuja',
                                fr: 'vint'
                            }
                        },
                        {
                            text: {
                                en: 'They _____ tomorrow. (will travel / traveled)',
                                sw: 'Wao _____ kesho. (twasafiri / walisafiri)',
                                fr: 'Ils _____ demain. (voyageront / voyagèrent)'
                            },
                            answer: {
                                en: 'will travel',
                                sw: 'watasafiri',
                                fr: 'voyageront'
                            }
                        },
                        {
                            text: {
                                en: 'He _____ already eaten. (has / have)',
                                sw: 'Yeye _____ tayari kula. (ana / wana)',
                                fr: 'Il _____ déjà mangé. (a / avoir)'
                            },
                            answer: {
                                en: 'has',
                                sw: 'amesha',
                                fr: 'a'
                            }
                        },
                        {
                            text: {
                                en: 'We _____ waiting when he arrived. (were / are)',
                                sw: 'Sisi _____ kusubiri wakati alipofika. (walikuwa / ni)',
                                fr: 'Nous _____ attendre quand il est arrivé. (étions / sommes)'
                            },
                            answer: {
                                en: 'were',
                                sw: 'tulikuwa',
                                fr: 'étions'
                            }
                        }
                    ]
                },
                {
                    number: 12,
                    text: {
                        en: 'Change to comparative or superlative.',
                        sw: 'Badilisha kuwa kulinganisha au kushinda.',
                        fr: 'Changez en comparatif ou superlatif.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'tall',
                                sw: 'mrefu',
                                fr: 'grand'
                            },
                            answer: {
                                en: 'taller / tallest',
                                sw: 'mrefu zaidi / mrefu zaidi kabisa',
                                fr: 'plus grand / le plus grand'
                            }
                        },
                        {
                            text: {
                                en: 'good',
                                sw: 'nzuri',
                                fr: 'bon'
                            },
                            answer: {
                                en: 'better / best',
                                sw: 'bora / bora zaidi',
                                fr: 'meilleur / le meilleur'
                            }
                        },
                        {
                            text: {
                                en: 'interesting',
                                sw: 'yenye kuvutia',
                                fr: 'intéressant'
                            },
                            answer: {
                                en: 'more interesting / most interesting',
                                sw: 'ya kuvutia zaidi / ya kuvutia zaidi kabisa',
                                fr: 'plus intéressant / le plus intéressant'
                            }
                        },
                        {
                            text: {
                                en: 'fast',
                                sw: 'haraka',
                                fr: 'rapide'
                            },
                            answer: {
                                en: 'faster / fastest',
                                sw: 'haraka zaidi / haraka zaidi kabisa',
                                fr: 'plus rapide / le plus rapide'
                            }
                        },
                        {
                            text: {
                                en: 'bad',
                                sw: 'mbaya',
                                fr: 'mauvais'
                            },
                            answer: {
                                en: 'worse / worst',
                                sw: 'mbaya zaidi / mbaya zaidi kabisa',
                                fr: 'pire / le pire'
                            }
                        }
                    ]
                },
                {
                    number: 13,
                    text: {
                        en: 'Fill in the blanks.',
                        sw: 'Jaza nafasi zilizoachwa wazi.',
                        fr: 'Remplissez les blancs.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'I am interested _____ English.',
                                sw: 'Mimi nina nia _____ Kiingereza.',
                                fr: 'Je suis intéressé _____ l\'anglais.'
                            },
                            answer: {
                                en: 'in',
                                sw: 'katika',
                                fr: 'par'
                            }
                        },
                        {
                            text: {
                                en: 'He is afraid _____ dogs.',
                                sw: 'Yeye anaogopa _____ mbwa.',
                                fr: 'Il a peur _____ chiens.'
                            },
                            answer: {
                                en: 'of',
                                sw: 'ya',
                                fr: 'des'
                            }
                        },
                        {
                            text: {
                                en: 'She is good _____ mathematics.',
                                sw: 'Yeye ni mzuri _____ hesabu.',
                                fr: 'Elle est bonne _____ mathématiques.'
                            },
                            answer: {
                                en: 'at',
                                sw: 'katika',
                                fr: 'en'
                            }
                        },
                        {
                            text: {
                                en: 'We are proud _____ you.',
                                sw: 'Sisi tunajivunia _____ wewe.',
                                fr: 'Nous sommes fiers _____ toi.'
                            },
                            answer: {
                                en: 'of',
                                sw: 'ya',
                                fr: 'de'
                            }
                        },
                        {
                            text: {
                                en: 'He is tired _____ work.',
                                sw: 'Yeye amechoka _____ kazi.',
                                fr: 'Il est fatigué _____ travail.'
                            },
                            answer: {
                                en: 'of',
                                sw: 'kutokana na',
                                fr: 'du'
                            }
                        }
                    ]
                },
                {
                    number: 14,
                    text: {
                        en: 'Join the sentences using the word given.',
                        sw: 'Unganisha sentensi kwa kutumia neno lililotolewa.',
                        fr: 'Joignez les phrases en utilisant le mot donné.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'I was tired. I finished my work. (but)',
                                sw: 'Nilikuwa nimechoka. Nilimaliza kazi yangu. (lakini)',
                                fr: 'J\'étais fatigué. J\'ai fini mon travail. (mais)'
                            },
                            answer: {
                                en: 'I was tired but I finished my work.',
                                sw: 'Nilikuwa nimechoka lakini nilimaliza kazi yangu.',
                                fr: 'J\'étais fatigué mais j\'ai fini mon travail.'
                            }
                        },
                        {
                            text: {
                                en: 'He studied hard. He passed. (so)',
                                sw: 'Alisoma kwa bidii. Alifaulu. (hivyo)',
                                fr: 'Il a étudié dur. Il a réussi. (donc)'
                            },
                            answer: {
                                en: 'He studied hard so he passed.',
                                sw: 'Alisoma kwa bidii hivyo akafaulu.',
                                fr: 'Il a étudié dur donc il a réussi.'
                            }
                        },
                        {
                            text: {
                                en: 'She was sick. She went to school. (although)',
                                sw: 'Alikuwa mgonjwa. Alikwenda shuleni. (ingawa)',
                                fr: 'Elle était malade. Elle est allée à l\'école. (bien que)'
                            },
                            answer: {
                                en: 'Although she was sick, she went to school.',
                                sw: 'Ingawa alikuwa mgonjwa, alikwenda shuleni.',
                                fr: 'Bien qu\'elle était malade, elle est allée à l\'école.'
                            }
                        },
                        {
                            text: {
                                en: 'I will come. You call me. (if)',
                                sw: 'Nitakuja. Wewe unampigia simu. (kama)',
                                fr: 'Je viendrai. Tu m\'appelles. (si)'
                            },
                            answer: {
                                en: 'I will come if you call me.',
                                sw: 'Nitakuja kama utanipigia simu.',
                                fr: 'Je viendrai si tu m\'appelles.'
                            }
                        },
                        {
                            text: {
                                en: 'We stayed home. It was raining. (because)',
                                sw: 'Tulibaki nyumbani. Ilikuwa inanyesha. (kwa sababu)',
                                fr: 'Nous sommes restés à la maison. Il pleuvait. (parce que)'
                            },
                            answer: {
                                en: 'We stayed home because it was raining.',
                                sw: 'Tulibaki nyumbani kwa sababu ilikuwa inanyesha.',
                                fr: 'Nous sommes restés à la maison parce qu\'il pleuvait.'
                            }
                        }
                    ]
                },
                {
                    number: 15,
                    text: {
                        en: 'Choose the correct sentence.',
                        sw: 'Chagua sentensi sahihi.',
                        fr: 'Choisissez la phrase correcte.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She don\'t like tea / She doesn\'t like tea',
                                sw: 'Yeye hapendi chai / Yeye hapendi chai',
                                fr: 'Elle n\'aime pas le thé / Elle n\'aime pas le thé'
                            },
                            answer: {
                                en: 'She doesn\'t like tea',
                                sw: 'Yeye hapendi chai',
                                fr: 'Elle n\'aime pas le thé'
                            }
                        },
                        {
                            text: {
                                en: 'He go to school / He goes to school',
                                sw: 'Yeye kwenda shuleni / Yeye huenda shuleni',
                                fr: 'Il aller à l\'école / Il va à l\'école'
                            },
                            answer: {
                                en: 'He goes to school',
                                sw: 'Yeye huenda shuleni',
                                fr: 'Il va à l\'école'
                            }
                        },
                        {
                            text: {
                                en: 'They was happy / They were happy',
                                sw: 'Wao alikuwa na furaha / Wao walikuwa na furaha',
                                fr: 'Ils était heureux / Ils étaient heureux'
                            },
                            answer: {
                                en: 'They were happy',
                                sw: 'Wao walikuwa na furaha',
                                fr: 'Ils étaient heureux'
                            }
                        },
                        {
                            text: {
                                en: 'I have saw it / I have seen it',
                                sw: 'Nimeona / Nimeona',
                                fr: 'J\'ai vu / J\'ai vu'
                            },
                            answer: {
                                en: 'I have seen it',
                                sw: 'Nimeiona',
                                fr: 'Je l\'ai vu'
                            }
                        },
                        {
                            text: {
                                en: 'She speak English / She speaks English',
                                sw: 'Yeye kuongea Kiingereza / Yeye anaongea Kiingereza',
                                fr: 'Elle parler anglais / Elle parle anglais'
                            },
                            answer: {
                                en: 'She speaks English',
                                sw: 'Yeye anaongea Kiingereza',
                                fr: 'Elle parle anglais'
                            }
                        }
                    ]
                },
                {
                    number: 16,
                    text: {
                        en: 'Change the voice.',
                        sw: 'Badilisha sauti.',
                        fr: 'Changez la voix.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She writes a letter.',
                                sw: 'Yeye anaandika barua.',
                                fr: 'Elle écrit une lettre.'
                            },
                            answer: {
                                en: 'A letter is written by her.',
                                sw: 'Barua imeandikwa naye.',
                                fr: 'Une lettre est écrite par elle.'
                            }
                        },
                        {
                            text: {
                                en: 'They built a house.',
                                sw: 'Wao walijenga nyumba.',
                                fr: 'Ils ont construit une maison.'
                            },
                            answer: {
                                en: 'A house was built by them.',
                                sw: 'Nyumba ilijengwa nao.',
                                fr: 'Une maison a été construite par eux.'
                            }
                        },
                        {
                            text: {
                                en: 'He eats food.',
                                sw: 'Yeye anakula chakula.',
                                fr: 'Il mange de la nourriture.'
                            },
                            answer: {
                                en: 'Food is eaten by him.',
                                sw: 'Chakula kinakuliwa naye.',
                                fr: 'La nourriture est mangée par lui.'
                            }
                        },
                        {
                            text: {
                                en: 'We clean the room.',
                                sw: 'Sisi tunasafisha chumba.',
                                fr: 'Nous nettoyons la pièce.'
                            },
                            answer: {
                                en: 'The room is cleaned by us.',
                                sw: 'Chumba kinasafishwa nasi.',
                                fr: 'La pièce est nettoyée par nous.'
                            }
                        },
                        {
                            text: {
                                en: 'She teaches English.',
                                sw: 'Yeye anafundisha Kiingereza.',
                                fr: 'Elle enseigne l\'anglais.'
                            },
                            answer: {
                                en: 'English is taught by her.',
                                sw: 'Kiingereza kinafundishwa naye.',
                                fr: 'L\'anglais est enseigné par elle.'
                            }
                        }
                    ]
                },
                {
                    number: 17,
                    text: {
                        en: 'Change to question form.',
                        sw: 'Badilisha kuwa umbo la swali.',
                        fr: 'Changez en forme interrogative.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She is happy.',
                                sw: 'Yeye ni furaha.',
                                fr: 'Elle est heureuse.'
                            },
                            answer: {
                                en: 'Is she happy?',
                                sw: 'Je, yeye ni furaha?',
                                fr: 'Est-elle heureuse?'
                            }
                        },
                        {
                            text: {
                                en: 'They are students.',
                                sw: 'Wao ni wanafunzi.',
                                fr: 'Ils sont étudiants.'
                            },
                            answer: {
                                en: 'Are they students?',
                                sw: 'Je, wao ni wanafunzi?',
                                fr: 'Sont-ils étudiants?'
                            }
                        },
                        {
                            text: {
                                en: 'He likes coffee.',
                                sw: 'Yeye anapenda kahawa.',
                                fr: 'Il aime le café.'
                            },
                            answer: {
                                en: 'Does he like coffee?',
                                sw: 'Je, yeye anapenda kahawa?',
                                fr: 'Aime-t-il le café?'
                            }
                        },
                        {
                            text: {
                                en: 'You finished work.',
                                sw: 'Wewe umemaliza kazi.',
                                fr: 'Tu as fini le travail.'
                            },
                            answer: {
                                en: 'Did you finish work?',
                                sw: 'Je, umemaliza kazi?',
                                fr: 'As-tu fini le travail?'
                            }
                        },
                        {
                            text: {
                                en: 'She can swim.',
                                sw: 'Yeye anaweza kuogelea.',
                                fr: 'Elle sait nager.'
                            },
                            answer: {
                                en: 'Can she swim?',
                                sw: 'Je, yeye anaweza kuogelea?',
                                fr: 'Peut-elle nager?'
                            }
                        }
                    ]
                },
                {
                    number: 18,
                    text: {
                        en: 'Fill in the blanks with correct pronouns.',
                        sw: 'Jaza nafasi zilizoachwa wazi kwa kutumia viwakilishi sahihi.',
                        fr: 'Remplissez les blancs avec les pronoms corrects.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'This book is _____ (I).',
                                sw: 'Kitabu hiki ni _____ (mimi).',
                                fr: 'Ce livre est _____ (je).'
                            },
                            answer: {
                                en: 'mine',
                                sw: 'changu',
                                fr: 'le mien'
                            }
                        },
                        {
                            text: {
                                en: 'She gave _____ the pen.',
                                sw: 'Alimpa _____ kalamu.',
                                fr: 'Elle a donné _____ le stylo.'
                            },
                            answer: {
                                en: 'me',
                                sw: 'mimi',
                                fr: 'moi'
                            }
                        },
                        {
                            text: {
                                en: 'That house is _____ (they).',
                                sw: 'Nyumba ile ni _____ (wao).',
                                fr: 'Cette maison est _____ (ils).'
                            },
                            answer: {
                                en: 'theirs',
                                sw: 'yao',
                                fr: 'la leur'
                            }
                        },
                        {
                            text: {
                                en: 'We saw _____ yesterday.',
                                sw: 'Sisi tulimwona _____ jana.',
                                fr: 'Nous avons vu _____ hier.'
                            },
                            answer: {
                                en: 'them',
                                sw: 'wao',
                                fr: 'eux'
                            }
                        },
                        {
                            text: {
                                en: 'He hurt _____.',
                                sw: 'Yeye aliumiza _____.',
                                fr: 'Il a blessé _____.'
                            },
                            answer: {
                                en: 'himself',
                                sw: 'yeye mwenyewe',
                                fr: 'lui-même'
                            }
                        }
                    ]
                },
                {
                    number: 19,
                    text: {
                        en: 'Choose the correct word.',
                        sw: 'Chagua neno sahihi.',
                        fr: 'Choisissez le mot correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'much / many sugar',
                                sw: 'sukari nyingi / sukari nyingi',
                                fr: 'beaucoup de sucre / nombreux sucre'
                            },
                            answer: {
                                en: 'much',
                                sw: 'sukari nyingi',
                                fr: 'beaucoup de'
                            }
                        },
                        {
                            text: {
                                en: 'few / little water',
                                sw: 'maji machache / maji kidogo',
                                fr: 'peu d\'eau / peu d\'eau'
                            },
                            answer: {
                                en: 'little',
                                sw: 'maji kidogo',
                                fr: 'peu d\''
                            }
                        },
                        {
                            text: {
                                en: 'some / any apples',
                                sw: 'maapulo kadhaa / maapulo yoyote',
                                fr: 'des pommes / des pommes'
                            },
                            answer: {
                                en: 'some',
                                sw: 'maapulo kadhaa',
                                fr: 'des'
                            }
                        },
                        {
                            text: {
                                en: 'each / every student',
                                sw: 'kila mwanafunzi / kila mwanafunzi',
                                fr: 'chaque étudiant / chaque étudiant'
                            },
                            answer: {
                                en: 'every',
                                sw: 'kila',
                                fr: 'chaque'
                            }
                        },
                        {
                            text: {
                                en: 'too / very tired',
                                sw: 'uchovu sana / uchovu sana',
                                fr: 'trop fatigué / très fatigué'
                            },
                            answer: {
                                en: 'very',
                                sw: 'sana',
                                fr: 'très'
                            }
                        }
                    ]
                },
                {
                    number: 20,
                    text: {
                        en: 'Complete the sentences.',
                        sw: 'Kamilisha sentensi.',
                        fr: 'Complétez les phrases.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'If I study hard, ______________________.',
                                sw: 'Kama nitasoma kwa bidii, ______________________.',
                                fr: 'Si j\'étudie dur, ______________________.'
                            },
                            answer: {
                                en: 'I will pass the exam',
                                sw: 'nitafaulu mtihani',
                                fr: 'je réussirai l\'examen'
                            }
                        },
                        {
                            text: {
                                en: 'When I finish school, __________________.',
                                sw: 'Wakati nitakapomaliza shule, __________________.',
                                fr: 'Quand je finirai l\'école, __________________.'
                            },
                            answer: {
                                en: 'I will go to university',
                                sw: 'nitaenda chuo kikuu',
                                fr: 'j\'irai à l\'université'
                            }
                        },
                        {
                            text: {
                                en: 'English is important because ____________.',
                                sw: 'Kiingereza ni muhimu kwa sababu ____________.',
                                fr: 'L\'anglais est important parce que ____________.'
                            },
                            answer: {
                                en: 'it is an international language',
                                sw: 'ni lugha ya kimataifa',
                                fr: 'c\'est une langue internationale'
                            }
                        },
                        {
                            text: {
                                en: 'I was late because _____________________.',
                                sw: 'Nilikuwa mechelewa kwa sababu _____________________.',
                                fr: 'J\'étais en retard parce que _____________________.'
                            },
                            answer: {
                                en: 'I missed the bus',
                                sw: 'nilikosa basi',
                                fr: 'j\'ai raté le bus'
                            }
                        },
                        {
                            text: {
                                en: 'I like learning English __________________.',
                                sw: 'Napenda kujifunza Kiingereza __________________.',
                                fr: 'J\'aime apprendre l\'anglais __________________.'
                            },
                            answer: {
                                en: 'because it is interesting',
                                sw: 'kwa sababu ni ya kuvutia',
                                fr: 'parce que c\'est intéressant'
                            }
                        }
                    ]
                }
            ]
        }
    },
    
    // ==================== KISWAHILI EXAMS ====================
    'kiswahili': {
        'kusoma': {
            id: 'kiswahili_kusoma',
            title: {
                en: 'KISWAHILI – MTIHANI WA KUSOMA',
                sw: 'KISWAHILI – MTIHANI WA KUSOMA',
                fr: 'KISWAHILI – EXAMEN DE LECTURE'
            },
            time: '2 Saa',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Soma maandishi yafuatayo kisha jibu maswali:\n\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake."',
                        sw: 'Soma maandishi yafuatayo kisha jibu maswali:\n\n"Amani ni jambo muhimu katika jamii. Watu wanaposhirikiana na kuheshimiana, maisha yao yanakuwa bora. Kila mtu anapaswa kusaidia wengine na kutunza mazingira yake."',
                        fr: 'Lisez le texte suivant puis répondez aux questions:\n\n"La paix est importante dans la société. Lorsque les gens coopèrent et se respectent, leur vie s\'améliore. Chacun doit aider les autres et prendre soin de son environnement."'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Nini maana ya "amani"?', sw: 'Nini maana ya "amani"?', fr: 'Que signifie "amani"?' },
                            answer: { en: 'Amani maana yake ni hali ya utulivu na usalama.', sw: 'Amani maana yake ni hali ya utulivu na usalama.', fr: 'Amani signifie un état de tranquillité et de sécurité.' }
                        },
                        {
                            text: { en: 'Kwa nini maisha ya watu yanakuwa bora wanaposhirikiana?', sw: 'Kwa nini maisha ya watu yanakuwa bora wanaposhirikiana?', fr: 'Pourquoi la vie des gens s\'améliore-t-elle lorsqu\'ils coopèrent?' },
                            answer: { en: 'Maisha yanakuwa bora kwa sababu kushirikiana huleta umoja na mafanikio.', sw: 'Maisha yanakuwa bora kwa sababu kushirikiana huleta umoja na mafanikio.', fr: 'La vie s\'améliore parce que la coopération apporte l\'unité et le succès.' }
                        },
                        {
                            text: { en: 'Toa maneno mawili yanayohusiana na kusaidia wengine.', sw: 'Toa maneno mawili yanayohusiana na kusaidia wengine.', fr: 'Donnez deux mots liés à l\'aide aux autres.' },
                            answer: { en: 'Maneno: ushirikiano, huruma', sw: 'Maneno: ushirikiano, huruma', fr: 'Mots : coopération, compassion' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Soma maandiko kwa makini kabla ya kujibu maswali.\n2. Jibu maswali yote kwa Kiswahili fasaha.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Tumia mstari safi kuandika majibu yako.',
                sw: 'MAELEKEZO\n1. Soma maandiko kwa makini kabla ya kujibu maswali.\n2. Jibu maswali yote kwa Kiswahili fasaha.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Tumia mstari safi kuandika majibu yako.',
                fr: 'INSTRUCTIONS\n1. Lisez attentivement les textes avant de répondre aux questions.\n2. Répondez à toutes les questions en Kiswahili correct.\n3. Chaque question a sa note indiquée.\n4. Utilisez une écriture nette pour vos réponses.'
            }
        },
        
        'maandishi': {
            id: 'kiswahili_maandishi',
            title: {
                en: 'KISWAHILI – MTIHANI WA MAANDISHI',
                sw: 'KISWAHILI – MTIHANI WA MAANDISHI',
                fr: 'KISWAHILI – EXAMEN D\'ÉCRITURE'
            },
            time: '2 Saa',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Andika sentensi fupi kulingana na maelezo yafuatayo:',
                        sw: 'Andika sentensi fupi kulingana na maelezo yafuatayo:',
                        fr: 'Écrivez de courtes phrases selon les instructions suivantes:'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Andika sentensi fupi kuhusu shughuli zako za kila siku.', sw: 'Andika sentensi fupi kuhusu shughuli zako za kila siku.', fr: 'Écrivez une courte phrase sur vos activités quotidiennes.' },
                            answer: { en: '[Mwanafunzi aandike sentensi yake.]', sw: '[Mwanafunzi aandike sentensi yake.]', fr: '[L\'étudiant écrit sa phrase.]' }
                        },
                        {
                            text: { en: 'Andika sentensi fupi kuhusu marafiki zako.', sw: 'Andika sentensi fupi kuhusu marafiki zako.', fr: 'Écrivez une courte phrase sur vos amis.' },
                            answer: { en: '[Mwanafunzi aandike sentensi yake.]', sw: '[Mwanafunzi aandike sentensi yake.]', fr: '[L\'étudiant écrit sa phrase.]' }
                        },
                        {
                            text: { en: 'Andika sentensi fupi kuhusu shule yako.', sw: 'Andika sentensi fupi kuhusu shule yako.', fr: 'Écrivez une courte phrase sur votre école.' },
                            answer: { en: '[Mwanafunzi aandike sentensi yake.]', sw: '[Mwanafunzi aandike sentensi yake.]', fr: '[L\'étudiant écrit sa phrase.]' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa mstari safi na kwa lugha sahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 100',
                sw: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa mstari safi na kwa lugha sahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 100',
                fr: 'INSTRUCTIONS\n1. Répondez à toutes les questions en Kiswahili correct.\n2. Écrivez les réponses avec une écriture nette et un langage correct.\n3. Chaque question a sa note indiquée.\n4. Note totale = 100'
            }
        },
        
        'sarufi': {
            id: 'kiswahili_sarufi',
            title: {
                en: 'KISWAHILI – MTIHANI WA SARUFI',
                sw: 'KISWAHILI – MTIHANI WA SARUFI',
                fr: 'KISWAHILI – EXAMEN DE GRAMMAIRE'
            },
            time: '2 Saa',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Andika nomino sahihi katika sentensi zilizotolewa.',
                        sw: 'Andika nomino sahihi katika sentensi zilizotolewa.',
                        fr: 'Écrivez le nom correct dans les phrases données.'
                    },
                    subQuestions: [
                        {
                            text: { en: '_________________________ alisoma somo leo.', sw: '_________________________ alisoma somo leo.', fr: '_________________________ a étudié la leçon aujourd\'hui.' },
                            answer: { en: 'Mwanafunzi', sw: 'Mwanafunzi', fr: 'L\'étudiant' }
                        },
                        {
                            text: { en: '_________________________ ipo mjini.', sw: '_________________________ ipo mjini.', fr: '_________________________ est en ville.' },
                            answer: { en: 'Shule', sw: 'Shule', fr: 'L\'école' }
                        },
                        {
                            text: { en: '_________________________ wanapiga kelele darasani.', sw: '_________________________ wanapiga kelele darasani.', fr: '_________________________ font du bruit en classe.' },
                            answer: { en: 'Wanafunzi', sw: 'Wanafunzi', fr: 'Les étudiants' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa mstari safi na kwa lugha sahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 100',
                sw: 'MAELEKEZO\n1. Jibu maswali yote kwa Kiswahili fasaha.\n2. Andika majibu kwa mstari safi na kwa lugha sahihi.\n3. Kila swali lina alama yake iliyoonyeshwa.\n4. Jumla ya alama = 100',
                fr: 'INSTRUCTIONS\n1. Répondez à toutes les questions en Kiswahili correct.\n2. Écrivez les réponses avec une écriture nette et un langage correct.\n3. Chaque question a sa note indiquée.\n4. Note totale = 100'
            }
        }
    },
    
    // ==================== GRAPHICS DESIGN EXAMS ====================
    'graphics': {
        'branding': {
            id: 'graphics_branding',
            title: {
                en: 'GRAPHICS DESIGN – BRANDING EXAMINATION',
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA UBIAJABI',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN DE BRANDING'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Answer the following about logos.',
                        sw: 'Jibu yafuatayo kuhusu nembo.',
                        fr: 'Répondez aux questions suivantes sur les logos.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Name 3 types of logos.', sw: 'Taja aina 3 za nembo.', fr: 'Nommez 3 types de logos.' },
                            answer: { en: 'Wordmark, Lettermark, Iconic', sw: 'Nembo ya maneno, Nembo ya herufi, Nembo ya picha', fr: 'Marque verbale, Marque de lettre, Icône' }
                        },
                        {
                            text: { en: 'Give an example of a wordmark logo.', sw: 'Toa mfano wa nembo ya maneno.', fr: 'Donnez un exemple de marque verbale.' },
                            answer: { en: 'Google, Coca-Cola', sw: 'Google, Coca-Cola', fr: 'Google, Coca-Cola' }
                        },
                        {
                            text: { en: 'Give an example of a lettermark logo.', sw: 'Toa mfano wa nembo ya herufi.', fr: 'Donnez un exemple de marque de lettre.' },
                            answer: { en: 'IBM, NASA', sw: 'IBM, NASA', fr: 'IBM, NASA' }
                        },
                        {
                            text: { en: 'Explain why logos are important for brands.', sw: 'Eleza kwa nini nembo ni muhimu kwa ajili ya ubiajabi.', fr: 'Expliquez pourquoi les logos sont importants pour les marques.' },
                            answer: { en: 'Logos create brand recognition and identity.', sw: 'Nembo huunda utambuzi wa chapa na utambulisho.', fr: 'Les logos créent la reconnaissance et l\'identité de la marque.' }
                        },
                        {
                            text: { en: 'What color would you choose for a friendly brand?', sw: 'Ungechagua rangi gani kwa chapa ya kirafiki?', fr: 'Quelle couleur choisiriez-vous pour une marque amicale?' },
                            answer: { en: 'Warm colors like orange or light blue.', sw: 'Rangi za joto kama machungwa au bluu nyepesi.', fr: 'Couleurs chaudes comme l\'orange ou le bleu clair.' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Each question has 5 sub-questions, each sub-question = 1 mark.\n3. Total marks per question = 5 marks.\n4. Write clearly and neatly.\n5. Use complete sentences where required.',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Kila swali lina maswali madogo 5, kila swali dogo = alama 1.\n3. Jumla ya alama kwa kila swali = alama 5.\n4. Andika kwa uwazi na usafi.\n5. Tumia sentensi kamili pale inapohitajika.',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Chaque question a 5 sous-questions, chaque sous-question = 1 point.\n3. Total de points par question = 5 points.\n4. Écrivez clairement et soigneusement.\n5. Utilisez des phrases complètes si nécessaire.'
            }
        },
        
        'canva': {
            id: 'graphics_canva',
            title: {
                en: 'GRAPHICS DESIGN – CANVA EXAMINATION',
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA CANVA',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN CANVA'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Answer briefly.',
                        sw: 'Jibu kwa ufupi.',
                        fr: 'Répondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What is Canva?', sw: 'Canva ni nini?', fr: 'Qu\'est-ce que Canva?' },
                            answer: { en: 'Canva is a graphic design platform.', sw: 'Canva ni jukwaa la ubunifu wa michoro.', fr: 'Canva est une plateforme de conception graphique.' }
                        },
                        {
                            text: { en: 'Name 2 uses of Canva.', sw: 'Taja matumizi 2 ya Canva.', fr: 'Nommez 2 utilisations de Canva.' },
                            answer: { en: 'Creating posters, social media graphics.', sw: 'Kuunda mabango, michoro ya mitandao ya kijamii.', fr: 'Créer des affiches, des graphiques pour les médias sociaux.' }
                        },
                        {
                            text: { en: 'Mention one advantage of using Canva.', sw: 'Taja faida moja ya kutumia Canva.', fr: 'Mentionnez un avantage d\'utiliser Canva.' },
                            answer: { en: 'Easy to use for beginners.', sw: 'Rahisi kutumia kwa wanaoanza.', fr: 'Facile à utiliser pour les débutants.' }
                        },
                        {
                            text: { en: 'Is Canva free to use? Explain briefly.', sw: 'Je, Canva ni bure kutumia? Eleza kwa ufupi.', fr: 'Canva est-il gratuit? Expliquez brièvement.' },
                            answer: { en: 'Yes, Canva has a free version with basic features.', sw: 'Ndio, Canva ina toleo la bure lenye vipengele vya msingi.', fr: 'Oui, Canva a une version gratuite avec des fonctionnalités de base.' }
                        },
                        {
                            text: { en: 'Name one feature of Canva for beginners.', sw: 'Taja kipengele kimoja cha Canva kwa wanaoanza.', fr: 'Nommez une fonctionnalité de Canva pour les débutants.' },
                            answer: { en: 'Pre-designed templates.', sw: 'Violezo vilivyobuniwa awali.', fr: 'Modèles pré-conçus.' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Each question has 5 sub-questions, each sub-question = 1 mark.\n3. Total marks per question = 5 marks.\n4. Write clearly and neatly.\n5. Use complete sentences where required.',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Kila swali lina maswali madogo 5, kila swali dogo = alama 1.\n3. Jumla ya alama kwa kila swali = alama 5.\n4. Andika kwa uwazi na usafi.\n5. Tumia sentensi kamili pale inapohitajika.',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Chaque question a 5 sous-questions, chaque sous-question = 1 point.\n3. Total de points par question = 5 points.\n4. Écrivez clairement et soigneusement.\n5. Utilisez des phrases complètes si nécessaire.'
            }
        },
        
        'principles': {
            id: 'graphics_principles',
            title: {
                en: 'GRAPHICS DESIGN – DESIGN PRINCIPLES EXAMINATION',
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA KANUNI ZA UBUNIFU',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN DES PRINCIPES DE CONCEPTION'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Answer briefly.',
                        sw: 'Jibu kwa ufupi.',
                        fr: 'Répondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What is balance in design?', sw: 'Usawa katika ubunifu ni nini?', fr: 'Qu\'est-ce que l\'équilibre en conception?' },
                            answer: { en: 'Balance is the distribution of visual weight in a design.', sw: 'Usawa ni usambazaji wa uzani wa kuona katika ubunifu.', fr: 'L\'équilibre est la distribution du poids visuel dans une conception.' }
                        },
                        {
                            text: { en: 'Name two types of balance.', sw: 'Taja aina mbili za usawa.', fr: 'Nommez deux types d\'équilibre.' },
                            answer: { en: 'Symmetrical and asymmetrical balance.', sw: 'Usawa wa ulinganifu na usawa usio na ulinganifu.', fr: 'Équilibre symétrique et asymétrique.' }
                        },
                        {
                            text: { en: 'Why is visual balance important?', sw: 'Kwa nini usawa wa kuona ni muhimu?', fr: 'Pourquoi l\'équilibre visuel est-il important?' },
                            answer: { en: 'It creates harmony and makes designs pleasing to the eye.', sw: 'Huunda maelewano na hufanya miundo iwe ya kupendeza machoni.', fr: 'Il crée l\'harmonie et rend les conceptions agréables à l\'œil.' }
                        },
                        {
                            text: { en: 'Give one example of symmetrical balance.', sw: 'Toa mfano mmoja wa usawa wa ulinganifu.', fr: 'Donnez un exemple d\'équilibre symétrique.' },
                            answer: { en: 'A butterfly with identical wings on both sides.', sw: 'Kipepeo yenye mabawa yanayolingana pande zote mbili.', fr: 'Un papillon avec des ailes identiques des deux côtés.' }
                        },
                        {
                            text: { en: 'Give one example of asymmetrical balance.', sw: 'Toa mfano mmoja wa usawa usio na ulinganifu.', fr: 'Donnez un exemple d\'équilibre asymétrique.' },
                            answer: { en: 'A large element on one side balanced by several small elements on the other.', sw: 'Kipengele kikubwa upande mmoja kinalingana na vipele kadhaa vidogo upande mwingine.', fr: 'Un grand élément d\'un côté équilibré par plusieurs petits éléments de l\'autre.' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Each question has 5 sub-questions, each sub-question = 1 mark.\n3. Total marks per question = 5 marks.\n4. Write clearly and neatly.\n5. Use complete sentences where required.',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Kila swali lina maswali madogo 5, kila swali dogo = alama 1.\n3. Jumla ya alama kwa kila swali = alama 5.\n4. Andika kwa uwazi na usafi.\n5. Tumia sentensi kamili pale inapohitajika.',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Chaque question a 5 sous-questions, chaque sous-question = 1 point.\n3. Total de points par question = 5 points.\n4. Écrivez clairement et soigneusement.\n5. Utilisez des phrases complètes si nécessaire.'
            }
        },
        
        'pixellab': {
            id: 'graphics_pixellab',
            title: {
                en: 'GRAPHICS DESIGN – PIXELLAB EXAMINATION',
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA PIXELLAB',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN PIXELLAB'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Answer briefly.',
                        sw: 'Jibu kwa ufupi.',
                        fr: 'Répondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What is PixelLab?', sw: 'PixelLab ni nini?', fr: 'Qu\'est-ce que PixelLab?' },
                            answer: { en: 'PixelLab is a mobile graphic design app for text and image editing.', sw: 'PixelLab ni programu ya simujanii ya ubunifu wa michoro kwa ajili ya uhariri wa maandishi na picha.', fr: 'PixelLab est une application mobile de conception graphique pour l\'édition de texte et d\'images.' }
                        },
                        {
                            text: { en: 'Name 2 uses of PixelLab.', sw: 'Taja matumizi 2 ya PixelLab.', fr: 'Nommez 2 utilisations de PixelLab.' },
                            answer: { en: 'Creating text graphics, editing photos with text.', sw: 'Kuunda michoro ya maandishi, kuhariri picha na maandishi.', fr: 'Créer des graphiques textuels, éditer des photos avec du texte.' }
                        },
                        {
                            text: { en: 'Mention one advantage of using PixelLab.', sw: 'Taja faida moja ya kutumia PixelLab.', fr: 'Mentionnez un avantage d\'utiliser PixelLab.' },
                            answer: { en: 'Easy to add 3D text effects.', sw: 'Rahisi kuongeza athari za maandishi 3D.', fr: 'Facile d\'ajouter des effets de texte 3D.' }
                        },
                        {
                            text: { en: 'Is PixelLab available on mobile devices?', sw: 'Je, PixelLab inapatikana kwenye vifaa vya simu?', fr: 'PixelLab est-il disponible sur les appareils mobiles?' },
                            answer: { en: 'Yes, it\'s primarily a mobile app.', sw: 'Ndio, kimsingi ni programu ya simu.', fr: 'Oui, c\'est principalement une application mobile.' }
                        },
                        {
                            text: { en: 'Name one feature for beginners in PixelLab.', sw: 'Taja kipengele kimoja cha PixelLab kwa wanaoanza.', fr: 'Nommez une fonctionnalité de PixelLab pour les débutants.' },
                            answer: { en: 'Pre-made text styles and templates.', sw: 'Mitindo ya maandishi iliyotengenezwa awali na violezo.', fr: 'Styles de texte prédéfinis et modèles.' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer ALL questions.\n2. Each question has 5 sub-questions, each sub-question = 1 mark.\n3. Total marks per question = 5 marks.\n4. Write clearly and neatly.\n5. Use complete sentences where required.',
                sw: 'MAELEKEZO\n1. Jibu maswali YOTE.\n2. Kila swali lina maswali madogo 5, kila swali dogo = alama 1.\n3. Jumla ya alama kwa kila swali = alama 5.\n4. Andika kwa uwazi na usafi.\n5. Tumia sentensi kamili pale inapohitajika.',
                fr: 'INSTRUCTIONS\n1. Répondez à TOUTES les questions.\n2. Chaque question a 5 sous-questions, chaque sous-question = 1 point.\n3. Total de points par question = 5 points.\n4. Écrivez clairement et soigneusement.\n5. Utilisez des phrases complètes si nécessaire.'
            }
        },
        
        'practical': {
            id: 'graphics_practical',
            title: {
                en: 'GRAPHICS DESIGN – PRACTICAL FINAL EXAM',
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA MWISHO WA KIUTENDAJI',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN FINAL PRATIQUE'
            },
            time: '3 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'This exam is 100% practical; all tasks must be completed using Canva and PixelLab.',
                        sw: 'Mtihani huu ni 100% wa kiutendaji; kazi zote lazima zikamilishwe kwa kutumia Canva na PixelLab.',
                        fr: 'Cet examen est 100% pratique; toutes les tâches doivent être réalisées avec Canva et PixelLab.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'TASK 1 – Social Media Branding Campaign (Canva) – 25 Marks', sw: 'KAZI 1 – Kampeni ya Ubiajabi wa Mitandao ya Kijamii (Canva) – Alama 25', fr: 'TÂCHE 1 – Campagne de branding pour médias sociaux (Canva) – 25 Points' },
                            answer: { en: 'Create a social media mini-campaign for a fictional brand.', sw: 'Unda kampeni ndogo ya mitandao ya kijamii kwa chapa ya kubuniwa.', fr: 'Créez une mini-campagne pour médias sociaux pour une marque fictive.' }
                        },
                        {
                            text: { en: 'TASK 2 – Event Poster (Canva) – 15 Marks', sw: 'KAZI 2 – Bango la Tukio (Canva) – Alama 15', fr: 'TÂCHE 2 – Affiche d\'événement (Canva) – 15 Points' },
                            answer: { en: 'Design a poster for a real or fictional event.', sw: 'Buni bango la tukio la kweli au la kubuniwa.', fr: 'Concevez une affiche pour un événement réel ou fictif.' }
                        },
                        {
                            text: { en: 'TASK 3 – Quote or Typography Poster (PixelLab) – 20 Marks', sw: 'KAZI 3 – Bango la Nukuu au Uchapishaji (PixelLab) – Alama 20', fr: 'TÂCHE 3 – Affiche de citation ou typographie (PixelLab) – 20 Points' },
                            answer: { en: 'Create a dynamic text-based poster with PixelLab.', sw: 'Unda bango linalotegemea maandishi lenye nguvu na PixelLab.', fr: 'Créez une affiche dynamique basée sur du texte avec PixelLab.' }
                        },
                        {
                            text: { en: 'TASK 4 – Logo Design (PixelLab) – 20 Marks', sw: 'KAZI 4 – Ubunifu wa Nembo (PixelLab) – Alama 20', fr: 'TÂCHE 4 – Conception de logo (PixelLab) – 20 Points' },
                            answer: { en: 'Design a logo for a fictional brand.', sw: 'Buni nembo kwa chapa ya kubuniwa.', fr: 'Concevez un logo pour une marque fictive.' }
                        },
                        {
                            text: { en: 'TASK 5 – Integrated Marketing Design (Canva + PixelLab) – 20 Marks', sw: 'KAZI 5 – Ubunifu wa Uuzaji Uliojumuishwa (Canva + PixelLab) – Alama 20', fr: 'TÂCHE 5 – Conception marketing intégrée (Canva + PixelLab) – 20 Points' },
                            answer: { en: 'Combine Canva and PixelLab to create a single cohesive marketing piece.', sw: 'Changanya Canva na PixelLab kuunda kipande kimoja cha uuzaji kilichounganishwa.', fr: 'Combinez Canva et PixelLab pour créer une pièce marketing cohérente.' }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. This exam is 100% practical; all tasks must be completed using Canva and PixelLab.\n2. Submit all designs as PNG, JPEG, or PDF via WhatsApp or Google Drive.\n3. Apply all design principles: alignment, contrast, balance, hierarchy, repetition, typography, and color theory.\n4. Each task carries marks as indicated.\n5. Include a short reflection (1–2 sentences) for each task explaining your design choices.',
                sw: 'MAELEKEZO\n1. Mtihani huu ni 100% wa kiutendaji; kazi zote lazima zikamilishwe kwa kutumia Canva na PixelLab.\n2. Wasilisha miundo yote kama PNG, JPEG, au PDF kupitia WhatsApp au Google Drive.\n3. Tumia kanuni zote za ubunifu: upangaji, tofauti, usawa, uongozi, kurudia, uchapishaji, na nadharia ya rangi.\n4. Kila kazi ina alama kama zilivyoonyeshwa.\n5. Jumuisha tafakuri fupi (sentensi 1-2) kwa kila kazi ikielezea uchaguzi wako wa ubunifu.',
                fr: 'INSTRUCTIONS\n1. Cet examen est 100% pratique; toutes les tâches doivent être réalisées avec Canva et PixelLab.\n2. Soumettez tous les designs au format PNG, JPEG ou PDF via WhatsApp ou Google Drive.\n3. Appliquez tous les principes de conception: alignement, contraste, équilibre, hiérarchie, répétition, typographie et théorie des couleurs.\n4. Chaque tâche porte les points indiqués.\n5. Incluez une courte réflexion (1-2 phrases) pour chaque tâche expliquant vos choix de conception.'
            }
        }
    },
    
    // ==================== WEBSITE DESIGN EXAMS ====================
    'website': {
        'theory': {
            id: 'website_theory',
            title: {
                en: 'WEBSITE DESIGN – FINAL THEORY EXAMINATION',
                sw: 'UBUNIFU WA TOVUTI – MTIHANI WA MWISHO WA NADHARIA',
                fr: 'CONCEPTION DE SITES WEB – EXAMEN THÉORIQUE FINAL'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Define the term website.',
                        sw: 'Fafanua neno tovuti.',
                        fr: 'Définissez le terme site web.'
                    },
                    subQuestions: [
                        {
                            text: { en: '', sw: '', fr: '' },
                            answer: { en: 'A website is a collection of related web pages under a single domain name.', sw: 'Tovuti ni mkusanyiko wa kurasa za wavuti zinazohusiana chini ya jina la kikoa kimoja.', fr: 'Un site web est une collection de pages web liées sous un seul nom de domaine.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'Explain the difference between static and dynamic websites.',
                        sw: 'Eleza tofauti kati ya tovuti tuli na tovuti zinazobadilika.',
                        fr: 'Expliquez la différence entre les sites web statiques et dynamiques.'
                    },
                    subQuestions: [
                        {
                            text: { en: '', sw: '', fr: '' },
                            answer: { en: 'Static websites display fixed content while dynamic websites can change content based on user interaction or database updates.', sw: 'Tovuti tuli zinaonyesha maudhui yaliyowekwa wakati tovuti zinazobadilika zinaweza kubadilisha maudhui kulingana na mwingiliano wa mtumiaji au usasishaji wa hifadhidata.', fr: 'Les sites web statiques affichent un contenu fixe tandis que les sites web dynamiques peuvent changer de contenu en fonction des interactions des utilisateurs ou des mises à jour de la base de données.' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'List 3 advantages of having a website for a business.',
                        sw: 'Orodhesha faida 3 za kuwa na tovuti kwa biashara.',
                        fr: 'Listez 3 avantages d\'avoir un site web pour une entreprise.'
                    },
                    subQuestions: [
                        {
                            text: { en: '', sw: '', fr: '' },
                            answer: { en: '1. Global reach and accessibility\n2. 24/7 availability\n3. Cost-effective marketing', sw: '1. Ufikiaji wa kimataifa na upatikanaji\n2. Upatikani siku zote\n3. Uuzaji wa gharama nafuu', fr: '1. Portée mondiale et accessibilité\n2. Disponibilité 24h/24 et 7j/7\n3. Marketing rentable' }
                        }
                    ]
                },
                // Add more questions
            ],
            instructions: {
                en: 'INSTRUCTIONS\n1. Answer all questions.\n2. Each question has sub-questions; marks are indicated.\n3. Write answers clearly and concisely.\n4. Total marks for the exam = 100.',
                sw: 'MAELEKEZO\n1. Jibu maswali yote.\n2. Kila swali lina maswali madogo; alama zinaonyeshwa.\n3. Andika majibu kwa uwazi na kwa ufupi.\n4. Jumla ya alama kwa mtihani = 100.',
                fr: 'INSTRUCTIONS\n1. Répondez à toutes les questions.\n2. Chaque question a des sous-questions; les points sont indiqués.\n3. Écrivez les réponses clairement et de manière concise.\n4. Total des points pour l\'examen = 100.'
            }
        }
    }
};

module.exports = examsData;