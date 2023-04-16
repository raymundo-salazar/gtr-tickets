import { Ionicons, AntDesign } from "@expo/vector-icons";

const TabBarIcon = ({ name, size, tintColor, iconSet = "Ionicons" }) => {
  const IconSet = (props) => {
    switch (iconSet) {
      case "Ionicons":
        return <Ionicons {...props} />;
      case "AntDesign":
        return <AntDesign {...props} />;
    }
  };

  return <IconSet name={name} size={size ? size : 24} color={tintColor} />;
};

export default TabBarIcon;
