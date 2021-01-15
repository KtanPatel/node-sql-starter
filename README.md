# Node SQL Starter

NodeJS + ExpressJS + PostgreSQL + JWT => Boilerplate

## Getting Started

This are the stepes of how you may give instructions on setting up your project locally. To get a local copy up and running follow steps.

### Prerequisites

You need to use the software and how to install them.

* [Node JS](https://nodejs.org/en/download/)

* Database: We are using `postgreSQL` here.

* npm
	
    ```
  $ npm install npm@latest -g
  ```

### Installation

1. Clone the repo
	
	```
	$ git clone https://github.com/KtanPatel/node-sql-starter.git
	```

2. Install NPM packages
	
	```
	$ cd node-sql-starter && npm install
	```

3. Copy `.env.example` to `.env`
	
	```
	$ cp .env.example .env
	```

4. Run database migration
	
	```
	$ npm run migration
	```

5. Run Server
	
	```
	$ npm start
	```