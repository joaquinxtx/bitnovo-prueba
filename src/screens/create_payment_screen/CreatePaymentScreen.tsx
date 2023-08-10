
import React, { useState, useEffect ,FC} from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createOrder } from "../../services/PaymentService";
import { CreatePaymentScreenProps, currencies } from "../../interfaces/Payment";
import { stylesCreatePaymentScreen } from "../../styles/Styles";
import NumberButton from "../../components/NumberButtonProps";

const CreatePaymentScreen: React.FC<CreatePaymentScreenProps> = ({
  navigation,
}) => {
  const [total, setTotal] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("EUR");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isTotalZero, setIsTotalZero] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setTotal(0);
      setIsTotalZero(true);
    });

    return unsubscribe;
  }, [navigation]);

  const handleNumberPress = (number: number) => {
    setTotal((prevTotal) => prevTotal * 10 + number);
    setIsTotalZero(false);
  };

  const handleClearPress = () => {
    if (total > 0) {
      setTotal((prevTotal) => Math.floor(prevTotal / 10));
      setIsTotalZero(total < 10); // Verifica si el total será cero después de borrar el último dígito
    }
  };

  const handleCurrencySelect = (currency: string) => {
    setSelectedCurrency(currency);
    setModalVisible(false);
  };

  const getTotalInEurosAndCentavos = () => {
    const euros = Math.floor(total / 100);
    const centavos = total % 100;
    return `${euros}.${centavos.toString().padStart(2, "0")}`;
  };

  const handleCreateOrder = async () => {
    try {
      const response = await createOrder(
        getTotalInEurosAndCentavos(),
        selectedCurrency
      );
      const webUrl = response?.data.web_url;
      const identifier = response?.data.identifier;
      navigation.navigate("SharePayment", {
        total: parseFloat(getTotalInEurosAndCentavos()),
        webUrl,
        identifier,
        fiat: selectedCurrency,
      });
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <View style={stylesCreatePaymentScreen.container}>
      <View style={stylesCreatePaymentScreen.topBar}>
        <TouchableOpacity style={stylesCreatePaymentScreen.backButton}>
          <Ionicons name="arrow-back" size={24} color="#0E3D72" />
        </TouchableOpacity>
        <Text style={stylesCreatePaymentScreen.title}>Solicitar Pago</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={stylesCreatePaymentScreen.currencyButton}
        >
          <Text style={stylesCreatePaymentScreen.currencyButtonText}>
            {selectedCurrency}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesCreatePaymentScreen.middleContainer}>
      <Text style={stylesCreatePaymentScreen.totalText}>
        {getTotalInEurosAndCentavos()} {currencies[selectedCurrency]}
      </Text>

      <View style={stylesCreatePaymentScreen.row}>
        {[1, 2, 3].map((number) => (
          <NumberButton
            key={number}
            number={number}
            onPress={handleNumberPress}
          />
        ))}
      </View>
      <View style={stylesCreatePaymentScreen.row}>
        {[4, 5, 6].map((number) => (
          <NumberButton
            key={number}
            number={number}
            onPress={handleNumberPress}
          />
        ))}
      </View>
      <View style={stylesCreatePaymentScreen.row}>
        {[7, 8, 9].map((number) => (
          <NumberButton
            key={number}
            number={number}
            onPress={handleNumberPress}
          />
        ))}
      </View>

      <View style={stylesCreatePaymentScreen.row}>
        <TouchableOpacity
          style={stylesCreatePaymentScreen.numberButton}
         
        >
          <Ionicons name="cash" size={40} color="#0E3D72" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            stylesCreatePaymentScreen.numberButton,
            stylesCreatePaymentScreen.zeroButton,
          ]}
          onPress={() => handleNumberPress(0)}
        >
          <Text style={stylesCreatePaymentScreen.numberButtonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesCreatePaymentScreen.numberButton}
          onPress={() => handleClearPress()}
        >
          <Ionicons name="backspace-outline" size={40} color="#0E3D72" />
        </TouchableOpacity>
      </View>


      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={stylesCreatePaymentScreen.modalContainer}>
          <Text style={stylesCreatePaymentScreen.modalTitle}>
            Selecciona la moneda:
          </Text>
          <View style={stylesCreatePaymentScreen.currencyOptionsContainer}>
            {Object.keys(currencies).map((currencyKey) => (
              <TouchableOpacity
                key={currencyKey}
                onPress={() => handleCurrencySelect(currencyKey)}
                style={
                  currencyKey === selectedCurrency
                    ? stylesCreatePaymentScreen.selectedCurrencyOption
                    : stylesCreatePaymentScreen.currencyOption
                }
              >
                <Text
                  style={
                    currencyKey === selectedCurrency
                      ? stylesCreatePaymentScreen.selectedCurrencyText
                      : stylesCreatePaymentScreen.currencyOptionText
                  }
                >
                  {currencyKey}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={stylesCreatePaymentScreen.modalCloseButton}>
              Cerrar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={stylesCreatePaymentScreen.bottomButtonsContainer}>


        <TouchableOpacity
          style={[
            stylesCreatePaymentScreen.requestButton,
            isTotalZero || getTotalInEurosAndCentavos() === "0.00"
              ? stylesCreatePaymentScreen.disabledButton
              : null,
          ]}
          onPress={() => {
            handleCreateOrder();
          }}
          disabled={isTotalZero || getTotalInEurosAndCentavos() === "0.00"}
        >
          <Text style={stylesCreatePaymentScreen.requestButtonText}>
            Solicitar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={stylesCreatePaymentScreen.resetButton}
          onPress={() => {
            setTotal(0);
            setIsTotalZero(true);
          }}
        >
          <Text style={stylesCreatePaymentScreen.resetButtonText}>
            Restablecer
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default CreatePaymentScreen;
