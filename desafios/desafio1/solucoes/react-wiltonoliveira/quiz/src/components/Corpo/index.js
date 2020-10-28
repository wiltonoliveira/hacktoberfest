import React from 'react';
import { Link } from 'react-router-dom';
import { CorpoBase } from './style';
import Button from '../Button';

function Corpo({
    texto,
    textoBotao,
    pergunta,
    url
}){
    return(
        <CorpoBase>
            {texto}
            <br/>
            {pergunta}
        <Button as={Link} className="ButtonLink" to={url}>
            {textoBotao}
        </Button>
        </CorpoBase>
    )
}


export default Corpo;