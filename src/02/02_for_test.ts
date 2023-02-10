import {Address} from "cluster";

export type StreetType = {
    title:string
}

export type AddressType = {
    number:number
    street:StreetType
}

export type HausesType = {
    buildedAt:number
    repaired:boolean
    address: AddressType
}
export type AddressTypeForGover ={
    street:StreetType
}
export type GovernmentBuildings ={
    type:"HOSPITAL" |"FIRE-STATION"
    budget:number
    staffCount:number
    address:AddressTypeForGover
}

export type CityType = {
    title:string
    houses:Array<HausesType>
    governmentBuildings:Array<GovernmentBuildings>
    citizensNumber:number
}
