document.addEventListener('DOMContentLoaded', function() {
    var playButtons = document.querySelectorAll('.play-button');
    var audios = document.querySelectorAll('.track-audio');

    playButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var audio = audios[index];
            
            // Pausa outras músicas
            audios.forEach(function(otherAudio, otherIndex) {
                if (otherIndex !== index) {
                    otherAudio.pause();
                    var otherButton = playButtons[otherIndex];
                    var otherIcon = otherButton.querySelector('i');
                    otherIcon.classList.remove('bi-pause');
                    otherIcon.classList.add('bi-play');
                }
            });

            // Inicia ou pausa a música clicada
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }

            // Alterna entre os ícones de play e pause
            var icon = button.querySelector('i');
            icon.classList.toggle('bi-play');
            icon.classList.toggle('bi-pause');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-button');
    const filterOptions = document.querySelector('.filter-options');

    filterButton.addEventListener('click', function() {
        filterOptions.classList.toggle('show');
    });

    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function() {
            const selectedOption = this.textContent.trim();
            if (selectedOption === 'Maior Preço') {
                sortByPriceDescending();
            } else if (selectedOption === 'Menor Preço') {
                sortByPriceAscending();
            } else {
                console.log('Opção selecionada:', selectedOption);
            }
            filterOptions.classList.remove('show');
        });
    });

    // Função para ordenar os itens pelo preço em ordem decrescente
    function sortByPriceDescending() {
        const items = document.querySelectorAll('.shop-container .item');
        const sortedItems = Array.from(items).sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('R$', '').trim());
            const priceB = parseFloat(b.querySelector('p').textContent.replace('R$', '').trim());
            return priceB - priceA;
        });
        const shopContainer = document.querySelector('.shop-container');
        shopContainer.innerHTML = '';
        sortedItems.forEach(item => {
            shopContainer.appendChild(item);
        });
    }

    // Função para ordenar os itens pelo preço em ordem crescente
    function sortByPriceAscending() {
        const items = document.querySelectorAll('.shop-container .item');
        const sortedItems = Array.from(items).sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('R$', '').trim());
            const priceB = parseFloat(b.querySelector('p').textContent.replace('R$', '').trim());
            return priceA - priceB;
        });
        const shopContainer = document.querySelector('.shop-container');
        shopContainer.innerHTML = '';
        sortedItems.forEach(item => {
            shopContainer.appendChild(item);
        });
    }
});


