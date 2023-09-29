const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

// const randomButton = document.getElementById('btn');
// const quizContainers = document.querySelectorAll('.quiz-item');
// // Hàm để lấy một số ngẫu nhiên trong khoảng [min, max]
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// // Hàm để random câu trả lời cho các câu hỏi
// function randomizeAnswers() {
//     quizContainers.forEach(container => {
//         const answers = container.querySelectorAll('input[type="radio"]');
//         const randomIndex = getRandomNumber(0, answers.length - 1);

//         answers.forEach((answer, index) => {
//             if (index === randomIndex) {
//                 answer.checked = true;
//             } else {
//                 answer.checked = false;
//             }
//         });
//     });
// }
// // Xử lý sự kiện khi nhấn nút "Random Answer"
// randomButton.addEventListener('click', () => {
//     randomizeAnswers();
// });
// Lấy ra các phần tử HTML
const randomButton = document.getElementById('btn');
const quizContainers = document.querySelectorAll('.quiz-item');

// Hàm để lấy một số ngẫu nhiên trong khoảng [min, max]
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Hàm để random câu trả lời cho các câu hỏi
function randomizeAnswers() {
    quizContainers.forEach(container => {
        const answers = container.querySelectorAll('input[type="radio"]');
        const randomIndex = getRandomNumber(0, answers.length - 1);

        // Bỏ kiểm tra tất cả các câu trả lời trước
        answers.forEach(answer => {
            answer.checked = false;
        });

        // Kiểm tra chỉ một câu trả lời dựa trên randomIndex
        answers[randomIndex].checked = true;
    });
}

// Xử lý sự kiện khi nhấn nút "Random Answer"
randomButton.addEventListener('click', () => {
    randomizeAnswers();
});
