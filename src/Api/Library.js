// URL base da API Gutendex
const bookLibraryUrl = 'https://gutendex.com/books';
const bookId = '';
const bookTitle = '';
const bookLanguage = '';
const bookCover = '';
const bookAuthor = '';



// Função para buscar livros por título ou autor
async function fetchBooks(query) {
    try {
        // Faz a requisição com a query de pesquisa
        const response = await fetch(`${bookLibraryUrl}?search=${query}`);
        
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Exibe os livros retornados no console
        console.log(data.results);
        
        // Opcional: manipule ou exiba os dados como desejar
        data.results.forEach(book => {
            console.log(`Título: ${book.title}`);
            console.log(`Autor(es): ${book.authors.map(author => author.name).join(", ")}`);
            console.log(`Link: ${book.gutenberg_url}`);
            console.log('---');
        });

    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

// Exemplo de uso: buscar livros de "Jane Austen"
fetchBooks('Jane Austen');
