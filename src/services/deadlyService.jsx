export const getAllDeadlyPlants = () => {
  return fetch("http://localhost:8088/deadlyPlants").then((res) => res.json())
}