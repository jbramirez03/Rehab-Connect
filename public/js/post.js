const postFormHandler = async (event) => {
  event.preventDefault();

  const post_text = document.querySelector('#post-text').value.trim();

  const milestone_id = window.location.pathname.split('/').pop();

  if (post_text) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        post_text,
        milestone_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#post-form')
  .addEventListener('submit', postFormHandler);
