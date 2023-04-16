import Header from "@/organisms/Header";
import { useEffect, useState } from "react";
import { ScrollView, Animated, Text } from "react-native";

const Layout = ({
  children,
  header = true,
  title = undefined,
  headerStyle = {},
  contentStyle = {},
}) => {
  const [_scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <>
      <Header
        show={header}
        title={title}
        style={[headerStyle]}
        _scrollY={_scrollY}
      />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(evt) =>
          setScrollY(new Animated.Value(evt.nativeEvent.contentOffset.y))
        }
        style={[{ padding: 10 }, contentStyle]}
      >
        {children}
      </ScrollView>
    </>
  );
};
export default Layout;
