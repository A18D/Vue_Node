import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class LessonSuccess extends PureComponent {
  static propTypes = {
    result: PropTypes.string.isRequired,
  };

  render () {
    return (
      <img
        src={`./src/images/${this.props.result}.png`}
        alt="Результат выполнения задания"
        class="taskResult"
      />
    );
  }
}
