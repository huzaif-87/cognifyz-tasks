fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => 
    {
        const container= document.getElementById('posts-container');
        posts.slice(0,5).forEach(post => {
            const postElement= document.createElement('div');
            postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr>`;
            container.appendChild(postElement);
        });
        })
        .catch(error => {console.error('Error fetching posts:', error);
    });
