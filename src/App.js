import React, {useEffect} from 'react';
import { fetchUsers} from './actions/actionCreators';
import { connect } from 'react-redux';
import User from './components/User';


const App = ({dispatch, users, loading, error}) => {

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  if(loading) return <div>please wait ...</div>
  if(error) return <div>something unexpected happened, please try again</div>
  return (
    <div className="container-fluid">
      <h3 className="text-info">Users List</h3>
      <span class="border-bottom-0"></span>
      {users.map(user => {
        return <User key={user.id} user={user}/>
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(App);
