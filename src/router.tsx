import { Route, Routes } from "react-router-dom";
import { index } from "./components/home";
import { page1 } from "./components/page1";

export function Router () {
    return (
        <Routes>
        <Route path="/" element={index()} />
        <Route path="/page1" element={page1()} />
        </Routes>
    )
}