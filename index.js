function enter_code() { 
    let input = document.getElementById('codeentry').value;
    input=input.toLowerCase(); 
    window.location.replace(input.concat(".html"));
    }
function back() {
    window.history.back();
    }