import React from 'react';
import { Field, reduxForm } from "redux-form";

class CreatePost extends React.Component {

    renderInput = ({ label, type, input, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type}/>
            </div>
        );
    }

    onSubmit = formValues => this.props.onSubmit(formValues);

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field label="Enter post title" name="title" type="text" component={this.renderInput}/>
                <Field label="Enter text" name="text" type="textarea" component={this.renderInput} />
            </form>
        );
    }
}

export default reduxForm({
    name: 'createPostForm'
})(CreatePost);
