import {CityType, GovernmentBuildings, HausesType} from "../02/02_for_test";

export function addMoneyToBudget(budget:GovernmentBuildings,num:number){

    return budget.budget += num

}

export function repairHouse(hauses: HausesType){
    return hauses.repaired = true
}

export function toFireStaffReduced(building: GovernmentBuildings, staff: number){
    return building.staffCount -= staff
}
export function toFireStaff(building: GovernmentBuildings, staff: number){
    return building.staffCount += staff
}
