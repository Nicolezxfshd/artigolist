import Title from "../Title";
import Lista from "../Lista";
import { artigos } from "@/lib/artigos";

export default function Home() {
  return (
    <main className="main">
      <Title title="Artigos que estão em alta" />
      <Lista artigos={artigos} />
    </main>
  );
}
