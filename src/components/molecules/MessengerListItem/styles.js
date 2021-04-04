import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontWeight: '800'
    },
    createdDate: {
        margin: 10
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    midContainer: {
        margin: 10,
        flexDirection: 'column',
    },
})

export default styles;