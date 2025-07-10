import { StyleSheet, Text } from "react-native";
import COLORS from "../../constants/colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: COLORS.accent500,
    fontSize: 24,
  },
});
