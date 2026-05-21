import {View, Text, Image, StyleSheet} from 'react-native'

// importa as cores
import { COLORS } from '@/constants/colors'
export default function Header(){
    return(
        // container principal do cabeçalho
        <View style={styles.container}>
            {/** Logo da aplicação */}
            <Image
            // Imagem via link
            source={require('../../assets/images/nome imagem.jpg')}
            // estilo da imagem
            style = {styles.logo}

            />
            {/** Título principal*/}
            <Text style={ styles.title}>
                Título do APP
            </Text>
            {/** Subtitulo */}
            <Text style={styles.subtitle}>
                Aqui é um subtitulo do app
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        // centraliza os itens horizontalmente
        alignItems: 'center',

        // espaço abaixo do cabeçalho
        marginBottom: 30
    },
    // estilo da logo
    logo:{
        width: 90,
        height: 90,
        marginBottom: 10
    },
    title: {
        fontSize: 16,
        color: COLORS.dark
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.gray
    }

})