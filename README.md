Simple Server Based on Restify:
-----

This is a simple microservice that talks to the Uber API. All it does is implement a call to uber to check for prices. Prices shown use DTLA as a starting point.


Requirements:
---

1. node version greater than 6
2. uber credentials set as environment variables
3. `jq` installed, but only if you want curl requests to be nice. It can be installed through [homebrew](https://brew.sh), if you have it installed.

Setup:
---

You need to first get your own uber credentials by logging into the uber [developer portal](https://developer.uber.com). Once you have an account, you need to create an app, and get your credentials. Uber will provide you with a `CLIENT_ID`, `SERVER_TOKEN`, and `SECRET`. Please do not share or save these values in git.


Once you have that, you need to setup the project on your computer. Depending on your package manager of choice (`npm`, `yarn`), use the respective command.

1. git clone git@github.com:sogoiii/restify-example.git
2. cd restify-example
3. `npm install` or `yarn install`

To set your environment variables, you need to enter the following in the command line. Lets image the credentials provided were `a, b, c`.

1. `export CLIENT_ID=a`
2. `export SERVER_TOKEN=b`
3. `export SECRET=c`

Now you can start the project by running one of the following.

1. `npm start` or `yarn start`

If everything is working as expected, the terminal should output `Welcome to the simple Restify example using the Uber API! Running on port 8080.`


Making Requests:
----

Below are ways you can git the api. You can use an application like paw, postman, curl, or the browser. Postman is very similar to paw, but not setup in this example.


### Paw
In the project, I setup a paw project that will call the endpoint with a success case and a failure case. Just open the uber.paw file within paw and run the endpoints.


### curl

Open a new terminal and enter the following `curl 'http://localhost:8080/getpriceto/ucla'`

### curl with jq

Open a new terminal and enter the following `curl 'http://localhost:8080/getpriceto/ucla' | jq .`
