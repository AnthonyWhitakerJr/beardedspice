//
//  RedditPlaylister.js
//  BeardedSpice
//
//  Created by Alex Evers on 10/28/2016.
//  Copyright (c) 2016 GPL v3 http://www.gnu.org/licenses/gpl.html
//

BSStrategy = {
  version: 1,
  displayName: "Reddit Playlister",
  accepts: {
    method: "predicateOnTab",
    format: "%K LIKE[c] '*redditplaylister.phoenixforgotten.com/*'",
    args: ["URL"]
  },

  isPlaying: function () { return window.player.state == window.RP_PLAYING /* 100 */ },
  toggle:    function () {
    if (window.player.state == window.RP_PLAYING) {
      window.player.pause();
    } else {
      window.player.play();
    }
  },
  previous:  function () { window.player.prev() },
  next:      function () { window.player.next() },
  pause:     function () { window.player.pause() },
  favorite:  function () { /* toggles favorite on/off */},

  trackInfo: function () {
    var data = document.getElementsByClassName('item playing')[0];
    var title = data ? data.getElementsByClassName('title')[0] : null;
    return {
        'track': title === null ? 'Reddit Playlister' : title.textContent
    };
  }
}
