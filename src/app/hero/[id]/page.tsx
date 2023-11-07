import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

async function getData(): Promise<{ data: IHeroData[] }> {
  // const res = await fetch("http://localhost:3000/api/heroes");
  const res = await fetch("http://dio-spiderverse-1p9840lyd-brunodorea.vercel.app/api/heroes");

  if (!res.ok) {
    throw new Error("Falha ao buscar heróis");
  }

  return res.json();
}

export default async function Hero({ params: { id } }: IProps) {
  const res = await getData();

  return <Carousel heroes={res.data} activeId={id} />;
}
