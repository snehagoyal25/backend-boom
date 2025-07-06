// async function getRecentPost() { // 1️⃣ Define an async function to handle the API call
// console.log("before sending request"); // 2️⃣ Log before sending the request
// const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");  // 3️⃣ Send a GET request to the JSONPlaceholder API
// const data = await response.json();  // 4️⃣ Convert the response into JSON format
// console.log(data); // 5️⃣ Log the data to the console (for debugging)
// console.log("request has been processed"); // 6️⃣ Log that the request has been processed
// document.getElementById("posts").innerHTML = data.body;  // 7️⃣ Display the post's body content inside the <div id="posts">
//     }
//   getRecentPost(); // 8️⃣ Call the function so the code actually runs

// same 
// async function fetchPosts() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//       const json = await res.json();
//       document.getElementById("posts").innerHTML = json.title;
//     }
// fetchPosts();


// using axios 
// linking axios main website in script tag in the fetch.html file
   async function fetchPosts() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
      document.getElementById("posts").innerHTML = res.data.title;
    }

    fetchPosts();
