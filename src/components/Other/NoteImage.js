import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class TipNoteImage extends PureComponent {
  static propTypes = {
    numberTip: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  render () {
    return (
      <div class="VerticalContainer thumb">
        <p align="center">{this.props.note}</p>
        <a
          data-fancybox="gallery"
          href={`./src/images/${this.props.image}`}
          target="_blank"
        >
          <img
            src={`./src/images/${this.props.image}`}
            alt="изображение"
            class="tipDroppableImg"
            height="100px"
          />
        </a>
      </div>
    );
  }
}
