function delegate(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
        let el = e.target  //点击的 span
        while (!el.matches(selector)) {
            if (element === el) { //找不到 ul 中的 li
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    })
    return element
}

delegate(ul, 'click', 'li', f1)