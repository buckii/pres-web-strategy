// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,
	transition: 'concave', // default/cube/page/concave/zoom/linear/fade/none
});

function update_body_id_class(event) {
	body = document.getElementsByTagName('body')[0];
	body.id = 'slide-' + event.indexh + (event.indexv ? '-' + event.indexv : '');
	body.className = /no-footer/.test(event.currentSlide.outerHTML) ? 'no-footer' : '';
}

Reveal.addEventListener( 'ready', update_body_id_class );
Reveal.addEventListener( 'slidechanged', update_body_id_class);
