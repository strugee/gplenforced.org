'use strict';

var old_license = 'GPL';

// TODO update based on the selection box contents at load (can be different when the page is refreshed)

function init() {
	document.getElementById('y').textContent = 'Then, y';
	document.getElementById('selector_paragraph').removeAttribute('hidden');
	document.getElementById('selector').addEventListener('change', function(event) {
		var license = event.target.value.toUpperCase();
		// For unsupported browsers, this will cause a syntax error so we won't show the picker
		for (let el of document.getElementsByClassName('license')) {
			el.textContent = license;
		}
		var img = document.getElementById('license_img');
		img.src = img.src.replace(old_license, license);
		img.alt = img.alt.replace(old_license, license);
		img.title = img.title.replace(old_license, license);
		old_license = license;
		// TODO modify the url to include ?license=<license>
	});
}

document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
