let takIndex = -1

class Task{
    constructor(id, title, status){
        this.id = id;
        this.title = title;
        this.status = status;
    }
}

class TaskList{

}
function randomID(){
let id = Math.floor(Math.random() * 9999)
}

const taskList = new TaskList()

function creatTask(){
    let title = document.getElementById("resume").value;

    const nuevo =new Task(randomID(), title, false)
        if (title) {
            if (takIndex == -1) {
                storePost();
                cleanFields();
                showPosts();
            } else {
                Task[takIndex] = {
                    title,
                };
            }
            cleanFields();
            showPosts();
            postsIndex = -1
        } else {
            document.getElementById("addSomething").classList.remove("hidden")
        }

}
