import { setWorldConstructor } from "@cucumber/cucumber";
import { GraphQLClient } from "../../base/GraphqlClient";
import { request, APIRequestContext } from "@playwright/test";

export class CustomWorld {
  gqlClient!: GraphQLClient;
  defaultPayload: any;
  customData: any;
  payload: any;
  response: any;
  worldData: any = {};
  apiContext!: APIRequestContext;

  constructor() {
    this.worldData={};
  }

  async init() {
    this.apiContext = await request.newContext({
      ignoreHTTPSErrors: true 
    });
     this.gqlClient = new GraphQLClient(this.apiContext);
  }
  async dispose() {
    await this.apiContext.dispose();
  }
}
setWorldConstructor(CustomWorld);