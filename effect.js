document.querySelector('.holographic').addEventListener('mouseover', function() {
    this.style.filter = 'hue-rotate(360deg) brightness(1.5)';
});

document.querySelector('.holographic').addEventListener('mouseout', function() {
    this.style.filter = 'hue-rotate(0deg) brightness(1)';
});
