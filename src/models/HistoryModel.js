import axios from 'axios'

export default {
  data: [],

  async list() {
    if (this.data.length) return this.data;

    const result = await axios.get('/api/history')
    this.data = result.data;
    return this.data;
  },

  add(keyword = '') {
    keyword = keyword.trim()
    if (!keyword) return
    if (this.data.some(item => item.keyword === keyword)) {
      this.remove(keyword)
    }

    const date = '12.31'
    this.data = [{
      keyword,
      date
    }, ...this.data]
  },

  remove(keyword) {
    this.data = this.data.filter(item => item.keyword !== keyword)
  }
}