function toDoList(){
  return {
    input: '',
    taskList: [],
    connect(){
      if (localStorage.getItem('taskList')?.length) {
        this.taskList = JSON.parse(localStorage.getItem('taskList'));
      }
     
    },
    addToDo(){
      this.taskList.push({
        task: this.input,
        completed: false,
      });
      this.input = '';
      localStorage.setItem('taskList', JSON.stringify(this.taskList));

    },
    clearAllTasks(){
      this.input = '';
      this.taskList = [];
      localStorage.setItem('taskList', '');
    },
    clearCompletedTasks(){
      this.input = '';
      this.taskList = this.taskList.filter((task) => task.completed != true);
      localStorage.setItem('taskList', JSON.stringify(this.taskList));
    }
  }
}
