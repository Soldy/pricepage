

import { product } from "@tool/request/types";
import { requestBool } from "@tool/request/tools";

export async function requestPost(
  data : product
):bool {
  return await requestBool(
    "POST",
    data
  );
}
