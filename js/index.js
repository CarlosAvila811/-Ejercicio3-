document.addEventListener("DOMContentLoaded", function () {
    
    const conversionForm = document.getElementById("conversionForm");
    conversionForm.addEventListener("submit", function (event) {
        if (!conversionForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        conversionForm.classList.add("was-validated");
    });
});

function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const resultElement = document.getElementById("result");


    if (!conversionType || isNaN(inputValue) || inputValue < 0) {
        resultElement.innerHTML = '<p class="text-danger">Por favor, complete los campos correctamente.</p>';
        return;
    }

    let result = 0;
    let unit = "";

    switch (conversionType) {
        case "kmToM":
            result = inputValue * 1000;
            unit = "metros";
            break;
        case "mToCm":
            result = inputValue * 100;
            unit = "centímetros";
            break;
        case "ftToIn":
            result = inputValue * 12;
            unit = "pulgadas";
            break;
        case "ydToIn":
            result = inputValue * 36;
            unit = "pulgadas";
            break;
        default:
            resultElement.innerHTML = '<p class="text-danger">Tipo de conversión no válido.</p>';
            return;
    }

    resultElement.innerHTML = `<p class="text-success">Resultado: ${inputValue} convertido es igual a ${result} ${unit}.</p>`;
}
