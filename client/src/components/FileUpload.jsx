import axios from 'axios';
import {useState} from 'react'
import Papa from 'papaparse';

export const FileUpload = () => {
    const [data, setData] = useState([]);
    const [column, setColumn] = useState([]);
    const [values, setValues] = useState([]);

    const handleChange = (e) => {
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function(result) {
                const columnArray = [];
                const valuesArray = [];

                result.data.map(d => {
                    columnArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                setData(result.data);
                setColumn(columnArray[0]);
                setValues(valuesArray);
            }
        })

        // try {
        //     const result = await axios.post('//localhost:5001/post-data', values);
        //     console.log("Result----", values);
        // } catch (err) {
        //     console.log(err);
        // }
    }

    // console.log("DATA", data);
    // console.log('Column', column);
    // console.log('Values', values);

    const handleSubmit = async() => {
        try {
            const result = await axios.post('//localhost:5001/post-data', data);
            console.log("RESULT", result);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <h1>CSV File Upload</h1>
            <form>
                <input type="file" name='file' accept='.csv' onChange={handleChange}/>
                <input type='submit' onClick={handleSubmit}/>
            </form>
        </div>
      )
}

