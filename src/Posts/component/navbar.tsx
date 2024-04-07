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
        backgroundColor: 'transparent',
        height: 40,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#1877F2',
    },
    title: {
        color: "#1877F2",
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: "center",
        display: "flex"
    },
});

export default Navbar;
