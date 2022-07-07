
let a;
let id= 100;


for (let a=0;a<5;a++)
{
  for (let b=0;b<=9;b++)
    {
      document.getElementById("board").innerHTML+="<div class='boardbox left' id='box"+id+"' ></div>"
      id--;
    }
  for (let c=0;c<=9;c++)
    {
      document.getElementById("board").innerHTML+="<div class='boardbox right'id='box"+id+"'></div>"
      id--;
    }
}
