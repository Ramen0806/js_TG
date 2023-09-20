class Task {
    constructor(id, title, description) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.createdAt = new Date();
    }
  }
  
  class TaskManager {
    constructor() {
      this.taskList = [];
    }
  
    async addTask(id, title, description) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const task = new Task(id, title, description);
          this.taskList.push(task);
          resolve(task);
        }, 2000); 
      });
    }
  
    async listTasks() {
      return new Promise((resolve) => {
        setTimeout(() => {
          for (const task of this.taskList) {
            console.log(`Task ID: ${task.id}`);
            console.log(`Title: ${task.title}`);
            console.log(`Description: ${task.description}`);
            console.log(`Created At: ${task.createdAt}`);
            console.log("-------------------------");
          }
          resolve();
        }, 3000); 
      });
    }
  
  
    async updateTask(id, newTitle, newDescription) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const taskToUpdate = this.taskList.find(task => task.id === id);
          if (taskToUpdate) {
            taskToUpdate.title = newTitle;
            taskToUpdate.description = newDescription;
            resolve();
          } else {
            console.log(`Task with ID ${id} not found.`);
            resolve();
          }
        }, 2000); 
      });
    }
  
   
    async deleteTask(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const taskIndex = this.taskList.findIndex(task => task.id === id);
          if (taskIndex !== -1) {
            this.taskList.splice(taskIndex, 1);
            resolve();
          } else {
            console.log(`Task with ID ${id} not found.`);
            resolve();
          }
        }, 2000); 
      });
    }
  }
  
 
  async function main() {
    const taskManager = new TaskManager();
  
    await taskManager.addTask(1, "Complete Project", "Finish the software project.");
    await taskManager.addTask(2, "Buy Groceries", "Purchase items from the grocery store.");
  

    await taskManager.listTasks();
  
 
    await taskManager.updateTask(1, "Finish Coding Project", "Complete coding tasks in the project.");
  

    await taskManager.deleteTask(2);
  

    await taskManager.listTasks();
  }
  
  main();
  