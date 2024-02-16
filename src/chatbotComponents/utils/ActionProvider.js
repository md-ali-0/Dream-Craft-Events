// src/chatbot/ActionProvider.js
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, backendAPI) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.backendAPI = backendAPI;
  }
  async handleFetchEvents() {
    const events = await this.backendAPI.fetchEvents();
    this.handleUpcomingEvents(events);
  }

  handleUpcomingEvents(events) {
    if (events.length > 0) {
      const message = this.createChatBotMessage("Here are the upcoming events:", {
        widget: "eventsList",
        withAvatar: true,
      });

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    } else {
      this.handleNoEventsFound();
    }
  }

  handleNoEventsFound() {
    const message = this.createChatBotMessage("No upcoming events found.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleEventDetailsPrompt() {
    const message = this.createChatBotMessage("Please provide the name or date of the event you'd like more details about.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleUnknown() {
    const message = this.createChatBotMessage("I'm not sure what you mean. Can you rephrase?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDreamCraftInfo() {
    const message = this.createChatBotMessage("DreamCraft is an innovative web application designed to revolutionize event management and booking experiences.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleDreamCraftPurpose() {
    const message = this.createChatBotMessage("The purpose of DreamCraft web application is to offer users a seamless platform for event management, booking, and customization, providing a user-friendly experience for planning and attending various events.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
  


  handleHowToBook() {
    const message = this.createChatBotMessage("To book an event, simply navigate to the Events section, choose your event, and follow the booking instructions.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleEventCancellation() {
    const message = this.createChatBotMessage("For event cancellations, please visit your Booking History, select the event, and click on 'Cancel Booking'. Note: Cancellation policies may apply.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handlePaymentOptions() {
    const message = this.createChatBotMessage("We accept various payment methods including credit cards, PayPal, and bank transfers.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }

  handleCustomerSupport() {
    const message = this.createChatBotMessage("Our customer support team is here to help you. You can reach us through the Contact Us page or by emailing support@dreamcraft.com.");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;
