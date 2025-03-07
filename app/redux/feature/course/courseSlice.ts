import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export interface Course {
    sections: [any];
    _id: string;
}

export interface initialState {
    course: null | Course;
    video: any;
}

const initialState: initialState = {
    course: null,
    video: []
};

export const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        setCourse: (state, action: PayloadAction<any>) => {
            state.course = action.payload;
        },
        addVideo: (state, action: PayloadAction<any>) => {
            state.video = [...state.video, action.payload]
        },
        clearVideo: (state) => {
            state.video = [];
        },
    },
});

export const { setCourse, addVideo, clearVideo } = courseSlice.actions;

// ===> SELECTORS
export const courseSelector = (s: any) => s.course.course;
export const courseVideoSelector = (s: any) => s.course.video;

export default courseSlice.reducer;
