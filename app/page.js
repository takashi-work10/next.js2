export const dynamic = "force-dynamic"

const getAllItems = async () => {
  const response = await fetch("http://localhost:3000/api/items/readall")
  const jsonData = await response.json()
  const allItems = jsonData.allItems
  return allItems
}

const ReadAllItems = async () => {
  const allItems = await getAllItems()
  return(
    <div>
      <h1 className="h1-style">こんにちは</h1>
      {allItems.map(item => console.log(item))}
    </div>
  )
}

export default ReadAllItems