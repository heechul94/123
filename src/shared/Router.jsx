import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/commons/layouts/Layout";
import Home from "../pages/Home";
import Detail from "pages/Detail";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="detail" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
