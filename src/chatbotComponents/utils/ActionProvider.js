import BackendAPI from "../Chatbot/BackendAPI";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    // Initialize the BackendAPI
    this.backendAPI = new BackendAPI();
  }

  // Utility method to update chat with a message
  updateChatWithMessage(text, options = {}) {
    const { widget, data } = options;
  
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, this.createChatBotMessage(text, options)],
      data: data || prevState.data,
      widget: widget || prevState.widget,
    }));
  }
  async handleFetchEvents() {
    try {
      const events = await this.backendAPI.fetchEvents();
      console.log(events);
  
      const messageText = events.length > 0 ? "Here are some events:" : "No upcoming events found.";
  
      this.updateChatWithMessage(messageText, {
        widget: events.length > 0 ? "eventsWidget" : undefined,
        data: events.length > 0 ? { events: events } : { events: [] },
      });
  
    } catch (error) {
      console.error("Error fetching events:", error);
      this.updateChatWithMessage(
        "Sorry, I couldn't fetch events due to an error. Please try again later."
      );
    }
  }
  async handleFetchUpcomingEvents() {
    // Static data for the example, replace with dynamic data fetching if needed
    const upcomingEvents = [
      { title: "Green Living Expo", date: "February 25, 2024" },
      { title: "Film Buff Movie Marathon", date: "March 3, 2024" },
      // Add more upcoming events here
    ];
  
    this.updateChatWithMessage("Here are some upcoming events:", {
      widget: "upcomingEventsWidget",
      data: { events: upcomingEvents },
    });
  }
  handleNoEventsFound() {
    this.updateChatWithMessage("No upcoming events found.");
  }

  handleEventDetailsPrompt() {
    this.updateChatWithMessage(
      "Please provide the name or date of the event you'd like more details about."
    );
  }

  handleUnknown() {
    this.updateChatWithMessage("I'm not sure what you mean. Can you rephrase?");
  }

  handleDreamCraftInfo() {
    this.updateChatWithMessage(
      "DreamCraft is an innovative web application designed to revolutionize event management and booking experiences."
    );
  }

  handleDreamCraftPurpose() {
    this.updateChatWithMessage(
      "The purpose of DreamCraft web application is to offer users a seamless platform for event management, booking, and customization, providing a user-friendly experience for planning and attending various events."
    );
  }

  handleHowToBook() {
    this.updateChatWithMessage(
      "To book an event, simply navigate to the Events section, choose your event, and follow the booking instructions."
    );
  }

  handleEventCancellation() {
    this.updateChatWithMessage(
      "For event cancellations, please visit your Booking History, select the event, and click on 'Cancel Booking'. Note: Cancellation policies may apply."
    );
  }

  handlePaymentOptions() {
    this.updateChatWithMessage(
      "We accept various payment methods including credit cards, PayPal, and bank transfers."
    );
  }

  handleCustomerSupport() {
    this.updateChatWithMessage(
      "Our customer support team is here to help you. You can reach us through the Contact Us page or by emailing support@dreamcraft.com."
    );
  }
}

export default ActionProvider;
