import {Address} from "cluster";

type StreetType = {
    title:string
}

type AddressType = {
    number:number
    street:StreetType
}

type HausesType = {
    buildedAt:number
    repaired:boolean
    address: AddressType
}
type AddressTypeForGover ={
    street:StreetType
}
type GovernmentBuildings ={
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
