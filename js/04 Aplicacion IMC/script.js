function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (!weight || !height) {
        alert('Por favor, ingresa valores válidos para el peso y la estatura.');
        return;
    }

    const bmi = weight / (height * height);
    const resultDiv = document.getElementById('result');
    let message = "";

    // Eliminamos clases de colores previas
    resultDiv.className = "result";

    if (bmi < 18.5) {
        resultDiv.classList.add("bajo-peso");
        message = "Bajo peso";
        image.src = 'img/BajoPeso.png';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultDiv.classList.add("normal");
        message = "Peso normal";
        image.src = 'img/PesoNormal.png';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultDiv.classList.add("sobrepeso");
        message = "Sobrepeso";
        image.src = 'img/Sobrepeso.png';
    } else if (bmi >= 30 && bmi < 34.9) {
        resultDiv.classList.add("obesidad-1");
        message = "Obesidad I";
        image.src = 'img/Obesidad1.png';
    } else if (bmi >= 35 && bmi < 39.9) {
        resultDiv.classList.add("obesidad-2");
        message = "Obesidad II";
        image.src = 'img/Obesidad2.png';
    } else {
        resultDiv.classList.add("obesidad-3");
        message = "Obesidad III";
        image.src = 'img/Obesidad3.png';
    }

    resultDiv.innerHTML = `Tu IMC es: ${bmi.toFixed(2)} (${message})`;
}
