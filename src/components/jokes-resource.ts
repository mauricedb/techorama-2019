// import { unstable_createResource } from "react-cache";
import { unstable_createResource } from "./react-cache.development";

const jokesResource = unstable_createResource(async (url: string) => {
  const rsp = await fetch(url);
  const jokes = await rsp.json();
  return jokes;
});

export default jokesResource;
