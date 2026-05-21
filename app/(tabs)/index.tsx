import {ScrollView, StyleSheet, View, Text} from 'react-native'


// Importa as cores padronizadas do projeto
import { COLORS } from '@/constants/colors'
// Importa componentes personalizados do projeto
import Saudacao from '@/components/ui/Saudacao'
import Header from '@/components/ui/Header'
import InputCustom from '@/components/ui/InputCustom'
import ListaSecoes from '@/components/ui/ListaSecoes'
import Loading from '@/components/ui/Loading'

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
      {/** Cabeçalho da aplicação */}
      <Header />
      {/** Campo para texto personalizado */}
      <InputCustom
      // Texto exibido como dica
      placeholder='Digite seu nome Fahhh'

      // valor do input
      value=""
      // função executada ao digitar
      onChangeText={()=> {}}

      />

      <Text>
        Tecnologias
      </Text>
      {/* Lista organizada por seções  */}
      <ListaSecoes />
      {/** Componente de loading */}
      <Loading />

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
