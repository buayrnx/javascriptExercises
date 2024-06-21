document.getElementById('userForm').addEventListener('submit', 
  async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const userProfile = document.getElementById('profile');
    const userPhoto = document.querySelector('.user-photo');
    const userName = document.querySelector('.username');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const fullName = document.querySelector('.full-name');
    const description = document.querySelector('.description');
    const repoList = document.querySelector('.repo-list');

    loadingElement.style.display = 'block';
    errorElement.style.display = 'none';
    userProfile.style.display = 'none';


    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
      if (!response.ok) {
        throw new Error('Kullanıcı bulunamadı veya GitHub API\'ye ulaşılamıyor.');
      }

      const data = await response.json();

      userPhoto.src = data.avatar_url;
      userName.textContent = data.login;
      followers.textContent = ` ${data.followers} followers `;
      following.textContent = `${data.following} following `;
      fullName.textContent = data.name || 'no name';
      description.textContent = data.bio || 'no description';


      loadingElement.style.display = 'none';
      userProfile.style.display = 'block';
    } catch (error) {
      loadingElement.style.display = 'none';
      errorElement.textContent = error.message;
    }
  }
);