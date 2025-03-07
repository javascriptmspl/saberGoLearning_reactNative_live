import { BASE_URL } from '.';


// GET PLACED STUDENTS -> GET

export const api_getPlacedStudents = async (pageNo: number) => {
    const uri = `${BASE_URL}/student/mobile/placedStudent?pageNo=${pageNo}&pageSize=50`;
  
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