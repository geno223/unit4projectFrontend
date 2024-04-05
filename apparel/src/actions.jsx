import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newApparel = {
        type: formData.get("clothes_type"),
        price: formData.get("clothes_price"),
        image: formData.get("clothes_image"),
    }

    // send request to the our backend
    await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newApparel)
    })

    // redirect back to the index
    return redirect("/")
}
// Delete Action rehome a clothes from a form submission to `delete/:id`
export const deleteAction = async ({params}) => {
    // get the clothes id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}