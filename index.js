/**
 * Written by Nathaniel Bowman
 * Lightfeather Backend Challenge
 */

const express = require("express"); // import express
const crossfetch = require("cross-fetch"); // a platform-agnostic library for fetching external data because i'm lazy with XMLHttp

const app = express(); // declaring use of Express as 'app'

// not everyone uses express. this declaration utilizes 
// middleware to mitigate express' nuanced protocols
app.use(express.json());

// declaring variables here
var managersJSON = []; // saving fetched JSON obj of managers here
const managers_url = "https://o3m5qixdng.execute-api.us-east-1.amazonaws.com/api/managers"; // good 'ol URL

// a function that sorts alphabetically
function sortIt(a,b) {
    // protection from case-sensitivity
    a = a.toLowerCase()
    b = b.toLowerCase()
  return (a < b) ? -1 : (a >b) ? 1 : 0;
}

//////////
// GET  //
//////////

app.get("/api/supervisors", (req, res) => {
  crossfetch(managers_url)
    .then((res) => res.json())
    .then((data) => {

      managersJSON = data; // saving fetched JSON to local variable
      
      for (var key in managersJSON) {

        // this single line is why i am going to renounce javascript.
        // isNaN() is PAINFULLY loose with its conversion/checking
        // so there's 3 LAYERS of poor converting here instead of 
        // simply checking if the string is a number...
        if (!isNaN(JSON.stringify(parseInt(managersJSON[key].jurisdiction)))) {
            delete managersJSON[key]; // because we don't want it
        }
      }

      // moving all the null entries to the end
      managersJSON.filter(x =>  x != null);
      managersJSON.sort((a, b) => {
        return a - b;
      });

      // making new array to sort
      var sortedManagers = [];

      // propagating new array with same format
      for (var key in managersJSON) {
        sortedManagers.push({
          id: managersJSON[key].id,
          phone: managersJSON[key].phone,
          jurisdiction: managersJSON[key].jurisdiction,
          identificationNumber: managersJSON[key].identificationNumber,
          firstName: managersJSON[key].firstName,
          lastName: managersJSON[key].lastName
        });
      }

      // sorting newly made array
      sortedManagers.sort((a,b) => {
        if (a.jurisdiction === b.jurisdiction) {
          if (a.lastName === b.lastName) {
            return sortIt(a.firstName, b.firstName)
          }
          return sortIt(a.lastName, b.lastName);
        }
        return sortIt(a.jurisdiction, b.jurisdiction);
      });

      // just for checking in the console
      for (var key in sortedManagers) {
        console.log(sortedManagers[key].jurisdiction, ",", sortedManagers[key].lastName, ",", sortedManagers[key].firstName)
      }

      res.status(200).send(sortedManagers);
    })
    .catch((error) => {
      res.send(error);
    });
});


//////////
// POST //
//////////


app.post('/api/submit', (req, res) => {
  // setting up variables to take from user
  const { firstName,
          lastName, 
          email,
          phoneNumber,
          supervisor } = req.body;

  // Checking for required entries        
  if (!firstName) {
    res.status(418).send({message: "You must include a first name!"})
  } else if (!lastName) {
    res.status(418).send({message: "You must include a last name!"})
  } else if (!supervisor) {
    res.status(418).send({message: "You must include your supervisor!"})
  } else {
    // If all is well, successful log and message
    console.log(req.body);
    res.status(200).send(req.body);
  }
  
});

// the server, running on port 8080
const server = app.listen(8080, () =>
  console.log(`Server running on http://localhost:${8080}`)
);