// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once.
console.log(playerName, playerHealth, playerAttack);

// Enemy Variable Declaration 
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");

    // repeat and execute as long as the enemy-robot is alive 
    while (enemyHealth > 0 && playerHealth > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                // if yes (true), leave fight
                window.alert(playerName + " has decided to skip the fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("Current Player Money: " + playerMoney);
                break;
            }
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack-3, playerAttack);
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        enemyHealth = Math.max(0, enemyHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerName + " attacked " + enemyName + " ." + enemyName + " now has " + enemyHealth + " health remaining.");

        // Check enemy's health 
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            // Award player money for winning.
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = Math.max(0, playerHealth - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " +
            playerHealth + " health remaining."
        );
        // Check players health.
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // else {
        //     window.alert("You need to choose a valid option.[FIGHT or SKIP] Try again!");
        // }
    }
};
// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max-min + 1) + min);

    return value;
};
// function to start a new game
var startGame = function () {
    // debugger;
    // Reset Player Stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40,60);
            // call fight function with enemy-robot
            fight(pickedEnemyName);

            // if we're not at the last enemy in the array
            // if player is still alive and we're not at the last enemy in the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round.");

                if (storeConfirm) {
                    shop();
                }

            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
    // startGame();
};

var endGame = function () {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

var shop = function () {
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

    switch (shopOptionPrompt) {
        // Notice how case "REFILL": doesn 't include any other code and is immediately 
        // followed by case "refill":. Because the first case doesn't break, it will 
        // fall through to the next one.
        
        case "REFILL": // New Case
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;

            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "UPGRADE": // New Case
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money!");
            }
            break;
        case "LEAVE": // New Case
        case "leave":
            window.alert("Leaving the store.");

            // do nothing, so function will end
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop() again to force player to pick a valid option
            shop();
            break;
    }

};

// start the game when the page loads
startGame();


// Function declarations can be called before they are declared.

// Function Declaration:
// For Example;
// add (5,6);

// function add (a,b)
// {
//     console.log(a + b)
// }


// Functions must be declared before they are called.

// Function Expression:
// var add = function (a,b)
// {
//     console.log (a+b)
// }

// This topic is call JavaScript Hoisting