var gameData = {
    gold: 0
  , goldPerClick: 1
  , goldPerClickCost: 10
  , goldPerClickCostMult: 1.2
  , lastTick: Date.now()
}

var saveGame = JSON.parse(localStorage.getItem("goldMinerSave"));
if (saveGame !== null){
  gameData = savegame;
}

var mainGameLoop = window.setInterval(function(){
  mineGold();
}, 100)

var saveGameLoop = window.setInterval(function(){
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 15000)



function mineGold() {
  diff = Date.now() - gameData.lastTick;
  gameData.lastTick = Date.now();
  gameData.gold += gameData.goldPerClick * (diff / 100);
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
}

function buyGoldPerClick(){
  if (gameData.gold >= gameData.goldPerClickCost){
    gameData.gold -= gameData.goldPerClickCost;
    gameData.goldPerClick += 1;
    gameData.goldPerClickCost *= gameData.goldPerClickCostMult;
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined";
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " gold.";
  }
}
