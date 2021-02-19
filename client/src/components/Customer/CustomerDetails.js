import React from 'react';
import { updateCustomer } from '../../redux/actions/customerAction';
import { connect } from 'react-redux';
import history from '../../redux/history'
class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    const location = history.location
    this.state = location.state;
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleChangeFor = (propertyName) => (event) => {
    const { customer } = this.state;
    const customerDetails = {
      ...customer,
      [propertyName]: event.target.value
    };
    this.setState({ customer: customerDetails });
  }

  handleUpdate(event) {
    event.preventDefault();
    console.log("this.state ", this.state)
    console.log("this.props ", this.props)
    this.props.updateCustomer(this.state.customer);
  }

  render() {

    return (
      <div className="customerDetail containter">
        <h2>Customer Detail</h2>
        {

          <form onSubmit={this.handleUpdate}>
            <div className="form-group">
              <label htmlFor="name">Customer Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                autoComplete="off"
                onChange={this.handleChangeFor('name')} value={this.state.customer.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                autoComplete="off"
                onChange={this.handleChangeFor('description')} value={this.state.customer.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                autoComplete="off"
                onChange={this.handleChangeFor('email')} value={this.state.customer.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Bitcoin Wallet Id</label>
              <input
                type="text"
                className="form-control"
                id="btc_wallet_id"
                name="btc_wallet_id"
                autoComplete="off"
                onChange={this.handleChangeFor('btc_wallet_id')} value={this.state.customer.btc_wallet_id}
              />
            </div>
            <div className="form-group">
              <label htmlFor="btc_wallet_balance">Bitcoin Wallet balance</label>
              <input
                type="text"
                className="form-control"
                id="btc_wallet_balance"
                name="btc_wallet_balance"
                autoComplete="off"
                onChange={this.handleChangeFor('btc_wallet_balance')} value={this.state.customer.btc_wallet_balance}
              />
            </div>
            <div className="form-group">
              <label htmlFor="eth_wallet_id">Ethereum Wallet Id</label>
              <input
                type="text"
                className="form-control"
                id="eth_wallet_id"
                name="eth_wallet_id"
                autoComplete="off"
                onChange={this.handleChangeFor('eth_wallet_id')} value={this.state.customer.eth_wallet_id}
              />
            </div>
            <div className="form-group">
              <label htmlFor="eth_wallet_balance">Ethereum Wallet balance</label>
              <input
                type="text"
                className="form-control"
                id="eth_wallet_balance"
                name="eth_wallet_balance"
                autoComplete="off"
                onChange={this.handleChangeFor('eth_wallet_balance')} value={this.state.customer.eth_wallet_balance}
              />
            </div>
            <div className="form-group">
              <label htmlFor="max_amount">Max Amount</label>
              <input
                type="text"
                className="form-control"
                id="max_amount"
                name="max_amount"
                autoComplete="off"
                onChange={this.handleChangeFor('max_amount')} value={this.state.customer.max_amount}
              />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              UPDATE
            </button>
          </form>

        }

      </div>

    );
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