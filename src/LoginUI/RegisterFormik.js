import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {Component} from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import TextInput from './components/TextInput';
import {Formik} from 'formik';

export default class RegisterFormik extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AntIcon
          name="left"
          style={{paddingLeft: 20}}
          size={30}
          onPress={this.props.navigate}
        />
        <View style={styles.header}>
          <AntIcon style={styles.logo} name="lock" size={100} color="#6330C2" />
          <Text style={styles.headerText}>Register Formik</Text>
        </View>
        <Formik
          initialValues={{email: '', password: '', name: '', phone: ''}}
          onSubmit={this.handleSubmit}>
          {({values, handleChange, handleSubmit, touched, errors}) => {
            return (
              <View style={styles.loginForm}>
                <TextInput
                  title="Email"
                  placeholder="email@example.com"
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                <TextInput
                  title="Password"
                  placeholder="*******"
                  secureTextEntry
                  password
                  value={values.password}
                  onChangeText={handleChange('password')}
                />
                <TextInput
                  title="Name"
                  placeholder="Nguyen Van A"
                  value={values.name}
                  onChangeText={handleChange('name')}
                />
                <TextInput
                  title="Phone"
                  placeholder="091-xxx-xxx"
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    paddingTop: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
  },
  loginForm: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  button: {
    backgroundColor: '#6330C2',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
