function ConverterFahrenheitParaCelsius() {
    var valorElemeto = document.getElementById("valor");
    var valorEmFahrenheit = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmCelsius = (valorEmFahrenheit - 32) / 1.8;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Fahrenheit</em> para <em>Celsius</em> é: " + valorEmCelsius.toFixed(2).replace(".", ",") + " °C";
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKelvinParaCelsius() {
    var valorElemeto = document.getElementById("valor");
    var valorEmKelvin = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmCelsius = valorEmKelvin - 273;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Kelvin</em> para <em>Celsius</em> é: " + valorEmCelsius.toFixed(2).replace(".", ",")  + " °C";
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKelvinParaFahrenheit() {
    var valorElemeto = document.getElementById("valor");
    var valorEmKelvin = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmFahrenheit = (valorEmKelvin - 273) * 1.8 + 32;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Kelvin</em> para <em>Fahrenheit</em> é: " + valorEmFahrenheit.toFixed(2).replace(".", ",")  + " °F";
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterCelsiusParaFahrenheit() {
    var valorElemeto = document.getElementById("valor");
    var valorEmCelsius = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmFahrenheit = valorEmCelsius * 1.8 + 32;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Celsius</em> para <em>Fahrenheit</em> é: " + valorEmFahrenheit.toFixed(2).replace(".", ",")  + " °F";
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterCelsiusParaKelvin() {
    var valorElemeto = document.getElementById("valor");
    var valorEmCelsius = parseFloat(valorElemeto.value);

    var valorEmKelvin = valorEmCelsius + 273;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Celsius</em> para <em>Kelvin</em> é: " + valorEmKelvin + " K";
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterFahrenheitParaKelvin() {
    var valorElemeto = document.getElementById("valor");
    var valorEmFahrenheit = parseFloat(valorElemeto.value).toFixed(2);

    var valorEmKelvin = (valorEmFahrenheit - 32) * 5/9 + 273;
    var elementoValorConvertido = document.getElementById("valorConvertido");

    var valorConvertido = "O valor convertido de <em>Fahrenheit</em> para <em>Kelvin</em> é: " + valorEmKelvin.toFixed(2).replace(".", ",") + " K";
    elementoValorConvertido.innerHTML = valorConvertido;
}