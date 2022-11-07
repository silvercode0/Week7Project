document.addEventListener("DOMContentLoaded", () => {
  ////   Use CONST to declare variables not let or var
  //   we want block elements
  // besides the currentPlayer Value ////
  const bubbles = document.querySelectorAll(".grid div");
  const whosTurn = document.getElementById("whosTurn");
  // const player1Sub = document.querySelector(".player1Name");
  // const player2Sub = document.querySelector(".player2Name");
  const curPlayer = document.querySelector("#curPlayer");
  const submitbtn = document.querySelector(".submit1Name");
  const submit2btn = document.querySelector(".submit2Name");
  const submit3btn = document.querySelector(".computerName");
  const playerTwoName = document.querySelector(".player2Name");
  const playerOneName = document.querySelector(".player1Name");

  let currentPlayer = 1;
  // define all the possible solutions you can get to win //
  const winningSolutions = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [39, 32, 25, 18],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
  ];

  function checkBoard() {
    for (let w = 0; w < winningSolutions.length; w++) {
      const bubble1 = bubbles[winningSolutions[w][0]];
      const bubble2 = bubbles[winningSolutions[w][1]];
      const bubble3 = bubbles[winningSolutions[w][2]];
      const bubble4 = bubbles[winningSolutions[w][3]];
      // always start at 0 for code and you need 4 in a row to win -- any direction

      if (
        bubble1.classList.contains("player-one") &&
        bubble2.classList.contains("player-one") &&
        bubble3.classList.contains("player-one") &&
        bubble4.classList.contains("player-one")
        // checks to see if player one has 4 bubbles in a row, diagonal, column
      ) {
        /// PLAYER 1 //// I want to check the bubbles to see if they are by player 1
        // output player 1 wins
        whosTurn.innerHTML = "Player 1 Wins !!  Hoo - raa";
      }
      if (
        bubble1.classList.contains("player-two") &&
        bubble2.classList.contains("player-two") &&
        bubble3.classList.contains("player-two") &&
        bubble4.classList.contains("player-two")
        // checks to see if player two has 4 bubbles in a row, diagonal, column
      ) {
        /// PLAYER 2 //// I want to check the bubbles to see if they are by player 2
        // output player two wins
        whosTurn.innerHTML = "Player 2 Wins !!  Hoo - raa";
      }
    }
  }
  // check to see if all places are filled and if no one has won out put No One Wins
  // if (bubbles[i].classList.contains("taken"))
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].onclick = () => {
      // alert("You have clicked a bubble!" + i);
      // if (bubbles[i].classList.contains("taken")) {
      //   alert("Choose another bubble");
      // }

      // if spot below is taken by a bubble, you can place one ontop of that bubble to make it your current bubble //
      if (
        bubbles[i + 7].classList.contains("taken") &&
        !bubbles[i].classList.contains("taken")
      ) {
        if (currentPlayer == 1) {
          bubbles[i].classList.add("taken");
          bubbles[i].classList.add("player-one");
          // after player one places a bubble, player two can go
          // set the currentPlayer to equal 2
          currentPlayer = 2;
          curPlayer.innerHTML = currentPlayer;
        } else if (currentPlayer == 2) {
          bubbles[i].classList.add("taken");
          bubbles[i].classList.add("player-two");
          currentPlayer = 1;
          // after player two places a bubble, player one can go
          // set the currentPlayer to equal 1
          curPlayer.innerHTML = currentPlayer;
        }
      } else alert("Choose Another Bubble!");
      checkBoard();
    };
  }

  function player1Name() {
    playerOneName.replaceWith(playerOneName.value);
    submitbtn.style.display = "none";
  }
  submitbtn.addEventListener("click", function () {
    player1Name();
  });
  function player2Name() {
    playerTwoName.replaceWith(playerTwoName.value);
    submit2btn.style.display = "none";
  }
  submit2btn.addEventListener("click", function () {
    player2Name();
  });
  //// generating the computer name ////
  function generateComputerName() {
    playerTwoName.replaceWith("Lorem Ipsum");
    submit3btn.style.display = "none";
  }
  submit3btn.addEventListener("click", function () {
    generateComputerName();
  });

  // code resets the game by reloading the page //
  document.querySelector("#restartBtn").addEventListener("click", function () {
    window.location.reload();
  });
});
