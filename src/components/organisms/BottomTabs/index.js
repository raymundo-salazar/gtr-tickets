import { AceTabBarNavigator } from "rn-slick-bottom-tabs";
import TabBarIcon from "@/atoms/TabBarIcon";
import navInfo from "navigation";

import Layout from "@/screens/Layout";

const Tabs = AceTabBarNavigator();

export default () => {
  return (
    <>
      <Tabs.Navigator
        backBehavior="history"
        screenOptions={{
          animation: "slide_from_right",
        }}
        initialRouteName={navInfo.initialRouteName ?? navInfo.items[0].name}
        tabBarOptions={
          navInfo.tabBarOptions ?? {
            labelStyle: { fontSize: 12, marginTop: 5, fontWeight: "bold" },
            activeTintColor: "#7A28CB",
            inactiveTintColor: "#9e9e9e",
            activeBackgroundColor: "#e5cfff",
          }
        }
      >
        {navInfo.items &&
          navInfo.items.map(({ name, Component, icon, options }, ind) => (
            <Tabs.Screen
              key={ind}
              name={name}
              options={{
                tabBarIcon: ({ focused, color }) => (
                  <TabBarIcon
                    focused={focused}
                    tintColor={color}
                    name={icon.name ? icon.name : icon}
                    {...icon}
                  />
                ),
                ...options,
              }}
            >
              {() => (
                <Layout>
                  <Component />
                </Layout>
              )}
            </Tabs.Screen>
          ))}
      </Tabs.Navigator>
    </>
  );
};
