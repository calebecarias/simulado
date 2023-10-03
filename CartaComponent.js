import { Image,StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import styles from './styles';

export default function CartaComponent({}){
    return(
        <View style = {styles.container}>
            <Image source={require('/assets/adaptive-icon.png')} style = {styles.foto} />
            <Text style={styles.titulo}>Nome do card </Text>
            <Text style={styles.description}>Descrição</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar item</Text>
            </TouchableOpacity>
            <Image source={require('/assets/adaptive-icon.png')} style = {styles.foto} />
            <Text style={styles.titulo}>Nome do card </Text>
            <Text style={styles.description}>Descrição</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar item</Text>
            </TouchableOpacity>
            <Image source={require('/assets/adaptive-icon.png')} style = {styles.foto} />
            <Text style={styles.titulo}>Nome do card </Text>
            <Text style={styles.description}>Descrição</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Trocar item</Text>
            </TouchableOpacity>
            

        </View>
    )

}