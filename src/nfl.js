/**
 * Get the list of games/scores from the nfl
 * @param {*} network - some api to make network calls
 * @returns nfl data for the current week (games, week number, etc)
 */
export const getNFLData = async network => {
  const response = await network.get(
    "http://www.nfl.com/liveupdate/scorestrip/ss.json"
  );
  const data = await response.data;
  return data;
};

/**
 * Get today's game from a list of all games
 * @param {array} games - the array of games this week
 * @param {function} isMonday - checks if a given date is monday
 * @param {function} isThursday - checks if a given date is thursday
 * @param {function} isSunday - checks if a given date is sunday
 * @param {function} startOfToday - generates today
 * @returns {object} data for todays game (who is playing, score, etc)
 */
export const getTodayGame = (
  games,
  isMonday,
  isThursday,
  isSunday,
  startOfToday
) => {
  const today = startOfToday();
  let game;
  if (isMonday(today)) {
    // today is monday! mnf :)
    game = games.find(game => today.toString().includes("Mon"));
  } else if (isThursday(today)) {
    // today is thursday! tnf :(
    game = games.find(game => today.toString().includes("Thu"));
  } else {
    // today is sunday! game day :)
    game = games.find(game => today.toString().includes("Sun"));
  }
  return game;
};
