const questionsListArray = document.querySelectorAll('.questions__tabs-item');
function changeActiveTab(index) {
    closeActiveTab();
    event.target.closest('.questions__header-item').classList.add('questions__header-item--active');
    questionsListArray[index].classList.add('questions__tabs-item--active');
}

function closeActiveTab() {
    document.querySelector('.questions__tabs-item--active').classList.remove('questions__tabs-item--active');
    document.querySelector('.questions__header-item--active').classList.remove('questions__header-item--active');
}