import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { Text, View, TextInput, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";
import { SharePaymentScreenProps, currencies } from "../../interfaces/Payment";
import { SharePaymentScreenRouteProp } from "../../interfaces/PaymentTypes";
import { stylesSharePaymentScreen } from "../../styles/Styles";

const MAX_URL_LENGTH = 29;

const SharePaymentScreen: React.FC<SharePaymentScreenProps> = ({
  navigation,
}) => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [whatsappNumber, setWhatsappNumber] = useState<string>("");
  const [isWhatsappFocused, setIsWhatsappFocused] = useState<boolean>(false);
  const [isEmailFocused, setIsEmailFocused] = useState<boolean>(false);

  const route = useRoute<SharePaymentScreenRouteProp>();
  const total = route.params.total || 0;
  const webUrl = route.params.webUrl || "";
  const identifier = route.params.identifier || "";
  const fiat = route.params.fiat || "";
  const truncatedWebUrl =
    webUrl.length > MAX_URL_LENGTH
      ? `${webUrl.substring(0, MAX_URL_LENGTH)}...`
      : webUrl;

  const handleWhatsappInputFocus = useCallback(() => {
    setIsWhatsappFocused(true);
  }, []);

  const handleWhatsappInputBlur = useCallback(() => {
    setIsWhatsappFocused(false);
  }, []);

  const handleEmailInputFocus = useCallback(() => {
    setIsEmailFocused(true);
  }, []);

  const handleEmailInputBlur = useCallback(() => {
    setIsEmailFocused(false);
  }, []);

  useEffect(() => {
    const url = `wss://payments.pre-bnvo.com/ws/merchant/${identifier}`;

    const newSocket = new WebSocket(url);

    newSocket.onopen = () => {
      console.log("Conexión WebSocket establecida y encabezados enviados.");
    };

    newSocket.onmessage = (event) => {
      const newPaymentStatus = JSON.parse(event.data).status;
      console.log("Estado del pago actualizado:", newPaymentStatus);

      setPaymentStatus(newPaymentStatus);

      if (paymentStatus === "CO") {
        navigation.navigate("SuccessPayment");
      }
    };

    newSocket.onclose = () => {
      console.log("Conexión WebSocket cerrada.");
    };

    newSocket.onerror = (error) => {
      console.error("Error en la conexión WebSocket:", error);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const handleCompartirQR = () => {
    navigation.navigate("QRPayment", {
      webUrl: webUrl,
      total: total,
      paymentStatus: paymentStatus,
    });
  };

  const handleCompartirEmail = () => {
    if (email) {
      const subject = "Pago pendiente";
      const body = `¡Hola!\n\nPaga tu pedido aquí: ${webUrl}`;
      Linking.openURL(
        `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`
      );
    } else {
      console.log("Por favor ingresa un correo electrónico válido.");
    }
  };

  const handleCompartirWhatsapp = () => {
    if (whatsappNumber) {
      const message = `¡Hola! Paga tu pedido aquí: ${webUrl}`;
      Linking.openURL(
        `whatsapp://send?phone=${encodeURIComponent(
          whatsappNumber
        )}&text=${encodeURIComponent(message)}`
      );
    } else {
      console.log("Por favor ingresa un número de WhatsApp válido.");
    }
  };

  return (
    <View style={stylesSharePaymentScreen.container}>
      <View style={stylesSharePaymentScreen.middleContainer}>
        <Ionicons name="md-cash" size={60} color="#04b1f5" />
        <Text style={stylesSharePaymentScreen.title}>Solicitud de pago</Text>
        <Text style={stylesSharePaymentScreen.total}>
          {" "}
          {total} {currencies[fiat]}{" "}
        </Text>
        <Text style={stylesSharePaymentScreen.subtitle}>
          Muestrale el QR al cliente o comparte el enlace de pago
        </Text>
        <View style={stylesSharePaymentScreen.inputContainer}>
          <View style={stylesSharePaymentScreen.inputTextContainer}>
            <Text style={stylesSharePaymentScreen.inputText}>
              {truncatedWebUrl}
            </Text>
          </View>
          <TouchableOpacity
            style={stylesSharePaymentScreen.inputButtonQr}
            onPress={handleCompartirQR}
          >
            <Text style={stylesSharePaymentScreen.inputButtonText}>QR</Text>
          </TouchableOpacity>
        </View>

        <View style={stylesSharePaymentScreen.inputBox}>
          <TextInput
            style={stylesSharePaymentScreen.input}
            placeholder="Ingresa el correo electrónico"
            value={email}
            onChangeText={setEmail}
            onFocus={handleEmailInputFocus}
            onBlur={handleEmailInputBlur}
          />
          {isEmailFocused && (
            <TouchableOpacity
              style={stylesSharePaymentScreen.inputButton}
              onPress={handleCompartirEmail}
            >
              <Text style={stylesSharePaymentScreen.inputButtonText}>
                enviar
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={stylesSharePaymentScreen.inputBox}>
          <TextInput
            style={stylesSharePaymentScreen.input}
            placeholder="Ingresa el número de WhatsApp"
            value={whatsappNumber}
            onChangeText={setWhatsappNumber}
            onFocus={handleWhatsappInputFocus}
            onBlur={handleWhatsappInputBlur}
            keyboardType="numeric"
          />
          {isWhatsappFocused && (
            <TouchableOpacity
              style={stylesSharePaymentScreen.inputButton}
              onPress={handleCompartirWhatsapp}
            >
              <Text style={stylesSharePaymentScreen.inputButtonText}>
                enviar
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={stylesSharePaymentScreen.bottomButtonsContainer}>
         <TouchableOpacity style={stylesSharePaymentScreen.requestButton} onPress={() => {}}>
           <Text style={stylesSharePaymentScreen.requestButtonText}>Ir a pasarela</Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={stylesSharePaymentScreen.requestButtonWithBorder}
           onPress={() => {}}
         >
           <Text style={stylesSharePaymentScreen.requestButtonTextBlue}>Compartir</Text>
         </TouchableOpacity>
         <TouchableOpacity style={stylesSharePaymentScreen.requestButtonWhite} onPress={() => {}}>
           <Text style={stylesSharePaymentScreen.requestButtonTextBlue}>Solicitar nuevo pago</Text>
         </TouchableOpacity>
       </View>
    </View>
    
  );
};

export default SharePaymentScreen;
