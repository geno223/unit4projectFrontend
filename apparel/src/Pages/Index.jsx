import Apparel from "../Components/Apparel"
import { Form, useLoaderData, Link } from "react-router-dom"


export default function Index(props) {
    const allApparel = useLoaderData()
    
    
console.log(allApparel)
    return (
        <>
            <h1>Add Your Own</h1>
            <Form action="/create" method="POST">
                <label htmlFor="clothes_type">
                    <input type="text" name="clothes_type" id="clothes_type" />
                </label>
                <label htmlFor="clothes_price">
                    <input type="number" name="clothes_price" id="clothes_price" />
                </label>
                <label htmlFor="clothes_type">
                    <input type="img" name="clothes_image" id="clothes_image" />
                </label>
                <button>Add</button>
            </Form>
            <Link to='/hoodies'>
            <h2>Hoodies</h2>
            </Link>
            <Link to='/pants'>
                <h2>Pants</h2>
            </Link>
            <Link to='/shirts'>
                <h2>Shirts</h2>
            </Link>
            <h1>Index</h1>
            <hr />
            {allApparel.map((apparel, i) => <Apparel apparel={apparel} key={i}/>)}
        </>
    )
}
