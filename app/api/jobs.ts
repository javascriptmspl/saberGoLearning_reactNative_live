import { BASE_URL } from '.';



// GET ALL JOBS -> GET
export const api_getAllJobs = async () => {
    const uri = `${BASE_URL}/jobs/mobile/getAllJobs`;
  
    const response = await fetch(uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    if (!response.isSuccess) {
      throw new Error(response.error);
    }
    return response;
  };