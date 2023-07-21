import './style.css';
import loadHome from './page-load';
import { loadMenu } from './page-load';

loadHome();

// When "Menu" link is pressed, show the menu

const menu = document.querySelector("li:nth-child(2) > a");

menu.addEventListener("click", loadMenu)