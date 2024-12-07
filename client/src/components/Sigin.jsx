import {Box, Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Signin() {
    return (
        <>
            <Card sx={{width: "700px", mx: "auto", mt: 15}}>
                <CardContent>
                    <Typography variant="h4" sx={{textAlign: "center"}}>
                        เข้าสู่ระบบ
                    </Typography>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                        <TextField name="name" label="ชื่อผู้ใช้" variant="outlined" fullWidth />
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center", mt: 3}}>
                        <TextField name="password" label="รหัสผ่าน" variant="outlined" fullWidth />
                    </Box>
                    <Button variant="contained" component={Link} to="/" sx={{my: 2}} fullWidth>
                        เข้าสู่ระบบ
                    </Button>
                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Typography component={Link} to="/">
                            ลืมรหัสผ่าน
                        </Typography>
                        <Typography component={Link} to="/">
                            สมัครสมาชิก
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
export default Signin;
