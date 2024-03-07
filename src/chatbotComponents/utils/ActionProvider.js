import BackendAPI from "../Chatbot/BackendAPI";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.backendAPI = new BackendAPI();
  }


  updateChatWithMessage(text, options = {}) {
    const { widget, data } = options;

    this.setState((prevState) => ({
      ...prevState,
      messages: [
        ...prevState.messages,
        this.createChatBotMessage(text, options),
      ],
      data: data || prevState.data,
      widget: widget || prevState.widget,
    }));
  }
  async handleFetchEvents() {
    try {
      const events = await this.backendAPI.fetchEvents();
      //console.log(events);

      const messageText =
        events.length > 0
          ? "Here are some events:"
          : "No upcoming events found.";

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

    const upcomingEvents = [
      { title: "Green Living Expo", date: "February 25, 2024" },
      { title: "Film Buff Movie Marathon", date: "March 3, 2024" },

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

  handleGreeting() {
    const greetingMessage = "Hello! How can I assist you today?";
    this.updateChatWithMessage(greetingMessage);
  }

  handleScheduleInformation() {
    const scheduleMessage =
      "Our events are scheduled from 9 AM to 5 PM on weekdays.";
    this.updateChatWithMessage(scheduleMessage);
  }

  handleLocationInformation() {
    const locationMessage =
      "Our events take place at the Downtown Convention Center, 123 Main St.";
    this.updateChatWithMessage(locationMessage);
  }

  handleTicketPricing() {
    const ticketPricingMessage =
      "The ticket prices start at $50 for general admission and go up to $150 for VIP access.";
    this.updateChatWithMessage(ticketPricingMessage);
  }

  handleRefundPolicy() {
    const refundPolicyMessage =
      "Our refund policy allows you to cancel up to 24 hours before the event for a full refund.";
    this.updateChatWithMessage(refundPolicyMessage);
  }

  handleSpeakerInformation() {
    const speakerInfoMessage =
      "We feature a range of speakers from industry leaders to local experts.";
    this.updateChatWithMessage(speakerInfoMessage);
  }

  handleSponsorshipOpportunities() {
    const sponsorshipMessage =
      "For sponsorship inquiries, please contact our marketing team at marketing@eventmate.com.";
    this.updateChatWithMessage(sponsorshipMessage);
  }

  handleVolunteeringInformation() {
    const volunteeringMessage =
      "If you're interested in volunteering, please visit our website to fill out the volunteer application form.";
    this.updateChatWithMessage(volunteeringMessage);
  }

  handleAccommodationOptions() {
    const accommodationMessage =
      "We have partnerships with local hotels to provide discounted rates for our attendees.";
    this.updateChatWithMessage(accommodationMessage);
  }

  handleTransportationDetails() {
    const transportationMessage =
      "Shuttle services are available from the airport to the event venue every hour.";
    this.updateChatWithMessage(transportationMessage);
  }

  handleNetworkingEvents() {
    const networkingMessage =
      "We have networking events each evening after the main conference sessions.";
    this.updateChatWithMessage(networkingMessage);
  }

  handleWorkshopSchedule() {
    const workshopMessage =
      "Workshops are held on the second day of the event, with sessions in the morning and afternoon.";
    this.updateChatWithMessage(workshopMessage);
  }

  handleExhibitShowcase() {
    const exhibitMessage =
      "Our exhibit showcases the latest products and services from our sponsors and is open throughout the event.";
    this.updateChatWithMessage(exhibitMessage);
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
      "Our customer support team is here to help you. You can reach us through the Contact Us page or by emailing contact@dreamcraft.com"
    );
  }
}

export default ActionProvider;
