const tempInput = document.getElementById('temp-input')
const tempOutupt = document.getElementById('temp-output')

const tempInputRegex = /^\d*\.?\d*$/

const celciusToFarenheit = () => {
    tempOutupt.value = Math.round((tempInput.value * 9/5) + 32)
}
const farenheitToCelcius = () => {
    tempInput.value = Math.round((tempOutupt.value - 32) * 5/9)
}

tempInput.addEventListener('input', () => {
    celciusToFarenheit()
})
tempOutupt.addEventListener('input', () => {
    farenheitToCelcius()
})