
let a;
let id= 100;
let number = 1;
let dices=["","⚀","⚁","⚂","⚃","⚄","⚅"];



// Creating divs left and right

 for (let a=0;a<5;a++)
{
  for (let b=0;b<=9;b++)
    {
        let getBoard =document.getElementById("board");
        let divs = document.createElement('div');
        divs.classList.add('boardbox');
        divs.classList.add('left');
        let leftId = `box${id}`;
        divs.setAttribute('id', `box${id}`);  
        getBoard.appendChild(divs);
        id--;
    }
  for (let c=0;c<=9;c++)
    {
        let getBoard =document.getElementById("board");
        let divsRight = document.createElement('div');
        divsRight.classList.add('boardbox');
        divsRight.classList.add('right');
        let rightId = `box${id}`;
        divsRight.setAttribute('id', `box${id}`);  
        getBoard.appendChild(divsRight);
        id--;
    }
}

document.getElementById("box"+number).innerHTML="<img id='counter' class='img' scr= ./chess-pawn></img>"
var play=function()
{  
  number=1;
  document.getElementById("board").style.visibility = "visible";
  document.getElementById("dice").style.visibility = "visible";
  document.getElementById("Play").style.visibility = "hidden";
  document.getElementById("dice").innerHTML=dices[1];
}

