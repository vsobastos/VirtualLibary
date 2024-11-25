import React from 'react';
import PropTypes from 'prop-types';

export default function DefaultButton({ href, target, label, className }) {
  return (
    <a
      className={`w-full max-w-[345px] h-auto bg-green-500 py-4 px-7 rounded 
        text-sm text-white font-medium no-underline leading-4 text-center ${className}`}
      href={href}
      target={target}
    >
      {label}
    </a>
  );
}

DefaultButton.propTypes = {
  /** URL para onde o botão irá redirecionar */
  href: PropTypes.string,
  /** Target do link (ex: "_blank", "_self") */
  target: PropTypes.string,
  /** Texto do botão */
  label: PropTypes.string.isRequired,
  /** Classe CSS adicional */
  className: PropTypes.string,
};

DefaultButton.defaultProps = {
  href: '#',
  target: '_self',
  className: '',
};
