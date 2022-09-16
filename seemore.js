var btn = document.getElementById('moreProductsButton');
var content = document.getElementById('moreProducts');

btn.addEventListener('click', function () {
    if (content.style.display != 'none') {
        content.style.display = 'none';
        btn.textContent = 'VER MAIS ▼'
        return;
    }
    content.style.display = 'flex';
    btn.textContent = 'VER MENOS ▲'
});