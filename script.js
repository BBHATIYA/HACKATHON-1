
let a;
let id= 100;
let number = 1;
let n = 1;
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

document.getElementById("box"+number).innerHTML="<img id='counter' class='img' src='chess-pawn.png'></img>"
let play=function()
{
  number=1;
  document.getElementById("board").style.visibility = "visible";
  document.getElementById("dice").style.visibility = "visible";
  document.getElementById("Play").style.visibility = "hidden";
  document.getElementById("dice").innerHTML=dices[1];
}
let random = function()
{
  document.getElementById("dice").disabled=false;
  var dices = ["","&#9856","&#9857","&#9858","&#9859","&#9860","&#9861"];
  a = Math.ceil(Math.random()*6);
  document.getElementById("dice").innerHTML = dices[a];
  if(n+a>100)
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
   n++;
   m++;
   if(m < (a) || m==(a))
   {
     if(d==(a-1))
     {
       if(n == 37)
       {
         n = 3;
       }
       else if (n == 4)
       {
         n = 56;
       }
       else if (n == 28)
       {
         n = 10;
       }
       else if (n == 12)
       {
         n = 50;
       }
       else if (n == 14)
       {
         n = 55;
       }
       else if (n == 47)
       {
         n = 16;
       }
       else if (n == 22)
       {
         n = 58;
       }
       else if (n == 75)
       {
         n = 32;
       }
       else if (n == 41)
       {
         n = 79;
       }
       else if (n == 76)
       {
         n = 42;
       }
       else if (n == 54)
       {
         n = 88;
       }
     }
   }
}
