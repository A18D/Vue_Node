import stateData from '../data/initialState';

import {LOAD_TTITLE_LESSONS} from '../constants';
import store from './../store';

export default action => {
  switch (action) {
    case LOAD_TTITLE_LESSONS: {
      const stateStore = store.getState ();
      const lessons = stateStore.dataLessons.titleLessons;

      return lessons;
    }

    default:
      return stateData;
  }
};
