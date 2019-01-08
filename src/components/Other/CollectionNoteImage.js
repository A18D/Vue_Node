import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class TipCollectionNoteImage extends PureComponent {
  static propTypes = {
    ArrData: PropTypes.array.isRequired,
    ArrData: PropTypes.shape ({
      image: PropTypes.string.isRequired,
      sign: PropTypes.string.isRequired,
    }).isRequired,
  };

  render () {
    return (
      <div class="row">
        {this.props.ArrData.map (data => {
          return (
            <div key={data.sign} class="col-lg-3 col-md-4 col-6 thumb">
              <div key={data.sign} class="VerticalContainer">
                <a
                  key={data.sign}
                  data-fancybox="gallery"
                  href={`./src/images/${data.image}`}
                  target="_blank"
                >
                  <img
                    key={data.sign}
                    class="tipDroppableImg"
                    src={`./src/images/${data.image}`}
                    alt="изображение"
                    height="100px"
                  />
                </a>
                <input
                  key={data.sign}
                  type="text"
                  class="tipDroppableInput"
                  name="inputDroppable"
                  value={data.sign}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
