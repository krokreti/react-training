import Item from "./Item"

function List() {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                {/* passando um numero deve ir entre as chaves */}
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1964}/>
                <Item marca="Renault" ano_lancamento={1999}/>
                <Item marca="Chevrolet" ano_lancamento={1989}/>
                <Item/>
            </ul>
        </>
    )
}

export default List