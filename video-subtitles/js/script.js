
// DOES NOT WORK ON CRHOME

const video = document.querySelector('video');
const track = video.textTracks[0];

track.oncuechange = function() {
    if (track.activeCues[0]) {
        track.activeCues[0].line = 0; // moves cue to the top
    }
};