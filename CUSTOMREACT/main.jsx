let customRender = (element, root) => {
    let Element = document.createElement(element.type)
    Element.innerHTML = element.children
    // Element.setAttribute('href', element.props.href)
    // Element.setAttribute('target', element.props.target)
    // root.append(Element)

    // V2
    for (const prop in element.props) {
        if (prop === 'children') {
            continue
        }
        Element.setAttribute(prop, element.props[prop])
    }
    root.append(Element)
}

let root = document.querySelector('#root')

let element = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

customRender(element, root)