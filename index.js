const nameBtn = document.getElementById('name');
const paragraph = document.getElementById('paragraph');

nameBtn.addEventListener('click', function () {
    paragraph.innerHTML = 'poop ' + paragraph.innerHTML;
})
