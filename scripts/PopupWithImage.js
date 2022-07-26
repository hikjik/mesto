import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__image');
    this._caption = document.querySelector('.popup__image-caption');
  }

  open({name, link}) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open()
  }
}

export default PopupWithImage;
