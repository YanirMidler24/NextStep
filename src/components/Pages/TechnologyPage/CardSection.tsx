import { CardSectionClient } from "../../Shared/CardSectionClient";

interface CardSectionProps {
  title: string;
  items: string[];
}

export function CardSection({ title, items }: CardSectionProps) {
  return <CardSectionClient title={title} items={items} />;
}
