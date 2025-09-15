export default function CategoriasPage() {
  return (
    <main className="artigos-container">
      <h1>Categorias</h1>
      <div className="categories-grid">
        {['Tecnologia', 'Programação', 'Design', 'Produtividade', 'Carreira'].map((category) => (
          <div key={category} className="category-card">
            <h2>{category}</h2>
            <p>Artigos sobre {category.toLowerCase()}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
