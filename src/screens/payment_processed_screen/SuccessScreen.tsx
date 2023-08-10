
import { SuccessPaymentScreenProps } from "../../interfaces/Payment";
import { View ,Text} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { stylesQRScreen, stylesSuccessScreen } from "../../styles/Styles";


const SuccessScreen: React.FC<SuccessPaymentScreenProps> = ({ navigation }) => {
    
  
   
  
    const handleFinish = () => {
      navigation.navigate("CreatePayment");
    };
  
    return (
      <View style={stylesSuccessScreen.container}>
        <View style={stylesSuccessScreen.topBar}>
        
        <Text style={stylesQRScreen.title}>Bitnovo</Text>
        
      </View>
        <TouchableOpacity  style={stylesSuccessScreen.iconContainer}>
          <Ionicons name="checkmark-circle" size={100} color="#5bf57c" />
        </TouchableOpacity>
        <Text style={stylesSuccessScreen.successText}>Pago procesado</Text>
        <Text style={stylesSuccessScreen.successMessage}>Tu pago ha sido confirmado con éxito</Text>
        
        <TouchableOpacity onPress={handleFinish} style={stylesSuccessScreen.finishButton}>
          <Text style={stylesSuccessScreen.finishButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  
  
  export default SuccessScreen