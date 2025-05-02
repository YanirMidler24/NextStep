import { TechnologyHeaderClient } from "@/components/Shared/Technology/TechnologyHeaderClient";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export function TechnologyHeader({ tech }: { tech: TechnologyInfo }) {
  return <TechnologyHeaderClient tech={tech} />;
}
