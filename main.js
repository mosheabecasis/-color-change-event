const $body=document.getElementById('body');
const $container=document.getElementById('container');
const $button=document.getElementById('button');



const bgChange = (event)=>{
  const bgColors = ['lightgreen','lightblue','crimson','lightpink']; 
  const randomNumber = math.random() * bgColors.length;
  const randomIndex = math.floor(randomNumber);
  $body.style.backgroundColor = bgColors[randomIndex];
}
$button.addEventListener('click',bgChange);