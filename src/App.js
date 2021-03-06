import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TableTemplate from "./TableTemplate";
import {table1Headers} from "./selectors";
import MapComponent from "./MapComponent";
class App extends Component {
  constructor() {
    super();
    this.state = {
      table1Data: []
      // table1Data: [],
      // table1Data: [],
    };
  }

  fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1", {})
      .then(res => {
        //on success-> update the users state
        this.setState({
          table1Data: [res.data]
        });
      })
  }

  componentDidMount() {
    this.fetchData();  //define similar functions for different api's
  }

  render() {
    const {table1Data} = this.state;
    const markers= [{coordinates : {lat:23, lng: 75}, radius: 1000}, {coordinates : {lat:22, lng: 74}, radius: 5000}]
    return (
      <div className="App">
        <TableTemplate tableColumnHeader={table1Headers} tableDetails={table1Data}/>
        <MapComponent markers={markers} />
      </div>
    );
  }
}

export default App;
