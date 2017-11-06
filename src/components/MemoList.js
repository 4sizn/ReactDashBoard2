import React from 'react';
import { Memo } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class MemoList extends React.Component {
    render() {

        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (
                    <Memo
                        data={memo}
                        ownership={ memo.writer===this.props.currentUser }
                        key={memo._id}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                        index={i}
                    />
                );
            });
        };

        return(
            <div>
                <ReactCSSTransitionGroup
                    transitionName="memo"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={1000}>
                    {mapToComponents(this.props.data)}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

MemoList.propTypes = {
    data: React.PropTypes.array,
    currentUser: React.PropTypes.string,
    onEdit: React.PropTypes.func,
    onRemove: React.PropTypes.func
};

MemoList.defaultProps = {
    data: [],
    currentUser: '',
    onEdit: (id, index, contents) => {
        console.error('onEdit not defined');
    },
    onRemove: (id, index) => {
        console.error('onRemove not defined');
    }
};

export default MemoList;
