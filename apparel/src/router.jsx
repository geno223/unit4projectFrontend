import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./Pages/Index"
import Show from "./Pages/Show"


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route path="/apparel" element={<Index/>}/>
        <Route path="apparel/:id" element={<Show/>}/>
        <Route/>
        <Route/>
        <Route/>
    </Route>
))

export default router