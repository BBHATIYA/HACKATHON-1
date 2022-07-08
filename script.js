
let a;
let id= 100;
let number = 1;
let numberOnBoard = 0;
let m = 0;
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
// Adding image pawn for player

let diceImg = document.getElementById("box"+number);
let imageTag = document.createElement("img");
imageTag.classList.add('img');
imageTag.setAttribute('id', 'counter');
imageTag.src = 'chess-pawn.png';
diceImg.appendChild(imageTag);


// New game button function

let playButton =document.getElementById('Play');
playButton.addEventListener('click', startPlay);

function startPlay()
{  
  number=1;
  document.getElementById("board").style.visibility = "visible";
  document.getElementById("dice").style.visibility = "visible";
  document.getElementById("Play").style.visibility = "hidden";
  document.getElementById("dice").innerHTML=dices[1];
}

// Dice button function with getting random dice

let diceButton = document.getElementById('dice');

diceButton.addEventListener('click', randomDice)

function randomDice()
{  
  document.getElementById("dice").disabled=false;
  let dices=["","⚀","⚁","⚂","⚃","⚄","⚅"];
  a= Math.ceil(Math.random()*6);
  document.getElementById("dice").innerHTML=dices[a];
  if(numberOnBoard+a>100)
    {
      a=0;
     }
     d=0;
     move()
}

 let move = function(){
  document.getElementById("dice").disabled = true;
  t=setInterval(move2,200)
}
let move2 =function()
{
   numberOnBoard++;
   m++;
   if(m < (a) || m==(a))
   {
     if(d==(a-1))
     {
       if(numberOnBoard == 37)
       {
         numberOnBoard = 3;
       }
       else if (numberOnBoard == 4)
       {
         numberOnBoard = 56;
       }
       else if (numberOnBoard == 28)
       {
         numberOnBoard = 10;
       }
       else if (numberOnBoard == 12)
       {
         numberOnBoard = 50;
       }
       else if (numberOnBoard == 14)
       {
         numberOnBoard = 55;
       }
       else if (numberOnBoard == 47)
       {
         numberOnBoard = 16;
       }
       else if (numberOnBoard == 22)
       {
         numberOnBoard = 58;
       }
       else if (numberOnBoard == 75)
       {
         numberOnBoard = 32;
       }
       else if (numberOnBoard == 41)
       {
         numberOnBoard = 79;
       }
       else if (numberOnBoard == 96)
       {
         numberOnBoard = 42;
       }
       else if (numberOnBoard == 54)
       {
         numberOnBoard = 88;
       } else if (numberOnBoard == 94){
        numberOnBoard = 71
       } else if (numberOnBoard==100){
             alert("Yeeee!!! You win...");
             document.getElementById("Play").style.visibility = "visible";
             document.getElementById("dice").style.visibility = "hidden";
             numberOnBoard=1;
           } else
           {
              numberOnBoard=numberOnBoard;
           }
     }
        let s=document.getElementById("counter");
        document.getElementById("box"+numberOnBoard).appendChild(s);
        d+=1;
   } else
     {
        m=0;
        numberOnBoard-=1;
        clearInterval(t);
        document.getElementById("dice").disabled=false;
     }
}
