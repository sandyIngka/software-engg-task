import React from 'react'
import {postCreateProduct} from '../../services/productEndpoints'
import { useNavigate } from "react-router-dom";
const Add = () => {
    const [jsonContent, setJsonContent] = React.useState("");
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
            const content = e.target.result;
            let products = JSON.parse(content).products;
            setJsonContent(products);
        };
    };
    const addProducts = () => {
        if (jsonContent.length > 0) {
            postCreateProduct(jsonContent).then((res)=>{
                if(res.status===200){
                    alert(res.data.message)
                    navigate('/')
                }
            })
        } else {
            console.log('Please upload the file')
        }
    }
    return (
        <div className="container" style={{ paddingTop: 40 + "px" }}>
            <h3 >Import Products</h3>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button className='' onClick={addProducts}> Add Products</button>
                <br />
                {jsonContent.length > 0 ?
                    <div className="json-container">
                        {JSON.stringify(jsonContent, null, 2)}
                    </div>
                    : ''}

            </div>
        </div>
    )
}
export default Add;