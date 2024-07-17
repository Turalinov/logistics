
import { map } from "../../js/util/map";

export default function mapBox() {
  const mapBox = document.querySelector(`#map`);
  if (mapBox) {
    console.log('map.js');
    map();
  }

}
