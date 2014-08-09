/**
 * DISQUS Multiple Threads
 */
(function(){
    
    // defaults values
    var options = window.qs({
        blog: null,
        thread: null,
        
        // thread config
        url: '',
        title: '',
        
        
        // iframe config
        id: '',
        class: 'jsbox-disqus',
        style: ''
    });
    
    
    if (options.blog && options.thread) {
        
        options.title = options.title || document.title + ' (' + options.thread + ')';
        options.id = options.id || 'disqus-' + options.thread.replace(/\//g, '_');
        options.url = options.url || document.location.href.split('#')[0] + options.id;
        
        console.log(options.url);
        
        document.write(
            '<iframe ' +
            'id="' + options.id + '" ' +
            'class="' + options.class + '" ' +
            'style="' + options.style + '" ' +
            '></iframe>'
        );

        var iframe = document.getElementsByTagName('iframe');
        iframe = iframe[iframe.length-1];
        var scope = iframe.contentWindow;
        
        scope.disqusResize = function(w, h) {
            iframe.style.height = (h + h / 100 * 5) + 'px';
        };
        
        scope.document.open();
        scope.document.write(
            '<div id="disqus_thread"></div>' + 
            '<script>' +
            'var disqus_shortname = "' + options.blog + '";' +
            'var disqus_identifier = "' + options.thread + '";' +
            'var disqus_url = "' + options.url + '";' +
            'var disqus_title = "' + options.title + '";' +
            '(function() {' +
                "var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;" +
                "dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';" +
                "(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);" +
            '})();' +
            '</script>' +
            '<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>' +
            '<script>' +
            'var d = document.getElementById("disqus_thread");' +
            'setInterval(function() {' + 
                'window.disqusResize(d.offsetWidth, d.offsetHeight);' +
            '}, 500);' +
            '</script>'
        );
        scope.document.close();
    }
    
})();