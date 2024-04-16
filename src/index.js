// write your code here
// Endpoint to retrieve image data
const imageUrl = "http://localhost:3000/images/1";

// Function to fetch image data and populate the page
function populateImageDetails() {
  fetch(imageUrl)
    .then(response => response.json())
    .then(data => {
      // Populate image title
      document.getElementById("card-title").textContent = data.title;

      // Populate image source
      document.getElementById("card-image").src = data.image;

      // Populate likes count
      document.getElementById("likes-count").textContent = data.likes;

      // Populate comments
      const commentsList = document.getElementById("comments-list");
      data.comments.forEach(comment => {
        const listItem = document.createElement("li");
        listItem.textContent = comment.content;
        commentsList.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching image data:", error);
    });
}

// Call the function to populate image details when the page loads
window.addEventListener("load", populateImageDetails);

// write your code here
// alert("hello");


// let likeCount = 0;

// function increaseLikes() {
//   likeCount++;
//   document.getElementById("like-count").innerText = likeCount;
// }

// Initialize like count to 0
// let likeCount = 0;

// Function to increase likes when the like button is clicked
function increaseLikes() {
  // Increment the like count
  likeCount++;
  // Update the like count displayed on the page
  document.getElementById("like-button").innerText = likeCount;
}

// Function to handle form submission
document.getElementById("comment-form").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
  
    // Get the comment text from the form
    let commentText = document.getElementById("comment-form").value;
  
    // Create a new comment element
    let newComment = document.createElement("div");
    newComment.textContent = commentText;
  
    // Append the new comment to the comments container
    document.getElementById("comments-container").appendChild(newComment);
  
    // Clear the comment form
    document.getElementById("comment").value = "";
  });
  
