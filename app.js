const close = document.querySelector('#close');
const open = document.querySelector('#open');
const navigation = document.querySelector('#main-nav');

open.addEventListener('click', function() {
    navigation.style.display = 'flex';
})

close.addEventListener('click', function() {
    navigation.style.display = 'none';
})