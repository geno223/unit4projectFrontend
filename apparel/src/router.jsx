import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import Hoodies from "./Pages/Hoodies"
import { indexLoader, showLoader } from "./loaders.jsx";
import Shirts from "./Pages/Shirts.jsx";
import Pants from "./Pages/Pants.jsx";
import { createAction } from "./actions.jsx";
import { deleteAction } from "./actions.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="" element={<Index/>} loader={indexLoader}>

        </Route>
        <Route path="/hoodies" element={<Hoodies/>} loader={indexLoader}/>
        <Route path="apparel/:id" element={<Show/>} loader={showLoader}/>
        <Route path="/pants" element={<Pants/>} loader={indexLoader}/>
        <Route path="/shirts" element={<Shirts/>} loader={indexLoader}/>
        <Route path="create" action={createAction}/>
        <Route path="delete/:id" action={deleteAction}/>
        <Route/>
    </Route>
))

export default router