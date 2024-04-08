document.addEventListener('DOMContentLoaded', function() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');

    // Функция для отправки GET-запроса
    function fetchData(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                return data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    // Функция для отображения вопроса и ответов
    function displayPoll(data) {
        pollTitle.textContent = data.data.title;

        // Создаем кнопки ответов
        data.data.answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.classList.add('poll__answer');
            answerButton.textContent = answer;
            answerButton.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            });
            pollAnswers.appendChild(answerButton);
        });
    }

    // Отправляем GET-запрос и обрабатываем полученные данные
    fetchData('https://students.netoservices.ru/nestjs-backend/poll')
        .then(data => {
            displayPoll(data);
        });
});