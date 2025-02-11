Node.js Server for Electronics Data

Overview

This Node.js server reads data from a JSON file (electronics.json) and provides an API to filter and retrieve electronics data based on categories. The server supports GET and POST requests to interact with the data.

Features:

Read Data from JSON File:

The server reads data from a file named electronics.json.

The file should contain an array of electronics items, each with properties like id, name, and category.

API Endpoints:

GET /electronics:

Retrieves filtered data based on the cat query parameter.

Supported categories: s (Smartphone), l (Laptop), t (Tablet), w (Smartwatch).

POST /electronics:

Returns the entire JSON data as a response.

Error Handling:

If the electronics.json file is missing or invalid, the server logs the error and sends an appropriate response.

Code Structure
1. Dependencies
The server uses the following core Node.js modules:

http: To create an HTTP server.

url: To parse the URL and extract query parameters.

fs: To read the electronics.json file.

2. Server Setup
The server listens on port 3001.

When a request is received, it reads the electronics.json file and processes the request based on the URL and HTTP method.

3. Request Handling
POST /electronics:

Reads the electronics.json file and sends the entire data as a response.

GET /electronics:

Filters the data based on the cat query parameter and sends the filtered data as a response.

Supported values for cat:

s: Filters items with the category Smartphone.

l: Filters items with the category Laptop.

t: Filters items with the category Tablet.

w: Filters items with the category Smartwatch.

4. Error Handling:
 
If the electronics.json file cannot be read or parsed, the server logs the error and sends a 500 Internal Server Error response.
