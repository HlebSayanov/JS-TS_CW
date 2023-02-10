import {addTech, ChangeFarniture, checkCity} from "./03_function";
import exp from "constants";

let roomTest:RoomType


beforeEach(()=>{
    roomTest = {
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

})

test('there should be a city of Minsk',()=>{

    const res1 = checkCity(roomTest,'Minsk')
    const res2 = checkCity(roomTest,'San_francisko')

    expect(res1).toBe(true)
    expect(res2).toBe(false)

})
test('there should be add technologies name and label',()=>{

    // expect(roomTest.technologies.length).toBe(2)

    const start = addTech(roomTest,'SoundBar','JBL')

expect(roomTest.technologies.length).toBe(3)
expect(roomTest.technologies[2].name).toBe('SoundBar')
expect(roomTest.technologies[2].label).toBe('JBL')
})
test('there should be change farniture',()=>{

    // expect(roomTest.technologies.length).toBe(2)

  const start =   ChangeFarniture(roomTest)

expect(start).toBe(false)
expect(roomTest.country.furniture.sofa).toBe(true)

})
