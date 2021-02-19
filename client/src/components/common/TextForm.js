import React from 'react';



class CustomerDetails extends React.Component {
    
  render() {
      return (
          <div>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
      customers: state.customers
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      updateCustomer: customer => dispatch(updateCustomer(customer))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);