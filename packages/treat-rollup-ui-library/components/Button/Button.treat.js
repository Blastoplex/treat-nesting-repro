import { style } from "treat";
import { link } from "../Link/Link.treat";

export const button = style({
  backgroundColor: "red",
  selectors: {
    [`${link} &`]: {
      backgroundColor: "aqua"
    }
  }
});
