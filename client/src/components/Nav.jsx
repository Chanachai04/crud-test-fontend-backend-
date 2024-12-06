import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{display: "flex"}}>
                        <Typography variant="h6">My App</Typography>
                    </Box>
                    <Box sx={{display: "flex"}}>
                        <Typography sx={{mr: 3, textDecoration: "none", color: "white"}} component={Link} to="/">
                            Home
                        </Typography>
                        <Typography sx={{mr: 3, textDecoration: "none", color: "white"}} component={Link} to="/">
                            About
                        </Typography>
                        <Typography sx={{mr: 3, textDecoration: "none", color: "white"}} component={Link} to="/">
                            Contact
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton size="large" color="inherit">
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default Nav;
