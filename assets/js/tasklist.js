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
    deletePost(id) {
        this.tasks = this.tasks.filter(task => task.id != id)
    }
    editPost() {
        const post = taskList.tasks[index]
        document.getElementById("resume") = post.title
    }
    verified(id) {
        this.tasks.forEach
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
            <p class="textPost">${nuevo.title}</p>
        </div>
        <div class="buttonArea">
            <button onclick="verifyPost(${index.status})" class="checkButton"><i class="fa-solid fa-check"></i></button>
            <button onclick="editPost(${index})" class="editButton"><i class="fa-solid fa-pen"></i></button>
            <button onclick="removePost(${index.id})" class="deletButton"><i class="fa-solid fa-trash"></i></button>
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
