import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import ModelStore from "./modalStore";
import ProfileStore from "./ProfileStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: UserStore;
    modalStore: ModelStore;
    profileStore: ProfileStore;
}

export const store : Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    modalStore: new ModelStore(),
    profileStore: new ProfileStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}