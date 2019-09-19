// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
    title: 'Тест на реального пацана',
    questions: [
        {
            text: "1. Закончите диалог: - Давай, Азат, пароль от телефона назови",
            responses: [
                {text: 'А) ВОСЕМЬ ДЕВЯТЬСОТ ПЯТЬДЕСЯТ ДВА'},
                {text: 'Б) Братан, ты рофлишь? Не рофли, пожалуйста'},
                {text: 'В) Женщину хочу!', correct: true},
                {text: 'Г) Гыгыгы, человечки', correct: true},
            ]
        }, {
            text: "2. Что «болело» у Азата перед пересдачей информатики? Ох, уж эти отмазы!",
            responses: [
                {text: 'А) Печень', correct: true},
                {text: 'Б) Сердце'},
                {text: 'В) Левая почка'},
                {text: 'Г) Нога'},
            ]
        }, {
            text: "3. Какое самое первое аниме ты посоветовал посмотреть Азату?",
            responses: [
                {text: 'А) Твоя апрельская ложь', correct: true},
                {text: 'Б) Созданный в Бездне'},
                {text: 'В) Гуррен Лаганн'},
                {text: 'Г) Тетрадь смерти'},
            ]
        }, {
            text: "4. Кто самый лучший сын Аллаха?",
            responses: [
                {text: 'А) Макс', correct: true},
                {text: 'Б) Азат'},
                {text: 'В) Жека'},
                {text: 'Г) Керб'},
                {text: 'Д) Нурик'},
            ]
        }, {
            text: "5. Тук-тук-тук, я - ???",
            responses: [
                {text: 'А) Человек-пездюк', correct: true},
                {text: 'Б) Железный человек'},
                {text: 'В) Человек-казах'},
                {text: 'Г) Человек-Паук'},
            ]
        }, {
            text: "6. Почему Азат просил тебя ударить его по ноге?",
            responses: [
                {text: 'А) За то, что Азат ударил тебя по больному колену, и ему стало стыдно', correct: true},
                {text: 'Б) У Азата болело колено'},
                {text: 'В) Азат ебанулся'},
                {text: 'Г) Человек-Паук'},
            ]
        }
    ]
};

new Vue({
    el: '#app',
    data: {
        quiz: quiz,
        // Store current question index
        questionIndex: 0,
        // An array initialized with "false" values for each question
        // It means: "did the user answered correctly to the question n?" "no".
        userResponses: Array(quiz.questions.length).fill(false)
    },
    // The view will trigger these methods on click
    methods: {
        // Go to next question
        next: function() {
            this.questionIndex++;
        },
        // Go to previous question
        prev: function() {
            this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function() {
            return this.userResponses.filter(function(val) { return val }).length;
        }
    }
});
