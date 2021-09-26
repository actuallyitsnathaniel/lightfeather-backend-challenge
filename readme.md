# Lightfeather Back-End Challenge

This back-end program exposes an API in order to retrieve a list of supervisors and submit personal information.

It is an exclusively back-end application. In order to use it, some level of experience with an API-testing workspace is required. I recommend either [Insomnia](insomnia.rest) or [Postman](https://www.postman.com/).
</br>

## Installation/Prerequisites:

```bash
$ git clone https://github.com/actuallyitsnathaniel/lightfeather-backend-challenge.git
```

```node
$ npm i
```

OR

```
$ npm install
```

</br>

## Usage:

To get the server running, navigate to the root directory of this repository after cloning. </br>
Then, type:

```
$ nodemon .
```

Open your preferred API Workspace of choice (e.g. [Insomnia](insomnia.rest) or [Postman](https://www.postman.com/)) and make sure your requests go to:

```https
localhost:8080/
```

When performing a GET, ensure that your address is set to:

```
localhost:8080/api/supervisors
```

When performing a POST, ensure that your address is set to:

```
localhost:8080/api/submit
```

And ensure your JSON format is as follows:

```JSON
{
	"firstName": "First",
	"lastName": "Last",
	"email": "email@mail.mail",
	"phoneNumber": "123-456-7890",
	"supervisor": "Super Visor"
}
```

_^^ firstName, lastName, and supervisor are required fields._
