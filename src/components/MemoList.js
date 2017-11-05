import React, { Component } from "react";
import Memo from "../components/Memo";
import PropTypes from 'prop-types';

class MemoList extends Component {
  render() {
    const maptoComponents = data => {
      return data.map((memo, i) => {
        return (
          <Memo
            data={memo}
            ownership={memo.writer === this.props.currentUser}
            key={memo._id}
          />
        );
      });
    };

    return <div>{maptoComponents(this.props.data)}</div>;
  }
}

MemoList.propTypes = {
  data: PropTypes.array,
  currentUser: PropTypes.string
};

MemoList.defaultProps = {
  data: [],
  currentUser: ""
};

export default MemoList;