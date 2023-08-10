import axios from 'axios';


const apiUrl = 'https://payments.pre-bnvo.com/api/v1/';

const deviceId = "81b41bbe-be8d-4ddd-a9c3-c58906b55568"

export const createOrder = async (total:string , fiat:string) => {

  const formData = new FormData();

  const paymentData = {
    expected_output_amount: total,
    notes: 'Payment for product XYZ',
    reference: 'ORDER-12345',
    fiat: fiat,
    language: 'ES',
    first_name: 'John',
    surnames: 'Dev',
    address_name: '123 Main St',
    address_additional: 'Apt 4B',
    address_number: '123',
    zip_code: '12345',
    city: 'cordoba',
    province: 'cordoba',
    country: 'US',
    email: 'joaquindev98@gmail.com',
    phone_number: '1234567',
    nif: '1234567',
    referral_id: 'REF-98765',
    internal_data: 'Additional data for the merchant',
    merchant_urlko: 'https://example.com/uncompleted_payments',
    merchant_urlok: 'https://example.com/completed_payments',
    merchant_url_standby: 'https://example.com/waiting_for_payment_confirmation',
  };
  
  Object.entries(paymentData).forEach(([key, value]) => {
    formData.append(key, value.toString());
  });

  

  try {
    const response = await axios.post(`${apiUrl}orders/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-Device-Id': deviceId,
      },
    });
    console.log('Respuesta de la API:', response.data);
    return response;

  } catch (error) {
    console.error('Error al hacer la solicitud:', error);
  }
};

