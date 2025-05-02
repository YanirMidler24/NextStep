import { TechnologyCommunityClient } from "@/components/Shared/Technology/TechnologyCommunityClient";

interface CommunityLink {
  url: string;
  platform: string;
}

export function TechnologyCommunity({
  communityLinks,
}: {
  communityLinks: CommunityLink[];
}) {
  return <TechnologyCommunityClient communityLinks={communityLinks} />;
}
