import axios from 'axios';

class BackendAPI {
  async fetchEvents() {
    try {
      const response = await axios.get('https://dream-craft-server.vercel.app/events');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }
}

export default BackendAPI;
