import { BASE_URL } from '.';

export const api_rating = async (payload: any) => {
  const uri = `${BASE_URL}/rating/create`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};