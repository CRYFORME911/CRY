const word = "Adventure";

let learnedWords = 0;
let correctRate = 0;

// 发音
function speakWord() {

    const utter =
    new SpeechSynthesisUtterance(word);

    utter.lang = "en-US";

    speechSynthesis.speak(utter);
}

// 测验
function checkQuiz() {

    const answer =
    document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!answer) {
        alert("请选择答案");
        return;
    }

    if (answer.value === "1") {

        document.getElementById(
            "quizResult"
        ).innerHTML =
        "✅ 回答正确！";

        learnedWords++;
        correctRate = 100;

    } else {

        document.getElementById(
            "quizResult"
        ).innerHTML =
        "❌ 回答错误";

        correctRate = 0;
    }

    document.getElementById(
        "words"
    ).innerText =
    learnedWords;

    document.getElementById(
        "accuracy"
    ).innerText =
    correctRate + "%";
}

// 深色模式
const themeBtn =
document.getElementById(
    "themeBtn"
);

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

        }
    );

}
