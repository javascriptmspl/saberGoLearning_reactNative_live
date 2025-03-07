import {BASE_URL} from '.';

// GET TAGS
export const api_tags = async () => {
  const ID = '6319d5025ab9e462a96cfbba';
  const uri = `${BASE_URL}/tags/getTagByTag_categoriesId/${ID}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};
// GET LERNING MODE
export const api_learningMode = async () => {
  const ID = '631ad8abce5c666542591bd9';
  const uri = `${BASE_URL}/tags/getTagByTag_categoriesId/${ID}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};

// GET ALL TAGS
