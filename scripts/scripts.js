let content = document.querySelector('.content');

let editButton = content.querySelector('.profile__button-ubah');
let profileName = content.querySelector('.profile__name');
let profileAbout = content.querySelector('.profile__about');

let formElement = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let closeButton = document.querySelector('.popup__button-close');
let nameInput = document.querySelector('.popup__input_name-field');
let aboutInput = document.querySelector('.popup__input_about-field');

let newName;
let newAbout;

function popupVisible () {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    formElement.classList.toggle('popup_opened')
}

function popupClose () {
    formElement.classList.toggle('popup_opened')   
}

function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    newName = nameInput.value;
    newAbout = aboutInput.value;

    profileName.textContent = newName;
    profileAbout.textContent = newAbout;

    popupClose ();
}

editButton.addEventListener('click', popupVisible);

closeButton.addEventListener('click', popupClose);

formElement.addEventListener('submit', handleProfileFormSubmit);

// tombol suka