import './style.css';
import renderPizza from './menu_modules/menu_pizza';
import renderBeverages from './menu_modules/menu_beverages'
import renderPasta from './menu_modules/menu_pasta';


(function() {

    // Grab elements

    const elHomeIntro = document.getElementById('intro');
    const elMenu = document.getElementById('menu');
    const elTabs = document.querySelectorAll('.tab');
    const elRenderContent = document.getElementById('content');
    
    const elHomeLink = document.getElementById('homeLink');
    const elMenuLink = document.getElementById('menuLink');
    const elOrderBtn = document.getElementById('orderBtn');
    
    var currentActive; // Keeps track of a currently open tab
    
    // Attach event-listeners

    elHomeLink.addEventListener('click', () => {
        elHomeIntro.style.display = 'block';
        elMenu.style.display = 'none'
    });

    elTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // Remove the current content
            while(elRenderContent.children.length != 0) {
                elRenderContent.firstChild.remove();
            }

            // Update the current tab

            currentActive.classList.remove('active');  
            tab.classList.add('active');
            currentActive = tab;

            // Render the content 

            let tabName = tab.textContent;
            let renderer;
            if (tabName == 'Pizza') {
                renderer = renderPizza;
            } else if (tabName == 'Beverages') {
                renderer = renderBeverages;
            } else if (tabName == 'Pasta') {
                renderer = renderPasta;
            }

            renderer(elRenderContent);
        });
    });

    elMenuLink.addEventListener('click', (e) => {
        e.preventDefault();
        showMenu();
    });

    elOrderBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showMenu();
    });
    
    function showMenu() {
        elHomeIntro.style.display = 'none';
        elMenu.style.display = 'block';

        // Remove the current content
        while(elRenderContent.children.length != 0) {
            elRenderContent.firstChild.remove();
        }

        currentActive = elTabs[0];
        renderPizza(elRenderContent);
    }
})();


