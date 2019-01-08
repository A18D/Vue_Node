import React from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import {PageTemplate} from './pageTemplate';
import {AboutMenu} from '../menus';
import MenuTraining from './training/begin';
import {Rewards} from './training/rewards';
import LessonTemplate from '../Lessons/LessonTemplate';
import {connect} from 'react-redux';

let Training = ({lessons}) => (
  <PageTemplate>
    <section>
      <Route component={AboutMenu} />
      <Route exact path="/Training/begin" component={MenuTraining} />
      <Route path="/Training/rewards" component={Rewards} />
      {lessons.map (lesson => {
        return (
          <Route
            path={`/Training/begin/lesson=${lesson.id}`}
            component={LessonTemplate}
          />
        );
      })}
    </section>
  </PageTemplate>
);

Training.propTypes = {
  lessons: PropTypes.array.isRequired,
  lessons: PropTypes.shape ({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

let mapStateToProps = state => {
  return {
    lessons: state.dataLessons.titleLessons,
  };
};

export default connect (mapStateToProps) (Training);
