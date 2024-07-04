import * as React from "react";
import { Text, StyleSheet, View, Pressable, Image } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const Frame = () => {
  const [loaded, error] = useFonts({
    'NanumMiNiSonGeurSsi': require('./assets/font/NanumMiNiSonGeurSsi.ttf'),
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
      <Text style={styles.text}>홈</Text>
      <Pressable style={[styles.child, styles.itemLayout]} onPress={() => {}} />
      <Pressable style={[styles.item, styles.itemLayout]} onPress={() => {}} />
      <Pressable style={[styles.wrapper, styles.itemLayout]} onPress={() => {}}>
        <Image style={styles.icon} resizeMode="cover" source={require('./assets/images/rectangle.png')} />
      </Pressable>
      <Image style={styles.HomeIcon} resizeMode="cover" source={require('./assets/images/home.png')} />
      <Pressable style={styles.container} onPress={() => {}}>
        <Image style={styles.icon} resizeMode="cover" source={require('./assets/images/rectangle.png')} />
      </Pressable>
      <Text style={styles.text1}>{`  질문 만들러 가기`}</Text>
      <Text style={[styles.text2, styles.textTypo]}>마이 페이지</Text>
      <Text style={[styles.text3, styles.textTypo]}>내 자서전 보기</Text>
      <Text style={[styles.text4, styles.textTypo]}>설명 다시보기</Text>
      <Image style={[styles.documentIcon, styles.iconLayout]} resizeMode="cover" source={require('./assets/images/document.png')} />
      <Image style={[styles.explainIcon, styles.iconLayout]} resizeMode="cover" source={require('./assets/images/explain.png')} />
      <Image style={styles.mypageIcon} resizeMode="cover" source={require('./assets/images/mypage.png')} />
      <Image style={styles.questionIcon} resizeMode="cover" source={require('./assets/images/question.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemLayout: {
    height: 80,
    width: 298,
    left: 55,
    position: "absolute"
  },
  textTypo: {
    fontSize: 50,
    fontFamily: "NanumMiNiSonGeurSsi",
    lineHeight: 50,
    textAlign: "center",
    color: "#000",
    letterSpacing: 0,
    position: "absolute"
  },
  iconLayout: {
    height: 37,
    width: 37,
    position: "absolute"
  },
  text: {
    top: 160,
    left: 40,
    fontSize: 40,
    lineHeight: 50,
    fontWeight: "700",
    fontFamily: "Inter-Bold",
    width: 250,
    height: 60,
    textAlign: "center",
    color: "#000",
    letterSpacing: 0,
    position: "absolute"

  },
  child: {
    top: 511,
    backgroundColor: "rgba(177, 211, 156, 0.5)",
    width: 298,
    borderRadius: 20,
    left: 55
  },
  item: {
    top: 720,
    backgroundColor: "rgba(177, 211, 156, 0.5)",
    width: 298,
    borderRadius: 20,
    left: 55
  },
  icon: {
    height: "100%",
    borderRadius: 20,
    width: "100%"
  },
  wrapper: {
    top: 615,
    width: 298,
    left: 55
  },
  HomeIcon: {
    top: 160,
    left: 74,
    width: 50,
    height: 50,
    position: "absolute"
  },
  container: {
    left: 52,
    top: 251,
    width: 301,
    height: 233,
    position: "absolute"
  },
  text1: {
    top: 303,
    left: 85,
    fontSize: 65,
    color: "#424242",
    width: 250,
    height: 500,
    fontFamily: "NanumMiNiSonGeurSsi",
    lineHeight: 65,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute"
  },
  text2: {
    top: 525,
    left: 103,
    width: 245,
    height: 70
  },
  text3: {
    top: 628,
    left: 97,
    width: 253,
    height: 79
  },
  text4: {
    top: 731,
    left: 103,
    width: 250,
    height: 68
  },
  documentIcon: {
    top: 638,
    left: 72
  },
  explainIcon: {
    top: 741,
    left: 70
  },
  mypageIcon: {
    top: 532,
    left: 68,
    width: 38,
    height: 38,
    position: "absolute"
  },
  questionIcon: {
    top: 296,
    left: 113,
    width: 73,
    height: 73,
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
    height: 844,
    overflow: "hidden",
    width: "100%"
  }
});

export default Frame;
