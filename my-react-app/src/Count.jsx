import { useEffect, useState } from "react"
import { useCount } from "./useCount"

export const Count = function ({countValue}) {

  useEffect(() => {
    console.log('Count mounted');

    return () => {
      console.log('Count unmounted');
    }
  }, []); // mount + unmount

  return (
    <>
      <h2>{countValue}</h2>
    </>
  )
}


// export const Count = function () {

//   const {count, setCount} = useCount();

//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={() => {setCount(count + 1)}}>Update count</button>
//     </>
//   )
// }
