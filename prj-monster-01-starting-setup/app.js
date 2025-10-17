const getRandomValue = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      countAttact: 0,
      winner: null,
      logs: [],
    };
  },
  watch: {
    playerHealth(newValue, oldValue) {
      if (newValue <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (newValue <= 0) {
        this.winner = "monster";
      }
    },
    monsterHealth(newValue, oldValue) {
      if (newValue <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (newValue <= 0) {
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.countAttact % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      this.countAttact++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.monsterHealth = Math.max(0, this.monsterHealth);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.playerHealth = Math.max(0, this.playerHealth);

      //update logs
      this.logs.push("monster health ==> " + this.monsterHealth);
      this.logs.push("your health ==> " + this.playerHealth);
    },
    specialAttack() {
      this.countAttact++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.monsterHealth = Math.max(0, this.monsterHealth);
      this.attackPlayer();
    },
    healPlayer() {
      this.countAttact++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue <= 100) this.playerHealth += healValue;
      else this.playerHealth = 100;
      this.attackPlayer();
    },
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.countAttact = 0;
      this.winner = null;
      this.logs = [];
    },
    surrender() {
      this.winner = "monster";
    },
    addLogs(who, what, action) {
      this.logs.push({
        who: this.who,
        what: this.what,
        action: this.action,
      });
    },
  },
});

app.mount("#game");
