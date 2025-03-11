

import { productout } from "@tool/request/types";
import { requestBool } from "@tool/request/tools";

export async function requestPost(
  data : productout
): Promise<boolean> {
  return await requestBool(
    "POST",
    data
  );
}
