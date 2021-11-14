import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const STORAGE_KEY = 'videoplayer-current-time';


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


    const onPlay = function ({ seconds }) {
      // дані є об'єктом, що містить властивості, характерні для цієї події
      // data is an object containing properties specific to that event
        localStorage.setItem(STORAGE_KEY, seconds);
    };

    player.on('play', onPlay);
//console.log(localStorage.getItem(STORAGE_KEY));
// on(подія: рядок, зворотний виклик: функція): void
// on(event: string, callback: function): void

// Додайте обробник подій для вказаної події. Викличе зворотний виклик з одним параметром data, який містить дані для цієї події. Див події нижче для деталей.

player.on('timeupdate', throttle(onPlay, 500)); {
  // data is an object containing properties specific to that event
};
// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.


player
  .setCurrentTime(localStorage.getItem(STORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });