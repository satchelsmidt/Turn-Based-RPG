//PSEUDOCODE -- turn based RPG
// Begin with four images on screen with names and health amounts for each 
//Player clicks on any one of the images
//The imagae that the player clicked on becomes their main character (moves to 'your character' section), the other three images become 'enemies' (move to 'enemies available' section) 

$(document).ready(function() {

    // Here we use jQuery to select the header with "click-me" as its ID.
    // Notice I have the #click-me, click, and then the function
    // So $("#id|.class|element").on("action", function(){})
    
    $("#card_1").on("click", function() {
      alert("Let the battle begin!");

      var yourCharacter = $("#card_1");
      $("#character").append(yourCharacter);

      var enemy_1 = $("#card_2");
      $("#enemies").append(enemy_1);

      var enemy_2 = $("#card_3");
      $("#enemies").append(enemy_2);

      var enemy_3 = $("#card_4");
      $("#enemies").append(enemy_3);
    });
});

//Player can then click on one of the remaining images as the one to attack, selected image is moved below player's icon
//Player can then click 'attack' button, which reduces enemy health. Each player click of attack results in enemy losing health, and then player loses health as enemy strikes back w/ random damage numbers
// Once player health under 0, game is over and you are defeated, restart button appears
// Player does more damage with each attack button press
// Once an enemy health is under 0, they disappear and you select from remaining enemies to fight
//once all enemies are defeated, game is over and player WINS

//On click of any image, clicked image is moved under 'Your Character' and remaining images are moved under 'Enemies'


