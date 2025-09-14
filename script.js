let display = document.getElementById("display")
function append(char) {
    display.value += char;
}
function cleardisplay() {
    display.value = "";
}
function del() {
    display.value = display.value.slice(0,-1);
}
function square() {
    try {
        display.value = Math.pow(eval(display.value),2);
    }
    catch {
        display.value = ("Error");
    }
}
function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = ("Error");
    }
}