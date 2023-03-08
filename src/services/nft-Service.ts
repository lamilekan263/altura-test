import api from '../api/axios';


 const address = 'elanhalpern.eth'

export async function getNftsAxios(ownerAddress: string) {
    const data = await api.get(`${import.meta.env.VITE_BASE_URL}/?owner=${ownerAddress}`, {
        params: {
            owner: ownerAddress,
            order_direction:'desc'
        }
    });
    return data
}


