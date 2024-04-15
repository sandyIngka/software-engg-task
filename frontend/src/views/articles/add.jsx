import React from 'react'
import { postImportArticle } from '../../services/articleEndPoints'
import { useNavigate } from "react-router-dom";
const Add = () => {
    const [jsonContent, setJsonContent] = React.useState("");
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        const fileReader = new FileReader();
        const fileType = e.target.files[0].type
        let mime = fileType.split('/');
        if (mime[1] === 'json') {
            fileReader.readAsText(e.target.files[0], "UTF-8");
            fileReader.onload = (e) => {
                const content = e.target.result;
                let articles = JSON.parse(content).articles;
                setJsonContent(articles);
            };
        } else {
            alert('Please select jSON file');
        }

    };
    const addArticles = () => {
        if (jsonContent.length > 0) {
            postImportArticle(jsonContent).then((res) => {
                if (res.status === 200) {
                    alert(res.data.message)
                    navigate('/')
                }
            })
        } else {
            alert('Please select the file')
            return
        }
    }
    return (
        <div className="container" style={{ paddingTop: 40 + "px" }}>
            <h3 >Import Articles</h3>
            <div>
                <input type="file" onChange={handleFileChange} />
                <button className='' onClick={addArticles}> Add Article</button>
                <br />&nbsp;
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