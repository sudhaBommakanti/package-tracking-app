import React, { Component } from 'react';
import history from '../../history';

class SearchComponent extends Component {

    handleSubmit = () => {
        history.push('/ordersPage'); 
    }

    render() {
        return(
            <div className= "homePage">
                <form className="example" onSubmit={this.handleSubmit()}>
                    <input
                    type='text'
                    placeholder="Enter Parcel Id"
                    name='search2'
                    value={this.props.search}
                    />
                    <button type="submit">
                        <i className="fa fa-search"></i>         
                    </button>
                </form>
                         
            </div>
        );
    }
  
}
export default SearchComponent;
   

