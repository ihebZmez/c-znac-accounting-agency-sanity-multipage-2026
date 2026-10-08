import { useSanityData } from "./useSanityData";
import { SERVICES_QUERY } from "../queries";

export const useServices = () => useSanityData(SERVICES_QUERY, {}, []);
