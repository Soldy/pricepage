
import { requestBool } from "@tool/request/tools";

export async function requestDelete(
  id : number
): bool {
  return await requestBool(
    "POST",
    [id]
  );
}
