"use strict";
import { createResponse } from "../helpers/response";

export const hello = async (event, context) => createResponse(200, {
  message: "Encountered a test!"
});