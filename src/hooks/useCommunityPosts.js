import { useSanityData } from "./useSanityData";
import { COMMUNITY_POSTS_QUERY } from "../queries";

export const useCommunityPosts = () =>
  useSanityData(COMMUNITY_POSTS_QUERY, {}, []);
