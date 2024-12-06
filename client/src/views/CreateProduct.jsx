import {Box, TextField, Typography} from "@mui/material";
import Nav from "../components/Nav";
import {create} from "../functions/product";
import {useState} from "react";

function CreateProduct() {
    const [form, setForm] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        const formWithImageData = new FormData();
        for (const key in form) {
            formWithImageData.append(key, form[key]);
        }
        create(formWithImageData)
            .then((res) => loadData())
            .catch((err) => console.log(err));
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
        console.log(form);
    };

    return (
        <>
            <Nav />
            <Box component="form" onSubmit={handleSubmit} encType="multipart/form-data" sx={{width: "1200px", mx: "auto", mt: 5}}>
                <Typography variant="h4" sx={{mb: 3}}>
                    เพิ่มสินค้า
                </Typography>
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <TextField name="name" onChange={(e) => handleChange(e)} label="ชื่อสินค้า" variant="outlined" sx={{width: "48%"}} />
                    <TextField name="detail" onChange={(e) => handleChange(e)} label="รายละเอียดสินค้า" variant="outlined" sx={{width: "48%"}} />
                </Box>
            </Box>
        </>
    );
}
export default CreateProduct;
