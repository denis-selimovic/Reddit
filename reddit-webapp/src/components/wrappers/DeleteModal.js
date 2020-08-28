import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { deletePost } from "../../actions";
import history from "../../history";

const DeleteModal = props => {

    const { deletePost, match } = props;
    const { topic, id } = match.params;
    const cancel = () => history.push("/");
    const action = () => deletePost(topic, id);

    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active" onClick={() => cancel()}>
            <div className="ui standard modal visible active" onClick={e => e.stopPropagation()}>
                <div className="ui placeholder segment">
                    <div className="ui icon header">
                        <i className="terminal icon"/>
                        Are you sure you want to delete this post?
                    </div>
                    <div className="ui buttons">
                        <div className="ui button" onClick={() => cancel()}>Cancel</div>
                        <div className="ui red button" onClick={() => action()}>Delete</div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
};

export default connect(null, { deletePost })(DeleteModal);
