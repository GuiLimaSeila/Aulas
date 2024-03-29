let takIndex = -1

class Task {
    constructor(id, title, status) {
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList {
    constructor() {
        this.tasks = []
    }
    addPost(task) {
        this.tasks.push(task)
    }
    verified(){
        taskList.tasks.forEach((task, tasks) =>{
            if(tasks != true){
            this[task.status] = true;
        } else{
            this[task.status] = false;
        }
    })
    document.getElementById("textPost").classList.remove("lineVerify")
}
}



function randomID() {
    let id = Math.floor(Math.random() * 9999)
}

const taskList = new TaskList()

function creatTask() {
    let title = document.getElementById("resume").value;
    const nuevo = new Task(randomID(), title, false)
    taskList.addPost(nuevo)
    if (title) {
        if (takIndex == -1) {
            cleanFields();
            showPosts();
        } else {
            taskList.tasks[takIndex] = {
                title,
            };
        }
        cleanFields();
        showPosts();
        takIndex = -1
    } else {
        document.getElementById("addSomething").classList.remove("hidden")
    }
}
function cleanFields() {
    document.getElementById("resume").value = "";
}

function showPosts() {
    let showContent = "";

    taskList.tasks.forEach((nuevo, index) => {
        showContent += `
        <div class="itemPost">
        <div class="textItem">
            <p id="textPost">${nuevo.title}</p>
        </div>
        <div class="buttonArea">
            <button onclick="verified(${index})" class="checkButton"><i class="fa-solid fa-check"></i></button>
            <button onclick="editPost(${index})" class="editButton"><i class="fa-solid fa-pen"></i></button>
            <button onclick="removePost(${index})" class="deletButton"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
            `;
    });

    document.getElementById("postArea").innerHTML = showContent;
    title = document.getElementById("resume").value = "";
}
function removePost(index) {
    taskList.tasks.splice(index, 1);
    showPosts();

}

function editPost(index) {
    const post = taskList.tasks[index];
    document.getElementById("resume") = post.title;

    takIndex = index;
}

function verified(){
taskList.verified()
}