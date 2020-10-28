import React from 'react';

import Titulo from '../../components/Titulo';
import Corpo from '../../components/Corpo';
import Rodape from '../../components/Rodape';


class Questao{
    pergunta;
    resposta;
}

let questoes = new Questao;
/*
questoes[0].pergunta = "Quem é considerada a primeira pessoa a ser um programador(a)?";
questoes[0].resposta = "Ada Lovelace";

questoes[1].pergunta = "Quem é o autor da frase: talk is cheap, show me the code?";
questoes[1].resposta = "Linus Torvalds";

questoes[2].pergunta = "Qual empresa foi responsável pela invenção do mouse?";
questoes[2].resposta = "Xerox Park";

questoes[3].pergunta = "Qual foi a primeira linguagem de alto nível?";
questoes[3].resposta = "FORTRAN"

questoes[4].pergunta = "Quando é o dia do programador?";
questoes[4].resposta = "No Duogésimo Quinquagésimo sexto dia do ano";
*/

function Home(){
    return(
        <div>
        <Titulo 
        texto="Hacktober Quiz"
        />

        <Corpo 
        texto="Será que você consegue acertar todas essas perguntas sobre a história da programação?"
        url="/quiz/programacao"
        textoBotao="Iniciar"
        />

        <Rodape />
        </div>
    );
}

export default Home;