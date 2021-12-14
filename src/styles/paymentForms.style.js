import { StyleSheet } from 'react-native';

export const paymentFormsStyles = StyleSheet.create({
  hide: {
    display: 'none'
  },
  form: {
    marginTop: 10,
    alignItems: 'center'
  },
  textInput: {
    width: '95%'
  },
  inputTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    padding: 0,
    paddingLeft: 5,
    height: 35,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
  },
  errorText: {
    color: 'red'
  },
  payButton: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 25,
    marginBottom: 10,
    maxWidth: 400
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  payGoBackButton: {
    width: '65%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: '#5d78ff',
    marginTop: 25,
    marginBottom: 10,
    maxWidth: 400
  },
  payGoBackButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
