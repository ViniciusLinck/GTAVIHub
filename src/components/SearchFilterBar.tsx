export function SearchFilterBar() {
  return (
    <section className="search-filter" aria-label="Busca e filtros">
      <div className="search-input">
        <span aria-hidden="true">⌕</span>
        <input type="search" placeholder="Buscar conteúdo" aria-label="Buscar conteúdo" />
      </div>
      <div className="filter-chips" aria-label="Filtros rápidos">
        <button type="button">Todos</button>
        <button type="button">História</button>
        <button type="button">Mapa</button>
        <button type="button">Guia</button>
      </div>
    </section>
  )
}
