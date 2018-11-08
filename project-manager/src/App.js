import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';


class App extends Component {
  constructor(){
    super();
    this.state ={
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommenrce Site',
        category: 'Web Development'
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">

       This is my app
       <AddProject addProject={this.handleAddProject.bind(this)}/>
      <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
