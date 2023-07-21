export default function loadElements() {
    // Function that creates elements
    function _createElement(type, text, addClass) {
        const element = document.createElement(type);
        element.innerText = text;
        element.classList.add(addClass);

        return element;
    }

    const content = document.querySelector("#content");
    
    // Create <header>
    const header = _createElement("header", "", "header")
    content.appendChild(header);

    // Create <ul> inside header
    const ul = _createElement("ul", "", "nav");
    header.appendChild(ul);

    // Create <li> inside nav
    const liHome = _createElement("li", "", "link-container");
    const liMenu = _createElement("li", "", "link-container");
    const liContact = _createElement("li", "", "link-container");
    ul.append(liHome, liMenu, liContact)

    // Create <a> inside <li>
    liHome.appendChild(_createElement("a", "Home", "link"))
    liMenu.appendChild(_createElement("a", "Menu", "link"))
    liContact.appendChild(_createElement("a", "Contact", "link"))
}