import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const clothes = useLoaderData()
    return (
        <div>
            <h1>{clothes.clothes_price}</h1>
            <h2>{clothes.clothes_image}</h2>
            <h2>{clothes.clothes_type}</h2>
            <Form action={`/delete/${clothes.id}/`} method="post">
            <button style={{"backgroundColor": "red"}}>
                Trash</button>
            </Form>
            
            <Form action={`/update/${clothes.id}/`} method="POST">
                <label htmlFor="clothes_type">
                    <input type="text" name="clothes_type" id="clothes_type" defaultValue={clothes.clothes_type} />
                </label>
                <label htmlFor="clothes_price">
                    <input type="number" name="clothes_price" id="clothes_price"defaultValue={clothes.clothes_price}/>
                </label>
                <label htmlFor="clothes_image">
                    <input type="img" name="clothes_image" id="clothes_image" defaultValue={clothes.clothes_image} />
                </label>
                <button>Update</button>
            </Form>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}