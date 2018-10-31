import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text,
	Dimensions,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

export default class Login extends Component {

	constructor() {
		super();
		this.state = {
			name: '',
			pass: ''
		};
	}

	validateEmail = (email) => {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){
        	return true;
		}else{
        	return false
		}
	};

    validatePassword = (password) => {
    	if (password.length < 6 || password === 'abcdef' || password === '123456' || password === 'password')
    		return true;
    	return false
	}


render() {
		return(
			<View style={style.container}>

				<View style={{marginBottom: 10}}>
					<Text style={{fontSize: 18}}>Username:</Text>
					<TextInput style={style.inputText}
						onChangeText={(text) => this.setState({name: text})}
						placeholder={'Email or Username'}
						value={this.state.name}/>
				</View>

				<View style={{marginBottom: 10}}>
					<Text style={{fontSize: 18}}>Password:</Text>
					<TextInput style={style.inputText}
						onChangeText={(text) => this.setState({pass: text})}
						placeholder={'Password'}
						value={this.state.pass}/>
				</View>

				<View style={style.btnView}>
					<TouchableHighlight onPress={()=> alert('1234')} underlayColor='transparent'>
						<Text style={{fontSize: 16, color: 'white'}}>SUBMIT</Text>
					</TouchableHighlight>
				</View>

			</View>
		);
	}

}

const style = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		margin: 20
	},
	inputText: {
		width: Dimensions.get('window').width - 40,
		height: 50,
		borderWidth: 1,
		padding: 3,
		borderRadius: 5
	},
	btnView: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		backgroundColor: 'grey',
		borderRadius: 5
	}

});