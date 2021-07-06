// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


// var playerName = ;
// var playerHealth = 100;
// var playerAttack = 10;
// var playerMoney = 10;

var fight = function (enemy) {
    // Alert players that they are starting the round
    // window.alert("Welcome to Robot Gladiators!");


    // repeat and execute as long as the enemy-robot is alive 
    while (enemy.health > 0 && playerInfo.health > 0) {
        // ask player if they'd like to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                // if yes (true), leave fight
                window.alert(playerInfo.name + " has decided to skip the fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("Current Player Money: " + playerInfo.money);
                break;
            }
        }
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
        enemy.health = Math.max(0, enemy.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(playerInfo.name + " attacked " + enemy.name + " ." + enemy.name + " now has " + enemy.health + " health remaining.");

        // Check enemy's health 
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            // Award player money for winning.
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " +
            playerInfo.health + " health remaining."
        );
        // Check players health.
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            // leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }

        // else {
        //     window.alert("You need to choose a valid option.[FIGHT or SKIP] Try again!");
        // }
    }
};
// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};
// function to set name
var getPlayerName = function () {
    var name = "";

    // ***************************************
    // ADD LOOP HERE WITH PROMPT AND CONDITION
    // ***************************************
    while (name === "" || name === null) {
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is " + name);
    return name;
};
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100,
            this.attack = 10;
        this.money = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You dont have enough money!");
        }
    }, // comma!
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once.
console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

// Enemy Variable Declaration 
// var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
// var enemyHealth = 50;
// var enemyAttack = 12;
var enemyInfo = [{
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];
// function to start a new game
var startGame = function () {
    // debugger;
    // Reset Player Stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            // call fight function with enemy-robot
            fight(pickedEnemyObj);

            // if we're not at the last enemy in the array
            // if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE": // New Case
        case "upgrade":
            playerInfo.upgradeAttack();
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