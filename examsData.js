// examsData.js - Contains all exam questions for all courses
const examsData = {
    // ==================== ENGLISH EXAMS ====================
    'english': {

        'writing_skills': {
            id: 'english_writing',
            title: {
                en: 'CHARLES ACADEMY FINAL EXAMINATION – WRITING SKILLS',
                sw: 'CHARLES ACADEMY MTIHANI WA MWISHO – UANDISHI',
                fr: 'CHARLES ACADEMY EXAMEN FINAL – COMPÉTENCES EN ÉCRITURE'
            },
            time: '2 Hours',
            totalMarks: 100,
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Write a correct sentence using the words given.',
                        sw: 'Andika sentensi sahihi kwa kutumia maneno uliyopewa.',
                        fr: 'Écrivez une phrase correcte en utilisant les mots donnés.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'I / like / English', sw: 'Mimi / penda / Kiingereza', fr: 'Je / aime / anglais' },
                            answer: { en: 'I like English.', sw: 'Mimi napenda Kiingereza.', fr: 'J\'aime l\'anglais.' }
                        },
                        {
                            text: { en: 'She / go / school / every day', sw: 'Yeye / kwenda / shule / kila siku', fr: 'Elle / aller / école / chaque jour' },
                            answer: { en: 'She goes to school every day.', sw: 'Yeye huenda shuleni kila siku.', fr: 'Elle va à l\'école chaque jour.' }
                        },
                        {
                            text: { en: 'They / play / football', sw: 'Wao / cheza / mpira', fr: 'Ils / jouer / football' },
                            answer: { en: 'They play football.', sw: 'Wao hucheza mpira.', fr: 'Ils jouent au football.' }
                        },
                        {
                            text: { en: 'We / study / hard', sw: 'Sisi / soma / kwa bidii', fr: 'Nous / étudier / dur' },
                            answer: { en: 'We study hard.', sw: 'Sisi husoma kwa bidii.', fr: 'Nous étudions dur.' }
                        },
                        {
                            text: { en: 'He / have / a book', sw: 'Yeye / kuwa na / kitabu', fr: 'Il / avoir / un livre' },
                            answer: { en: 'He has a book.', sw: 'Yeye ana kitabu.', fr: 'Il a un livre.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'Complete the sentences using appropriate words.',
                        sw: 'Kamilisha sentensi kwa kutumia maneno yanayofaa.',
                        fr: 'Complétez les phrases en utilisant des mots appropriés.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'My name is ______________________________', sw: 'Jina langu ni ______________________________', fr: 'Mon nom est ______________________________' },
                            answer: { en: 'My name is [Student Name].', sw: 'Jina langu ni [Jina la Mwanafunzi].', fr: 'Mon nom est [Nom de l\'étudiant].' }
                        },
                        {
                            text: { en: 'I am ______ years old', sw: 'Nina umri wa ______ miaka', fr: 'J\'ai ______ ans' },
                            answer: { en: 'I am [age] years old.', sw: 'Nina umri wa [umri] miaka.', fr: 'J\'ai [âge] ans.' }
                        },
                        {
                            text: { en: 'I come from ___________________________', sw: 'Ninatoka ___________________________', fr: 'Je viens de ___________________________' },
                            answer: { en: 'I come from [country/city].', sw: 'Ninatoka [nchi/mji].', fr: 'Je viens de [pays/ville].' }
                        },
                        {
                            text: { en: 'My favorite subject is __________________', sw: 'Somo langu napendalo ni __________________', fr: 'Ma matière préférée est __________________' },
                            answer: { en: 'My favorite subject is [subject].', sw: 'Somo langu napendalo ni [somo].', fr: 'Ma matière préférée est [matière].' }
                        },
                        {
                            text: { en: 'I want to learn English because ___________________', sw: 'Nataka kujifunza Kiingereza kwa sababu ___________________', fr: 'Je veux apprendre l\'anglais parce que ___________________' },
                            answer: { en: 'I want to learn English because [reason].', sw: 'Nataka kujifunza Kiingereza kwa sababu [sababu].', fr: 'Je veux apprendre l\'anglais parce que [raison].' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'Rearrange the words to form correct sentences.',
                        sw: 'Panga upya maneno kuunda sentensi sahihi.',
                        fr: 'Réarrangez les mots pour former des phrases correctes.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'English / learning / am / I', sw: 'Kiingereza / kujifunza / nina / Mimi', fr: 'Anglais / apprendre / suis / Je' },
                            answer: { en: 'I am learning English.', sw: 'Mimi ninajifunza Kiingereza.', fr: 'Je suis en train d\'apprendre l\'anglais.' }
                        },
                        {
                            text: { en: 'every / school / go / day / I', sw: 'kila / shule / kwenda / siku / Mimi', fr: 'chaque / école / aller / jour / Je' },
                            answer: { en: 'I go to school every day.', sw: 'Mimi huenda shuleni kila siku.', fr: 'Je vais à l\'école chaque jour.' }
                        },
                        {
                            text: { en: 'teacher / our / kind / is', sw: 'mwalimu / wetu / mwema / ni', fr: 'professeur / notre / gentil / est' },
                            answer: { en: 'Our teacher is kind.', sw: 'Mwalimu wetu ni mwema.', fr: 'Notre professeur est gentil.' }
                        },
                        {
                            text: { en: 'books / reading / enjoy / I', sw: 'vitabu / kusoma / furahia / Mimi', fr: 'livres / lire / aime / Je' },
                            answer: { en: 'I enjoy reading books.', sw: 'Mimi nahisi furaha kusoma vitabu.', fr: 'J\'aime lire des livres.' }
                        },
                        {
                            text: { en: 'homework / students / do / their', sw: 'kazi ya nyumbani / wanafunzi / fanya / zao', fr: 'devoirs / étudiants / faire / leurs' },
                            answer: { en: 'Students do their homework.', sw: 'Wanafunzi hufanya kazi yao ya nyumbani.', fr: 'Les étudiants font leurs devoirs.' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'Rewrite the sentence as instructed.',
                        sw: 'Andika upya sentensi kama ilivyoagizwa.',
                        fr: 'Réécrivez la phrase comme demandé.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'She likes tea. (Change to negative)', sw: 'Yeye anapenda chai. (Badilisha kuwa hasi)', fr: 'Elle aime le thé. (Changez en négatif)' },
                            answer: { en: 'She does not like tea.', sw: 'Yeye hapendi chai.', fr: 'Elle n\'aime pas le thé.' }
                        },
                        {
                            text: { en: 'He is a teacher. (Change to question)', sw: 'Yeye ni mwalimu. (Badilisha kuwa swali)', fr: 'Il est professeur. (Changez en question)' },
                            answer: { en: 'Is he a teacher?', sw: 'Je, yeye ni mwalimu?', fr: 'Est-il professeur?' }
                        },
                        {
                            text: { en: 'They are happy. (Change to past tense)', sw: 'Wao ni wenye furaha. (Badilisha kuwa wakati uliopita)', fr: 'Ils sont heureux. (Changez au passé)' },
                            answer: { en: 'They were happy.', sw: 'Walikuwa wenye furaha.', fr: 'Ils étaient heureux.' }
                        },
                        {
                            text: { en: 'I went to school. (Change to future tense)', sw: 'Nilikwenda shuleni. (Badilisha kuwa wakati ujao)', fr: 'Je suis allé à l\'école. (Changez au futur)' },
                            answer: { en: 'I will go to school.', sw: 'Nitakwenda shuleni.', fr: 'J\'irai à l\'école.' }
                        },
                        {
                            text: { en: 'She can swim. (Change to negative)', sw: 'Yeye anaweza kuogelea. (Badilisha kuwa hasi)', fr: 'Elle sait nager. (Changez en négatif)' },
                            answer: { en: 'She cannot swim.', sw: 'Yeye hawezi kuogelea.', fr: 'Elle ne sait pas nager.' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'Write a short paragraph (3–4 sentences) on the following prompt.',
                        sw: 'Andika kifungu kifupi (sentensi 3–4) kuhusu mada zifuatazo.',
                        fr: 'Écrivez un court paragraphe (3–4 phrases) sur les sujets suivants.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'My Favorite Subject', sw: 'Somo Napendalo', fr: 'Ma matière préférée' },
                            answer: { en: '[Student writes 3-4 sentences about their favorite subject]', sw: '[Mwanafunzi anaandika sentensi 3-4 kuhusu somo analopenda]', fr: '[L\'étudiant écrit 3-4 phrases sur sa matière préférée]' }
                        },
                        {
                            text: { en: 'My Daily Routine', sw: 'Mazoea Yangu Ya Kila Siku', fr: 'Ma routine quotidienne' },
                            answer: { en: '[Student writes 3-4 sentences about their daily routine]', sw: '[Mwanafunzi anaandika sentensi 3-4 kuhusu mazoea yake ya kila siku]', fr: '[L\'étudiant écrit 3-4 phrases sur sa routine quotidienne]' }
                        },
                        {
                            text: { en: 'My School', sw: 'Shule Yangu', fr: 'Mon école' },
                            answer: { en: '[Student writes 3-4 sentences about their school]', sw: '[Mwanafunzi anaandika sentensi 3-4 kuhusu shule yake]', fr: '[L\'étudiant écrit 3-4 phrases sur son école]' }
                        },
                        {
                            text: { en: 'My Family', sw: 'Familia Yangu', fr: 'Ma famille' },
                            answer: { en: '[Student writes 3-4 sentences about their family]', sw: '[Mwanafunzi anaandika sentensi 3-4 kuhusu familia yake]', fr: '[L\'étudiant écrit 3-4 phrases sur sa famille]' }
                        },
                        {
                            text: { en: 'My Hobbies', sw: 'Shughuli Zangu', fr: 'Mes passe-temps' },
                            answer: { en: '[Student writes 3-4 sentences about their hobbies]', sw: '[Mwanafunzi anaandika sentensi 3-4 kuhusu shughuli zake]', fr: '[L\'étudiant écrit 3-4 phrases sur ses passe-temps]' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'Answer briefly using full sentences.',
                        sw: 'Jibu kwa ufupi kwa kutumia sentensi kamili.',
                        fr: 'Répondez brièvement en utilisant des phrases complètes.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What do you do every morning?', sw: 'Unafanya nini kila asubuhi?', fr: 'Que fais-tu chaque matin?' },
                            answer: { en: 'I wake up, brush my teeth, and have breakfast.', sw: 'Ninaamka, nasua meno, na kula kiamsha kinywa.', fr: 'Je me réveille, je me brosse les dents et je prends le petit déjeuner.' }
                        },
                        {
                            text: { en: 'What do you do after school?', sw: 'Unafanya nini baada ya shule?', fr: 'Que fais-tu après l\'école?' },
                            answer: { en: 'I do my homework and help with household chores.', sw: 'Ninafanya kazi yangu ya nyumbani na kusaidia kwenye kazi za nyumbani.', fr: 'Je fais mes devoirs et j\'aide aux tâches ménagères.' }
                        },
                        {
                            text: { en: 'What is your favorite subject and why?', sw: 'Somo lako napendalo ni nini na kwa nini?', fr: 'Quelle est ta matière préférée et pourquoi?' },
                            answer: { en: 'My favorite subject is English because it is interesting and useful.', sw: 'Somo langu napendalo ni Kiingereza kwa sababu ni la kuvutia na muhimu.', fr: 'Ma matière préférée est l\'anglais parce que c\'est intéressant et utile.' }
                        },
                        {
                            text: { en: 'What do you do on weekends?', sw: 'Unafanya nini wikendi?', fr: 'Que fais-tu le week-end?' },
                            answer: { en: 'I rest, visit friends, and sometimes go to the market.', sw: 'Napumzika, nawatembelea marafiki, na wakati mwingine ninaenda sokoni.', fr: 'Je me repose, je visite des amis et parfois je vais au marché.' }
                        },
                        {
                            text: { en: 'How do you help your family at home?', sw: 'Unasaidiaje familia yako nyumbani?', fr: 'Comment aides-tu ta famille à la maison?' },
                            answer: { en: 'I help by cleaning the house, washing dishes, and caring for siblings.', sw: 'Ninasaidia kwa kusafisha nyumba, kuosha vyombo, na kuwatunza ndugu zangu.', fr: 'J\'aide en nettoyant la maison, en lavant la vaisselle et en m\'occupant de mes frères et sœurs.' }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'Complete the sentences using correct tenses.',
                        sw: 'Kamilisha sentensi kwa kutumia nyakati sahihi.',
                        fr: 'Complétez les phrases en utilisant les temps corrects.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'I _____ (study) English now.', sw: 'Mimi _____ (soma) Kiingereza sasa.', fr: 'Je _____ (étudier) l\'anglais maintenant.' },
                            answer: { en: 'am studying', sw: 'ninasoma', fr: 'étudie' }
                        },
                        {
                            text: { en: 'She _____ (go) to school yesterday.', sw: 'Yeye _____ (kwenda) shuleni jana.', fr: 'Elle _____ (aller) à l\'école hier.' },
                            answer: { en: 'went', sw: 'alienda', fr: 'est allée' }
                        },
                        {
                            text: { en: 'They _____ (visit) the library tomorrow.', sw: 'Wao _____ (tembelea) maktaba kesho.', fr: 'Ils _____ (visiter) la bibliothèque demain.' },
                            answer: { en: 'will visit', sw: 'watatembelea', fr: 'visiteront' }
                        },
                        {
                            text: { en: 'He _____ (finish) homework already.', sw: 'Yeye _____ (maliza) kazi ya nyumbani tayari.', fr: 'Il _____ (finir) les devoirs déjà.' },
                            answer: { en: 'has finished', sw: 'ameshamaliza', fr: 'a fini' }
                        },
                        {
                            text: { en: 'We _____ (play) football last week.', sw: 'Sisi _____ (cheza) mpira wiki iliyopita.', fr: 'Nous _____ (jouer) au football la semaine dernière.' },
                            answer: { en: 'played', sw: 'tulicheza', fr: 'avons joué' }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'Change the form of the sentence.',
                        sw: 'Badilisha umbo la sentensi.',
                        fr: 'Changez la forme de la phrase.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'He is tall. (Change to comparative)', sw: 'Yeye ni mrefu. (Badilisha kuwa kulinganisha)', fr: 'Il est grand. (Changez en comparatif)' },
                            answer: { en: 'He is taller.', sw: 'Yeye ni mrefu zaidi.', fr: 'Il est plus grand.' }
                        },
                        {
                            text: { en: 'This is a good book. (Change to superlative)', sw: 'Hiki ni kitabu kizuri. (Badilisha kuwa kushinda)', fr: 'C\'est un bon livre. (Changez en superlatif)' },
                            answer: { en: 'This is the best book.', sw: 'Hiki ndicho kitabu bora zaidi.', fr: 'C\'est le meilleur livre.' }
                        },
                        {
                            text: { en: 'I like English. (Add "because")', sw: 'Napenda Kiingereza. (Ongeza "kwa sababu")', fr: 'J\'aime l\'anglais. (Ajoutez "parce que")' },
                            answer: { en: 'I like English because it is interesting.', sw: 'Napenda Kiingereza kwa sababu ni ya kuvutia.', fr: 'J\'aime l\'anglais parce que c\'est intéressant.' }
                        },
                        {
                            text: { en: 'She is sick. She goes to school. (Join with "although")', sw: 'Yeye ni mgonjwa. Yeye huenda shuleni. (Unganisha kwa "ingawa")', fr: 'Elle est malade. Elle va à l\'école. (Joignez avec "bien que")' },
                            answer: { en: 'Although she is sick, she goes to school.', sw: 'Ingawa yeye ni mgonjwa, huenda shuleni.', fr: 'Bien qu\'elle soit malade, elle va à l\'école.' }
                        },
                        {
                            text: { en: 'I saw a man. (Add correct article)', sw: 'Nilimwona mtu. (Ongeza kiambishi sahihi)', fr: 'J\'ai vu homme. (Ajoutez l\'article correct)' },
                            answer: { en: 'I saw a man.', sw: 'Nilimwona mtu.', fr: 'J\'ai vu un homme.' }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'Write a sentence using the given word.',
                        sw: 'Andika sentensi kwa kutumia neno lililotolewa.',
                        fr: 'Écrivez une phrase en utilisant le mot donné.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Future', sw: 'Baadaye', fr: 'Avenir' },
                            answer: { en: 'I want to become a teacher in the future.', sw: 'Nataka kuwa mwalimu baadaye.', fr: 'Je veux devenir professeur dans l\'avenir.' }
                        },
                        {
                            text: { en: 'Family', sw: 'Familia', fr: 'Famille' },
                            answer: { en: 'My family is very important to me.', sw: 'Familia yangu ni muhimu sana kwangu.', fr: 'Ma famille est très importante pour moi.' }
                        },
                        {
                            text: { en: 'School', sw: 'Shule', fr: 'École' },
                            answer: { en: 'I go to school every day to learn.', sw: 'Ninaenda shuleni kila siku kujifunza.', fr: 'Je vais à l\'école chaque jour pour apprendre.' }
                        },
                        {
                            text: { en: 'Friends', sw: 'Marafiki', fr: 'Amis' },
                            answer: { en: 'I have many friends at school.', sw: 'Nina marafiki wengi shuleni.', fr: 'J\'ai beaucoup d\'amis à l\'école.' }
                        },
                        {
                            text: { en: 'Education', sw: 'Elimu', fr: 'Éducation' },
                            answer: { en: 'Education is the key to success.', sw: 'Elimu ndio ufunguo wa mafanikio.', fr: 'L\'éducation est la clé du succès.' }
                        }
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'Change the sentences to passive voice.',
                        sw: 'Badilisha sentensi kuwa sauti ya kufanywa.',
                        fr: 'Changez les phrases en voix passive.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'She writes a letter.', sw: 'Yeye anaandika barua.', fr: 'Elle écrit une lettre.' },
                            answer: { en: 'A letter is written by her.', sw: 'Barua imeandikwa naye.', fr: 'Une lettre est écrite par elle.' }
                        },
                        {
                            text: { en: 'They built a house.', sw: 'Wao walijenga nyumba.', fr: 'Ils ont construit une maison.' },
                            answer: { en: 'A house was built by them.', sw: 'Nyumba ilijengwa nao.', fr: 'Une maison a été construite par eux.' }
                        },
                        {
                            text: { en: 'He eats food.', sw: 'Yeye anakula chakula.', fr: 'Il mange de la nourriture.' },
                            answer: { en: 'Food is eaten by him.', sw: 'Chakula kinakuliwa naye.', fr: 'La nourriture est mangée par lui.' }
                        },
                        {
                            text: { en: 'We clean the room.', sw: 'Sisi tunasafisha chumba.', fr: 'Nous nettoyons la pièce.' },
                            answer: { en: 'The room is cleaned by us.', sw: 'Chumba kinasafishwa nasi.', fr: 'La pièce est nettoyée par nous.' }
                        },
                        {
                            text: { en: 'She teaches English.', sw: 'Yeye anafundisha Kiingereza.', fr: 'Elle enseigne l\'anglais.' },
                            answer: { en: 'English is taught by her.', sw: 'Kiingereza kinafundishwa naye.', fr: 'L\'anglais est enseigné par elle.' }
                        }
                    ]
                },
                {
                    number: 11,
                    text: {
                        en: 'Write a short paragraph (5–6 sentences) describing your school.',
                        sw: 'Andika kifungu kifupi (sentensi 5–6) kuelezea shule yako.',
                        fr: 'Écrivez un court paragraphe (5–6 phrases) décrivant votre école.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Include subjects you study', sw: 'Jumuisha masomo unayosoma', fr: 'Incluez les matières que vous étudiez' },
                            answer: { en: 'I study many subjects including English, Mathematics, and Science.', sw: 'Ninasoma masomo mengi ikiwemo Kiingereza, Hisabati, na Sayansi.', fr: 'J\'étudie de nombreuses matières dont l\'anglais, les mathématiques et les sciences.' }
                        },
                        {
                            text: { en: 'Include your teachers', sw: 'Jumuisha waalimu wako', fr: 'Incluez vos professeurs' },
                            answer: { en: 'My teachers are kind and help us learn new things.', sw: 'Waalimu wangu ni wema na wanatusaidia kujifunza mambo mapya.', fr: 'Mes professeurs sont gentils et nous aident à apprendre de nouvelles choses.' }
                        },
                        {
                            text: { en: 'Include your classroom', sw: 'Jumuisha darasa lako', fr: 'Incluez votre salle de classe' },
                            answer: { en: 'Our classroom is clean and has many books.', sw: 'Darasa letu ni safi na lina vitabu vingi.', fr: 'Notre salle de classe est propre et a beaucoup de livres.' }
                        },
                        {
                            text: { en: 'Include your classmates', sw: 'Jumuisha wenzako darasani', fr: 'Incluez vos camarades de classe' },
                            answer: { en: 'My classmates are friendly and we help each other.', sw: 'Wenzangu darasani ni wenye urafiki na tunasaidiana.', fr: 'Mes camarades de classe sont amicaux et nous nous aidons mutuellement.' }
                        },
                        {
                            text: { en: 'Include something you like about school', sw: 'Jumuisha kitu unachokipenda kuhusu shule', fr: 'Incluez quelque chose que vous aimez à propos de l\'école' },
                            answer: { en: 'I like school because I can learn and play with friends.', sw: 'Napenda shule kwa sababu naweza kujifunza na kucheza na marafiki.', fr: 'J\'aime l\'école parce que je peux apprendre et jouer avec des amis.' }
                        }
                    ]
                },
                {
                    number: 12,
                    text: {
                        en: 'Answer questions in complete sentences.',
                        sw: 'Jibu maswali kwa sentensi kamili.',
                        fr: 'Répondez aux questions en phrases complètes.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What is your favorite subject?', sw: 'Somo lako napendalo ni nini?', fr: 'Quelle est ta matière préférée?' },
                            answer: { en: 'My favorite subject is English.', sw: 'Somo langu napendalo ni Kiingereza.', fr: 'Ma matière préférée est l\'anglais.' }
                        },
                        {
                            text: { en: 'Why do you like it?', sw: 'Kwa nini unalipenda?', fr: 'Pourquoi l\'aimes-tu?' },
                            answer: { en: 'I like it because it helps me communicate with people.', sw: 'Nalipenda kwa sababu inanisaidia kuwasiliana na watu.', fr: 'Je l\'aime parce que cela m\'aide à communiquer avec les gens.' }
                        },
                        {
                            text: { en: 'How often do you study English?', sw: 'Unasoma Kiingereza mara ngapi?', fr: 'Combien de fois étudies-tu l\'anglais?' },
                            answer: { en: 'I study English every day.', sw: 'Ninasoma Kiingereza kila siku.', fr: 'J\'étudie l\'anglais tous les jours.' }
                        },
                        {
                            text: { en: 'What materials do you use to study?', sw: 'Unatumia vifaa gani kusoma?', fr: 'Quels matériaux utilises-tu pour étudier?' },
                            answer: { en: 'I use books, notebooks, and a dictionary.', sw: 'Natumia vitabu, daftari, na kamusi.', fr: 'J\'utilise des livres, des cahiers et un dictionnaire.' }
                        },
                        {
                            text: { en: 'How does studying help you?', sw: 'Kusoma kunakusaidiaje?', fr: 'Comment étudier t\'aide-t-il?' },
                            answer: { en: 'Studying helps me gain knowledge and improve my skills.', sw: 'Kusoma kunasaidia kupata maarifa na kuboresha ujuzi wangu.', fr: 'Étudier m\'aide à acquérir des connaissances et à améliorer mes compétences.' }
                        }
                    ]
                },
                {
                    number: 13,
                    text: {
                        en: 'Write correct forms of the verb.',
                        sw: 'Andika umbo sahihi la kitenzi.',
                        fr: 'Écrivez les formes correctes du verbe.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'I _____ (go) to school every day.', sw: 'Mimi _____ (kwenda) shuleni kila siku.', fr: 'Je _____ (aller) à l\'école tous les jours.' },
                            answer: { en: 'go', sw: 'ninaenda', fr: 'vais' }
                        },
                        {
                            text: { en: 'She _____ (read) a book now.', sw: 'Yeye _____ (soma) kitabu sasa.', fr: 'Elle _____ (lire) un livre maintenant.' },
                            answer: { en: 'is reading', sw: 'anasoma', fr: 'lit' }
                        },
                        {
                            text: { en: 'They _____ (watch) TV yesterday.', sw: 'Wao _____ (angalia) TV jana.', fr: 'Ils _____ (regarder) la télévision hier.' },
                            answer: { en: 'watched', sw: 'walitazama', fr: 'ont regardé' }
                        },
                        {
                            text: { en: 'We _____ (play) football tomorrow.', sw: 'Sisi _____ (cheza) mpira kesho.', fr: 'Nous _____ (jouer) au football demain.' },
                            answer: { en: 'will play', sw: 'tutacheza', fr: 'jouerons' }
                        },
                        {
                            text: { en: 'He _____ (finish) homework already.', sw: 'Yeye _____ (maliza) kazi ya nyumbani tayari.', fr: 'Il _____ (finir) les devoirs déjà.' },
                            answer: { en: 'has finished', sw: 'ameshamaliza', fr: 'a fini' }
                        }
                    ]
                },
                {
                    number: 14,
                    text: {
                        en: 'Write sentences using the following conjunctions.',
                        sw: 'Andika sentensi kwa kutumia viunganishi vifuatavyo.',
                        fr: 'Écrivez des phrases en utilisant les conjonctions suivantes.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'and', sw: 'na', fr: 'et' },
                            answer: { en: 'I study English and Mathematics.', sw: 'Ninasoma Kiingereza na Hisabati.', fr: 'J\'étudie l\'anglais et les mathématiques.' }
                        },
                        {
                            text: { en: 'but', sw: 'lakini', fr: 'mais' },
                            answer: { en: 'I was tired but I finished my work.', sw: 'Nilikuwa nimechoka lakini nilimaliza kazi yangu.', fr: 'J\'étais fatigué mais j\'ai fini mon travail.' }
                        },
                        {
                            text: { en: 'because', sw: 'kwa sababu', fr: 'parce que' },
                            answer: { en: 'I study hard because I want to pass.', sw: 'Ninasoma kwa bidii kwa sababu nataka kufaulu.', fr: 'J\'étudie dur parce que je veux réussir.' }
                        },
                        {
                            text: { en: 'although', sw: 'ingawa', fr: 'bien que' },
                            answer: { en: 'Although it was raining, we went to school.', sw: 'Ingawa ilikuwa inanyesha, tulikwenda shuleni.', fr: 'Bien qu\'il pleuvait, nous sommes allés à l\'école.' }
                        },
                        {
                            text: { en: 'if', sw: 'kama', fr: 'si' },
                            answer: { en: 'If I study, I will pass the exam.', sw: 'Kama nitasoma, nitafaulu mtihani.', fr: 'Si j\'étudie, je réussirai l\'examen.' }
                        }
                    ]
                },
                {
                    number: 15,
                    text: {
                        en: 'Describe your best friend in 4–5 sentences.',
                        sw: 'Elezea rafiki yako bora kwa sentensi 4–5.',
                        fr: 'Décrivez votre meilleur ami en 4–5 phrases.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Name', sw: 'Jina', fr: 'Nom' },
                            answer: { en: 'My best friend\'s name is John.', sw: 'Jina la rafiki yangu bora ni John.', fr: 'Le nom de mon meilleur ami est Jean.' }
                        },
                        {
                            text: { en: 'Age', sw: 'Umri', fr: 'Âge' },
                            answer: { en: 'He is 15 years old.', sw: 'Yeye ana umri wa miaka 15.', fr: 'Il a 15 ans.' }
                        },
                        {
                            text: { en: 'Appearance', sw: 'Mwonekano', fr: 'Apparence' },
                            answer: { en: 'He is tall and has black hair.', sw: 'Yeye ni mrefu na ana nywele nyeusi.', fr: 'Il est grand et a les cheveux noirs.' }
                        },
                        {
                            text: { en: 'Personality', sw: 'Tabia', fr: 'Personnalité' },
                            answer: { en: 'He is kind, funny, and helpful.', sw: 'Yeye ni mwema, mcheshi, na mwenye kusaidia.', fr: 'Il est gentil, drôle et serviable.' }
                        },
                        {
                            text: { en: 'Why you like him/her', sw: 'Kwa nini unampenda', fr: 'Pourquoi tu l\'aimes' },
                            answer: { en: 'I like him because he is honest and always supports me.', sw: 'Ninampenda kwa sababu ni mwaminifu na hunisaidia kila mara.', fr: 'Je l\'aime parce qu\'il est honnête et me soutient toujours.' }
                        }
                    ]
                },
                {
                    number: 16,
                    text: {
                        en: 'Complete the sentences using the correct preposition.',
                        sw: 'Kamilisha sentensi kwa kutumia kiambishi sahihi.',
                        fr: 'Complétez les phrases en utilisant la préposition correcte.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'The book is _____ the table.', sw: 'Kitabu kiko _____ meza.', fr: 'Le livre est _____ la table.' },
                            answer: { en: 'on', sw: 'juu ya', fr: 'sur' }
                        },
                        {
                            text: { en: 'He goes to school _____ the morning.', sw: 'Yeye huenda shuleni _____ asubuhi.', fr: 'Il va à l\'école _____ le matin.' },
                            answer: { en: 'in', sw: 'asubuhi', fr: 'le' }
                        },
                        {
                            text: { en: 'She lives _____ Burundi.', sw: 'Yeye anaishi _____ Burundi.', fr: 'Elle habite _____ Burundi.' },
                            answer: { en: 'in', sw: 'Burundi', fr: 'au' }
                        },
                        {
                            text: { en: 'We will meet _____ 5 p.m.', sw: 'Tutakutana _____ saa kumi na moja.', fr: 'Nous nous rencontrerons _____ 17h00.' },
                            answer: { en: 'at', sw: 'saa', fr: 'à' }
                        },
                        {
                            text: { en: 'The cat is hiding _____ the chair.', sw: 'Paka amejificha _____ kiti.', fr: 'Le chat se cache _____ la chaise.' },
                            answer: { en: 'under', sw: 'chini ya', fr: 'sous' }
                        }
                    ]
                },
                {
                    number: 17,
                    text: {
                        en: 'Write questions from the answers provided.',
                        sw: 'Andika maswali kutoka kwa majibu yaliyotolewa.',
                        fr: 'Écrivez les questions à partir des réponses fournies.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Answer: I wake up at 6 a.m.', sw: 'Jibu: Ninaamka saa sita asubuhi.', fr: 'Réponse: Je me réveille à 6h00.' },
                            answer: { en: 'What time do you wake up?', sw: 'Unaamka saa ngapi?', fr: 'À quelle heure te réveilles-tu?' }
                        },
                        {
                            text: { en: 'Answer: I like English.', sw: 'Jibu: Napenda Kiingereza.', fr: 'Réponse: J\'aime l\'anglais.' },
                            answer: { en: 'What subject do you like?', sw: 'Unapenda somo gani?', fr: 'Quelle matière aimes-tu?' }
                        },
                        {
                            text: { en: 'Answer: My favorite subject is Mathematics.', sw: 'Jibu: Somo langu napendalo ni Hisabati.', fr: 'Réponse: Ma matière préférée est les mathématiques.' },
                            answer: { en: 'What is your favorite subject?', sw: 'Somo lako napendalo ni nini?', fr: 'Quelle est ta matière préférée?' }
                        },
                        {
                            text: { en: 'Answer: I go to school every day.', sw: 'Jibu: Ninaenda shuleni kila siku.', fr: 'Réponse: Je vais à l\'école tous les jours.' },
                            answer: { en: 'How often do you go to school?', sw: 'Unaenda shuleni mara ngapi?', fr: 'Combien de fois vas-tu à l\'école?' }
                        },
                        {
                            text: { en: 'Answer: I study using books and notes.', sw: 'Jibu: Ninasoma kwa kutumia vitabu na maelezo.', fr: 'Réponse: J\'étudie en utilisant des livres et des notes.' },
                            answer: { en: 'How do you study?', sw: 'Unasomaje?', fr: 'Comment étudies-tu?' }
                        }
                    ]
                },
                {
                    number: 18,
                    text: {
                        en: 'Write a short paragraph (5–6 sentences) on one of the following.',
                        sw: 'Andika kifungu kifupi (sentensi 5–6) kuhusu moja ya yafuatayo.',
                        fr: 'Écrivez un court paragraphe (5–6 phrases) sur l\'un des sujets suivants.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'My Hobbies', sw: 'Shughuli Zangu', fr: 'Mes passe-temps' },
                            answer: { en: '[Student writes 5-6 sentences about their hobbies]', sw: '[Mwanafunzi anaandika sentensi 5-6 kuhusu shughuli zake]', fr: '[L\'étudiant écrit 5-6 phrases sur ses passe-temps]' }
                        },
                        {
                            text: { en: 'My Family', sw: 'Familia Yangu', fr: 'Ma famille' },
                            answer: { en: '[Student writes 5-6 sentences about their family]', sw: '[Mwanafunzi anaandika sentensi 5-6 kuhusu familia yake]', fr: '[L\'étudiant écrit 5-6 phrases sur sa famille]' }
                        },
                        {
                            text: { en: 'My School Life', sw: 'Maisha Yangu Shuleni', fr: 'Ma vie scolaire' },
                            answer: { en: '[Student writes 5-6 sentences about their school life]', sw: '[Mwanafunzi anaandika sentensi 5-6 kuhusu maisha yake shuleni]', fr: '[L\'étudiant écrit 5-6 phrases sur sa vie scolaire]' }
                        },
                        {
                            text: { en: 'My Best Friend', sw: 'Rafiki Yangu Bora', fr: 'Mon meilleur ami' },
                            answer: { en: '[Student writes 5-6 sentences about their best friend]', sw: '[Mwanafunzi anaandika sentensi 5-6 kuhusu rafiki yake bora]', fr: '[L\'étudiant écrit 5-6 phrases sur son meilleur ami]' }
                        },
                        {
                            text: { en: 'My Daily Routine', sw: 'Mazoea Yangu Ya Kila Siku', fr: 'Ma routine quotidienne' },
                            answer: { en: '[Student writes 5-6 sentences about their daily routine]', sw: '[Mwanafunzi anaandika sentensi 5-6 kuhusu mazoea yake ya kila siku]', fr: '[L\'étudiant écrit 5-6 phrases sur sa routine quotidienne]' }
                        }
                    ]
                },
                {
                    number: 19,
                    text: {
                        en: 'Correct the mistakes in the sentences.',
                        sw: 'Sahihisha makosa katika sentensi.',
                        fr: 'Corrigez les erreurs dans les phrases.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'She go to school every day.', sw: 'Yeye kwenda shuleni kila siku.', fr: 'Elle aller à l\'école chaque jour.' },
                            answer: { en: 'She goes to school every day.', sw: 'Yeye huenda shuleni kila siku.', fr: 'Elle va à l\'école chaque jour.' }
                        },
                        {
                            text: { en: 'I am like reading books.', sw: 'Mimi ni kama kusoma vitabu.', fr: 'Je suis comme lire des livres.' },
                            answer: { en: 'I like reading books.', sw: 'Napenda kusoma vitabu.', fr: 'J\'aime lire des livres.' }
                        },
                        {
                            text: { en: 'They is playing football.', sw: 'Wao ni kucheza mpira.', fr: 'Ils est jouer au football.' },
                            answer: { en: 'They are playing football.', sw: 'Wao wanacheza mpira.', fr: 'Ils jouent au football.' }
                        },
                        {
                            text: { en: 'He don\'t like vegetables.', sw: 'Yeye si kipenda mboga.', fr: 'Il ne pas aimer légumes.' },
                            answer: { en: 'He doesn\'t like vegetables.', sw: 'Yeye hapendi mboga.', fr: 'Il n\'aime pas les légumes.' }
                        },
                        {
                            text: { en: 'We was happy yesterday.', sw: 'Sisi alikuwa na furaha jana.', fr: 'Nous était heureux hier.' },
                            answer: { en: 'We were happy yesterday.', sw: 'Sisi tulikuwa na furaha jana.', fr: 'Nous étions heureux hier.' }
                        }
                    ]
                },
                {
                    number: 20,
                    text: {
                        en: 'Write 5 sentences about your goals in life.',
                        sw: 'Andika sentensi 5 kuhusu malengo yako maishani.',
                        fr: 'Écrivez 5 phrases sur vos objectifs dans la vie.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Sentence 1', sw: 'Sentensi 1', fr: 'Phrase 1' },
                            answer: { en: '[Student writes their first goal]', sw: '[Mwanafunzi anaandika lengo lake la kwanza]', fr: '[L\'étudiant écrit son premier objectif]' }
                        },
                        {
                            text: { en: 'Sentence 2', sw: 'Sentensi 2', fr: 'Phrase 2' },
                            answer: { en: '[Student writes their second goal]', sw: '[Mwanafunzi anaandika lengo lake la pili]', fr: '[L\'étudiant écrit son deuxième objectif]' }
                        },
                        {
                            text: { en: 'Sentence 3', sw: 'Sentensi 3', fr: 'Phrase 3' },
                            answer: { en: '[Student writes their third goal]', sw: '[Mwanafunzi anaandika lengo lake la tatu]', fr: '[L\'étudiant écrit son troisième objectif]' }
                        },
                        {
                            text: { en: 'Sentence 4', sw: 'Sentensi 4', fr: 'Phrase 4' },
                            answer: { en: '[Student writes their fourth goal]', sw: '[Mwanafunzi anaandika lengo lake la nne]', fr: '[L\'étudiant écrit son quatrième objectif]' }
                        },
                        {
                            text: { en: 'Sentence 5', sw: 'Sentensi 5', fr: 'Phrase 5' },
                            answer: { en: '[Student writes their fifth goal]', sw: '[Mwanafunzi anaandika lengo lake la tano]', fr: '[L\'étudiant écrit son cinquième objectif]' }
                        }
                    ]
                }
            ],
            instructions: {
                en: 'GENERAL INSTRUCTIONS\n• Answer ALL questions.\n• Each question carries 5 marks.\n• Each sub-question carries 1 mark.\n• Write clearly and neatly.\n• Use complete sentences where necessary.',
                sw: 'MAELEKEZO YA JUMLA\n• Jibu maswali YOTE.\n• Kila swali lina alama 5.\n• Kila swali ndogo lina alama 1.\n• Andika kwa uwazi na kwa usafi.\n• Tumia sentensi kamili pale inapohitajika.',
                fr: 'INSTRUCTIONS GÉNÉRALES\n• Répondez à TOUTES les questions.\n• Chaque question vaut 5 points.\n• Chaque sous-question vaut 1 point.\n• Écrivez clairement et soigneusement.\n• Utilisez des phrases complètes si nécessaire.'
            }
        },



                  'reading_skills': {
            id: 'english_reading',
            title: {
                en: 'CHARLES ACADEMY FINAL EXAMINATION – READING SKILLS',
                sw: 'CHARLES ACADEMY MTIHANI WA MWISHO – USOMAJI',
                fr: 'CHARLES ACADEMY EXAMEN FINAL – COMPÉTENCES DE LECTURE'
            },
            time: '2 Hours',
            totalMarks: 100,
            passages: [
                {
                    title: {
                        en: 'READING PASSAGE A\n\nThe Value of Education\nEducation plays an important role in the life of every person. It helps people gain knowledge, develop skills, and build confidence. An educated person can make better decisions and solve problems more easily.\n\nEducation is not only learned in schools. People learn from books, the internet, and daily experiences. However, schools provide guidance, discipline, and structured learning. Students who attend school regularly usually perform better in their future careers.\n\nIn many countries, education helps reduce poverty and improve living standards. When people are educated, they can find better jobs and support their families. For this reason, education should be encouraged for everyone.',
                        sw: 'MFUPISHO WA KUSOMA A\n\nThamani ya Elimu\nElimu ina jukumu muhimu katika maisha ya kila mtu. Inasaidia watu kupata maarifa, kuendeleza ujuzi, na kujenga ujasiri. Mtu mwenye elimu anaweza kufanya maamuzi bora zaidi na kutatua matatizo kwa urahisi zaidi.\n\nElimu haijifunzi shuleni pekee. Watu hujifunza kutoka kwa vitabu, mtandao, na uzoefu wa kila siku. Hata hivyo, shule hutoa mwongozo, nidhamu, na kujifunza kwa muundo. Wanafunzi ambao huhudhuria shule kwa ukawaida kwa kawaida hufanya vyema zaidi katika kazi zao za baadaye.\n\nKatika nchi nyingi, elimu husaidia kupunguza umaskini na kuboresha viwango vya maisha. Watu wanapokuwa na elimu, wanaweza kupata kazi bora zaidi na kuwaunga mkono familia zao. Kwa sababu hii, elimu inapaswa kuhamasishwa kwa kila mtu.',
                        fr: 'PASSAGE DE LECTURE A\n\nLa Valeur de l\'Éducation\nL\'éducation joue un rôle important dans la vie de chaque personne. Elle aide les gens à acquérir des connaissances, à développer des compétences et à renforcer la confiance. Une personne éduquée peut prendre de meilleures décisions et résoudre les problèmes plus facilement.\n\nL\'éducation ne s\'apprend pas seulement dans les écoles. Les gens apprennent des livres, d\'internet et des expériences quotidiennes. Cependant, les écoles fournissent des conseils, de la discipline et un apprentissage structuré. Les étudiants qui fréquentent l\'école régulièrement réussissent généralement mieux dans leurs futures carrières.\n\nDans de nombreux pays, l\'éducation contribue à réduire la pauvreté et à améliorer le niveau de vie. Lorsque les gens sont éduqués, ils peuvent trouver de meilleurs emplois et subvenir aux besoins de leur famille. Pour cette raison, l\'éducation devrait être encouragée pour tout le monde.'
                    },
                    questions: [
                        {
                            number: 1,
                            text: {
                                en: 'Answer the questions using information from the passage.',
                                sw: 'Jibu maswali kwa kutumia habari kutoka kwenye kifungu.',
                                fr: 'Répondez aux questions en utilisant les informations du passage.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'What role does education play in people\'s lives?', sw: 'Elimu ina jukumu gani katika maisha ya watu?', fr: 'Quel rôle joue l\'éducation dans la vie des gens?' },
                                    answer: { en: 'Education plays an important role in helping people gain knowledge, develop skills, and build confidence.', sw: 'Elimu ina jukumu muhimu katika kusaidia watu kupata maarifa, kuendeleza ujuzi, na kujenga ujasiri.', fr: 'L\'éducation joue un rôle important en aidant les gens à acquérir des connaissances, à développer des compétences et à renforcer la confiance.' }
                                },
                                {
                                    text: { en: 'Mention one benefit of education.', sw: 'Taja faida moja ya elimu.', fr: 'Mentionnez un bénéfice de l\'éducation.' },
                                    answer: { en: 'Education helps people gain knowledge / develop skills / build confidence / make better decisions / solve problems easily / reduce poverty / improve living standards.', sw: 'Elimu inasaidia watu kupata maarifa / kuendeleza ujuzi / kujenga ujasiri / kufanya maamuzi bora / kutatua matatizo kwa urahisi / kupunguza umaskini / kuboresha viwango vya maisha.', fr: 'L\'éducation aide les gens à acquérir des connaissances / développer des compétences / renforcer la confiance / prendre de meilleures décisions / résoudre les problèmes facilement / réduire la pauvreté / améliorer le niveau de vie.' }
                                },
                                {
                                    text: { en: 'How does education help people make decisions?', sw: 'Elimu inasaidiaje watu kufanya maamuzi?', fr: 'Comment l\'éducation aide-t-elle les gens à prendre des décisions?' },
                                    answer: { en: 'An educated person can make better decisions because they have knowledge and skills.', sw: 'Mtu mwenye elimu anaweza kufanya maamuzi bora zaidi kwa sababu ana maarifa na ujuzi.', fr: 'Une personne éduquée peut prendre de meilleures décisions parce qu\'elle a des connaissances et des compétences.' }
                                },
                                {
                                    text: { en: 'Where else can people learn besides school?', sw: 'Wanaweza kujifunza wapi zaidi ya shule?', fr: 'Où d\'autre les gens peuvent-ils apprendre en dehors de l\'école?' },
                                    answer: { en: 'People can learn from books, the internet, and daily experiences.', sw: 'Watu wanaweza kujifunza kutoka kwa vitabu, mtandao, na uzoefu wa kila siku.', fr: 'Les gens peuvent apprendre des livres, d\'internet et des expériences quotidiennes.' }
                                },
                                {
                                    text: { en: 'Why do students who attend school regularly perform better?', sw: 'Kwa nini wanafunzi ambao huhudhuria shule kwa ukawaida hufanya vyema zaidi?', fr: 'Pourquoi les étudiants qui fréquentent l\'école régulièrement réussissent-ils mieux?' },
                                    answer: { en: 'They perform better because schools provide guidance, discipline, and structured learning.', sw: 'Wanafanya vyema zaidi kwa sababu shule hutoa mwongozo, nidhamu, na kujifunza kwa muundo.', fr: 'Ils réussissent mieux parce que les écoles fournissent des conseils, de la discipline et un apprentissage structuré.' }
                                }
                            ]
                        },
                        {
                            number: 2,
                            text: {
                                en: 'Choose the correct answer.',
                                sw: 'Chagua jibu sahihi.',
                                fr: 'Choisissez la bonne réponse.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Education helps people to gain ______.', sw: 'Elimu inasaidia watu kupata ______.', fr: 'L\'éducation aide les gens à acquérir ______.' },
                                    options: {
                                        en: ['fear', 'knowledge', 'illness'],
                                        sw: ['hofu', 'maarifa', 'ugonjwa'],
                                        fr: ['peur', 'connaissances', 'maladie']
                                    },
                                    answer: { en: 'knowledge', sw: 'maarifa', fr: 'connaissances' }
                                },
                                {
                                    text: { en: 'An educated person can ______ problems easily.', sw: 'Mtu mwenye elimu anaweza ______ matatizo kwa urahisi.', fr: 'Une personne éduquée peut ______ problèmes facilement.' },
                                    options: {
                                        en: ['create', 'avoid', 'solve'],
                                        sw: ['umba', 'epuka', 'tatua'],
                                        fr: ['créer', 'éviter', 'résoudre']
                                    },
                                    answer: { en: 'solve', sw: 'tatua', fr: 'résoudre' }
                                },
                                {
                                    text: { en: 'Schools provide ______ learning.', sw: 'Shule hutoa kujifunza kwa ______.', fr: 'Les écoles fournissent un apprentissage ______.' },
                                    options: {
                                        en: ['confused', 'structured', 'careless'],
                                        sw: ['changanyikiwa', 'muundo', 'potofu'],
                                        fr: ['confus', 'structuré', 'négligent']
                                    },
                                    answer: { en: 'structured', sw: 'muundo', fr: 'structuré' }
                                },
                                {
                                    text: { en: 'Education can help reduce ______.', sw: 'Elimu inaweza kusaidia kupunguza ______.', fr: 'L\'éducation peut aider à réduire ______.' },
                                    options: {
                                        en: ['happiness', 'poverty', 'time'],
                                        sw: ['furaha', 'umaskini', 'wakati'],
                                        fr: ['bonheur', 'pauvreté', 'temps']
                                    },
                                    answer: { en: 'poverty', sw: 'umaskini', fr: 'pauvreté' }
                                },
                                {
                                    text: { en: 'Education should be encouraged for ______.', sw: 'Elimu inapaswa kuhamasishwa kwa ______.', fr: 'L\'éducation devrait être encouragée pour ______.' },
                                    options: {
                                        en: ['children only', 'teachers', 'everyone'],
                                        sw: ['watoto tu', 'waalimu', 'kila mtu'],
                                        fr: ['enfants seulement', 'enseignants', 'tout le monde']
                                    },
                                    answer: { en: 'everyone', sw: 'kila mtu', fr: 'tout le monde' }
                                }
                            ]
                        },
                        {
                            number: 3,
                            text: {
                                en: 'Write TRUE or FALSE.',
                                sw: 'Andika KWELI au UWONGO.',
                                fr: 'Écrivez VRAI ou FAUX.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Education only takes place in schools.', sw: 'Elimu hufanyika shuleni tu.', fr: 'L\'éducation a lieu seulement dans les écoles.' },
                                    answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                                },
                                {
                                    text: { en: 'Education helps people build confidence.', sw: 'Elimu inasaidia watu kujenga ujasiri.', fr: 'L\'éducation aide les gens à renforcer la confiance.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                },
                                {
                                    text: { en: 'Educated people make better decisions.', sw: 'Watu wenye elimu hufanya maamuzi bora.', fr: 'Les personnes éduquées prennent de meilleures décisions.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                },
                                {
                                    text: { en: 'Schools do not provide discipline.', sw: 'Shule hazitoi nidhamu.', fr: 'Les écoles ne fournissent pas de discipline.' },
                                    answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                                },
                                {
                                    text: { en: 'Education can improve living standards.', sw: 'Elimu inaweza kuboresha viwango vya maisha.', fr: 'L\'éducation peut améliorer le niveau de vie.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                }
                            ]
                        },
                        {
                            number: 4,
                            text: {
                                en: 'Find words from the passage that mean the following.',
                                sw: 'Tafuta maneno kutoka kwenye kifungu yanayomaanisha yafuatayo.',
                                fr: 'Trouvez des mots du passage qui signifient ce qui suit.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Ability', sw: 'Uwezo', fr: 'Capacité' },
                                    answer: { en: 'skills', sw: 'ujuzi', fr: 'compétences' }
                                },
                                {
                                    text: { en: 'Help', sw: 'Msaada', fr: 'Aide' },
                                    answer: { en: 'guidance', sw: 'mwongozo', fr: 'conseils' }
                                },
                                {
                                    text: { en: 'Jobs', sw: 'Ajira', fr: 'Emplois' },
                                    answer: { en: 'careers', sw: 'kazi', fr: 'carrières' }
                                },
                                {
                                    text: { en: 'Guidance', sw: 'Mwongozo', fr: 'Conseil' },
                                    answer: { en: 'guidance', sw: 'mwongozo', fr: 'conseils' }
                                },
                                {
                                    text: { en: 'Important', sw: 'Muhimu', fr: 'Important' },
                                    answer: { en: 'important', sw: 'muhimu', fr: 'important' }
                                }
                            ]
                        },
                        {
                            number: 5,
                            text: {
                                en: 'Answer briefly.',
                                sw: 'Jibu kwa ufupi.',
                                fr: 'Répondez brièvement.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Why is education important in daily life?', sw: 'Kwa nini elimu ni muhimu katika maisha ya kila siku?', fr: 'Pourquoi l\'éducation est-elle importante dans la vie quotidienne?' },
                                    answer: { en: 'Education is important because it helps people gain knowledge and make better decisions.', sw: 'Elimu ni muhimu kwa sababu inasaidia watu kupata maarifa na kufanya maamuzi bora.', fr: 'L\'éducation est importante parce qu\'elle aide les gens à acquérir des connaissances et à prendre de meilleures décisions.' }
                                },
                                {
                                    text: { en: 'How can education help families?', sw: 'Elimu inaweza kusaidiaje familia?', fr: 'Comment l\'éducation peut-elle aider les familles?' },
                                    answer: { en: 'Education helps families by allowing people to get better jobs and support their families.', sw: 'Elimu husaidia familia kwa kuruhusu watu kupata kazi bora zaidi na kuwaunga mkono familia zao.', fr: 'L\'éducation aide les familles en permettant aux gens d\'obtenir de meilleurs emplois et de subvenir aux besoins de leur famille.' }
                                },
                                {
                                    text: { en: 'What does education help people develop?', sw: 'Elimu inasaidia watu kuendeleza nini?', fr: 'Qu\'est-ce que l\'éducation aide les gens à développer?' },
                                    answer: { en: 'Education helps people develop skills and confidence.', sw: 'Elimu inasaidia watu kuendeleza ujuzi na ujasiri.', fr: 'L\'éducation aide les gens à développer des compétences et de la confiance.' }
                                },
                                {
                                    text: { en: 'Why is school attendance important?', sw: 'Kwa nini kuhudhuria shule ni muhimu?', fr: 'Pourquoi la fréquentation scolaire est-elle importante?' },
                                    answer: { en: 'School attendance is important because it provides structured learning and discipline.', sw: 'Kuhudhuria shule ni muhimu kwa sababu hutoa kujifunza kwa muundo na nidhamu.', fr: 'La fréquentation scolaire est importante parce qu\'elle fournit un apprentissage structuré et de la discipline.' }
                                },
                                {
                                    text: { en: 'What problem can education reduce?', sw: 'Elimu inaweza kupunguza tatizo gani?', fr: 'Quel problème l\'éducation peut-elle réduire?' },
                                    answer: { en: 'Education can reduce poverty.', sw: 'Elimu inaweza kupunguza umaskini.', fr: 'L\'éducation peut réduire la pauvreté.' }
                                }
                            ]
                        }
                    ]
                },
                {
                    title: {
                        en: 'READING PASSAGE B\n\nA Day in the Life of a Student\nJames is a student at Charles Academy. He wakes up early every morning and prepares for his lessons. After breakfast, he reviews his notes and attends online classes through WhatsApp.\n\nDuring the day, James watches recorded videos and completes exercises sent by his teachers. In the evening, he revises what he has learned and asks questions in the group if he does not understand.\n\nJames believes that discipline and hard work are the keys to success. He hopes to use his education to achieve his dreams and help his community in the future.',
                        sw: 'MFUPISHO WA KUSOMA B\n\nSiku Katika Maisha ya Mwanafunzi\nJames ni mwanafunzi katika Charles Academy. Anaamka mapema kila asubuhi na kujiandaa kwa masomo yake. Baada ya kiamsha kinywa, anapitia maelezo yake na kuhudhuria madarasa ya mtandaoni kupitia WhatsApp.\n\nWakati wa mchana, James anatazama video zilizorekodiwa na kukamilisha mazoezi yaliyotumwa na waalimu wake. Jioni, anapitia kile amechojifunza na anauliza maswali kwenye kikundi ikiwa haelewi.\n\nJames anaamini kwamba nidhamu na bidii ndio funguo za mafanikio. Anatumai kutumia elimu yake kufikia ndoto zake na kusaidia jamii yake baadaye.',
                        fr: 'PASSAGE DE LECTURE B\n\nUne Journée dans la Vie d\'un Étudiant\nJames est étudiant à Charles Academy. Il se réveille tôt chaque matin et se prépare pour ses leçons. Après le petit déjeuner, il révise ses notes et assiste à des cours en ligne via WhatsApp.\n\nPendant la journée, James regarde des vidéos enregistrées et complète les exercices envoyés par ses enseignants. Le soir, il révise ce qu\'il a appris et pose des questions dans le groupe s\'il ne comprend pas.\n\nJames croit que la discipline et le travail acharné sont les clés du succès. Il espère utiliser son éducation pour réaliser ses rêves et aider sa communauté à l\'avenir.'
                    },
                    questions: [
                        {
                            number: 11,
                            text: {
                                en: 'Answer the questions.',
                                sw: 'Jibu maswali.',
                                fr: 'Répondez aux questions.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Where does James study?', sw: 'James anasoma wapi?', fr: 'Où James étudie-t-il?' },
                                    answer: { en: 'He studies at Charles Academy.', sw: 'Anasoma Charles Academy.', fr: 'Il étudie à Charles Academy.' }
                                },
                                {
                                    text: { en: 'What does he do after breakfast?', sw: 'Anafanya nini baada ya kiamsha kinywa?', fr: 'Que fait-il après le petit déjeuner?' },
                                    answer: { en: 'He reviews his notes and attends online classes.', sw: 'Anapitia maelezo yake na kuhudhuria madarasa ya mtandaoni.', fr: 'Il révise ses notes et assiste à des cours en ligne.' }
                                },
                                {
                                    text: { en: 'How does he attend his classes?', sw: 'Anahudhuriaje madarasa yake?', fr: 'Comment assiste-t-il à ses cours?' },
                                    answer: { en: 'He attends classes through WhatsApp.', sw: 'Anahudhuria madarasa kupitia WhatsApp.', fr: 'Il assiste aux cours via WhatsApp.' }
                                },
                                {
                                    text: { en: 'What does he do in the evening?', sw: 'Anafanya nini jioni?', fr: 'Que fait-il le soir?' },
                                    answer: { en: 'He revises what he has learned and asks questions.', sw: 'Anapitia kile amechojifunza na anauliza maswali.', fr: 'Il révise ce qu\'il a appris et pose des questions.' }
                                },
                                {
                                    text: { en: 'What does James believe leads to success?', sw: 'James anaamini nini kinasababisha mafanikio?', fr: 'Qu\'est-ce que James croit qui mène au succès?' },
                                    answer: { en: 'He believes discipline and hard work lead to success.', sw: 'Anaamini nidhamu na bidii ndio zinazosababisha mafanikio.', fr: 'Il croit que la discipline et le travail acharné mènent au succès.' }
                                }
                            ]
                        },
                        {
                            number: 12,
                            text: {
                                en: 'Choose the correct answer.',
                                sw: 'Chagua jibu sahihi.',
                                fr: 'Choisissez la bonne réponse.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'James wakes up ______.', sw: 'James anaamka ______.', fr: 'James se réveille ______.' },
                                    options: {
                                        en: ['late', 'early', 'at night'],
                                        sw: ['marehemu', 'mapema', 'usiku'],
                                        fr: ['tard', 'tôt', 'la nuit']
                                    },
                                    answer: { en: 'early', sw: 'mapema', fr: 'tôt' }
                                },
                                {
                                    text: { en: 'Classes are attended through ______.', sw: 'Madarasa yanahudhuriwa kupitia ______.', fr: 'Les cours sont suivis via ______.' },
                                    options: {
                                        en: ['radio', 'television', 'WhatsApp'],
                                        sw: ['redio', 'televisheni', 'WhatsApp'],
                                        fr: ['radio', 'télévision', 'WhatsApp']
                                    },
                                    answer: { en: 'WhatsApp', sw: 'WhatsApp', fr: 'WhatsApp' }
                                },
                                {
                                    text: { en: 'James studies using ______.', sw: 'James anasoma kwa kutumia ______.', fr: 'James étudie en utilisant ______.' },
                                    options: {
                                        en: ['games', 'recorded videos', 'newspapers'],
                                        sw: ['michezo', 'video zilizorekodiwa', 'magazeti'],
                                        fr: ['jeux', 'vidéos enregistrées', 'journaux']
                                    },
                                    answer: { en: 'recorded videos', sw: 'video zilizorekodiwa', fr: 'vidéos enregistrées' }
                                },
                                {
                                    text: { en: 'He asks questions when he does not ______.', sw: 'Anauliza maswali wakati ha ______.', fr: 'Il pose des questions quand il ne ______ pas.' },
                                    options: {
                                        en: ['sleep', 'understand', 'eat'],
                                        sw: ['lala', 'elewa', 'kula'],
                                        fr: ['dort', 'comprend', 'mange']
                                    },
                                    answer: { en: 'understand', sw: 'elewa', fr: 'comprend' }
                                },
                                {
                                    text: { en: 'James wants to help his ______.', sw: 'James anataka kusaidia ______ yake.', fr: 'James veut aider sa ______.' },
                                    options: {
                                        en: ['family only', 'community', 'friends'],
                                        sw: ['familia tu', 'jamii', 'marafiki'],
                                        fr: ['famille seulement', 'communauté', 'amis']
                                    },
                                    answer: { en: 'community', sw: 'jamii', fr: 'communauté' }
                                }
                            ]
                        },
                        {
                            number: 13,
                            text: {
                                en: 'Write TRUE or FALSE.',
                                sw: 'Andika KWELI au UWONGO.',
                                fr: 'Écrivez VRAI ou FAUX.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'James studies at Charles Academy.', sw: 'James anasoma Charles Academy.', fr: 'James étudie à Charles Academy.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                },
                                {
                                    text: { en: 'He attends physical classes.', sw: 'Anahudhuria madarasa ya kimwili.', fr: 'Il assiste à des cours physiques.' },
                                    answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                                },
                                {
                                    text: { en: 'He studies in the evening.', sw: 'Anasoma jioni.', fr: 'Il étudie le soir.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                },
                                {
                                    text: { en: 'He believes in discipline.', sw: 'Anaamini katika nidhamu.', fr: 'Il croit en la discipline.' },
                                    answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                                },
                                {
                                    text: { en: 'He dislikes learning.', sw: 'Hapendi kujifunza.', fr: 'Il n\'aime pas apprendre.' },
                                    answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                                }
                            ]
                        },
                        {
                            number: 14,
                            text: {
                                en: 'Find words from the passage that mean:',
                                sw: 'Tafuta maneno kutoka kwenye kifungu yanayomaanisha:',
                                fr: 'Trouvez des mots du passage qui signifient:'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Get ready', sw: 'Jitayarisha', fr: 'Se préparer' },
                                    answer: { en: 'prepares', sw: 'kujiandaa', fr: 'se prépare' }
                                },
                                {
                                    text: { en: 'Lessons', sw: 'Masomo', fr: 'Leçons' },
                                    answer: { en: 'lessons', sw: 'masomo', fr: 'leçons' }
                                },
                                {
                                    text: { en: 'Exercises', sw: 'Mazoezi', fr: 'Exercices' },
                                    answer: { en: 'exercises', sw: 'mazoezi', fr: 'exercices' }
                                },
                                {
                                    text: { en: 'Achieve', sw: 'Fikia', fr: 'Atteindre' },
                                    answer: { en: 'achieve', sw: 'kufikia', fr: 'atteindre' }
                                },
                                {
                                    text: { en: 'Future', sw: 'Baadaye', fr: 'Avenir' },
                                    answer: { en: 'future', sw: 'baadaye', fr: 'avenir' }
                                }
                            ]
                        },
                        {
                            number: 15,
                            text: {
                                en: 'Answer briefly.',
                                sw: 'Jibu kwa ufupi.',
                                fr: 'Répondez brièvement.'
                            },
                            subQuestions: [
                                {
                                    text: { en: 'Why does James wake up early?', sw: 'Kwa nini James anaamka mapema?', fr: 'Pourquoi James se réveille-t-il tôt?' },
                                    answer: { en: 'He wakes up early to prepare for his lessons.', sw: 'Anaamka mapema ili kujiandaa kwa masomo yake.', fr: 'Il se réveille tôt pour se préparer à ses leçons.' }
                                },
                                {
                                    text: { en: 'How does James revise his lessons?', sw: 'James anapitiaje masomo yake?', fr: 'Comment James révise-t-il ses leçons?' },
                                    answer: { en: 'He revises by going over what he has learned and asking questions.', sw: 'Anapitia kwa kupitia kile amechojifunza na kuuliza maswali.', fr: 'Il révise en parcourant ce qu\'il a appris et en posant des questions.' }
                                },
                                {
                                    text: { en: 'Why does he ask questions?', sw: 'Kwa nini anauliza maswali?', fr: 'Pourquoi pose-t-il des questions?' },
                                    answer: { en: 'He asks questions when he does not understand something.', sw: 'Anauliza maswali wakati haelewi kitu.', fr: 'Il pose des questions quand il ne comprend pas quelque chose.' }
                                },
                                {
                                    text: { en: 'What are keys to success according to James?', sw: 'Ni nini funguo za mafanikio kulingana na James?', fr: 'Quelles sont les clés du succès selon James?' },
                                    answer: { en: 'Discipline and hard work are keys to success.', sw: 'Nidhamu na bidii ndio funguo za mafanikio.', fr: 'La discipline et le travail acharné sont les clés du succès.' }
                                },
                                {
                                    text: { en: 'What does James hope to do in the future?', sw: 'James anatumaini kufanya nini baadaye?', fr: 'Qu\'est-ce que James espère faire à l\'avenir?' },
                                    answer: { en: 'He hopes to achieve his dreams and help his community.', sw: 'Anatumaini kufikia ndoto zake na kusaidia jamii yake.', fr: 'Il espère réaliser ses rêves et aider sa communauté.' }
                                }
                            ]
                        }
                    ]
                }
            ],
            instructions: {
                en: 'GENERAL INSTRUCTIONS\n• Read all passages carefully before answering.\n• Answer ALL questions.\n• Each question carries FIVE (5) marks.\n• Each sub-question carries ONE (1) mark.\n• Write clear and complete answers.',
                sw: 'MAELEKEZO YA JUMLA\n• Soma vifungu vyote kwa makini kabla ya kujibu.\n• Jibu maswali YOTE.\n• Kila swali lina alama TANO (5).\n• Kila swali ndogo lina alama MOJA (1).\n• Andika majibu yaliyo wazi na kamili.',
                fr: 'INSTRUCTIONS GÉNÉRALES\n• Lisez tous les passages attentivement avant de répondre.\n• Répondez à TOUTES les questions.\n• Chaque question vaut CINQ (5) points.\n• Chaque sous-question vaut UN (1) point.\n• Écrivez des réponses claires et complètes.'
            },
            questions: [
                // The complete 20 questions from both passages
                {
                    number: 1,
                    text: {
                        en: 'Answer the questions using information from the passage.',
                        sw: 'Jibu maswali kwa kutumia habari kutoka kwenye kifungu.',
                        fr: 'Répondez aux questions en utilisant les informations du passage.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'What role does education play in people\'s lives?', sw: 'Elimu ina jukumu gani katika maisha ya watu?', fr: 'Quel rôle joue l\'éducation dans la vie des gens?' },
                            answer: { en: 'Education plays an important role in helping people gain knowledge, develop skills, and build confidence.', sw: 'Elimu ina jukumu muhimu katika kusaidia watu kupata maarifa, kuendeleza ujuzi, na kujenga ujasiri.', fr: 'L\'éducation joue un rôle important en aidant les gens à acquérir des connaissances, à développer des compétences et à renforcer la confiance.' }
                        },
                        {
                            text: { en: 'Mention one benefit of education.', sw: 'Taja faida moja ya elimu.', fr: 'Mentionnez un bénéfice de l\'éducation.' },
                            answer: { en: 'Education helps people gain knowledge / develop skills / build confidence / make better decisions / solve problems easily.', sw: 'Elimu inasaidia watu kupata maarifa / kuendeleza ujuzi / kujenga ujasiri / kufanya maamuzi bora / kutatua matatizo kwa urahisi.', fr: 'L\'éducation aide les gens à acquérir des connaissances / développer des compétences / renforcer la confiance / prendre de meilleures décisions / résoudre les problèmes facilement.' }
                        },
                        {
                            text: { en: 'How does education help people make decisions?', sw: 'Elimu inasaidiaje watu kufanya maamuzi?', fr: 'Comment l\'éducation aide-t-elle les gens à prendre des décisions?' },
                            answer: { en: 'An educated person can make better decisions because they have knowledge and skills.', sw: 'Mtu mwenye elimu anaweza kufanya maamuzi bora zaidi kwa sababu ana maarifa na ujuzi.', fr: 'Une personne éduquée peut prendre de meilleures décisions parce qu\'elle a des connaissances et des compétences.' }
                        },
                        {
                            text: { en: 'Where else can people learn besides school?', sw: 'Wanaweza kujifunza wapi zaidi ya shule?', fr: 'Où d\'autre les gens peuvent-ils apprendre en dehors de l\'école?' },
                            answer: { en: 'People can learn from books, the internet, and daily experiences.', sw: 'Watu wanaweza kujifunza kutoka kwa vitabu, mtandao, na uzoefu wa kila siku.', fr: 'Les gens peuvent apprendre des livres, d\'internet et des expériences quotidiennes.' }
                        },
                        {
                            text: { en: 'Why do students who attend school regularly perform better?', sw: 'Kwa nini wanafunzi ambao huhudhuria shule kwa ukawaida hufanya vyema zaidi?', fr: 'Pourquoi les étudiants qui fréquentent l\'école régulièrement réussissent-ils mieux?' },
                            answer: { en: 'They perform better because schools provide guidance, discipline, and structured learning.', sw: 'Wanafanya vyema zaidi kwa sababu shule hutoa mwongozo, nidhamu, na kujifunza kwa muundo.', fr: 'Ils réussissent mieux parce que les écoles fournissent des conseils, de la discipline et un apprentissage structuré.' }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'Choose the correct answer.',
                        sw: 'Chagua jibu sahihi.',
                        fr: 'Choisissez la bonne réponse.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Education helps people to gain ______.', sw: 'Elimu inasaidia watu kupata ______.', fr: 'L\'éducation aide les gens à acquérir ______.' },
                            answer: { en: 'knowledge', sw: 'maarifa', fr: 'connaissances' }
                        },
                        {
                            text: { en: 'An educated person can ______ problems easily.', sw: 'Mtu mwenye elimu anaweza ______ matatizo kwa urahisi.', fr: 'Une personne éduquée peut ______ problèmes facilement.' },
                            answer: { en: 'solve', sw: 'tatua', fr: 'résoudre' }
                        },
                        {
                            text: { en: 'Schools provide ______ learning.', sw: 'Shule hutoa kujifunza kwa ______.', fr: 'Les écoles fournissent un apprentissage ______.' },
                            answer: { en: 'structured', sw: 'muundo', fr: 'structuré' }
                        },
                        {
                            text: { en: 'Education can help reduce ______.', sw: 'Elimu inaweza kusaidia kupunguza ______.', fr: 'L\'éducation peut aider à réduire ______.' },
                            answer: { en: 'poverty', sw: 'umaskini', fr: 'pauvreté' }
                        },
                        {
                            text: { en: 'Education should be encouraged for ______.', sw: 'Elimu inapaswa kuhamasishwa kwa ______.', fr: 'L\'éducation devrait être encouragée pour ______.' },
                            answer: { en: 'everyone', sw: 'kila mtu', fr: 'tout le monde' }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'Write TRUE or FALSE.',
                        sw: 'Andika KWELI au UWONGO.',
                        fr: 'Écrivez VRAI ou FAUX.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Education only takes place in schools.', sw: 'Elimu hufanyika shuleni tu.', fr: 'L\'éducation a lieu seulement dans les écoles.' },
                            answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                        },
                        {
                            text: { en: 'Education helps people build confidence.', sw: 'Elimu inasaidia watu kujenga ujasiri.', fr: 'L\'éducation aide les gens à renforcer la confiance.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        },
                        {
                            text: { en: 'Educated people make better decisions.', sw: 'Watu wenye elimu hufanya maamuzi bora.', fr: 'Les personnes éduquées prennent de meilleures décisions.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        },
                        {
                            text: { en: 'Schools do not provide discipline.', sw: 'Shule hazitoi nidhamu.', fr: 'Les écoles ne fournissent pas de discipline.' },
                            answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                        },
                        {
                            text: { en: 'Education can improve living standards.', sw: 'Elimu inaweza kuboresha viwango vya maisha.', fr: 'L\'éducation peut améliorer le niveau de vie.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'Find words from the passage that mean the following.',
                        sw: 'Tafuta maneno kutoka kwenye kifungu yanayomaanisha yafuatayo.',
                        fr: 'Trouvez des mots du passage qui signifient ce qui suit.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Ability', sw: 'Uwezo', fr: 'Capacité' },
                            answer: { en: 'skills', sw: 'ujuzi', fr: 'compétences' }
                        },
                        {
                            text: { en: 'Help', sw: 'Msaada', fr: 'Aide' },
                            answer: { en: 'guidance', sw: 'mwongozo', fr: 'conseils' }
                        },
                        {
                            text: { en: 'Jobs', sw: 'Ajira', fr: 'Emplois' },
                            answer: { en: 'careers', sw: 'kazi', fr: 'carrières' }
                        },
                        {
                            text: { en: 'Guidance', sw: 'Mwongozo', fr: 'Conseil' },
                            answer: { en: 'guidance', sw: 'mwongozo', fr: 'conseils' }
                        },
                        {
                            text: { en: 'Important', sw: 'Muhimu', fr: 'Important' },
                            answer: { en: 'important', sw: 'muhimu', fr: 'important' }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'Answer briefly.',
                        sw: 'Jibu kwa ufupi.',
                        fr: 'Répondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Why is education important in daily life?', sw: 'Kwa nini elimu ni muhimu katika maisha ya kila siku?', fr: 'Pourquoi l\'éducation est-elle importante dans la vie quotidienne?' },
                            answer: { en: 'Education is important because it helps people gain knowledge and make better decisions.', sw: 'Elimu ni muhimu kwa sababu inasaidia watu kupata maarifa na kufanya maamuzi bora.', fr: 'L\'éducation est importante parce qu\'elle aide les gens à acquérir des connaissances et à prendre de meilleures décisions.' }
                        },
                        {
                            text: { en: 'How can education help families?', sw: 'Elimu inaweza kusaidiaje familia?', fr: 'Comment l\'éducation peut-elle aider les familles?' },
                            answer: { en: 'Education helps families by allowing people to get better jobs and support their families.', sw: 'Elimu husaidia familia kwa kuruhusu watu kupata kazi bora zaidi na kuwaunga mkono familia zao.', fr: 'L\'éducation aide les familles en permettant aux gens d\'obtenir de meilleurs emplois et de subvenir aux besoins de leur famille.' }
                        },
                        {
                            text: { en: 'What does education help people develop?', sw: 'Elimu inasaidia watu kuendeleza nini?', fr: 'Qu\'est-ce que l\'éducation aide les gens à développer?' },
                            answer: { en: 'Education helps people develop skills and confidence.', sw: 'Elimu inasaidia watu kuendeleza ujuzi na ujasiri.', fr: 'L\'éducation aide les gens à développer des compétences et de la confiance.' }
                        },
                        {
                            text: { en: 'Why is school attendance important?', sw: 'Kwa nini kuhudhuria shule ni muhimu?', fr: 'Pourquoi la fréquentation scolaire est-elle importante?' },
                            answer: { en: 'School attendance is important because it provides structured learning and discipline.', sw: 'Kuhudhuria shule ni muhimu kwa sababu hutoa kujifunza kwa muundo na nidhamu.', fr: 'La fréquentation scolaire est importante parce qu\'elle fournit un apprentissage structuré et de la discipline.' }
                        },
                        {
                            text: { en: 'What problem can education reduce?', sw: 'Elimu inaweza kupunguza tatizo gani?', fr: 'Quel problème l\'éducation peut-elle réduire?' },
                            answer: { en: 'Education can reduce poverty.', sw: 'Elimu inaweza kupunguza umaskini.', fr: 'L\'éducation peut réduire la pauvreté.' }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'Complete the sentences using ideas from the passage.',
                        sw: 'Kamilisha sentensi kwa kutumia mawazo kutoka kwenye kifungu.',
                        fr: 'Complétez les phrases en utilisant les idées du passage.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Education helps people gain ____________.', sw: 'Elimu inasaidia watu kupata ____________.', fr: 'L\'éducation aide les gens à acquérir ____________.' },
                            answer: { en: 'knowledge', sw: 'maarifa', fr: 'connaissances' }
                        },
                        {
                            text: { en: 'People also learn from books and ____________.', sw: 'Watu pia hujifunza kutoka kwa vitabu na ____________.', fr: 'Les gens apprennent aussi des livres et ____________.' },
                            answer: { en: 'the internet', sw: 'mtandao', fr: 'internet' }
                        },
                        {
                            text: { en: 'Schools provide discipline and ____________.', sw: 'Shule hutoa nidhamu na ____________.', fr: 'Les écoles fournissent de la discipline et ____________.' },
                            answer: { en: 'structured learning', sw: 'kujifunza kwa muundo', fr: 'un apprentissage structuré' }
                        },
                        {
                            text: { en: 'Educated people can find ____________ jobs.', sw: 'Watu wenye elimu wanaweza kupata kazi ____________.', fr: 'Les personnes éduquées peuvent trouver des emplois ____________.' },
                            answer: { en: 'better', sw: 'bora zaidi', fr: 'meilleurs' }
                        },
                        {
                            text: { en: 'Education should be encouraged for ____________.', sw: 'Elimu inapaswa kuhamasishwa kwa ____________.', fr: 'L\'éducation devrait être encouragée pour ____________.' },
                            answer: { en: 'everyone', sw: 'kila mtu', fr: 'tout le monde' }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'Identify the paragraph that talks about:',
                        sw: 'Tambua aya inayozungumzia:',
                        fr: 'Identifiez le paragraphe qui parle de:'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Benefits of education', sw: 'Faida za elimu', fr: 'Avantages de l\'éducation' },
                            answer: { en: 'First paragraph', sw: 'Aya ya kwanza', fr: 'Premier paragraphe' }
                        },
                        {
                            text: { en: 'Learning outside school', sw: 'Kujifunza nje ya shule', fr: 'Apprentissage en dehors de l\'école' },
                            answer: { en: 'Second paragraph', sw: 'Aya ya pili', fr: 'Deuxième paragraphe' }
                        },
                        {
                            text: { en: 'Education and poverty', sw: 'Elimu na umaskini', fr: 'Éducation et pauvreté' },
                            answer: { en: 'Third paragraph', sw: 'Aya ya tatu', fr: 'Troisième paragraphe' }
                        },
                        {
                            text: { en: 'Confidence and skills', sw: 'Ujasiri na ujuzi', fr: 'Confiance et compétences' },
                            answer: { en: 'First paragraph', sw: 'Aya ya kwanza', fr: 'Premier paragraphe' }
                        },
                        {
                            text: { en: 'School discipline', sw: 'Nidhamu ya shule', fr: 'Discipline scolaire' },
                            answer: { en: 'Second paragraph', sw: 'Aya ya pili', fr: 'Deuxième paragraphe' }
                        }
                    ]
                },
                {
                    number: 8,
                    text: {
                        en: 'Answer in your own words.',
                        sw: 'Jibu kwa maneno yako mwenyewe.',
                        fr: 'Répondez dans vos propres mots.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'How does education improve living standards?', sw: 'Elimu inaboreshaje viwango vya maisha?', fr: 'Comment l\'éducation améliore-t-elle le niveau de vie?' },
                            answer: { en: 'Education helps people get better jobs and earn more money, which improves their living conditions.', sw: 'Elimu husaidia watu kupata kazi bora zaidi na kupata pesa zaidi, ambayo huboresha hali zao za maisha.', fr: 'L\'éducation aide les gens à obtenir de meilleurs emplois et à gagner plus d\'argent, ce qui améliore leurs conditions de vie.' }
                        },
                        {
                            text: { en: 'Why is confidence important in life?', sw: 'Kwa nini ujasiri ni muhimu maishani?', fr: 'Pourquoi la confiance est-elle importante dans la vie?' },
                            answer: { en: 'Confidence helps people believe in themselves and try new things.', sw: 'Ujasiri husaidia watu kujiamini na kujaribu mambo mapya.', fr: 'La confiance aide les gens à croire en eux-mêmes et à essayer de nouvelles choses.' }
                        },
                        {
                            text: { en: 'What is the importance of discipline in school?', sw: 'Nini umuhimu wa nidhamu shuleni?', fr: 'Quelle est l\'importance de la discipline à l\'école?' },
                            answer: { en: 'Discipline helps students follow rules, focus on studies, and achieve success.', sw: 'Nidhamu husaidia wanafunzi kufuata kanuni, kuzingatia masomo, na kufanikiwa.', fr: 'La discipline aide les élèves à suivre les règles, à se concentrer sur les études et à réussir.' }
                        },
                        {
                            text: { en: 'How does education support families?', sw: 'Elimu inasaidiaje familia?', fr: 'Comment l\'éducation soutient-elle les familles?' },
                            answer: { en: 'Education helps family members get jobs and take care of each other better.', sw: 'Elimu husaidia wanafamilia kupata kazi na kutunziana vizuri zaidi.', fr: 'L\'éducation aide les membres de la famille à obtenir des emplois et à mieux prendre soin les uns des autres.' }
                        },
                        {
                            text: { en: 'Why should everyone be educated?', sw: 'Kwa nini kila mtu anapaswa kuwa na elimu?', fr: 'Pourquoi tout le monde devrait-il être éduqué?' },
                            answer: { en: 'Everyone should be educated because it helps individuals and society develop and progress.', sw: 'Kila mtu anapaswa kuwa na elimu kwa sababu husaidia watu binafsi na jamii kukua na kuendelea.', fr: 'Tout le monde devrait être éduqué parce que cela aide les individus et la société à se développer et à progresser.' }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'Choose the best title for the passage.',
                        sw: 'Chagua kichwa bora cha kifungu.',
                        fr: 'Choisissez le meilleur titre pour le passage.'
                    },
                    subQuestions: [
                        {
                            text: { en: '(Explain your choice in one sentence.)', sw: '(Elezea uchaguzi wako kwa sentensi moja.)', fr: '(Expliquez votre choix en une phrase.)' },
                            answer: { en: 'The best title is "The Value of Education" because the passage explains why education is important and its benefits.', sw: 'Kichwa bora ni "Thamani ya Elimu" kwa sababu kifungu kinaeleza kwa nini elimu ni muhimu na faida zake.', fr: 'Le meilleur titre est "La Valeur de l\'Éducation" parce que le passage explique pourquoi l\'éducation est importante et ses avantages.' }
                        }
                    ]
                },
                {
                    number: 10,
                    text: {
                        en: 'Write short answers.',
                        sw: 'Andika majibu mafupi.',
                        fr: 'Écrivez des réponses courtes.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Who benefits from education?', sw: 'Nani anafaidika na elimu?', fr: 'Qui bénéficie de l\'éducation?' },
                            answer: { en: 'Everyone benefits from education.', sw: 'Kila mtu anafaidika na elimu.', fr: 'Tout le monde bénéficie de l\'éducation.' }
                        },
                        {
                            text: { en: 'What does education help people gain?', sw: 'Elimu inasaidia watu kupata nini?', fr: 'Qu\'est-ce que l\'éducation aide les gens à acquérir?' },
                            answer: { en: 'Knowledge, skills, and confidence.', sw: 'Maarifa, ujuzi, na ujasiri.', fr: 'Connaissances, compétences et confiance.' }
                        },
                        {
                            text: { en: 'Name one place where learning happens.', sw: 'Taja mahali moja ambapo kujifunza hufanyika.', fr: 'Nommez un endroit où l\'apprentissage a lieu.' },
                            answer: { en: 'School / Home / Library / Online', sw: 'Shule / Nyumbani / Maktaba / Mtandaoni', fr: 'École / Maison / Bibliothèque / En ligne' }
                        },
                        {
                            text: { en: 'What does education help reduce?', sw: 'Elimu inasaidia kupunguza nini?', fr: 'Qu\'est-ce que l\'éducation aide à réduire?' },
                            answer: { en: 'Poverty', sw: 'Umaskini', fr: 'Pauvreté' }
                        },
                        {
                            text: { en: 'What should be encouraged for everyone?', sw: 'Nini kinapaswa kuhamasishwa kwa kila mtu?', fr: 'Qu\'est-ce qui devrait être encouragé pour tout le monde?' },
                            answer: { en: 'Education', sw: 'Elimu', fr: 'Éducation' }
                        }
                    ]
                },
                {
                    number: 11,
                    text: {
                        en: 'Answer the questions.',
                        sw: 'Jibu maswali.',
                        fr: 'Répondez aux questions.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Where does James study?', sw: 'James anasoma wapi?', fr: 'Où James étudie-t-il?' },
                            answer: { en: 'He studies at Charles Academy.', sw: 'Anasoma Charles Academy.', fr: 'Il étudie à Charles Academy.' }
                        },
                        {
                            text: { en: 'What does he do after breakfast?', sw: 'Anafanya nini baada ya kiamsha kinywa?', fr: 'Que fait-il après le petit déjeuner?' },
                            answer: { en: 'He reviews his notes and attends online classes.', sw: 'Anapitia maelezo yake na kuhudhuria madarasa ya mtandaoni.', fr: 'Il révise ses notes et assiste à des cours en ligne.' }
                        },
                        {
                            text: { en: 'How does he attend his classes?', sw: 'Anahudhuriaje madarasa yake?', fr: 'Comment assiste-t-il à ses cours?' },
                            answer: { en: 'He attends classes through WhatsApp.', sw: 'Anahudhuria madarasa kupitia WhatsApp.', fr: 'Il assiste aux cours via WhatsApp.' }
                        },
                        {
                            text: { en: 'What does he do in the evening?', sw: 'Anafanya nini jioni?', fr: 'Que fait-il le soir?' },
                            answer: { en: 'He revises what he has learned and asks questions.', sw: 'Anapitia kile amechojifunza na anauliza maswali.', fr: 'Il révise ce qu\'il a appris et pose des questions.' }
                        },
                        {
                            text: { en: 'What does James believe leads to success?', sw: 'James anaamini nini kinasababisha mafanikio?', fr: 'Qu\'est-ce que James croit qui mène au succès?' },
                            answer: { en: 'He believes discipline and hard work lead to success.', sw: 'Anaamini nidhamu na bidii ndio zinazosababisha mafanikio.', fr: 'Il croit que la discipline et le travail acharné mènent au succès.' }
                        }
                    ]
                },
                {
                    number: 12,
                    text: {
                        en: 'Choose the correct answer.',
                        sw: 'Chagua jibu sahihi.',
                        fr: 'Choisissez la bonne réponse.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'James wakes up ______.', sw: 'James anaamka ______.', fr: 'James se réveille ______.' },
                            answer: { en: 'early', sw: 'mapema', fr: 'tôt' }
                        },
                        {
                            text: { en: 'Classes are attended through ______.', sw: 'Madarasa yanahudhuriwa kupitia ______.', fr: 'Les cours sont suivis via ______.' },
                            answer: { en: 'WhatsApp', sw: 'WhatsApp', fr: 'WhatsApp' }
                        },
                        {
                            text: { en: 'James studies using ______.', sw: 'James anasoma kwa kutumia ______.', fr: 'James étudie en utilisant ______.' },
                            answer: { en: 'recorded videos', sw: 'video zilizorekodiwa', fr: 'vidéos enregistrées' }
                        },
                        {
                            text: { en: 'He asks questions when he does not ______.', sw: 'Anauliza maswali wakati ha ______.', fr: 'Il pose des questions quand il ne ______ pas.' },
                            answer: { en: 'understand', sw: 'elewa', fr: 'comprend' }
                        },
                        {
                            text: { en: 'James wants to help his ______.', sw: 'James anataka kusaidia ______ yake.', fr: 'James veut aider sa ______.' },
                            answer: { en: 'community', sw: 'jamii', fr: 'communauté' }
                        }
                    ]
                },
                {
                    number: 13,
                    text: {
                        en: 'Write TRUE or FALSE.',
                        sw: 'Andika KWELI au UWONGO.',
                        fr: 'Écrivez VRAI ou FAUX.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'James studies at Charles Academy.', sw: 'James anasoma Charles Academy.', fr: 'James étudie à Charles Academy.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        },
                        {
                            text: { en: 'He attends physical classes.', sw: 'Anahudhuria madarasa ya kimwili.', fr: 'Il assiste à des cours physiques.' },
                            answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                        },
                        {
                            text: { en: 'He studies in the evening.', sw: 'Anasoma jioni.', fr: 'Il étudie le soir.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        },
                        {
                            text: { en: 'He believes in discipline.', sw: 'Anaamini katika nidhamu.', fr: 'Il croit en la discipline.' },
                            answer: { en: 'TRUE', sw: 'KWELI', fr: 'VRAI' }
                        },
                        {
                            text: { en: 'He dislikes learning.', sw: 'Hapendi kujifunza.', fr: 'Il n\'aime pas apprendre.' },
                            answer: { en: 'FALSE', sw: 'UWONGO', fr: 'FAUX' }
                        }
                    ]
                },
                {
                    number: 14,
                    text: {
                        en: 'Find words from the passage that mean:',
                        sw: 'Tafuta maneno kutoka kwenye kifungu yanayomaanisha:',
                        fr: 'Trouvez des mots du passage qui signifient:'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Get ready', sw: 'Jitayarisha', fr: 'Se préparer' },
                            answer: { en: 'prepares', sw: 'kujiandaa', fr: 'se prépare' }
                        },
                        {
                            text: { en: 'Lessons', sw: 'Masomo', fr: 'Leçons' },
                            answer: { en: 'lessons', sw: 'masomo', fr: 'leçons' }
                        },
                        {
                            text: { en: 'Exercises', sw: 'Mazoezi', fr: 'Exercices' },
                            answer: { en: 'exercises', sw: 'mazoezi', fr: 'exercices' }
                        },
                        {
                            text: { en: 'Achieve', sw: 'Fikia', fr: 'Atteindre' },
                            answer: { en: 'achieve', sw: 'kufikia', fr: 'atteindre' }
                        },
                        {
                            text: { en: 'Future', sw: 'Baadaye', fr: 'Avenir' },
                            answer: { en: 'future', sw: 'baadaye', fr: 'avenir' }
                        }
                    ]
                },
                {
                    number: 15,
                    text: {
                        en: 'Answer briefly.',
                        sw: 'Jibu kwa ufupi.',
                        fr: 'Répondez brièvement.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Why does James wake up early?', sw: 'Kwa nini James anaamka mapema?', fr: 'Pourquoi James se réveille-t-il tôt?' },
                            answer: { en: 'He wakes up early to prepare for his lessons.', sw: 'Anaamka mapema ili kujiandaa kwa masomo yake.', fr: 'Il se réveille tôt pour se préparer à ses leçons.' }
                        },
                        {
                            text: { en: 'How does James revise his lessons?', sw: 'James anapitiaje masomo yake?', fr: 'Comment James révise-t-il ses leçons?' },
                            answer: { en: 'He revises by going over what he has learned and asking questions.', sw: 'Anapitia kwa kupitia kile amechojifunza na kuuliza maswali.', fr: 'Il révise en parcourant ce qu\'il a appris et en posant des questions.' }
                        },
                        {
                            text: { en: 'Why does he ask questions?', sw: 'Kwa nini anauliza maswali?', fr: 'Pourquoi pose-t-il des questions?' },
                            answer: { en: 'He asks questions when he does not understand something.', sw: 'Anauliza maswali wakati haelewi kitu.', fr: 'Il pose des questions quand il ne comprend pas quelque chose.' }
                        },
                        {
                            text: { en: 'What are keys to success according to James?', sw: 'Ni nini funguo za mafanikio kulingana na James?', fr: 'Quelles sont les clés du succès selon James?' },
                            answer: { en: 'Discipline and hard work are keys to success.', sw: 'Nidhamu na bidii ndio funguo za mafanikio.', fr: 'La discipline et le travail acharné sont les clés du succès.' }
                        },
                        {
                            text: { en: 'What does James hope to do in the future?', sw: 'James anatumaini kufanya nini baadaye?', fr: 'Qu\'est-ce que James espère faire à l\'avenir?' },
                            answer: { en: 'He hopes to achieve his dreams and help his community.', sw: 'Anatumaini kufikia ndoto zake na kusaidia jamii yake.', fr: 'Il espère réaliser ses rêves et aider sa communauté.' }
                        }
                    ]
                },
                {
                    number: 16,
                    text: {
                        en: 'Complete the sentences.',
                        sw: 'Kamilisha sentensi.',
                        fr: 'Complétez les phrases.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'James is a student at ____________.', sw: 'James ni mwanafunzi wa ____________.', fr: 'James est étudiant à ____________.' },
                            answer: { en: 'Charles Academy', sw: 'Charles Academy', fr: 'Charles Academy' }
                        },
                        {
                            text: { en: 'He attends online classes through ____________.', sw: 'Anahudhuria madarasa ya mtandaoni kupitia ____________.', fr: 'Il assiste à des cours en ligne via ____________.' },
                            answer: { en: 'WhatsApp', sw: 'WhatsApp', fr: 'WhatsApp' }
                        },
                        {
                            text: { en: 'Teachers send exercises and ____________.', sw: 'Waalimu hutuma mazoezi na ____________.', fr: 'Les enseignants envoient des exercices et ____________.' },
                            answer: { en: 'recorded videos', sw: 'video zilizorekodiwa', fr: 'vidéos enregistrées' }
                        },
                        {
                            text: { en: 'James revises in the ____________.', sw: 'James anapitia katika ____________.', fr: 'James révise le ____________.' },
                            answer: { en: 'evening', sw: 'jioni', fr: 'soir' }
                        },
                        {
                            text: { en: 'He wants to achieve his ____________.', sw: 'Anataka kufikia ____________ yake.', fr: 'Il veut réaliser ses ____________.' },
                            answer: { en: 'dreams', sw: 'ndoto', fr: 'rêves' }
                        }
                    ]
                },
                {
                    number: 17,
                    text: {
                        en: 'Answer in your own words.',
                        sw: 'Jibu kwa maneno yako mwenyewe.',
                        fr: 'Répondez dans vos propres mots.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Why is discipline important for students?', sw: 'Kwa nini nidhamu ni muhimu kwa wanafunzi?', fr: 'Pourquoi la discipline est-elle importante pour les étudiants?' },
                            answer: { en: 'Discipline helps students stay focused, follow schedules, and learn effectively.', sw: 'Nidhamu husaidia wanafunzi kukaa kwenye mwelekeo, kufuata ratiba, na kujifunza kwa ufanisi.', fr: 'La discipline aide les étudiants à rester concentrés, à suivre les horaires et à apprendre efficacement.' }
                        },
                        {
                            text: { en: 'How does online learning help James?', sw: 'Kujifunza mtandaoni kunamsaidiaje James?', fr: 'Comment l\'apprentissage en ligne aide-t-il James?' },
                            answer: { en: 'Online learning allows James to study from home, access materials anytime, and ask questions easily.', sw: 'Kujifunza mtandaoni humruhusu James kusoma kutoka nyumbani, kupata nyenzo wakati wowote, na kuuliza maswali kwa urahisi.', fr: 'L\'apprentissage en ligne permet à James d\'étudier depuis chez lui, d\'accéder au matériel à tout moment et de poser des questions facilement.' }
                        },
                        {
                            text: { en: 'Why is revision important?', sw: 'Kwa nini kupitia ni muhimu?', fr: 'Pourquoi la révision est-elle importante?' },
                            answer: { en: 'Revision helps students remember what they learned and understand better.', sw: 'Kupitia husaidia wanafunzi kukumbuka kile walichojifunza na kuelewa vyema.', fr: 'La révision aide les étudiants à se souvenir de ce qu\'ils ont appris et à mieux comprendre.' }
                        },
                        {
                            text: { en: 'How can education help a community?', sw: 'Elimu inaweza kusaidiaje jamii?', fr: 'Comment l\'éducation peut-elle aider une communauté?' },
                            answer: { en: 'Education helps community members get skills, solve problems, and work together for development.', sw: 'Elimu husaidia wanajamii kupata ujuzi, kutatua matatizo, na kufanya kazi pamoja kwa maendeleo.', fr: 'L\'éducation aide les membres de la communauté à acquérir des compétences, à résoudre des problèmes et à travailler ensemble pour le développement.' }
                        },
                        {
                            text: { en: 'Why should students ask questions?', sw: 'Kwa nini wanafunzi wanapaswa kuuliza maswali?', fr: 'Pourquoi les étudiants devraient-ils poser des questions?' },
                            answer: { en: 'Asking questions helps students understand better and learn from their doubts.', sw: 'Kuuliza maswali kunasaidia wanafunzi kuelewa vyema zaidi na kujifunza kutoka kwa mashaka yao.', fr: 'Poser des questions aide les étudiants à mieux comprendre et à apprendre de leurs doutes.' }
                        }
                    ]
                },
                {
                    number: 18,
                    text: {
                        en: 'Identify activities James does:',
                        sw: 'Tambua shughuli ambazo James hufanya:',
                        fr: 'Identifiez les activités que James fait:'
                    },
                    subQuestions: [
                        {
                            text: { en: 'In the morning', sw: 'Asubuhi', fr: 'Le matin' },
                            answer: { en: 'Wakes up early and prepares for lessons', sw: 'Anaamka mapema na kujiandaa kwa masomo', fr: 'Se réveille tôt et se prépare pour les leçons' }
                        },
                        {
                            text: { en: 'After breakfast', sw: 'Baada ya kiamsha kinywa', fr: 'Après le petit déjeuner' },
                            answer: { en: 'Reviews notes and attends online classes', sw: 'Anapitia maelezo na kuhudhuria madarasa ya mtandaoni', fr: 'Révise les notes et assiste aux cours en ligne' }
                        },
                        {
                            text: { en: 'During the day', sw: 'Wakati wa mchana', fr: 'Pendant la journée' },
                            answer: { en: 'Watches recorded videos and completes exercises', sw: 'Anatazama video zilizorekodiwa na kukamilisha mazoezi', fr: 'Regarde des vidéos enregistrées et complète les exercices' }
                        },
                        {
                            text: { en: 'In the evening', sw: 'Jioni', fr: 'Le soir' },
                            answer: { en: 'Revises lessons and asks questions', sw: 'Anapitia masomo na kuuliza maswali', fr: 'Révise les leçons et pose des questions' }
                        },
                        {
                            text: { en: 'For his future', sw: 'Kwa ajili ya baadaye yake', fr: 'Pour son avenir' },
                            answer: { en: 'Hopes to achieve dreams and help community', sw: 'Anatumaini kufikia ndoto na kusaidia jamii', fr: 'Espère réaliser ses rêves et aider la communauté' }
                        }
                    ]
                },
                {
                    number: 19,
                    text: {
                        en: 'Choose the correct statement.',
                        sw: 'Chagua taarifa sahihi.',
                        fr: 'Choisissez la déclaration correcte.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'James studies carelessly / James studies seriously', sw: 'James anasoma kwa urahisi / James anasoma kwa umakini', fr: 'James étudie négligemment / James étudie sérieusement' },
                            answer: { en: 'James studies seriously', sw: 'James anasoma kwa umakini', fr: 'James étudie sérieusement' }
                        },
                        {
                            text: { en: 'He ignores lessons / He reviews notes', sw: 'Anapuuzia masomo / Anapitia maelezo', fr: 'Il ignore les leçons / Il révise les notes' },
                            answer: { en: 'He reviews notes', sw: 'Anapitia maelezo', fr: 'Il révise les notes' }
                        },
                        {
                            text: { en: 'He avoids teachers / He asks questions', sw: 'Anaepuka waalimu / Anauliza maswali', fr: 'Il évite les enseignants / Il pose des questions' },
                            answer: { en: 'He asks questions', sw: 'Anauliza maswali', fr: 'Il pose des questions' }
                        },
                        {
                            text: { en: 'He dislikes education / He values education', sw: 'Hapendi elimu / Anathamini elimu', fr: 'Il n\'aime pas l\'éducation / Il valorise l\'éducation' },
                            answer: { en: 'He values education', sw: 'Anathamini elimu', fr: 'Il valorise l\'éducation' }
                        },
                        {
                            text: { en: 'He wastes time / He works hard', sw: 'Anapoteza muda / Anafanya kazi kwa bidii', fr: 'Il perd du temps / Il travaille dur' },
                            answer: { en: 'He works hard', sw: 'Anafanya kazi kwa bidii', fr: 'Il travaille dur' }
                        }
                    ]
                },
                {
                    number: 20,
                    text: {
                        en: 'Short response.',
                        sw: 'Jibu fupi.',
                        fr: 'Réponse courte.'
                    },
                    subQuestions: [
                        {
                            text: { en: 'Who is James?', sw: 'James ni nani?', fr: 'Qui est James?' },
                            answer: { en: 'James is a student at Charles Academy.', sw: 'James ni mwanafunzi wa Charles Academy.', fr: 'James est étudiant à Charles Academy.' }
                        },
                        {
                            text: { en: 'What platform does he use to study?', sw: 'Anatumia jukwaa gani kusoma?', fr: 'Quelle plateforme utilise-t-il pour étudier?' },
                            answer: { en: 'He uses WhatsApp for online classes.', sw: 'Anatumia WhatsApp kwa madarasa ya mtandaoni.', fr: 'Il utilise WhatsApp pour les cours en ligne.' }
                        },
                        {
                            text: { en: 'What does he do when he does not understand?', sw: 'Anafanya nini wakati haelewi?', fr: 'Que fait-il quand il ne comprend pas?' },
                            answer: { en: 'He asks questions in the group.', sw: 'Anauliza maswali kwenye kikundi.', fr: 'Il pose des questions dans le groupe.' }
                        },
                        {
                            text: { en: 'What leads to success according to the passage?', sw: 'Nini kinasababisha mafanikio kulingana na kifungu?', fr: 'Qu\'est-ce qui mène au succès selon le passage?' },
                            answer: { en: 'Discipline and hard work lead to success.', sw: 'Nidhamu na bidii ndio zinazosababisha mafanikio.', fr: 'La discipline et le travail acharné mènent au succès.' }
                        },
                        {
                            text: { en: 'What is James\'s goal?', sw: 'Lengo la James ni nini?', fr: 'Quel est l\'objectif de James?' },
                            answer: { en: 'His goal is to achieve his dreams and help his community.', sw: 'Lengo lake ni kufikia ndoto zake na kusaidia jamii yake.', fr: 'Son objectif est de réaliser ses rêves et d\'aider sa communauté.' }
                        }
                    ]
                }
            ]
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
                en: 'GENERAL INSTRUCTIONS\n• Answer ALL questions.\n• Each question carries 5 marks.\n• Each sub-question carries 1 mark.\n• Write clearly and neatly.\n• Total: 100 marks',
                sw: 'MAELEKEZO YA JUMLA\n• Jibu maswali YOTE.\n• Kila swali lina alama 5.\n• Kila swali ndogo lina alama 1.\n• Andika kwa uwazi na usafi.\n• Jumla: alama 100',
                fr: 'INSTRUCTIONS GÉNÉRALES\n• Répondez à TOUTES les questions.\n• Chaque question vaut 5 points.\n• Chaque sous-question vaut 1 point.\n• Écrivez clairement et soigneusement.\n• Total: 100 points'
            },
            questions: [
                {
                    number: 1,
                    text: {
                        en: 'Choose the correct verb form.',
                        sw: 'Chagua umbo sahihi la kitenzi.',
                        fr: 'Choisissez la forme correcte du verbe.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She _____ to school every day. (go/goes/going)',
                                sw: 'Yeye _____ shuleni kila siku. (kwenda/huenda/anaenda)',
                                fr: 'Elle _____ à l\'école chaque jour. (aller/va/allant)'
                            },
                            answer: {
                                en: 'goes',
                                sw: 'huenda',
                                fr: 'va'
                            }
                        },
                        {
                            text: {
                                en: 'They _____ football yesterday. (play/played/playing)',
                                sw: 'Wao _____ mpira jana. (cheza/waliicheza/wakicheza)',
                                fr: 'Ils _____ football hier. (jouer/ont joué/jouant)'
                            },
                            answer: {
                                en: 'played',
                                sw: 'waliicheza',
                                fr: 'ont joué'
                            }
                        },
                        {
                            text: {
                                en: 'I _____ English now. (study/am studying/studied)',
                                sw: 'Mimi _____ Kiingereza sasa. (soma/ninasoma/nilisoma)',
                                fr: 'Je _____ anglais maintenant. (étudier/suis en train d\'étudier/ai étudié)'
                            },
                            answer: {
                                en: 'am studying',
                                sw: 'ninasoma',
                                fr: 'suis en train d\'étudier'
                            }
                        },
                        {
                            text: {
                                en: 'He _____ already finished his work. (has/have/had)',
                                sw: 'Yeye _____ tayari kumaliza kazi yake. (ame/ana/alikuwa na)',
                                fr: 'Il _____ déjà fini son travail. (a/avoir/avait)'
                            },
                            answer: {
                                en: 'has',
                                sw: 'amesha',
                                fr: 'a'
                            }
                        },
                        {
                            text: {
                                en: 'We _____ to the market tomorrow. (go/will go/went)',
                                sw: 'Sisi _____ sokoni kesho. (twaenda/tutaenda/tulienda)',
                                fr: 'Nous _____ au marché demain. (aller/irons/sommes allés)'
                            },
                            answer: {
                                en: 'will go',
                                sw: 'tutaenda',
                                fr: 'irons'
                            }
                        }
                    ]
                },
                {
                    number: 2,
                    text: {
                        en: 'Fill in the blanks with correct articles (a, an, the, or no article).',
                        sw: 'Jaza nafasi kwa viambishi sahihi (a, an, the, au hakuna kiambishi).',
                        fr: 'Remplissez les blancs avec les articles corrects (a, an, the, ou pas d\'article).'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She is _____ honest person.',
                                sw: 'Yeye ni _____ mtu mwaminifu.',
                                fr: 'Elle est _____ personne honnête.'
                            },
                            answer: {
                                en: 'an',
                                sw: 'an',
                                fr: 'une'
                            }
                        },
                        {
                            text: {
                                en: 'I saw _____ elephant at _____ zoo.',
                                sw: 'Niliona _____ tembo _____ bustani ya wanyama.',
                                fr: 'J\'ai vu _____ éléphant _____ zoo.'
                            },
                            answer: {
                                en: 'an, the',
                                sw: 'tembo, kwenye',
                                fr: 'un, au'
                            }
                        },
                        {
                            text: {
                                en: '_____ sun rises in _____ east.',
                                sw: '_____ jua linachomoza _____ mashariki.',
                                fr: '_____ soleil se lève _____ est.'
                            },
                            answer: {
                                en: 'The, the',
                                sw: 'Jua, mashariki',
                                fr: 'Le, à l\''
                            }
                        },
                        {
                            text: {
                                en: 'He is _____ university student.',
                                sw: 'Yeye ni _____ mwanafunzi wa chuo kikuu.',
                                fr: 'Il est _____ étudiant universitaire.'
                            },
                            answer: {
                                en: 'a',
                                sw: 'mwanafunzi',
                                fr: 'un'
                            }
                        },
                        {
                            text: {
                                en: 'We need _____ water to survive.',
                                sw: 'Tunahitaji _____ maji kuishi.',
                                fr: 'Nous avons besoin _____ eau pour survivre.'
                            },
                            answer: {
                                en: 'no article',
                                sw: 'maji',
                                fr: 'd\''
                            }
                        }
                    ]
                },
                {
                    number: 3,
                    text: {
                        en: 'Choose the correct preposition.',
                        sw: 'Chagua kiambishi sahihi.',
                        fr: 'Choisissez la préposition correcte.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'The book is _____ the table. (on/in/at)',
                                sw: 'Kitabu kiko _____ meza. (juu ya/ndani ya/karibu na)',
                                fr: 'Le livre est _____ la table. (sur/dans/à)'
                            },
                            answer: {
                                en: 'on',
                                sw: 'juu ya',
                                fr: 'sur'
                            }
                        },
                        {
                            text: {
                                en: 'She is good _____ mathematics. (at/in/on)',
                                sw: 'Yeye ni mzuri _____ hesabu. (katika/ndani/juu ya)',
                                fr: 'Elle est bonne _____ mathématiques. (en/dans/sur)'
                            },
                            answer: {
                                en: 'at',
                                sw: 'katika',
                                fr: 'en'
                            }
                        },
                        {
                            text: {
                                en: 'We will meet _____ 3:00 PM. (at/on/in)',
                                sw: 'Tutakutana _____ saa tisa. (kwenye/siku/katika)',
                                fr: 'Nous nous rencontrerons _____ 15h00. (à/le/en)'
                            },
                            answer: {
                                en: 'at',
                                sw: 'saa',
                                fr: 'à'
                            }
                        },
                        {
                            text: {
                                en: 'I am interested _____ learning English. (in/on/at)',
                                sw: 'Nina nia _____ kujifunza Kiingereza. (katika/juu ya/kwenye)',
                                fr: 'Je suis intéressé _____ apprendre l\'anglais. (par/sur/à)'
                            },
                            answer: {
                                en: 'in',
                                sw: 'katika',
                                fr: 'par'
                            }
                        },
                        {
                            text: {
                                en: 'She arrived _____ Monday. (on/at/in)',
                                sw: 'Alifika _____ Jumatatu. (siku/saa/katika)',
                                fr: 'Elle est arrivée _____ lundi. (le/à/en)'
                            },
                            answer: {
                                en: 'on',
                                sw: 'Jumatatu',
                                fr: 'le'
                            }
                        }
                    ]
                },
                {
                    number: 4,
                    text: {
                        en: 'Change the sentences to negative form.',
                        sw: 'Badilisha sentensi hizo kuwa umbo hasi.',
                        fr: 'Changez les phrases en forme négative.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She likes coffee.',
                                sw: 'Yeye anapenda kahawa.',
                                fr: 'Elle aime le café.'
                            },
                            answer: {
                                en: 'She does not like coffee.',
                                sw: 'Yeye hapendi kahawa.',
                                fr: 'Elle n\'aime pas le café.'
                            }
                        },
                        {
                            text: {
                                en: 'They are students.',
                                sw: 'Wao ni wanafunzi.',
                                fr: 'Ils sont étudiants.'
                            },
                            answer: {
                                en: 'They are not students.',
                                sw: 'Wao si wanafunzi.',
                                fr: 'Ils ne sont pas étudiants.'
                            }
                        },
                        {
                            text: {
                                en: 'He can swim.',
                                sw: 'Yeye anaweza kuogelea.',
                                fr: 'Il sait nager.'
                            },
                            answer: {
                                en: 'He cannot swim.',
                                sw: 'Yeye hawezi kuogelea.',
                                fr: 'Il ne sait pas nager.'
                            }
                        },
                        {
                            text: {
                                en: 'We went to school yesterday.',
                                sw: 'Tulienda shuleni jana.',
                                fr: 'Nous sommes allés à l\'école hier.'
                            },
                            answer: {
                                en: 'We did not go to school yesterday.',
                                sw: 'Hatukuenda shuleni jana.',
                                fr: 'Nous ne sommes pas allés à l\'école hier.'
                            }
                        },
                        {
                            text: {
                                en: 'I have finished my homework.',
                                sw: 'Nimeshamaliza kazi yangu ya nyumbani.',
                                fr: 'J\'ai fini mes devoirs.'
                            },
                            answer: {
                                en: 'I have not finished my homework.',
                                sw: 'Sijamaliza kazi yangu ya nyumbani.',
                                fr: 'Je n\'ai pas fini mes devoirs.'
                            }
                        }
                    ]
                },
                {
                    number: 5,
                    text: {
                        en: 'Change the sentences to interrogative form.',
                        sw: 'Badilisha sentensi hizo kuwa umbo la swali.',
                        fr: 'Changez les phrases en forme interrogative.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She is a teacher.',
                                sw: 'Yeye ni mwalimu.',
                                fr: 'Elle est professeur.'
                            },
                            answer: {
                                en: 'Is she a teacher?',
                                sw: 'Je, yeye ni mwalimu?',
                                fr: 'Est-elle professeur?'
                            }
                        },
                        {
                            text: {
                                en: 'They play football.',
                                sw: 'Wao wanacheza mpira.',
                                fr: 'Ils jouent au football.'
                            },
                            answer: {
                                en: 'Do they play football?',
                                sw: 'Je, wao wanacheza mpira?',
                                fr: 'Jouent-ils au football?'
                            }
                        },
                        {
                            text: {
                                en: 'He has a car.',
                                sw: 'Yeye ana gari.',
                                fr: 'Il a une voiture.'
                            },
                            answer: {
                                en: 'Does he have a car?',
                                sw: 'Je, yeye ana gari?',
                                fr: 'A-t-il une voiture?'
                            }
                        },
                        {
                            text: {
                                en: 'We will come tomorrow.',
                                sw: 'Sisi tutakuja kesho.',
                                fr: 'Nous viendrons demain.'
                            },
                            answer: {
                                en: 'Will we come tomorrow?',
                                sw: 'Je, sisi tutakuja kesho?',
                                fr: 'Viendrons-nous demain?'
                            }
                        },
                        {
                            text: {
                                en: 'You can speak English.',
                                sw: 'Wewe unaweza kuongea Kiingereza.',
                                fr: 'Tu peux parler anglais.'
                            },
                            answer: {
                                en: 'Can you speak English?',
                                sw: 'Je, wewe unaweza kuongea Kiingereza?',
                                fr: 'Peux-tu parler anglais?'
                            }
                        }
                    ]
                },
                {
                    number: 6,
                    text: {
                        en: 'Choose the correct adjective or adverb.',
                        sw: 'Chagua kivumishi au kielezi sahihi.',
                        fr: 'Choisissez l\'adjectif ou l\'adverbe correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She speaks English _____. (fluent/fluently)',
                                sw: 'Yeye anaongea Kiingereza _____. (kifasaha/kwa ufasaha)',
                                fr: 'Elle parle anglais _____. (courant/couramment)'
                            },
                            answer: {
                                en: 'fluently',
                                sw: 'kwa ufasaha',
                                fr: 'couramment'
                            }
                        },
                        {
                            text: {
                                en: 'This is the _____ book I have ever read. (good/better/best)',
                                sw: 'Hiki ndicho kitabu _____ nishawahi kusoma. (nzuri/bora/bora zaidi)',
                                fr: 'C\'est le livre _____ que j\'ai jamais lu. (bon/meilleur/le meilleur)'
                            },
                            answer: {
                                en: 'best',
                                sw: 'bora zaidi',
                                fr: 'le meilleur'
                            }
                        },
                        {
                            text: {
                                en: 'He runs _____. (fast/fastly)',
                                sw: 'Yeye anakimbia _____. (haraka/kwa haraka)',
                                fr: 'Il court _____. (vite/rapidement)'
                            },
                            answer: {
                                en: 'fast',
                                sw: 'haraka',
                                fr: 'vite'
                            }
                        },
                        {
                            text: {
                                en: 'Today is _____ than yesterday. (cold/colder)',
                                sw: 'Leo ni _____ kuliko jana. (baridi/baridi zaidi)',
                                fr: 'Aujourd\'hui est _____ qu\'hier. (froid/plus froid)'
                            },
                            answer: {
                                en: 'colder',
                                sw: 'baridi zaidi',
                                fr: 'plus froid'
                            }
                        },
                        {
                            text: {
                                en: 'She is a _____ singer. (good/well)',
                                sw: 'Yeye ni mwimbaji _____. (mzuri/vizuri)',
                                fr: 'Elle est une chanteuse _____. (bonne/bien)'
                            },
                            answer: {
                                en: 'good',
                                sw: 'mzuri',
                                fr: 'bonne'
                            }
                        }
                    ]
                },
                {
                    number: 7,
                    text: {
                        en: 'Correct the errors in the sentences.',
                        sw: 'Sahihisha makosa katika sentensi.',
                        fr: 'Corrigez les erreurs dans les phrases.'
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
                                sw: 'Sikuenda jana.',
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
                    number: 8,
                    text: {
                        en: 'Change the sentences to plural form.',
                        sw: 'Badilisha sentensi hizo kuwa umoja.',
                        fr: 'Changez les phrases au pluriel.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'The child is playing.',
                                sw: 'Mtoto anacheza.',
                                fr: 'L\'enfant joue.'
                            },
                            answer: {
                                en: 'The children are playing.',
                                sw: 'Watoto wanacheza.',
                                fr: 'Les enfants jouent.'
                            }
                        },
                        {
                            text: {
                                en: 'This is my book.',
                                sw: 'Hiki ni kitabu changu.',
                                fr: 'C\'est mon livre.'
                            },
                            answer: {
                                en: 'These are my books.',
                                sw: 'Hivi ni vitabu vyangu.',
                                fr: 'Ce sont mes livres.'
                            }
                        },
                        {
                            text: {
                                en: 'A woman is walking.',
                                sw: 'Mwanamke anatembea.',
                                fr: 'Une femme marche.'
                            },
                            answer: {
                                en: 'Women are walking.',
                                sw: 'Wanawake wanatembea.',
                                fr: 'Des femmes marchent.'
                            }
                        },
                        {
                            text: {
                                en: 'That is a beautiful flower.',
                                sw: 'Hilo ni ua zuri.',
                                fr: 'C\'est une belle fleur.'
                            },
                            answer: {
                                en: 'Those are beautiful flowers.',
                                sw: 'Hayo ni maua mazuri.',
                                fr: 'Ce sont de belles fleurs.'
                            }
                        },
                        {
                            text: {
                                en: 'The mouse is small.',
                                sw: 'Panya ni mdogo.',
                                fr: 'La souris est petite.'
                            },
                            answer: {
                                en: 'The mice are small.',
                                sw: 'Panya ni wadogo.',
                                fr: 'Les souris sont petites.'
                            }
                        }
                    ]
                },
                {
                    number: 9,
                    text: {
                        en: 'Combine the sentences using the given conjunctions.',
                        sw: 'Unganisha sentensi kwa kutumia viunganishi vilivyotolewa.',
                        fr: 'Combinez les phrases en utilisant les conjonctions données.'
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
                                en: 'He studied hard. He passed the exam. (so)',
                                sw: 'Alisoma kwa bidii. Alifaulu mtihani. (hivyo)',
                                fr: 'Il a étudié dur. Il a réussi l\'examen. (donc)'
                            },
                            answer: {
                                en: 'He studied hard so he passed the exam.',
                                sw: 'Alisoma kwa bidii hivyo akafaulu mtihani.',
                                fr: 'Il a étudié dur donc il a réussi l\'examen.'
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
                                en: 'You call me. I will come. (if)',
                                sw: 'Wewe unampigia simu. Nitakuja. (kama)',
                                fr: 'Tu m\'appelles. Je viendrai. (si)'
                            },
                            answer: {
                                en: 'If you call me, I will come.',
                                sw: 'Kama utanipigia simu, nitakuja.',
                                fr: 'Si tu m\'appelles, je viendrai.'
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
                    number: 10,
                    text: {
                        en: 'Complete the sentences with correct pronouns.',
                        sw: 'Kamilisha sentensi kwa viwakilishi sahihi.',
                        fr: 'Complétez les phrases avec les pronoms corrects.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: '_____ is my friend. (She/Her)',
                                sw: '_____ ni rafiki yangu. (Yeye/Wake)',
                                fr: '_____ est mon amie. (Elle/La)'
                            },
                            answer: {
                                en: 'She',
                                sw: 'Yeye',
                                fr: 'Elle'
                            }
                        },
                        {
                            text: {
                                en: 'This book belongs to _____. (I/me)',
                                sw: 'Kitabu hiki ni cha _____. (mimi/mimi)',
                                fr: 'Ce livre appartient à _____. (moi/je)'
                            },
                            answer: {
                                en: 'me',
                                sw: 'mimi',
                                fr: 'moi'
                            }
                        },
                        {
                            text: {
                                en: '_____ are going to the market. (We/Us)',
                                sw: '_____ tunaenda sokoni. (Sisi/Sisi)',
                                fr: '_____ allons au marché. (Nous/Nous)'
                            },
                            answer: {
                                en: 'We',
                                sw: 'Sisi',
                                fr: 'Nous'
                            }
                        },
                        {
                            text: {
                                en: 'He gave the pen to _____. (she/her)',
                                sw: 'Alimpa kalamu _____. (yeye/yeye)',
                                fr: 'Il a donné le stylo à _____. (elle/elle)'
                            },
                            answer: {
                                en: 'her',
                                sw: 'yeye',
                                fr: 'elle'
                            }
                        },
                        {
                            text: {
                                en: '_____ car is blue. (Their/Theirs)',
                                sw: 'Gari la _____ ni buluu. (wao/yao)',
                                fr: '_____ voiture est bleue. (Leur/Leur)'
                            },
                            answer: {
                                en: 'Their',
                                sw: 'wao',
                                fr: 'Leur'
                            }
                        }
                    ]
                },
                {
                    number: 11,
                    text: {
                        en: 'Choose the correct quantifier.',
                        sw: 'Chagua kiwakilishi sahihi cha kiasi.',
                        fr: 'Choisissez le quantificateur correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'There is _____ water in the bottle. (many/much)',
                                sw: 'Kuna _____ maji kwenye chupa. (mingi/mengi)',
                                fr: 'Il y a _____ eau dans la bouteille. (beaucoup/beaucoup)'
                            },
                            answer: {
                                en: 'much',
                                sw: 'maji mengi',
                                fr: 'beaucoup d\''
                            }
                        },
                        {
                            text: {
                                en: 'I have _____ books. (many/much)',
                                sw: 'Nina _____ vitabu. (vyingi/vingi)',
                                fr: 'J\'ai _____ livres. (beaucoup/beaucoup)'
                            },
                            answer: {
                                en: 'many',
                                sw: 'vitabu vingi',
                                fr: 'beaucoup de'
                            }
                        },
                        {
                            text: {
                                en: 'There are _____ students in the class. (a few/a little)',
                                sw: 'Kuna _____ wanafunzi darasani. (wachache/kadhaa)',
                                fr: 'Il y a _____ étudiants dans la classe. (quelques/un peu)'
                            },
                            answer: {
                                en: 'a few',
                                sw: 'wanafunzi wachache',
                                fr: 'quelques'
                            }
                        },
                        {
                            text: {
                                en: 'She needs _____ sugar. (a few/a little)',
                                sw: 'Anahitaji _____ sukari. (kidogo/kadhaa)',
                                fr: 'Elle a besoin _____ sucre. (un peu/quelques)'
                            },
                            answer: {
                                en: 'a little',
                                sw: 'sukari kidogo',
                                fr: 'un peu de'
                            }
                        },
                        {
                            text: {
                                en: 'We have _____ time left. (few/little)',
                                sw: 'Tuna _____ wakati uliobaki. (kidogo/kadhaa)',
                                fr: 'Nous avons _____ temps restant. (peu/peu)'
                            },
                            answer: {
                                en: 'little',
                                sw: 'wakati kidogo',
                                fr: 'peu de'
                            }
                        }
                    ]
                },
                {
                    number: 12,
                    text: {
                        en: 'Change the voice of the sentences.',
                        sw: 'Badilisha sauti ya sentensi.',
                        fr: 'Changez la voix des phrases.'
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
                                en: 'The teacher teaches the students.',
                                sw: 'Mwalimu anawafundisha wanafunzi.',
                                fr: 'Le professeur enseigne aux étudiants.'
                            },
                            answer: {
                                en: 'The students are taught by the teacher.',
                                sw: 'Wanafunzi wanafundishwa na mwalimu.',
                                fr: 'Les étudiants sont enseignés par le professeur.'
                            }
                        },
                        {
                            text: {
                                en: 'He will finish the work.',
                                sw: 'Atamaliza kazi.',
                                fr: 'Il finira le travail.'
                            },
                            answer: {
                                en: 'The work will be finished by him.',
                                sw: 'Kazi itamalizwa naye.',
                                fr: 'Le travail sera fini par lui.'
                            }
                        },
                        {
                            text: {
                                en: 'People speak English worldwide.',
                                sw: 'Watu wanaongea Kiingereza duniani kote.',
                                fr: 'Les gens parlent anglais dans le monde entier.'
                            },
                            answer: {
                                en: 'English is spoken worldwide.',
                                sw: 'Kiingereza kinazungumzwa duniani kote.',
                                fr: 'L\'anglais est parlé dans le monde entier.'
                            }
                        }
                    ]
                },
                {
                    number: 13,
                    text: {
                        en: 'Complete the conditional sentences.',
                        sw: 'Kamilisha sentensi za masharti.',
                        fr: 'Complétez les phrases conditionnelles.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'If I study hard, I _____ pass the exam.',
                                sw: 'Kama nitasoma kwa bidii, mimi _____ kufaulu mtihani.',
                                fr: 'Si j\'étudie dur, je _____ réussir l\'examen.'
                            },
                            answer: {
                                en: 'will',
                                sw: 'nitafaulu',
                                fr: 'vais'
                            }
                        },
                        {
                            text: {
                                en: 'If I had money, I _____ buy a car.',
                                sw: 'Kama ningekuwa na pesa, mimi _____ kununua gari.',
                                fr: 'Si j\'avais de l\'argent, j\'_____ acheter une voiture.'
                            },
                            answer: {
                                en: 'would',
                                sw: 'ningenunua',
                                fr: 'achèterais'
                            }
                        },
                        {
                            text: {
                                en: 'If I see him, I _____ tell him.',
                                sw: 'Kama nitamwona, mimi _____ kumwambia.',
                                fr: 'Si je le vois, je _____ lui dire.'
                            },
                            answer: {
                                en: 'will',
                                sw: 'nitamwambia',
                                fr: 'vais'
                            }
                        },
                        {
                            text: {
                                en: 'If I were you, I _____ go to the doctor.',
                                sw: 'Kama ningekuwa wewe, mimi _____ kwenda daktari.',
                                fr: 'Si j\'étais toi, j\'_____ aller chez le médecin.'
                            },
                            answer: {
                                en: 'would',
                                sw: 'ningekwenda',
                                fr: 'irais'
                            }
                        },
                        {
                            text: {
                                en: 'If it rains, we _____ stay at home.',
                                sw: 'Kama itanyesha, sisi _____ kubaki nyumbani.',
                                fr: 'S\'il pleut, nous _____ rester à la maison.'
                            },
                            answer: {
                                en: 'will',
                                sw: 'tutabaki',
                                fr: 'allons'
                            }
                        }
                    ]
                },
                {
                    number: 14,
                    text: {
                        en: 'Identify the part of speech of the underlined words.',
                        sw: 'Tambua sehemu ya usemi wa maneno yaliyopigwa mstari.',
                        fr: 'Identifiez la partie du discours des mots soulignés.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She runs quickly.',
                                sw: 'Yeye anakimbia haraka.',
                                fr: 'Elle court rapidement.'
                            },
                            answer: {
                                en: 'adverb',
                                sw: 'kielezi',
                                fr: 'adverbe'
                            }
                        },
                        {
                            text: {
                                en: 'The beautiful flower.',
                                sw: 'Ua zuri.',
                                fr: 'La belle fleur.'
                            },
                            answer: {
                                en: 'adjective',
                                sw: 'kivumishi',
                                fr: 'adjectif'
                            }
                        },
                        {
                            text: {
                                en: 'He and I are friends.',
                                sw: 'Yeye na mimi ni marafiki.',
                                fr: 'Lui et moi sommes amis.'
                            },
                            answer: {
                                en: 'pronoun',
                                sw: 'kiwakilishi',
                                fr: 'pronom'
                            }
                        },
                        {
                            text: {
                                en: 'They play football.',
                                sw: 'Wao wanacheza mpira.',
                                fr: 'Ils jouent au football.'
                            },
                            answer: {
                                en: 'verb',
                                sw: 'kitenzi',
                                fr: 'verbe'
                            }
                        },
                        {
                            text: {
                                en: 'The book is on the table.',
                                sw: 'Kitabu kiko juu ya meza.',
                                fr: 'Le livre est sur la table.'
                            },
                            answer: {
                                en: 'preposition',
                                sw: 'kiambishi',
                                fr: 'préposition'
                            }
                        }
                    ]
                },
                {
                    number: 15,
                    text: {
                        en: 'Write the comparative and superlative forms.',
                        sw: 'Andika umbo la kulinganisha na kushinda.',
                        fr: 'Écrivez les formes comparatives et superlatives.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'tall',
                                sw: 'mrefu',
                                fr: 'grand'
                            },
                            answer: {
                                en: 'taller, tallest',
                                sw: 'mrefu zaidi, mrefu zaidi kabisa',
                                fr: 'plus grand, le plus grand'
                            }
                        },
                        {
                            text: {
                                en: 'good',
                                sw: 'nzuri',
                                fr: 'bon'
                            },
                            answer: {
                                en: 'better, best',
                                sw: 'bora, bora zaidi',
                                fr: 'meilleur, le meilleur'
                            }
                        },
                        {
                            text: {
                                en: 'beautiful',
                                sw: 'zuri',
                                fr: 'beau'
                            },
                            answer: {
                                en: 'more beautiful, most beautiful',
                                sw: 'zuri zaidi, zuri zaidi kabisa',
                                fr: 'plus beau, le plus beau'
                            }
                        },
                        {
                            text: {
                                en: 'bad',
                                sw: 'mbaya',
                                fr: 'mauvais'
                            },
                            answer: {
                                en: 'worse, worst',
                                sw: 'mbaya zaidi, mbaya zaidi kabisa',
                                fr: 'pire, le pire'
                            }
                        },
                        {
                            text: {
                                en: 'far',
                                sw: 'mbali',
                                fr: 'loin'
                            },
                            answer: {
                                en: 'farther/further, farthest/furthest',
                                sw: 'mbali zaidi, mbali zaidi kabisa',
                                fr: 'plus loin, le plus loin'
                            }
                        }
                    ]
                },
                {
                    number: 16,
                    text: {
                        en: 'Complete the sentences with correct tag questions.',
                        sw: 'Kamilisha sentensi kwa maswali ya saini sahihi.',
                        fr: 'Complétez les phrases avec les bonnes questions tags.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She is a student, _____?',
                                sw: 'Yeye ni mwanafunzi, _____?',
                                fr: 'Elle est étudiante, _____?'
                            },
                            answer: {
                                en: 'isn\'t she',
                                sw: 'si ndiyo?',
                                fr: 'n\'est-ce pas?'
                            }
                        },
                        {
                            text: {
                                en: 'They play football, _____?',
                                sw: 'Wao wanacheza mpira, _____?',
                                fr: 'Ils jouent au football, _____?'
                            },
                            answer: {
                                en: 'don\'t they',
                                sw: 'si ndiyo?',
                                fr: 'n\'est-ce pas?'
                            }
                        },
                        {
                            text: {
                                en: 'He didn\'t come, _____?',
                                sw: 'Yeye hakuja, _____?',
                                fr: 'Il n\'est pas venu, _____?'
                            },
                            answer: {
                                en: 'did he',
                                sw: 'si ndiyo?',
                                fr: 'n\'est-ce pas?'
                            }
                        },
                        {
                            text: {
                                en: 'You can swim, _____?',
                                sw: 'Wewe unaweza kuogelea, _____?',
                                fr: 'Tu peux nager, _____?'
                            },
                            answer: {
                                en: 'can\'t you',
                                sw: 'si ndiyo?',
                                fr: 'n\'est-ce pas?'
                            }
                        },
                        {
                            text: {
                                en: 'We will go, _____?',
                                sw: 'Sisi tutaenda, _____?',
                                fr: 'Nous irons, _____?'
                            },
                            answer: {
                                en: 'won\'t we',
                                sw: 'si ndiyo?',
                                fr: 'n\'est-ce pas?'
                            }
                        }
                    ]
                },
                {
                    number: 17,
                    text: {
                        en: 'Choose the correct reported speech.',
                        sw: 'Chagua usemi ulioripotiwa sahihi.',
                        fr: 'Choisissez le discours rapporté correct.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She said, "I am happy."',
                                sw: 'Alisema, "Mimi ni furaha."',
                                fr: 'Elle a dit, "Je suis heureuse."'
                            },
                            answer: {
                                en: 'She said that she was happy.',
                                sw: 'Alisema kwamba alikuwa na furaha.',
                                fr: 'Elle a dit qu\'elle était heureuse.'
                            }
                        },
                        {
                            text: {
                                en: 'He said, "I will come tomorrow."',
                                sw: 'Alisema, "Nitakuja kesho."',
                                fr: 'Il a dit, "Je viendrai demain."'
                            },
                            answer: {
                                en: 'He said that he would come the next day.',
                                sw: 'Alisema kwamba atakuja siku iliyofuata.',
                                fr: 'Il a dit qu\'il viendrait le lendemain.'
                            }
                        },
                        {
                            text: {
                                en: 'They said, "We have finished."',
                                sw: 'Walisema, "Tumemaliza."',
                                fr: 'Ils ont dit, "Nous avons fini."'
                            },
                            answer: {
                                en: 'They said that they had finished.',
                                sw: 'Walisema kwamba walikuwa wamemaliza.',
                                fr: 'Ils ont dit qu\'ils avaient fini.'
                            }
                        },
                        {
                            text: {
                                en: 'She said, "I can speak English."',
                                sw: 'Alisema, "Naweza kuongea Kiingereza."',
                                fr: 'Elle a dit, "Je peux parler anglais."'
                            },
                            answer: {
                                en: 'She said that she could speak English.',
                                sw: 'Alisema kwamba anaweza kuongea Kiingereza.',
                                fr: 'Elle a dit qu\'elle pouvait parler anglais.'
                            }
                        },
                        {
                            text: {
                                en: 'He said, "I went to school."',
                                sw: 'Alisema, "Nilienda shuleni."',
                                fr: 'Il a dit, "Je suis allé à l\'école."'
                            },
                            answer: {
                                en: 'He said that he had gone to school.',
                                sw: 'Alisema kwamba alikuwa amekwenda shuleni.',
                                fr: 'Il a dit qu\'il était allé à l\'école.'
                            }
                        }
                    ]
                },
                {
                    number: 18,
                    text: {
                        en: 'Identify the type of sentence.',
                        sw: 'Tambua aina ya sentensi.',
                        fr: 'Identifiez le type de phrase.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'She goes to school.',
                                sw: 'Yeye huenda shuleni.',
                                fr: 'Elle va à l\'école.'
                            },
                            answer: {
                                en: 'declarative',
                                sw: 'tamka',
                                fr: 'déclarative'
                            }
                        },
                        {
                            text: {
                                en: 'Where do you live?',
                                sw: 'Wewe unaishi wapi?',
                                fr: 'Où habites-tu?'
                            },
                            answer: {
                                en: 'interrogative',
                                sw: 'swali',
                                fr: 'interrogative'
                            }
                        },
                        {
                            text: {
                                en: 'Close the door!',
                                sw: 'Funga mlango!',
                                fr: 'Ferme la porte!'
                            },
                            answer: {
                                en: 'imperative',
                                sw: 'amri',
                                fr: 'impérative'
                            }
                        },
                        {
                            text: {
                                en: 'What a beautiful day!',
                                sw: 'Siku nzuri gani!',
                                fr: 'Quelle belle journée!'
                            },
                            answer: {
                                en: 'exclamatory',
                                sw: 'msisimko',
                                fr: 'exclamative'
                            }
                        },
                        {
                            text: {
                                en: 'Please help me.',
                                sw: 'Tafadhali nisaidie.',
                                fr: 'S\'il te plaît aide-moi.'
                            },
                            answer: {
                                en: 'imperative',
                                sw: 'amri',
                                fr: 'impérative'
                            }
                        }
                    ]
                },
                {
                    number: 19,
                    text: {
                        en: 'Complete the phrasal verbs.',
                        sw: 'Kamilisha vitenzi vya maneno.',
                        fr: 'Complétez les verbes à particule.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'Please _____ up the phone. (pick)',
                                sw: 'Tafadhali _____ simu. (kunyanyua)',
                                fr: 'S\'il te plaît _____ le téléphone. (répondre)'
                            },
                            answer: {
                                en: 'pick',
                                sw: 'inua',
                                fr: 'décroche'
                            }
                        },
                        {
                            text: {
                                en: 'I need to _____ out this form. (fill)',
                                sw: 'Nahitaji _____ fomu hii. (kujaza)',
                                fr: 'J\'ai besoin de _____ ce formulaire. (remplir)'
                            },
                            answer: {
                                en: 'fill',
                                sw: 'jaza',
                                fr: 'remplir'
                            }
                        },
                        {
                            text: {
                                en: 'Can you _____ after my cat? (look)',
                                sw: 'Unaweza _____ paka yangu? (kutazama)',
                                fr: 'Peux-tu _____ mon chat? (garder)'
                            },
                            answer: {
                                en: 'look',
                                sw: 'angalia',
                                fr: 'garder'
                            }
                        },
                        {
                            text: {
                                en: 'The plane will _____ off at 3 PM. (take)',
                                sw: 'Ndege ita _____ saa sita. (kuchukua)',
                                fr: 'L\'avion va _____ à 15h. (décoller)'
                            },
                            answer: {
                                en: 'take',
                                sw: 'ondoka',
                                fr: 'décoller'
                            }
                        },
                        {
                            text: {
                                en: 'Please _____ down the volume. (turn)',
                                sw: 'Tafadhali _____ sauti. (kuzungusha)',
                                fr: 'S\'il te plaît _____ le volume. (baisser)'
                            },
                            answer: {
                                en: 'turn',
                                sw: 'punguza',
                                fr: 'baisse'
                            }
                        }
                    ]
                },
                {
                    number: 20,
                    text: {
                        en: 'Correct the spelling errors.',
                        sw: 'Sahihisha makosa ya tahajia.',
                        fr: 'Corrigez les fautes d\'orthographe.'
                    },
                    subQuestions: [
                        {
                            text: {
                                en: 'recieve',
                                sw: 'pokea',
                                fr: 'recevoir'
                            },
                            answer: {
                                en: 'receive',
                                sw: 'pokea',
                                fr: 'recevoir'
                            }
                        },
                        {
                            text: {
                                en: 'seperate',
                                sw: 'tofautisha',
                                fr: 'séparer'
                            },
                            answer: {
                                en: 'separate',
                                sw: 'tofautisha',
                                fr: 'séparer'
                            }
                        },
                        {
                            text: {
                                en: 'definately',
                                sw: 'dhahiri',
                                fr: 'définitivement'
                            },
                            answer: {
                                en: 'definitely',
                                sw: 'dhahiri',
                                fr: 'définitivement'
                            }
                        },
                        {
                            text: {
                                en: 'occured',
                                sw: 'ilitokea',
                                fr: 'arrivé'
                            },
                            answer: {
                                en: 'occurred',
                                sw: 'ilitokea',
                                fr: 'arrivé'
                            }
                        },
                        {
                            text: {
                                en: 'neccessary',
                                sw: 'muhimu',
                                fr: 'nécessaire'
                            },
                            answer: {
                                en: 'necessary',
                                sw: 'muhimu',
                                fr: 'nécessaire'
                            }
                        }
                    ]
                }
            ]
        }
    }
};

module.exports = examsData;