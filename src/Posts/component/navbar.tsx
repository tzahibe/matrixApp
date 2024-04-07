import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type NavbarProps = {
    title: string;
}

const Navbar = ({ title }: NavbarProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#1877F2",
        height: 60,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        color: "#ffff",
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
        display: "flex"
    },
});

export default Navbar;
