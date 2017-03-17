var React = require('react');

var About = (props) => {
      return (
        <div>
          <h1 className="text-center">About</h1>
          <p>This weather application is built on React and uses Open Weather Map to retrieve
          weather data. Building this app is part of the amazing Complete React Web
          App Developer Course.</p>

          <h4 className="text-center">All About Weather</h4>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Weather" target="_blank">Weather Facts</a> - Visit
              Wikipedia Weather for weather facts.
            </li>
            <li>
              <a href="https://weather.com/" target="_blank">Weather News</a> - Visit The
              Weather Channel for weather news.
            </li>
            <li>
              <a href="http://www.noaa.gov/" target="_blank">Weather Science</a> - Visit NOAA - The
              National Oceanic & Atmospheric Administration for weather science.
            </li>
            <li>
              <a href="https://www.sercc.com/wxtrivia.html" target="_blank">Weather Trivia</a> - Visit
              the Southeast Regional Climate Center for weather trivia.
            </li>
          </ul>
        </div>
      )
};

module.exports = About;
