// packages
import AuroraAPI from "nanoleaves";
import axios from "axios";
import isMonday from "date-fns/is_monday";
import isThursday from "date-fns/is_thursday";
import isSunday from "date-fns/is_sunday";
import startOfToday from "date-fns/start_of_today";
// ours
import { token, host } from "../config";
import colors from "./colors";
import setTeamLayout from "./panels";
import { getNFLData, getTodayGame } from "./nfl";

// setup the nanoleaf api
const aurora = new AuroraAPI({
  host,
  token
});

/**
 * Start up nanoleaf-nfl
 * @param {*} aurora - api to manipulate the nanoleaf
 * @param {*} network - some api to make network calls
 * @param {array} colors - array of colors for every nfl team
 * @param {function} isMonday - checks if a given date is monday
 * @param {function} isThursday - checks if a given date is thursday
 * @param {function} isSunday - checks if a given date is sunday
 * @param {function} startOfToday - generates today
 */
const init = async (
  aurora,
  network,
  colors,
  isMonday,
  isThursday,
  isSunday,
  startOfToday
) => {
  // get current week nfl game data
  const { gms } = await getNFLData(network);

  // figure out what day it is and get the home and visitor team
  // const todayGame = getTodayGame(isMonday, isThursday, isSunday, startOfToday);
  const { h, v } = await getTodayGame(
    gms,
    isMonday,
    isThursday,
    isSunday,
    startOfToday
  );

  // set the colors of the teams that are playing today
  setTeamLayout(aurora, colors, h, v);
};

// wire everything up and make it work!
init(aurora, axios, colors, isMonday, isThursday, isSunday, startOfToday);
