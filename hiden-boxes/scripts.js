const revealBtn = document.querySelector('.reveal-btn');
const hiddenContent = document.querySelector('.hidden-content');

function revealContent() {
    if (hiddenContent.classList.contains('hidden-content')) {
        hiddenContent.classList.remove('hidden-content');
    } else {
        hiddenContent.classList.add('hidden-content');
    }
}

revealBtn.addEventListener('click', revealContent);