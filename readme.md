# Lightfeather Back-End Challenge

This is an exclusively back-end application. In order to use it, some level of experience with an API-testing workspace is required. I recommend either [Insomnia](insomnia.rest) or [Postman](https://www.postman.com/).

## Usage:

To get the server running, type:

```
nodemon index.js
```

Open your preferred API Workspace of choice and make sure your requests go to:

```
localhost:8080
```

When POST-ing, ensure that your JSON format is as follows:

```JSON
{
	"firstName": "First",
	"lastName": "Last",
	"email": "email@mail.mail",
	"phoneNumber": "123-456-7890",
	"supervisor": "Super Visor"
}
```
