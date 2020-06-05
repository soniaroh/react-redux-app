import React, {useEffect, useState} from 'react';
import { fetchUsers} from './actions/actionCreators';
import { connect } from 'react-redux';
import User from './components/User';

const App = ({dispatch, users, loading, error}) => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const [isFiltering, handleFilter] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  const handleChange = e => {
    setSearchedTerm(e.target.value)
  }

  const filterUsers = (users, searchedTerm) => {
    return users.filter(user => user.name.toLowerCase().includes(searchedTerm))
  }

  let filteredUsers = filterUsers(users, searchedTerm);

  if(loading) return <div>please wait ...</div>
  if(error) return <div>something unexpected happened, please try again</div>
  return (
    <div className="container-fluid">
      <h3 className="text-info">Users List</h3>
      <input className="form-control" type="text" placeHolder="Search..." value={searchedTerm} onChange={handleChange}/>
      <button type="submit" className="btn btn-primary mb-2" onClick={() => {handleFilter(true)}}>Submit</button>
      {isFiltering && searchedTerm ? 
      filteredUsers.map(user => <User key={user.id} user={user}/>) 
      : 
      users.map(user => <User key={user.id} user={user}/>)
      }
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(App);
