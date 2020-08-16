(function () {
  const root = document.querySelector('.root');
  const placesList = document.querySelector('.places-list');
  const buttons = document.querySelectorAll('[type=button]');
  const crosses = document.querySelectorAll('.popup__close');
  const imgUrl = document.querySelector('.popup__image');
  const infoName = document.querySelector('.user-info__name');
  const infoJob = document.querySelector('.user-info__job');

  const add = document.forms.new;
  const edit = document.forms.edit;
  const { name, job } = edit.elements;

  function openImg(event) {
    const imagePopup = new ImagePopup(root, imgUrl, placesList)
    return imagePopup.open(event)
  }

  function card(name, link) {
    const card = new Card(openImg)
    card.create(name, link);
    card.setEventListeners()
    return card.element
  }

  const cardList = new CardList(card, placesList, initialCards);
  const popup = new Popup(crosses, root);

  const userInfo = new UserInfo(name, job, infoName, infoJob);
  userInfo.setUserInfo()

  const editFormValidator = new FormValidator(edit);
  const addFormValidator = new FormValidator(add);

  function setButton(buttons) {
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        if (edit) {
          let { submit } = edit.elements
          editFormValidator.setSubmitButton(submit, true)
          editFormValidator.resetError()
          edit.reset()
          userInfo.setUserInfo()
        }
        if (add) {
          let { submit } = add.elements
          addFormValidator.setSubmitButton(submit, false)
          addFormValidator.resetError()
          add.reset()
        }
        popup.open(event)
      })
    });
  }

  function addCard(event) {
    event.preventDefault();
    const { name, link } = add.elements;
    cardList.addCard(name.value, link.value);
    add.reset();
    popup.close();
  }

  function updateUser(event) {
    event.preventDefault();
    userInfo.updateUserInfo();
    popup.close();
  }

  add.addEventListener('submit', addCard);
  edit.addEventListener('submit', updateUser);

  setButton(buttons);
  cardList.render()
})();



