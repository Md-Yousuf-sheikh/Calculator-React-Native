import { StyleSheet } from "react-native";
import { myColors } from "./Colors";

export const Styles = StyleSheet.create({
  btnBlue: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.blue,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  btnDark: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.dark,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  btnLight: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.light,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  btnGray: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: myColors.gray,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.dark,
  },
  //   keyboard
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  viewBottom: {
    position: "absolute",
    bottom: 20,
  },
  screenFirstName: {
    fontSize: 96,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
  screenSecondName: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: "200",
    alignSelf: "flex-end",
  },
});
