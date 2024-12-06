import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {read, update} from "../functions/product";
import Nav from "../components/Nav";
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
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" onChange={(e) => handleChange(e)} name="name" value={data.name} placeholder="ชื่อ" />
                <br />
                <input type="text" onChange={(e) => handleChange(e)} name="detail" value={data.detail} placeholder="รายละเอียด" />
                <br />
                <input type="text" onChange={(e) => handleChange(e)} name="price" value={data.price} placeholder="ราคา" /> <br />
                <input type="file" onChange={(e) => handleChange(e)} name="file" /> <br />
                <button>บันทึก</button>
            </form>
        </>
    );
}
export default FormEditProduct;
