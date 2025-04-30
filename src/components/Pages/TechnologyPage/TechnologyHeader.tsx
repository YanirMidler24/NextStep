import { TechnologyHeaderClient } from "@/components/Shared/TechnologyHeaderClient";
import { TechnologyInfo } from "@/interfaces/TechnologyInfo.interface";

export function TechnologyHeader({ tech }: { tech: TechnologyInfo }) {
  return <TechnologyHeaderClient tech={tech} />;
}
