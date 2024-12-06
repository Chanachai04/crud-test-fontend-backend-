import FormEditProduct from "./components/FormEditProduct";
import FormProduct from "./components/FormProduct";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import EnhancedTable from "./components/tmp";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<EnhancedTable />} />
                <Route path="/edit/:id" element={<FormEditProduct />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
