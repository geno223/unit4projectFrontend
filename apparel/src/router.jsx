import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import { indexLoader, showLoader } from "./loaders.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/apparel" element={<Index/>} loader={indexLoader}/>
        <Route path="apparel/:id" element={<Show/>} loader={showLoader}/>
        <Route/>
        <Route/>
        <Route/>
    </Route>
))

export default router