const setStorage = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const getStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
};

export { setStorage, getStorage };
