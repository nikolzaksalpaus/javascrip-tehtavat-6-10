import { useEffect, useState } from "react"

export default function Tehtava7(){
    const [number, setNumber] = useState("")
    const [result, setResult] = useState("")

    useEffect(() => {
        let newNumber = number.split('')
        if(newNumber.length % 2 !== 0){
            return
        }
        for(let i = 0; i < number.length; i += 2){
            const first = newNumber[i]
            const second = newNumber[i+1]
            newNumber[i] = second
            newNumber[i+1] = first
        }
        setResult(newNumber.join(''))
    }, [number])

    function onlyNumber(val) {
        return val.replace(/\D/g,'')
    }
    return(
        <div>
            <div>
                <input value={number} onChange={e => setNumber(onlyNumber(e.target.value))} />
            </div>
            <div>
                {result}
            </div>
        </div>
    )
}