const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStore = [];

const generateNewCard = (taskData) => `
    <div class="col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-outline-danger"><i
                    class="fas fa-trash-alt"></i></button>
        </div>
        <img src=${taskData.imageUrl}
            class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${taskData.taskTitle}</h5>
            <p class="card-text">${taskData.taskDescription}</p>
            <a href="#" class="btn btn-warning">${taskData.taskType}</a>
        </div>
        <div class="card-footer ">
            <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
        </div>
    </div>
    </div>
`;

const loadInitialCardData = () => {
    // localstorage to get task card data

    const getCardData = localStorage.getItem("task");
    // convert from string to normal object
    const {cards} = JSON.parse(getCardData);
    // loop over those array of task objecs to create HTML Card, inject it to DOM
cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(cardObject));
    // Update our globalStore
    globalStore.push(cardObject);
});
    

};


const saveChanges = () => {
    const taskData = {
        id:`${Date.now()}`, // unique number for id
        imageUrl: document.getElementById("imageUrl").value,
        taskTitle: document.getElementById("taskTitle").value,
        taskType: document.getElementById("taskType").value,
        taskDescription: document.getElementById("taskDescription").value,
    };

    // console.log(taskData);
    const newCard = `
            

        
    `;

    taskContainer.insertAdjacentHTML("beforeend", generateNewCard(taskData));

    globalStore.push(taskData);

    localStorage.setItem("task", JSON.stringify({cards:globalStore}));   //here "task" has been used for Id, so that browser can find the specific data for the application
    
};