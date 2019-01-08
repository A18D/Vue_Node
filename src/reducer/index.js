import {currentTaskReducer, countRightAnswersReducer, countPoints, countCoins} from './counter';
import {changeShowTipReducer} from './flag';
import dataLessons from './initState';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers ({
  valueShowTip:changeShowTipReducer,
  routing: routerReducer,
  currentTask: currentTaskReducer,
  countRightAnswers: countRightAnswersReducer,
  countPoints: countPoints,
  countCoins: countCoins,
  dataLessons: dataLessons
});
