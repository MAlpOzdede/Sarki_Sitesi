const songs = [
    {
      title: "The Wonder Of You",
      artist: "Elvis Presley",
      src: "sarkilar/Elvis Presley - The Wonder of You (Official Audio).mp3",
      cover: "kapaklar/indir (1).jpg"
    },
    {
      title: "Soft and Wet",
      artist: "Prince",
      src: "sarkilar/Prince - Soft & Wetto ! (JJBA version+ Lyrics).mp3",
      cover: "kapaklar/indir.jpg"
    },
    {
      title: "Killer Queen (Top Of The Pops, 1974)",
      artist: "Queen",
      src: "sarkilar/Queen - Killer Queen (Top Of The Pops, 1974).mp3",
      cover: "kapaklar/indir (2).jpg"
    },
    {
      title: "Canzoni Preferite",
      artist: "Bilinmiyor",
      src: "sarkilar/canzoni preferite.mp3",
      cover: "kapaklar/indir (3).jpg"
    },
    {
      title: "SONO CHINO SADAME",
      artist: "JOJO",
      src: "sarkilar/JOJO SONO CHINO SADAME.mp3",
      cover: "kapaklar/indir (4).jpg"
    },
    {
      title: "Great Days (Opening 7 - 4K Creditless HD)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/JoJos Bizarre Adventure  Opening 7 - Great Days  4K Creditless HD.mp3",
      cover: "kapaklar/indir (6).jpg"
    },
    {
      title: "Diamond is Unbreakable - Opening 1 (Creditless)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/Jojos Bizarre Adventure Diamond is Unbreakable - Opening 1 (Creditless)  [HD].mp3",
      cover: "kapaklar/indir (5).jpg"
    },
    {
      title: "OP 2 UHD 2160p Creditless",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/Jojos Bizarre Adventure OP 2  UHD 2160p  Creditless.mp3",
      cover: "kapaklar/indir (7).jpg"
    },
    {
      title: "STAND PROUD (Opening 3)",
      artist: "JoJo's Bizarre Adventure",
      src: "sarkilar/JoJos Bizarre Adventure Opening 3 STAND PROUD.mp3",
      cover: "kapaklar/indir (8).jpg"
    },
    {
      title: "Pillar Men Theme『Awaken』",
      artist: "JoJo's Bizarre Adventure OST",
      src: "sarkilar/JoJos Bizarre Adventure OST - Pillar Men Theme『Awaken』.mp3",
      cover: "kapaklar/indir (9).jpg"
    },
    {
      title: "Beat It (Official 4K Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Beat It (Official 4K Video).mp3",
      cover: "kapaklar/indir (11).jpg"
    },
    {
      title: "Billie Jean (Official Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Billie Jean (Official Video).mp3",
      cover: "kapaklar/indir (10).jpg"
    },
    {
      title: "Smooth Criminal (Official Video)",
      artist: "Michael Jackson",
      src: "sarkilar/Michael Jackson - Smooth Criminal (Official Video).mp3",
      cover: "kapaklar/indir (12).jpg"
    },
    {
      title: "il vento d’oro",
      artist: "JoJo's Bizarre Adventure: Golden Wind",
      src: "sarkilar/il vento doro.mp3",
      cover: "kapaklar/indir (13).jpg"
    },
    {
      title: "Queen - Another One Bites the Dust (Official Video)",
      artist: "Queen",
      src: "sarkilar/Queen - Another One Bites the Dust (Official Video).mp3",
      cover: "kapaklar/Bites_the_Dust_Infobox_Manga.png"
    }
  ];
    // Diğer şarkıları da aynı şekilde ekle
  
  let current = 0;
  const audio = document.getElementById("audio");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  const playBtn = document.getElementById("play");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const forward5 = document.getElementById("forward5");
  const back5 = document.getElementById("back5");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("current-time");
  const duration = document.getElementById("duration");
  const playlist = document.getElementById("playlist");
  
  function loadSong(index) {
    const song = songs[index];
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
    playBtn.textContent = "▶️";
  }
  
  function playSong() {
    audio.play();
    playBtn.textContent = "⏸";
  }
  
  function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶️";
  }
  
  playBtn.addEventListener("click", () => {
    if (audio.paused) playSong();
    else pauseSong();
  });
  
  nextBtn.addEventListener("click", () => {
    current = (current + 1) % songs.length;
    loadSong(current);
    playSong();
  });
  
  prevBtn.addEventListener("click", () => {
    current = (current - 1 + songs.length) % songs.length;
    loadSong(current);
    playSong();
  });
  
  forward5.addEventListener("click", () => (audio.currentTime += 5));
  back5.addEventListener("click", () => (audio.currentTime -= 5));
  
  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    currentTime.textContent = formatTime(audio.currentTime);
  });
  
  audio.addEventListener("loadedmetadata", () => {
    progress.max = audio.duration;
    duration.textContent = formatTime(audio.duration);
  });
  
  progress.addEventListener("input", () => {
    audio.currentTime = progress.value;
  });
  
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  
  // Playlist Oluştur
  songs.forEach((song, index) => {
    const item = document.createElement("div");
    item.className = "playlist-item";
    item.textContent = `${song.artist} - ${song.title}`;
    item.addEventListener("click", () => {
      current = index;
      loadSong(current);
      playSong();
    });
    playlist.appendChild(item);
  });
  
  // İlk şarkı yüklensin
  loadSong(current);
  
  // Ses Kontrolü
const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Hız Kontrolü
const speedSelect = document.getElementById("speed");
speedSelect.addEventListener("change", () => {
  audio.playbackRate = parseFloat(speedSelect.value);
});

