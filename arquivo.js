const convertButton = document.querySelector(".button-convert")
const convertSelect = document.querySelector(".currency-select")
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueConvert = document.querySelector(".currency-value-convert ")
    const currencyValueConvertd = document.querySelector(".currency-value")

    console.log(convertSelect.value)

    const dolarToday = 5.2
    const euroToday = 7.2
    const libratoday = 6.8
    const bitcointoday = 185.00000



    if (convertSelect.value == "dolar") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (convertSelect.value == "Euro") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (convertSelect.value == "Bitcoin") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday)

    }
    if (convertSelect.value == "Libra") {
        currencyValueConvertd.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday)
    }


    currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}
function changecurency() {

    const currencyName = document.getElementById("currency-name")
    const tela = document.querySelector(".tela")


    if (convertSelect.value == "Dolar") {
        currencyName.innerHTML = "Dólar americano"
        tela.src = "assets/Dolar.png"
    }

    if (convertSelect.value == "Libra") {
        currencyName.innerHTML = " Libra"
        tela.src = "assets/Libra.png "
    }

    if (convertSelect.value == "Euro") {
        currencyName.innerHTML = "Euro"
        tela.src = "assets/Euro.png "
    }
    if (convertSelect.value == "Bitcoin") {
        currencyName.innerHTML = "BTC"
        tela.src = "assets/Bitcoin.png "
    }

    
    convertValues()

}


convertSelect.addEventListener("change", changecurency)
convertButton.addEventListener("click", convertValues)