import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { useState } from 'react'
import { color } from '@mui/system';

const UserDetails = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // console.log(data);
  }, []);



  const rows = data.map((row)=>({
        id:row.id,
        title:row.title,
        body:row.body
  }))

  const columns = [
    { field: 'id', width: 100 },
    { field: 'title', width: 150 },
    {
      field: 'body',
      width: 400
    }
  ]


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }


  return (
    <div className='userdetail_container' style={{ display: 'flex', height: '600px',flexGrow:1,width:'700px'}}>
      <DataGrid 
      rows={rows}
      columns={columns}

      

      />
        
      

    </div>
  )
}

export default UserDetails