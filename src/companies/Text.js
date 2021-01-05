import { useState } from "react";

const Text=()=>{
    const [title,setTitle]=useState();
    const handleChange=(e)=>{
        setTitle(e.target.value);
    }
    return (
    <div>
        <h1>onChange Uygulaması</h1>
        Metin: <input type="text" onChange={handleChange} />
        <p>{title} </p>
    </div>
    )
}

export default Text;