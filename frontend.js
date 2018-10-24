const vanillaAjaxPost = () => {
    // via youmightnotneedjquery.com
    const data = document.querySelector('input').value

    const request = new XMLHttpRequest()
    request.open('POST', '/', true)
    request.setRequestHeader('Content-Type', 'application/json')
    // Store frontend input in JSON format and send to backend
    request.send(JSON.stringify({ input: data }))

    request.onload = function () {
        if(this.readyState == 4 && this.status == 200){
            // Store POST response as JSON
            const backendOutput = JSON.parse(this.responseText)
            console.log(backendOutput)

            // DOM maninupulations
            document.querySelector('#loud').innerHTML = backendOutput.loud
            document.querySelector('#randomnumber').innerHTML = backendOutput.randomnumber
        } 
    }
}

document.querySelector('button').addEventListener('click', vanillaAjaxPost)

document.querySelector('input[type=text]').addEventListener('keypress', function (event) {
    const key = event.which || event.keyCode
    if (key === 13) { // 13 is enter
        vanillaAjaxPost()
    }
})
