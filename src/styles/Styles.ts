import { StyleSheet } from "react-native";

export const stylesQRScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E3D72",
  },

  backButton: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E3D72",
    textAlign: "center",
  },
  bannerContainer: {
    backgroundColor: "white",
    padding: 45,
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 40,
    alignItems: "center",
  },
  topBar: {
    position: "absolute",
    top: "3%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 5,
    backgroundColor: "white",
  },
  bannerText: {
    color: "#0E3D72",
    fontSize: 16,
    fontWeight: "bold",
  },
  qrContainer: {
    backgroundColor: "white",
    padding: 50,
    borderRadius: 10,
    alignItems: "center",
  },
  totalText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0E3D72",
    marginTop: 10,
  },
  printButton: {
    backgroundColor: "#f8f8f8",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  printButtonText: {
    color: "#0E3D72",
    fontSize: 18,
    marginLeft: 10,
  },
});

export const stylesSharePaymentScreen = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    
    backgroundColor: "#fff",
    borderColor: "white",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: "1%",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
    color: "#979797",
  },
  total: {
    fontSize: 38,
    fontWeight: "600",
    color: "#0E3D72",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 10,
    color: "#979797",
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    
    alignItems: "center",
    marginBottom: 10,
  },
  inputButton: {
    backgroundColor: "#0c84f3",
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  inputButtonQr: {
    backgroundColor: "#0c84f3",
    paddingVertical: "34%",
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  inputButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomButtonsContainer: {
    width: "100%",
    
    justifyContent: "flex-end",
  },
  requestButton: {
    width: "100%",
    backgroundColor: "#0c84f3",
    paddingVertical: "5%",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  requestButtonWithBorder: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#0c84f3",
    paddingVertical: "5%",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  requestButtonWhite: {
    width: "100%",
    borderWidth: 2,
    borderColor: "white",
    paddingVertical: "5%",
    borderRadius: 5,
    marginVertical: 5,
    alignItems: "center",
  },
  requestButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  requestButtonTextBlue: {
    color: "#0c84f3",
    fontSize: 16,
    fontWeight: "500",
  },
  inputTextContainer: {
    flex: 1,
    
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: "5%",
    marginRight: 10,
    justifyContent: "center",
  },
  inputText: {
    color: "#5b5b5c",
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 50,

    paddingHorizontal: 10,
    marginRight: 10,
  },
  middleContainer: {
    marginVertical:"7%",
    
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    
  },
  
});

export const stylesCreatePaymentScreen = StyleSheet.create({
  container: {
    marginVertical:10,
    flex: 1,
    
    alignItems: "center",
    backgroundColor: "white",
  },
  totalText: {
    fontSize: 37,
    fontWeight: "bold",
    color: "#0E3D72",
    marginBottom:"10%",
    textAlign: "center",
   
  },
  disabledButton: {
    backgroundColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "auto",
  },
  numberButton: {
    flexBasis: "35%",
    aspectRatio: 1.6,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  zeroButton: {
    flexBasis: "30%",
  },
  numberButtonText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#0E3D72",
  },
  emptyButton: {
    flexBasis: "30%",
    aspectRatio: 1,
  },

  requestButton: {
    width: "90%",
    backgroundColor: "#0c84f3",
    paddingVertical: "4%",
    borderRadius: 5,
   
    alignItems: "center",
  },
  requestButtonText: {
    color: "white",
    fontSize: 18,
  },
  resetButton: {
    width: "90%",
    backgroundColor: "white",
    paddingVertical: "4%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    marginVertical:"4%"
  },
  resetButtonText: {
    color: "red",
    fontSize: 18,
  },
  topBar: {
    position: "absolute",
    top: "0%",
    width: "100%",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    paddingVertical: "5%",
    paddingHorizontal: 5,
    backgroundColor: "white",
    
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0E3D72",
  },
  currencyButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "withe",
    borderRadius: 5,
  },
  currencyButtonText: {
    color: "#0E3D72",
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0E3D72",
  },
  middleContainer: {
    paddingVertical:"20%",
    
    
    alignItems: "center",
    width: "100%",
    
  },

  currencyOptionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  currencyOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#0E3D72",
  },

  currencyOptionText: {
    fontSize: 16,
    color: "#0E3D72",
  },

  modalCloseButton: {
    fontSize: 16,
    color: "#0E3D72",
    marginTop: 20,
  },
  selectedCurrencyOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#0E3D72",
  },

  selectedCurrencyText: {
    color: "white",
  },
  bottomButtonsContainer: {
    position:"absolute",
    bottom:"0%",
    width: "100%",
    alignItems:"center",
  },
  
  
});

export const stylesSuccessScreen = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  iconContainer: {
    marginBottom: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0E3D72",
    marginBottom: 10,
  },
  successMessage: {
    fontSize: 16,
    color: "#7f7f80",
    marginBottom: 30,
  },
  finishButton: {
    
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  finishButtonText: {
    color: "#0E3D72",
    fontSize: 18,
    fontWeight: "500",
  },
  topBar: {
      position: "absolute",
      top: "3%",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "white",
      borderBottomWidth: 1, 
      borderBottomColor: "#ccc", 
    },
});
