import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "store";

export function useRedux(): [Store, Dispatch<any>] {
  const reduxStore = useSelector<Store, Store>((store) => store);
  const dispatch = useDispatch();
  return [reduxStore, dispatch];
}
