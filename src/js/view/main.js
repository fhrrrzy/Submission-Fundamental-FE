import DataSource from '../data/data';

export default function main(){
    window.addEventListener("load", ()=> {
        DataSource.getCharacter(1)
    })
}