const deleteFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch('/api/users/', {
    method: 'DELETE',
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector('#delete-form')
  .addEventListener('submit', deleteFormHandler);
