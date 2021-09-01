class ToolTip{

}

class ProjectItems{

}

class ProjectList{
  constructor(type){
    const PrjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(PrjItems);

  }
}

class App{
  static init(){
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');

  };

}

App.init();

