const posts = []
let postsIndex = -1

function savePost() {
    const resume = document.getElementById("resume").value;
    if (resume) {
        if (postsIndex == -1) {
            storePost(resume);
            cleanFields();
            showPosts();
        } else {
            posts[postsIndex] = {
                resume,
            };
        }
        cleanFields();
        showPosts();
        postsIndex = -1
    } else {
        document.getElementById("addSomething").classList.remove("hidden")
    }
}