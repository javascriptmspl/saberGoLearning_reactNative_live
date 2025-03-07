import { BASE_URL } from '.';

export const api_getMyEnrolledCourses = async (id: string) => {
    const uri = `${BASE_URL}/enrolments/mobile/courseGetByUserId/${id}`;
    console.log(uri)
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
export const api_enroll = async (payload: any) => {
    const uri = `${BASE_URL}/enrolments/mobile/studentEnroll`;

    const response = await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    }).then((res) => res.json());
    if (!response.isSuccess) {
        throw new Error(response.error);
    }
    return response;
};

