import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, multiplication } from './counterSlice';

const Home = () => {
    // const sample=useSelector((state)=>state.counter)
    const {count}=useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    // console.log(sample);
  return (
    <div>
        {/* <h1>{sample.count}</h1> */}
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(multiplication())}>multiplication</button>


    </div>
  )
}

export default Home