const deleteFormHandler = async event => {
    event.preventDefault();
  
    const id = window.location.pathname.split("/").pop();
  
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        id
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  };
  
  document
    .querySelector("#delete-post-btn")
    .addEventListener("click", deleteFormHandler);