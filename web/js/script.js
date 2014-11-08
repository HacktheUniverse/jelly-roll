// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.
  var player;
  function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('ytplayer_1', {
      height: '251',
      width: '379',
      autoplay: '1',
      videoId: 'HuSHOQ6gv5Y'
    });
    player2 = new YT.Player('ytplayer_2', {
      height: '251',
      width: '379',
      videoId: 'VyCmeO65M'
    });
    player3 = new YT.Player('ytplayer_3', {
      height: '251',
      width: '379',
      videoId: 'PSZxmZmBfnU'
    });
    player4 = new YT.Player('ytplayer_4', {
      height: '251',
      width: '379',
      videoId: 'fK1MwhEDjHg'
    });
    player5 = new YT.Player('ytplayer_5', {
      height: '251',
      width: '379',
      videoId: 'HKQQAv5svkk'
    });
    player6 = new YT.Player('ytplayer_6', {
      height: '251',
      width: '379',
      videoId: 'b4nlgDtyoU4'
    });
    player7 = new YT.Player('ytplayer_7', {
      height: '251',
      width: '379',
      videoId: 'hokNUYM'
    });  
  } 
  
  // Snap 'em panels!
  var options = {
  $menu: false,
  // menuSelector: 'a',
  // panelSelector: 'section',
  // namespace: '.panelSnap',
  // onSnapStart: function(){},
  onSnapFinish: function(){
  	console.log(this.childNodes);
  },
  // onActivate: function(){},
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
    $('.wrapper').panelSnap(options);
  });

//   //animate the arrow
//   $arrow = $('#arrow');

// var tl = new TimelineLite();
// tl.add( TweenLite.to(arrow, 1, {top:-50}) );
// tl.add( TweenLite.to(arrow, 1, {top:0}) );
 
// //then later, control the whole thing...
// tl.play();
