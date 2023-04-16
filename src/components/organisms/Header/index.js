import { useRoute } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { Animated, SafeAreaView, View, Text } from "react-native";
import navigation from "navigation";
import styles from "./styles";
// import { useAnimatedStyle } from "react-native-reanimated";

const Header = ({ style, show, title = "", _scrollY }) => {
  const _height = [200, 90];
  const _fontSize = [25, 15];

  const route = useRoute();
  const [name, setName] = useState(title);
  const [height, setHeight] = useState(_height[0]);
  const [fontSize, setFontSize] = useState(1);

  useEffect(() => {
    if (title) setName(title);
    else {
      const screen = navigation.items.find((ele) => ele.name == route.name);
      if (screen) setName(screen.options?.title ?? screen.name);
      else setName(route.name);
    }
  }, [route, title]);

  useEffect(() => {
    setHeight(
      _scrollY.interpolate({
        inputRange: [0, _height[0] - _height[1]],
        outputRange: [_height[0], _height[1]],
        extrapolate: "clamp",
      })
    );

    setFontSize(
      _scrollY.interpolate({
        inputRange: [0, _height[0] - _height[1]],
        outputRange: [_fontSize[0], _fontSize[1]],
        extrapolate: "clamp",
      })
    );
  }, [_scrollY]);

  return (
    <Animated.View style={[styles.header, style, { height: height }]}>
      <SafeAreaView>
        <View
          style={{
            height: "100%",
            justifyContent: "center",
          }}
        >
          {show && (
            <Animated.Text style={[styles.title, { fontSize }]}>
              {name}
            </Animated.Text>
          )}
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Header;
