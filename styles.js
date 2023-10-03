import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: 'lightblue',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    foto: {
        width: '200px',
        height: '200px',
        marginBottom: '20px'
    },
    titulo: {
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    description: {
        fontSize: '12px',
        textAlign: 'center'

    },
    btn: {
        backgroundColor: 'gold',
        height: '40px',
        width: '100 %',
        borderRadius: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    },
});
export default styles;