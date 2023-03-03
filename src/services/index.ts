const getAllCountries = async (): Promise<Response> => {
  return await fetch('/src/data/data.json')
}

export { getAllCountries }
