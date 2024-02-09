import { getInputs, runActionHandler } from "@infra-blocks/github-actions";
import { install } from "source-map-support";
import { handler } from "./handler.js";
import { parseInputs } from "./inputs.js";

runActionHandler(() => {
  install();
  return handler(parseInputs(getInputs("example-input")));
});
