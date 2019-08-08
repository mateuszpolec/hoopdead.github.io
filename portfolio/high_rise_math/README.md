# High Rise Math

Project created in three days, just for fun, and improve JavaScript skills. I tried to build something simple, and at the same time something, that will give you a lot of fun, and will have the opportunity to learn something new, or develop yourself.

Check it out - [Click, and play!](https://hoopdead.github.io/portfolio/high_rise_math/)

## Instalation / get source code

Use cmd terminal, and go to folder, where you want to keep files.

```
git clone https://github.com/HoopDead/hoopdead.github.io/tree/master/portfolio/high_rise_math
```

## Documentation

List of files:
- index.html
- mathematicians.json
- engine.js
- style.css

Functions:
- function init_game() - Is main function, that runs everything on site. First of all, function have to reset countdown to 60 seconds, and display it. Otherwise user will have bug with timer - for example, site would display timer value like -100. **Function runs function create_math()**

- function start_timer() - tick every 1000ms, and decrement *variable countdown* and display it on site.

