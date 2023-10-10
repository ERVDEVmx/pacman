# PacMan Animation

This code offers a simple simulation of the iconic PacMan character that randomly moves across the screen and toggles through different images upon hitting window boundaries.

## Table of Contents
1. [Features](#features)
2. [Setup and Usage](#setup-and-usage)
3. [Functions](#functions)
4. [Contributing](#contributing)
5. [License](#license)

## Features
- Random PacMan motion.
- Dynamic image toggling upon collisions.
- Scalability - Multiple PacMen can be added.

## Setup and Usage

### Prerequisites

Ensure you have a modern web browser installed (e.g., Google Chrome, Firefox).

### Steps:

1. Clone the repository or download the source code.
2. Make sure you have the following images in an `images` folder relative to your HTML file:
    - `PacMan1.png`
    - `PacMan2.png`
    - `PacMan3.png`
    - `PacMan4.png`
3. Include the JavaScript code in your HTML file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>PacMan Animation</title>
   </head>
   <body>
       <div id="game"></div>
       <script src="script.js"></script>
   </body>
   </html>

   ## Functions

- **`setToRandom(scale)`**: Returns an object with random x and y values scaled by the provided scale.
- **`makePac()`**: Factory function to create and display a PacMan on the screen.
- **`checkCollisions(item)`**: Detects if the PacMan has hit the window boundaries and adjusts its direction accordingly.
- **`update()`**: Continuously updates the position of each PacMan on the screen.
- **`makeOne()`**: Adds a new PacMan to the screen.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source. Feel free to use, modify, and distribute as you see fit!
