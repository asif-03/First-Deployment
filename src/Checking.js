// import React, { Component } from 'react';


// class Checking extends Component {

//   constructor(props) {
//     super(props)


//     this.state = {

//       data1: [],
//       data2: [],
//       data3: []

//     }
//   }

//   async componentDidMount() {
//     console.log('prateek')

//     const url = "https://jsonplaceholder.typicode.com/users/1/todos";
//     const response = await fetch(url);
//     const result = await response.json()

//     console.log(result)
//     this.setState({
//       data1: result,
//       isOpened: false


//     })


//   }

//   showF = () => {


//     this.setState({

//       isOpen: true
//     })
//   }

//   render() {

//     return (

//       <>
//         <div>
//           what is happening...
//           <div isOpen={this.state.isOpened}>
//             {this.state.data1}
//           </div>
//           <button onClick={this.showF}>click here </button>

//         </div>

//       </>
//     )

//   }

// }


// export default Checking