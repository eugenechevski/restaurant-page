/**
 * The module is responsible for display of beverage-items.
 */


import { capitalizeStr } from "./menu_pizza";


// Data
const pastaItems = {
    'spaghetti alla crudaiola': {
        price: '11.95',
        ingredients: ['tomato sauce', 'diced tomatoes', 'mozzarella', 'fresh basil'],
    },
    'fettuccine bolognese': {
        price: '12.95',
        ingredients: ['tomato meat sauce'],
    },
    'fusilli bianco verde': {
        price: '11.95',
        ingredients: ['sautéed chicken', 'broccoli', 'cream', 'parmesan cheese'],
    },
    'penne rosate': {
        price: '13.95',
        ingredients: ['smoked salmon', 'tomato sauce', 'cream', 'parsley'],
    },
    'gnocci legnano': {
        price: '13.95',
        ingredients: ['four cheese cream sauce made with mozzarella', 'brie', 'gorgonzola', 'parmesan cheese']
    }
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
    for (const item in pastaItems) {
        // Create the parent-element
        let elItemsContainer = document.createElement('div');
        elItemsContainer.classList.add('items');

        // Create child-elements
        let elNamePrice = document.createElement('div');
        let elName = document.createElement('h2');
        let elPrice = document.createElement('h2');
        let elIngredients = document.createElement('h5');

        // Fil-up the content
        elName.textContent = capitalizeStr(item);
        elPrice.textContent = `$${parseFloat(pastaItems[item].price).toFixed(2)}`;
        elIngredients.textContent = pastaItems[item].ingredients.join(', ');

        // Assemble
        elNamePrice.appendChild(elName);
        elNamePrice.appendChild(elPrice);
        elItemsContainer.appendChild(elNamePrice);
        elItemsContainer.appendChild(elIngredients);
        elContainer.appendChild(elItemsContainer);
    }

    // Add the decorative element
    let elElipses = document.createElement('h2');
    elElipses.textContent = '<...>';
    elContainer.appendChild(document.createElement('br'));
    elContainer.appendChild(elElipses);    
}
