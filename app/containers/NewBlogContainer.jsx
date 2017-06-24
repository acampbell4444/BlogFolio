import React, { Component } from 'react'
import { connect } from 'react-redux'
import NewBlog from '../components/NewBlog'
import { reduxForm } from 'redux-form'
import { createNewBlog, uploadBlogPhoto } from '../reducers/blog'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => (
  {
    handleSubmit(e) {
      e.preventDefault()
      const title = e.target.blogTitle.value
      const content = e.target.blogContent.value
      dispatch(createNewBlog({title, content}))
    },
    uploadImage(image) {
      dispatch(uploadBlogPhoto(image))
    }
  }
 )

const NewBlogForm = reduxForm({
  form: 'NewBlogForm',
})(NewBlog)

export default connect(mapStateToProps, mapDispatchToProps)(NewBlogForm)