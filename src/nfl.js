import isMonday from "date-fns/is_monday";
import isThursday from "date-fns/is_thursday";
import isSunday from "date-fns/is_sunday";
import startOfToday from "date-fns/start_of_today";

/**
 * Get the list of games/scores from the nfl
 * @param {*} network - some api to make network calls
 * @returns nfl data for the current week (games, week number, etc)
 */
export const getNFLData = async network => {
  const response = await network.get(
    "http://www.nfl.com/liveupdate/scorestrip/ss.json"
  );

  return response.data;
};

/**
 * Get today's game from a list of all games
 * (or in the event that today is not game day, get the next closest game)
 * @param {array} games - the array of games this week
 * @returns {object} data for todays game (who is playing, score, etc)
 */
export const getTodayGame = games => {
  const today = startOfToday();
  if (isMonday(today)) {
    // today is monday! mnf :)
    return games.find(game => game.d.includes("Mon"));
  } else if (isThursday(today)) {
    // today is thursday! tnf :(
    return games.find(game => game.d.includes("Thu"));
  } else if (isSunday(today)) {
    // today is sunday! game day :)
    return games.find(game => game.d.includes("Sun"));
  } else {
    // no games today :( so get the next unplayed game
    // find the first game without a home and visitor score (since that means it hasn't been played yet)
    const potentialGame = games.find(
      game => typeof game.hs === "undefined" && typeof game.vs === "undefined"
    );

    // if the potential game is not undefined that means there is an unplayed game this week
    if (typeof potentialGame !== "undefined") {
      return potentialGame;
    } else {
      // pick the last game in the list since all games have been played
      return games.slice(-1)[0];
    }
  }
};
