import React from 'react';

// //  Appはクラスコンポーネント
// class App extends Component {
//   render() {
//     // const greeting = "Hi!"
//     // const dom = <h1 className="foo">{greeting}</h1>;
//     // return dom;
//     // return <input type="text" onChange={()=>{console.log("I am Clicked!")}} />
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         < input type = "text"
//         onChange = {
//           () => {
//             console.log("I am Clicked!")
//           }
//         }
//         />
//       </React.Fragment>
//     )  
//   }
// }

// 関数コンポーネント、ファンクションコンポーネント
const App = () =>{
  return (
  <div>
    <Cat />
    <Cat />
  </div>
  )
}
const Cat = () => {
  return (
  <div>Meow!</div>
  )
}
export default App;
