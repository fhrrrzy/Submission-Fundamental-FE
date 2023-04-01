import "./character-item.js";

class CharacterList extends HTMLElement {
    constructor() {
        super();
    }

    set characters(characters) {
        this._characters = characters;
        this.render();
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
