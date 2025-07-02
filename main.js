const tempInput = document.getElementById('temp-input')
const tempOutupt = document.getElementById('temp-output')



const celciusToFarenheit = () => {
    tempOutupt.innerText = ((tempInput.value * 9/5) + 32)
}

tempInput.addEventListener('input', () => {
    celciusToFarenheit()
})