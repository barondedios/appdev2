import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>Just Red Text</Text>
            <Text style={styles.bigBlue}>Just bigBlue Color Text</Text>
            <Text style={[styles.red, styles.bigBlue]}>Red then bigBlue text color</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue then red colored text</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop:50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default LotsOfStyles;