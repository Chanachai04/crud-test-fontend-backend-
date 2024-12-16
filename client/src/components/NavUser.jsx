import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import {Link} from "react-router-dom";
import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";
import {useState} from "react";

function NavUser() {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const settings = ["Profile", "Setting", "Logout"];
    const handleOpenUserMenu = (e) => {
        setAnchorElUser(e.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Box sx={{display: "flex", alignItems: "center"}}>
                        <DeviceHubIcon />
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
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography sx={{textAlign: "center"}}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default NavUser;
