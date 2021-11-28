/**
 * The module is responsible for display of beverage-items.
 */


import { capitalizeStr } from './menu_pizza';


// Data
const beveragesItems = {
    'sparkling/flat water': '4',
    'coke': '4',
    'beer': '8',
    'wine': '12',
    'tequila/rum/vodka': '17',
}

/**
 * The utility capitalizes the first letter of a given string.
 * If the given string contains multiple words separated by a
 * space or '/', then it capitalizes all those words.
 * 
 * @param {string} str 
 * @returns {string} - Capitalized string
 */
export default function (elContainer) {
    for (const item in beveragesItems) {
        // Create the parent-element
        let elItemsContainer = document.createElement('div');
        elItemsContainer.classList.add('items');

        // Create child-elements
        let elNamePrice = document.createElement('div');
        let elName = document.createElement('h2');
        let elPrice = document.createElement('h2');

        // Fil-up the content
        elName.textContent = capitalizeStr(item);
        elPrice.textContent = `$${parseFloat(beveragesItems[item]).toFixed(2)}`;
        elNamePrice.style.marginBottom = '5%';

        // Assemble
        elNamePrice.appendChild(elName);
        elNamePrice.appendChild(elPrice);
        elItemsContainer.appendChild(elNamePrice);
        elContainer.appendChild(elItemsContainer);
    }

    // Add the decorative element
    let elElipses = document.createElement('h2');
    elElipses.textContent = '<...>';
    elContainer.appendChild(document.createElement('br'));
    elContainer.appendChild(elElipses);
}
