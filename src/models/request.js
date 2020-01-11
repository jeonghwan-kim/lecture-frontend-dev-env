import axios from "axios";

export default async function request(method, url, data, headers) {
  const result = await axios({
    method,
    url,
    data,
    headers
  });

  return result.data;
}
