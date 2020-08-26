/*
Instructions:

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

*/

//Solution:

function declareWinner(fighter1, fighter2, firstAttacker) {
//   Write your code below
  while (fighter1.health > 0 && fighter2.health > 0){
    fighter1.health -= fighter2.damagePerAttack;
    fighter2.health -= fighter1.damagePerAttack;
  } //while loop run until not true;
  if (fighter1.health <= 0 && fighter2.health <= 0){ //if tie who attacked first
    return firstAttacker;
  }else if(fighter1.health <= 0){
    return fighter2.name;
  }else{
    return fighter1.name;
  }
}

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() {return this.name;}
}
