import {TextInput, StyleSheet } from 'react-native'
// importando as cores
import {COLORS} from '../../constants/colors'

// Define o tipo das propriedades do componente
type Props = {
    // texto exibido como dica dentro do input
    placeholder: string
    // valor digitado no campo
    value: string
    // função chamada ao digitar
    onChangeText: (text: string) => void
    
}
// componente de input personalizado
export default function InputCustom({
    // Desestruturação das props recebidas (uma forma mais limpa e organizada de acessar as props)
    placeholder, value,onChangeText
}: Props){
    return(
        // campo de texto
        <TextInput 
        // texto de dica 
        placeholder ={ placeholder}
        // valor atual do campo
        value ={value}
        // função chamada ao digitar
        onChangeText={onChangeText}
        // Estilo do input
        style={styles.input}
        />
    )
}
const styles = StyleSheet.create({
    // estilo do campo de texto
    input: {
        // faz o input ocupar toda a largura disponível
        width: '100%',
        // cor de fundo do camço
        backgroundColor: COLORS.white,
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
        borderColor: '#DDD'
    }
})