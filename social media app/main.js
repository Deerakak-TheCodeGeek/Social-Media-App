//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MASSAGES
const massageNotification = document.querySelector('#massage-notification');
const massages = document.querySelector('.massages')
const massage =massages.querySelectorAll('.massage');
const massageSearch = document.querySelector('#massage-search');

//THEME

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');


const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'Notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#Notifications .notification-count').style.display = 'none';
        }
    })
})

/* ------------- Massages ------------- */

const searchMassage = () => {
    const val = massageSearch.value.toLowerCase();
    massage.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if (name.indexOf(val) != -1) chat.style.display = 'flex';
        else chat.style.display = 'none';
    })
}

massageNotification.addEventListener('click', () => {
    massages.style.boxShadow = '0 0 1rem var(--color-primary)';
    massageNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        massages.style.boxShadow = 'none'
    },2000)
})

massageSearch.addEventListener('keyup',searchMassage)

//THEME

const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) themeModal.style.display = 'none';
}

themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);
