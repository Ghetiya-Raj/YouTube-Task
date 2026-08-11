import React from 'react'
import { useVideo } from '../hooks/useVideo'

const Home = () => {

  const {data} = useVideo();
  console.log(data);

  return (
    
    <div>
      
    </div>
  )
}

export default Home