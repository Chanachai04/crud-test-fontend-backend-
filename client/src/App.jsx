import CreateProduct from "./components/CreateProduct";
import FormEditProduct from "./components/EditProduct";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Product from "./components/Product";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/edit/:id" element={<FormEditProduct />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
