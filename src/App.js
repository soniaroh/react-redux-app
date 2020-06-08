import React from 'react';
import { fetchUsers} from './actions/actionCreators';
import { connect } from 'react-redux';
import User from './components/User';
import { filterUsers } from './utils'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchedTerm: '',
      isFiltering: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  handleFilter = () => {
    this.setState({ isFiltering: !this.state.isFiltering})
  }
  
  handleChange = e => {
    this.setState({searchedTerm: e.target.value})
  }

  render() { 
    const {isFiltering, searchedTerm} = this.state;
    const {loading, error, users } = this.props;
    let filteredUsers = filterUsers(users, searchedTerm).sort();
    if(loading) return <div>please wait ...</div>
    if(error) return <div>something unexpected happened, please try again</div>
    return (
      <div className="container-fluid" data-test="appComponent">
        <h3 className="text-info">Users List</h3>
        <input className="form-control" type="text" placeholder="Search..." value={searchedTerm} onChange={this.handleChange}/>
        <button type="submit" className="btn btn-primary mb-2" onClick={() => {this.handleFilter(true)}}>Submit</button>
        {isFiltering && searchedTerm ? 
        filteredUsers.map(user => <User key={user.id} user={user}/>) 
        : 
        users.map(user => <User key={user.id} user={user}/>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps, {fetchUsers})(App);
