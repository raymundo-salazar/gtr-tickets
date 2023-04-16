import { Text } from "react-native";
import styles from "./styles";
const sizes = ["lg", "md", "sm"];

const Subtitle = ({ children, size, style }) => {
  if (!sizes.includes(size)) size = "md";
  return <Text style={[styles.general, styles[size], style]}>{children}</Text>;
};
export default Subtitle;
