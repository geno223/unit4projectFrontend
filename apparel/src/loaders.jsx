// Base Url
const URL = import.meta.env.VITE_BASE_URL

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}/outfits/`)
    const allApparel= await response.json()
    return allApparel
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}/outfits/${params.id}/`)
    const apparelVar = await response.json()
    return apparelVar
}

