import React from 'react'
import { connect } from 'react-redux'
import { increment } from '../../AC'

const Counter = props => {
  const handleIncrement = () => {
    props.increment()
  }

  return (
    <div>
      <h2>{ props.counter }</h2>
      <button onClick={ handleIncrement }>Increment me</button>
    </div>
  )
}

const mapStateToProps = state => ({ counter: state.count })

const mapToDispatch = { increment }

// export default connect(mapStateToProps, mapToDispatch)(Counter)
export default connect(state => ({
  counter: state.count
}), { increment })(Counter)