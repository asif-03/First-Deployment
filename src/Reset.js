
function reset() {

  async function getData() {

    const url = "https://jsonplaceholder.typicode.com/users/1/todos";
    const response = await fetch(url);
    const result = await response.json()
    console.log(result)

    this.setState({
      dataBase: result,
      filterDB: result,
      displayData: result

    })

  }
}