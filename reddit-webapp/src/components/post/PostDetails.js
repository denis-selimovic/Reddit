import React from "react";
import { connect } from "react-redux";
import { fetchPost } from "../../actions";

class PostDetails extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }
    render() {
        return (
            <div>PostDetails</div>
        );
    }
}

const mapStateToProps = state => {
    return { post: state.selectedPost };
};

export default connect(mapStateToProps, { fetchPost })(PostDetails);
