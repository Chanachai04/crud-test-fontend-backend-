import CreateProduct from "./components/CreateProduct";
import FormEditProduct from "./components/EditProduct";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import HomePageUser from "./components/pages/user/HomePageUser";
import Product from "./components/Product";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";
import HomePageAdmin from "./components/pages/admin/HomePageAdmin";
import {curentUser} from "./functions/auth";
import {useDispatch} from "react-redux";
import {login} from "./store/userSlice";
function App() {
    const dispatch = useDispatch();
    const idToken = localStorage.getItem("token");
    curentUser(idToken)
        .then((res) => {
            console.log(res);
            dispatch(
                login({
                    name: res.data.name,
                    role: res.data.role,
                    token: idToken,
                })
            );
        })
        .catch((err) => console.log(err));
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Route */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin Route */}
                <Route
                    path="/admin/index"
                    element={
                        <AdminRoutes>
                            <HomePageAdmin />
                        </AdminRoutes>
                    }
                />
                <Route
                    path="/admin/manage"
                    element={
                        <AdminRoutes>
                            <Product />
                        </AdminRoutes>
                    }
                />
                <Route
                    path="/edit/:id"
                    element={
                        <AdminRoutes>
                            <FormEditProduct />
                        </AdminRoutes>
                    }
                />
                <Route
                    path="/create-product"
                    element={
                        <AdminRoutes>
                            <CreateProduct />
                        </AdminRoutes>
                    }
                />

                {/* User Route */}
                <Route
                    path="/user/index"
                    element={
                        <UserRoutes>
                            <HomePageUser />
                        </UserRoutes>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
