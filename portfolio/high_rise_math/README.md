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
- function init_game() - Is main function, that runs everything on site. First of all, function have to reset countdown to 60 seconds, and display it. Otherwise user will have bug with timer - for example, site would display timer value like -100. **Function runs function create_math()**, and change #demo section display to none, #game sectioon display to flex.

- function start_timer() - tick every 1000ms, and decrement *variable countdown* and display it on site.

- function create_math() - if timer is false - **Function runs function function invocation()**, otherwise it does nothing. Then, randomize the first number of equation, operation, and second number. Display everythinhg on site, then **Function runs function result()**.

- function result() - check operation (0 - addition, 1 - substraction, 2 - multiplication). Solve the equation.

- function is_pressed() - check if user clicked enter button, if yes - **Function runs function function submit_answer()**.

- function submit_answer() - get value from input, then check if answer is correct.

- function json_getter() - get value from json file, and **Function runs function start_timer()** - it's because function json_getter is initalized when document is loaded, timer cannot be initalized more, than once, otherwise it get bugs, and after every run speed up. Json_getter is getting random mathematican from file, and display on site.

- function reset() - change every variable to orginal condition, clearTimeout, and **Function runs function invocation(), and function init_game()**.

- function invocation() - display score, and give user 60 seconds to play the game.


## License

This project is released under the MIT Licence.

## Author

Mateusz Połeć.