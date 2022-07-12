import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:150 // TODO: fix
    },
    title: {
        alignSelf: "center",
        fontSize: 48,
        color: '#575FCC',
        fontWeight: '500'
    },
    input: {
        height: 48,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#2A3242',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 140,
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center'
    },
    visitorButton: {
        borderColor: '#8FD8B5',
        borderWidth: 2,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 140,
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center'
    },
    vendorButton: {
        backgroundColor: '#FABF48',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        width: 140,
        borderRadius: 20,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    altButtonTitle: {
        color: 'white',
        fontSize: 16,
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#C4C4C4'
    },
    footerLink: {
        color: "#2A3242",
        fontWeight: "bold",
        fontSize: 16,
    }
})