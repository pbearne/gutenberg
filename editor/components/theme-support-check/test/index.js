/**
 * External dependencies
 */
import { shallow } from 'enzyme';

/**
 * Internal dependencies
 */
import { ThemeSupportCheck } from '../index';

describe( 'ThemeSupportCheck', () => {
	it( 'should not render if there\'s no support check provided', () => {
		const wrapper = shallow( <ThemeSupportCheck>foobar</ThemeSupportCheck> );
		expect( wrapper.type() ).toBe( null );
	} );

	it( 'should render if post-thumbnails are supported', () => {
		const themeSupports = {
			'post-thumbnails': true,
		};
		const supportKeys = 'post-thumbnails';
		const wrapper = shallow( <ThemeSupportCheck
			supportKeys={ supportKeys }
			themeSupports={ themeSupports }>foobar</ThemeSupportCheck> );
		expect( wrapper.type() ).not.toBe( null );
	} );

	it( 'should not render if theme doesn\'t support post-thumbnails', () => {
		const themeSupports = {
			'post-thumbnails': false,
		};
		const supportKeys = 'post-thumbnails';
		const wrapper = shallow( <ThemeSupportCheck
			supportKeys={ supportKeys }
			themeSupports={ themeSupports }>foobar</ThemeSupportCheck> );
		expect( wrapper.type() ).toBe( null );
	} );
} );
