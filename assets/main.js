const musicData = [
    {
        artist : 'Wicked X Tommy T',
        song : 'Tommy T',
        albumCover : 'https://i.redd.it/9oclk6dni2271.jpg',
        src : './music/Wiked x Tommy T - Tommy T.mp3'
    },
    {
        artist : 'Aurora',
        song : 'Runaway',
        albumCover :'https://i0.wp.com/eastnaija.com/wp-content/uploads/2021/05/images-82.jpeg?fit=554%2C554&ssl=1',
        src: './music/AURORA - Runaway.mp3'
    },
    {
        artist: 'Asap Ferg X Future',
        song: 'New Level',
        albumCover: "https://m.media-amazon.com/images/I/71db-rvOQpL._SS500_.jpg",
        src: './music/ASAP Ferg Ft. Future - New Level.mp3'
    },
    {
        artist: 'Justin Bieber',
        song: 'Loved by you',
        albumCover: "https://9jaflaver.com/wp-content/uploads/2021/03/Justin-Bieber-%E2%80%93-Loved-By-You-ft.-Burna-Boy.jpg",
        src: './music/Justin Bieber - Loved By You ft. Burna Boy.mp3'
    }
    
]
const play = document.querySelector('.play')
const forward = document.querySelector('.forward')
const prev = document.querySelector('.prev')
const audio = document.querySelector('#audio')
const albumCover = document.querySelector('.album-cover')
const ppButton = document.querySelector('#pp-button')
const artistName = document.querySelector('.artist')
const songTitle = document.querySelector('.song')
const musicSource = document.querySelector('#music-source')
const toggle = document.querySelector(".toggle")
const initial = document.querySelector(".initial")
const final = document.querySelector(".final")
let playing = false
let justStated = false;



window.onload = app()


function app() {
    playPauseFuction()
    nextBack()
    
        audio.onloadedmetadata = () => {
            final.innerText =`${parseInt(audio.duration/60)}:${parseInt(audio.duration%60)}`
            checkPlaying()
        }   
        audio.addEventListener('ended', ()=>{
            forward.click()
        })
}

function playPauseFuction() {
    
    play.addEventListener('click', ()=>{
            if (!playing) {
                toggle.style.animationPlayState = 'running'
                audio.play()
                playing = true
                albumCover.classList.add('rotate')
                ppButton.classList.remove('fa-play')
                ppButton.classList.add('fa-pause')
                albumCover.style.animationPlayState = "running"
                checkPlaying()
                

            } else {
                audio.pause()
                playing = false
                ppButton.classList.add('fa-play')
                ppButton.classList.remove('fa-pause')
                albumCover.style.animationPlayState = "paused"
                toggle.style.animationPlayState = 'paused'
                checkPlaying()
            }
            
    })
    
}

function nextBack () {
    let current = 0
    forward.addEventListener('click', ()=> {
        if (current < musicData.length-1){
        albumCover.src = musicData[current+1].albumCover
        artistName.innerText = musicData[current+1].artist
        songTitle.innerText = musicData[current+1].song
        audio.firstElementChild.src = musicData[current+1].src
        audio.load()
        playing = false
        play.click()
        restartAnimation(toggle)
        current++
        } else if (current >= musicData.length-1) {
            current = -1 
            albumCover.src = musicData[current+1].albumCover
            artistName.innerText = musicData[current+1].artist
            songTitle.innerText = musicData[current+1].song
            audio.firstElementChild.src = musicData[current+1].src
            audio.load()
            playing = false
            play.click()
            restartAnimation(toggle)
            current++
        }
    })
    prev.addEventListener('click', ()=> {
        if(current > 0) {
            albumCover.src = musicData[current-1].albumCover
            artistName.innerText = musicData[current-1].artist
            songTitle.innerText = musicData[current-1].song
            audio.firstElementChild.src = musicData[current-1].src
            audio.load()
            playing = false
            play.click()
            restartAnimation(toggle)
            current--  
        } else if (current === 0) {
            current = musicData.length
            albumCover.src = musicData[current-1].albumCover
            artistName.innerText = musicData[current-1].artist
            songTitle.innerText = musicData[current-1].song
            audio.firstElementChild.src = musicData[current-1].src
            audio.load()
            playing = false
            play.click()
            restartAnimation(toggle)
            current--  
        }
    })
    
}

function checkPlaying () {
    if (playing) { 
        toggle.style.animation = `slide ${audio.duration}s linear`
        // toggle.style.animationPlayState = 'running'
        setInterval(() => {
            const currentTime = audio.currentTime
            initial.innerText = `${parseInt(currentTime / 60)}:${parseInt(currentTime % 60)}`
           } , 1000)
        }
}

function restartAnimation (a){
    a.style.animationName = 'None'
    setTimeout(()=> {
        a.style.animationName = 'slide'
    },0010)
}