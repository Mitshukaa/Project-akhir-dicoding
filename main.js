

document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var htmlProgress = document.getElementById("html-progress");
    
    var htmlProgressLabel = document.getElementById("html-progress-label");
    

    htmlProgressLabel.innerHTML = htmlProgress.value + "%";

});