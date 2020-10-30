function enter_code() {
    let input = document.getElementById('tricktreat').value;
    input=input.toLowerCase();
    if (input == "trick") {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    } else if (input == "treat") {
        window.location.replace("treat.html")
    }
}