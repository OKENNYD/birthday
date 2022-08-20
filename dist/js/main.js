console.log('Hello World!')
window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  e.stopPropagation();
})

let audio = document.querySelector('audio');
let ads = document.getElementById('ads');
let btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  audio.play()
  ads.style.display='none'
})
