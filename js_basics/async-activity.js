// Create a simple to-do list
// Objective is to practice OOP classes and callbacks, promises and async await
/*
    Step 1: Create a class Task and TaskManager

    Step 2: Task manager will have a properties of:
     id: number,
    title: string,
    description:string,
    createdAt: date. example new Date()

    Step 3: Task manager will responsible for adding, updating, lisiting and deleting a list. Also listing all the lists.
  a. store all the list in an array
    b. Create a function to add a list to my array of lists
    c. Create a function to list(console) all my lists
    d. Create a function to update any list from my array (Use an id)
    e. Create a function to delete a ist from my array of lists.

*/


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
  
    // Function to add a task to the list asynchronously
    async addTask(id, title, description) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const task = new Task(id, title, description);
          this.taskList.push(task);
          resolve(task);
        }, 2000); // Simulating an asynchronous operation with a delay of 2 second
      });
    }
  
    // Function to list all tasks asynchronously
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
        }, 3000); // Simulating an asynchronous operation with a delay of 3 second
      });
    }
  
    // Function to update a task by ID asynchronously
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
        }, 2000); // Simulating an asynchronous operation with a delay of 2 second
      });
    }
  
    // Function to delete a task by ID asynchronously
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
        }, 2000); // Simulating an asynchronous operation with a delay of 2 second
      });
    }
  }
  
  // Example usage:
  async function main() {
    const taskManager = new TaskManager();
  
    // Use async/await to add tasks
    await taskManager.addTask(1, "Complete Project", "Finish the software project.");
    await taskManager.addTask(2, "Buy Groceries", "Purchase items from the grocery store.");
  
    // Use async/await to list tasks
    await taskManager.listTasks();
  
    // Use async/await to update a task
    await taskManager.updateTask(1, "Finish Coding Project", "Complete coding tasks in the project.");
  
    // Use async/await to delete a task
    await taskManager.deleteTask(2);
  
    // Use async/await to list tasks again
    await taskManager.listTasks();
  }
  
  main();
  




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
  