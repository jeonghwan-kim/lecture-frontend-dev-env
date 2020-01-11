import request from "./request";

export default {
  async list() {
    return await request("get", "/api/search");
  }
};
