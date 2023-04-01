class CharacterModal extends HTMLElement {
	constructor() {
		super();
	}

	set character(character) {
		this._character = character;
		this.render();
	}

  render() {
    this.innerHTML = `
		<div id="modal-body" class="relative">
			<div class="flex gap-5 items-center mb-4">
				<img src="${this._character.image}" class="w-28 rounded-md" alt="">
				<h2 class="text-slate-50 font-bold text-5xl">#${this._character.id} ${this._character.name}</h2>
			</div>
			<div class="text-slate-400 mb-4">
				<h3 class="font-semibold text-slate-200 text-lg">Basic information</h3>
				<hr class="border-slate-700 my-2">
				<div class="grid grid-cols-5">
					<p class="text-slate-200">Status</p>
					<p>: ${this._character.status}</p>
				</div>
				<div class="grid grid-cols-5">
					<p class="text-slate-200">Species</p>
					<p>: ${this._character.species}</p>
				</div>
				<div class="grid grid-cols-5">
					<p class="text-slate-200">Type</p>
					<p>: ${this._character.type == "" ? "-" : this._character.type}</p>
				</div>
				<div class="grid grid-cols-5">
					<p class="text-slate-200">Gender</p>
					<p>: ${this._character.gender}</p>
				</div>
			</div>
			<div class="text-slate-400">
				<h3 class="font-semibold text-slate-200 text-lg">Location</h3>
				<hr class="border-slate-700 my-2">
				<div class="grid grid-cols-2">
					<div class="">
						<div class="text-slate-200">Origin</div>
						<div class="">${this._character.origin.name}</div>
					</div>
					<div class="">
						<div class="text-slate-200">Last known location</div>
						<div class="">${this._character.location.name}</div>
					</div>
				</div>
			</div>
			<button id="modal-close" class="absolute right-2 top-2 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-white">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>                      
			</button>
		</div>
	`;
	const modalCloseButton = this.querySelector("#modal-close");
    modalCloseButton.addEventListener("click", () => {
      this.parentElement.parentElement.classList.add("hidden");
      this.parentElement.parentElement.classList.remove("flex");
    });
  }
}

customElements.define("character-modal", CharacterModal);
