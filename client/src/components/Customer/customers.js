import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCustomers, deleteCustomer } from '../../redux/actions/customerAction'
import './customers.css';
import history from "../../redux/history"
class Customers extends Component {

    constructor(props) {
        super(props);
        this.viewCustomer = this.viewCustomer.bind(this);
    }

    componentDidMount() {
        this.props.getCustomers();
        console.log("here is custom page")
        console.log(this.props.customers);
    }
    static propTypes = {
        getCustomers: PropTypes.func.isRequired,
        customers: PropTypes.object.isRequired
    }

    deleteCustomer(customer) {
        console.log(`delete customer `, customer);
        this.props.deleteCustomer(customer);
    }
    viewCustomer = (viewCustomerDetails) => {
        console.log("this.state ", viewCustomerDetails);
        history.push('/customer/view', { 'customer': viewCustomerDetails })
    }

    render() {

        const { customers } = this.props.customers;

        const customerList = (
            <div className="p-2">

                <div className="col-lg-12 table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">E-Mail</th>
                                <th scope="col">Bitcoin Wallet Id</th>
                                <th scope="col">Bitcoin Wallet balance</th>
                                <th scope="col">Ethereum Wallet Id</th>
                                <th scope="col">Ethereum Wallet balance</th>
                                <th scope="col">Max amount</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) =>
                                <tr key={index}>
                                    <td>{customer.name}</td>
                                    <td>{customer.description}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.btc_wallet_id}</td>
                                    <td>{customer.btc_wallet_balance}</td>
                                    <td>{customer.eth_wallet_id}</td>
                                    <td>{customer.eth_wallet_balance}</td>
                                    <td>{customer.max_amount}</td>
                                    <td><i className="fa fa-edit btn btn-info" onClick={() => this.viewCustomer(customer)}> </i> </td>
                                    <td><i className="fa fa-trash btn btn-danger" onClick={() => this.deleteCustomer(customer)}> </i></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        )

        return (
            <div className="row">
                <div className="col-lg-12">
                    <Link to={`/customer/new`} ><button className="btn btn-success pull-right" >New Customer</button></Link>
                </div>
                <div className="col-lg-12 text-center">
                    {
                        customers.length == 0 ? 'No Customers Create New Customers' : customerList
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customers: state.customers
})

const mapDispatchToProps = (dispatch) => ({
    getCustomers: () => dispatch(getCustomers()),
    deleteCustomer: (customer) => dispatch(deleteCustomer(customer))
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers);
