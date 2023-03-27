window.onscroll = function() {
    let btn = document.getElementById('back-top');
    if(document.body.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function backtoTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}