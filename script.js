const words = [
    { word: "Adventure", meaning: "冒险" },
    { word: "Excellent", meaning: "优秀的" },
    { word: "Challenge", meaning: "挑战" },
    { word: "Opportunity", meaning: "机会" },
    { word: "Success", meaning: "成功" },
    { word: "Knowledge", meaning: "知识" },
    { word: "Future", meaning: "未来" },
    { word: "Language", meaning: "语言" },
    { word: "Practice", meaning: "练习" },
    { word: "Confidence", meaning: "自信" }
];

let currentIndex = 0;
let learnedWords = 0;

function updateWord() {

    document.getElementById("wordText").innerText =
        words[currentIndex].word;

    document.getElementById("meaningText").innerText =
        words[currentIndex].meaning;
}

function nextWord() {

    currentIndex++;

    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    learnedWords++;

    document.getElementById("words").innerText =
        learnedWords;

    updateWord();
}

function speakWord() {

    const speech =
        new SpeechSynthesisUtterance(
            words[currentIndex].word
        );

    speech.lang = "en-US";

    speechSynthesis.speak(speech);
}

document.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});

updateWord();
