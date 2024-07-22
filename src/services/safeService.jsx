export const getAllSafePlants = () => {
  return fetch("http://localhost:8088/safePlants").then((res) => res.json())
}