
const random = function(){
  const hax = '0123456789ABCDEF'
  color = '#'
  for(let i=0;i<6;i++){
    color += hax[Math.floor(Math.random()*16)]
  }
  return color;
}
let change;
const startChangingColor = function(){
  function changeColr(){
    document.body.style.backgroundColor = random()
  }

  if(!change){change = setInterval(changeColr , 1000);}
  
}

const stopChangingColor = function(){
  clearInterval(change);
  change = null;
}



document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopChangingColor)

