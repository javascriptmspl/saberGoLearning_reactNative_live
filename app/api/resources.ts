import { BASE_URL } from '.';





// GET ALL RESOURCES -> GET



export const api_getAllResources = async (pageNo: number,) => {
    // const pageSize = pageSIZE ? pageSIZE : 50;
    const uri = `${BASE_URL}/resources/getAll?pageNo=${pageNo}`;
  
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