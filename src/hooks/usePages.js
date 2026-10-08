import { useSanityData } from "./useSanityData";
import { PAGES_QUERY } from "../queries";

export const usePages = () => useSanityData(PAGES_QUERY, {}, []);
