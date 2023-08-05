import { StyleSheet, Dimensions } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: height,
    flex: 1,
  },


  newModalHeader: {
    width: '100%', height: 'auto', paddingTop: 20, paddingBottom: 0, marginBottom: 10, paddingHorizontal: 15, backgroundColor: '#fff',
  },
  lineBottom: {
    borderBottomColor: '#ddd',
    marginBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  midBg: {
    paddngTop: 0,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },

  textDark: {
    color: '#343434',
  },

  /*PADDING  **/

  pt15: {
    paddingTop: 15,
  },

  /* END OF PADDING **/




  /*** TEXT LABEL */

  largeLabel: {
    fontSize: moderateScale(17),
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    marginBottom: 0,
    fontFamily: 'Nunito-SemiBold',
  },

  /** END OF TEXT LABEL */



  emptyCont: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 3,
    paddingHorizontal: 9,
    paddingVertical: 10,
    elevation: 0,
  },

});


export default styles;
