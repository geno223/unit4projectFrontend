import { Link, useLoaderData } from "react-router-dom"

export default function Show(props) {

    const clothes = useLoaderData()
    return (
        <div>
            <h1>{clothes.clothes_price}</h1>
            <h2>{clothes.clothes_image}</h2>
            <h2>{clothes.clothes_type}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}