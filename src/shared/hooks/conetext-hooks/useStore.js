import { useContext } from "react"
import { TheStoreContext } from "../../../context/categorized-context/TheStoreContext"

export default function useStore() {
    return useContext(TheStoreContext)
}
