import { useSanityData } from "./useSanityData";
import { EXPERTISES_QUERY } from "../queries";

export const useExpertises = () => useSanityData(EXPERTISES_QUERY, {}, []);
