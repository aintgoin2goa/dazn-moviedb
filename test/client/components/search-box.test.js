import {expect} from 'chai';
import searchBox from '../../../client/components/search-box';

describe('SearchBox', () => {

	it('Should render the searchBox', () => {
		const props = {searchTerm:'', movies:[]};
		const result = searchBox(props);
		expect(result.attributes.className).to.equal('search-box');
		expect(result.children).to.have.length(3);
		expect(result.children[0].nodeName).to.equal('label');
		expect(result.children[1].nodeName).to.equal('input');
		expect(result.children[2].nodeName).to.equal('button');
	})
});
