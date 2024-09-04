# Tic-Tac-Toe 20x20

## Overview

This is a browser-based Tic-Tac-Toe game featuring a 20x20 grid. Two players, X and O, take turns placing their marks on the grid. The first player to align five of their marks in a row, column, or diagonal wins the game. The game is developed using HTML, CSS, and JavaScript and is designed to be responsive, making it playable on both desktop and mobile devices.

You can play the game online [here](https://zakaria-elkoh.github.io/tik-tak-toe/).

## Features

- **20x20 Grid:** A large playing field to increase the complexity of the game.
- **Winning Condition:** Players must align 5 marks in a row, column, or diagonal to win.
- **Score Tracking:** The score is tracked for both players, with the score being displayed on the screen.
- **Responsive Design:** The game can be played on various screen sizes, from desktop to mobile.
- **Reset Functionality:** Players can restart the game at any time using the restart button.

## How to Play

1. Open the `index.html` file in your browser or visit the [online version](https://zakaria-elkoh.github.io/tik-tak-toe/).
2. The game starts with Player 1 (X). Click on any cell within the grid to place your mark.
3. Player 2 (O) takes their turn by clicking on an empty cell.
4. The first player to align 5 marks in any row, column, or diagonal wins the game.
5. The game will display a popup announcing the winner and update the score.
6. Click the "Restart" button to reset the game and play again.

## Project Structure

- `index.html`: The main HTML file containing the game layout and structure.
- `styles.css`: The CSS file for styling the game (not provided here, but you can add your own styles).
- `script.js`: The JavaScript file that handles game logic, including the creation of the grid, player turns, win conditions, and game reset functionality.

## For Developers

### Modifying the Game

If you wish to modify the game, here are some key points:

- **Grid Size:** The grid size is set to 20x20 by default. You can change this by modifying the `gridSize` variable in the `script.js` file.
- **Win Condition:** The win condition is set to 5 marks in a row. This can be adjusted by changing the `winCondition` variable.
- **Game Logic:** The main game logic, including how player moves are processed and how wins are detected, is found in the `handleCellClick`, `checkWin`, and `countInDirection` functions in `script.js`.
- **Styling:** Modify the `styles.css` file to change the look and feel of the game.
