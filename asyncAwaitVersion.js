
let fatigueLevel = 0;

function mowYard(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      fatigueLevel += 20;
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if person fell asleep
      if (Math.random() < fatigueLevel / 100) {
        console.log(`${name} fell asleep after mowing the yard.`);
        reject(new Error(`${name} fell asleep after mowing the yard.`));
      } else {
        console.log(`${name} finished using the weed eater.`);
        fatigueLevel += 20;
        resolve(name);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < fatigueLevel / 100) {
        console.log(`${name} fell asleep after weed eating the yard.`);
        reject(new Error(`${name} fell asleep after weed eating the yard.`));
      } else {
        console.log(`${name} finished trimming the hedges.`);
        fatigueLevel += 20;
        resolve(name);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < fatigueLevel / 100) {
        console.log(`${name} fell asleep after trimming the hedges.`);
        reject(new Error(`${name} fell asleep after trimming the hedges.`));
      } else {
        console.log(`${name} finished collecting wood.`);
        fatigueLevel += 20;
        resolve(name);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < fatigueLevel / 100) {
        console.log(`${name} fell asleep after collecting wood.`);
        reject(new Error(`${name} fell asleep after collecting wood.`));
      } else {
        console.log(`${name} finished watering the garden.`);
        fatigueLevel += 20;
        resolve(name);
      }
    }, 500);
  });
}

async function doSummerChores(name) {
  fatigueLevel = 0;

  
  try {
    const personName = await mowYard(name);
    await weedEat(personName);
    await trimHedges(personName);
    await collectWood(personName);
    await waterGarden(personName);
    console.log(`${personName} finished all their chores!`);
  } catch (error) {
    console.log(error.message);
  }
}

//test test
doSummerChores("Shannon");