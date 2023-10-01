import { _setCurrentAccount } from "./index.js";
import store from "../index.js";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccount(data))

