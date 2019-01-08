import {ENABLE_TIP, DISABLE_TIP} from '../constants';

export const changeShowTipReducer = (val, action) => {
  const {type} = action;

  switch (type) {
    case ENABLE_TIP: {
      val = true;
      return val;
    }
    case DISABLE_TIP: {
      val = false;
      return val;
    }
    default:
      if (!val) val = false;
  }

  return val;
};
