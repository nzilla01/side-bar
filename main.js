const menuBar= document.getElementById('bar');
const navBar= document.querySelector('.nav');
menuBar.addEventListener('click', function(){
  navBar.style.display='block';
  menuBar.style.display='none'
});
const cancel =document.getElementById('cancel');
cancel.addEventListener('click', function(){
  menuBar.style.display ='block'
  navBar.style.display='none'
});
const display = document.getElementById ('arrow1');
const menu =document.querySelector('.submenu1');

display.addEventListener( 'click', function(){
  if (menu.style.display === 'none') {
    menu.style.display='block'
    display.style.transform= 'rotate(180deg)'}
    else { 
      display.style.transform = 'rotate(360deg)'
      menu.style.display ='none'
    }
});

const arrow = document.getElementById ('arrow2');
const subMenu = document.querySelector('.submenu2');

arrow.addEventListener('click', function(){
if (subMenu.style.display === 'none') 
{
  subMenu.style.display='block'
  arrow.style.transform= 'rotate(180deg)'
}
  else {
    subMenu.style.display='none'
    arrow.style.transform='rotate(360deg)'
  }
});
