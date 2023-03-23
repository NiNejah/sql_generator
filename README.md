# SQL Generator using OpenAI-Quickstart-node 

## Setup

1. Clone this repository

2. Navigate into the project directory

   ```bash
   $ cd sql_generator
   ```

3. Install the requirements

   ```bash
   $ npm install
   ```

4. Make a copy of the example environment variables file

   On Linux systems: 
   ```bash
   $ cp .env.example .env
   ```
   On Windows:
   ```powershell
   $ copy .env.example .env
   ```

5. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created `.env` file

6. add your tables in [tables.js](./pages/tables.js)

7. Run the app

   ```bash
   $ npm run dev
   ```
## Clean 

   ```bash
   $ bash ./clean.sh
   ```
You should now be able to access the app at [http://localhost:3000](http://localhost:3000)! For the full context behind this example app.
