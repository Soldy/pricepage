
import { product } from "./request.types.ts";
import { requestBool } from "@tool/request/tools";

export async function requestPatch(
  data : product
):bool {
  return await requestBool(
    "PATCH",
    data
  );
}
