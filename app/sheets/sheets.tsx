import {registerSheet} from 'react-native-actions-sheet';
import GenderSelectSheet from './GenderSelectSheet';
import CountryListSheet from './CountryListSheet';
import CourseModeSheet from './CourseMode';
import FilterSheet from './FilterSheet';
import CourseSheet from './Enroll/CourseSheet';
import TagSheet from './Enroll/TagSheet';

export const SHEETS = {
  GenderSelectSheet: 'GenderSelectSheet',
  CountryListSheet: 'CountryListSheet',
  CourseModeSheet: 'CourseModeSheet',
  FilterSheet: 'FilterSheet',
  CourseSheet: 'CourseSheet',
  TagSheet: 'TagSheet',
};

registerSheet(SHEETS.GenderSelectSheet, GenderSelectSheet);
registerSheet(SHEETS.CountryListSheet, CountryListSheet);
registerSheet(SHEETS.CourseModeSheet, CourseModeSheet);
registerSheet(SHEETS.FilterSheet, FilterSheet);
registerSheet(SHEETS.CourseSheet, CourseSheet);
registerSheet(SHEETS.TagSheet, TagSheet);
