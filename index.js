const convertBtn = document.getElementById("convert-btn")
let kmToMile = document.getElementById("meter-mile")
let celciusToFerenheit = document.getElementById("celcius-ferenheit")
let kgToOunce = document.getElementById("kg-ounce")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){
    const floatValue = parseFloat(inputEl.value);
    if (!isNaN(floatValue)) {
        kmto_Mile(floatValue);
        celciusTo_Ferenheit(floatValue);
        kg_ounce(floatValue);

    } else {
        console.log("Invalid input value");
    }
    inputEl.value = ""
})


function kmto_Mile(float_value){
    let km_mile = (float_value * 0.621371).toFixed(3)
    let mile_km = (float_value * 1.60934).toFixed(3)
    kmToMile.textContent = `${float_value} kilometres = ${km_mile} mile  |  ${float_value} mile = ${mile_km} kilometers`
}

function celciusTo_Ferenheit(float_value){
    let celcius_ferenheit = ((float_value * 1.8) + 32).toFixed(3)
    let ferenheit_celcius = ((float_value -32) / 1.8).toFixed(3)
    celciusToFerenheit.textContent = `${float_value} celcius = ${celcius_ferenheit} Ferenheit  |  ${float_value} ferenheit = ${ferenheit_celcius} celcius`
}

function kg_ounce(float_value){
    let km_mile = (float_value * 35.2739619).toFixed(3)
    let mile_km = (float_value / 35.2739619).toFixed(3)
    kgToOunce.textContent = `${float_value} kilograms = ${km_mile} ounce  |  ${float_value} ounce = ${mile_km} kilograms`
}
