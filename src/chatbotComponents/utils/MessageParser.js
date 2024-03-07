class MessageParser {
  constructor(actionProvider, backendAPI) {
    this.actionProvider = actionProvider;
    this.backendAPI = backendAPI;
  }

  parse(message) {
    const lowercaseMessage = message.toLowerCase();
    //console.log("Received message:", lowercaseMessage); 

    if (lowercaseMessage.includes("upcoming events")) {
      this.actionProvider.handleFetchUpcomingEvents();
    } else if (lowercaseMessage.includes("event details")) {
      this.actionProvider.handleEventDetailsPrompt();
    } else if (lowercaseMessage.includes("dreamcraft")) {
      this.actionProvider.handleDreamCraftInfo();
    } else if (lowercaseMessage.includes("purpose")) {
      this.actionProvider.handleDreamCraftPurpose();
    } else if (lowercaseMessage.includes("how to book")) {
      this.actionProvider.handleHowToBook();
    } else if (
      lowercaseMessage.includes("cancel event") ||
      lowercaseMessage.includes("event cancellation")
    ) {
      this.actionProvider.handleEventCancellation();
    } else if (lowercaseMessage.includes("payment")) {
      this.actionProvider.handlePaymentOptions();
    } else if (
      lowercaseMessage.includes("customer support") ||
      lowercaseMessage.includes("help")
    ) {
      this.actionProvider.handleCustomerSupport();
    } else if (/hi|hello|hey/.test(lowercaseMessage)) {
      this.actionProvider.handleGreeting();
    } else if (
      lowercaseMessage.includes("schedule") ||
      lowercaseMessage.includes("times")
    ) {
      this.actionProvider.handleScheduleInformation();
    } else if (
      lowercaseMessage.includes("where") ||
      lowercaseMessage.includes("location")
    ) {
      this.actionProvider.handleLocationInformation();
    } else if (
      lowercaseMessage.includes("cost") ||
      lowercaseMessage.includes("price")
    ) {
      this.actionProvider.handleTicketPricing();
    } else if (lowercaseMessage.includes("refund")) {
      this.actionProvider.handleRefundPolicy();
    } else if (
      lowercaseMessage.includes("covid") ||
      lowercaseMessage.includes("guidelines")
    ) {
      this.actionProvider.handleCovidGuidelines();
    } else if (
      lowercaseMessage.includes("speaker") ||
      lowercaseMessage.includes("talks")
    ) {
      this.actionProvider.handleSpeakerInformation();
    } else if (lowercaseMessage.includes("sponsorship")) {
      this.actionProvider.handleSponsorshipOpportunities();
    } else if (lowercaseMessage.includes("volunteer")) {
      this.actionProvider.handleVolunteeringInformation();
    } else if (
      lowercaseMessage.includes("accommodation") ||
      lowercaseMessage.includes("stay")
    ) {
      this.actionProvider.handleAccommodationOptions();
    } else if (lowercaseMessage.includes("transportation")) {
      this.actionProvider.handleTransportationDetails();
    } else if (lowercaseMessage.includes("networking")) {
      this.actionProvider.handleNetworkingEvents();
    } else if (lowercaseMessage.includes("workshop")) {
      this.actionProvider.handleWorkshopSchedule();
    } else if (
      lowercaseMessage.includes("exhibit") ||
      lowercaseMessage.includes("showcase")
    ) {
      this.actionProvider.handleExhibitShowcase();
    } else {
      //console.log("Handling as unknown:", lowercaseMessage); 
      this.actionProvider.handleUnknown();
    }
  }
}

export default MessageParser;
