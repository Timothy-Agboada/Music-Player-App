document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const player = document.querySelector('.player');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const audio = document.getElementById('audio');
    const progressContainer = document.getElementById('progress-container');
    const progress = document.getElementById('progress');
    const titleEl = document.getElementById('title');
    const artistEl = document.getElementById('artist');
    const albumArtEl = document.getElementById('albumArt');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');

    // Song data
    const songs = [
        {
            title: 'Happy Rock',
            artist: 'Bensound',
            src: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
            art: 'https://www.bensound.com/bensound-img/happyrock.jpg'
        },
        {
            title: 'Jazzy Frenchy',
            artist: 'Bensound',
            src: 'https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3',
            art: 'https://www.bensound.com/bensound-img/jazzyfrenchy.jpg'
        },
        {
            title: 'Creative Minds',
            artist: 'Bensound',
            src: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
            art: 'https://www.bensound.com/bensound-img/creativeminds.jpg'
        }
    ];

    let songIndex = 0;

    // --- Functions ---
    
    // Load song details into DOM
    function loadSong(song) {
        titleEl.textContent = song.title;
        artistEl.textContent = song.artist;
        audio.src = song.src;
        albumArtEl.src = song.art;
    }

    function playSong() {
        player.classList.add('playing');
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        audio.play();
    }

    function pauseSong() {
        player.classList.remove('playing');
        playBtn.querySelector('i.fas').classList.add('fa-play');
        playBtn.querySelector('i.fas').classList.remove('fa-pause');
        audio.pause();
    }

    function prevSong() {
        songIndex--;
        if (songIndex < 0) {
            songIndex = songs.length - 1;
        }
        loadSong(songs[songIndex]);
        playSong();
    }

    function nextSong() {
        songIndex++;
        if (songIndex > songs.length - 1) {
            songIndex = 0;
        }
        loadSong(songs[songIndex]);
        playSong();
    }

    // Update progress bar and time
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;

        // Update time display
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) {
            durationSeconds = `0${durationSeconds}`;
        }
        if (durationSeconds) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }

        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) {
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
    
    // Set progress bar on click
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    // --- Event Listeners ---
    playBtn.addEventListener('click', () => {
        const isPlaying = player.classList.contains('playing');
        isPlaying ? pauseSong() : playSong();
    });
    
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    
    audio.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);
    audio.addEventListener('ended', nextSong);

    // --- Initial Load ---
    loadSong(songs[songIndex]);
});