export default function useLocalStorage(key) {
    let localData = localStorage.getItem(key);
    return (localData ? JSON.parse(localData) : null); 
};