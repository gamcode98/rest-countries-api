const getAllCountries = async (): Promise<Response> => {
  return await fetch('/data/data.json')
}

export { getAllCountries }
