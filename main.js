const $body = document.getElementById('body');
const $container = document.getElementById('container');
const $button = document.getElementById('button');

const bgChange = ()=> {
  const bgColors = ['green','blue','crimson','pink']; 
  const randomNumber = Math.random() * bgColors.length;
  const randomIndex = Math.floor(randomNumber);
  $body.style.backgroundColor = bgColors[randomIndex];
}
$button.addEventListener('click',bgChange);

const bgChange2 = ()=> {
  const containerColors = ['yellow', 'red', 'orange', 'gold'];
  const randomNumber = Math.random() * containerColors.length;
  const randomIndex = Math.floor(randomNumber);
  $container.style.backgroundColor = containerColors[randomIndex];
}
$container.addEventListener('click',bgChange2);