# Modern Weather App

A sleek and modern weather application built with React and Vite that provides real-time weather information with a beautiful user interface.

![Weather App Screenshot](./src/assets/screenshot.png)

## Features

- 🌡️ Real-time weather data display
- 🔍 Search weather by city name
- 💨 Wind speed information
- 💧 Humidity levels
- 🎨 Modern glass-morphism design
- 📱 Fully responsive layout
- ⚡ Fast and efficient performance

## Technologies Used

- React 18+
- Vite
- OpenWeatherMap API
- CSS3 with modern features
  - Flexbox
  - CSS Grid
  - Glass-morphism effects
  - Smooth animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- OpenWeatherMap API key (Get one from [OpenWeatherMap](https://openweathermap.org/api))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/weather-app.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```env
VITE_API_KEY=your_api_key_here
```

> ⚠️ **Security Note**: Never commit your `.env` file or expose your API key. The `.env` file is already added to `.gitignore`.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Usage

1. Enter a city name in the search bar
2. Press Enter or click the search icon
3. View detailed weather information including:
   - Temperature
   - Weather condition
   - Humidity
   - Wind speed

## Project Structure

```
weather-app/
├── src/
│   ├── components/
│   │   └── Weather.jsx
│   ├── styles/
│   │   └── Weather.css
│   ├── assets/
│   │   ├── humidity.png
│   │   ├── search.png
│   │   └── wind.png
│   ├── App.jsx
│   └── main.jsx
├── .env (not tracked by git)
├── .gitignore
└── index.html
```

## Security

- The app uses environment variables to protect sensitive data
- API keys are never exposed in the client-side code
- HTTPS is recommended for production deployment
- Dependencies are regularly updated to patch security vulnerabilities

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

> Note: Never commit sensitive information like API keys or environment files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons and design inspiration from various open-source projects

---

This project was bootstrapped with [Vite](https://vitejs.dev/) and uses [React](https://reactjs.org/).
