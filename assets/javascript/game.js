//PSEUDOCODE -- turn based RPG
// Begin with four images on screen with names and health amounts for each 
//Player clicks on any one of the images
//The image that the player clicked on becomes their main character (moves to 'your character' section), the other three images become 'enemies' (move to 'enemies available' section) 

//If first card selected...

var yourCharacter;
var enemy_1;
var enemy_2;
var enemy_3;

var character1Selected = false;
var character2Selected = false;
var character3Selected = false;
var character4Selected = false;

if(character1Selected === false){
    $(document).ready(function() {
        $("#card_1").on("click", function() {
        // console.log("bitch ass")
        alert("Let the battle begin!");

        $(".content").css("position", "absolute");
        $(".content").css("top", "5px");
        character1Selected = true;
    

        yourCharacter = $("#card_1");
        $("#character").append(yourCharacter);

        enemy_1 = $("#card_2");
        $("#enemies").append(enemy_1);

        enemy_2 = $("#card_3");
        $("#enemies").append(enemy_2);

        enemy_3 = $("#card_4");
        $("#enemies").append(enemy_3);
        });
    });
}
 
if(character2Selected === false){
//If second card selected...
    $(document).ready(function() {
        $("#card_2").on("click", function() {
        alert("Let the battle begin!");

        $(".content").css("position", "absolute");
        $(".content").css("top", "5px");
        character2Selected = true;

        yourCharacter = $("#card_2");
        $("#character").append(yourCharacter);

        enemy_1 = $("#card_1");
        $("#enemies").append(enemy_1);

        enemy_2 = $("#card_3");
        $("#enemies").append(enemy_2);

        enemy_3 = $("#card_4");
        $("#enemies").append(enemy_3);
        });
    });
 }

 if(character3Selected === false){
    //If third card selected...
    $(document).ready(function() {
        $("#card_3").on("click", function() {
        alert("Let the battle begin!");

        $(".content").css("position", "absolute");
        $(".content").css("top", "5px");
        character3Selected = true;

        yourCharacter = $("#card_3");
        $("#character").append(yourCharacter);

        enemy_1 = $("#card_1");
        $("#enemies").append(enemy_1);

        enemy_2 = $("#card_2");
        $("#enemies").append(enemy_2);

        enemy_3 = $("#card_4");
        $("#enemies").append(enemy_3);
        });
    });
}

if(character4Selected === false){
    //If fourth card selected...
    $(document).ready(function() {
        $("#card_4").on("click", function() {
        alert("Let the battle begin!");

        $(".content").css("position", "absolute");
        $(".content").css("top", "5px");
        character4Selected = true;

        yourCharacter = $("#card_4");
        $("#character").append(yourCharacter);

        enemy_1 = $("#card_1");
        $("#enemies").append(enemy_1);

        enemy_2 = $("#card_2");
        $("#enemies").append(enemy_2);

        enemy_3 = $("#card_3");
        $("#enemies").append(enemy_3);
        });
    });
}

//Player can then click on one of the 'enemy' images as the one to attack, selected image is moved to current opponent section

$(enemy_1).on("click", function(){
    alert("WAAAAAAAAAAAAAAA");
})

//Player can then click 'attack' button, which reduces enemy health. Each player click of attack results in enemy losing health, and then player loses health as enemy strikes back w/ random damage numbers
// Once player health under 0, game is over and you are defeated, restart button appears
// Player does more damage with each attack button press
// Once an enemy health is under 0, they disappear and you select from remaining enemies to fight
//once all enemies are defeated, game is over and player WINS

//On click of any image, clicked image is moved under 'Your Character' and remaining images are moved under 'Enemies'


