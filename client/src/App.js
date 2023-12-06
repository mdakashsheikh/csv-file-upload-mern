import './App.css';
import {useState} from 'react'
import Papa from 'papaparse';

function App() {

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
    }

    console.log("DATA--->", data);
    console.log('Column--->', column);
    console.log('Values', values);

    return (
        <div className="App">
            <h1>File Upload...</h1>
            <form>
                <input type="file" name='file' accept='.csv' onChange={handleChange}/>
                <input type='submit'/>
            </form>
        </div>
    );
}

export default App;

