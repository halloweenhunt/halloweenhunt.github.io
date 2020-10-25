function enter_code() { 
    let input = document.getElementById('codeentry').value;
    input=input.toLowerCase();
    if (input == "start") {
        window.location.replace("one.html")
    }
    // window.location.replace(input.concat(".html"));
}
function back() {
    window.history.back();
}