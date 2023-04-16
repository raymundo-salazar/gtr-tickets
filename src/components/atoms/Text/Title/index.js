import { Text } from "react-native";
import styles from "./styles";
const sizes = ["lg", "md", "sm"];

const Title = ({ children, size, style }) => {
  if (!sizes.includes(size)) size = "md";
  return <Text style={[styles[size], style]}>{children}</Text>;
};
export default Title;
