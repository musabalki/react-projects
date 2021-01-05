const Count=(props)=>{
    return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.count}</h2>
        <button style={{"margin":"2px","cursor":"pointer"}}  onClick={props.increment} >Arttır</button>
        <button style={{"margin":"2px","cursor":"pointer"}} onClick={props.decrement}>Azalt</button>
    </div>
    )
}

export default Count;