const words = [

    {word:"Adventure",meaning:"冒险"},
    {word:"Excellent",meaning:"优秀的"},
    {word:"Challenge",meaning:"挑战"},
    {word:"Opportunity",meaning:"机会"},
    {word:"Success",meaning:"成功"},
    {word:"Journey",meaning:"旅程"},
    {word:"Knowledge",meaning:"知识"},
    {word:"Progress",meaning:"进步"},
    {word:"Achieve",meaning:"实现"},
    {word:"Dream",meaning:"梦想"},
    {word:"Future",meaning:"未来"},
    {word:"Effort",meaning:"努力"},
    {word:"Ability",meaning:"能力"},
    {word:"Experience",meaning:"经验"},
    {word:"Improve",meaning:"提高"},
    {word:"Language",meaning:"语言"},
    {word:"Practice",meaning:"练习"},
    {word:"Education",meaning:"教育"},
    {word:"Victory",meaning:"胜利"},
    {word:"Confidence",meaning:"自信"}

];

let currentIndex = 0;
let learnedWords = 0;
let correctRate = 0;

function loadWord(){

    document.getElementById(
        "wordText"
    ).innerText =
    words[currentIndex].word;

    document.getElementById(
        "meaningText"
    ).innerText =
    words[currentIndex].meaning;

}

function nextWord(){

    currentIndex++;

    if(currentIndex >= words.length){

        currentIndex = 0;

    }

    learnedWords++;

    document.getElementById(
        "words"
    ).innerText =
    learnedWords;

    loadWord();

}

function speakWord(){

    const utter =
    new SpeechSynthesisUtterance(
        words[currentIndex].word
    );

    utter.lang = "en-US";

    speechSynthesis.speak(
        utter
    );

}

function checkQuiz(){

    const answer =
    document.querySelector(
        'input[name="answer"]:checked'
    );

    if(!answer){

        alert("请选择答案");
        return;

    }

    if(answer.value === "1"){

        document.getElementById(
            "quizResult"
        ).innerHTML =
        "✅ 回答正确";

        correctRate = 100;

    }else{

        document.getElementById(
            "quizResult"
        ).innerHTML =
        "❌ 回答错误";

        correctRate = 0;

    }

    document.getElementById(
        "accuracy"
    ).innerText =
    correctRate + "%";

}

const themeBtn =
document.getElementById(
    "themeBtn"
);

if(themeBtn){

    themeBtn.addEventListener(
        "click",
        ()=>{

            document.body.classList.toggle(
                "dark"
            );

        }
    );

}

loadWord();
