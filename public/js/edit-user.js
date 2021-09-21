const editFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-edit').value.trim();
  const first_name = document.querySelector('#firstName-edit').value.trim();
  const last_name = document.querySelector('#lastName-edit').value.trim();
  const email = document.querySelector('#email-edit').value.trim();
  const nickname = document.querySelector('#nickname-edit').value.trim();
  const about = document.querySelector('#about-edit').value.trim();
  const isPrivate = document.querySelector('#private-edit').checked;

  const id = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      email,
      nickname,
      about,
      isPrivate,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#profile-form')
  .addEventListener('submit', editFormHandler);
