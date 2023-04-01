import '../components/character-list.js'
const axios = require('axios');

class DataSource {
  static BASE_URL = 'https://rickandmortyapi.com/api/character';

  static getCharacter = (page = null, status = null, name = null) => {
    const params = {
      page: page,
      name: name,
      status: status
    };
    const characterList = document.querySelector('character-list')

    axios.get(DataSource.BASE_URL, { params })
      .then(response => {
        console.log(response.data)
        characterList.characters = response.data.results
      })
      .catch(error => console.error(error));
  }

  static getCharacterById = (id) => {
    axios.get(`${DataSource.BASE_URL}/${id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.error(error));
  }

  static test = () => {
    console.log("halo");
  }
}

export default DataSource;
