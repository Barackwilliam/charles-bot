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
                    text: { en: '“He don\'t like rice” is a correct sentence.', sw: '“Yeye si kupenda wali” ni sentensi sahihi.', fr: '“Il ne pas aimer riz” est une phrase correcte.' },
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
                sw: 'UBUNIFU WA MICHORO – MTIHANI WA BRANDING',
                fr: 'CONCEPTION GRAPHIQUE – EXAMEN DE BRANDING'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SECTION A – TRUE OR FALSE (25 Marks)\nWrite TRUE or FALSE for each statement:',
                        sw: 'SEHEMU A – KWELI AU SI KWELI (Alama 25)\nAndika KWELI au SI KWELI:',
                        fr: 'SECTION A – VRAI OU FAUX (25 Points)\nÉcrivez VRAI ou FAUX:'
                    },
                    subQuestions: [
                        { text: { en: 'Brand identity is only the logo.', sw: 'Utambulisho wa biashara ni nembo tu.', fr: "L'identité de marque, c'est uniquement le logo." }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Colors can influence customer perception.', sw: 'Rangi zinaweza kuathiri mtazamo wa mteja.', fr: 'Les couleurs peuvent influencer la perception du client.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'A brand can have multiple inconsistent fonts.', sw: 'Biashara inaweza kuwa na fonti nyingi zisizo sawa.', fr: 'Une marque peut avoir plusieurs polices incohérentes.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Icons can be part of branding.', sw: 'Aikoni zinaweza kuwa sehemu ya branding.', fr: 'Les icônes peuvent faire partie du branding.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Branding is important only for big companies.', sw: 'Branding ni muhimu kwa makampuni makubwa tu.', fr: "Le branding n'est important que pour les grandes entreprises." }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Brand personality is how customers perceive the brand.', sw: 'Utu wa biashara ni jinsi wateja wanavyoiona biashara.', fr: 'La personnalité de la marque est la façon dont les clients la perçoivent.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'A logo can include text, icon, or both.', sw: 'Nembo inaweza kujumuisha maandishi, aikoni, au vyote viwili.', fr: 'Un logo peut inclure du texte, une icône, ou les deux.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Branding is only visual; words do not matter.', sw: 'Branding ni ya kuona tu; maneno hayafai.', fr: 'Le branding est uniquement visuel; les mots ne comptent pas.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Every brand needs a color scheme.', sw: 'Kila biashara inahitaji mpangilio wa rangi.', fr: 'Chaque marque a besoin d\'un schéma de couleurs.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Brand guidelines are optional.', sw: 'Mwongozo wa biashara ni wa hiari.', fr: "Les directives de marque sont facultatives." }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Using the same colors across platforms ensures consistency.', sw: 'Kutumia rangi sawa kwenye majukwaa mbalimbali kuhakikisha uthabiti.', fr: "L'utilisation des mêmes couleurs sur toutes les plateformes garantit la cohérence." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'A logo should be simple and memorable.', sw: 'Nembo inapaswa kuwa rahisi na ya kukumbukwa.', fr: 'Un logo doit être simple et mémorable.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Typography affects readability and brand perception.', sw: 'Fonti zinaathiri usomaji na mtazamo wa biashara.', fr: 'La typographie affecte la lisibilité et la perception de la marque.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Brand consistency increases customer trust.', sw: 'Uthabiti wa biashara huongeza imani ya wateja.', fr: 'La cohérence de la marque augmente la confiance des clients.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Brand story communicates values of the brand.', sw: 'Hadithi ya biashara inawasilisha maadili ya biashara.', fr: "L'histoire de la marque communique les valeurs de la marque." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SECTION B – MULTIPLE CHOICE (75 Marks)\nChoose the correct answer (write the letter only):',
                        sw: 'SEHEMU B – CHAGUO NYINGI (Alama 75)\nChagua jibu sahihi (andika herufi tu):',
                        fr: 'SECTION B – CHOIX MULTIPLE (75 Points)\nChoisissez la bonne réponse (écrivez la lettre seulement):'
                    },
                    subQuestions: [
                        { text: { en: 'A logo that only uses letters is called:\nA. Wordmark\nB. Lettermark\nC. Iconic', sw: 'Nembo inayotumia herufi tu inaitwa:\nA. Wordmark\nB. Lettermark\nC. Iconic', fr: 'Un logo qui utilise uniquement des lettres est appelé:\nA. Wordmark\nB. Lettermark\nC. Iconic' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: "A brand's visual style is part of its:\nA. Brand identity\nB. Marketing strategy\nC. Product", sw: 'Mtindo wa kuona wa biashara ni sehemu ya:\nA. Utambulisho wa biashara\nB. Mkakati wa masoko\nC. Bidhaa', fr: "Le style visuel d'une marque fait partie de son:\nA. Identité de marque\nB. Stratégie marketing\nC. Produit" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Using the same colors across platforms ensures:\nA. Creativity\nB. Consistency\nC. Confusion', sw: 'Kutumia rangi sawa kwenye majukwaa kunakuhakikishia:\nA. Ubunifu\nB. Uthabiti\nC. Mkanganyiko', fr: "L'utilisation des mêmes couleurs sur toutes les plateformes garantit:\nA. La créativité\nB. La cohérence\nC. La confusion" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'A logo should be:\nA. Complicated\nB. Simple and memorable\nC. Long', sw: 'Nembo inapaswa kuwa:\nA. Ngumu\nB. Rahisi na ya kukumbukwa\nC. Ndefu', fr: 'Un logo doit être:\nA. Compliqué\nB. Simple et mémorable\nC. Long' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Typography in branding affects:\nA. Readability\nB. Sales only\nC. Price', sw: 'Fonti katika branding zinaathiri:\nA. Usomaji\nB. Mauzo tu\nC. Bei', fr: 'La typographie dans le branding affecte:\nA. La lisibilité\nB. Les ventes uniquement\nC. Le prix' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The main goal of branding is:\nA. Advertising only\nB. Building recognition and trust\nC. Making random designs', sw: 'Lengo kuu la branding ni:\nA. Kutangaza tu\nB. Kujenga utambuzi na imani\nC. Kutengeneza michoro ya nasibu', fr: "L'objectif principal du branding est:\nA. La publicité uniquement\nB. Construire la reconnaissance et la confiance\nC. Faire des designs aléatoires" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Which is part of brand consistency?\nA. Using same colors, fonts, and style\nB. Changing logo daily\nC. Ignoring guidelines', sw: 'Ni nini sehemu ya uthabiti wa biashara?\nA. Kutumia rangi, fonti, na mtindo sawa\nB. Kubadilisha nembo kila siku\nC. Kupuuza miongozo', fr: "Qu'est-ce qui fait partie de la cohérence de la marque?\nA. Utiliser les mêmes couleurs, polices et style\nB. Changer le logo chaque jour\nC. Ignorer les directives" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: "A brand's message should be:\nA. Clear\nB. Confusing\nC. Hidden", sw: 'Ujumbe wa biashara unapaswa kuwa:\nA. Wazi\nB. Wa kuchanganya\nC. Uliofichwa', fr: "Le message d'une marque doit être:\nA. Clair\nB. Confus\nC. Caché" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Visual identity is communicated through:\nA. Text only\nB. Visuals, colors, fonts\nC. Silence', sw: 'Utambulisho wa kuona unawasilishwa kupitia:\nA. Maandishi tu\nB. Michoro, rangi, fonti\nC. Ukimya', fr: "L'identité visuelle est communiquée à travers:\nA. Le texte uniquement\nB. Les visuels, couleurs, polices\nC. Le silence" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'The combination of a logo, color, and typography is called:\nA. Brand guideline\nB. Brand identity\nC. Brand confusion', sw: 'Mchanganyiko wa nembo, rangi, na fonti unaitwa:\nA. Mwongozo wa biashara\nB. Utambulisho wa biashara\nC. Mkanganyiko wa biashara', fr: "La combinaison d'un logo, d'une couleur et d'une typographie s'appelle:\nA. Charte graphique\nB. Identité de marque\nC. Confusion de marque" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Colors used for a brand should be:\nA. Random\nB. Thoughtful\nC. Inconsistent', sw: 'Rangi zinazotumika kwa biashara zinapaswa kuwa:\nA. Za nasibu\nB. Zilizochaguliwa kwa makini\nC. Zisizo sawa', fr: 'Les couleurs utilisées pour une marque doivent être:\nA. Aléatoires\nB. Réfléchies\nC. Incohérentes' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Font choice should match:\nA. Brand personality\nB. Popularity only\nC. Random taste', sw: 'Uchaguzi wa fonti unapaswa kulingana na:\nA. Utu wa biashara\nB. Umaarufu tu\nC. Ladha ya nasibu', fr: "Le choix de police doit correspondre à:\nA. La personnalité de la marque\nB. La popularité uniquement\nC. Le goût aléatoire" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Logos should be scalable:\nA. Yes\nB. No\nC. Optional', sw: 'Nembo zinapaswa kubadilika ukubwa:\nA. Ndiyo\nB. Hapana\nC. Ni hiari', fr: 'Les logos doivent être évolutifs:\nA. Oui\nB. Non\nC. Facultatif' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Brand voice is:\nA. Visual style only\nB. Written and spoken style\nC. Color palette', sw: 'Sauti ya biashara ni:\nA. Mtindo wa kuona tu\nB. Mtindo wa kuandika na kusema\nC. Rangi za palette', fr: "La voix de la marque est:\nA. Le style visuel uniquement\nB. Le style écrit et parlé\nC. La palette de couleurs" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Brand consistency increases:\nA. Customer trust\nB. Confusion\nC. Randomness', sw: 'Uthabiti wa biashara huongeza:\nA. Imani ya wateja\nB. Mkanganyiko\nC. Ubovu', fr: 'La cohérence de la marque augmente:\nA. La confiance des clients\nB. La confusion\nC. Le hasard' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'A tagline is:\nA. Short memorable phrase\nB. Logo color\nC. Font style', sw: 'Tagline ni:\nA. Msemo mfupi wa kukumbukwa\nB. Rangi ya nembo\nC. Mtindo wa fonti', fr: 'Un slogan est:\nA. Une phrase courte et mémorable\nB. La couleur du logo\nC. Le style de police' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Brand guidelines include:\nA. Font, color, logo usage\nB. Only logo\nC. Only advertising', sw: 'Mwongozo wa biashara unajumuisha:\nA. Fonti, rangi, matumizi ya nembo\nB. Nembo tu\nC. Matangazo tu', fr: 'Les directives de marque comprennent:\nA. Police, couleur, utilisation du logo\nB. Logo uniquement\nC. Publicité uniquement' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Visual hierarchy in branding helps:\nA. Confuse viewers\nB. Organize attention\nC. Hide information', sw: 'Mpangilio wa kuona katika branding husaidia:\nA. Kuchanganya watazamaji\nB. Kupanga umakini\nC. Kuficha taarifa', fr: 'La hiérarchie visuelle dans le branding aide à:\nA. Confondre les spectateurs\nB. Organiser l\'attention\nC. Cacher les informations' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'A logo should be:\nA. Complex and detailed\nB. Simple and recognizable\nC. Random', sw: 'Nembo inapaswa kuwa:\nA. Ngumu na ya kina\nB. Rahisi na inayotambuliwa\nC. Ya nasibu', fr: 'Un logo doit être:\nA. Complexe et détaillé\nB. Simple et reconnaissable\nC. Aléatoire' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Branding affects:\nA. Only sales\nB. Customer perception\nC. Nothing', sw: 'Branding inaathiri:\nA. Mauzo tu\nB. Mtazamo wa wateja\nC. Hakuna kitu', fr: 'Le branding affecte:\nA. Les ventes uniquement\nB. La perception des clients\nC. Rien' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                    ]
                }
            ],
            instructions: {
                en: 'CHARLES ACADEMY – GRAPHICS DESIGN – BRANDING EXAMINATION\n\nINSTRUCTIONS\n• Answer all questions.\n• For True/False, write the full word TRUE or FALSE.\n• For Multiple Choice, write the letter only.\n• Time: 2 Hours\n• Total Marks: 100\n• Passing score: 60%',
                sw: 'CHARLES ACADEMY – UBUNIFU WA MICHORO – MTIHANI WA BRANDING\n\nMAELEKEZO\n• Jibu maswali yote.\n• Kwa Kweli/Si Kweli, andika neno zima KWELI au SI KWELI.\n• Kwa Chaguo Nyingi, andika herufi tu.\n• Muda: Masaa 2\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
                fr: 'CHARLES ACADEMY – CONCEPTION GRAPHIQUE – EXAMEN DE BRANDING\n\nINSTRUCTIONS\n• Répondez à toutes les questions.\n• Pour Vrai/Faux, écrivez le mot entier VRAI ou FAUX.\n• Pour le Choix Multiple, écrivez seulement la lettre.\n• Temps: 2 Heures\n• Total des points: 100\n• Score de passage: 60%'
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
            id: 'graphics_pixellab_canva',
            title: {
                en: 'GRAPHICS DESIGN EXAMINATION (CANVA & PIXELLAB)',
                sw: 'MTIHANI WA UBUNIFU WA MICHORO (CANVA & PIXELLAB)',
                fr: 'EXAMEN DE CONCEPTION GRAPHIQUE (CANVA & PIXELLAB)'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SECTION A – TRUE OR FALSE (30 Marks)\nWrite TRUE or FALSE:',
                        sw: 'SEHEMU A – KWELI AU SI KWELI (Alama 30)\nAndika KWELI au SI KWELI:',
                        fr: 'SECTION A – VRAI OU FAUX (30 Points)\nÉcrivez VRAI ou FAUX:'
                    },
                    subQuestions: [
                        { text: { en: 'Canva allows uploading your own images.', sw: 'Canva inaruhusu kupakua picha zako.', fr: 'Canva permet de télécharger vos propres images.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'PixelLab allows creating 3D text.', sw: 'PixelLab inaruhusu kuunda maandishi ya 3D.', fr: 'PixelLab permet de créer du texte 3D.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Canva cannot save designs.', sw: 'Canva haiwezi kuhifadhi michoro.', fr: 'Canva ne peut pas sauvegarder les designs.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'PixelLab can rotate and scale objects.', sw: 'PixelLab inaweza kuzungusha na kupanua vitu.', fr: 'PixelLab peut faire pivoter et redimensionner des objets.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Canva has free and paid versions.', sw: 'Canva ina toleo la bure na la kulipwa.', fr: 'Canva a des versions gratuite et payante.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'PixelLab allows adding shadows and effects to text.', sw: 'PixelLab inaruhusu kuongeza vivuli na athari kwa maandishi.', fr: 'PixelLab permet d\'ajouter des ombres et des effets au texte.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Canva cannot be accessed via web browser.', sw: 'Canva haiwezi kufikiwa kupitia kivinjari cha wavuti.', fr: 'Canva ne peut pas être accessible via un navigateur web.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'PixelLab supports image import.', sw: 'PixelLab inasaidia uingizaji wa picha.', fr: "PixelLab prend en charge l'importation d'images." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: "Canva's Brand Kit allows saving brand colors, fonts, and logos.", sw: 'Brand Kit ya Canva inaruhusu kuhifadhi rangi, fonti, na nembo za biashara.', fr: "Le Brand Kit de Canva permet de sauvegarder les couleurs, polices et logos de la marque." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'You cannot add stickers or icons in Canva.', sw: 'Huwezi kuongeza stika au aikoni kwenye Canva.', fr: 'Vous ne pouvez pas ajouter des autocollants ou des icônes dans Canva.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'PixelLab cannot export designs as PNG or JPEG.', sw: 'PixelLab haiwezi kuexport michoro kama PNG au JPEG.', fr: 'PixelLab ne peut pas exporter des designs en PNG ou JPEG.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Canva mobile app can do almost everything like desktop.', sw: 'Programu ya Canva ya simu inaweza kufanya karibu kila kitu kama kompyuta.', fr: "L'application mobile Canva peut presque tout faire comme la version bureau." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Layers in Canva help to overlap elements correctly.', sw: 'Safu katika Canva husaidia kupanga vipengele kwa usahihi.', fr: 'Les calques dans Canva aident à superposer correctement les éléments.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'PixelLab can adjust element order with layers.', sw: 'PixelLab inaweza kubadilisha mpangilio wa vipengele kwa safu.', fr: "PixelLab peut ajuster l'ordre des éléments avec des calques." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Templates in Canva are pre-designed layouts.', sw: 'Templeti za Canva ni mipangilio iliyoundwa awali.', fr: 'Les modèles dans Canva sont des mises en page préconçues.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Canva cannot change colors of elements.', sw: 'Canva haiwezi kubadilisha rangi za vipengele.', fr: 'Canva ne peut pas changer les couleurs des éléments.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'PixelLab allows adding text, shapes, and stickers.', sw: 'PixelLab inaruhusu kuongeza maandishi, maumbo, na stika.', fr: 'PixelLab permet d\'ajouter du texte, des formes et des autocollants.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Shadows in PixelLab improve readability.', sw: 'Vivuli katika PixelLab vinaboresha usomaji.', fr: 'Les ombres dans PixelLab améliorent la lisibilité.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Canva allows adding multiple pages to a design.', sw: 'Canva inaruhusu kuongeza kurasa nyingi kwenye muundo.', fr: 'Canva permet d\'ajouter plusieurs pages à un design.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'PixelLab does not allow duplicating elements.', sw: 'PixelLab hairuhusu kuiga vipengele.', fr: 'PixelLab ne permet pas de dupliquer les éléments.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SECTION B – MULTIPLE CHOICE (40 Marks)\nChoose the correct letter:',
                        sw: 'SEHEMU B – CHAGUO NYINGI (Alama 40)\nChagua herufi sahihi:',
                        fr: 'SECTION B – CHOIX MULTIPLE (40 Points)\nChoisissez la lettre correcte:'
                    },
                    subQuestions: [
                        { text: { en: 'Canva is primarily used for:\nA. Coding\nB. Graphic design\nC. Cooking', sw: 'Canva inatumika hasa kwa:\nA. Uandishi wa programu\nB. Ubunifu wa michoro\nC. Kupika', fr: 'Canva est principalement utilisé pour:\nA. Le codage\nB. La conception graphique\nC. La cuisine' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'PixelLab is primarily used for:\nA. Video editing\nB. Graphic/text design\nC. Coding', sw: 'PixelLab inatumika hasa kwa:\nA. Kuhariri video\nB. Ubunifu wa michoro/maandishi\nC. Uandishi wa programu', fr: 'PixelLab est principalement utilisé pour:\nA. Le montage vidéo\nB. La conception graphique/texte\nC. Le codage' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'To create a poster in Canva, you should select:\nA. Presentation\nB. Poster\nC. Video', sw: 'Kuunda bango katika Canva, unapaswa kuchagua:\nA. Wasilisho\nB. Bango\nC. Video', fr: 'Pour créer une affiche dans Canva, vous devez sélectionner:\nA. Présentation\nB. Affiche\nC. Vidéo' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Templates in Canva are:\nA. Random images\nB. Pre-designed layouts\nC. Blank files', sw: 'Templeti katika Canva ni:\nA. Picha za nasibu\nB. Mipangilio iliyoundwa awali\nC. Faili tupu', fr: 'Les modèles dans Canva sont:\nA. Des images aléatoires\nB. Des mises en page préconçues\nC. Des fichiers vides' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Layers in Canva help to:\nA. Add colors\nB. Overlap elements correctly\nC. Delete images', sw: 'Safu katika Canva husaidia:\nA. Kuongeza rangi\nB. Kupanga vipengele kwa usahihi\nC. Kufuta picha', fr: 'Les calques dans Canva aident à:\nA. Ajouter des couleurs\nB. Superposer correctement les éléments\nC. Supprimer des images' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'PixelLab layers help to:\nA. Adjust visibility and order\nB. Only change colors\nC. Delete images', sw: 'Safu za PixelLab husaidia:\nA. Kubadilisha mwonekano na mpangilio\nB. Kubadilisha rangi tu\nC. Kufuta picha', fr: 'Les calques PixelLab aident à:\nA. Régler la visibilité et l\'ordre\nB. Changer uniquement les couleurs\nC. Supprimer des images' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: "Canva's Brand Kit allows:\nA. Edit videos only\nB. Save brand colors, fonts, logos\nC. Upload templates", sw: 'Brand Kit ya Canva inaruhusu:\nA. Kuhariri video tu\nB. Kuhifadhi rangi, fonti, nembo za biashara\nC. Kupakua templeti', fr: "Le Brand Kit de Canva permet:\nA. Modifier des vidéos uniquement\nB. Sauvegarder les couleurs, polices, logos de la marque\nC. Télécharger des modèles" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'PixelLab elements include:\nA. Videos only\nB. Text, shapes, stickers\nC. Audio only', sw: 'Vipengele vya PixelLab vinajumuisha:\nA. Video tu\nB. Maandishi, maumbo, stika\nC. Sauti tu', fr: 'Les éléments PixelLab comprennent:\nA. Les vidéos uniquement\nB. Texte, formes, autocollants\nC. Audio uniquement' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Fonts in Canva can be:\nA. Only default\nB. Changed and customized\nC. Fixed', sw: 'Fonti katika Canva zinaweza kuwa:\nA. Za msingi tu\nB. Kubadilishwa na kubinafsishwa\nC. Zisizobadilika', fr: 'Les polices dans Canva peuvent être:\nA. Uniquement par défaut\nB. Modifiées et personnalisées\nC. Fixes' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'PixelLab can export designs as:\nA. Only JPEG\nB. PNG and JPEG\nC. DOC', sw: 'PixelLab inaweza kuexport michoro kama:\nA. JPEG tu\nB. PNG na JPEG\nC. DOC', fr: 'PixelLab peut exporter des designs en:\nA. JPEG uniquement\nB. PNG et JPEG\nC. DOC' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Which is not a Canva element?\nA. Shapes\nB. Stickers\nC. Database tables', sw: 'Ni kipi si kipengele cha Canva?\nA. Maumbo\nB. Stika\nC. Jedwali la hifadhidata', fr: "Lequel n'est pas un élément Canva?\nA. Formes\nB. Autocollants\nC. Tables de base de données" }, answer: { en: 'C', sw: 'C', fr: 'C' } },
                        { text: { en: 'PixelLab feature that is not available:\nA. 3D text\nB. Stickers\nC. Video editing', sw: 'Kipengele cha PixelLab ambacho hakipo:\nA. Maandishi ya 3D\nB. Stika\nC. Kuhariri video', fr: "Fonctionnalité PixelLab qui n'est pas disponible:\nA. Texte 3D\nB. Autocollants\nC. Montage vidéo" }, answer: { en: 'C', sw: 'C', fr: 'C' } },
                        { text: { en: 'Canva is used by:\nA. Students\nB. Professionals\nC. Both', sw: 'Canva inatumika na:\nA. Wanafunzi\nB. Wataalamu\nC. Wote', fr: 'Canva est utilisé par:\nA. Les étudiants\nB. Les professionnels\nC. Les deux' }, answer: { en: 'C', sw: 'C', fr: 'C' } },
                        { text: { en: 'PixelLab is mainly for:\nA. Coding\nB. Graphic design and typography\nC. Music', sw: 'PixelLab inatumika hasa kwa:\nA. Uandishi wa programu\nB. Ubunifu wa michoro na fonti\nC. Muziki', fr: 'PixelLab est principalement pour:\nA. Le codage\nB. La conception graphique et la typographie\nC. La musique' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Canva allows adding:\nA. Photos\nB. Videos\nC. Both', sw: 'Canva inaruhusu kuongeza:\nA. Picha\nB. Video\nC. Vyote', fr: 'Canva permet d\'ajouter:\nA. Des photos\nB. Des vidéos\nC. Les deux' }, answer: { en: 'C', sw: 'C', fr: 'C' } },
                        { text: { en: 'Visual elements in PixelLab include:\nA. Text, shapes, stickers\nB. Only videos\nC. Only audio', sw: 'Vipengele vya kuona katika PixelLab vinajumuisha:\nA. Maandishi, maumbo, stika\nB. Video tu\nC. Sauti tu', fr: 'Les éléments visuels dans PixelLab comprennent:\nA. Texte, formes, autocollants\nB. Vidéos uniquement\nC. Audio uniquement' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'PixelLab text effects include:\nA. Shadows, outlines, 3D\nB. Only fonts\nC. Only shapes', sw: 'Athari za maandishi za PixelLab zinajumuisha:\nA. Vivuli, misingi, 3D\nB. Fonti tu\nC. Maumbo tu', fr: 'Les effets de texte PixelLab comprennent:\nA. Ombres, contours, 3D\nB. Polices uniquement\nC. Formes uniquement' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'Canva allows exporting designs as:\nA. DOC only\nB. PNG or PDF\nC. XLS only', sw: 'Canva inaruhusu kuexport michoro kama:\nA. DOC tu\nB. PNG au PDF\nC. XLS tu', fr: 'Canva permet d\'exporter des designs en:\nA. DOC uniquement\nB. PNG ou PDF\nC. XLS uniquement' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'Layers in Canva and PixelLab help:\nA. Organize elements\nB. Change canvas size\nC. Apply filters only', sw: 'Safu katika Canva na PixelLab husaidia:\nA. Kupanga vipengele\nB. Kubadilisha ukubwa wa canvas\nC. Kutumia vichujio tu', fr: 'Les calques dans Canva et PixelLab aident à:\nA. Organiser les éléments\nB. Changer la taille du canvas\nC. Appliquer uniquement des filtres' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: "PixelLab's effects include:\nA. Shadows and strokes\nB. Only colors\nC. Only shapes", sw: 'Athari za PixelLab zinajumuisha:\nA. Vivuli na mstari\nB. Rangi tu\nC. Maumbo tu', fr: 'Les effets PixelLab comprennent:\nA. Ombres et contours\nB. Couleurs uniquement\nC. Formes uniquement' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SECTION C – SHORT ANSWER / CONCEPTUAL (30 Marks)\nFill in the blanks and answer questions:',
                        sw: 'SEHEMU C – JIBU FUPI / DHANA (Alama 30)\nJaza nafasi na ujibu maswali:',
                        fr: 'SECTION C – RÉPONSE COURTE / CONCEPTUELLE (30 Points)\nRemplissez les blancs et répondez:'
                    },
                    subQuestions: [
                        { text: { en: 'The Canva toolbar contains __________, __________, and __________.', sw: 'Upau wa zana wa Canva una __________, __________, na __________.', fr: 'La barre d\'outils Canva contient __________, __________, et __________.' }, answer: { en: 'Text, Elements, Background', sw: 'Maandishi, Vipengele, Mandharinyuma', fr: 'Text, Elements, Background' } },
                        { text: { en: 'PixelLab main toolbar includes __________, __________, and __________.', sw: 'Upau wa zana mkuu wa PixelLab una __________, __________, na __________.', fr: "La barre d'outils principale de PixelLab comprend __________, __________, et __________." }, answer: { en: 'Text, Shape, Background', sw: 'Maandishi, Umbo, Mandharinyuma', fr: 'Texte, Forme, Arrière-plan' } },
                        { text: { en: 'Text can be added in Canva using the __________ tool.', sw: 'Maandishi yanaweza kuongezwa katika Canva kwa kutumia zana ya __________.', fr: 'Le texte peut être ajouté dans Canva à l\'aide de l\'outil __________.' }, answer: { en: 'Text tool', sw: 'Zana ya maandishi', fr: "Outil texte" } },
                        { text: { en: 'PixelLab allows adding __________ to designs.', sw: 'PixelLab inaruhusu kuongeza __________ kwenye michoro.', fr: 'PixelLab permet d\'ajouter __________ aux designs.' }, answer: { en: 'Stickers / Icons', sw: 'Stika / Aikoni', fr: 'Stickers / Icons' } },
                        { text: { en: 'Designs can be exported as __________ or __________.', sw: 'Michoro inaweza kuexportwa kama __________ au __________.', fr: 'Les designs peuvent être exportés en __________ ou __________.' }, answer: { en: 'PNG / PDF / JPEG', sw: 'PNG / PDF / JPEG', fr: 'PNG / PDF / JPEG' } },
                        { text: { en: 'Name one type of graphic you can create in Canva.', sw: 'Taja aina moja ya picha unayoweza kuunda katika Canva.', fr: 'Nommez un type de graphique que vous pouvez créer dans Canva.' }, answer: { en: 'Poster / Social media graphic / Flyer', sw: 'Bango / Picha ya mitandao ya kijamii / Flyer', fr: 'Poster / Social media graphic / Flyer' } },
                        { text: { en: 'Name one type of design you can create in PixelLab.', sw: 'Taja aina moja ya muundo unayoweza kuunda katika PixelLab.', fr: 'Nommez un type de design que vous pouvez créer dans PixelLab.' }, answer: { en: 'Poster / Banner / Typography design', sw: 'Bango / Bendera / Muundo wa fonti', fr: 'Poster / Banner / Typography design' } },
                        { text: { en: 'Why are layers important in design?', sw: 'Kwa nini safu ni muhimu katika ubunifu?', fr: 'Pourquoi les calques sont-ils importants dans la conception?' }, answer: { en: 'To organize and manage elements', sw: 'Kupanga na kusimamia vipengele', fr: 'To organize and manage elements' } },
                        { text: { en: 'Why should logos or graphics be simple?', sw: 'Kwa nini nembo au michoro inapaswa kuwa rahisi?', fr: 'Pourquoi les logos ou graphiques doivent-ils être simples?' }, answer: { en: 'Easy to remember and recognize', sw: 'Rahisi kukumbuka na kutambua', fr: 'Easy to remember and recognize' } },
                        { text: { en: 'Give one reason Canva or PixelLab helps beginners.', sw: 'Toa sababu moja jinsi Canva au PixelLab inavyosaidia wanaoanza.', fr: 'Donnez une raison pour laquelle Canva ou PixelLab aide les débutants.' }, answer: { en: 'Templates save time / Easy to edit', sw: 'Templeti zinaokoa muda / Rahisi kuhariri', fr: 'Templates save time / Easy to edit' } },
                    ]
                }
            ],
            instructions: {
                en: 'CHARLES ACADEMY – GRAPHICS DESIGN EXAMINATION (CANVA & PIXELLAB)\n\nINSTRUCTIONS\n• Answer all questions.\n• For True/False, write the whole word: TRUE or FALSE.\n• For Multiple Choice, write the letter only.\n• Time: 2 Hours\n• Total Marks: 100\n• Passing score: 60%',
                sw: 'CHARLES ACADEMY – MTIHANI WA UBUNIFU WA MICHORO (CANVA & PIXELLAB)\n\nMAELEKEZO\n• Jibu maswali yote.\n• Kwa Kweli/Si Kweli, andika neno zima KWELI au SI KWELI.\n• Kwa Chaguo Nyingi, andika herufi tu.\n• Muda: Masaa 2\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
                fr: 'CHARLES ACADEMY – EXAMEN DE CONCEPTION GRAPHIQUE (CANVA & PIXELLAB)\n\nINSTRUCTIONS\n• Répondez à toutes les questions.\n• Pour Vrai/Faux, écrivez le mot entier VRAI ou FAUX.\n• Pour le Choix Multiple, écrivez seulement la lettre.\n• Temps: 2 Heures\n• Total des points: 100\n• Score de passage: 60%'
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
            id: 'website_final_theory',
            title: {
                en: 'WEBSITE DESIGN – FINAL THEORY EXAM',
                sw: 'UBUNIFU WA TOVUTI – MTIHANI WA MWISHO WA NADHARIA',
                fr: 'CONCEPTION DE SITES WEB – EXAMEN THÉORIQUE FINAL'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'SECTION A – Introduction to Website Design & Development (15 Marks)\nTRUE/FALSE (5 Marks):',
                        sw: 'SEHEMU A – Utangulizi wa Ubunifu wa Tovuti (Alama 15)\nKWELI/SI KWELI (Alama 5):',
                        fr: 'SECTION A – Introduction à la Conception Web (15 Points)\nVRAI/FAUX (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'A website is a collection of web pages accessible through the internet.', sw: 'Tovuti ni mkusanyiko wa kurasa za wavuti zinazopatikana kupitia intaneti.', fr: "Un site web est une collection de pages web accessibles via internet." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Static websites change content depending on user interactions.', sw: 'Tovuti za statiki hubadilisha maudhui kulingana na mwingiliano wa mtumiaji.', fr: 'Les sites statiques changent de contenu selon les interactions des utilisateurs.' }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Every business benefits from having a website.', sw: 'Kila biashara inafaidika na kuwa na tovuti.', fr: "Chaque entreprise bénéficie d'avoir un site web." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Web hosting is the service that stores a website on a server so it can be accessed online.', sw: 'Huduma ya wavuti ni huduma inayohifadhi tovuti kwenye seva ili iweze kufikiwa mtandaoni.', fr: "L'hébergement web est le service qui stocke un site web sur un serveur pour qu'il soit accessible en ligne." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Every domain name represents the address of a website.', sw: 'Kila jina la kikoa linawakilisha anwani ya tovuti.', fr: "Chaque nom de domaine représente l'adresse d'un site web." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'SECTION A – MULTIPLE CHOICE (10 Marks):',
                        sw: 'SEHEMU A – CHAGUO NYINGI (Alama 10):',
                        fr: 'SECTION A – CHOIX MULTIPLE (10 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'The main difference between static and dynamic websites is:\nA. Static websites change content frequently, dynamic websites remain the same\nB. Static websites remain the same, dynamic websites change based on user interaction\nC. Both change content frequently\nD. Both remain the same', sw: 'Tofauti kuu kati ya tovuti za statiki na dinamiki ni:\nA. Tovuti za statiki hubadilisha maudhui mara kwa mara, za dinamiki hubaki sawa\nB. Tovuti za statiki hubaki sawa, za dinamiki hubadilika kulingana na mwingiliano wa mtumiaji\nC. Zote hubadilisha maudhui mara kwa mara\nD. Zote hubaki sawa', fr: 'La différence principale entre sites statiques et dynamiques est:\nA. Les sites statiques changent souvent, les dynamiques restent les mêmes\nB. Les sites statiques restent les mêmes, les dynamiques changent selon l\'interaction\nC. Les deux changent souvent\nD. Les deux restent les mêmes' }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'One advantage of having a website for business is:\nA. Just to show products\nB. To advertise, sell online, and communicate with customers\nC. No advantage at all\nD. To only change website colors', sw: 'Faida moja ya kuwa na tovuti kwa biashara ni:\nA. Kuonyesha bidhaa tu\nB. Kutangaza, kuuza mtandaoni, na kuwasiliana na wateja\nC. Hakuna faida kabisa\nD. Kubadilisha rangi za tovuti tu', fr: "Un avantage d'avoir un site web pour les affaires est:\nA. Juste montrer des produits\nB. Faire de la publicité, vendre en ligne, et communiquer avec les clients\nC. Aucun avantage\nD. Changer uniquement les couleurs du site" }, answer: { en: 'B', sw: 'B', fr: 'B' } },
                        { text: { en: 'An example of a domain name is:\nA. www.example.com\nB. 12345\nC. Work\nD. Phone', sw: 'Mfano wa jina la kikoa ni:\nA. www.example.com\nB. 12345\nC. Kazi\nD. Simu', fr: "Un exemple de nom de domaine est:\nA. www.example.com\nB. 12345\nC. Travail\nD. Téléphone" }, answer: { en: 'A', sw: 'A', fr: 'A' } }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'SECTION B – HTML (20 Marks)\nTRUE/FALSE (5 Marks):',
                        sw: 'SEHEMU B – HTML (Alama 20)\nKWELI/SI KWELI (Alama 5):',
                        fr: 'SECTION B – HTML (20 Points)\nVRAI/FAUX (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'HTML is a language used to structure and design web pages.', sw: 'HTML ni lugha inayotumika kupanga na kuunda kurasa za wavuti.', fr: 'HTML est un langage utilisé pour structurer et concevoir des pages web.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Tags open and close HTML elements.', sw: 'Lebo zinafungua na kufunga vipengele vya HTML.', fr: 'Les balises ouvrent et ferment les éléments HTML.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'HTML elements cannot have attributes.', sw: 'Vipengele vya HTML haviwezi kuwa na sifa.', fr: "Les éléments HTML ne peuvent pas avoir d'attributs." }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'Ordered lists use numbers or letters; unordered lists use bullets.', sw: 'Orodha zilizopangwa zinatumia nambari au herufi; orodha zisizopangwa zinatumia vibonye.', fr: "Les listes ordonnées utilisent des chiffres ou des lettres; les listes non ordonnées utilisent des puces." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Inline elements take up a small space, block elements take a full line.', sw: 'Vipengele vya mstari vinachukua nafasi ndogo, vipengele vya block vinachukua mstari mzima.', fr: "Les éléments inline occupent peu d'espace, les éléments block occupent toute une ligne." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'SECTION B – HTML MULTIPLE CHOICE (10 Marks):',
                        sw: 'SEHEMU B – HTML CHAGUO NYINGI (Alama 10):',
                        fr: 'SECTION B – HTML CHOIX MULTIPLE (10 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'The purpose of <h1> is:\nA. To create a main heading\nB. To write normal text\nC. To insert an image\nD. To link pages', sw: 'Lengo la <h1> ni:\nA. Kuunda kichwa kikuu\nB. Kuandika maandishi ya kawaida\nC. Kuingiza picha\nD. Kuunganisha kurasa', fr: "Le but de <h1> est:\nA. Créer un titre principal\nB. Écrire du texte normal\nC. Insérer une image\nD. Lier des pages" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The purpose of <p> is:\nA. To create a paragraph\nB. To create a link\nC. To insert an image\nD. To create a form', sw: 'Lengo la <p> ni:\nA. Kuunda aya\nB. Kuunda kiungo\nC. Kuingiza picha\nD. Kuunda fomu', fr: "Le but de <p> est:\nA. Créer un paragraphe\nB. Créer un lien\nC. Insérer une image\nD. Créer un formulaire" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The purpose of <a> is:\nA. To create a link\nB. To create an image\nC. To create a heading\nD. To create a paragraph', sw: 'Lengo la <a> ni:\nA. Kuunda kiungo\nB. Kuunda picha\nC. Kuunda kichwa\nD. Kuunda aya', fr: "Le but de <a> est:\nA. Créer un lien\nB. Créer une image\nC. Créer un titre\nD. Créer un paragraphe" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The purpose of <img> is:\nA. To display an image\nB. To write text\nC. To create a link\nD. To create a form', sw: 'Lengo la <img> ni:\nA. Kuonyesha picha\nB. Kuandika maandishi\nC. Kuunda kiungo\nD. Kuunda fomu', fr: "Le but de <img> est:\nA. Afficher une image\nB. Écrire du texte\nC. Créer un lien\nD. Créer un formulaire" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The purpose of <form> is:\nA. To connect pages\nB. To create user input forms\nC. To insert images\nD. To write text', sw: 'Lengo la <form> ni:\nA. Kuunganisha kurasa\nB. Kuunda fomu za kuingiza data\nC. Kuingiza picha\nD. Kuandika maandishi', fr: "Le but de <form> est:\nA. Connecter des pages\nB. Créer des formulaires de saisie\nC. Insérer des images\nD. Écrire du texte" }, answer: { en: 'B', sw: 'B', fr: 'B' } }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'SECTION C – CSS (15 Marks)\nTRUE/FALSE (5 Marks):',
                        sw: 'SEHEMU C – CSS (Alama 15)\nKWELI/SI KWELI (Alama 5):',
                        fr: 'SECTION C – CSS (15 Points)\nVRAI/FAUX (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'CSS is used to style and change the appearance of websites.', sw: 'CSS inatumika kupamba na kubadilisha muonekano wa tovuti.', fr: "CSS est utilisé pour styliser et changer l'apparence des sites web." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Inline CSS is written directly inside the tag, internal CSS is inside <style>, external CSS is in a separate file.', sw: 'CSS ya mstari imeandikwa moja kwa moja ndani ya lebo, CSS ya ndani iko ndani ya <style>, CSS ya nje iko kwenye faili tofauti.', fr: "Le CSS inline est écrit directement dans la balise, le CSS interne est dans <style>, le CSS externe est dans un fichier séparé." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'ID selectors and class selectors are exactly the same.', sw: 'Vichaguzi vya ID na vya class ni sawa kabisa.', fr: "Les sélecteurs ID et les sélecteurs de classe sont exactement les mêmes." }, answer: { en: 'FALSE', sw: 'SI KWELI', fr: 'FAUX' } },
                        { text: { en: 'The box model includes margin, border, padding, and content.', sw: 'Mfano wa sanduku unajumuisha ukingo, mpaka, nafasi ya ndani, na maudhui.', fr: 'Le modèle de boîte comprend la marge, la bordure, le rembourrage et le contenu.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Responsive design ensures a website looks good on all devices.', sw: 'Muundo wa majibu unahakikisha tovuti inaonekana vizuri kwenye vifaa vyote.', fr: "Le design responsif garantit qu'un site web s'affiche bien sur tous les appareils." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'SECTION C – CSS MULTIPLE CHOICE (5 Marks):',
                        sw: 'SEHEMU C – CSS CHAGUO NYINGI (Alama 5):',
                        fr: 'SECTION C – CSS CHOIX MULTIPLE (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'Inline CSS is written:\nA. Directly in the tag\nB. Inside a CSS file\nC. Directly in a form\nD. Directly in the header', sw: 'CSS ya mstari imeandikwa:\nA. Moja kwa moja ndani ya lebo\nB. Ndani ya faili ya CSS\nC. Moja kwa moja ndani ya fomu\nD. Moja kwa moja kwenye kichwa', fr: 'Le CSS inline est écrit:\nA. Directement dans la balise\nB. Dans un fichier CSS\nC. Directement dans un formulaire\nD. Directement dans l\'en-tête' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'SECTION D – JavaScript (15 Marks)\nTRUE/FALSE (5 Marks):',
                        sw: 'SEHEMU D – JavaScript (Alama 15)\nKWELI/SI KWELI (Alama 5):',
                        fr: 'SECTION D – JavaScript (15 Points)\nVRAI/FAUX (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'JavaScript is used to add interactivity to websites.', sw: 'JavaScript inatumika kuongeza ushirikiano kwenye tovuti.', fr: 'JavaScript est utilisé pour ajouter de l\'interactivité aux sites web.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Client-side scripting runs on the user\'s computer, server-side scripting runs on the server.', sw: 'Uandishi wa upande wa mteja unafanya kazi kwenye kompyuta ya mtumiaji, uandishi wa upande wa seva unafanya kazi kwenye seva.', fr: "Le scripting côté client s'exécute sur l'ordinateur de l'utilisateur, le scripting côté serveur s'exécute sur le serveur." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'A variable stores data.', sw: 'Kigezo kinahifadhi data.', fr: 'Une variable stocke des données.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Common events include click, hover, and submit.', sw: 'Matukio ya kawaida ni pamoja na kubonyeza, kuelea, na kuwasilisha.', fr: 'Les événements courants incluent clic, survol et soumission.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'alert(), prompt(), and console.log() are used to display messages or take input.', sw: 'alert(), prompt(), na console.log() zinatumika kuonyesha ujumbe au kupokea ingizo.', fr: 'alert(), prompt(), et console.log() sont utilisés pour afficher des messages ou prendre des entrées.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'SECTION D – JavaScript MULTIPLE CHOICE (5 Marks):',
                        sw: 'SEHEMU D – JavaScript CHAGUO NYINGI (Alama 5):',
                        fr: 'SECTION D – JavaScript CHOIX MULTIPLE (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'An example of a variable is:\nA. var name = "Juma";\nB. click = "button";\nC. run = 123;\nD. img = "picture";', sw: 'Mfano wa kigezo ni:\nA. var name = "Juma";\nB. click = "button";\nC. run = 123;\nD. img = "picha";', fr: 'Un exemple de variable est:\nA. var name = "Juma";\nB. click = "button";\nC. run = 123;\nD. img = "picture";' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'SECTION E – WordPress (20 Marks)\nTRUE/FALSE (10 Marks):',
                        sw: 'SEHEMU E – WordPress (Alama 20)\nKWELI/SI KWELI (Alama 10):',
                        fr: 'SECTION E – WordPress (20 Points)\nVRAI/FAUX (10 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'WordPress is a content management system (CMS).', sw: 'WordPress ni mfumo wa usimamizi wa maudhui (CMS).', fr: 'WordPress est un système de gestion de contenu (CMS).' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'WordPress.com is a hosted platform, WordPress.org is self-hosted.', sw: 'WordPress.com ni jukwaa linalohifadhiwa, WordPress.org ni la kujihifadhi.', fr: 'WordPress.com est une plateforme hébergée, WordPress.org est auto-hébergé.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: "A theme changes the website's appearance.", sw: 'Mandhari hubadilisha muonekano wa tovuti.', fr: "Un thème change l'apparence du site web." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'A plugin adds extra functionality to a website.', sw: 'Programu jalizi inaongeza utendaji wa ziada kwenye tovuti.', fr: 'Un plugin ajoute des fonctionnalités supplémentaires à un site web.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Widgets and menus help organize website sections.', sw: 'Wijeti na menyu husaidia kupanga sehemu za tovuti.', fr: 'Les widgets et menus aident à organiser les sections du site web.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'SECTION E – WordPress MULTIPLE CHOICE (10 Marks):',
                        sw: 'SEHEMU E – WordPress CHAGUO NYINGI (Alama 10):',
                        fr: 'SECTION E – WordPress CHOIX MULTIPLE (10 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'The meaning of a plugin is:\nA. A tool that adds functionality\nB. A free website\nC. HTML pages\nD. A data form', sw: 'Maana ya programu jalizi ni:\nA. Zana inayoongeza utendaji\nB. Tovuti ya bure\nC. Kurasa za HTML\nD. Fomu ya data', fr: "La signification d'un plugin est:\nA. Un outil qui ajoute des fonctionnalités\nB. Un site web gratuit\nC. Des pages HTML\nD. Un formulaire de données" }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                        { text: { en: 'The correct way to create a new post is:\nA. Posts → Add New\nB. Pages → Add New\nC. Widgets → Add New\nD. Plugins → Add New', sw: 'Njia sahihi ya kuunda chapisho jipya ni:\nA. Machapisho → Ongeza Mpya\nB. Kurasa → Ongeza Mpya\nC. Wijeti → Ongeza Mpya\nD. Programu Jalizi → Ongeza Mpya', fr: 'La bonne façon de créer un nouveau message est:\nA. Articles → Ajouter\nB. Pages → Ajouter\nC. Widgets → Ajouter\nD. Plugins → Ajouter' }, answer: { en: 'A', sw: 'A', fr: 'A' } },
                    ]
                },
                {
                    number: 11,
                    text: {
                        en: 'SECTION F – Website Development Concepts (15 Marks)\nTRUE/FALSE (5 Marks):',
                        sw: 'SEHEMU F – Dhana za Utengenezaji wa Tovuti (Alama 15)\nKWELI/SI KWELI (Alama 5):',
                        fr: 'SECTION F – Concepts de Développement Web (15 Points)\nVRAI/FAUX (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'UI is the user interface; UX is the user experience.', sw: 'UI ni kiolesura cha mtumiaji; UX ni uzoefu wa mtumiaji.', fr: "L'UI est l'interface utilisateur; l'UX est l'expérience utilisateur." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Website navigation helps users access pages easily.', sw: 'Urambazaji wa tovuti husaidia watumiaji kupata kurasa kwa urahisi.', fr: 'La navigation du site web aide les utilisateurs à accéder facilement aux pages.' }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Front-end development is the visible part; back-end is server-side.', sw: 'Utengenezaji wa mbele ni sehemu inayoonekana; sehemu ya nyuma ni ya seva.', fr: "Le développement front-end est la partie visible; le back-end est côté serveur." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'SEO ensures a website is visible in search engines.', sw: 'SEO inahakikisha tovuti inaonekana katika injini za utafutaji.', fr: "Le SEO garantit qu'un site web est visible dans les moteurs de recherche." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } },
                        { text: { en: 'Website security protects data, e.g., using HTTPS and strong passwords.', sw: 'Usalama wa tovuti unalinda data, k.m., kwa kutumia HTTPS na nywila kali.', fr: "La sécurité du site web protège les données, par exemple en utilisant HTTPS et des mots de passe forts." }, answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' } }
                    ]
                },
                {
                    number: 12,
                    text: {
                        en: 'SECTION F – Website Development MULTIPLE CHOICE (5 Marks):',
                        sw: 'SEHEMU F – Utengenezaji wa Tovuti CHAGUO NYINGI (Alama 5):',
                        fr: 'SECTION F – Développement Web CHOIX MULTIPLE (5 Points):'
                    },
                    subQuestions: [
                        { text: { en: 'The main advantage of SEO is:\nA. To increase website traffic\nB. To write content only\nC. To change website colors\nD. No purpose', sw: 'Faida kuu ya SEO ni:\nA. Kuongeza wageni wa tovuti\nB. Kuandika maudhui tu\nC. Kubadilisha rangi za tovuti\nD. Hakuna lengo', fr: "Le principal avantage du SEO est:\nA. Augmenter le trafic du site web\nB. Écrire du contenu uniquement\nC. Changer les couleurs du site\nD. Aucun but" }, answer: { en: 'A', sw: 'A', fr: 'A' } }
                    ]
                }
            ],
            instructions: {
                en: 'CHARLES ACADEMY – WEBSITE DESIGN – FINAL THEORY EXAM\n\nINSTRUCTIONS\n• Answer all questions.\n• For True/False, write the full word: TRUE or FALSE.\n• For Multiple Choice, write only the letter.\n• Time: 2 Hours\n• Total Marks: 100\n• Passing score: 60%',
                sw: 'CHARLES ACADEMY – UBUNIFU WA TOVUTI – MTIHANI WA MWISHO WA NADHARIA\n\nMAELEKEZO\n• Jibu maswali yote.\n• Kwa Kweli/Si Kweli, andika neno zima KWELI au SI KWELI.\n• Kwa Chaguo Nyingi, andika herufi tu.\n• Muda: Masaa 2\n• Jumla ya Alama: 100\n• Alama ya kupita: 60%',
                fr: 'CHARLES ACADEMY – CONCEPTION DE SITES WEB – EXAMEN THÉORIQUE FINAL\n\nINSTRUCTIONS\n• Répondez à toutes les questions.\n• Pour Vrai/Faux, écrivez le mot entier VRAI ou FAUX.\n• Pour le Choix Multiple, écrivez seulement la lettre.\n• Temps: 2 Heures\n• Total des points: 100\n• Score de passage: 60%'
            }
        }
    }
};

module.exports = examsData;

module.exports = examsData;