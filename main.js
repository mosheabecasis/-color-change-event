const $body=document.getElementsByTagName('body');
const $container=document.getElementById('container');
const $button=document.getElementById('btn');



let bgChange = (event)=>{
  const bgColors = ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff']; 
  const randomNumber = math.random() * bgColors.length;
  const randomIndex = math.floor(randomNumber);
  $body.style.backgroundColor =bgColors[randomIndex];
}
$button.addEventListener('click',bgChange);