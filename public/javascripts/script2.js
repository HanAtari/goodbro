// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
var quiz = {
    title: 'Тест на реального пацана',
    questions: [
        {
            text: "1. Закончите диалог: - Давай, Азат, пароль от телефона назови",
            responses: [
                {text: 'ВОСЕМЬ ДЕВЯТЬСОТ ПЯТЬДЕСЯТ ДВА', correct: true},
                {text: 'Братан, ты рофлишь? Не рофли, пожалуйста'},
                {text: 'Женщину хочу!'},
                {text: 'Гыгыгы, человечки'},
            ]
        }, {
            text: "2. Что «болело» у Азата перед пересдачей информатики? Ох, уж эти отмазы!",
            responses: [
                {text: 'Печень'},
                {text: 'Сердце', correct: true},
                {text: 'Левая почка'},
                {text: 'Нога'},
            ]
        }, {
            text: "3. Какое самое первое аниме ты посоветовал посмотреть Азату?",
            responses: [
                {text: 'Твоя апрельская ложь'},
                {text: 'Созданный в Бездне'},
                {text: 'Гуррен Лаганн', correct: true},
                {text: 'Тетрадь смерти'},
            ]
        }, {
            text: "4. Кто самый лучший сын Аллаха?",
            responses: [
                {text: 'Макс'},
                {text: 'Азат', correct: true},
                {text: 'Жека'},
                {text: 'Керб'},
                {text: 'Нурик'},
            ]
        }, {
            text: "5. Тук-тук-тук, я - ???",
            responses: [
                {text: 'Человек-пездюк'},
                {text: 'Железный человек'},
                {text: 'Человек-казах'},
                {text: 'Человек-Паук', correct: true},
            ]
        }, {
            text: "6. Почему Азат просил тебя ударить его по ноге?",
            responses: [
                {text: 'За то, что Азат ударил тебя по больному колену, и ему стало стыдно', correct: true},
                {text: 'У Азата болело колено'},
                {text: 'Азат ебанулся'},
                {text: 'Человек-Паук'},
            ]
        }, {
            text: "7. Цвет волос Дарины при знакомстве с Никиткой",
            responses: [
                {text: 'Коричневый какой-то'},
                {text: 'Рыжий цвет'},
                {text: 'Цвет Хугардена', correct: true},
                {text: 'Цвет КБ'},
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
