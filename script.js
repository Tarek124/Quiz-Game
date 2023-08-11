let questions = [
    {
        que: 'How many penalties are usually taken in a penalty shoot-out?',
        numb: 1,
        ans: 5,
        options: [3, 7, 5, 9]
    },
    {
        que: 'Which football club does David Beckham play for?',
        numb: 2,
        ans: "Real Madrid",
        options: ["Manchester United", "Liverpool", "Real Madrid", "Bercelona"]
    },
    {
        que: 'Who won the 1998 Football World Cup Final?',
        numb: 3,
        ans: "France",
        options: ["France", "Brazil", "Portugal", "Wales"]
    },
    {
        que: ' What is the main color of Brazil’s national team shirt?',
        numb: 4,
        ans: "Yellow",
        options: ["Red", "Black", "Pink", "Yellow"]
    },
    {
        que: 'World Best Football Player ?',
        numb: 5,
        ans: "Ronaldo",
        options: ["Messi", "Neymer", "Mbappe", "Ronaldo"]
    },
    {
        que: 'Where were the 2002 Football World Cup finals held?',
        numb: 6,
        ans: "Japan & Korea",
        options: ["Japan & Korea", "Germany", "Scotland", "Colombia"]
    },
    {
        que: 'Celtic and Rangers plays their football in which Scottish city?',
        numb: 7,
        ans: "Glasgow",
        options: ["Edinburgh", "Glasgow", "Aberdeen", "Dundee"]
    },
    {
        que: 'What color cards do the referees carry in a football match?',
        numb: 8,
        ans: "Red and Yellow",
        options: ["Red and Yellow", "Black and White", "Red and Green", "Yellow and Orange"]
    },
    {
        que: 'Real Madrid plays football in which European country?',
        numb: 9,
        ans: "Spain",
        options: ["Germany", "Scotland", "Spain", "Italy"]
    },
    {
        que: 'A spot-kick is taken from where?',
        numb: 10,
        ans: "The Penalty Spot",
        options: ["The Centre Spot", "The Penalty Spot", "The Ink Spot", "On The Spot"]
    },
    {
        que: 'What is the usual length of time allowed for half-time interval in a football match?',
        numb: 11,
        ans: "15 minutes",
        options: ["10 minutes", '15 minutes', "1 hour", "25 minutes"]
    },

]


const firstBtn = document.getElementById("firstBtn"),
    exit = document.getElementById("exit"),
    cntinue = document.getElementById("continue"),
    secondPage = document.getElementById("secondPage"),
    MyQuizApp = document.getElementById("MyQuizApp"),
    thirdPage = document.getElementById('thirdPage'),
    timers = document.querySelector('#time'),
    option = document.getElementById('option'),
    queText = document.getElementById('que_text'),
    Que_num = document.getElementById('Que_num'),
    Next_que = document.getElementById("Next_que"),
    bodyDiv = document.getElementById('bodyDiv');

thirdPage.style.cssText = `display:none;`

firstBtn.addEventListener('click', () => {
    secondPage.style.cssText = `display: block;`
})

exit.addEventListener("click", () => {
    secondPage.style.cssText = `display: none;`

})
cntinue.addEventListener('click', () => {
    secondPage.style.cssText = `display: none;`
    MyQuizApp.style.cssText = `display: none;`
    thirdPage.style.cssText = `display: block;`
    startTimer(15);





    let num = 0;
    Next_que.addEventListener('click', () => {
        let value = timers.innerText;
        if (value == 0) {
            if (num < questions.length - 1) {
                num++
                showQusetion(num)
                startTimer(15);
            } else {
                console.log("you're task is done")
            }
        }

    })


})



function startTimer(duration) {
    var timer = duration, seconds;
    const myInterval = setInterval(() => {
        seconds = parseInt(timer % 60, 10);

        timers.textContent = seconds;
        console.log(timer)
        if (seconds > 0) {
            if (--timer < 0) {
                timer = duration;
            }
        }
        else {
            timer.textContent = 0
            clearInterval(myInterval)
        }

    }, 1000);
}

function showQusetion(e) {
    let que_tag = questions[e].numb + ". " + questions[e].que;
    queText.innerText = que_tag

    let que_op = "<li onclick='optionSelected(this)'>" + questions[e].options[0] + "</li>" +
        "<li onclick='optionSelected(this)'>" + questions[e].options[1] + "</li>" +
        "<li onclick='optionSelected(this)' >" + questions[e].options[2] + "</li>" +
        "<li onclick='optionSelected(this)' >" + questions[e].options[3] + "</li>";
    option.innerHTML = que_op

    Que_num.innerText = questions[e].numb


}
function optionSelected(answer) {
    let nums = parseInt(Que_num.textContent) - 1
    let userAns = answer.innerText;
    let correctAns = questions[nums].ans;

    console.log(answer)

    if (userAns == correctAns) {
        answer.className = "rightAns"
        let i = document.createElement("i");
        i.className = "fa-regular fa-circle-check color"
        answer.appendChild(i);

    } else {
        answer.className = "wrongAns"
        let i = document.createElement("i");
        i.className = "fa-regular fa-circle-xmark colorwrong"
        answer.appendChild(i);
    }
    setTimeout(() => {
        showQusetion(nums + 1)
        startTimer(15);
    }, 2000)
}
setInterval(() => {
    if (parseInt(timers.innerText) == 0) {
        let x = parseInt(Que_num.innerText)
        showQusetion(x)
        startTimer(15);
    }
}, 1500)

showQusetion(0)



