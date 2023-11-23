// Obtém todos os itens de menu como uma lista
const menuItems = document.querySelectorAll('nav ul li a');

// Adiciona eventos de mouse para destacar os itens de menu
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '';
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = 'darkred';
    });    
});

function navigateTo(url) {
  window.location.href = url;
}
