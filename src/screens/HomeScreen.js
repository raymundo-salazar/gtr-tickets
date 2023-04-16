import Layout from "@/screens/Layout";
import Card from "@/molecules/Card";
import { Text, View } from "react-native";
import moment from "moment";
import events from "assets/content/events.json";
import Strong from "@/atoms/Text/Strong";

const HomeScreen = () => {
  const types = {
    place: "Lugar",
    online: "En línea",
    pending: "Por anunciar",
  };

  const locationType = ({ type, address }) => {
    if (type == "place") {
      const { name, address_1, address_2, city, state, country } = address;
      return (
        <View style={{ flexDirection: "row" }}>
          <Text>
            {name && (
              <>
                <Strong>{name}</Strong>,{" "}
              </>
            )}
            {address_1} {address_2}, {city}, {state}, {country}
          </Text>
        </View>
      );
    }
    return <Text>{types[type]}</Text>;
  };

  const date = (current) => {
    current = moment(current).format("DD MMM, YYYY|hh:mm A").toString();
    const [date, hour] = current.split("|");
    return (
      <View style={{ alignItems: "flex-end" }}>
        <Strong>{date}</Strong>
        <Text>{hour}</Text>
      </View>
    );
  };

  return (
    <Layout header={true} title="Proximos eventos">
      {events.length > 0 &&
        events.map((evt, ind) => (
          <Card
            key={ind}
            title={evt.title}
            subtitle={evt.organizer}
            footer={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  {locationType(evt.location)}
                </View>
                <View style={{ width: "40%", alignItems: "flex-end" }}>
                  <Text>{date(evt.date.start)}</Text>
                </View>
              </View>
            }
            cardStyle={{ marginBottom: 10 }}
          />
        ))}
      {events.length > 0 &&
        events.map((evt, ind) => (
          <Card
            key={ind}
            title={evt.title}
            subtitle={evt.organizer}
            footer={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  {locationType(evt.location)}
                </View>
                <View style={{ width: "40%", alignItems: "flex-end" }}>
                  <Text>{date(evt.date.start)}</Text>
                </View>
              </View>
            }
            cardStyle={{ marginBottom: 10 }}
          />
        ))}
      {events.length > 0 &&
        events.map((evt, ind) => (
          <Card
            key={ind}
            title={evt.title}
            subtitle={evt.organizer}
            footer={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ width: "60%" }}>
                  {locationType(evt.location)}
                </View>
                <View style={{ width: "40%", alignItems: "flex-end" }}>
                  <Text>{date(evt.date.start)}</Text>
                </View>
              </View>
            }
            cardStyle={{ marginBottom: 10 }}
          />
        ))}
    </Layout>
  );
};
export default HomeScreen;
