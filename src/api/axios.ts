import axios from "axios";

const api = axios.create({ baseURL: 'https://eth-mainnet.g.alchemy.com/v2/pB0oI6Vk2oTS6uI28xwc6LJEV6frph8Y' });

export default api


export const Endpoints = {nfts: 'nfts'}