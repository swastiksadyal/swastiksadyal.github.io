const userChoice = document.getElementById("userChoice");
const botChoice = document.getElementById("botChoice");
const scoreShow = document.getElementById("score");
const playground = document.getElementById("game");

const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");



let score = 10;
scoreShow.innerHTML = score;

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function click(input){
    const user = input;
    const bot = getRandomInt(3);
    userChoice.innerHTML = showInput(user);
    botChoice.innerHTML = showInput(bot);
    //sleep here
    await wait(700);
    winOrLose(user, bot);

}


function showInput(input){
    switch (input){
        case 1:
            return "🪨";
            break;
        case 2:
            return "📃";
            break;
        case 3:
            return "✂️"
            break;
        default:
            return "Nothing Yet ..."
    }
}

function getRandomInt(mx){
    return Math.floor(Math.random() * mx) + 1;
}

function t(s){
    switch (s){
        case "r":
            click(1);
            break;
        case "p":
            click(2);
            break;
        case "s":
            click(3);
            break;
    }
}

function point(w){
    if (w > 0){
        score += 5;
        showAnimations(1);
    } else if (w < 0){
        score -= 5;
        showAnimations(2);
    } else{
        score += 1;
        showAnimations(3);
    }
    scoreShow.innerHTML = score;
}

function showAnimations(anim){
    switch (anim) {
        case 1:
        hideNShow(win);
        break;
        case 2:
            hideNShow(lose);
            break;
        case 3:
            hideNShow(draw);
            break;
        default:
            console.log("bad attributes");
        
    }
}

async function hideNShow(attr){
    playground.setAttribute("hidden", "");
    attr.removeAttribute("hidden", "");
    console.log("the wait!");
    await wait(3000);
    attr.setAttribute("hidden", "");
    playground.removeAttribute("hidden", "");
    console.log("wait end");
}

/*
1 = rock
2 = paper
3 = scissors

1 = user win
-1 = bot win
0 = draw
*/
function judge(x,y){
    if (x == 1){
        switch (y){
            case 2:
                return -1;
            case 3:
                return 1;
            default:
                return 0;
            }
    } else if (x ==2){
        switch (y){
            case 1:
                return 1;
            case 3:
                return -1;
            default:
                return 0;
            }
    } else if (x == 3){
        switch (y){
            case 2:
                return 1;
            case 1:
                return -1;
            default:
                return 0;
            }
    }
    else{
        return 0;
    }
}

function winOrLose(user, bot){
    point(judge(user, bot));
}

