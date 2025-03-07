import { BASE_URL } from '.';




// TRANSACTION API -> GET

export const api_getTransaction = async (token: string, userId: string) => {
    const uri = `${BASE_URL}/transaction/mobile/GetTransactionByUserId/${userId}`;
  
    const response = await fetch(uri, {
      method: 'GET',
      headers: {
        'x-access-token': token
      },
    }).then(res => res.json());
    if (!response.isSuccess) {
      throw new Error(response.error || 'something went wrong!');
    }
    return response;
  };
  