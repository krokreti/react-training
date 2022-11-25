import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return(
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

//é semelhante ao typescript, validaçao de tipos
//validacao a nivel de programaçao
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

//propriedades padrao
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Item