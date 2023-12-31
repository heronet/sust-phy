import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  item: {
    title: string;
    link: string;
    description: string;
  };
};

const ItemCard = ({ item }: Props) => {
  return (
    <Link
      href={item.link}
      className="border rounded flex flex-col p-3 gap-2 hover:shadow transition"
    >
      <span className="text-xl">{item.title}</span>
      <span className="text-sm">{item.description}</span>
    </Link>
  );
};

export default ItemCard;
