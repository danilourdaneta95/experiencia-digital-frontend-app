/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {Platform, StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useContext, useEffect, useRef} from 'react';
import ProfileContext from 'context/Profile/ProfileContext';

interface ProfileSelectProps {
  children?: React.ReactNode;
  showModalAndPicker?: boolean | ((value: any) => void);
  togglePerfilPicker?: any;
}

export default function ProfileSelect(props: ProfileSelectProps) {
  const {profiles, getProfiles, userProfile, getUserProfile, setUserProfile} = useContext(ProfileContext);

  // const [showModalAndPicker, setShowModalAndPicker] = useState(true);
  const showModalAndPicker = props.showModalAndPicker;
  const togglePerfilPicker = props.togglePerfilPicker;

  useEffect(() => {
    getProfiles();
    getUserProfile();
  }, []);

  const optionRef = useRef();

  const handleChange = itemValue => {
    isShowPicker();
    setUserProfile(itemValue);
    // console.log(itemValue);
  };

  const toggleSelect = togglePerfilPicker;
  const isShowPicker = () => {
    toggleSelect();
  };

  return (
    <>
      {showModalAndPicker && (
        <View style={styles.container}>
          <Picker
            style={styles.picker}
            mode="dialog"
            selectedValue={`${userProfile}`}
            onValueChange={handleChange}
            ref={optionRef}
          >
            {profiles.map(data => (
              <Picker.Item
                key={data.id}
                label={`${data.profile}`}
                value={`${data.id}`}
                color={Platform.OS === 'ios' ? 'white' : 'black'}
              />
            ))}
          </Picker>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerPicker: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    alignContent: 'center',
    backgroundColor: Platform.OS === 'ios' ? 'transparent' : 'white',
  },
});
