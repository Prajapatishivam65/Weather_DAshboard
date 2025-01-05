Weather Dashboard

A modern and responsive weather dashboard application that provides real-time weather updates for any city around the globe. Built with React and powered by TypeScript for robust type checking and scalability.

Features

Real-Time Weather Data: Displays current weather conditions, temperature, wind speed, and humidity.

Search Functionality: Allows users to search for weather information by city name.

Forecast View: Provides a 5-day weather forecast with detailed information for each day.

Responsive Design: Optimized for both desktop and mobile devices.

Dynamic Backgrounds: Changes backgrounds based on the current weather condition (e.g., sunny, cloudy, rainy).

Technologies Used

Frontend: React (with TypeScript)

Styling: Tailwind CSS or CSS Modules

API: OpenWeatherMap API (or any other weather API of your choice)

State Management: React Context API or Redux (optional, if used)

Icons: Phosphor Icons

Installation

Prerequisites

Ensure you have the following installed:

Node.js (version 16 or higher)

npm or yarn package manager

Steps to Run Locally

Clone the repository:

git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

Install dependencies:

npm install

# or

yarn install

Create an .env file in the root directory and add your API key:

REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key

Start the development server:

npm start

# or

yarn start

Open your browser and navigate to http://localhost:3000 to view the app.

Usage

Enter the name of a city in the search bar to view its current weather data and forecast.

Toggle between the current weather and the 5-day forecast.

Enjoy the visually dynamic experience as the app's theme changes with weather conditions.

Folder Structure

weather-dashboard/
├── public/
├── src/
│ ├── components/ # Reusable components
│ ├── pages/ # Main pages (e.g., Home, calls)
│ ├── App.tsx # Main app component
│ └── index.tsx # Entry point
└── tsconfig.json # TypeScript configuration

APIs Used

OpenWeatherMap API: Provides real-time and forecast weather data.

Contribution

Contributions are welcome! If you'd like to improve this project:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Make your changes and commit them:

git commit -m "Add some feature"

Push the changes to your fork:

git push origin feature-name

Open a pull request.

License

This project is licensed under the MIT License.

Acknowledgements

OpenWeatherMap API for weather data.

Phosphor Icons for sleek and modern icons.

Tailwind CSS for styling.
