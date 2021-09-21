const deleteFormHandler = async (event) => {
  event.preventDefault();

  const id = window.location.pathname.split('/').pop();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete-form')
  .addEventListener('submit', deleteFormHandler);
