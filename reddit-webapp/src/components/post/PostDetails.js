import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../actions";

class PostDetails extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchComments(id);
    }
    render() {
        return (
            <div>PostDetails</div>
        );
    }
}

const mapStateToProps = state => {
    return { comments: Object.values(state.comments) };
};

export default connect(mapStateToProps, { fetchComments })(PostDetails);
