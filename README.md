Profile Management Application

This Profile Management Application is a React and TypeScript-based web app designed to manage user profiles. The application allows you to create, view, and update profile details, utilizing a mock JSON server to handle data storage for demonstration purposes.


Create Profile: Fill in a form to create a new user profile.
View Profile Details: View details of each user profile.
Update Profile: Update existing profiles with new information.
Error Handling: Error boundaries to handle invalid or missing data inputs.
Form Validation: Basic form validation to ensure data quality.
API Integration: Data is fetched from and saved to a mock JSON server.
Technologies Used
React with TypeScript: For building component-based, strongly typed UI.
React Router: For navigation between profile creation and viewing.
Context API: To manage and pass profile data across components.
JSON Server: A simple, full-fledged mock REST API for testing without a backend.
Fetch API: For making asynchronous API calls.
CSS: For styling components.
Error Boundaries: To catch and manage JavaScript errors gracefully.

Setup and Installation
Prerequisites
Node.js (v14 or above) and npm
React and TypeScript
Steps
Clone the repository:

git clone https://github.com/yourusername/profile-management-app.git
cd profile-management-app

Install dependencies:

npm install
Setup JSON Server: JSON Server is used to mock a REST API. Create a db.json file in the root directory for mock profile data:


{
  "profiles": [
    { "id": 1, "name": "John Doe", "email": "johndoe@example.com" }
  ]
}

Run JSON Server (for API simulation):


npx json-server --watch db.json --port 5000
JSON Server will run on http://localhost:5000. Adjust the port in API functions if necessary.

Run the application:


npm start
Open http://localhost:3000 to view the app in the browser.

Available Scripts
npm start: Runs the app in development mode.
npx json-server --watch db.json --port 5000: Starts the JSON server for API testing.
npm run build: Builds the app for production to the build folder.
How JSON Server Works
JSON Server allows you to simulate a REST API by using a JSON file (db.json) as the database. This enables CRUD operations (Create, Read, Update, Delete) on the JSON file with minimal setup.

The profileApi.ts file contains API functions to interact with JSON Server. Here’s how the endpoints are structured:

GET /profiles: Retrieve all profiles.
GET /profiles/:id: Retrieve a profile by ID.
POST /profiles: Create a new profile.
PUT /profiles/:id: Update an existing profile by ID.
DELETE /profiles/:id: Delete a profile by ID.
Package Overview
React: A popular front-end library for building user interfaces.
TypeScript: A strongly-typed superset of JavaScript for scalable code.
React Router: For client-side routing and navigation.
JSON Server: A quick, lightweight solution for creating a mock REST API.
Fetch API: Native JavaScript API for making HTTP requests.
Context API: Used for state management across components without prop drilling.
Additional Information
API Reference
All API requests are made to http://localhost:5000/profiles. Modify this URL in profileApi.ts if using a different port.
Error Handling
Error messages are shown when API calls fail or data cannot be fetched.