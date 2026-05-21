import {View, ActivityIndicator, StyleSheet} from 'react-native'

// importa as cores
import { COLORS } from '@/constants/colors'

export default function Loading(){
    return(
        <View style={styles.container}>
            {/* Indicador de carregamento*/}
            <ActivityIndicator
            // Tamanhp do spinner
            size='large'
            // cor do spinner
            color = {COLORS.primaty}
            />

            </View>
    )
}
const styles = StyleSheet.create({
    container: { 
        marginTop: 20
    }
})