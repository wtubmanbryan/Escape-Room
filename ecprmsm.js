//Intro and require readline-sync.
const readline = require("readline-sync");
const name = readline.question("What is your name? ");

console.log(`Welcome, ${name}, to Escape Room Simulation!`);

//Boolean flags to tell when the player is dead, has found the key and has pressed 1 to start. Variable for the room #.
let isAlive = true;
let hasKey = false;
let pressStart = false;
let room = 1;
const start = readline.keyIn("Please press 1 to start!", {limit: '$<1>'});
if (start == 1)
{
    console.log("You awaken in a strange room. There is a small hole in the wall big enough for your arm. \nThe door appears to be padlocked. There is a desk at the back wall. \nWhat would you like to do?");
    pressStart = true;
}

//While loop for Room #1.
while (isAlive == true && pressStart == true && room == 1)
{
    const optionID = readline.keyIn("Press 1 put hand in hole. \nPress 2 search desk. \nPress 3 open door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("ZOMBIE TIGER GRABS YOUR ARM AND CUTS IT OFF! YOU DIED!");
        isAlive = false;
    }
    else if (optionID == 2)
    {
        if (hasKey == true)
        {
            console.log("THERE IS NOTHING ELSE IN THE DESK. QUIT WASTING TIME!");
        }
        else if (hasKey == false)
        {
            console.log("YOU FOUND A KEY IN THE DESK!");
            hasKey = true;
        }
    }
    else if (optionID == 3)
    {
        if (hasKey == false)
        {
            console.log("YOU SHOULD TRY TO FIND THE KEY FIRST!");
        }
        else if (hasKey == true)
        {
            console.log("You find yourself in a new room. There is a blue glass door directly across from you. \nThe door has a mail slot in it. There is a pen and paper on a table in the center of the room. \nWhat would you like to do?");
            room = 2;
            break;
        }
    }
}
//While loop for room #2.
while (isAlive == true && room == 2)
{
    const optionID = readline.keyIn("Press 1  search room. \nPress 2  look at the table. \nPress 3 run through the door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("OTHER THAN THE TABLE, PEN AND PAPER YOU DO NOT SEE ANYTHING ELSE!");
    }
    else if (optionID == 2)
    {
        let lookAt = true;
        console.log("On the table is a pen and a piece of paper. The paper says 'What do you think may enter my blue glass door?'.");
        while (lookAt == true)
        {
            const optionID2 = readline.keyIn("Press 1 to write on the paper and put it in the mail slot. \nPress 2 to go back.", {limit: '$<1-2>'});
            if (optionID2 == 1)
            {
                const paperInput = readline.question("What do you want to write?: ");
                for (i = 0; i < paperInput.length; i++)
                {
                    if (paperInput[i] == paperInput[i+1])
                    {
                        console.log("THE DOOR OPENED! \nYou enter a new room. A statue is standing in the center of the room. \nThere are pictures on one of the walls. \nWhat would you like to do?");
                        lookAt = false;
                        room = 3;
                        break;
                    }
                    if (i == paperInput.length-1)
                    {
                        console.log("NOTHING HAPPENED! TRY AGAIN?");
                        break;
                    }
                }
            }
            else if (optionID2 == 2)
            {
                console.log("YOU STEP AWAY FROM THE TABLE.")
                lookAt = false;
                break;
            }
        }
    }
    else if (optionID == 3)
    {
        console.log("OOPS! WHEN YOU CHARGED THROUGH THE DOOR THE GLASS STABBED YOU! YOU'RE DEAD!");
        isAlive = false;
    }
}

//While loop for room #3.
while (isAlive == true && room == 3)
{
    let hitOne = false;
    let hitTwo = false;
    let hitThree = false;
    const optionID = readline.keyIn("Press 1  look at the pictures. \nPress 2  look at the statue. \nPress 3  try to open the door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("FROM LEFT TO RIGHT THE PICTURES ARE A STAR, A RANGER WITH AN AR-15, A BUNNY, A CLAW PRINT.");
    }
    else if (optionID == 2)
    {
        let lookAt = true;
        console.log("At the base of the statue is a compass. An engraving on the statue's base says \n'Point me in the direction and I'll show you the door. Steer me wrong and I'll hit the floor.' \nWhat would you like to do?");
        while (lookAt == true)
        {
            const optionID2 = readline.keyIn("Press 1  turn the statue north. \nPress 2 turn the statue south. \nPress 3  turn the statue west. \nPress 4  turn the statue east. \nPress 5 go back.", {limit: '$<1-5>'});
            if (optionID2 == 1)
            {
                if (hitOne == false && hitTwo == false && hitThree == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitOne = true;
                }
                else
                {
                    console.log("THE STATUE FALLS ON TOP OF YOU! YOU DIED!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 2)
            {
                if (hitOne == true && hitTwo == true && hitThree == true)
                {
                    console.log("YOU HEAR A FINAL CLICK AS THE DOOR OPENS TO THE OUTSIDE! \nCONGRATULATIONS! YOU ESCAPED!");
                    room = 4;
                    break;
                }
                else
                {
                    console.log("THE STATUE FALLS ON TOP OF YOU! YOU DIED!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 3)
            {
                if (hitOne == true && hitTwo == true && hitThree == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitThree = true;
                }
                else
                {
                    console.log("THE STATUE FALLS ON TOP OF YOU! YOU DIED!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 4)
            {
                if (hitOne == true && hitTwo == false)
                {
                    console.log("YOU HEAR A CLICK!");
                    hitTwo = true;
                }
                else
                {
                    console.log("THE STATUE FALLS ON TOP OF YOU! YOU DIED!");
                    isAlive = false;
                    break;
                }
            }
            else if (optionID2 == 5)
            {
                console.log("YOU STEP AWAY FROM THE STATUE. IT STARTS CLICKING AS IT RESETS ITSELF!");
                lookAt = false;
            }
        }
    }
    else if (optionID == 3)
    {
        console.log("THE DOOR IS LOCKED! YOU NEED TO FIND A WAY TO OPEN IT!");
    }
}