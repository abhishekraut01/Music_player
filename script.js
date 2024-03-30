const volumeRange = document.getElementById("volume");

volumeRange.addEventListener("input", function() {
    const volumeValue = this.value;
    this.style.setProperty("--volume", `${volumeValue}%`);
    // Additional code to set volume based on volumeValue
});



const timerRange = document.getElementById("Timer");

timerRange.addEventListener("input", function() {
    const progress = (this.value - this.min) / (this.max - this.min);
    this.style.setProperty("--progress", `${progress * 100}%`);
});
