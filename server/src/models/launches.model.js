const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
  return launches.has(launchId);
}

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  // Reorder properties to ensure flightNumber is first
  const newLaunch = {
    flightNumber: latestFlightNumber,
    mission: launch.mission,
    rocket: launch.rocket,
    launchDate: launch.launchDate,
    target: launch.target,
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
  };
  launches.set(latestFlightNumber, newLaunch);
}

function abortLaunchWithId(launchId){
  const aborted = launches.get(launchId);
  if (aborted) {
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
  }
  return null;
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
  existsLaunchWithId,
  abortLaunchWithId
};
