window.addEventListener('scroll', function () {
    let header = document.querySelector('.contatoc');
    let header_p = document.querySelector('.cabecalho-principal');

    if (window.scrollY > 50) {
        header.style.height = '0';
        header.style.opacity = '0';
        header.style.visibility = 'hidden';
        header_p.style.background = '#101010';
    } else {
        header.style.height = '40px';
        header.style.opacity = '1';
        header.style.visibility = 'visible';
        header_p.style.background = 'transparent';
    }
});

