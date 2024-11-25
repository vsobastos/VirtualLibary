import { ToggleControl } from '@wordpress/components';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

const ToggleAuthorControl = ( { hideAuthor, setAttributes } ) => {
    return (
        <ToggleControl
            label="Esconder Autor"
            checked={ hideAuthor }
            onChange={ () => setAttributes({ hideAuthor: !hideAuthor }) }
        />
    );
};

export default ToggleAuthorControl;
