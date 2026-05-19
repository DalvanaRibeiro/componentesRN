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
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png'
            }}
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