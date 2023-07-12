document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/rebecalmv')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.profile-name').textContent = data.name;
            document.querySelector('.profile-username').textContent = '@' + data.login;
            document.querySelector('.repos').textContent = data.public_repos;
            document.querySelector('.followers').textContent = data.followers;
            document.querySelector('.following').textContent = data.following;
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(error => console.log(error));
});