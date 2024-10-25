'use client'

import { getUsers } from '@/api/http.service';
import UsersTable from '@/components/common/UsersTable';
import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users,setUsers] = useState([])
  const [isLoading, isSetLoading] = useState(true);


  useEffect(() => {
    isSetLoading(true);
   getUsers()
     .then((users) => {
       setUsers(users);
    isSetLoading(false);

     })
     .catch((err) => {
       console.error("Error:", err);
    isSetLoading(false);

     });
    
},[])
  
  
  return (
    <div className="bg-primary h-[100vh]">
      <UsersTable isLoading={isLoading}  data={users} />
    </div>
  );
}

export default Users;
 