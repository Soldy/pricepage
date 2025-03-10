
import { product } from "@tool/request/type";
import { requestPatch } from "@model/request/patch";
import { requestPost } from "@model/request/post";

export async function requestSave(
  data : product
):bool {
    if(data.id !== 0){
      return await requestPatch(
        data
      );
    }
    return await requestPost(
      data
    );
};
