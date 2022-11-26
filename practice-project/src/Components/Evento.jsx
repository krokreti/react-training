import Button from "./evento/Button"

function Evento() {
    function meuEvento() {
        console.log("FUI ATIVADO!!!")
    }

    function segundoEvento() {
        console.log("Segundo evento ativado")
    }
    
    return(
        <div>
            <p>
                Clique para disparar um evento
                <Button event={meuEvento} text="Primeiro evento!"></Button>
                <Button event={segundoEvento} text="Segundo evento!"></Button>
            </p>
        </div>
    )
}

export default Evento