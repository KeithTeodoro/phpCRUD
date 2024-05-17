document.addEventListener("DOMContentLoaded", () => {
  let modal = document.querySelector(".modal");
  let backdrop = document.querySelector(".backdrop");
  let closeBtn = document.querySelector("#exit");
  let editBtns = document.querySelectorAll(".editBtn");
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  let addButton = document.querySelector("#addButton");

  let data = {
    method: "",
    name: "",
    body: "",
  };
  let modalBtnSubmit = document.querySelector("#buttonSubmit");

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
  });

  backdrop.addEventListener("click", function (evt) {
    if (evt.target === this) {
      modal.style.display = "none";
      backdrop.style.display = "none";
    }
  });

  addButton.addEventListener("click", (e) => {
    data = { ...data, method: addButton.getAttribute("data-mode") };
    modal.style.display = "block";
    backdrop.style.display = "block";
  });

  editBtns.forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      const postContainer = editBtn.closest(".box");
      const h1Content = postContainer.querySelector("h1").textContent;
      const pContent = postContainer.querySelector("p").textContent;

      let nameInput = document.getElementById("name");
      nameInput.value = h1Content;

      let bodyInput = document.getElementById("body");
      bodyInput.value = pContent;
      data = {
        ...data,
        method: editBtn.getAttribute("data-mode"),
        postId: editBtn.getAttribute("data-postid"),
      };
      modal.style.display = "block";
      backdrop.style.display = "block";
    });
  });

  modalBtnSubmit.addEventListener("click", async () => {
    let name = document.getElementById("name").value;
    let body = document.getElementById("body").value;
    if (data.method === "addNew") {
      data = {
        ...data,
        name: name,
        body: body,
      };
      try {
        await fetch("/crud.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.ok) {
            window.location.href = "posts.php";
          } else {
            throw new Error("ERROR");
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    } else if (data.method === "edit") {
      data = {
        ...data,
        name: name,
        body: body,
      };
      try {
        await fetch("/crud.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((res) => {
          if (res.ok) {
            window.location.href = "posts.php";
          } else {
            throw new Error("ERROR");
          }
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", async () => {
      let postId = deleteBtn.getAttribute("data-postid");
      data = {
        ...data,
        postId: postId,
        method: "delete",
      };
      try {
        if (confirm("Are you sure you want to delete this post?")) {
          await fetch("/crud.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => {
            if (res.ok) {
              window.location.href = "posts.php";
            } else {
              throw new Error("ERROR");
            }
          });
        }
      } catch (err) {
        console.log(err);
      }
    });
  });

  // editBtns.forEach((editBtn) => {
  //   editBtn.addEventListener("click", () => {
  //     let postId = editBtn.getAttribute("data-postid");
  //   });
  // });

  // deleteBtns.forEach((deleteBtn) => {
  //   deleteBtn.addEventListener("click", () => {
  //     let postId = deleteBtn.getAttribute("data-postid");
  //     if (confirm("Are you sure you want to delete this post?")) {
  //       // Send AJAX request to delete_post.php
  //       fetch("/delete.php", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/x-www-form-urlencoded",
  //         },
  //         body: `post_id=${postId}`,
  //       })
  //         .then((res) => {
  //           if (res.ok) {
  //             window.location.href = "posts.php";
  //           } else {
  //             throw new Error("Error deleting post");
  //           }
  //         })
  //         .catch((err) => {
  //           alert("An error occurred: " + err);
  //         });
  //     }
  //   });
  // });
});
