// content.js


// This routes a message from background.js (context menu action selected) to the airgapScan function in this file.

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    sendResponse(airgapScan());
});


// airgapScan: scan the page, examine each href. Collect a list of non-allowable hrefs and display an alert.

function airgapScan() {

	console.log('--- Airgap Scan ---');

	var allowableNetworks = [ '://10.',       // allowed: [http|https]://10.x.x.x 
				  '://www.mytestdomain.com'  // allowed: [http|https]://www.mytestdomain.com...
				];
	var urlCount = 0;
	var errorCount = 0;
	var url;
	var urls = [];
	var errList = '';
	var listAll = false;

	$("a").each(function() {
		if (this.href != undefined) {
			url = this.href;
			if (url!=null && url!='' && url.indexOf('javascript:')==-1 && url.indexOf('mailto:')==-1) {
				urlCount++;
				urls.push(url);
				var error = true;
				for (var p = 0; p < allowableNetworks.length; p++) {
					if (url.indexOf(allowableNetworks[p])!=-1) {
						error = false;
						break;
					}
				}
				if (error) {
					errorCount++;
					console.error('URL outside of network detected: ' + url);
					errList = errList + '<br/>' + url;
				}

			}
		}
	})
	if (listAll && urls.length > 0) {
		for (var i = 0; i < urls.length; i++) {
			console.log(i.toString() + ': ' + urls[i]);
		}
	}

	console.log('--- end Airgap Scan - URLs: ' + urlCount.toString() + ', Errors: ' + errorCount.toString() + ' ---');

	if (errorCount > 0) {
		if (errorCount==1) {
			$.alert({
				//icon: 'fa fa-warning',
				type: 'red',
				title: 'Airgap Alert',
				content: 'Warning: Airgrap scan found 1 url that violates airgap rules:<br/>' + errList,
				useBootstrap: false
			});
		}
		else {
			$.alert({
				//icon: 'fa fa-warning',
				type: 'red',
				title: 'Airgap Alert',
				content: 'Warning: Airgrap scan found ' + errorCount.toString() + ' urls that violate airgap rules:<br/>' + errList,
				useBootstrap: false
			});
		}
	}
	else {
		$.alert({
				title: 'Airgap OK',
				type: 'green',
				content: 'All good: No airgap errors found',
				useBootstrap: false
			});
	}
}

// Default state is that the user initiates a scan from the context menu. Uncomment the line below if you want the scan to automatically run when a page loads. 
//airgapScan();

