import CreateProduct from "./views/CreateProduct";
import FormEditProduct from "./views/EditProduct";
import FormProduct from "./views/Product";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormProduct />} />
                <Route path="/edit/:id" element={<FormEditProduct />} />
                <Route path="/create-product" element={<CreateProduct />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
