import React from 'react';
import { TitleBase } from './style';

function Titulo({
    texto
}){
    return(
        <TitleBase>
            {texto}
        </TitleBase>
        
    )
}

export default Titulo;