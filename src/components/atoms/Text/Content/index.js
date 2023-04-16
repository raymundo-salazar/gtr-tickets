import { Text } from "react-native";
import styles from "./styles";

const Content = ({ children, style }) => {
  return <Text style={[styles, style]}>{children}</Text>;
};
export default Content;
