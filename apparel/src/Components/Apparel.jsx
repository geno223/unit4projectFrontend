import { Link } from "react-router-dom"

export default function Apparel({ apparel }) {

    const id = apparel.url.split('/')[4]

    
    return (
        <div>
            <Link to={`/apparel/${id}`}>
                <h1>Clothing Type:{apparel.clothes_type}</h1>
                <h1>{apparel.clothes_image}</h1>
                <h1>Price:{apparel.clothes_price}</h1>
            </Link>
        </div>
    )
}
