import { View } from "react-native";
import styles from "./styles";

const Divider = ({ style, color = "gray" }) => {
  return <View style={[styles, style, { backgroundColor: color }]}></View>;
};
export default Divider;
