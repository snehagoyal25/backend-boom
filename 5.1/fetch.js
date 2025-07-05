
    // 1️⃣ Define an async function to handle the API call
    async function getRecentPost() {
      // 2️⃣ Log before sending the request
      console.log("before sending request");

      // 3️⃣ Send a GET request to the JSONPlaceholder API
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

      // 4️⃣ Convert the response into JSON format
      const data = await response.json();

      // 5️⃣ Log the data to the console (for debugging)
      console.log(data);

      // 6️⃣ Log that the request has been processed
      console.log("request has been processed");

      // 7️⃣ Display the post's body content inside the <div id="posts">
      document.getElementById("posts").innerHTML = data.body;
    }

    // 8️⃣ Call the function so the code actually runs
    getRecentPost();