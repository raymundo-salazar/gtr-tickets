import { TouchableHighlight, View } from "react-native";
import Content from "@/atoms/Text/Content";
import Title from "@/atoms/Text/Title";
import Subtitle from "@/atoms/Text/Subtitle";

import style from "./styles";
import Divider from "../../atoms/Divider";

const Card = ({
  title,
  subtitle,
  content,
  footer,
  touchable = true,
  contentDivider = true,
  footerDivider = true,
  cardStyle = {},
  headerStyle = {},
  contentStyle = {},
  dividerStyle = {},
}) => {
  const _handlePress = (evt) => {};

  const Container = ({ children }) => {
    switch (touchable) {
      case false:
        return <View style={[style.card, cardStyle]}>{children}</View>;
      case true:
        return (
          <TouchableHighlight
            style={[style.card, cardStyle]}
            underlayColor="#ffffff95"
            onPress={_handlePress}
          >
            {children}
          </TouchableHighlight>
        );
    }
  };

  return (
    <Container>
      <>
        <View style={[style.content, { paddingBottom: 7 }, headerStyle]}>
          {title && <Title>{title}</Title>}
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </View>
        {content && (
          <>
            {contentDivider && (
              <Divider color="#cfcfcf" style={[dividerStyle]} />
            )}
            <View style={[style.content, { paddingVertical: 7 }, contentStyle]}>
              <Content>{content}</Content>
            </View>
          </>
        )}
        {footer && (
          <>
            {footerDivider && (
              <Divider color="#cfcfcf" style={[dividerStyle]} />
            )}
            <View style={[style.content, { paddingTop: 7 }, contentStyle]}>
              <Content>{footer}</Content>
            </View>
          </>
        )}
      </>
    </Container>
  );
};
export default Card;
