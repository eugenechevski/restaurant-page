import { capitalizeStr } from "./menu_pizza";

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


export default function (elContainer) {
    for (const item in pastaItems) {
        // Create the element
        let elItemsContainer = document.createElement('div');
        elItemsContainer.classList.add('items');

        let elNamePrice = document.createElement('div');
        let elName = document.createElement('h2');
        let elPrice = document.createElement('h2');
        let elIngredients = document.createElement('h5');

        elName.textContent = capitalizeStr(item);
        elPrice.textContent = `$${parseFloat(pastaItems[item].price).toFixed(2)}`;
        elIngredients.textContent = pastaItems[item].ingredients.join(', ');

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