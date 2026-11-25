
const LOCAL_STORAGE_COUNT_KEY = 'LOCAL_STORAGE_COUNT_KEY';

export const setCountToLS = (value) => {
  localStorage.setItem(LOCAL_STORAGE_COUNT_KEY, value);
}

export const getCountFromLS = () => {
  const rawValue = localStorage.getItem(LOCAL_STORAGE_COUNT_KEY);
  const value = parseInt(rawValue);

  if (!value) {
    return 0;
  } 

  return value;
}