export const getAllSafePlants = () => {
  return fetch("http://localhost:8088/safePlants").then((res) => res.json())
}

export const getSafePlantsById = (id) => {
  return fetch (`http://localhost:8088/safePlants/${id}`).then((res) => res.json())
}