import {SectionList, StyleSheet, Text, View} from 'react-native'

// componente 
export default function ListaSecoes(){
    // Array contendo todas as seções da lista
    // Cada objeto representa uma categoria
    const dados =[
        {
            // título da seção
            title: 'Front-end',
            // itens da seção
            data:[
                'HTML',
                'CSS',
                'Javascript',
                'React'
            ]

        },
        {
            title: 'Back-end',
            data: [
                'Node.js',
                'Express',
                'Typescript',
                'MySQL'
            ]
        },
        {
            title: 'Ferramentas',
            data:[
                'Git',
                'GitHub',
                'Expo',
                'VS Code'
            ]
        }
    ]
    return(
        // Lista dividida em seções
        <SectionList
        // dados que serão exibidos
        sections={dados}
        // cria uma chave única para cada item
        keyExtractor={(item, index)=> item + index}

        // Renderiza o cabeçalho de cada seção
        renderSectionHeader = {({ section}) => (
            <Text style={styles.header}>
                {/** Exibe o título da seção */}
                {section.title}
            </Text>
        )}
        // Renderiza cada item da lista 
        renderItem={({ item}) => (
            // Card individual de cada tecnologia
            <View style={styles.card}>
                <Text style={styles.item}>

                    {/** Exibe o nome do item */}
                    {item}
                </Text>
            </View>
        )}

        />
    )
}
// estilização
const styles = StyleSheet.create({
    header : {
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#D1FAE5',
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
        color: '#065F46',
     },
     card: { 
        backgroundColor: '#FFFFFF',
        padding: 15,
        marginVertical: 6,
        borderRadius: 10
     },
     item: {
        fontSize: 18,
        color: '#111827'
     }
})