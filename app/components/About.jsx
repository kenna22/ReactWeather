var React = require('react');

var About = (props) => {
      return (
        <div>
          <h2 className="text-center">All About Weather</h2>
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Weather">Weather Facts</a> - Visit
              Wikipedia Weather for weather facts.
            </li>
            <li>
              <a href="https://weather.com/">Weather News</a> - Visit The
              Weather Channel for weather news.
            </li>
            <li>
              <a href="http://www.noaa.gov/">Weather Science</a> - Visit NOAA - The
              National Oceanic & Atmospheric Administration for weather science.
            </li>
            <li>
              <a href="https://www.sercc.com/wxtrivia.html">Weather Trivia</a> - Visit
              the Southeast Regional Climate Center for weather trivia.
            </li>
          </ul>
        </div>
      )
};

module.exports = About;
