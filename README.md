# Ruby on Rails with React.js Weather Icons Demo

A Ruby on Rails demo app that demonstrates the use of a React.js front-end to display weather icons based on user selections.

Libraries used:

- [Ruby on Rails](https://github.com/rails/rails)
- [react_on_rails gem](https://github.com/shakacode/react_on_rails)
- [Weather Icons React](https://najens.github.io/weather-icons-react/)

## Run the app

- Install the version of Ruby defined in the `.ruby-version` file.
- Clone the project repo and run the terminal command `bundle install`
- Run the app using the following command from the root of the project folder

```sh
bin/dev
```

- Then in your browser visit `http://localhost:3000/`

When you select different weather options from the select input it will change the weather forecast text and icon for the selected weather.

## React components

The app's React components are located in [/app/javascript/src/](/app/javascript/src/).

The React component for the weather functionality is [Weather.client.jsx](/app/javascript/src/Weather/ror_components/Weather.client.jsx).

It uses the [weather-icons-react](https://najens.github.io/weather-icons-react/) package to generate the icon for the selected weather and styles it with css contained in [Weather.module.css](/app/javascript/src/Weather/ror_components/Weather.module.css).

## Screenshots

![screenshot showing sunny weather icon](/screenshots/screenshot-weather-icon-sunny.png)
![screenshot showing windy weather icon](/screenshots/screenshot-weather-icon-windy.png)
![screenshot showing rainy weather icon](/screenshots/screenshot-weather-icon-rainy.png)
