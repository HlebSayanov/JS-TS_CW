

type IronType = {
    processor: string
    videoCard: string
    ramGb: number
}

type TechnologiesType = {
    name:string
    label:string
    iron:IronType
}
type FurnitureType = {
    sofa: boolean,
    carpetColor: string
    table: boolean

}
type CountryType = {
    city: string,
    streetName: string
    furniture: FurnitureType
}

type RoomType = {
    id: number
    name: string
    country: CountryType
    technologies: Array<TechnologiesType>
}

const room: RoomType = {
    id: 1,
    name: 'zal',
    country: {
        city: 'Minsk',
        streetName: 'Mayakovskogo',
        furniture: {
            sofa: true,
            carpetColor: 'black',
            table: true
        },
    },
    technologies: [
        {
            name: 'notebook',
            label: 'Honor',
            iron: {
                processor: 'Intel i5',
                videoCard: 'Intel Iris Xe',
                ramGb: 8
            }
        },
        {
            name: 'Telek',
            label: 'LG',
            iron: {
                processor: 'LG',
                videoCard: 'LG VedeoKoder',
                ramGb: 1
            }
        },


    ]

}
