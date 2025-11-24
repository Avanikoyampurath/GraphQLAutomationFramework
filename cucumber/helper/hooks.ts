import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "../helper/world"; 

Before(async function (this: CustomWorld) {
  await this.init();
});
After(async function (this: CustomWorld) {
  await this.dispose();
});

