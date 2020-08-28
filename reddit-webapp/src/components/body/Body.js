import React  from 'react';
import { connect } from 'react-redux';
import { fetchPosts, fetchTopics } from "../../actions";
import { getUser, removeUser } from "../../user";
import PostFilter from "./PostFilter";
import PostList from './PostList';

class Body extends React.Component {

    clearStorage = () => {
        removeUser();
    };

    componentDidMount() {
        this.props.fetchPosts();
        if(getUser()) this.props.fetchTopics();
        window.addEventListener('beforeunload', removeUser)
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', removeUser);
    }

    render() {
        return (
            <div className="ui container" style={{backgroundColor: '#d1d7e8'}}>
                <PostFilter/>
                <div className="ui horizontal divider"/>
                <PostList posts={this.props.posts} topics={this.props.topics}/>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return { posts: Object.values(state.posts), topics: Object.values(state.userTopics) };
};

export default connect(mapStateToProps, { fetchPosts, fetchTopics })(Body);
