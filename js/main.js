// Init UI
const ui = new UI();
// dom
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', e => {
  let userText = e.target.value;

  if (userText !== '') {
    Github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') 
          ui.showAlert('User not found!', 'alert alert-danger');
        else {
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }  
      })
      .catch(err => console.log(err));
  } else {
    ui.clearProfile();
  }
});