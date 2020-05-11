import React, {Component} from 'react';
import Filter from './components/Filter';
import RecordTable from './components/RecordTable';

class App extends Component {
  ascendingName = ({target, people}) => {
    if(target.checked){
        let names = []
        for (let i = 0; i < people.length; i++){
            names.push(people[i].name)
        }
        return names.sort()

    }else{
        //Do something
    }
    
}

descendingAge = ({target, people}) => {
  if(target.checked){
    let age = []
    for (let i = 0; i < people.length; i++){
        age.push(people[i].dob)
    }
    age.sort(function (a, b) {
      if (a > b) {
          return -1;
      }
      if (b > a) {
          return 1;
      }
      return 0;
  })

}else{
    //Do something
}
}
  render() {
    return (
      <div className="container-fluid">
        <center><h1>Birthday Records</h1></center>
        <Filter asendingName={this.ascendingName} descendingAge={this.descendingAge}/>
        <RecordTable></RecordTable>
      </div>
    );
  }
}

export default App;
