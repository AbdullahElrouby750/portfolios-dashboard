import { useContext } from "react";
import { AuthContext } from "../../../context/categorized context/AuthProvider";

export default function useAuth(){
    return useContext(AuthContext);
}