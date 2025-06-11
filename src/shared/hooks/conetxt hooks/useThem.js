import { useContext } from "react";
import { ThemContext } from "../../../context/categorized context/ThemProvider";

export default function useThem() {
    return useContext(ThemContext);
}