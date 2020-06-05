import React, {useState} from 'react';

const User = ({user}) => {
  const [expanded, isExpanded] = useState(false);

return <div onClick={() => isExpanded(!expanded)}>
  <div className="info">{user.name}</div>
  {expanded ? <div className="info">Tel: {user.phone}</div> : ''} 
  <hr/>
  </div>
}

export default User;