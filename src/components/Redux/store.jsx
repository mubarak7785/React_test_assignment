import { createStore} from "redux";
import { Cityreducer } from "./City-reducer";

export const store =createStore(Cityreducer)