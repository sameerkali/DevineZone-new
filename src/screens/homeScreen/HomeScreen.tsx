import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../stateManagemer/Store';
import {increment, decrement, getData} from './HomeSlice';
import {ICONS} from '../../resources';
const HomeScreen = ({navigation}: any) => {
  const count = useAppSelector(state => state.homeReducer.value);
  const data = useAppSelector(state => state.homeReducer.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData({id: count}));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: '10%',
        alignItems: 'center',
      }}>
      <Image
        resizeMode="cover"
        source={{uri: data?.images?.lg}}
        style={{
          height: '80%',
          width: '95%',
          alignSelf: 'center',
          borderColor: 'gray',
          shadowColor: 'gray',
          shadowOffset: {
            height: 10,
            width: 0.21,
          },
          shadowRadius: 8,
          shadowOpacity: 0.43,
          borderWidth: 1,
          borderRadius: 20,
          // top: -100,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Demo')}
        style={{
          width: '60%',
          padding: '10%',
          borderWidth: 1,
          margin: '10%',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderColor: 'gray',
          shadowColor: 'gray',
          shadowOffset: {
            height: 10,
            width: 0.21,
          },
          shadowRadius: 8,
          shadowOpacity: 0.43,
        }}>
        <Text>Next Screen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await dispatch(increment());
          dispatch(getData({id: count}));
        }}
        style={{
          width: '60%',
          padding: '10%',
          borderWidth: 1,
          margin: '10%',
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgray',
          borderColor: 'gray',
          shadowColor: 'gray',
          shadowOffset: {
            height: 10,
            width: 0.21,
          },
          shadowRadius: 8,
          shadowOpacity: 0.43,
        }}>
        <Text>Press</Text>
        {/* <Image source={ICONS.CHAT_ICON} /> */}
      </TouchableOpacity>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
