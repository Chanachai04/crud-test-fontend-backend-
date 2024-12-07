import {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {read, update} from "../functions/product";
import {Box, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";

import Nav from "./Nav";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
function FormEditProduct() {
    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        detail: "",
        price: "",
    });
    const [fileOld, setFileOld] = useState();

    useEffect(() => {
        loadData(params.id);
    }, []);
    const VisuallyHiddenInput = styled("input")({
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: 1,
        overflow: "hidden",
        position: "absolute",
        bottom: 0,
        left: 0,
        whiteSpace: "nowrap",
        width: 1,
    });
    const loadData = async (id) => {
        read(id)
            .then((res) => {
                setData(res.data);
                setFileOld(res.data.file);
            })
            .catch((err) => console.log(err));
    };
    const handleChange = (e) => {
        if (e.target.name === "file") {
            setData({
                ...data,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value,
            });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        const formWithImageData = new FormData();
        for (const key in data) {
            formWithImageData.append(key, data[key]);
        }
        formWithImageData.append("fileOld", fileOld);
        update(params.id, formWithImageData)
            .then((res) => navigate("/"))
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Nav />
            <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data" sx={{width: "1200px", mx: "auto", mt: 5}}>
                <Typography variant="h4" sx={{mb: 3}}>
                    เพิ่มสินค้า
                </Typography>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
                    <TextField name="name" onChange={(e) => handleChange(e)} value={data.name} label="ชื่อสินค้า" variant="outlined" sx={{width: "48%"}} />
                    <TextField name="detail" onChange={(e) => handleChange(e)} value={data.detail} label="รายละเอียดสินค้า" variant="outlined" sx={{width: "48%"}} />
                </Box>
                <Box sx={{mb: 3}}>
                    <TextField name="price" onChange={(e) => handleChange(e)} value={data.price} label="ราคา" variant="outlined" sx={{width: "48%"}} />
                </Box>

                <Box sx={{mb: 2}}>
                    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                        เปลี่ยนรูป
                        <VisuallyHiddenInput type="file" name="file" onChange={(e) => handleChange(e)} multiple />
                    </Button>
                </Box>
                <Box sx={{display: "flex"}}>
                    <Button component={Link} to="/" variant="contained" sx={{mr: 2}} color="error">
                        ยกเลิก
                    </Button>
                    <Button type="submit" onClick={handleSubmit} variant="contained" color="success">
                        บันทึก
                    </Button>
                </Box>
            </Box>
        </>
    );
}
export default FormEditProduct;
