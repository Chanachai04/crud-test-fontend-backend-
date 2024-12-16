import {Box, Button, Container, Typography} from "@mui/material";
import {Link} from "react-router-dom";
const Notfound404 = ({text}) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Typography variant="h1">404</Typography>
            <Typography variant="h6" sx={{mb: 2}}>
                {text}
            </Typography>
            <Button variant="contained" component={Link} to="/login">
                Back Home
            </Button>
        </Box>
    );
};
export default Notfound404;
