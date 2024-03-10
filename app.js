//問題文、選択肢、解答を用意する
const quiz = [
    {
        question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",//問題文
        answers: [//選択肢
            'スーパーファミコン',
            'プレイステーション2',
            'ニンテンドースイッチ',
            'ニンテンドーDS',
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",//問題文
        answers: [//選択肢
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ',
        ],
        correct: 'MOTHER2'
    }, {
        question: "ファイナルファンタジーⅣの主人公の名前は？",//問題文
        answers: [//選択肢
            'フリオニール',
            'クラウド',
            'ティーダ',
            'セシル',
        ],
        correct: 'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;

const setupQuiz = () => {
    //問題文をセット
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    //ボタンのテキストをセット
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解');
        score++;
    } else {
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength) {
        //問題数がまだあればこちらを実行
        setupQuiz();
    } else {
        //問題数がもうなければこちらを実行
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
}

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}

// const buttonClick = () => {
//     buttonIndex = 0; //buttonIndex初期化
//     while(buttonIndex < buttonLength) {
//         $button[buttonIndex].addEventListener('click', (e) => {
//             console.log(e);
//             if(correct === e.target.textContent) {
//                 window.alert('正解');
//             } else {
//                 window.alert('不正解');
//             }
//         });
//         buttonIndex++;
//     }
// }
// buttonClick();


// $button[0].addEventListener('click', () => {
//     if(correct === $button[0].textContent) {
//         window.alert('正解');
//     } else {
//         window.alert('不正解');
//     }
// });
// $button[1].addEventListener('click', () => {
//     if(correct === $button[1].textContent) {
//         window.alert('正解');
//     } else {
//         window.alert('不正解');
//     }
// });
// $button[2].addEventListener('click', () => {
//     if(correct === $button[2].textContent) {
//         window.alert('正解');
//     } else {
//         window.alert('不正解');
//     }
// });
// $button[3].addEventListener('click', () => {
//     if(correct === $button[3].textContent) {
//         window.alert('正解');
//     } else {
//         window.alert('不正解');
//     }
// });




// //回答された時の処理
// //whileを使ったやり方
// let i = 0;
// while(i < 4) {
//     //選択肢を表示させる
//     let answer = document.getElementsByTagName('button')[i];
//     answer.textContent = answers[i];
//     //ボタンを押された時に正誤判定をして、解答結果を表示させる
//     answer.addEventListener('click', () => {//選択肢ボタンを押した時
//         if(correct == answer.textContent){//正誤判定
//             alert('正解！');
//         } else {
//             alert('不正解！');
//         }
//     });
//     i++;
// }
// // //forを使ったやり方
// // for (let i = 0; i < answers.length; i++) {
// //     let answer = document.getElementsByTagName('button')[i];
// //     answer.textContent = answers[i];
// // }


