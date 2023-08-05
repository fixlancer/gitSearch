import {
    View,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import MyText from '../../components/DefaultTextComponent/MyText';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import {moderateScale } from 'react-native-size-matters';

interface Props {
    setRetry: any;
}

const FetchError: React.FC<Props> = props => {

    const { setRetry } = props;


    return (

        <>
            <View style={[styles.alignCenter, { flex: 1, }]}>

                <TouchableOpacity
                    onPress={() => setRetry(true)}>
                    <IconM
                        name={'refresh'}
                        size={moderateScale(35)}
                        color={'#808080'}
                        style={{ alignSelf: 'center' }}

                    />
                    <MyText style={[styles.tinyLabel, styles.pt20, styles.textCenter]}>Could not complete your request</MyText>
                </TouchableOpacity>

            </View>


        </>

    )
}


export default FetchError;