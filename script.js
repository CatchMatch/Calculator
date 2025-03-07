function appendValue(val) {
    document.getElementById('result').value += val;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let display = document.getElementById('result');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}