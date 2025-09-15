import Lista from "../Lista";
import { Artigo } from "@/lib/artigos";

type Props = {
    artigos: Artigo[];
};

const Grid = ({ artigos }: Props) => {
    // Dividir os artigos em duas colunas
    const midIndex = Math.ceil(artigos.length / 2);
    const leftColumn = artigos.slice(0, midIndex);
    const rightColumn = artigos.slice(midIndex);

    return (
        <div className="grid-container">
            <div className="grid-column">
                {leftColumn.map((artigo) => (
                    <div key={artigo.id} className="article-card">
                        <Lista artigos={[artigo]} />
                    </div>
                ))}
            </div>
            <div className="grid-column">
                {rightColumn.map((artigo) => (
                    <div key={artigo.id} className="article-card">
                        <Lista artigos={[artigo]} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Grid;