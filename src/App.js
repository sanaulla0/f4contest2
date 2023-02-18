import React, { useState, useEffect } from 'react';
import './App.css';
function MyComponent() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const[likes, setLikes] = useState(0);

  // const[value,setValue] = useState(0);

  async function fetchData() {
    setIsLoading(true);
    const response = await fetch(` https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=0`);
    const newData = await response.json();
    setIsLoading(false);
    return newData;
  }
  
  useEffect(() => {
    fetchData().then(newData => setData([...data, ...newData]));
  }, [page]);
  
  function handleLoadMore() {
    setPage(page + 1);
    
  }
  // function change(){

  //  setLikes(likes+1);
  //   return setLikes;
  // }
  const handleLike = (id) => {
    setLikes((item) => ({ ...item, [id]: (item[id] || 0) + 1 }));
    }
    
  
  function handleChange(){
       let byte = [...setData]

  }
  return (
    <div>
    <input className='text1' type='text' placeholder='Search' onChange={handleChange} />
    <div className='div'>
       
      {data.map(item => (
        <div key={item.id}>
          { 
        <div className='main'>
          <div className='imm'><img src="https://picsum.photos/200?random=${post.id}" /></div> <br></br>
          <div className='text'>
          user id : {item.id}  <br></br>
            title : {item.title} <br></br>
            Likes : {likes[item.id] || 0} <br></br>
            <button className="click" onClick={() => handleLike(item.id)}>Set likes</button>
            {/* <button onClick={() => handleLike(item.id)}>Like ({likes[item.id] || 0})</button> */}
            </div>
        </div>  
          }
          <br></br>
        </div> 
      ))}
     
    </div>
    {isLoading && <div>Loading...</div>} <br></br>
      {!isLoading && (
        <button className='btn' onClick={handleLoadMore}>Load More Posts</button>
      )}
    </div>
  );

      }
export default MyComponent;
