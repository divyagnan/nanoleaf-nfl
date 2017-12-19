// packages
import AuroraAPI from "nanoleaves";
import axios from "axios";
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
 */
const init = async (aurora, network, colors) => {
  try {
    // get current week nfl game data
    const { gms } = await getNFLData(network);

    // figure out what day it is and get the home and visitor team
    // const todayGame = getTodayGame(isMonday, isThursday, isSunday, startOfToday);
    const { h, v } = await getTodayGame(gms);
    // set the colors of the teams that are playing today
    setTeamLayout(aurora, colors, h, v);
  } catch (error) {
    console.error(error);
  }
};

// wire everything up and make it work!
init(aurora, axios, colors);
