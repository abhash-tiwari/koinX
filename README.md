KoinX Backend Developer Intern Assignment

Table of Contents
Project Overview
Technologies Used
Installation
Usage Instructions
API Endpoints
Contributing
License
Project Overview
This project is designed as part of the interview process for the Backend Developer Intern position at KoinX. It involves accepting a CSV file upload, parsing the data, and storing it in a database.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
Multer (for file uploads)
CSV-parser
Installation
To get started with the project, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/abhash-tiwari/koinX.git
cd koinX
Install dependencies: Make sure you have Node.js installed. Then, run:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root directory and add your MongoDB URI:

bash
Copy code
MONGO_URI=mongodb://localhost:27017/your_db_name
PORT=3001
Usage Instructions
Start the server: Run the following command to start the application:

bash
Copy code
npm start
The server will be running on http://localhost:3001.

Uploading a CSV file: Use a tool like Postman or curl to send a POST request to upload a CSV file:

URL: http://localhost:3001/upload
Method: POST
Body: form-data with the key file and the value set to your CSV file.
Getting the balance: To retrieve the balance for a specific timestamp, send a POST request:

URL: http://localhost:3001/balance
Method: POST
Body (JSON):
json
Copy code
{
  "timestamp": "2022-09-28 12:00:00"
}
API Endpoints
Upload CSV:

POST /upload
Accepts a CSV file and stores the data in the database.
Get Balance:

POST /balance
Returns the balance for a given timestamp.
Contributing
Feel free to fork the repository, make changes, and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
