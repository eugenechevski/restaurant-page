/**
 * The module is responsible for display of pizza-items.
 */


// Data
const pizzaItems = {
    'margarita' : {
        price: '12',
        ingredients: ['red sauce', 'fresh mozzarella', 'basil']
    },
    'pepperoni' : {
        price: '14',
        ingredients: ['red sauce', 'mozzarella', 'pepperoni']
    },
    'meat lovers': {
        price: '16',
        ingredients: ['red sauce', 'mozzarella', 'pepperoni', 
                      'italian sausage', 'ham', 'candied bacon']
    },
    'veggie pizza': {
        price: '16',
        ingredients: ['red sauce', 'baby spinach', 'red onion',
                      'cherry tomatoes', 'bell pepper', 'cheese']
    },
    'hawaiian pizza': {
        price: '17',
        ingredients: ['red sauce', 'pineapple', 'cheese', 'ham']
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
export function capitalizeStr(str) {
    let result = '';
    let delim = str.charAt(str.search(/(\s+|\/)/));

    if (delim == '') {
        result = str.charAt(0).toUpperCase() + str.slice(1);
    } else {
        result = str.split(delim).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(delim);
    }

    return result;
}

/**
 * The functions creates a content and adds it to a given container.
 * 
 * @param {HTMLElement} elContainer - a container to put a content in
 */
export default function (elContainer) {
    for (const item in pizzaItems) {
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
        elPrice.textContent = `$${parseFloat(pizzaItems[item].price).toFixed(2)}`;
        elIngredients.textContent = pizzaItems[item].ingredients.join(', ');

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
