import { BASE_URL } from '.';

export const api_login = async (payload: any) => {
  const uri = `${BASE_URL}/users/mobilelogin`;
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


export const api_signup = async (payload: any) => {
  const uri = `${BASE_URL}/users/mobilesignup`;
  const response = await fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: payload,
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};



// SET NEW PASSWORD -> POST

export const api_setNewPassword = async (newPassword:any, token:any) => {
  const uri = `${BASE_URL}/users/mobile/userSetNewPassword`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify({newPassword}),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};


// SEND OTP -> POST

export const api_sendOTP = async (email: any) => {
  const uri = `${BASE_URL}/users/mobile/usersendOtp?email=${email}`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};


// VERIFY OTP -> POST

export const api_otpVerify = async (otp: any, token: any) => {
  const uri = `${BASE_URL}/users/mobile/userverifyOtp`;
  const response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp, token }),
  }).then((res) => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};


// UPDATE PROFILE
export const api_updateUser = async (payload: any, token: string, userId: string) => {
  const uri = `${BASE_URL}/users/mobile/userUpdate/${userId}`;

  const response = await fetch(uri, {
    method: 'PUT',
    headers: {
      'x-access-token': token
    },
    body: payload,
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error || 'something went wrong!');
  }
  return response;
};



  // CHANGE PASSWORD -> PUT
  export const api_changePassword = async ( payload:any, token:any , userId:any) => {
    const uri = `${BASE_URL}/users/mobile/userchangePassword/${userId}`;
    const response = await fetch(uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
    if(!response.isSuccess){
        throw new Error(response.error || 'something went wrong!')
    }
    return response;
  };