import {useState, useEffect} from 'react';
import {setCountToLS, getCountFromLS} from './localStorage';

export const useLocalStorageCount = () => {
  const [count, setCount] = useState(undefined);

    useEffect(() => {
      setTimeout(() => setCount(getCountFromLS()), 5000);
    }, []); // mount + unmount (при наличии функции очистки)
  
    useEffect(() => {
      // console.log('Count updated')
      if (count === undefined) {
        return;
      }
      setCountToLS(count);
  
      return () => {
        // console.log('Clear FN, [count]');
      }
    }, [count]) // mount + изменение count + unmount (при наличии функции очистки)
  
    useEffect(() => {
      // console.log('Component updated')
      return () => {
        // console.log('Clear FN, DEPS is empty');
      }
    }); // mount + каждый рендер

    return {
      count,
      setCount
    };
}

export const useCount = () => {
  const [count, setCount] = useState(0);
  return {
    count,
    setCount
  }
}