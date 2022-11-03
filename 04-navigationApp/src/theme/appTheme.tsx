import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    margin: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  btnBig: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btnBigText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    borderRadius: 50,
    height: 150,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  menuContainer: {
    flex: 1,
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuText: {
    fontSize: 20,
  },
  menubtn: {
    marginVertical: 20,
  },
});
