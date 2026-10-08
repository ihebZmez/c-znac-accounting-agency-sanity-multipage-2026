import { useSanityData } from "./useSanityData";
import { TEAM_QUERY } from "../queries";

export const useTeam = () => useSanityData(TEAM_QUERY, {}, []);
