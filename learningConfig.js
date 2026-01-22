module.exports = {
    academyName: "Charles Academy",
    supportPhone: "255776831991",
    languages: {
        en: { name: "English", flag: "🇬🇧", code: "en" },
        sw: { name: "Kiswahili", flag: "🇹🇿", code: "sw" },
        fr: { name: "Français", flag: "🇫🇷", code: "fr" }
    },
    
    courses: [
        {
            id: "english",
            name: "English Language",
            description: "Master English grammar, vocabulary, and communication",
            languages: ["en", "sw", "fr"],
            icon: "📚",
            lessons: 12
        },
        {
            id: "kiswahili", 
            name: "Kiswahili",
            description: "Jifunze Kiswahili sanifu na mazungumzo",
            languages: ["sw", "en"],
            icon: "🇹🇿",
            lessons: 10
        },
        {
            id: "graphics",
            name: "Graphics Design",
            description: "Learn Photoshop, Illustrator, and design principles",
            languages: ["en", "sw"],
            icon: "🎨",
            lessons: 15
        },
        {
            id: "webdesign",
            name: "Website Design",
            description: "HTML, CSS, JavaScript and modern web development",
            languages: ["en", "sw"],
            icon: "💻",
            lessons: 20
        }
    ],
    
    activities: {
        learn: { name: "📚 Learn Lesson", emoji: "📚" },
        exercise: { name: "🧪 Practice Exercise", emoji: "🧪" },
        test: { name: "📝 Take Test", emoji: "📝" },
        exam: { name: "🎓 Final Exam", emoji: "🎓" },
        progress: { name: "📊 My Progress", emoji: "📊" },
        help: { name: "❓ Help & Support", emoji: "❓" }
    }
};