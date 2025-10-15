let fatigueLevel = 0;

function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    fatigueLevel += 20;
    callback(name);
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    
    if (Math.random() < fatigueLevel / 100) {
      console.log(`${name} fell asleep after mowing the yard.`);
      return;
    }
    console.log(`${name} finished using the weed eater.`);
    fatigueLevel += 20;
    callback(name);
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    if (Math.random() < fatigueLevel / 100) {
      console.log(`${name} fell asleep after weed eating the yard.`);
      return;
    }
    console.log(`${name} finished trimming the hedges.`);
    fatigueLevel += 20;
    callback(name);
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(() => {
    if (Math.random() < fatigueLevel / 100) {
      console.log(`${name} fell asleep after trimming the hedges.`);
      return;
    }
    console.log(`${name} finished collecting wood.`);
    fatigueLevel += 20;
    callback(name);
  }, 2500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    if (Math.random() < fatigueLevel / 100) {
      console.log(`${name} fell asleep after collecting wood.`);
      return;
    }
    console.log(`${name} finished watering the garden.`);
    fatigueLevel += 20;
    callback(name);
  }, 500);
}

function allChoresComplete(name) {
  console.log(`${name} finished all their chores!`);
  fatigueLevel = 0;
}

function doSummerChores(name) {
  fatigueLevel = 0;
  mowYard(name, (personName) => {
    weedEat(personName, (personName) => {
      trimHedges(personName, (personName) => {
        collectWood(personName, (personName) => {
          waterGarden(personName, allChoresComplete);
        });
      });
    });
  });
}

doSummerChores("Shannon");

