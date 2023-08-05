import {
    View,
    Text,
} from 'react-native';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { moderateScale } from 'react-native-size-matters';


const Empty = () => {

    return (

        <View style={{flex:1}}>
            <View style={[styles.alignCenter, styles.pt30, { height:'100%', width:'100%' }]}>

                       <View style={[styles.circleBg]}>
                        <IconM
                        name={'folder-open-outline'}
                        size={moderateScale(30)}
                        color={'#343434'}
                        style={{ alignSelf: 'center' }}
                    />
                    </View>
                    <Text style={[styles.largeLabel, styles.pt15, styles.textCenter]}>No data found</Text>
                

            </View>

        </View>

    )
}


export default Empty;