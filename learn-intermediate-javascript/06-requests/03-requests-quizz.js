// 1. Which of the following is NOT used to create a request using fetch()?
// ANSWER: This()

// 2. Complete the code to construct a GET request using the Fetch API that will return a promise using the async…await syntax.
const getSuggestions = async () => {
    const wordQuery = inputField.value;
    const endpoint = `${url}${queryParams}${wordQuery}`;
    try{
  const response = await fetch(endpoint, {cache: 'no-cache'});
      if(response.ok){
        const jsonResponse = await response.json()
      }
    }
    catch(error){
      console.log(error)
    }
  }

// 3. What is the difference between GET and POST requests?
// GET requests only request data from other websites, POST ones submot data to other files

// 4. What is wrong with the following code?
// The setting for the fetch() needs to be imside of an obj

// 5. Which of the following is NOT true about the JavaScript Fetch API?
// The fetch API is powered by a XMLHTTPSREQUEST
