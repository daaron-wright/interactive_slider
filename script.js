const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#33FFF1', '#FFAF33', '#333FFF', '#9FFF33'];

document.getElementById('colorSlider').addEventListener('input', function () {
    const sliderValue = this.value;
    const index = Math.floor((sliderValue / 100) * (colors.length - 1));

    document.getElementById("box1").style.backgroundColor = colors[index % colors.length];
    document.getElementById("box2").style.backgroundColor = colors[(index + 1) % colors.length];
    document.getElementById("box3").style.backgroundColor = colors[(index + 2) % colors.length];
    document.getElementById("box4").style.backgroundColor = colors[(index + 3) % colors.length];
});
