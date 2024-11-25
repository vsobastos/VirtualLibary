import DefaultButton from "./DefaultButton";
export default function BookItem() {
    return (
        <li className='
                flex flex-col gap-4 bg-white rounded px-10 py-5 w-52 h-auto text-center shadow-lg shrink-0
            '
        >
            <img
                className='
                    w-28 h-48 object-cover rounded m-auto  
                '
                src="https://images.pexels.com/photos/24827415/pexels-photo-24827415/free-photo-of-mar-homem-mao-vintage.jpeg"
                alt="Capa do Livro da API"
            />
            <div className='
                    flex flex-col gap-1
                '
            >
                <h3 className='
                        leading-5 text-base font-medium
                    '
                >
                    Titulo do Livro
                </h3>
                <h4 className='
                        leading-4 text-xs font-normal
                    '
                >
                    Autor do Livreo
                </h4>
            </div>
                <DefaultButton></DefaultButton>
        </li>
    );
}