import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const InputForm = () => {

    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState(0);

    useEffect(() =>{
        console.log(nama)
    },[nama])

    const PrintData = () =>{

        console.log(nama.length)

        if (nama.length == 0 && umur == 0)
        {
            alert("Harus mengisi nama dan umur")
        }
        else if(nama.length == 0) 
        {
            alert("Harus mengisi nama")
        }
        else if (umur == 0) 
        {
            alert("Harus mengisi umur")
        }
        else
        {
            alert("Nama : " + nama + "\nUmur : " + umur)
        }
    }

    const handleSetNama = (e) => {
        setNama(e.target.value)
    }

    const handleSetUmur = (e) => {
        if (e.target.value>100)
        {
            setUmur(100);
        }
        else 
        {
            setUmur(e.target.value);
        }
    }
    
    return (
        <div>
            <div>Nama : {nama}</div>
            <input onChange= {handleSetNama} />
            <div>Umur : {umur}</div>
            <input type= "number" onChange= {handleSetUmur} value={umur}/>

            <div>
                <button onClick={PrintData}>Print</button>
            </div>

        </div>
    )
}

export default InputForm;