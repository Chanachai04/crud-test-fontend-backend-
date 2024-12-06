import {useEffect, useState} from "react";
import {list, remove} from "../functions/product";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Link} from "react-router-dom";
import Nav from "../components/Nav";
import {Box, Button, Typography} from "@mui/material";
export default function FormProduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        list()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };

    const handleRemove = async (id) => {
        remove(id)
            .then((res) => loadData())
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Nav />
            <Box sx={{width: "1200px", mx: "auto", mt: 5}}>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
                    <Typography variant="h5">สินค้า</Typography>
                    <Button component={Link} to="/create-product" variant="contained" color="success">
                        เพิ่มสินค้า
                    </Button>
                </Box>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">ลำดับที่</TableCell>
                                <TableCell align="center">รูปสินค้า</TableCell>
                                <TableCell align="center">ชื่อสินค้า</TableCell>
                                <TableCell align="center">รายละเอียดสินค้า</TableCell>
                                <TableCell align="center">ราคา</TableCell>
                                <TableCell align="center">แก้ไข</TableCell>
                                <TableCell align="center">ลบ</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index) => (
                                <TableRow key={item._id} sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                                    <TableCell align="center" component="th" scope="row">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell align="center">
                                        <img src={item.file} alt={item.name || "No Image"} />
                                    </TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.detail}</TableCell>
                                    <TableCell align="center">{item.price}</TableCell>
                                    <TableCell align="center">
                                        <Button component={Link} to={`/edit/${item._id}`} variant="contained" color="warning">
                                            Edit
                                        </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => handleRemove(item._id)} variant="contained" color="error">
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
}
