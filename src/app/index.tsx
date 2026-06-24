import { Text, View, Animated, Easing } from "react-native";
import { Image } from "expo-image";
import { useEffect, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {

  const translateYAnim = useRef(new Animated.Value(100)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  }, [translateYAnim, opacityAnim]);

  return (
    <LinearGradient colors={["#032368", "#0642C4"]} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={{ flex: 1 }}>
      <View className="flex-1 items-center justify-center">
        <Animated.View style={{opacity: opacityAnim, transform: [{ translateY: translateYAnim }],}}>
          <Image
            //logo 
            source={require("../../assets/zapzone-assests/zapzone.png")}
            style={{width: 64, height: 64,}}contentFit="contain"/>
        </Animated.View>

        <Animated.View style={{opacity: opacityAnim,transform: [{ translateY: translateYAnim }],marginTop: 40,}}></Animated.View>
          
      </View>
    </LinearGradient>
  );
}
