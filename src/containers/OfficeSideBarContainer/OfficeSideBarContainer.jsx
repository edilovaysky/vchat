import React, { Component } from 'react';
import { connect } from 'react-redux';
import { OfficeSideBar } from 'components/OfficeSideBar';

class SideBarContainer extends Component {
  componentWillMount() {
    this.setState({ status: this.props.user.user.status });
  }
  render() {
    const { onSuccess } = this.props;
    const status = this.state.status;
    return (
      <>
        <OfficeSideBar status={status} onSuccess={onSuccess} />
      </>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    user: state.userAuth.entries,
  };
}

export const OfficeSideBarContainer = connect(mapStateToProps)(
  SideBarContainer
);
