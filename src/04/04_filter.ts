import {CityType, GovernmentBuildings, StreetType} from "../02/02_for_test";

export function demolishHousesOnTheStreet(newCity: CityType, happyStreet: string){

  newCity.houses = newCity.houses.filter(el => el.address.street.title !== happyStreet)
}
export function getBuildingsWithStaffCountGreaterThen(buildings: Array<GovernmentBuildings>, number: number){
  return  buildings.filter(el => el.staffCount > number)
}
