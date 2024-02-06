import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/commons/layouts/Layout";
import Home from "../pages/Home";
import Detail from "pages/Detail";
import EditDetail from "pages/EditDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="detail/:id" element={<Detail />} />
        <Route path="editDetail/:id" element={<EditDetail />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
