// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
 }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
        return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength) {
        super(health, strength);
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!";
    }
}

// War
class War {
    constructor () {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack() {
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let resultOfCallingReceiveDamageByViking = randSaxon.receiveDamage(randViking.strength);
        if (randSaxon.health <= 0) {
            this.saxonArmy.splice([randSaxon, 1])
        };
        return resultOfCallingReceiveDamageByViking;
     };
     saxonAttack() {
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let resultOfCallingReceiveDamageBySaxon = randViking.receiveDamage(randSaxon.strength);
         if (randViking.health <= 0) {
             this.vikingArmy.splice([randViking, 1])
         };
         return resultOfCallingReceiveDamageBySaxon;
     };
     showStatus() {
        let randSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let randViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        if (this.saxonArmy.length === 0) {
             return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
             return "Saxons have fought for their lives and survive another day..."
        } else if(this.vikingArmy.length && this.saxonArmy.length !== 0) {
             return "Vikings and Saxons are still in the thick of battle."
        }
     };
  }