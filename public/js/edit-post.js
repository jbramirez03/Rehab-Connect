const editFormHandler = async event => {
    event.preventDefault();
  
    const post_text = document.querySelector('#post-text').value.trim();
  
    const post_id = window.location.pathname.split("/").pop();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({
        post_text
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector("#edit-post-form")
    .addEventListener("submit", editFormHandler);