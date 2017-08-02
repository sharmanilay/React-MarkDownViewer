var textarea = document.getElementById('markdown')
if (window.localStorage) {
	textarea.addEventListener('input', function() {
		localStorage.setItem('markdownStorage', textarea.value)
	})
}
