import "./character-item.js";
import { hideModalDetail, showBackdrop, showSpinner } from '../view/modal.js';
import DataSource from '../data/data';

class CharacterList extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", this.handleClick);
  }

  set characters(characters) {
    this._characters = characters;
    this.render();
  }

  handleClick(event) {
    const characterItem = event.target.closest("character-item");
    if (characterItem) {
      const characterId = characterItem.querySelector('div').getAttribute("data-id");
      hideModalDetail()
      showBackdrop()
      showSpinner()
      DataSource.getCharacterById(characterId)
    }
  }

  render() {
    const characterItems = this._characters
      .map((character) => {
        const characterItem = document.createElement("character-item");
        characterItem.character = character;
        return characterItem.outerHTML;
      })
      .join("");

    this.innerHTML = `
      <div id="character-list" class="grid grid-cols-2 gap-2">
        ${characterItems}
      </div>
    `;
  }
}

customElements.define("character-list", CharacterList);
