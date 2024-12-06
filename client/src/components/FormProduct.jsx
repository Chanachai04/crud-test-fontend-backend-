import axios from "axios";
import {useEffect, useState} from "react";
import {create, list, remove} from "../functions/product";
import {Link} from "react-router-dom";
export default function FormProduct() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({});

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        await axios;
        list()
            .then((res) => setData(res.data))
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
    };
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
    const handleRemove = async (id) => {
        remove(id)
            .then((res) => loadData())
            .catch((err) => console.log(err));
    };
    return (
        <>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <input type="text" onChange={(e) => handleChange(e)} name="name" placeholder="ชื่อ" />
                <br />
                <input type="text" onChange={(e) => handleChange(e)} name="detail" placeholder="รายละเอียด" />
                <br />
                <input type="text" onChange={(e) => handleChange(e)} name="price" placeholder="ราคา" /> <br />
                <input type="file" onChange={(e) => handleChange(e)} name="file" /> <br />
                <button>บันทึก</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th style={{textAlign: "center"}}>ลำดับ</th>
                        <th style={{textAlign: "center"}}>ชื่อ</th>
                        <th style={{textAlign: "center"}}>รายละเอียด</th>
                        <th style={{textAlign: "center"}}>รูปภาพ</th>
                        <th style={{textAlign: "center"}}>ราคา</th>
                        <th style={{textAlign: "center"}}>ลบ</th>
                        <th style={{textAlign: "center"}}>แก้ไข</th>
                    </tr>
                </thead>
                <tbody>
                    {data
                        ? data.map((item, index) => (
                              <tr key={index}>
                                  <td style={{textAlign: "center"}}>{index + 1}</td>
                                  <td style={{textAlign: "center"}}>{item.name}</td>
                                  <td style={{textAlign: "center"}}>{item.detail}</td>
                                  <td style={{textAlign: "center"}}>{item.file}</td>
                                  <td style={{textAlign: "center"}}>{item.price}</td>
                                  <td style={{textAlign: "center"}} onClick={() => handleRemove(item._id)}>
                                      ลบ
                                  </td>
                                  <td style={{textAlign: "center"}}>
                                      <Link to={`/edit/${item._id}`}>แก้ไข</Link>
                                  </td>
                              </tr>
                          ))
                        : "No Data"}
                </tbody>
            </table>
        </>
    );
}
