import { useState } from "react";
import { useRedux } from "./redux-hooks";
import { fulfilledKey, pendingKey, rejectedKey } from "store/fetch/actions";

type Status = "fulfilled" | "rejected" | "pending" | null;
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;

export function useFetchManager<T extends (...args: any) => any>(
  func: T
): [
  (...params: Parameters<T>) => Promise<ThenArg<ReturnType<T>>>,
  Status,
  ThenArg<ReturnType<T>> | null
] {
  const [data, setData] = useState<ThenArg<ReturnType<T>> | null>(null);
  const [status, setStatus] = useState<Status>(null);

  async function processAsync(
    params: Parameters<T>
  ): Promise<ThenArg<ReturnType<T>>> {
    setStatus("pending");
    try {
      const data = await func(params);
      setData(data);
      setStatus("fulfilled");
      return data;
    } catch (error) {
      console.log(error);
      setStatus("rejected");
      return error;
    }
  }

  return [processAsync, status, data];
}

export function useFetchManagerStore<T extends (...args: any) => any>(
  func: T,
  storeKey: string
): [(...params: Parameters<T>) => void, Status, ThenArg<ReturnType<T>> | null] {
  const [store, dispatch] = useRedux();

  async function processAsyncStore(params: Parameters<T>) {
    dispatch(pendingKey(storeKey));
    try {
      const data = await func(params);
      dispatch(fulfilledKey(storeKey, data));
    } catch (error) {
      dispatch(rejectedKey(storeKey, "Hata"));
    }
  }

  return [
    processAsyncStore,
    store.fetch[storeKey]?.status,
    store.fetch[storeKey]?.data,
  ];
}
