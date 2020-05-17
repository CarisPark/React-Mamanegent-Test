import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


/**
 * @ body부분
 */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           CodeTest
//         </p>
//         {/* <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'CodeTest1',
  'etc': 'testData1'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'CodeTest2',
  'etc': 'testData2'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'CodeTest3',
  'etc': 'testData3'
}
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                etc={c.etc}
                />
              )
          })
        }
      </div>
    );
  }
}

export default App;
