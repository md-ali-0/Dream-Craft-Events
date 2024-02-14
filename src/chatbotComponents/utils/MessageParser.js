// src/chatbot/MessageParser.js
class MessageParser {
  constructor(actionProvider, backendAPI) {
    this.actionProvider = actionProvider;
    this.backendAPI = backendAPI;
  }

  parse(message) {
    const lowercaseMessage = message.toLowerCase();
    console.log("Received message:", lowercaseMessage); // Debug log
  
    if (lowercaseMessage.includes("upcoming events")) {
      this.actionProvider.handleFetchEvents();
    } else if (lowercaseMessage.includes("event details")) {
      this.actionProvider.handleEventDetailsPrompt();
    } else if (lowercaseMessage.includes("dreamcraft")) { // Ensure this matches exactly what you're testing
      this.actionProvider.handleDreamCraftInfo();
    } else if (lowercaseMessage.includes("purpose")) {
      this.actionProvider.handleDreamCraftPurpose();
    } else if (lowercaseMessage.includes("how to book")) {
      this.actionProvider.handleHowToBook();
    } else if (lowercaseMessage.includes("cancel event") || lowercaseMessage.includes("event cancellation")) {
      this.actionProvider.handleEventCancellation();
    } else if (lowercaseMessage.includes("payment")) {
      this.actionProvider.handlePaymentOptions();
    } else if (lowercaseMessage.includes("customer support") || lowercaseMessage.includes("help")) {
      this.actionProvider.handleCustomerSupport();
    } else {
      console.log("Handling as unknown:", lowercaseMessage); // Debug log for unknown handling
      this.actionProvider.handleUnknown();
    }
  }
  
}

export default MessageParser;
