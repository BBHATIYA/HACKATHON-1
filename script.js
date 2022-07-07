
let a;
let id= 100;




 for (let a=0;a<5;a++)
{
  for (let b=0;b<=9;b++)
    {
    //   document.getElementById("board").innerHTML+="<div class='boardbox left' id='box"+id+"' ></div>"

    let getBoard =document.getElementById("board");
    let divs = document.createElement('div');
    divs.classList.add('boardbox');
    divs.classList.add('left');
    let leftId = `box${id}`;
    divs.setAttribute('id', `box${id}`);  
    getBoard.appendChild(divs);
    
    // console.log(getBoard);    
      id--;
    }
  for (let c=0;c<=9;c++)
    {
      document.getElementById("board").innerHTML+="<div class='boardbox right'id='box"+id+"'></div>"

    // let getBoard =document.getElementById("board");
    // let divsRight = document.createElement('div');
    // divs.classList.add('boardbox');
    // divs.classList.add('right');
    // let leftId = `box${id}`;
    // divsRight.setAttribute('id', `box${id}`);  
    // getBoard.appendChild(divsRight);

      id--;
    }
}


