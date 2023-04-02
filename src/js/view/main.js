import DataSource from "../data/data";
import { hideBackdrop } from "../view/modal.js";

const main = () => {
  const prevButtonEl = document.getElementById("prev-button");
  const nextButtonEl = document.getElementById("next-button");
  const statusEl = document.getElementById("status");
  const searchInputEl = document.getElementById("search-input");

  document.addEventListener("DOMContentLoaded", () => {
    DataSource.getCharacterByUrl(DataSource.getCurrentLink());
    disableButton();

    prevButtonEl.addEventListener("click", () => {
      DataSource.getCharacterByUrl(DataSource.getPreviousLink()).then(() =>
        disableButton()
      );
    });
    nextButtonEl.addEventListener("click", () => {
      DataSource.getCharacterByUrl(DataSource.getNextLink()).then(() =>
        disableButton()
      );
    });
  });

  // debounce function to delay search
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  // search event with debounce
  searchInputEl.addEventListener(
    "keyup",
    debounce(() => {
      DataSource.getCharacter(getStatusValue(), getSearchValue()).then(() =>
        disableButton()
      );
    }, 300)
  );

  // change status event
  statusEl.addEventListener("change", () => {
    const statusValue = getStatusValue();
    DataSource.setStatus(statusValue);
    DataSource.getCharacter(statusValue, getSearchValue()).then(() => disableButton());
  });

  const getStatusValue = () => {
    const statusValue = statusEl.value == "all" ? null : statusEl.value;
    return statusValue;
  };

  const getSearchValue = () => {
    const searchValue = searchInputEl.value
    return searchValue
  }

  const disableButton = () => {
    prevButtonEl.disabled = DataSource.getPreviousLink() == null;
    nextButtonEl.disabled = DataSource.getNextLink() == null;
  };

  const modalBackdrop = document.getElementById("backdrop");
  modalBackdrop.addEventListener("click", hideBackdrop);
}


export default main