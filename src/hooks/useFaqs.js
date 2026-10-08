import { useSanityData } from "./useSanityData";
import { FAQS_QUERY } from "../queries";

export const useFaqs = () => useSanityData(FAQS_QUERY, {}, []);
