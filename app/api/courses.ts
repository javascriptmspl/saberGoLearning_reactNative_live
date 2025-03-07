import {BASE_URL} from '.';

// GET VIDEO STREAM
export const api_getVideoStream = async (key: string) => {
  const uri = `${BASE_URL}/apps/videoStream?key=${key}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// GET ALL COURSES -> GET
export const api_getAllCourses = async (pageNo: number, pageSIZE: number) => {
  const pageSize = pageSIZE ? pageSIZE : 50;
  const uri = `${BASE_URL}/course/mobile/getAllCourses?pageNo=${pageNo}&pageSize=${pageSize}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// GET COURSES BY ID -> GET
export const api_getCourseById = async (id: string) => {
  const uri = `${BASE_URL}/course/mobile/courseGetById/${id}`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// GET COURSES BY CATEGORY ID -> GET
export const api_getCourseByCategory = async (id: string, pageNo: any) => {
  const uri = `${BASE_URL}/course/mobile/getCourseByCourseCategory/${id}?pageNo=${pageNo}&pageSize=50`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// GET OTHER COURSES -> GET
export const api_getOtherCourses = async (pageNo: number) => {
  const uri = `${BASE_URL}/course/mobile/getOthersCourses?pageNo=${pageNo}&pageSize=50`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// SEARCH COURSE
export const api_searchCourses = async (name: string, filter: any) => {
  const {ratingCount, category} = filter;
  let uri = '';
  uri = `${BASE_URL}/course/mobile/searchCourses?name=${name}&ratingTo=0&ratingFrom=${ratingCount}`;
  if (category) {
    uri = `${BASE_URL}/course/mobile/searchCourses?name=${name}&ratingTo=0&ratingFrom=${ratingCount}&category=${category}`;
  }
  console.log(uri);
  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};

// GET TOP COURSES -> GET
export const api_getTopCourses = async (pageNo: number) => {
  const uri = `${BASE_URL}/course/mobile/topCourses?pageNo=${pageNo}&pageSize=50`;

  const response = await fetch(uri, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
  if (!response.isSuccess) {
    throw new Error(response.error);
  }
  return response;
};
