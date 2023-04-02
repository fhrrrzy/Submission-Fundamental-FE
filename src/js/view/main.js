import DataSource from "../data/data";
import { hideBackdrop } from "../view/modal.js";

export default function main() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  document.addEventListener("DOMContentLoaded", () => {
    DataSource.getCharacterByUrl(DataSource.getCurrentLink());
    disableButton()

    prevButton.addEventListener("click", () => {
      DataSource.getCharacterByUrl(DataSource.getPreviousLink())
      .then(()=> disableButton());
    });
    nextButton.addEventListener("click", () => {
      DataSource.getCharacterByUrl(DataSource.getNextLink())
      .then(()=> disableButton());
    });
  });

  const disableButton = () => {
    prevButton.disabled = DataSource.getPreviousLink() == null;
    nextButton.disabled = DataSource.getNextLink() == null;
  }

  const modalBackdrop = document.getElementById("backdrop");
  modalBackdrop.addEventListener("click", hideBackdrop);
}
