function Timer() {
    const timerRange = document.getElementById("Timer");

    timerRange.addEventListener("input", function () {
        const progress = (this.value - this.min) / (this.max - this.min);
        this.style.setProperty("--progress", `${progress * 100}%`);
    });
}

function Volume_adjust() {
    const volumeRange = document.getElementById("volume");

    volumeRange.addEventListener("input", function () {
        const volumeValue = this.value;
        this.style.setProperty("--volume", `${volumeValue}%`);
        // Additional code to set volume based on volumeValue
    });
}

Volume_adjust();
Timer();

var arr_of_songs = [
    {
        song_name: "aam munde",
        artist: "Parmish Verma",
        url: "./songs/Aam_je_munde.mp3",
        image: "./images/Aam_je_munde.jpg",
        time: "4:14"

    }, {
        song_name: "9:45",
        artist: "Prabh Singh",
        url: "./songs/9_45.mp3",
        image: "./images/9_45.jpg",
        time: "2:02"
    }, {
        song_name: "King Shit",
        artist: "Shubh",
        url: "./songs/King_Shit.mp3",
        image: "./images/King_shit.jpg",
        time: "3:47"
    }, {
        song_name: "Paisa",
        artist: "Unknown",
        url: "./songs/Paisa.mp3",
        image: "./images/Paisa.jpg",
        time: "3:02"
    }]


// var clutter = '';
// arr_of_songs.forEach(function(elem,index){
//     clutter += ` <div id="carts-elem-1" class="carts-elem">
//     <h4 id="num">${index+1}</h4>
//     <div id="song-img">
//         <img src="${elem.image}"
//             alt="">
//     </div>
//     <h4 id="carts-title">${elem.song_name}</h4>
//     <div id="playing"> 57,34,533</div>
//     <h4 id="time">${elem.time}</h4>
// </div>`
// })
// document.querySelector('#songs').innerHTML += clutter;