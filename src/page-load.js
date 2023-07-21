// Function that creates elements
function _createElement(type, text, addClass) {
    const element = document.createElement(type);
    element.innerText = text;
    element.classList.add(addClass);

    return element;
}

export default function loadHome() {
    
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

    // Create <main>
    const main = _createElement("main", "", "main");
    content.append(main);

    // Create <h1> inside <main>
    const title = _createElement("h1", "My Restaurant", "title")
    main.append(title);

    // Create <p> inside <main>
    const para = _createElement("p", `This is some text that explains how good my restaurant is. Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Impedit et iusto
    sequi mollitia ut temporibus, consectetur possimus nobis consequuntur
    dignissimos in magni, natus labore sed molestias eum perferendis odio
    minus.`, "para")
    main.append(para);
}

export function loadMenu() {
    // Remove elements from <main>
    const main = document.querySelector(".main");
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }
    // Create container for the menu items
    const menuContainer = _createElement("div", "", "menu");
    main.append(menuContainer);

    // Add menu item 1
    const burger = _createElement("div", "", "burger");
    menuContainer.append(burger);

    // Add title and paragraph to describe the menu item
    // along with an image of the item
    burger.append(_createElement("h3", "Burger", "menu-h3"), _createElement("p", ` Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Impedit et iusto
    sequi mollitia ut temporibus, consectetur possimus nobis`, "menu-para"), _createElement("div", "", "menu-image"));

    // Add menu item 2
    const pizza = _createElement("div", "", "pizza");
    menuContainer.append(pizza);
    pizza.append(_createElement("h3", "Pizza", "menu-h3"), _createElement("p", ` Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Impedit et iusto
    sequi mollitia ut temporibus, consectetur possimus nobis`, "menu-para"), _createElement("div", "", "menu-image"));

    // Add menu item 3
    const steak = _createElement("div", "", "steak");
    menuContainer.append(steak);
    steak.append(_createElement("h3", "Steak", "menu-h3"), _createElement("p", ` Lorem
    ipsum, dolor sit amet consectetur adipisicing elit. Impedit et iusto
    sequi mollitia ut temporibus, consectetur possimus nobis`, "menu-para"), _createElement("div", "", "menu-image"));

}