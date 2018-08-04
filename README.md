# AirgapScan
Chrome extension for validating air-gapped software. Scans the current page and reports disallowed URLs.

Some customers run very secure environments in which Internet access is not permitted. If you are developing software for such an environment, you must avoid all http/https access other than to your own web site. Because developers normally take Internet availability for granted, and because open-source software is commonly used, it can be difficult to be sure if your web solution is ready to run in an air-gapped environment or not.

That's the purpose of this extension: to help confirm your software is ready for an air-gapped environment. After installing it, you can perform an on-demand airgap scan of the page you're on, by right-clicking the "AG" extension icon and clicking Scan Now. You'll either get a green "Airgap OK" confirmation box, or a red "Airgap Alert" box listing the URL(s) on the page that are disallowed.

In the JavaScript code for AirgapScan, content.js contains an array named AllowableNetworks. By default, this will allow references to http[s]://10.x.x.x. If the permissible network for your target environment is at some other address, change this value accordingly. Also, if you want to allow some other IPs/domains such as your testing environment, you may add additional entries.

![alt text](/screencap_alert1.png)
