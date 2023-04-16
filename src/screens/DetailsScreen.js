import { Text, ScrollView } from "react-native";

const DetailsScreen = () => {
  return (
    <ScrollView>
      {[...new Array(100)].map((e, ind) => (
        <Text key={ind}>Devices {ind}</Text>
      ))}
    </ScrollView>
  );
};
export default DetailsScreen;
