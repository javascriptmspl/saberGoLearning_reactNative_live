import { BASE_URL } from '.';


// GET USER BY ID
export const api_userById = async (token: string, id: string) => {
    const uri = `${BASE_URL}/users/mobile/userGetById/${id}`;
    const response = await fetch(uri, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "x-access-token": token
        },
    }).then(res => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error || 'something went wrong!');
    }
    return response;
};
