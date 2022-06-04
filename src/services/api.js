import axios from "axios";

export async function get(url, query) {
  return await axios.get(url, { params: query });
}

// export async function post() {
//   return await axios.get(url, query);
// }
