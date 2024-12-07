import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {register} from "../../../functions/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Register() {
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        register(data)
            .then((res) => {
                console.log(res);
                alert(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <Card component="form" sx={{width: "700px", mx: "auto", mt: 15}} onSubmit={handleSubmit}>
                <CardContent>
                    <Typography variant="h4" sx={{textAlign: "center"}}>
                        สมัครสมาชิก
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                        <TextField name="name" label="ชื่อผู้ใช้" variant="outlined" onChange={(e) => handleChange(e)} fullWidth />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                        <TextField type="password" name="password" label="รหัสผ่าน" variant="outlined" onChange={(e) => handleChange(e)} fullWidth />
                    </Box>
                    <Button type="submit" variant="contained" sx={{my: 2}} fullWidth>
                        สมัครสมาชิก
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}
export default Register;
