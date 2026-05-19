import {ScrollView, StyleSheet, View, Text} from 'react-native'

// Importa componentes personalizados do projeto
import Saudacao from '@/components/ui/Saudacao'
// Importa as cores padronizadas do projeto
import { COLORS } from '@/constants/colors'
// Componente principal da tela
export default function Index(){
  return(
    // Scroll principal da tela
    <ScrollView
    // estilo aplicado ao conteúdo interno
    contentContainerStyle={styles.container}
    >
      {/* Componente de saudação */}
      <Saudacao nome='Homi Ney' />
      <Saudacao nome='Weverton' />
      <Saudacao nome='Endrick' />

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: COLORS.secondary,
    // Faz o conteúdo crescer corretamente no ScrollView
    flexGrow: 1
  }
})
