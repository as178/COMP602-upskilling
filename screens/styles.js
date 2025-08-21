import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    header: {
        height: 180,
        justifyContent: "flex-end",
    },
    waveImage: {
        position: "absolute",
        width: "100%",
        height: 180,
    },
    menuButton: {
        position: "absolute",
        top: 40,
        left: 20,
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: 8,
        borderRadius: 25,
    },
    editButton: {
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: 8,
        borderRadius: 25,
    },
    profileSection: {
        alignItems: "center",
        marginTop: -70,
        marginBottom: 20,
    },
    avatar: {
        backgroundColor: "white",
    },
    nameText: {
        fontSize: 22,
        fontWeight: "600",
        marginTop: 12,
        color: "#333",
    },
    infoSection: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    infoRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    infoIcon: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    infoText: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 14,
        color: "#888",
    },
    infoValue: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
});

export default styles;