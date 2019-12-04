import axios from 'axios'

export default {
  async list() {
    const result = await axios.get('/api/keywords');
    return result.data;
  }
}