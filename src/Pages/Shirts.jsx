import Apparel from "../Components/Apparel"
import { useLoaderData } from "react-router-dom"

export default function Shirts(props) {
    const allApparel = useLoaderData()
    const type = 'Shirts'

console.log(allApparel)
    return (
        <>
            <h1>Shirts</h1>
            <hr />
            {allApparel
            .filter(apparel => apparel.clothes_type === type)
            .map((filteredApparel, i) => (<Apparel apparel={filteredApparel} type={filteredApparel.type} 
            key={i}/>))}

        </>
    )
}
