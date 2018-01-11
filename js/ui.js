class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" class="img-fluid mb-2">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gist: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item"><strong>Company:</strong> ${user.company}</li>
              <li class="list-group-item"><strong>Website/Blog:</strong> ${user.blog}</li>
              <li class="list-group-item"><strong>Location:</strong> ${user.location}</li>
              <li class="list-group-item"><strong>Member Since:</strong> ${user.created_at}</li>
              </ul>
            </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Respos</h3>
      <div id="repos"></div>
    `;
  }
  showRepos(repos) {
    let output = '';
    repos.map(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars : ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forks}</span>
            </div>
          </div>
        </div>
      `;
    });
    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
  showAlert(message, className) {
    // Clear any remaining alert
    this.clearAlert()
    const div = document.createElement('div');
    div.setAttribute('class', className);
    div.innerText = message;
    const parent = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    parent.insertBefore(div, search);
    this.clearProfile();
    // time out after 3s
    setTimeout(() => this.clearAlert(), 3000)

  }
  clearAlert() {
    let currentAlert = document.querySelector('.alert');
    currentAlert ? currentAlert.remove() : false;
  }
}