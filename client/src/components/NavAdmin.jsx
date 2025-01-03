import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {Avatar, Menu, MenuItem, Tooltip} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";

function NavAdmin() {
    const [anchorElAdmin, setAnchorElAdmin] = useState(null);

    const settings = ["Profile", "Dashboard", "Setting", "Logout"];
    const handleOpenAdminMenu = (e) => {
        setAnchorElAdmin(e.currentTarget);
    };
    const handleCloseAdminMenu = () => {
        setAnchorElAdmin(null);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                    <Typography variant="h6" sx={{display: "flex", alignItems: "center"}}>
                        <DeviceHubIcon sx={{mr: 1}} />
                        My App
                    </Typography>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenAdminMenu} sx={{p: 0}}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElAdmin}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElAdmin)}
                            onClose={handleCloseAdminMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseAdminMenu}>
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
export default NavAdmin;
