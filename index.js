function enter_code() { 
    let input = document.getElementById('codeentry').value;
    input=input.toLowerCase();
    if (input == "vampire") {
        window.location.replace("vampire.html")
    } else if (input == "witchesbrew") {
	window.location.replace("witchesbrew.html")
    } else if (input == "ghost") {
	window.location.replace("ghost.html")
    } else if (input == "monster") {
	window.location.replace("monster.html")
    }

    // window.location.replace(input.concat(".html"));
}
function back() {
    window.history.back();
}