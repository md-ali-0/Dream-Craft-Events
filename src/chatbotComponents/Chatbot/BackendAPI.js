// src/services/BackendAPI.js
import axios from 'axios';

class BackendAPI {
  async fetchEvents() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      return response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  }
}

export default BackendAPI;
