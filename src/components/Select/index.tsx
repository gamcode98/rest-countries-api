
const Select = (): JSX.Element => {
  return (
    <select name='select' className='bg-white p-4 mb-4'>
      <option value='default'>Filter by Region</option>
      <option value='africa'>Africa</option>
      <option value='america'>America</option>
      <option value='asia'>Asia</option>
      <option value='europe'>Europe</option>
      <option value='oceania'>Oceania</option>
    </select>
  )
}

export { Select }
