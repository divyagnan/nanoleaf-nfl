import AuroraAPI from "nanoleaves";
import { token, host } from "../config";
import colors from "./colors";
import setTeamLayout from "./panels";

const aurora = new AuroraAPI({
  host,
  token
});

setTeamLayout(aurora, colors, "MIN", "NO");
