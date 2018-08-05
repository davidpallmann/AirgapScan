# AirgapScan
Chrome extension for validating air-gapped software. Scans the current page and reports disallowed URLs.

Some customers run very secure environments in which Internet access is not permitted. If you are developing software for such an environment, you must avoid all http/https access other than to your own web site. Because developers normally take Internet availability for granted, and because open-source software is commonly used, it can be difficult to be sure if your web solution is ready to run in an air-gapped environment or not. That's the purpose of this extension: to help confirm your software is ready for an air-gapped environment.

<b>Installation</b>

Follow these steps to install the extension:

1. Download AirgapScan to a folder on your computer.
2. Edit the content.js file and update the AllowableNetworks array to suit your target and test environments (see Confguration section below).
3. In Chrome, navigate to chrome://extensions
4. At the upper right area of the page, enable Developer Mode.
5. Click the LOAD UNPACKED link near the top of the page.
6. Navigate to and select the folder from Step 1.
7. That's it. Browse to a new page, and try out AirgapScan.

<b>Usage</b>

After installing the extension, visit a page of your software. To scan the page, right-click the "AG" extension icon and select Scan Now from the menu. You'll either get a green "Airgap OK" confirmation box, or a red "Airgap Alert" box listing the URL(s) on the page that are disallowed. THe list of offending URLs will also be written to the browser console.

<b>Configuration</b>

In the JavaScript code for AirgapScan, content.js contains an array named AllowableNetworks. By default, this will allow references to http[s]://10.x.x.x. If the permissible network for your target environment is at some other address, change this value accordingly. Also, if you want to allow some other IPs/domains such as your testing environment, you may add additional entries.

	var allowableNetworks = [ '://10.',       // allowed: [http|https]://10.x.x.x 
				  '://www.mytestdomain.com'  // allowed: [http|https]://www.mytestdomain.com...
				];

<b>Alert Example</b>

![alt text](/screencap_alert1.png)

![alt text](/screencap_ok.png)
