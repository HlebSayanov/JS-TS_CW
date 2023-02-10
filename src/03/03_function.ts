import {CityType} from "../02/02_for_test";


export function checkCity(room:RoomType,city:string){
    return room.country.city === city
}


export function addTech (room:RoomType, name:string,label:string){
   return  room.technologies.push(
    {
        name: name,
            label: label,
        iron: {
        processor: 'Intel i5',
            videoCard: 'Intel Iris Xe',
            ramGb: 8
    }
    }
    )
}


export function ChangeFarniture (room:RoomType){
   return room.country.furniture.table = false
}

