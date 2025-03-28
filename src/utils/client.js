import OpenAI from "openai";
import { OPENAI_API_KEY } from "./openAiKey";
const client = new OpenAI({
  baseURL: "https://beta.sree.shop/v1",
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default client;
