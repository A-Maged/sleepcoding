import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SearchForm = props => {
  const { handleSubmit } = props
  return (
      <div className="search">
          <form onSubmit={handleSubmit}>
              <i className="fas fa-search"></i>
              <Field name="search" component="input" type="text" placeholder="search" />
          </form>
      </div>
  )
}




SearchForm = reduxForm({
  // a unique name for the form
  form: 'search-form'
})(SearchForm)

export default SearchForm
