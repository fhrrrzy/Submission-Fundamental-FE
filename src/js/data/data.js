import axios from 'axios';
import CharacterList from '../components/character-list.js';
import CharacterModal from '../components/character-modal.js';
import { hideSpinner, showModalDetail } from '../view/modal.js';
import { localStorageUtil } from '../data/storage.js';

class DataSource {
  static BASE_URL = 'https://rickandmortyapi.com/api/character';

  static getCharacter = (status = null, name = null) => {
    const params = { status, name };
    const characterList = document.querySelector('character-list');

    return axios.get(DataSource.BASE_URL, { params })
      .then(response => {
        characterList.characters = response.data.results;
        DataSource.setPreviousLink(response.data.info.prev)
        DataSource.setCurrentLink(DataSource.BASE_URL)
        DataSource.setNextLink(response.data.info.next)
      })
      .catch(error => console.error(error));
  };

  static getCharacterByUrl = url => {
    const characterList = document.querySelector('character-list');
    return axios.get(url)
      .then(response => {
        characterList.characters = response.data.results;
        DataSource.setPreviousLink(response.data.info.prev)
        DataSource.setCurrentLink(url)
        DataSource.setNextLink(response.data.info.next)
      })
      .catch(error => console.error(error));
  };

  static getCharacterById = id => {
    const characterModal = document.querySelector('character-modal');
    axios.get(`${DataSource.BASE_URL}/${id}`)
      .then(response => {
        characterModal.character = response.data;
        hideSpinner();
        showModalDetail();
      })
      .catch(error => console.error(error));
  };

  static setCurrentLink = link => {
    localStorageUtil.set('currentLink', link);
  };

  static getCurrentLink = () => {
    let currentLink = localStorageUtil.get("currentLink");
    if (!currentLink) {
      currentLink = DataSource.BASE_URL;
      localStorageUtil.set("currentLink", currentLink);
    }
    return currentLink;
  };

  static setPreviousLink = link => {
    localStorageUtil.set('previousLink', link);
  };

  static getPreviousLink = () => {
    return localStorageUtil.get('previousLink');
  };

  static setNextLink = link => {
    localStorageUtil.set('nextLink', link);
  };

  static getNextLink = () => {
    return localStorageUtil.get('nextLink');
  };
}

export default DataSource;
