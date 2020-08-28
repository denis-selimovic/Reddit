import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions";

class PostDetails extends React.Component {

    componentDidMount() {

    }
}

const mapStateToProps = state => {
    return { comments: state.comments };
};

export default connect(mapStateToProps, { fetchComments })(PostDetails);
