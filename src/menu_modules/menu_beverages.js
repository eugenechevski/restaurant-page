import { capitalizeStr } from './menu_pizza';

const beveragesItems = {
    'sparkling/flat water': '4',
    'coke': '4',
    'beer': '8',
    'wine': '12',
    'tequila/rum/vodka': '17',
}

export default function (elContainer) {
    for (const item in beveragesItems) {
        // Create the element

        let elItemsContainer = document.createElement('div');
        elItemsContainer.classList.add('items');

        let elNamePrice = document.createElement('div');
        let elName = document.createElement('h2');
        let elPrice = document.createElement('h2');

        elName.textContent = capitalizeStr(item);
        elPrice.textContent = `$${parseFloat(beveragesItems[item]).toFixed(2)}`;

        elNamePrice.style.marginBottom = '5%';
        elNamePrice.appendChild(elName);
        elNamePrice.appendChild(elPrice);

        elItemsContainer.appendChild(elNamePrice);

        elContainer.appendChild(elItemsContainer);
    }

    let elElipses = document.createElement('h2');
    elElipses.textContent = '<...>';
    elContainer.appendChild(document.createElement('br'));
    elContainer.appendChild(elElipses);
}