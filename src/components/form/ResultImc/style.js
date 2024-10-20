import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    resultImc: {
        flex: 1,
        marginTop: 15,
        paddingTop: 10,
        borderRadius: 50,
        alignItems: 'center',
    },
    numberImc: {
        fontSize: 48,
        color: '#FF0043',
        fontWeight: 'bold',
        height:60,
    },
    information: {
        fontSize: 15,
        color: '#FF0043',
        fontWeight: 'bold',
        height:20,
    },
    boxShareButton:{
        width:'100%',
        alignItems:'center',      
    },
    shared:{
        backgroundColor:'#1877f2',
        borderRadius:50,
        paddingVertical:5,
        height:30,
    },
    sharedText:{
        color:'#ffffff',
        fontWeight:'bold',
        paddingHorizontal:30,

    },
    imcText:{
        fontWeight:'bold',        
        padding:15,
        fontSize:24,
        height:60,
    }

})

export default styles;