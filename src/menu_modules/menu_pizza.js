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

export default function (elContainer) {
    for (const item in pizzaItems) {
        // Create the element
        let elItemsContainer = document.createElement('div');
        elItemsContainer.classList.add('items');

        let elNamePrice = document.createElement('div');
        let elName = document.createElement('h2');
        let elPrice = document.createElement('h2');
        let elIngredients = document.createElement('h5');

        elName.textContent = capitalizeStr(item);
        elPrice.textContent = `$${parseFloat(pizzaItems[item].price).toFixed(2)}`;
        elIngredients.textContent = pizzaItems[item].ingredients.join(', ');

        elNamePrice.appendChild(elName);
        elNamePrice.appendChild(elPrice);

        elItemsContainer.appendChild(elNamePrice);
        elItemsContainer.appendChild(elIngredients);

        elContainer.appendChild(elItemsContainer);
    }

    let elElipses = document.createElement('h2');
    elElipses.textContent = '<...>';
    elContainer.appendChild(document.createElement('br'));
    elContainer.appendChild(elElipses);
}


