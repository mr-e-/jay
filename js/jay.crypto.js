var Jay = (function(Jay, $, undefined) {

	Jay.crypto = {};

	Jay.crypto.sha256 = function(digest) {
		var hash = CryptoJS.SHA256(digest);
		return hash.toString(CryptoJS.enc.Base64);
	}
	

	return Jay;
}(Jay || {}, jQuery));