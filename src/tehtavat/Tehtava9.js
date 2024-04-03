import { useEffect, useState } from "react"

export default function Tehtava9(){
    const [result, setResult] = useState(false)
    const [circleCenterPoint, setCircleCenterPoint] = useState("")
    const [circleRadius, setCircleRadius] = useState("")
    const [point, setPoint] = useState("")

    useEffect(() => {
        const splittedCircleCenterPoint = circleCenterPoint.split(',')
        const splittedPoint = point.split(',')
        setResult(
            (
                (splittedCircleCenterPoint[0]-splittedPoint[0]) ** 2 +
                (splittedCircleCenterPoint[1]-splittedPoint[1]) ** 2
            ) ** 0.5 < Number(circleRadius)
        )
    }, [circleCenterPoint, circleRadius, point])

    return(
        <div>
            <div>
                <div>
                    <h3>{ result ? "Piste sijaitsee ympyrän sisällä" : "Piste ei sijaitse ympyrän sisällä" }</h3>
                </div>
                <div>
                    <label style={{ display: "block" }} for="">Ympyrän keskipiste x,y</label>
                    <input value={circleCenterPoint} onChange={e => setCircleCenterPoint(e.target.value)} />
                </div>
                <div>
                    <label style={{ display: "block" }}>Ympyrän säde</label>
                    <input value={circleRadius} onChange={e => setCircleRadius(e.target.value)} />
                </div>
                <div>
                    <label style={{ display: "block" }}>Piste x,y</label>
                    <input value={point} onChange={e => setPoint(e.target.value)} />
                </div>
            </div>
        </div>
    )
}