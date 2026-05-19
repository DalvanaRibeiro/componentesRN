// Importa o text
import {Text} from 'react-native'
// construíndo o componente 
export default function Saudacao(
    // Props recebidas pelo componente
    props:{
        nome: string
    }
){
    return(
        // Exibe um texto na tela
        <Text>
            {/** Mostra uma mensagem utilizando as pros */}
            Olá, {props.nome}
        </Text>

    )
}