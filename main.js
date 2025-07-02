const tempInput = document.getElementById('temp-input')
const tempOutupt = document.getElementById('temp-output')

const tempInputRegex = /^\-?\d*\.?\d*$/

const celciusToFarenheit = () => {
    tempOutupt.value = Math.round((tempInput.value * 9/5) + 32)
}
const farenheitToCelcius = () => {
    tempInput.value = Math.round((tempOutupt.value - 32) * 5/9)
}

tempInput.addEventListener('input', (e) => {
    if (!tempInputRegex.test(tempInput.value)) {
        e.target.value = e.target.value.slice(0, -1)
    } else {
     celciusToFarenheit()   
    }
    
})
tempOutupt.addEventListener('input', (e) => {
    if (!tempInputRegex.test(tempOutupt.value)) {
        e.target.value = e.target.value.slice(0, -1)
    } else {
     farenheitToCelcius()   
    }
})