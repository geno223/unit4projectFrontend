import Apparel from "../Components/Apparel"
import { useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allApparel = useLoaderData()
console.log(allApparel)
    return (
        <>
            <h1>Index</h1>
            <hr />
            {allApparel.map((apparel, i) => <Apparel apparel={apparel} key={i}/>)}
        </>
    )
}
