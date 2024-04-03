import { useEffect, useState } from "react"

export default function Tehtava8(){
    const [numbers, setNumbers] = useState("[]")
    const [result, setResult] = useState(0)

    useEffect(() => {
        let index = 0;
        try{
            const numbersArray = JSON.parse(numbers)
            for(const number in numbersArray){
                if(numbersArray[number] % 10 === 0) index = number;
            }
            setResult(index)
        }catch(e){
            setResult(index)
        }
    }, [numbers])

    return(
        <div>
            <div>
                <input value={numbers} onChange={e => setNumbers(e.target.value)} placeholder="[10, 20, 30]" />
            </div>
            <div>
                Index {result}
            </div>
        </div>
    )
}