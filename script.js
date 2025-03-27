document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts");
    const postDetailsContainer = document.getElementById("post-details");

    if (postsContainer) {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(posts => {
                posts.slice(0, 10).forEach(post => { 
                    const postCard = `
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <img src="https://picsum.photos/300/200?random=${post.id}" class="card-img-top" alt="Post Image">
                                <div class="card-body">
                                    <h5 class="card-title">${post.title}</h5>
                                    <p class="card-text">${post.body.substring(0, 50)}...</p>
                                    <a href="post.html?id=${post.id}" class="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    `;
                    postsContainer.innerHTML += postCard;
                });
            });
    }
    
    if (postDetailsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get("id");

        if (postId) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                .then(response => response.json())
                .then(post => {
                    postDetailsContainer.innerHTML = `
                        <div class="card-body">
                            <img src="https://picsum.photos/600/400?random=${post.id}" class="card-img-top" alt="Post Image">
                            <h2 class="card-title mt-3">${post.title}</h2>
                            <p class="card-text">${post.body}</p>
                        </div>
                    `;
                });
        } else {
            postDetailsContainer.innerHTML = `<p class="text-center">No post selected.</p>`;
        }
    }
});

https://github.com/damaris-20/D_Web-Posts.git