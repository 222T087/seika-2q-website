import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
var player1;

window.onYouTubeIframeAPIReady = function () {
  player1 = new YT.Player('movie1', {
    videoId: 'S_msdXWYQ38',
    playerVars: {
      mute: 1,
    },
  });
};
