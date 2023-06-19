const API_PATH = 'http://localhost:9000'

export async function getWitchCardByPower(power: string) {
try {
  const response = await fetch(`${API_PATH}/witch/${power}`)
  const data = await response.json()
  return data
} catch (error) {
  console.error(error)
  return null
}
}