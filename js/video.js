const video = document.querySelector('.header-video .video');
const title = document.querySelector('.text-title');

// setTimeout(() => {
//   title.classList.add('animation');
// }, 6500);

setTimeout(() => {
  video.setAttribute('src', 'video/Comp_2.mp4');
  video.play();
}, 9000);
