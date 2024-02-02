import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/commons/layouts/Layout";
import Home from "../pages/Home";
import Detail from "pages/Detail";
import EditDetail from "pages/EditDetail";
import { useDispatch } from "react-redux";
import { setLetters } from "./redux/modules/fanLetter";
const Router = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("fanLetters")) || [];
  dispatch(setLetters(data)); //
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="detail/:id" element={<Detail />} />
        <Route path="editDetail/:id" element={<EditDetail />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
