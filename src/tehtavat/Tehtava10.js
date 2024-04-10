import { useMemo, useState } from "react"

export default function Tehatava10(){
    const initialCars = [
        {"merkki": "Toyota", "malli": "Corolla", "vuosimalli": 2018, "nopeus": 180, "key": "a"}, // avain lisätty objektiin
        {"merkki": "Ford", "malli": "Focus", "vuosimalli": 2019, "nopeus": 170, "key": "b"},
        {"merkki": "Honda", "malli": "Civic", "vuosimalli": 2017, "nopeus": 200, "key": "c"},
        {"merkki": "BMW", "malli": "3-sarja", "vuosimalli": 2020, "nopeus": 220, "key": "d"}
    ]

    const [result, setResult] = useState([])
    const [time, setTime] = useState(0)

    const [cars, setCars] = useState([]) // tätä muuttuja tarvitaan toisessa metodissa
    const result2 = useMemo(() => bubbleSort(cars), [cars]) // useMemon kautta voi nopeutettua skriptiä, koska
                                                            // se päivittää muuttujan vain kun sitä tarvitaan
    const [time2, setTime2] = useState(0)

    function bubbleSort(data){
        let changed = true
        const newData = [...data]
        while(changed){
            changed = false
            for(let i = 0; i < data.length - 1; i++){
                console.log(newData[i])
                if(newData[i].nopeus>newData[i+1].nopeus) {
                    changed = true
                    const a = newData[i]
                    newData[i] = newData[i+1]
                    newData[i+1] = a
                }
            }
        }
        return newData
        /* return data.sort((a, b) => b.nopeus - a.nopeus) */ // Sama juttu, mutta lyhyempi ja muu algoritmi
    }
    
    return(
        <>
            <p>Vanha:</p>
            { cars.map((car) => (
                <p key={car.key}>{JSON.stringify(car)}</p>
            )) }
            <button onClick={() => {
                const start = performance.now()
                setResult(bubbleSort(initialCars)) // metodi 1
                const end = performance.now()
                setTime(end - start)
                const start2 = performance.now()
                setCars(initialCars) // metodi 2
                const end2 = performance.now()
                setTime2(end2 - start2)
            }}>Convert</button>
            <p>Metodi 1, {time}ms:</p>
            { result.map((res) => (
                <p key={res.key}>{JSON.stringify(res)}</p>
            )) }
            <p>Metodi 2, {time2}ms:</p>
            { result2.map((res2) => (
                <p key={res2.key}>{JSON.stringify(res2)}</p>
            )) }
        </>
    )
}