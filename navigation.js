import DetailsScreen from "./src/screens/DetailsScreen";
import ResumeScreen from "./src/screens/ResumeScreen";

const navigation = {
  initialRouteName: "resume",
  tabBarOptions: {
    labelStyle: { fontSize: 12, marginTop: 5, fontWeight: "bold" },
    activeTintColor: "#7b38CB",
    inactiveTintColor: "#9e9e9e",
    activeBackgroundColor: "#e5cfff",
  },
  items: [
    {
      name: "resume",
      Component: ResumeScreen,
      icon: "stats-chart",
      options: {
        title: "Resumen",
      },
    },
    {
      name: "Acreditar",
      Component: DetailsScreen,
      icon: { name: "scan1", iconSet: "AntDesign" },
    },
  ],
};
export default navigation;
