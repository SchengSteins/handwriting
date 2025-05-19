{/* <ul id = 'ul'>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul> */}

let ul = document.getElementById("ul")
ul.onclick = function (event) {
    event = event || window.event //兼容IE
    let target = event.target
    if (target.nodeName == 'LI') {
        alert(target.innerHTML)
    }
}