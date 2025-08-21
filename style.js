import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    smallIcon: {
        marginRight: 10,
        fontSize: 24,
    },
    logoContainer: {
        marginTop: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 320,
        height: 160,
        resizeMode: "contain",
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        paddingTop: 14,
        paddingBottom: 3,
        marginTop: 15,

        paddingHorizontal: 15,

        borderWidth: 1,
        borderColor: '#420475',
        borderRadius: 50,
    },
    textInput: {
        flex: 1,
        marginTop: -12,
        color: '#05375a',
    },
    loginContainer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    text_header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    button: {
        width: "100%",
        alignItems: "center",
        marginTop: 20,
    },
    inBut: {
        width: '100%',
        backgroundColor: '#35345aff',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 50,
    },
    inBut2: {
        backgroundColor: '#35345aff',
        height: 65,
        width: 65,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    smallIcon2: {
        fontSize: 40,
        color: '#fff'
    },
    bottomText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 5,
    },
    radioButton_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    radioButton_inner_div: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButton_title: {
        fontSize: 20,
        color: '#35345aff',
    },
    radioButton_text: {
        fontSize: 16,
        color: 'black',
    },
    forgotPassword: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 8,
        marginRight: 10,
    },
    fontWeight: {
        fontWeight: '700'
    },
    grayText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#35345aff',
    },
    errorText: {
        marginLeft: 20,
        color: "red"
    },
    padding: {
        padding: 15
    },
    socialSection: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
    },
    dividerText: {
        fontSize: 14,
        fontWeight: "600",
        color: "#666",
        marginVertical: 10,
    },
    socialRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: 10,
    },
    socialButtonWrapper: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
});
export default styles;