import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";


interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;

    }

    export default function Button ({ title, onPress, isBlue, isGray} : ButtonProps) {
        const theme = useContext(ThemeContext);
        return (
            <TouchableOpacity 
            onPress={onPress}
            style={[
                Styles.btn, 
                {backgroundColor: isBlue ? '#4b5efc' : isGray ? '#4e505f' : theme === 'light' ? '#2e2f38' : '#747477'}
            ]}>
                <Text style={Styles.btnText}>{title}</Text>
            </TouchableOpacity>
        )
    }