import {useSelector} from "react-redux";
import NavUser from "../components/NavUser";
import Notfound404 from "../components/pages/Notfound404";

function UserRoutes({children}) {
    const {user} = useSelector((state) => ({...state}));
    console.log("UserRoutes", user);
    return user && user.user.token ? (
        <>
            <NavUser />
            {children}
        </>
    ) : (
        <Notfound404 text="No Login" />
    );
}
export default UserRoutes;
