import './style.css';
import loadElements from './page-load';
import { loadMenu, loadHome, loadContact } from './page-load';

loadElements();

const home = document.querySelector("li:first-child > a");
const menu = document.querySelector("li:nth-child(2) > a");
const contact = document.querySelector("li:last-child > a");

// When "Home" link is pressed, show homepage
home.addEventListener("click", loadHome);

// When "Menu" link is pressed, show the menu
menu.addEventListener("click", loadMenu);

// When "Contact" link is pressed, show contact tab
contact.addEventListener("click", loadContact)