import api from '../api/axios';


 const address = 'elanhalpern.eth'

export async function getNftsAxios(ownerAddress: string) {
    const data = await api.get(`https://eth-mainnet.g.alchemy.com/v2/pB0oI6Vk2oTS6uI28xwc6LJEV6frph8Y/getNFTs/?owner=${ownerAddress}`);
    return data
}


