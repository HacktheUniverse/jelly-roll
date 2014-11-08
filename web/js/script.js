// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer_1', {
      height: '251',
      width: '379',
      videoId: 'HuSHOQ6gv5Y'
    });
    player = new YT.Player('ytplayer_2', {
      height: '251',
      width: '379',
      videoId: 'VyCmeO65M'
    });
    player = new YT.Player('ytplayer_3', {
      height: '251',
      width: '379',
      videoId: 'PSZxmZmBfnU'
    });
    player = new YT.Player('ytplayer_4', {
      height: '251',
      width: '379',
      videoId: 'fK1MwhEDjHg'
    });
  }

  // Snap 'em panels!
  var options = {
  $menu: false,
  menuSelector: 'a',
  panelSelector: '.slide',
  namespace: '.panelSnap',
  onSnapStart: function(){},
  onSnapFinish: function(){},
  onActivate: function(){},
  directionThreshold: 50,
  slideSpeed: 200,
  keyboardNavigation: {
    enabled: true,
    nextPanelKey: 40,
    previousPanelKey: 38,
    wrapAround: true
  }
};

  jQuery(function($) {
    $('body').panelSnap();
  });     
