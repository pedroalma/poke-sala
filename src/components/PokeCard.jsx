const PokeCard =({image,Nome,Tipo,Ataque,Poder})=>{
    return(
        <div className="card">
            <img src={image} alt={`Imagem de ${Nome}`} />
            <h2><strong>Nome: </strong>{Nome}</h2>
            <p><strong>Tipo: </strong>{Tipo}</p>
            <p><strong>Ataque: </strong>{Ataque}</p>
            <p><strong>Poder: </strong>{Poder}</p>
        </div>
    )
} 
export default PokeCard;