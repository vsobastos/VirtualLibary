import ToggleAuthorControl from './AdminComponents/toggleControl';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { TreeSelect } from '@wordpress/components';
import BookSection from './components/BookSection';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const { books, hideAuthor, language } = attributes;

    // Função para atualizar o idioma selecionado
    const handleLanguageChange = (newLanguage) => {
        setAttributes({ language: newLanguage });
    };

    return (
        <>
            {/* Controles do bloco */}
            <InspectorControls>
                <ToggleAuthorControl
                    hideAuthor={hideAuthor}
                    setAttributes={setAttributes}
                />
                <TreeSelect
                    label="Selecione o Idioma"
                    selectedId={language}
                    onChange={handleLanguageChange}
                    tree={[
                        {
                            name: 'Idiomas',
                            id: 'languages',
                            children: [
                                { name: 'Português', id: 'pt-br' },
                                { name: 'Francês', id: 'fr' },
                                { name: 'Inglês', id: 'en' },
                            ],
                        },
                    ]}
                />
            </InspectorControls>

            {/* Conteúdo do bloco */}
            <BookSection hideAuthor={hideAuthor} />
        </>
    );
}
