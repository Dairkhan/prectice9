// Задача 1: Средняя оценка и соответствующая оценка
const students = [80, 77, 88, 95, 68]; // Оценки из таблицы

function calculateAverage(marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

function getGrade(average) {
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    else return 'F';
}

// Расчет средней оценки и вывод на страницу
const average = calculateAverage(students);
const grade = getGrade(average);
document.getElementById("averageOutput").innerText = `Средняя оценка: ${average.toFixed(2)}, Оценка: ${grade}`;

// Задача 3: Обработчик двойного клика
const dblClickElement = document.getElementById("dblClickElement");

dblClickElement.addEventListener("dblclick", () => {
    alert("Элемент был дважды кликнут!");
});

// Задача 4: Прогресс-бар
let progress = 0;

function updateProgressBar() {
    if (progress < 100) {
        progress += 20;
        document.getElementById("progressBar").style.width = progress + "%";
    }
}

// Автоматическое обновление прогресса каждые 2 секунды
setInterval(updateProgressBar, 2000);