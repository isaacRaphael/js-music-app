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
let playing = false



window.onload = app()


function app() {
    playPauseFuction()
    nextBack()
    audio.addEventListener('ended', ()=>{
        forward.click()
    })
}

function playPauseFuction() {
    
    play.addEventListener('click', ()=>{
            if (!playing) {
                audio.play()
                playing = true
                albumCover.classList.add('rotate')
                ppButton.classList.remove('fa-play')
                ppButton.classList.add('fa-pause')
                albumCover.style.animationPlayState = "running"

            } else {
                audio.pause()
                playing = false
                ppButton.classList.add('fa-play')
                ppButton.classList.remove('fa-pause')
                albumCover.style.animationPlayState = "paused"
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
            current--  
        }
    })
}
