class CharacterItem extends HTMLElement{
    constructor(){
        super()
    }

    set character(character){
        this._character = character
        this.render()
    }

    render(){
        this.innerHTML = `
        <div class="flex items-center gap-3 p-3 border-[1px] rounded-lg mb-1 hover:bg-slate-900 duration-150 cursor-pointer border-slate-600" data-id="${this._character.id}">
            <img src="${this._character.image}" class="w-10 h-10" alt="">
            <div class="text-slate-100 line-clamp-1">${this._character.name}</div>
        </div>
        `
    }
}

customElements.define('character-item', CharacterItem);