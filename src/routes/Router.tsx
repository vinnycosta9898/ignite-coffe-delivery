import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Checkout } from '../pages/Checkout'
import { DefaultLayout } from "../layouts/DefaultLayout"
import { OrderConfirmed } from "../pages/OrderConfirmed"

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/checkout" element={<Checkout/>}/>
                    <Route path="/orderconfirmed" element={<OrderConfirmed/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}