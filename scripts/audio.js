document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('music-controls');
    const playNextButton = document.getElementById('music-next');
    const playPrevButton = document.getElementById('music-prev');
    const tracks = [
        // 'audio/i3you.mp3',
        'audio/photo_id.mp3',
        'audio/music_sounds_better_with_you.mp3',
        'audio/this_is_me.mp3',
        'audio/take_me_where_your_heart_is.mp3',
        'audio/d.mp3',
        // 'audio/look_at_the_sky.mp3'
    ];
    let currentTrackIndex = 0;

    // Load the first track
    loadTrack(currentTrackIndex);

    playNextButton.addEventListener('click', playNextTrack);
    playPrevButton.addEventListener('click', playPrevTrack);

    audio.addEventListener('ended', playNextTrack);

    // Load track by index
    function loadTrack(index) {
        audio.src = tracks[index];
        audio.load();  // Ensure the audio element reloads the new source
    }

    // Play current track
    function playTrack() {
        audio.play();
    }

    // Play next track
    function playNextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }

    // Play previous track
    function playPrevTrack() {
        currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
        loadTrack(currentTrackIndex);
        playTrack();
    }
});