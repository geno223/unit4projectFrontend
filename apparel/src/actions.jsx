import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newApparel = {
        clothes_type: formData.get("clothes_type"),
        clothes_price: formData.get("clothes_price"),
        clothes_image: formData.get("clothes_image"),
    }

    // send request to the our backend
    await fetch(`${URL}/outfits/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newApparel)
    })

    // redirect back to the index
    return redirect("/")
}
// Update Action updating a pet from a form submission to `update/:id`
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    // get the pet id
    const id = params.id
    // construct the request body
    const updatedClothes = {
        clothes_type: formData.get("clothes_type"),
        clothes_price: formData.get("clothes_price"),
        clothes_image: formData.get("clothes_image"),
    }
    // send the request body to the backend
    await fetch(`${URL}${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedClothes)
    })
    // redirect to the Show page
    return redirect(`/${id}`)
}

// Delete Action rehome a clothes from a form submission to `delete/:id`
export const deleteAction = async ({params}) => {
    // get the clothes id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}/outfits/${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}