import { useSearchParams } from "next/navigation";

export default function useId(): number{
  return parseInt(
    (useSearchParams()).get('id') || '0'
  );
};
