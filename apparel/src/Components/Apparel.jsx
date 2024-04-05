import { Link } from "react-router-dom"

export default function Apparel({ apparel }) {


    
    return (
        <div>
            <Link to={`/apparel/`}>
                <h1>{apparel.clothes_type}</h1>
            </Link>
        </div>
    )
}
