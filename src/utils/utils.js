import { Alert } from 'react-native';

export const getData = (setWorkers) => {
  const url = 'https://atomic-test-api.onrender.com/names';
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => setWorkers(res))
    .catch(() => Alert.alert('Algo salio mal, no se pudieron consultar los datos corrtamente.'));
};

export const sendData = (nombre, apellidos, navigation, number) => {
  const url = 'https://atomic-test-api.onrender.com/form';
  const body = {
    firstname: nombre,
    lastname: apellidos,
    phoneNumber: number,
  };
  //Promise
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*', // It can be used to overcome cors errors
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then(() => {
      navigation.navigate('SendData');
    })
    .catch(() => Alert.alert('Algo salio mal, intenta de nuevo'));
};
