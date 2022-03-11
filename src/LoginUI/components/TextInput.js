import {
  Text,
  View,
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class TextInput extends Component {
  state = {
    secureTextEntry: this.props.secureTextEntry,
  };

  render() {
    const {title, password, errorMsg, touched} = this.props;
    const {secureTextEntry} = this.state;

    const isShowError = !!errorMsg && touched;
    return (
      <View style={styles.wrapperTextInput}>
        <View>
          <RNTextInput
            {...this.props}
            style={[
              styles.textInputContainer,
              isShowError && styles.errorBackground,
            ]}
            secureTextEntry={secureTextEntry}
          />
          <Text style={styles.textInputTitle}>{title}</Text>
          {password && (
            <TouchableOpacity
              onPress={() =>
                this.setState({secureTextEntry: !this.state.secureTextEntry})
              }>
              <EntypoIcon
                name="eye"
                color="#bbb"
                size={20}
                style={styles.rightIcon}
              />
            </TouchableOpacity>
          )}
        </View>
        {isShowError && <Text style={styles.errorText}>* {errorMsg}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperTextInput: {
    marginBottom: 10,
  },
  textInputContainer: {
    backgroundColor: '#F3F0EE',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  textInputTitle: {
    color: '#bbb',
    position: 'absolute',
    top: 5,
    left: 20,
  },
  rightIcon: {
    position: 'absolute',
    bottom: 15,
    right: 20,
  },
  errorBackground: {backgroundColor: '#f9c8c8'},
  errorText: {color: 'red', marginTop: 5},
});
