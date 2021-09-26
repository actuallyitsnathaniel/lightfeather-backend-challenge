# Lightfeather Back-End Challenge

This is an exclusively back-end application. In order to use it, some level of experience with an API-testing workspace is required. I recommend either [Insomnia](insomnia.rest) or [Postman](https://www.postman.com/).
</br>

## Installation:

```bash
git clone https://github.com/actuallyitsnathaniel/lightfeather-backend-challenge.git
```

</br>

## Usage:

To get the server running, navigate to the root directory of this repository after cloning. </br>
Then, type:

```
nodemon .
```

_^^ The period simply navigates to index.js_  
Open your preferred API Workspace of choice and make sure your requests go to:

```https
localhost:8080/api/submit
```

When performing a POST, ensure that your JSON format is as follows:

```JSON
{
	"firstName": "First",
	"lastName": "Last",
	"email": "email@mail.mail",
	"phoneNumber": "123-456-7890",
	"supervisor": "Super Visor"
}
```

_^^ firstName, lastName, and supervisor are the only required entries._
