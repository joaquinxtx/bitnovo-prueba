import { createStackNavigator } from '@react-navigation/stack';
import CreatePaymentScreen from '../screens/create_payment_screen/CreatePaymentScreen';
import SharePaymentScreen from '../screens/share_payment_screen/SharePaymentScreen';
import QRScreen from '../screens/qr_payment_screen/QrPaymentScreen';
import { RootStackParamList } from '../interfaces/PaymentTypes';
import SuccessScreen from '../screens/payment_processed_screen/SuccessScreen';



const Stack = createStackNavigator<RootStackParamList>();



const Navigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CreatePayment"
        component={CreatePaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SharePayment"
        component={SharePaymentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="QRPayment"
        component={QRScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessPayment"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};
export default Navigation;