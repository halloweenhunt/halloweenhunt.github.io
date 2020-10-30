function enter_code() { 
    let input = document.getElementById('codeentry').value;
    input=input.toLowerCase();
    if (input == "vampire") {
        window.location.replace("vampire.html")
    } else if (input == "witchesbrew") {
	window.location.replace("witchesbrew.html")
    } else if (input == "witches brew") {
	window.location.replace("witchesbrew.html")
    } else if (input == "ghost") {
	window.location.replace("ghost.html")
    } else if (input == "monster") {
	window.location.replace("monster.html")
    } else if (input == "pumpkin") {
	window.location.replace("pumpkin.html")
    } else if (input == "skull") {
	window.location.replace("skull.html")
    } else if (input == "spooky") {
	window.location.replace("spooky.html")
    } else if (input == "spookyscaryskeletons") {
	window.location.replace("skeleton.html")
    } else if (input == "spooky scary skeletons") {
	window.location.replace("skeleton.html")
    } else if (input == "graveyard") {
	window.location.replace("graveyard.html")
    } else if (input == "viscous hibiscus") {
	window.location.replace("viscoushibiscus.html")
    } else if (input == "viscoushibiscus") {
	window.location.replace("viscoushibiscus.html")
    } else if (input == "jackolantern") {
	window.location.replace("finish.html")
    } else if (input == "jack o lantern") {
	window.location.replace("finish.html")
    } else if (input == "jack-o-lantern") {
	window.location.replace("finish.html")
    }

    // window.location.replace(input.concat(".html"))
}

function back() {
    window.history.back();
}