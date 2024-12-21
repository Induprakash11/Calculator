// script.js
function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
}

function clearResult() {
    const result = document.getElementById("result");
    result.value = "";
}

function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculate() {
    const result = document.getElementById("result");
    try {
        result.value = eval(result.value); // Use eval carefully; sanitize inputs in production
    } catch (error) {
        result.value = "Error";
    }
}

// Dark mode toggle
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
