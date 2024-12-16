import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {curentAdmin} from "../functions/auth";
import Notfound404 from "../components/pages/Notfound404";

function AdminRoutes({children}) {
    const {user} = useSelector((state) => ({...state}));
    const [ok, setOk] = useState(false);
    useEffect(() => {
        if (user && user.user.token) {
            curentAdmin(user.user.token)
                .then((res) => setOk(true))
                .catch((err) => {
                    setOk(false);
                    console.log(err);
                });
        }
    }, [user]);
    console.log("AdminRoutes", user);
    return ok ? children : <Notfound404 text="No Permission" />;
}
export default AdminRoutes;
