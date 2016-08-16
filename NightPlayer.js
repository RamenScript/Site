//if your reading this, thank you for taking time to read my code no matter the reason :)
//I decided to make the player this time with jquery and it was much faster

//getting infomation to change src and status
var play = 
  document.getElementById('play') ;
var video =  
  document.getElementById('vid') ;
var progress = 
  document.getElementById('progress') ;
 progress.value = 0;
 progress.min = 0;
//making the function for the video and button toggle play didnt know how to get around not wanting progress included more simply.

	function toggle() {
		if(video.paused) {
			video.play();
			play.src = 'https://github.com/RamenScript/Site/blob/gh-pages/media_pause.png?raw=true';
		} 
		else {
			video.pause();
			play.src = 'https://github.com/RamenScript/Site/blob/gh-pages/media_play.png?raw=true';
		}
	};
	$('#vid').click( function() {
	toggle()}
	)
	$('#play').click(function() {
	toggle()}
	)
//makes the controlls vanish when mouse is off
$( '.content' ).hover(
	function() {
		$('#play').fadeIn(0);
		$('#progress').fadeIn(0);
	},
	function() {
		if(vid.paused === false) {
		$('#progress').fadeOut(0);
		$('#play').fadeOut(0)};
	});
//time bar constructed with progress function
//now when video ends a click in the bar triggers toggle()
$(document).ready(
function() {
progress.max = video.duration
});
video.addEventListener('timeupdate', function() {
	progress.value = video.currentTime;
})
video.addEventListener('ended', function() {
	play.src = 'https://github.com/RamenScript/Site/blob/gh-pages/media_play.png?raw=true';
}
)
$('#progress').click(
function(e) { 
	video.currentTime = ((e.pageX - 80)/305 * video.duration);
	if(video.ended) {
		toggle()};
	})
var error = document.getElementById('error');
	error.remove();
