import { useSanityData } from "./useSanityData";
import { PARTNERS_QUERY } from "../queries";

export const usePartners = () => useSanityData(PARTNERS_QUERY, {}, []);
