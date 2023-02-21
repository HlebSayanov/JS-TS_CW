import {GovernmentBuildings, HausesType} from "../02/02_for_test";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildings>) => {
  return buildings.map(el=> el.address.street.title)
}
export const getStreetsTitlesOfHouses = (houses: Array<HausesType>) => {
  return houses.map(el => el.address.street.title)
}
