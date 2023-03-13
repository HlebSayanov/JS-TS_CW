type AvenueType = {
    avenue: string
}

type AdressType = {
    city: string
    street: AvenueType
    home:number
}
type lessonType = {
    title:string
    isDone:boolean
}

type PropsType = {
    title: string
    id: number
    name: string
    lesson: Array<{ title:string ,isDone:boolean } >
    adress: AdressType
}

let props: PropsType

beforeEach(() => {
        props = {
            title: 'Hellloe',
            id: 12,
            name: 'Harison',
            lesson: [{title: '1', isDone:false}, {title: '2', isDone: true}],
            adress: {
                city: 'Minsk',
                street: {
                    avenue: 'Partizan'
                },
                home: 81
            }
        }
    }
)

test('destructuring assignment #1', () => {

    const {title, id, name} = props

    expect(title).toBe('Hellloe')
    expect(id).toBe(12)
    expect(name).toBe('Harison')
})

test('destructuring assignment #2', () => {

const [ls1,ls2] = props.lesson

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
    expect(ls2.isDone).toBe(true)


})
test('destructuring assignment #3', () => {

const {  adress: {city,...street} } = props

    expect(city).toBe('Minsk')
    expect(street.street.avenue).toBe('Partizan')
    expect(street.home).toBe(81)



})
