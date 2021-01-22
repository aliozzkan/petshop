import { PetApi, UserApi, StoreApi } from "./pet/api";
import { useFetchManager, useFetchManagerStore } from "hooks/fetch-manager";
import axios from "axios";

export const API = {
  Pet: new PetApi(),
  User: new UserApi(),
  Store: new StoreApi(),
};

export const API_HOOKS = {
  usePetsByStatus: () =>
    useFetchManager<typeof API.Pet.findPetsByStatus>((params) =>
      API.Pet.findPetsByStatus(params)
    ),
  usePetsByStatusStore: () =>
    useFetchManagerStore<typeof API.Pet.findPetsByStatus>(
      (params) => API.Pet.findPetsByStatus(params),
      "pets-by-status"
    ),
  usePosts: () => useFetchManager<typeof getPosts>(() => getPosts()),
  usePostsStore: () =>
    useFetchManagerStore<typeof getPosts>(() => getPosts(), "posts"),
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = (): Promise<Post[]> => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};
