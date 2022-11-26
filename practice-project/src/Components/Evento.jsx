function Evento() {
    function meuEvento() {
        console.log("FUI ATIVADO!!!")
    }
    
    return(
        <div>
            <p>
                Clique para disparar um evento
                <button onClick={meuEvento}>Ativar!</button>
            </p>
        </div>
    )
}

export default Evento