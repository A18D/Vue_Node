import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {connect} from 'react-redux';

class MenuTraining extends PureComponent {
  static propTypes = {
    lessons: PropTypes.array.isRequired,
    lessons: PropTypes.shape ({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired,
  };

  render () {
    return (
      <div>
        <div>
          <ul id="navbar-BeginContainer">
            <li className="leftRightImg">
              <img src="./src/images/leftImageBegin.png" alt="логотип" />
            </li>

            <li className="centerMenu">
              <Navbar fluid className="navbar-Begin">
                <Navbar.Toggle />
                <Navbar.Collapse>
                  <div id="beginMenu">
                    <Nav>
                      {this.props.lessons.map (lesson => {
                        return (
                          <LinkContainer
                            to={`/Training/begin/lesson=${lesson.id}`}
                            className="navbarborder"
                          >
                            <NavItem>
                              {lesson.title}
                            </NavItem>
                          </LinkContainer>
                        );
                      })}
                    </Nav>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </li>

            <li className="leftRightImg">
              <img src="./src/images/rightImageBegin.png" alt="логотип" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    lessons: state.dataLessons.titleLessons,
  };
};

export default connect (mapStateToProps) (MenuTraining);
