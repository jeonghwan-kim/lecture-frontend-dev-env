import axios from 'axios'

export default {
  async list() {
    const result = await axios.get('/api/search');
    return result.data;
  }
}
