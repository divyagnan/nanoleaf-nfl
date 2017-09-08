/**
 * Get an array of panels with color change information
 * @param {array} panels - the list of sorted panels
 * @param {array} colors - array of color objects
 * @param {number} start - the index at which to start the slice
 * @param {number} stop - the number at which to end the slice
 * @param {string} teamAbbreviation - the abbreviation of the team
 * @returns {array} array of color transformations
 */
const colorPanels = (panels, colors, start, stop, teamAbbreviation) =>
  panels.slice(start, stop).map(p => ({
    id: p.id,
    ...colors[teamAbbreviation],
    transition: 50
  }));

/**
* Sets the layout to the color of the teams that are passed in
* @param {} api - the nanoleaf aurora api
* @param {array} colors - array of color objects
* @param {string} homeTeamAbbreviation 
* @param {string} awayTeamAbbreviation 
*/
const setTeamLayout = async (
  api,
  colors,
  homeTeamAbbreviation,
  awayTeamAbbreviation
) => {
  // get the panel data from the nanoleaf
  const { panels } = await api.layout();

  // loop through the panels and sort by distance
  // HACK: assumes that the panels are in a straight line
  const sortedPanels = panels.sort((a, b) => a.x < b.x);

  // get the list of colored panels for each team
  const homeTeam = colorPanels(
    sortedPanels,
    colors,
    0,
    4,
    homeTeamAbbreviation
  );
  const awayTeam = colorPanels(
    sortedPanels,
    colors,
    5,
    9,
    awayTeamAbbreviation
  );

  // call the api to set the panels to the correct colors
  const newCombinedPanelColors = [...homeTeam, ...awayTeam];
  api.setStaticPanel(newCombinedPanelColors);
};

export default setTeamLayout;
