
import { requestBool } from "@tool/request/tools";

export async function requestDelete(
  id : number
): Promise<boolean> {
  return await requestBool(
    "DELETE",
    [id]
  );
}
