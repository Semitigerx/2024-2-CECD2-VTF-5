import * as React from "react";
import {Text, StyleSheet, Image, View} from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Frame = () => {

	const [loaded, error] = useFonts({
		'NanumMiNiSonGeurSsi': require('../assets/font/NanumMiNiSonGeurSsi.ttf'),
	  });
	
	  useEffect(() => {
		if (loaded || error) {
		  SplashScreen.hideAsync();
		}
	  }, [loaded, error]);
	
	  if (!loaded && !error) {
		return null;
	  }
	
  	return (
    		<View style={styles.view}>
      			<Text style={styles.text}>{`내가 쓰는 자서전 메아리`}</Text>
      			<Image style={[styles.child, styles.childPosition]} resizeMode="cover" source={require('../assets/images/OpenEllipse.png')} />
      			<View style={[styles.view1, styles.childPosition]} />
      			<Image style={[styles.echoIcon, styles.childPosition]} resizeMode="cover" source={require('../assets/images/Echo.png')} />
      			<Image style={styles.half} resizeMode="cover" source={require('../assets/images/1half.png')} />
    		</View>);
};




const styles = StyleSheet.create({
  	childPosition: {
    		left: "50%",
    		top: "50%",
    		position: "absolute"
  	},
  	text: {
    		top: 205,
    		left: 55,
    		fontSize: 50,
    		letterSpacing: 0,
    		lineHeight: 50,
    		fontFamily: "NanumMiNiSonGeurSsi",
    		color: "#000",
    		textAlign: "left",
    		width: 259,
    		height: 150,
    		position: "absolute"
  	},
  	child: {
    		marginTop: -95,
    		marginLeft: -119,
    		width: 250,
    		height: 250
  	},
  	view1: {
    		marginTop: -65,
    		marginLeft: -88,
    		width: 187,
    		height: 190
  	},
  	echoIcon: {
			marginTop: -113,
			marginLeft: -110,
    		width: 233,
    		height: 272
  	},
  	half: {
			top: 852,
			left: 307,
    		width: 71,
    		height: 68,
    		position: "absolute"
  	},
  	view: {
    		shadowColor: "rgba(0, 0, 0, 0.25)",
    		shadowOffset: {
      			width: 0,
      			height: 4
    		},
    		shadowRadius: 4,
    		elevation: 4,
    		shadowOpacity: 1,
    		backgroundColor: "#fafafa",
    		flex: 1,
    		width: "100%",
    		height: 844,
    		overflow: "hidden"
  	}
});

export default Frame;
