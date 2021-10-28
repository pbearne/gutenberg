/**
 * WordPress dependencies
 */
import {
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	Card,
	ColorIndicator,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import { useStyle } from './hooks';

const StylesPreview = () => {
	const [ fontFamily = 'serif' ] = useStyle( 'typography.fontFamily' );
	const [ textColor = 'black' ] = useStyle( 'color.text' );
	const [ linkColor = 'blue' ] = useStyle( 'elements.link.color.text' );
	const [ backgroundColor = 'white' ] = useStyle( 'color.background' );
	const [ gradientValue ] = useStyle( 'color.gradient' );
	const [ backgroundStyle ] = gradientValue
		? { backgroundImage: gradientValue }
		: { backgroundColor: backgroundColor };
	return (
		<Card
			className="edit-site-global-styles-preview"
			style={ { backgroundStyle } }
		>
			<HStack spacing={ 5 }>
				<div
					style={ { fontFamily, fontSize: '80px', color: textColor } }
				>
					Aa
				</div>
				<VStack spacing={ 2 }>
					<ColorIndicator colorValue={ textColor } />
					<ColorIndicator colorValue={ linkColor } />
				</VStack>
			</HStack>
		</Card>
	);
};

export default StylesPreview;
