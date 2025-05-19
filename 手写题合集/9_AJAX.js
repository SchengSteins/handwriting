//用Promise + xhr发送AJAX请求
function ajax({
    url = null,
    method = 'GET',
    dataType = 'JSON',
    async = true
}) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, async)
        xhr.responseType = dataType
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText)
            }
        }
        xhr.onerror = (err) => {
            reject(err)
        }
        xhr.send()
    })
}
ajax({ url: '' })

//JSONP
function ajax2({ url, params, callbackName }) {
    const generateUrl = () => {
        let dataSrc = ''
        for (const key of Object.keys(params)) {
            dataSrc += `${key}=${params[key]}&`
        }
        dataSrc += `callback=${callbackName}`
        return `${url}?${dataSrc}`
    }

    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.type = "text/javascript";
        document.body.appendChild(script)
        window[callbackName] = (data) => {
            resolve(data)
            document.removeChild(script)
        }
    })
}
