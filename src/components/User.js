import React, {useState, useEffect} from 'react';

const User = ({user, onClick = () => {}}) => {
  const [expanded, isExpanded] = useState(false);

  useEffect(() => {
    onClick(expanded)
  })

return <div >
  <div className="name" onClick={() => isExpanded(!expanded)}>{user.name}</div>
  {expanded ? <div className="info">Tel: {user.phone}</div> : ''} 
  <hr/>
  </div>
}

export default User;