import React, { ButtonHTMLAttributes, FC } from 'react';
import { Intent } from './types';

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	intent?: Intent;
	inverse?: boolean;
};

const Badge: FC<BadgeProps> = ({ intent = null, inverse = false, className = '', ...props }) => {
	let hover = '',
		active = '',
		disabled = 'disabled:bg-opacity-50';

	switch (intent) {
		case Intent.danger:
			hover += 'hover:bg-red-600';
			className += ` ${inverse ? 'bg-red-600 text-white' : 'bg-red-200 text-red-800'}`;
			active += 'active:bg-red-800';
			break;
		case Intent.warning:
			hover += 'hover:bg-yellow-500';
			className += ' bg-yellow-300 text-yellow-800';
			active += 'active:bg-yellow-700';
			break;
		case Intent.primary:
			hover += 'hover:bg-blue-400';
			className += ' bg-blue-200 text-blue-800';
			active += 'active:bg-blue-600';
			break;
		case Intent.success:
			hover += 'hover:bg-green-400';
			className += ' bg-green-200 text-green-800';
			active += 'active:bg-green-600';
			break;
		case Intent.secondary:
			className += ' bg-gray-300';
			disabled += ' disabled:text-gray-500';
			break;
		default:
			disabled += ' disabled:text-gray-500';
			// hover += 'hover:bg-blue-400';
			className += ' text-gray-800';
			// active += 'active:bg-blue-600';
			break;
	}

	const Tag = !!props.type ? 'button' : 'span';

	return (
		<Tag
			className={`whitespace-nowrap px-2 inline-flex font-semibold text-xs hover:transition-colors focus:ring ease-in-out duration-100 rounded-full ${disabled} ${props.onClick ? active : ''} ${
				props.onClick ? hover : ''
			} ${className}`}
			{...props}
		/>
	);
};

export default Badge;