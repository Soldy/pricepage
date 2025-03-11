
import { productout } from "@tool/request/types";
import { requestPatch } from "@model/request/patch";
import { requestPost } from "@model/request/post";

export async function requestSave(
  data : productout
): Promise<boolean> {

    if(data.id !== 0){
      return await requestPatch(
        data
      );
    }
    return await requestPost(
      data
    );
};
