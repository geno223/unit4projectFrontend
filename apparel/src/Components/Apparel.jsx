import { Link } from "react-router-dom"

export default function Apparel({ apparel }) {

    //const id = apparel.url.split('/')[4]
    console.log(apparel)
    
    return (
        <div>
            <Link to={`/apparel/${apparel.id}`}>
                <h1>Clothing Type:{apparel.clothes_type}</h1>
                < img src = {apparel.clothes_image}/>
                <h1>Price:{apparel.clothes_price}</h1>
            </Link>
        </div>
    )
}
