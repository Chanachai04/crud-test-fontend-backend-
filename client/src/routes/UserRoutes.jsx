import {useSelector} from "react-redux";

function UserRoutes({children}) {
    const {user} = useSelector((state) => state);
    console.log("UserRoutes", user);
    return user && user.user.token ? children : <h1>No Login</h1>;
}
export default UserRoutes;
