
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import QRCode from "react-native-qrcode-svg";
import { stylesQRScreen } from "../../styles/Styles";
import { QRPaymentScreenProps } from "../../interfaces/Payment";
import { useEffect } from "react";

const QRScreen: React.FC<QRPaymentScreenProps> = ({ route, navigation }) => {
  const webUrl = route.params?.webUrl || "";
  const total = route.params.total || 0;
  const paymentStatus = route.params.paymentStatus || "";

  useEffect(() => {
    if (paymentStatus === "CO") {
      navigation.navigate("SuccessPayment");
    }
  }, [paymentStatus]);

  return (
    <View style={stylesQRScreen.container}>
      <StatusBar style="auto" backgroundColor="#ffffff" />
      <View style={stylesQRScreen.topBar}>
        <TouchableOpacity style={stylesQRScreen.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0E3D72" />
        </TouchableOpacity>
        <Text style={stylesQRScreen.title}>Bitnovo QR</Text>
      </View>
      

      <View style={stylesQRScreen.bannerContainer}>
        <Text style={stylesQRScreen.bannerText}>
          Muestre su QR a sus clientes
        </Text>
      </View>
      <View style={stylesQRScreen.qrContainer}>
        <QRCode value={webUrl} size={200} />
        <Text style={stylesQRScreen.totalText}>{total} €</Text>
      </View>

      <TouchableOpacity style={stylesQRScreen.printButton} onPress={() => {}}>
        <Ionicons name="print" size={24} color="#0E3D72" />
        <Text style={stylesQRScreen.printButtonText}>Imprimir</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QRScreen;
