export async function fetchLivrosFisicos() {
    const res = await fetch("http://localhost:8080/livro-fisico");
    if (!res.ok) throw new Error("Erro ao buscar livros físicos");
    return res.json();
}

export async function fetchLivrosDigitais() {
    const res = await fetch("http://localhost:8080/livro-digital");
    if (!res.ok) throw new Error("Erro ao buscar livros digitais");
    return res.json();
}