let content = document.querySelector('.content');

let editButton = content.querySelector('.profile__button_ubah');
let profileName = content.querySelector('.profile__name');
let profileAbout = content.querySelector('.profile__about');

let formElement = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__button_close');
let nameInput = document.querySelector('.popup__name-field');
let aboutInput = document.querySelector('.popup__about-field');
let saveButton = content.querySelector('.popup__button_submit');

let newName;
let newAbout;

function popupVisible () {
    formElement.classList.toggle('popup_closed')
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    newName = nameInput.value;
    newAbout = aboutInput.value;

    profileName.textContent = newName;
    profileAbout.textContent = newAbout;

    popupVisible();
}

editButton.addEventListener('click', popupVisible);

closeButton.addEventListener('click', popupVisible);

formElement.addEventListener('submit', handleProfileFormSubmit);