# 🏈 nanoleaf-nfl

> color your nanoleaf based on nfl teams

🚧 _under construction_ 🚧

If your nanoleaf is setup in the 'correct' way (all in a straight line with 9 total panels) then running nanoleaf-nfl will search for the nfl games that are happening today and set the nanoleaf to the colors of the two teams which are playing.

### In Action

![gif showing what this does](resources/in_action.gif)

On the day I recorded this gif (Thursday September 7th) the Patriots and Chiefs were playing the opening game. This gif shows the nanoleaf in its 'base' state (all white) and then nanoleaf-nfl kicks in and changes the color.

### API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

##### Table of Contents

-   [init](#init)
-   [colorPanels](#colorpanels)
-   [setTeamLayout](#setteamlayout)
-   [getNFLData](#getnfldata)
-   [getTodayGame](#gettodaygame)

#### init

Start up nanoleaf-nfl

**Parameters**

-   `aurora` **any** api to manipulate the nanoleaf
-   `network` **any** some api to make network calls
-   `colors` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** array of colors for every nfl team

#### colorPanels

Get an array of panels with color change information

**Parameters**

-   `panels` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** the list of sorted panels
-   `colors` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** array of color objects
-   `start` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the index at which to start the slice
-   `stop` **[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)** the number at which to end the slice
-   `teamAbbreviation` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** the abbreviation of the team

Returns **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** array of color transformations

#### setTeamLayout

Sets the layout to the color of the teams that are passed in

**Parameters**

-   `api`  
-   `colors` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** array of color objects
-   `homeTeamAbbreviation` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 
-   `awayTeamAbbreviation` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** 

#### getNFLData

Get the list of games/scores from the nfl

**Parameters**

-   `network` **any** some api to make network calls

Returns **any** nfl data for the current week (games, week number, etc)

#### getTodayGame

Get today's game from a list of all games
(or in the event that today is not game day, get the next closest game)

**Parameters**

-   `games` **[array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** the array of games this week

Returns **[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** data for todays game (who is playing, score, etc)
