
<!-- GETTING STARTED -->
## Getting Started

This is a Node.js application utilizing the PostgreSQL driver to make a REST API

`postgres.js` is the driver file

### Prerequisites

This is an example of how to list things you need to use and run the application.
1. Node.js 
2. PostgreSQL 

### Installation

_Below is an example of how you can install and sett up the app._

1. Clone the repo
   ```sh
   git clone <repo_link> // or Download the ZIP file 
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the application
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Usage

_How to use the APIs_

1. POST request @ '/insert' with body of the follwing format:
   ```json
   {
      id: <data>,
      name: <data>,
      age:  <data>,
      phone: <data>:
   }
   ```
   It saves the data in the user_table of the database

2. GET request @ '/get' to get the data in the desired format as asked in the question
