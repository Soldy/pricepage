
import { productout } from "@tool/request/types";
import { requestBool } from "@tool/request/tools";

export async function requestPatch(
  data : productout
): Promise<boolean> {
  return await requestBool(
    "PATCH",
    data
  );
}
