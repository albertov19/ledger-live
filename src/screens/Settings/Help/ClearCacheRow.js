/* @flow */
import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Trans } from "react-i18next";
import { View, StyleSheet } from "react-native";
import { cleanCache } from "../../../actions/general";
import colors from "../../../colors";
import SettingsRow from "../../../components/SettingsRow";
import Warning from "../../../icons/Warning";
import { withReboot } from "../../../context/Reboot";
import ModalBottomAction from "../../../components/ModalBottomAction";
import Button from "../../../components/Button";
import Archive from "../../../icons/Archive";
import Circle from "../../../components/Circle";
import BottomModal from "../../../components/BottomModal";

const mapDispatchToProps = {
  cleanCache,
};

type Props = {
  cleanCache: () => void,
  reboot: (?boolean) => *,
};

type State = {
  isModalOpened: boolean,
};

class ClearCacheRow extends PureComponent<Props, State> {
  state = {
    isModalOpened: false,
  };

  onRequestClose = () => {
    this.setState({ isModalOpened: false });
  };

  onPress = () => {
    this.setState({ isModalOpened: true });
  };

  onClearCache = async () => {
    await this.props.cleanCache();
    this.props.reboot();
  };

  render() {
    const { isModalOpened } = this.state;

    return (
      <Fragment>
        <SettingsRow
          title={<Trans i18nKey="settings.help.clearCache" />}
          desc={<Trans i18nKey="settings.help.clearCacheDesc" />}
          iconLeft={
            <Circle bg="rgba(153,153,153,0.1)" size={32}>
              <Archive size={16} color={colors.grey} />
            </Circle>
          }
          onPress={this.onPress}
        />
        <BottomModal isOpened={isModalOpened} onClose={this.onRequestClose}>
          <ModalBottomAction
            title={null}
            icon={
              <Circle bg={colors.lightLive} size={56}>
                <Warning size={24} color={colors.live} />
              </Circle>
            }
            description={<Trans i18nKey="settings.help.clearCacheModalDesc" />}
            footer={
              <View style={styles.footerContainer}>
                <Button
                  type="secondary"
                  title={<Trans i18nKey="common.cancel" />}
                  onPress={this.onRequestClose}
                  containerStyle={styles.buttonContainer}
                />
                <Button
                  type="primary"
                  title={<Trans i18nKey="settings.help.clearCacheButton" />}
                  onPress={this.onClearCache}
                  containerStyle={[
                    styles.buttonContainer,
                    styles.buttonMarginLeft,
                  ]}
                />
              </View>
            }
          />
        </BottomModal>
      </Fragment>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(withReboot(ClearCacheRow));

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonMarginLeft: { marginLeft: 16 },
});
