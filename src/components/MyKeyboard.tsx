import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Styles } from "../styles/GlobalStyle";
import Button from "./Button";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [firstNumber, setFirstNumber] = React.useState("");
  const [secondNumber, setSecondNumber] = React.useState("");
  const [operation, setOperation] = React.useState("");
  const [result, setResult] = React.useState<Number | null>(null);
  //
  const handelNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };
  //
  const handelOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber("");
  };

  const clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setOperation("");
    setResult(null);
  };
  // Operation (+ - / *)
  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case "-":
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case "/":
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      case "*":
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;

      default:
        clear();
        setResult(0);
        break;
    }
  };
  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstName, { color: myColors.result }]
              : [
                  Styles.screenFirstName,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstName}>{firstNumber}</Text>;
    }
    if (firstNumber === "") {
      return <Text style={Styles.screenFirstName}>{"0"}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstName, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstName, { fontSize: 50 }]}>
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
          // backgroundColor: "red",
        }}
      >
        <Text style={Styles.screenSecondName}>
          {secondNumber}
          <Text style={styles.operationText}>{operation}</Text>
          {firstNumberDisplay()}
        </Text>
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button
          title="+/-"
          isGray
          onPress={() => {
            handelOperationPress("+/-");
          }}
        />
        <Button
          title="%"
          isGray
          onPress={() => {
            handelOperationPress("%");
          }}
        />
        <Button
          title="/"
          isBlue
          onPress={() => {
            handelOperationPress("/");
          }}
        />
      </View>
      {/* * */}
      <View style={Styles.row}>
        <Button
          title="7"
          onPress={() => {
            handelNumberPress("7");
          }}
        />
        <Button
          title="8"
          onPress={() => {
            handelNumberPress("8");
          }}
        />
        <Button
          title="9"
          onPress={() => {
            handelNumberPress("9");
          }}
        />
        <Button
          title="*"
          isBlue
          onPress={() => {
            handelOperationPress("*");
          }}
        />
      </View>
      {/* - */}
      <View style={Styles.row}>
        <Button
          title="4"
          onPress={() => {
            handelNumberPress("4");
          }}
        />
        <Button
          title="5"
          onPress={() => {
            handelNumberPress("5");
          }}
        />
        <Button
          title="6"
          onPress={() => {
            handelNumberPress("6");
          }}
        />
        <Button
          title="-"
          isBlue
          onPress={() => {
            handelOperationPress("-");
          }}
        />
      </View>
      {/* + */}
      <View style={Styles.row}>
        <Button
          title="1"
          onPress={() => {
            handelNumberPress("1");
          }}
        />
        <Button
          title="2"
          onPress={() => {
            handelNumberPress("2");
          }}
        />
        <Button
          title="3"
          onPress={() => {
            handelNumberPress("3");
          }}
        />
        <Button
          title="+"
          isBlue
          onPress={() => {
            handelOperationPress("+");
          }}
        />
      </View>
      {/* = */}
      <View style={Styles.row}>
        <Button
          title="."
          onPress={() => {
            handelOperationPress(".");
          }}
        />
        <Button
          title="0"
          onPress={() => {
            handelNumberPress("0");
          }}
        />
        <Button
          title="<="
          onPress={() => {
            setFirstNumber(firstNumber.slice(0, -1));
          }}
        />
        <Button
          title="="
          isBlue
          onPress={() => {
            getResult();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  operationText: {
    height: 12,
    width: "90%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  displayView: {
    color: "purple",
    fontSize: 50,
    fontWeight: "500",
  },
});
