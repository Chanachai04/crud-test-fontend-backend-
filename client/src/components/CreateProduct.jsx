import {Box, TextField, Typography} from "@mui/material";
import {create, list} from "../functions/product";
import {useState} from "react";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {Link, useNavigate} from "react-router-dom";
import NavAdmin from "./NavAdmin";
function CreateProduct() {
    const [form, setForm] = useState({});
    const navigate = useNavigate();
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
    const loadData = async () => {
        await axios;
        list()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    };
    const handleSubmit = async (e) => {
        const formWithImageData = new FormData();
        for (const key in form) {
            formWithImageData.append(key, form[key]);
        }
        create(formWithImageData)
            .then((res) => {
                loadData();
                console.log(res.data);
            })
            .catch((err) => console.log(err));
        navigate("/admin/manage");
    };
    const handleChange = (e) => {
        if (e.target.name === "file") {
            setForm({
                ...form,
                [e.target.name]: e.target.files[0],
            });
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <>
            <NavAdmin />
            <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data" sx={{width: "1200px", mx: "auto", mt: 5}}>
                <Typography variant="h4" sx={{mb: 3}}>
                    เพิ่มสินค้า
                </Typography>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
                    <TextField name="name" onChange={(e) => handleChange(e)} label="ชื่อสินค้า" variant="outlined" sx={{width: "48%"}} />
                    <TextField name="detail" onChange={(e) => handleChange(e)} label="รายละเอียดสินค้า" variant="outlined" sx={{width: "48%"}} />
                </Box>
                <Box sx={{mb: 3}}>
                    <TextField name="price" onChange={(e) => handleChange(e)} label="ราคา" variant="outlined" sx={{width: "48%"}} />
                </Box>
                <Box sx={{display: "flex", alignItems: "center", mb: 2}}>{form.file && <img src={URL.createObjectURL(form.file)} width="15%" alt="preview" />}</Box>
                <Box sx={{mb: 2}}>
                    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>
                        {form.file ? "เพิ่มรูปแล้ว" : "เพิ่มรูป"}
                        <VisuallyHiddenInput type="file" name="file" onChange={(e) => handleChange(e)} multiple />
                    </Button>
                </Box>
                <Box sx={{display: "flex"}}>
                    <Button component={Link} to="/admin/manage" variant="contained" sx={{mr: 2}} color="error">
                        ยกเลิก
                    </Button>
                    <Button type="submit" variant="contained" color="success">
                        บันทึก
                    </Button>
                </Box>
            </Box>
        </>
    );
}
export default CreateProduct;
