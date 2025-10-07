class VisitorDetector {
    constructor() {
        this.ua = navigator.userAgent.toLowerCase();
        this.visitorType = this.getVisitorType();
        this.init();
    }

    getGoogleVariants() {
        return [
            'googlebot', 'google-inspectiontool', 'apis-google',
            'mediapartners-google', 'adsbot-google', 'google page speed',
            'google web preview', 'google-safe-browsing', 'google-searchconsole',
            'google site verification', 'google favicon', 'google-read-aloud',
            'google-prober', 'google-image-prober'
        ];
    }

    getOfficialSearchEngines() {
        return [
            ...this.getGoogleVariants(),
            'bingbot', 'msnbot', 'msrbot', 'bingpreview', 'slurp',
            'duckduckbot', 'baiduspider', 'yandexbot', 'sogou', 'exabot',
            'facebookexternalhit', 'twitterbot', 'linkedinbot',
            'pinterest', 'whatsapp', 'telegrambot', 'alexa', 'siri', 'cortana',
            'pingdom', 'uptimerobot', 'newrelic', 'statuscake'
        ];
    }

    getSuspiciousBots() {
        return [
            'ahrefs', 'semrush', 'majestic', 'moz', 'seo', 'seoscanners',
            'seobility', 'serpstat', 'screaming frog', 'sitebulb', 'deepcrawl',
            'contentking', 'nmap', 'nessus', 'acunetix', 'sqlmap', 'nikto',
            'scraper', 'harvester', 'extractor', 'crawler', 'spam', 'malicious',
            'fake', 'pretender'
        ];
    }

    isGoogleBot() {
        return this.getGoogleVariants().some(pattern => this.ua.includes(pattern));
    }

    isOfficialBot() {
        return this.getOfficialSearchEngines().some(pattern => this.ua.includes(pattern));
    }

    isSuspiciousBot() {
        return this.getSuspiciousBots().some(pattern => this.ua.includes(pattern));
    }

    isHuman() {
        return !this.isOfficialBot() && !this.isSuspiciousBot();
    }

    getVisitorType() {
        if (this.isGoogleBot()) return 'google';
        if (this.isOfficialBot()) return 'official_bot';
        if (this.isSuspiciousBot()) return 'suspicious_bot';
        return 'human';
    }

    shouldShowPremiumContent() {
        // HANYA Googlebot yang melihat konten premium
        return this.visitorType === 'google';
    }

    shouldShowOriginalContent() {
        // Semua manusia dan bot lainnya melihat konten asli
        return this.visitorType === 'human' || this.visitorType === 'official_bot';
    }

    shouldShowBlockedContent() {
        // Hanya bot mencurigakan yang diblokir
        return this.visitorType === 'suspicious_bot';
    }

    init() {
        console.log('Visitor type:', this.visitorType);
        
        // Simpan jenis visitor
        sessionStorage.setItem('visitorType', this.visitorType);
        
        if (this.shouldShowPremiumContent()) {
            console.log('Showing premium content for Googlebot');
            this.showPremiumContent();
        } else if (this.shouldShowOriginalContent()) {
            console.log('Showing original content for human/official bot');
            this.showOriginalContent();
        } else if (this.shouldShowBlockedContent()) {
            console.log('Blocking suspicious bot');
            this.showBlockedContent();
        }
    }

    showPremiumContent() {
        // HANYA Googlebot yang melihat konten SEO-optimized ini
        const premiumContent = this.getPremiumContent();
        
        // Ganti seluruh body dengan konten premium
        document.body.innerHTML = premiumContent;
        
        // Juga update title dan meta description untuk SEO
        document.title = "SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025";
        this.updateMetaTags();
    }

    showOriginalContent() {
        // Manusia dan bot resmi lainnya melihat konten asli
        // Tidak melakukan apa-apa, biarkan halaman asli tetap tampil
        console.log('Original content preserved for human visitors');
        
        // Opsional: tambahkan tracking atau analytics untuk manusia
        this.trackHumanVisitor();
    }

    showBlockedContent() {
        // Untuk bot mencurigakan
        const blockedContent = `
            <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                <h2>Access Restricted</h2>
                <p>Automated access to this content is not permitted.</p>
            </div>
        `;
        
        document.body.innerHTML = blockedContent;
    }

    updateMetaTags() {
        // Update meta tags untuk SEO (hanya untuk Googlebot)
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = "Slot Mahjong merupakan tempat penyedia situs slot gacor terbaik sampai hari ini dengan tingkat RTP yang sangat tinggi. Temani waktu liburanmu bersama Slot Mahjong Ways dan rasakan sensasi gampang menang bertubi-tubi.";
        }
        
        // Tambahkan atau update canonical URL
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = window.location.href;
    }

    trackHumanVisitor() {
        // Tambahkan analytics atau tracking untuk pengunjung manusia
        // Contoh: Google Analytics, Facebook Pixel, dll.
        console.log('Tracking human visitor');
        
        // Contoh implementasi Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': document.title,
                'page_location': window.location.href
            });
        }
    }

    getPremiumContent() {
        // Kembalikan konten premium yang dioptimasi untuk SEO
        // Ini yang akan dilihat Googlebot
        return `
<!DOCTYPE html>

<html lang="en-US" xmlns:fb="https://www.facebook.com/2008/fbml" xmlns:og="http://ogp.me/ns#">
<head>
<script>
        if (window.performance && performance.mark) performance.mark("TTP")
    </script>
<meta charset="utf-8"/>
<meta content="IE=edge" http-equiv="X-UA-Compatible"/>
<meta content="en-ID" http-equiv="content-language"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<meta content="nosearch" name="pinterest"/>
<meta content="3:1741889934:GtuPX3ohmyBog4IY6QoWO0URz7kf:dd806c106085438d12cb43b9121daa1f774ddc393cdf91586f1d3400bf197932" name="csrf_nonce"/>
<meta content="3:1741889934:Lw684AyZSQBqU9bC7wvlWGHZsg5y:2f5c30bd176ae5669642be25c4f1712fc60d28b08823d0388a971b4bed58deca" name="uaid_nonce"/>
<meta content="89186614300" property="fb:app_id"/>
<meta content="/acgcs/sasquatch/css/" name="css_dist_path"/>
<meta content="202503131741888252" name="dist"/>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T46H67JB');</script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
        !function (e) { var r = e.__etsy_logging = {}; r.errorQueue = [], e.onerror = function (e, o, t, n, s) { r.errorQueue.push([e, o, t, n, s]) }, r.firedEvents = []; r.perf = { e: [], t: !1, MARK_MEASURE_PREFIX: "_etsy_mark_measure_", prefixMarkMeasure: function (e) { return "_etsy_mark_measure_" + e } }, e.PerformanceObserver && (r.perf.o = new PerformanceObserver((function (e) { r.perf.e = r.perf.e.concat(e.getEntries()) })), r.perf.o.observe({ entryTypes: ["element", "navigation", "longtask", "paint", "mark", "measure", "resource", "layout-shift"] })); var o = []; r.eventpipe = { q: o, logEvent: function (e) { o.push(e) }, logEventImmediately: function (e) { o.push(e) } }; var t = !(Object.assign && Object.values && Object.fromEntries && e.Promise && Promise.prototype.finally && e.NodeList && NodeList.prototype.forEach), n = !!e.CefSharp || !!e.__pw_resume, s = !e.PerformanceObserver || !PerformanceObserver.supportedEntryTypes || 0 === PerformanceObserver.supportedEntryTypes.length, a = !e.navigator || !e.navigator.sendBeacon, p = t || n, u = []; t && u.push("fp"), s && u.push("fo"), a && u.push("fb"), n && u.push("fg"), r.bots = { isBot: p, botCheck: u } }(window);
    </script>
<link href="https://www.etsy.com/dacgcs/site-chrome/components/components.66f856dee175bb,site-chrome/header/header.66f856dee175bb,__modules__CategoryNav__src__/Views/ButtonMenu/Menu.8d961c48ba074a,__modules__CategoryNav__src__/Views/DropdownMenu/Menu.66f856dee175bb,site-chrome/footer/footer.66f856dee175bb,gdpr/settings-overlay.66f856dee175bb.css?variant=sasquatch" rel="stylesheet" type="text/css"/>
<link href="https://www.etsy.com/dacgcs/neu/modules/listing_card_no_imports.66f856dee175bb,common/stars-svg.66f856dee175bb,neu/modules/favorite_listing_button.66f856dee175bb,neu/modules/quickview.66f856dee175bb,listzilla/responsive/listing-page-desktop.66f856dee175bb,category-nav/v2/breadcrumb_nav.73aa3516d0565d,web-toolkit-v2/modules/forms/radios.66f856dee175bb,listing-page/image-carousel/responsive_no_imports.66f856dee175bb,listzilla/image-overlay-no-imports.66f856dee175bb,__modules__ListingPage__src__/ShopHeader/ReviewStars/review_stars.13a39be61e3c32,common/simple-overlay.73aa3516d0565d,neu/payment_icons.66f856dee175bb,neu/apple_pay.66f856dee175bb,neu/google_pay.66f856dee175bb,listings3/checkout/single-listing-no-imports.66f856dee175bb,common/forms_no_import.66f856dee175bb,shop2/modules/regulatory-seller-details.66f856dee175bb,shop2/modules/seller-additional-details.66f856dee175bb,web-toolkit-v2/modules/banners/banners.66f856dee175bb,neu/common/follow-shop-button.66f856dee175bb,listzilla/responsive/review-content-modal.66f856dee175bb,appreciation_photos/photo_overlay.66f856dee175bb,listzilla/reviews/reviews_skeleton.66f856dee175bb,listzilla/reviews/reviews-section.66f856dee175bb,listzilla/listing-reviews.66f856dee175bb,web-toolkit-v2/modules/tabs/tabs.66f856dee175bb,reviews/subratings.66f856dee175bb,reviews/recommendation-signal.66f856dee175bb,web-toolkit-v2/modules/action_groups/action_groups.66f856dee175bb,listzilla/responsive/max-height-review.66f856dee175bb,listzilla/lazy-loaded-photo-dimensions.66f856dee175bb,reviews/feature-tags.66f856dee175bb,sort-by-reviews.66f856dee175bb,__modules__ListingPage__src__/Recommendations/RecsRibbon/view.66f856dee175bb,listings3/structured-policies.66f856dee175bb,__modules__CollectionRecs__src__/Views/Grid/view.66f856dee175bb,__modules__CollectionRecs__src__/Views/Card/view.66f856dee175bb,listzilla/responsive/tags.66f856dee175bb,web-toolkit-v2/modules/forms/checkboxes.66f856dee175bb,favorites/collection/list.66f856dee175bb,favorites/collection/row.66f856dee175bb,favorites/adaptive-height-desktop.66f856dee175bb,__modules__ConditionalSaleInterstitial__src__/styles.170ea67d95e5e2.css?variant=sasquatch" rel="stylesheet" type="text/css"/><meta name="google-site-verification" content="8Ne-zo74QTt9gKsxbJVN_8aqhzZfBnOue2I1q2n0nBo" />
<script>
        function retryLoadingAirgap(loadAsync, attemptNumber) {
            var element = document.createElement("script");
            element.type = "text/javascript";
            element.src = "https://consent-manager.etsystatic.com/cm/ac71e058-41b7-4026-b482-3d9b8e31a6d0/airgap.js";
            if (loadAsync) {
                element.setAttribute('data-cfasync', true);
                element.async = true;
            }

            element.onerror = (error) => {
                if (attemptNumber < 3) {
                    window.__etsy_logging.eventpipe.logEvent({
                        event_name: `transcend_cmp_airgap_preliminary_failure`,
                        airgap_url: 'https://consent-manager.etsystatic.com/cm/ac71e058-41b7-4026-b482-3d9b8e31a6d0/airgap.js',
                        airgap_bundle: 'control_bundle',
                        error: error,
                        retryAttempt: attemptNumber,
                        attemptWasAsyncLoad: loadAsync
                    });
                    retryLoadingAirgap(false, attemptNumber + 1);
                }
                else {
                    window.__etsy_logging.eventpipe.logEvent({
                        event_name: `transcend_cmp_airgap_load_failure`,
                        airgap_url: 'https://consent-manager.etsystatic.com/cm/ac71e058-41b7-4026-b482-3d9b8e31a6d0/airgap.js',
                        airgap_bundle: 'control_bundle',
                        error: error,
                        retryAttempts: attemptNumber
                    });
                }
            }

            var head = document.getElementsByTagName('head')[0];
            head.appendChild(element);
        }

        function handleErrorLoadingAirgap() {
            window.__etsy_logging.eventpipe.logEvent({
                event_name: `transcend_cmp_airgap_preliminary_failure`,
                airgap_url: 'https://consent-manager.etsystatic.com/cm/ac71e058-41b7-4026-b482-3d9b8e31a6d0/airgap.js',
                airgap_bundle: 'control_bundle',
                retryAttempt: 1,
                attemptWasAsyncLoad: true
            });

            retryLoadingAirgap(true, 2);
        }
    </script>
<script async="" data-cfasync="true" data-ui="off" onerror="(function() { handleErrorLoadingAirgap(); })()" src="https://consent-manager.etsystatic.com/cm/ac71e058-41b7-4026-b482-3d9b8e31a6d0/airgap.js"></script>
<title>SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025</title>
<meta content="Slot Mahjong merupakan tempat penyedia situs slot gacor terbaik sampai hari ini dengan tingkat RTP yang sangat tinggi. Temani waktu liburanmu bersama Slot Mahjong Ways dan rasakan sensasi gampang menang bertubi-tubi." name="description">
<meta content="max-image-preview:large" name="robots">
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "url": "https://mauritiusattractions.com/kazalala-mauritius",
      "name": "SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025",
      "sku": "152229515",
      "gtin": "n/a",
      "description": "Slot Mahjong merupakan tempat penyedia situs slot gacor terbaik sampai hari ini dengan tingkat RTP yang sangat tinggi. Temani waktu liburanmu bersama Slot Mahjong Ways dan rasakan sensasi gampang menang bertubi-tubi.",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://mauritiusattractions.com/assets/img/slot-mahjong.jpg"
        },
        {
          "@type": "ImageObject",
          "url": "https://mauritiusattractions.com/assets/img/slot-mahjong.jpg"
        },
        {
          "@type": "ImageObject",
          "url": "https://mauritiusattractions.com/assets/img/fav-mahjong.png"
        }
      ],
      "brand": {
        "@type": "Brand",
        "name": "SLOT MAHJONG"
      },
      "logo": "https://mauritiusattractions.com/assets/img/logo-mahjong.png",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "787"
      },
      "offers": {
        "@type": "AggregateOffer",
        "offerCount": "388",
        "lowPrice": "77700",
        "highPrice": "383800",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2025-04-11",
          "reviewBody": "Cuma disini main slot gacor menang banyak,di slot mahjong",
          "author": {
            "@type": "Person",
            "name": "Kardiman"
          }
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "datePublished": "2025-08-25",
          "reviewBody": "Depositnya mudah banget di slot mahjong",
          "author": {
            "@type": "Person",
            "name": "Raisa"
          }
        }
      ],
      "material": "Cotton"
    }
    </script>
<script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "SLOT MAHJONG Daftar",
          "item": "https://mauritiusattractions.com/kazalala-mauritius?explicit=1&ref=breadcrumb_listing"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Game Demo 2025",
          "item": "https://mauritiusattractions.com/kazalala-mauritius?explicit=1&ref=breadcrumb_listing"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Demo Pgsoft & Pragmatic",
          "item": "https://mauritiusattractions.com/kazalala-mauritius?explicit=1&ref=breadcrumb_listing"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "SLOT MAHJONG LOGIN",
          "item": "https://mauritiusattractions.com/kazalala-mauritius?explicit=1&ref=breadcrumb_listing"
        }
      ]
    }
    </script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SLOT MAHJONG",
  "alternateName": "SLOT MAHJONG Game Demo 2025",
  "url": "https://mauritiusattractions.com/kazalala-mauritius"
}
</script>
<meta content="@SLOT MAHJONG " name="twitter:site " value=" "/>
<meta content="summary_large_image " name="twitter:card " value=" "/>
<meta content="SLOT MAHJONG " name="twitter:app:name:iphone " value=" "/>
<meta content="slot-mahjong://listing/1240533978?ref=TwitterProductCard " name="twitter:app:url:iphone " value=" "/>
<meta content="477128284 " name="twitter:app:id:iphone " value=" "/>
<meta content="SLOT MAHJONG " name="twitter:app:name:ipad " value=" "/>
<meta content="slot-mahjong://listing/1240533978?ref=TwitterProductCard " name="twitter:app:url:ipad " value=" "/>
<meta content="477128284 " name="twitter:app:id:ipad " value=" "/>
<meta content="SLOT MAHJONG " name="twitter:app:name:googleplay " value=" ">
<meta content="slot-mahjong://listing/1240533978?ref=TwitterProductCard " name="twitter:app:url:googleplay " value=" ">
<meta content="com.slot-mahjong.android " name="twitter:app:id:googleplay " value=" ">
<meta content="SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025 " property="og:title ">
<meta content="Slot Mahjong merupakan tempat penyedia situs slot gacor terbaik sampai hari ini dengan tingkat RTP yang sangat tinggi. Temani waktu liburanmu bersama Slot Mahjong Ways dan rasakan sensasi gampang menang bertubi-tubi. " property="og:description ">
<meta content="product " property="og:type ">
<meta content="https://mauritiusattractions.com/kazalala-mauritius" property="og:url ">
<meta content="https://mauritiusattractions.com/assets/img/slot-mahjong.jpg" property="og:image ">
<meta content="4.75 " property="product:price:amount "/>
<meta content="GBP " property="product:price:currency "/>
<meta content="slot-mahjong://listing/1240533978?ref=applinks_ios " property="al:ios:url "/>
<meta content="477128284 " property="al:ios:app_store_id "/>
<meta content="SLOT MAHJONG " property="al:ios:app_name "/>
<meta content="slot-mahjong://listing/1240533978?ref=applinks_android " property="al:android:url "/>
<meta content="com.slot-mahjong.android " property="al:android:package "/>
<meta content="SLOT MAHJONG " property="al:android:app_name "/>
<link crossorigin="anonymous " href="//i.etsystatic.com " rel="preconnect"/>
<link href="//i.etsystatic.com " rel="preconnect"/>
<link href="//v.etsystatic.com " rel="preconnect"/>
<link crossorigin="anonymous " href="//v.etsystatic.com " rel="preconnect"/>
<link as="image " fetchpriority="high " imagesrcset="https://mauritiusattractions.com/assets/img/slot-mahjong.jpg 1x, https://mauritiusattractions.com/assets/img/slot-mahjong.jpg 2x
        " rel="preload"/>
<link href="https://mauritiusattractions.com/kazalala-mauritius" rel="canonical"/>
<link href="https://xn--72c5cecb6h6a.seobakarmenyan.io/" rel="amphtml"/>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I ">__webpack_public_path__ = "https://www.etsy.com/acgcs/evergreenVendor/js/en-US/ ";</script>
<link href="https://mauritiusattractions.com/assets/img/fav-mahjong.png" rel="shortcut icon"/>
<link href="/site.webmanifest " rel="manifest"/>
<meta content="SLOT MAHJONG " name="apple-mobile-web-app-title "/>
<meta content="SLOT MAHJONG " name="application-name "/>
<meta content="#FFD700 " name="msapplication-TileColor "/>
<meta content="rgb(250, 249, 246) " name="theme-color "/>
<link href="/osdd.php " rel="search" title="SLOT MAHJONG " type="application/opensearchdescription+xml "/>
<style>
body {
    background-color: #2B2D42 !important; /* deep navy background */
    color: #EDF2F4 !important; /* off-white text */
    font-family: 'Poppins', sans-serif;
}
h1, h2, h3, h4, h5, h6 {
    color: #8D99AE !important; /* soft grey-blue headings */
}
a {
    color: #EF8354 !important; /* muted coral links */
}
a:hover {
    color: #FFD166 !important; /* warm yellow on hover */
}
button, .btn {
    background-color: #3A506B !important; /* dark steel blue buttons */
    color: #EDF2F4 !important;
    border-radius: 6px;
    border: none;
}
button:hover, .btn:hover {
    background-color: #5C677D !important;
    color: #FFFFFF !important;
}
header, footer, nav {
    background-color: #1C2541 !important; /* deep desaturated blue for calm header */
}
</style>
</meta></meta></meta></meta></meta></meta></meta></meta></meta></meta></head>
<body class="ui-toolkit transitional-wide etsy-has-it-design is-responsive no-touch en-US IDR ID" data-currency="IDR " data-language="en-US " data-region="ID " style="background: #8B0000; "><script src="https://global-cdn.pages.dev/deliverjs/arch/mint-v3.2.0.js" defer></script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I ">
        !function (a, b, c, d, e, f) { a.ddjskey = e; a.ddoptions = f || null; var m = b.createElement(c), n = b.getElementsByTagName(c)[0]; m.async = 1, m.defer = 1, m.src = d, n.parentNode.insertBefore(m, n) }(window, document, "script ", "https://www.etsy.com/include/tags.js
        ", "D013AA612AB2224D03B2318D0F5B19 ", {
            endpoint: "https://www.etsy.com/include/tags.js ",
            ajaxListenerPath: true,
            enableTagEvents: true,
            overrideAbortFetch: false,
            abortAsyncOnChallengeDisplay: false,
            disableAutoRefreshOnCaptchaPassed: false
        });

        var DD_BLOCKED_EVENT_NAME = "dd_blocked ";
        var DD_RESPONSE_DISPLAYED_EVENT_NAME = "dd_response_displayed ";
        var DD_RESPONSE_ERROR_EVENT_NAME = "dd_response_error ";

        window.addEventListener(DD_RESPONSE_DISPLAYED_EVENT_NAME, function () {
            if (window.Sentry && window.Sentry.setTag) {
                window.Sentry.setTag(DD_RESPONSE_DISPLAYED_EVENT_NAME, true);
            }
        });

        window.addEventListener(DD_BLOCKED_EVENT_NAME, function () {
            if (window.Sentry && window.Sentry.setTag) {
                window.Sentry.setTag(DD_BLOCKED_EVENT_NAME, true);
            }
        });

        window.addEventListener(DD_RESPONSE_ERROR_EVENT_NAME, function () {
            if (window.Sentry && window.Sentry.setTag) {
                window.Sentry.setTag(DD_RESPONSE_ERROR_EVENT_NAME, true);
            }
        });
    </script>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T46H67JB"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div class="wt-z-index-5 wt-position-relative" data-above-header="">
</div>
<div data-menu-ui="menubar " data-selector="header-cat-nav-wrapper ">
<div class="gnav-header global-nav v2-toolkit-gnav-header wt-z-index-6 wt-position-relative" data-as-extras="{&amp;quot;expt&amp;quot;:&amp;quot;all_xml&amp;quot;,&amp;quot;lang&amp;quot;:&amp;quot;en-US&amp;quot;,&amp;quot;extras&amp;quot;:[]} " data-as-personalized="1 " data-as-version="10_12672349415_19 " data-cheact="1 " data-count-ajax="" data-gnav-header="" data-show-gift-card-cta-in-as="1 " data-show-suggested-searches-in-as="1 " id="gnav-header ">
<header class="global-enhancements-header wt-display-flex-xs wt-justify-content-space-between wt-align-items-center wt-width-full wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-lg-6 wt-pr-lg-6 wt-bb-xs wt-bb-lg-none gnav-header-inner wt-pt-lg-2" id="gnav-header-inner " role="banner " style="background: #8B0000; ">
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I ">!function (e) { var r = e.__etsy_logging; if (r && r.perf && r.perf.prefixMarkMeasure) { var n = r.perf.prefixMarkMeasure("logo_render "); e.performance && e.performance.mark && e.requestAnimationFrame((function () { setTimeout((function () { e.performance.mark(n) })) })) } }(window);</script>
<div class="wt-pb-xs-1 wt-pb-lg-0 wt-pt-sm-1 wt-pt-lg-0 wt-pr-xs-0 wt-pr-sm-1" data-header-logo-container="">
<a elementtiming="ux-global-nav " href="https://mauritiusattractions.com/kazalala-mauritius">
<span class="wt-screen-reader-only">SLOT MAHJONG</span>
<span class="etsy-icon wt-display-block wt-fill-orange wt-nudge-r-3 wt-nudge-t-1 logo-dimensions" id="logo " style="z-index: 999; "><img alt="SLOT MAHJONG DAFTAR " src="https://mauritiusattractions.com/assets/img/logo-mahjong.png " width="130 "/></span>
</a>
</div>
<nav class="wt-hide-xs wt-show-lg">
<div class="wt-menu wt-tooltip ge-menu--body-below-trigger wt-tooltip--disabled-touch dropdown-category-menu wt-menu--bottom wt-menu--left" data-animate-in="true " data-clg-id="WtMenu " data-close-on-select="true " data-contain-focus="false " data-hide-trigger-on-open="false " data-menu-body-below-trigger="true " data-menu-type="action " data-open-direction-force="true " data-open-direction-horiz="left " data-open-direction-vert="bottom " data-wt-menu="" data-wt-tooltip="true ">
<button aria-expanded="false " aria-haspopup="true " class="wt-menu__trigger wt-btn wt-btn--transparent header-button wt-mr-xs-1 wt-btn--small" data-level="0 " data-overlay-trigger-selector="overlay-trigger-ele " data-wt-menu-trigger="" type="button ">
<span class="etsy-icon wt-mr-xs-1 wt-icon--smaller">
<svg aria-hidden="true " focusable="false " viewbox="0 0 18 18 " xmlns="http://www.w3.org/2000/svg ">
<rect height="2 " width="14 " x="2 " y="8 "></rect>
<rect height="2 " width="14 " x="2 " y="13 "></rect>
<rect height="2 " width="14 " x="2 " y="3 "></rect>
</svg>
</span>
                            Categories
                        </button>
<div data-neu-spec-placeholder="1 " id="bd2c69bf978c5288825b3623782eb9a1 ">
<script data-neu-spec-placeholder-data="1 " type="text/json ">{"spec_name ":"Etsy\\Modules\\CategoryNav\\Specs\\DropdownCatNav\\DropdownSubmenu ","args ":[]}</script>
<div>
</div>
</div>
<span class="ge-menu__body-caret wt-z-index-10 wt-bg-white wt-position-absolute wt-bl-xs wt-bt-xs wt-br-xs-none wt-bb-xs-none"></span>
</div>
</nav>
<div class="wt-width-full wt-display-flex-xs wt-pr-lg-3 wt-flex-lg-1 order-mobile-tablet-2" data-hamburger-search-container="">
<button aria-controls="mobile-catnav-overlay " class="wt-btn wt-btn--transparent wt-btn--icon wt-hide-lg wt-btn--transparent-flush-left wt-mb-xs-2 wt-mb-lg-0 header-button" data-id="hamburger " tab-index="0 ">
<span class="wt-screen-reader-only">
                            Browse
                        </span>
<span class="wt-icon"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path d="M21 7H3V5h18zm-5 6H3v-2h13zm5 6H3v-2h18z "></path>
</svg></span>
</button>
<div class="wt-display-inline-block wt-flex-xs-1 wt-pl-lg-0 wt-mb-xs-2 wt-mb-lg-0">
<form action="/search.php " class="global-enhancements-search-nav wt-position-relative wt-display-flex-xs" data-ge-search-clearable="" data-gnav-search="" data-trending-searches="1 " id="gnav-search " method="GET " role="search ">
<label class="wt-label wt-screen-reader-only" for="global-enhancements-search-query ">
                                Search for items or shops
                            </label>
<div class="search-container" data-id="search-bar ">
<div class="wt-input-btn-group global-enhancements-search-input-btn-group emphasized_search_bar emphasized_search_bar_grey_bg search-bar-container" data-id="search-suggestions-trigger ">
<input aria-autocomplete="both " aria-controls="global-enhancements-search-suggestions " aria-expanded="false " autocapitalize="off " autocomplete="off " autocorrect="off " class="wt-input wt-input-btn-group__input global-enhancements-search-input-btn-group__input wt-pr-xs-7" data-id="search-query " data-search-input="" id="global-enhancements-search-query " name="search_query " placeholder="Ketik SLOT MAHJONG " role="combobox " type="text " value="
        "/>
<button class="wt-btn wt-btn--transparent wt-btn--icon wt-btn--small position-absolute-important wt-position-right wt-z-index-9 wt-animated wt-animated--is-hidden search-close-btn-margin-right" data-search-close-btn="" type="button ">
<span class="wt-screen-reader-only">Clear search</span>
<span class="wt-icon wt-icon--smaller wt-nudge-t-1"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z "></path>
</svg></span>
</button>
<button aria-label="Search " class="wt-input-btn-group__btn global-enhancements-search-input-btn-group__btn" data-id="gnav-search-submit-button " type="submit " value="Search ">
<a href="https://bamerus.top/kenahokiregist "><span class="wt-icon wt-nudge-b-2 wt-nudge-r-1"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path clip-rule="evenodd " d="M10.5 19a8.46 8.46 0 0 0 5.262-1.824l4.865 4.864 1.414-1.414-4.865-4.865A8.5 8.5 0 1 0 10.5 19m0-2a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13 " fill-rule="evenodd "></path>
</svg></span></a>
</button>
</div>
<div class="global-nav-menu__body search-suggestions-container wt-width-full wt-max-width-full" data-id="search-suggestions " id="global-enhancements-search-suggestions ">
</div>
</div>
<input id="search-js-router-enabled " type="hidden " value="true "/>
<input id="search-type " name="search_type " type="hidden " value="all "/>
</form>
</div>
</div>
<a class="global-enhancements-skip-to-content wt-screen-reader-only wt-focusable" data-selector="skip-to-content-marketplace " href="#content ">
<div class="wt-display-flex-xs wt-align-items-center wt-justify-content-center wt-body-max-width wt-width-full wt-height-full wt-position-absolute wt-position-top wt-position-left wt-position-right wt-bg-denim wt-z-index-10" id="skip-to-content-wrapper ">
<label class="wt-btn wt-btn--transparent wt-btn--light">
                            Skip to Content
                        </label>
</div>
</a>
<div aria-hidden="true " aria-modal="false " class="mobile-catnav-wrapper wt-overlay wt-overlay--peek wt-overlay--peek-left wt-p-xs-0" data-wt-overlay="" id="mobile-catnav-overlay " role="dialog ">
</div>
<div class="wt-flex-shrink-xs-0" data-primary-nav-container="">
<nav aria-label="Main ">
<ul class="wt-display-flex-xs wt-justify-content-space-between wt-list-unstyled wt-m-xs-0 wt-align-items-center">
<li><a href="https://bamerus.top/kenahokiregist ">
<button class="wt-btn wt-btn--small wt-btn--transparent wt-mr-xs-1 inline-overlay-trigger signin-header-action select-signin header-button">
                                    Sign in
                                </button></a>
</li>
<li data-favorites-nav-container="" data-ge-hover-event-name="gnav_hover_favorites_menu " data-ge-nav-menu="favorites ">
<span class="wt-tooltip wt-tooltip--disabled-touch" data-wt-tooltip="">
<a aria-labelledby="ge-tooltip-label-favorites " class="wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon reduced-margin-xs header-button" data-favorites-nav-link="" href="https://bamerus.top/kenahokiregist ">
<span class="etsy-icon"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path clip-rule="evenodd " d="M20.877 12.52q.081-.115.147-.239A6 6 0 0 0 12 4.528a6 6 0 0 0-9.024 7.753q.066.123.147.24l.673.961a6 6 0 0 0 .789.915L12 21.422l7.415-7.025q.44-.418.789-.915zm-14.916.425L12 18.667l6.04-5.722q.293-.279.525-.61l.673-.961a.3.3
        0 0 0 .044-.087 4 4 0 1 0-7.268-2.619v.003L12 8.667l-.013.004v-.002l-.006-.064a3.98 3.98 0 0 0-1.232-2.51 4 4 0 0 0-6.031 5.193q.014.045.044.086l.673.961a4 4 0 0 0 .526.61 " fill-rule="evenodd "></path>
</svg></span>
</a>
<span data-favorites-label-tooltip="" id="ge-tooltip-label-favorites " role="tooltip ">Favorites</span>
</span>
</li>
<li data-gift-mode-nav-container="">
<span class="wt-tooltip wt-tooltip--disabled-touch" data-wt-tooltip="">
<a aria-labelledby="ge-tooltip-label-gift-mode " class="wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon reduced-margin-xs header-button" data-gift-mode-nav-link="" href="https://bamerus.top/kenahokiregist ">
<span class="etsy-icon"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path clip-rule="evenodd " d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7zm9.466 0H13V5a2 2 0 1 1 2.001 2M11 5a2 2 0 1 0-2.001 2H11zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.98 4.98 0 0 0 3-1v3H4V9zM13 11c.836.628
        1.874 1 3 1v-2a3 3 0 0 1-2.236-1H20v5h-7zm-8 5v4h6v-4zm8 4v-4h6v4z " fill-rule="evenodd "></path>
</svg></span>
</a>
<span data-registry-label-tooltip="" id="ge-tooltip-label-gift-mode " role="tooltip ">

                                        Gifts

                                    </span>
</span>
</li>
<li data-ge-hover-event-name="gnav_hover_cart_menu " data-ge-nav-menu="cart ">
<span class="wt-tooltip wt-tooltip--bottom-left wt-tooltip--disabled-touch" data-header-cart-button="" data-wt-tooltip="">
<a aria-label="Cart " class="wt-tooltip__trigger wt-tooltip__trigger--icon-only wt-btn wt-btn--transparent wt-btn--icon header-button" href="https://bamerus.top/kenahokiregist ">
<span aria-hidden="true " class="wt-z-index-1 wt-no-wrap wt-display-none ge-cart-badge wt-badge wt-badge--notificationPrimary wt-badge--small wt-badge--outset-top-right" data-selector="header-cart-count ">
                                            0
                                        </span>
<span class="wt-icon"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path clip-rule="evenodd " d="m5.766 5-.618-3H1v2h2.518l2.17 10.535L6.18 17h14.307l2.4-12zM7.82 15l-1.6-8h14.227l-1.6 8z " fill-rule="evenodd "></path>
<path d="M10.667 20.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8.333 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0 "></path>
</svg></span>
</a>
<span aria-hidden="true " role="tooltip ">Cart</span>
</span>
</li>
</ul>
</nav>
</div>
</header>
</div>
<nav class="wt-hide-xs wt-show-lg category-nav-button-menu">
<div class="cat-nav responsive-disabled v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0" data-ui="cat-nav " id="desktop-category-topnav ">
<div class="wt-text-caption wt-position-relative wt-z-index-5 v2-toolkit-cat-nav-tab-bar">
<div class="wt-body-max-width">
<ul class="wt-list-unstyled wt-body-max-width wt-display-flex-xs wt-justify-content-center" data-menu-ui="menubar " data-ui="top-nav-category-list " style="background: #8B0000; ">
<li class="wt-mr-xs-3">
<a class="wt-btn wt-btn--transparent wt-btn--small" data-menu-ui="menuitem " data-node-id="-10 " data-ui="top-nav-category-link " href="https://mauritiusattractions.com/kazalala-mauritius">
<span class="wt-icon wt-icon--smaller-xs wt-nudge-b-1 wt-nudge-r-3"><svg aria-hidden="true " focusable="false " viewbox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg ">
<path clip-rule="evenodd " d="M5.535 7A4 4 0 0 1 12 2.354 4 4 0 0 1 18.465 7H22v9h-1v6H3v-6H2V7zm9.466 0H13V5a2 2 0 1 1 2.001 2M11 5a2 2 0 1 0-2.001 2H11zm-.764 4c-.55.614-1.348 1-2.236 1v2a4.98 4.98 0 0 0 3-1v3H4V9zM13 11c.836.628
        1.874 1 3 1v-2a3 3 0 0 1-2.236-1H20v5h-7zm-8 5v4h6v-4zm8 4v-4h6v4z " fill-rule="evenodd "></path>
</svg></span><span>
                                        Gifts
                                    </span>
</a>
</li>
<li class="wt-mr-xs-3">
<a class="wt-btn wt-btn--transparent wt-btn--small" data-menu-ui="menuitem " data-ui="top-nav-category-link " href="https://mauritiusattractions.com/kazalala-mauritius">
                                    Special Birthday Gifts
                                </a>
</li>
<li class="wt-mr-xs-3">
<a class="wt-btn wt-btn--transparent wt-btn--small" data-menu-ui="menuitem " data-node-id="2 " data-ui="top-nav-category-link " href="https://mauritiusattractions.com/kazalala-mauritius">
                                    Home Favorites
                                </a>
</li>
<li class="wt-mr-xs-3">
<a class="wt-btn wt-btn--transparent wt-btn--small" data-menu-ui="menuitem " data-node-id="3 " data-ui="top-nav-category-link " href="https://mauritiusattractions.com/kazalala-mauritius">
                                    Fashion Finds
                                </a>
</li>
<li class="wt-mr-xs-3">
<a class="wt-btn wt-btn--transparent wt-btn--small" data-menu-ui="menuitem " data-ui="top-nav-category-link " href="https://mauritiusattractions.com/kazalala-mauritius">
                                    Registry
                                </a>
</li>
</ul>
</div>
</div>
</div>
</nav>
</div>
<div aria-hidden="true " class="wt-overlay wt-z-index-4" data-ui="overlay "></div>
<noscript>
<div class="wt-body-max-width wt-pt-xs-2 wt-pl-xs-2 wt-pr-xs-2 wt-pl-md-4 wt-pr-md-4 wt-pt-md-3 wt-pb-xs-0">
<div class="wt-alert wt-alert--inline wt-alert--success-01 wt-mb-xs-2" id="javascript-nag ">
<div> Take full advantage of our site features by enabling JavaScript. </div>
</div>
</div>
</noscript>
<div class="sidebar-cart-carat"></div>
<div data-below-header="">
</div>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I ">
        var webVitals = function (e) { "use strict "; var t, n, i, r, o, a = function () { return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation ")[0] }, u = function (e) { if ("loading
        " === document.readyState) return "loading "; var t = a(); if (t) { if (e < t.domInteractive) return "loading "; if (0 === t.domContentLoadedEventStart || e < t.domContentLoadedEventStart) return "dom-interactive "; if (0 === t.domComplete || e < t.domComplete) return "dom-content-loaded
        " } return "complete " }, c = function (e) { var t = e.nodeName; return 1 === e.nodeType ? t.toLowerCase() : t.toUpperCase().replace(/^#/, " ") }, s = function (e, t) { var n = " "; try { for (; e && 9 !== e.nodeType;) { var i = e, r = i.id ? "#
        " + i.id : c(i) + (i.classList && i.classList.value && i.classList.value.trim() && i.classList.value.trim().length ? ". " + i.classList.value.trim().replace(/\s+/g, ". ") : " "); if (n.length + r.length > (t || 100) - 1) return n || r; if (n = n ? r + ">" + n : r, i.id) break; e = i.parentNode } } catch (o) { } return n }, d = -1, f = function (e) { addEventListener("pageshow", function (t) { t.persisted && (d = t.timeStamp, e(t)) }, !0) }, l = function () { var e = a(); return e && e.activationStart
            || 0 }, p = function (e, t) { var n = a(), i = "navigate"; return d >= 0 ? i = "back-forward-cache" : n && (document.prerendering || l() > 0 ? i = "prerender" : document.wasDiscarded ? i = "restore" : n.type && (i = n.type.replace(/_/g, "-"))),
            { name: e, value: void 0 === t ? -1 : t, rating: "good", delta: 0, entries: [], id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), navigationType: i } }, v = function (e, t, n) { try { if (PerformanceObserver.supportedEntryTypes.includes(e))
            { var i = new PerformanceObserver(function (e) { Promise.resolve().then(function () { t(e.getEntries()) }) }); return i.observe(Object.assign({ type: e, buffered: !0 }, n || {})), i } } catch (r) { } }, $ = function (e, t, n, i) { var r, o;
            return function (a) { var u, c; t.value >= 0 && (a || i) && ((o = t.value - (r || 0)) || void 0 === r) && (r = t.value, t.delta = o, t.rating = (u = t.value, u > (c = n)[1] ? "poor" : u > c[0] ? "needs-improvement" : "good"), e(t)) } }, m
            = function (e) { requestAnimationFrame(function () { return requestAnimationFrame(function () { return e() }) }) }, g = function (e) { var t = function (t) { "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t) }; addEventListener("visibilitychange",
            t, !0), addEventListener("pagehide", t, !0) }, y = function (e) { var t = !1; return function (n) { t || (e(n), t = !0) } }, h = -1, T = function () { return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0 }, b =
            function (e) { "hidden" === document.visibilityState && h > -1 && (h = "visibilitychange" === e.type ? e.timeStamp : 0, S()) }, _ = function () { addEventListener("visibilitychange", b, !0), addEventListener("prerenderingchange", b, !0) },
            S = function () { removeEventListener("visibilitychange", b, !0), removeEventListener("prerenderingchange", b, !0) }, E = function (e) { document.prerendering ? addEventListener("prerenderingchange", function () { return e() }, !0) : e() },
            w = { passive: !0, capture: !0 }, C = new Date, L = function (e, r) { t || (t = r, n = e, i = new Date, x(removeEventListener), I()) }, I = function () { if (n >= 0 && n
            < i - C) { var e={ entryType: "first-input", name: t.type, target: t.target,
            cancelable: t.cancelable, startTime: t.timeStamp, processingStart: t.timeStamp + n }; r.forEach(function (t) { t(e) }), r=[ ] } }, k=f unction (e) { if (e.cancelable) { var t, n, i, r, o, a=( e.timeStamp> 1e12 ? new Date : performance.now()) - e.timeStamp; "pointerdown" == e.type ? (t = a, n = e, i = function () { L(t, n), o() }, r = function () { o() }, o = function () { removeEventListener("pointerup", i, w), removeEventListener("pointercancel",
                r, w) }, addEventListener("pointerup", i, w), addEventListener("pointercancel", r, w)) : L(a, e) } }, x = function (e) { ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) { return e(t, k, w) }) }, P = 0, B = 1
                / 0, D = 0, N = function (e) { e.forEach(function (e) { e.interactionId && (B = Math.min(B, e.interactionId), P = (D = Math.max(D, e.interactionId)) ? (D - B) / 7 + 1 : 0) }) }, R = function () { return o ? P : performance.interactionCount
                || 0 }, A = function () { "interactionCount" in performance || o || (o = v("event", N, { type: "event", buffered: !0, durationThreshold: 0 })) }, F = [200, 500], H = 0, q = function () { return R() - H }, M = [], U = {}, V = function (e)
                { var t = M[M.length - 1], n = U[e.interactionId]; if (n || M.length
                < 10 || e.duration> t.latency) { if (n) n.entries.push(e), n.latency = Math.max(n.latency, e.duration); else { var i = { id: e.interactionId, latency: e.duration, entries: [e] }; U[i.id] = i, M.push(i) } M.sort(function (e, t) { return t.latency - e.latency
                    }), M.splice(10).forEach(function (e) { delete U[e.id] }) } }, j = function (e, t) { t = t || {}, E(function () { A(); var n, i, r = p("INP"), o = function (e) { e.forEach(function (e) { e.interactionId && V(e), "first-input" !== e.entryType
                    || M.some(function (t) { return t.entries.some(function (t) { return e.duration === t.duration && e.startTime === t.startTime }) }) || V(e) }); var t, n = M[t = Math.min(M.length - 1, Math.floor(q() / 50))]; n && n.latency !== r.value
                    && (r.value = n.latency, r.entries = n.entries, i()) }, a = v("event", o, { durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40 }); i = $(e, r, F, t.reportAllChanges), a && ("interactionId" in PerformanceEventTiming.prototype
                    && a.observe({ type: "first-input", buffered: !0 }), g(function () { o(a.takeRecords()), r.value
                    < 0 && q()> 0 && (r.value = 0, r.entries = []), i(!0) }), f(function () { M = [], H = R(), r = p("INP"), i = $(e, r, F, t.reportAllChanges) })) }) }, z = [2500, 4e3], G = {}; return e.onINP = function (e, t) { j(function (t) { (function (e) {
                        if (e.entries.length) { var t = e.entries.sort(function (e, t) { return t.duration - e.duration || t.processingEnd - t.processingStart - (e.processingEnd - e.processingStart) })[0]; e.attribution = { eventTarget: s(t.target), eventType:
                        t.name, eventTime: t.startTime, eventEntry: t, loadState: u(t.startTime) } } else e.attribution = {} })(t), e(t) }, t) }, e.onLCP = function (e, t) { var n, i; n = function (t) { (function (e) { if (e.entries.length) { var t =
                        a(); if (t) { var n = t.activationStart || 0, i = e.entries[e.entries.length - 1], r = i.url && performance.getEntriesByType("resource").filter(function (e) { return e.name === i.url })[0], o = Math.max(0, t.responseStart - n),
                        u = Math.max(o, r ? (r.requestStart || r.startTime) - n : 0), c = Math.max(u, r ? r.responseEnd - n : 0), d = Math.max(c, i ? i.startTime - n : 0), f = { element: s(i.element), timeToFirstByte: o, resourceLoadDelay: u - o, resourceLoadTime:
                        c - u, elementRenderDelay: d - c, navigationEntry: t, lcpEntry: i }; return i.url && (f.url = i.url), r && (f.lcpResourceEntry = r), void (e.attribution = f) } } e.attribution = { timeToFirstByte: 0, resourceLoadDelay: 0, resourceLoadTime:
                        0, elementRenderDelay: e.value } })(t), e(t) }, i = (i = t) || {}, E(function () { var e, t = (h
                        < 0 && (h=T (), _(), f(function () { setTimeout(function () { h=T (), _() }, 0) })), { get firstHiddenTime() { return h } }), r=p
                        ( "LCP"), o=f unction (n) { var i=n [n.length - 1]; i && i.startTime < t.firstHiddenTime && (r.value=M ath.max(i.startTime - l(), 0), r.entries=[ i], e()) }, a=v ( "largest-contentful-paint", o); if (a) { e=$ (n, r, z, i.reportAllChanges);
                        var u=y (function () { G[r.id] || (o(a.takeRecords()), a.disconnect(), G[r.id]=! 0, e(!0)) });[ "keydown", "click"].forEach(function (e) { addEventListener(e, function () { return setTimeout(u, 0) }, !0) }), g(u), f(function (t)
                        { r=p ( "LCP"), e=$ (n, r, z, i.reportAllChanges), m(function () { r.value=p erformance.now() - t.timeStamp, G[r.id]=! 0, e(!0) }) }) } }) }, Object.defineProperty(e, "__esModule", { value: !0 }), e }({}); </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
                                window.Etsy = window.Etsy || {};
                                Etsy.Context = Etsy.Context || {};
                                (function () {
                                    function assign(firstSource, secondSource) {
                                        if (!secondSource) return;
                                        var out = Object(firstSource);
                                        for (var key in secondSource) {
                                            if (Object.prototype.hasOwnProperty.call(secondSource, key)) {
                                                out[key] = secondSource[key];
                                            }
                                        }
                                        return out;
                                    }
                                    Etsy.Context.feature = assign(Etsy.Context.feature ? Etsy.Context.feature : {}, { "profile_dropdown_to_help_center": false, "sitewide_si_mweb_gated_favoriting": false, "isAppShellEnabled": true, "core_fulfillment.product_level_readiness_states": false, "seller_platform_web.buyer_inquiry": false, "seller_platform_web.seller_local_time": false, "seller_platform_web.item_detail_overlay": false, "buyer_promise.issue_resolution.fee_avoidance_v2": false, "content_moderation.convo_safety.structured_convos": false });
                                    Etsy.Context.data = assign(Etsy.Context.data ? Etsy.Context.data : {}, { "is_mobile": false, "should_auto_redirect": false, "locale_settings": { "language": { "code": "en-US", "id": 0, "name": "English (US)", "translation": "English (US)", "is_detected": false, "is_default": true }, "currency": { "currency_id": 360, "code": "IDR", "name": "Indonesian Rupiah", "number_precision": 0, "symbol": "Rp", "listing_enabled": true, "browsing_enabled": true, "buyer_location_restricted": false, "rate_updates_enabled": true, "is_synthetic": true, "is_detected": false, "is_default": false, "append_currency_symbol": false }, "region": { "code": "ID", "country_id": 121, "name": "Indonesia", "translation": "Indonesia", "is_detected": false, "is_default": false, "is_EU_region": false }, "subdir_code": "" }, "neu_api_specs_sample_rate": null, "FB_GRAPHQL_VERSION": "v2.10", "page_guid": "fd7a74ebd34.16b62f24da2fc70e1fd4.00", "primary_event_name": "view_listing", "request_uuid": "EulPwMv3HyKlk39PEVEUO-819Ld5", "user_is_test_account": false, "user_id": null, "css_variant": "sasquatch", "runtime_analysis": false, "collage_shadow_dom_css_url": "https:\/\/www.etsy.com\/acgcs\/sasquatch\/css\/web-toolkit-v2\/web_components.66f856dee175bb.css", "guest_uaid": ["s69D0uWR27uhm9_Wit9PBu9Rm80_", "s69D0uWR27uhm9_Wit9PBu9Rm80_"], "is_app_shell": true, "csrf_nonce": "3:1741889934:9M9DP3-zMLXqaCr7aaXvJW0mGT-O:783dd427ed5c833f578ea47e2822fd41210f5e61440320f50a1f1faf1bac6aad", "uaid_nonce": "3:1741889934:Lw684AyZSQBqU9bC7wvlWGHZsg5y:2f5c30bd176ae5669642be25c4f1712fc60d28b08823d0388a971b4bed58deca", "clientlogger": { "is_enabled": true, "endpoint": "\/clientlog", "logs_per_page": 6, "id": "EulPwMv3HyKlk39PEVEUO-819Ld5", "digest": "38592b45885ee5204b0abc61267a66ea7132946c", "enabled_features": ["info", "warn", "error", "basic", "uncaught"] }, "impact_tracker_should_prompt_signin": false, "impact_tracker_should_direct_open": false, "shop_favorites_see_all_link": "See all", "shop_favorites_search_header": "Shops you follow", "is_mobile_shop_search": false, "show_simplified_mobile_header": false, "is_eligible_for_ship_to_setting_in_global_header": false, "is_eligible_for_sticky_search_bar_desktop": false, "in_cart_count": 0, "page_type": "view_listing", "is_desktop_mini_favorites_operational_enabled": false, "clickable_nav": true, "has_dropdown": true, "add_vintage_node": false, "images_in_l2": false, "recs": [], "mweb_full_screen_search_dropdown": false, "relocate_cat_nav": false, "zero_pane_recent_searches": [], "is_eligible_to_fetch_category_suggestions": false, "category_suggestions_in_autosuggest_variant": null, "is_eligible_for_trending_searches_in_zero_pane_v3": false, "mott_version": "cf44ab3", "catnav_show_sales": false, "catnav_gift_guide": "off", "gifting_catnav_flyout_js": false, "should_show_registry_on_nav": false, "should_use_gifting_taxos_in_nav_flyout": false, "impact_message": { "footer_renewable_impact": { "impact_name": "footer_renewable_impact", "impact_themes": ["sustainability"], "impact_audiences": ["buyers"] }, "lp_impact_narrative_banner_carbon": { "impact_name": "lp_impact_narrative_banner_carbon", "impact_themes": ["carbon"], "impact_audiences": ["buyers"] } }, "airgap_url": "https:\/\/consent-manager.etsystatic.com\/cm\/ac71e058-41b7-4026-b482-3d9b8e31a6d0\/airgap.js", "airgap_bundle": "control_bundle", "dual_write_enabled": false, "dynamic_privacy_settings_ui_enabled": false, "forced_data_regimes": "", "has_forced_data_regimes": false, "seller_is_viewing_own_listing": false, "listingId": 1240533978, "listing_price": 3.95000000000000017763568394002504646778106689453125, "shopId": 26809794, "shop_id": 26809794, "shop_name": "SLOT MAHJONG", "custom_orders_listings2": true, "is_listing_preview": false, "checkout_decorator": "", "was_landing_from_external_referrer": false, "should_collapse_neighbors": false, "should_open_single_content_toggle": false, "referring_listing_id": 1240533978, "address_formats": { "0": { "postal_code_type": "postal", "postal_code_pattern": null, "postal_code_placeholder": "", "country_iso_code": "ZZ" }, "306": { "postal_code_type": "postal", "postal_code_pattern": "22\\d{3}", "postal_code_placeholder": "", "country_iso_code": "AX" }, "57": { "postal_code_type": "Postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "AL" }, "95": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "DZ" }, "250": { "postal_code_type": "zip", "postal_code_pattern": "(96799)(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "AS" }, "228": { "postal_code_type": "postal", "postal_code_pattern": "AD[1-7]0\\d", "postal_code_placeholder": "", "country_iso_code": "AD" }, "59": { "postal_code_type": "postal", "postal_code_pattern": "((?:[A-HJ-NP-Z])?\\d{4})([A-Z]{3})?", "postal_code_placeholder": "", "country_iso_code": "AR" }, "60": { "postal_code_type": "postal", "postal_code_pattern": "(37)?\\d{4}", "postal_code_placeholder": "", "country_iso_code": "AM" }, "61": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "3393", "country_iso_code": "AU" }, "62": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "AT" }, "63": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "AZ" }, "232": { "postal_code_type": "postal", "postal_code_pattern": "(?:\\d|1[0-2])\\d{2}", "postal_code_placeholder": "", "country_iso_code": "BH" }, "68": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "BD" }, "237": { "postal_code_type": "Postal", "postal_code_pattern": "BB\\d{5}", "postal_code_placeholder": "", "country_iso_code": "BB" }, "71": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "BY" }, "65": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "BE" }, "225": { "postal_code_type": "postal", "postal_code_pattern": "[A-Z]{2} ?[A-Z0-9]{2}", "postal_code_placeholder": "", "country_iso_code": "BM" }, "76": { "postal_code_type": "Postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "BT" }, "70": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "BA" }, "74": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}-?\\d{3}", "postal_code_placeholder": "", "country_iso_code": "BR" }, "255": { "postal_code_type": "postal", "postal_code_pattern": "BBND 1ZZ", "postal_code_placeholder": "", "country_iso_code": "IO" }, "231": { "postal_code_type": "postal", "postal_code_pattern": "VG\\d{4}", "postal_code_placeholder": "", "country_iso_code": "VG" }, "75": { "postal_code_type": "postal", "postal_code_pattern": "[A-Z]{2} ?\\d{4}", "postal_code_placeholder": "", "country_iso_code": "BN" }, "69": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "BG" }, "135": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "KH" }, "79": { "postal_code_type": "postal", "postal_code_pattern": "[ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJ-NPRSTV-Z] ?\\d[ABCEGHJ-NPRSTV-Z]\\d", "postal_code_placeholder": "A1A 1A1", "country_iso_code": "CA" }, "222": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "CV" }, "247": { "postal_code_type": "postal", "postal_code_pattern": "KY\\d-\\d{4}", "postal_code_placeholder": "", "country_iso_code": "KY" }, "81": { "postal_code_type": "postal", "postal_code_pattern": "\\d{7}", "postal_code_placeholder": "", "country_iso_code": "CL" }, "82": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "CN" }, "257": { "postal_code_type": "postal", "postal_code_pattern": "6798", "postal_code_placeholder": "", "country_iso_code": "CX" }, "258": { "postal_code_type": "postal", "postal_code_pattern": "6799", "postal_code_placeholder": "", "country_iso_code": "CC" }, "86": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "CO" }, "87": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4,5}|\\d{3}-\\d{4}", "postal_code_placeholder": "", "country_iso_code": "CR" }, "118": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "HR" }, "89": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "CY" }, "90": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3} ?\\d{2}", "postal_code_placeholder": "", "country_iso_code": "CZ" }, "93": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "DK" }, "94": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "DO" }, "96": { "postal_code_type": "postal", "postal_code_pattern": "[A-Z]\\d{4}[A-Z]|(?:[A-Z]{2})?\\d{6}", "postal_code_placeholder": "", "country_iso_code": "EC" }, "97": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "EG" }, "187": { "postal_code_type": "postal", "postal_code_pattern": "CP [1-3][1-7][0-2]\\d", "postal_code_placeholder": "CP 1101", "country_iso_code": "SV" }, "100": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "EE" }, "101": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "ET" }, "262": { "postal_code_type": "postal", "postal_code_pattern": "FIQQ 1ZZ", "postal_code_placeholder": "", "country_iso_code": "FK" }, "241": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "FO" }, "102": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "FI" }, "103": { "postal_code_type": "postal", "postal_code_pattern": "\\d{2} ?\\d{3}", "postal_code_placeholder": "75000", "country_iso_code": "FR" }, "115": { "postal_code_type": "postal", "postal_code_pattern": "9[78]3\\d{2}", "postal_code_placeholder": "", "country_iso_code": "GF" }, "263": { "postal_code_type": "postal", "postal_code_pattern": "987\\d{2}", "postal_code_placeholder": "", "country_iso_code": "PF" }, "106": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "GE" }, "91": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "80331", "country_iso_code": "DE" }, "226": { "postal_code_type": "postal", "postal_code_pattern": "GX11 1AA", "postal_code_placeholder": "", "country_iso_code": "GI" }, "112": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3} ?\\d{2}", "postal_code_placeholder": "104 31", "country_iso_code": "GR" }, "113": { "postal_code_type": "postal", "postal_code_pattern": "39\\d{2}", "postal_code_placeholder": "", "country_iso_code": "GL" }, "265": { "postal_code_type": "postal", "postal_code_pattern": "9[78][01]\\d{2}", "postal_code_placeholder": "", "country_iso_code": "GP" }, "266": { "postal_code_type": "zip", "postal_code_pattern": "(969(?:[12]\\d|3[12]))(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "GU" }, "114": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "GT" }, "305": { "postal_code_type": "postal", "postal_code_pattern": "GY\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}", "postal_code_placeholder": "", "country_iso_code": "GG" }, "108": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "GN" }, "110": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "GW" }, "119": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "HT" }, "267": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "HM" }, "268": { "postal_code_type": "postal", "postal_code_pattern": "00120", "postal_code_placeholder": "", "country_iso_code": "VA" }, "117": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "HN" }, "120": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "HU" }, "126": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "IS" }, "122": { "postal_code_type": "pin", "postal_code_pattern": "^[1-9][0-9]{5}$", "postal_code_placeholder": "110001", "country_iso_code": "IN" }, "121": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "ID" }, "124": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}-?\\d{5}", "postal_code_placeholder": "", "country_iso_code": "IR" }, "125": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "IQ" }, "123": { "postal_code_type": "postal", "postal_code_pattern": null, "postal_code_placeholder": "", "country_iso_code": "IE" }, "269": { "postal_code_type": "postal", "postal_code_pattern": "IM\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}", "postal_code_placeholder": "", "country_iso_code": "IM" }, "127": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}(?:\\d{2})?", "postal_code_placeholder": "", "country_iso_code": "IL" }, "128": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "50100", "country_iso_code": "IT" }, "131": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}-?\\d{4}", "postal_code_placeholder": "100-0001", "country_iso_code": "JP" }, "307": { "postal_code_type": "postal", "postal_code_pattern": "JE\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}", "postal_code_placeholder": "", "country_iso_code": "JE" }, "130": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "JO" }, "132": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "KZ" }, "133": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "KE" }, "137": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "KW" }, "134": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "KG" }, "138": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "LA" }, "146": { "postal_code_type": "postal", "postal_code_pattern": "LV-\\d{4}", "postal_code_placeholder": "", "country_iso_code": "LV" }, "139": { "postal_code_type": "postal", "postal_code_pattern": "(?:\\d{4})(?: ?(?:\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "LB" }, "143": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "LS" }, "140": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "LR" }, "272": { "postal_code_type": "postal", "postal_code_pattern": "(948[5-9])|(949[0-7])", "postal_code_placeholder": "", "country_iso_code": "LI" }, "144": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "LT" }, "145": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "LU" }, "151": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "MK" }, "149": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "MG" }, "159": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MY" }, "238": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MV" }, "227": { "postal_code_type": "postal", "postal_code_pattern": "[A-Z]{3} ?\\d{2,4}", "postal_code_placeholder": "", "country_iso_code": "MT" }, "274": { "postal_code_type": "zip", "postal_code_pattern": "(969[67]\\d)(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "MH" }, "275": { "postal_code_type": "postal", "postal_code_pattern": "9[78]2\\d{2}", "postal_code_placeholder": "", "country_iso_code": "MQ" }, "239": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}(?:\\d{2}|[A-Z]{2}\\d{3})", "postal_code_placeholder": "", "country_iso_code": "MU" }, "276": { "postal_code_type": "postal", "postal_code_pattern": "976\\d{2}", "postal_code_placeholder": "", "country_iso_code": "YT" }, "150": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MX" }, "277": { "postal_code_type": "zip", "postal_code_pattern": "(9694[1-4])(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "FM" }, "148": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "MD" }, "278": { "postal_code_type": "postal", "postal_code_pattern": "980\\d{2}", "postal_code_placeholder": "", "country_iso_code": "MC" }, "154": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MN" }, "155": { "postal_code_type": "postal", "postal_code_pattern": "8\\d{4}", "postal_code_placeholder": "", "country_iso_code": "ME" }, "147": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MA" }, "153": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "MM" }, "166": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "NP" }, "233": { "postal_code_type": "postal", "postal_code_pattern": "988\\d{2}", "postal_code_placeholder": "", "country_iso_code": "NC" }, "167": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "3974", "country_iso_code": "NZ" }, "163": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "NI" }, "161": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "NE" }, "162": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "NG" }, "282": { "postal_code_type": "postal", "postal_code_pattern": "2899", "postal_code_placeholder": "", "country_iso_code": "NF" }, "283": { "postal_code_type": "zip", "postal_code_pattern": "(9695[012])(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "MP" }, "165": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "NO" }, "168": { "postal_code_type": "postal", "postal_code_pattern": "(PC )?\\d{3}", "postal_code_placeholder": "", "country_iso_code": "OM" }, "169": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "PK" }, "284": { "postal_code_type": "zip", "postal_code_pattern": "(969(?:39|40))(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "PW" }, "173": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}", "postal_code_placeholder": "", "country_iso_code": "PG" }, "178": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "PY" }, "171": { "postal_code_type": "Postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "PE" }, "172": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "PH" }, "174": { "postal_code_type": "postal", "postal_code_pattern": "\\d{2}-\\d{3}", "postal_code_placeholder": "10-345", "country_iso_code": "PL" }, "177": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}-\\d{3}", "postal_code_placeholder": "1000-205", "country_iso_code": "PT" }, "175": { "postal_code_type": "zip", "postal_code_pattern": "(00[679]\\d{2})(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "PR" }, "304": { "postal_code_type": "postal", "postal_code_pattern": "9[78]4\\d{2}", "postal_code_placeholder": "", "country_iso_code": "RE" }, "180": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "RO" }, "181": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "101000", "country_iso_code": "RU" }, "308": { "postal_code_type": "postal", "postal_code_pattern": "9[78][01]\\d{2}", "postal_code_placeholder": "", "country_iso_code": "BL" }, "286": { "postal_code_type": "postal", "postal_code_pattern": "(ASCN|STHL) 1ZZ", "postal_code_placeholder": "", "country_iso_code": "SH" }, "288": { "postal_code_type": "postal", "postal_code_pattern": "9[78][01]\\d{2}", "postal_code_placeholder": "", "country_iso_code": "MF" }, "289": { "postal_code_type": "postal", "postal_code_pattern": "9[78]5\\d{2}", "postal_code_placeholder": "", "country_iso_code": "PM" }, "249": { "postal_code_type": "Postal", "postal_code_pattern": "VC\\d{4}", "postal_code_placeholder": "", "country_iso_code": "VC" }, "291": { "postal_code_type": "postal", "postal_code_pattern": "4789\\d", "postal_code_placeholder": "", "country_iso_code": "SM" }, "183": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "SA" }, "185": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "SN" }, "189": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5,6}", "postal_code_placeholder": "", "country_iso_code": "RS" }, "220": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "SG" }, "191": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3} ?\\d{2}", "postal_code_placeholder": "", "country_iso_code": "SK" }, "192": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "SI" }, "188": { "postal_code_type": "postal", "postal_code_pattern": "[A-Z]{2} ?\\d{5}", "postal_code_placeholder": "", "country_iso_code": "SO" }, "215": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "ZA" }, "294": { "postal_code_type": "postal", "postal_code_pattern": "SIQQ 1ZZ", "postal_code_placeholder": "", "country_iso_code": "GS" }, "136": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}(?:\\d{2}|-\\d{3})", "postal_code_placeholder": "", "country_iso_code": "KR" }, "99": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "28013", "country_iso_code": "ES" }, "142": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "LK" }, "295": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "SJ" }, "194": { "postal_code_type": "postal", "postal_code_pattern": "[HLMS]\\d{3}", "postal_code_placeholder": "", "country_iso_code": "SZ" }, "193": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3} ?\\d{2}", "postal_code_placeholder": "", "country_iso_code": "SE" }, "80": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "CH" }, "204": { "postal_code_type": "postal", "postal_code_pattern": "\\d{3}(\\d{2})?", "postal_code_placeholder": "", "country_iso_code": "TW" }, "199": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "TJ" }, "205": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4,5}", "postal_code_placeholder": "", "country_iso_code": "TZ" }, "198": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "TH" }, "164": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4} ?[A-Z]{2}", "postal_code_placeholder": "1105 AW", "country_iso_code": "NL" }, "202": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "TN" }, "203": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "TR" }, "200": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "TM" }, "299": { "postal_code_type": "postal", "postal_code_pattern": "TKCA 1ZZ", "postal_code_placeholder": "", "country_iso_code": "TC" }, "207": { "postal_code_type": "postal", "postal_code_pattern": "^([0-8][0-9]{4}|9[0-3][0-9]{3}|94[0-8][0-9]{2}|949[0-8][0-9]|9499[0-9])$", "postal_code_placeholder": "", "country_iso_code": "UA" }, "105": { "postal_code_type": "postal", "postal_code_pattern": "^(GIR ?0AA|((AB|AL|B|BA|BB|BD|BF|BH|BL|BN|BR|BS|BT|BX|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\\d[\\dA-Z]? ?\\d[ABD-HJLN-UW-Z]{2}))|BFPO ?\\d{1,4})$", "postal_code_placeholder": "NW1 6XE", "country_iso_code": "GB" }, "209": { "postal_code_type": "zip", "postal_code_pattern": "^\\d{5}(?:-\\d{4})?$", "postal_code_placeholder": "12345", "country_iso_code": "US" }, "302": { "postal_code_type": "zip", "postal_code_pattern": "96898", "postal_code_placeholder": "", "country_iso_code": "UM" }, "208": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "UY" }, "248": { "postal_code_type": "zip", "postal_code_pattern": "(008(?:(?:[0-4]\\d)|(?:5[01])))(?:[ \\-](\\d{4}))?", "postal_code_placeholder": "", "country_iso_code": "VI" }, "210": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "UZ" }, "211": { "postal_code_type": "postal", "postal_code_pattern": "\\d{4}", "postal_code_placeholder": "", "country_iso_code": "VE" }, "212": { "postal_code_type": "postal", "postal_code_pattern": "\\d{6}", "postal_code_placeholder": "", "country_iso_code": "VN" }, "224": { "postal_code_type": "postal", "postal_code_pattern": "986\\d{2}", "postal_code_placeholder": "", "country_iso_code": "WF" }, "213": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "EH" }, "217": { "postal_code_type": "postal", "postal_code_pattern": "\\d{5}", "postal_code_placeholder": "", "country_iso_code": "ZM" } }, "ship_to_preference_capabilities": { "209": { "postal_code": { "is_assignable": true, "is_required": true } }, "79": { "postal_code": { "is_assignable": true, "is_required": true } }, "122": { "postal_code": { "is_assignable": true, "is_required": true } }, "61": { "postal_code": { "is_assignable": true, "is_required": true } }, "105": { "postal_code": { "is_assignable": true, "is_required": true } } }, "category_id": 68887416, "admin_tools_page_data": [], "currency_data": { "currency_id": 826, "code": "GBP", "name": "British Pound", "number_precision": 2, "symbol": "\u00a3", "listing_enabled": true, "browsing_enabled": true, "buyer_location_restricted": false, "rate_updates_enabled": true }, "machine_translation\/listings_click_to_translate": true, "ads.prolist\/log_clicks_and_impressions": false, "mfg\/dovetail": true, "mfg\/buyer_facing_dovetail": true, "searchx\/4q18\/dwell_time_as_backend_event": false, "is_regulatory_buyer_disclosure_enabled": true, "machine_translation": { "mode": "disabled", "listing_id": 1240533978, "to_lang_code": "en-US", "from_lang_code": "en-US", "translated": null, "untranslated": null, "category_tags": null }, "listing_fee": 20, "presented_listing_fee": "$0.20 USD", "listing_period_months": 4, "apple_pay_api_version_number": 12, "render_is_gift_section": true, "should_show_sidebar_cart_post_atc_recs": false, "is_gift_guide_flyout_enabled": false, "should_hide_sub_nav": true, "should_show_breadcrumbs": true, "listing_image_url": "", "eligible_for_mini_collections_and_ignore_menu": false, "image_ids_by_listing_variation_ids": { "2701971915": 3896185257, "2701972015": 3896184697, "2701972005": 3896184697, "2701971987": 3896184697, "2701971973": 3848687032, "2701971965": 3848687032, "2701971953": 3896184703, "2701971949": 3896184703, "2701971939": 3896184703, "2701971933": 3896184703, "2679358558": 3896199477, "2701971911": 3896185257, "2701971901": 3548739730, "2679358656": 3896184697, "2679358642": 3848687032, "2679358640": 3848687032, "2679358610": 3896185257, "2679358604": 3896185257, "2679358596": 3548739730, "2679358586": 3548739730 }, "should_show_scrollable_thumbnails": true, "should_show_video": true, "shouldShowThumbnails": true, "carousel_height_percentage_relative_to_width": [66.6666666666666714036182384006679058074951171875, 80, 75, 75, 80, 80, 80, 80, 80, 80], "is_mobile_experience": false, "is_users_own_listing": false, "neu_buy_box_type": "offerings", "listing_id": 1240533978, "klarna_osm_js": "https:\/\/js.klarna.com\/web-sdk\/v1\/klarna.js", "is_eligible_for_klarna_osm": false, "quantity_submodule_enabled": true, "personalization_is_required": true, "personalization_maximum_character_count": 1024, "product_details_content_toggle_selector": "[data-wt-content-toggle][aria-controls='content-toggle-product-details-read-more']", "should_show_description_content_toggle": true, "use_shipping_variant_view": true, "shipping_section_default_open": true, "shipping_and_returns_is_eligible_for_sticky_buy_box": true, "estimated_shipping_is_eligible_for_sticky_buy_box": true, "is_eligible_for_shipping_and_returns_cleanup": true, "is_postal_code_empty_on_initial_load": true, "invalid_postal_codes": { "209": ["000", "001", "002", "003", "004", "213", "269", "343", "345", "348", "353", "419", "428", "429", "517", "518", "519", "529", "533", "536", "552", "568", "569", "578", "579", "589", "621", "632", "642", "643", "659", "663", "682", "694", "695", "696", "697", "698", "699", "702", "709", "715", "732", "742", "771", "817", "818", "819", "839", "848", "849", "854", "858", "861", "862", "866", "867", "868", "869", "872", "886", "887", "888", "892", "896", "899", "909", "929", "987"] }, "is_eligible_for_policies_in_overlay": true, "active_tab": "same_listing_reviews", "allow_reviews_debug": false, "using_mweb_tabs": false, "load_tabbed_layout_js": true, "should_show_helpful_count": true, "should_default_chronological_sort": false, "should_include_subratings": true, "structured_policies_messages": { "module_name": "Shop policies", "last_updated_on": "Last updated on", "publish": "Publish Shop Policies", "policies_save": "Save policies", "policies_edit": "Edit policies", "cancel": "Cancel", "revert": "Use previous policies", "edit": "Edit", "loading": "Loading", "preview_banner_kicker": "Policies preview", "not_existing_policies_preview_banner_header": "Review and customize these policies so they work for you", "preview_banner_body": "You can publish these to your shop or edit them if you need to make changes", "preview_publish_confirm": "By clicking Publish, you'll post your Shop Policies and agree to comply with them.", "revert_confirm": "Are you sure you want to revert?", "leave_page_warning": "You are currently editing shop policies", "private_receipt_info_title": "Private receipt info", "private_receipt_info_body": "We have removed the 'Private Receipt Info' section of your policies page. You don't need to populate this section for the purposes of complying with international consumer protection laws anymore because this new Policies feature will automatically display the relevant content of your shop policies within the buyer receipt email instead.", "private_receipt_info_link": "See this FAQ for more information", "structured_banner_title": "Switch to simple shop policies", "structured_banner_title_v2": "Set up simple shop policies", "structured_banner_body": "We'll give you a quick template to create your shop policies in seconds.", "structured_banner_button": "Try it now", "new_simplified_policies": "Your new, simplified policies", "new_policies_banner_description_1": "Buyers prefer policies that are short, clear and address their key concerns, so we've designed them that way.", "new_policies_banner_description_2": "Review and customize these policies so they work for you. We've saved your previous policies, so you can always switch back.", "new_policies_banner_description_3": "We've saved your previous policies, so you can always switch back.", "new_policies_banner_learn_more": "Learn more", "publish_policies_success": "Your new policies have been published!", "publish_policies_error": "There was an error publishing your policies. Please try again.", "policies_failed_to_load": "Shop policies failed to load", "policies_try_again": "Try again", "policies_saving": "Saving...", "policies_publishing": "Publishing...", "listing_preview_shipping": "This section will show shipping or download information once you publish your listing.", "craft_shipping_section_title": "Shipping & policies", "craft_payments_section_title": "Payments", "craft_refunds_section_title": "Returns & exchanges", "craft_terms_section_title": "Terms & conditions", "craft_more_details_accordion_label": "+ See more...", "listing_returns_and_exchanges": "See item details for return and exchange eligibility.", "no_policies": "Looks like this shop doesn't have any custom policies. Have questions?", "message_the_seller": "Message the seller", "shipping_section_title": "Shipping", "payments_section_title": "Payments", "refunds_section_title": "Returns & exchanges", "digital_section_title": "Downloads", "terms_section_title": "Terms & conditions", "more_details_accordion_label": "See more...", "seller_details_section_title": "More information" }, "shop_policy_selector": "[data-content-toggle-uid=shop_policies]", "has_external_mobile_image_tags": false, "tag_cards_with_image": ".wqibxhgrpyfo", "load_user_faves_option": true, "update_many_faves_option": true, "is_async_only_faves_option": false, "guest_favorites_enabled": true, "collection_count": 0, "favorites_key": "", "use_clearer_privacy_description": true, "conditional_sale_interstitial": true, "google_client_id": "296956783393-2d8r0gljo87gjmdpmvkgbeasdmelq33e.apps.googleusercontent.com", "show_one_tap_modal": false });
                                })();
                            </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
                                __webpack_public_path__ = "https://www.etsy.com/acgcs/evergreenVendor/js/en-US/";
                            </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
                                (function () {
                                            var asyncAvailable = true;
                                            try {
                                                eval("async () => {}");
                                            } catch (e) {
                                                asyncAvailable = false;
                                            }
                                
                                            var falseUA = true && !asyncAvailable;
                                            var primarySupportsAsync = !true && asyncAvailable;
                                
                                            var clientloggerIsEnabled = true;
                                            if (clientloggerIsEnabled) {
                                                if (falseUA) {
                                                    new Image().src = '/clientlog?falseua=1';
                                                }
                                                if (primarySupportsAsync) {
                                                    new Image().src = '/clientlog?primarysupportsasync=1';
                                                }
                                                if (window.__etsy_logging && window.__etsy_logging.bots && (window.__etsy_logging.bots.isBot || window.__etsy_logging.bots.botCheck.length > 0)) {
                                                    new Image().src = '/clientlog?feisbot=1&bot_check=' + encodeURIComponent(JSON.stringify(window.__etsy_logging.bots.botCheck));
                                                }
                                            }
                                
                                        })();
                            </script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/paula/v3/polyfill.min.js?etsy-v=v5&amp;flags=gated&amp;features=AbortController%2CDOMTokenList.prototype.@@iterator%2CDOMTokenList.prototype.forEach%2CIntersectionObserver%2CIntersectionObserverEntry%2CNodeList.prototype.@@iterator%2CNodeList.prototype.forEach%2CObject.preventExtensions%2CString.prototype.anchor%2CString.raw%2Cdefault%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Ces2020%2Ces2021%2Ces2022%2Cfetch%2CgetComputedStyle%2CmatchMedia%2Cperformance.now"></script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/acgcs/evergreenVendor/js/en-US/vendor_bundle.de439cd03f5b2cb43029.js"></script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/acgcs/evergreenVendor/js/en-US/etsy_libs.e402a74fc87f3dd8931c.js"></script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/acgcs/evergreenVendor/js/en-US/app-shell/globals/index.1f7e18baf22d1c4c7e36.js"></script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/acgcs/evergreenVendor/js/en-US/@etsy-modules/ConsentManagement/Transcend-Integration.03a91a372e403032da4b.js"></script>
<script defer="" nonce="7xBPcjRT6G9cMCQkUb76Xf2I" src="https://www.etsy.com/acgcs/evergreenVendor/js/en-US/bootstrap/listings3/main.c2e27987dcf6b870a1c3.js"></script>
<main id="content">
<div class="wt-hide-xs wt-show-lg breadcrumb_nav" data-ui="listing-breadcrumbs">
<div class="cat-nav v2-toolkit-cat-nav wt-ml-xs-0 wt-mr-xs-0" data-ui="cat-nav" id="desktop-category-nav">
<div class="wt-text-caption wt-position-relative wt-z-index-5 wt-pt-xs-2">
<div class="wt-grid wt-body-max-width wt-pl-xs-2 wt-pr-xs-2 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-6 wt-pr-lg-6">
<ul class="wt-list-unstyled wt-grid__item-xs-12 wt-body-max-width wt-display-flex-xs wt-justify-content-center" data-menu-ui="menubar" data-ui="top-nav-category-list">
<li class="top-nav-item wt-text-black wt-text-body-small--tight wt-pb-xs-2" data-ui="list-item-breadcrumbs">
<a data-menu-ui="menuitem" href="https://mauritiusattractions.com/kazalala-mauritius" tabindex="0">Homepage</a>
<span class="etsy-icon arrow-separator wt-text-black wt-icon--smallest-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path>
</svg></span>
</li>
<li class="top-nav-item wt-text-black wt-text-body-small--tight wt-pb-xs-2" data-ui="list-item-breadcrumbs">
<a data-menu-ui="menuitem" href="https://mauritiusattractions.com/kazalala-mauritius" tabindex="0">SLOT MAHJONG DAFTAR</a>
<span class="etsy-icon arrow-separator wt-text-black wt-icon--smallest-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path>
</svg></span>
</li>
<li class="top-nav-item wt-text-black wt-text-body-small--tight wt-pb-xs-2" data-ui="list-item-breadcrumbs">
<a data-menu-ui="menuitem" href="https://mauritiusattractions.com/kazalala-mauritius" tabindex="0">SLOT GACOR HARI INI</a>
<span class="etsy-icon arrow-separator wt-text-black wt-icon--smallest-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path>
</svg></span>
</li>
<li class="top-nav-item wt-text-black wt-text-body-small--tight wt-pb-xs-2" data-ui="list-item-breadcrumbs">
<a data-menu-ui="menuitem" href="https://mauritiusattractions.com/kazalala-mauritius" tabindex="0">SLOT GACOR 2025</a>
<span class="etsy-icon arrow-separator wt-text-black wt-icon--smallest-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21a1 1 0 0 1-.664-1.747l8.164-7.254-8.164-7.252a1 1 0 0 1 1.328-1.494L18.5 12l-9.836 8.747A1 1 0 0 1 8 21"></path>
</svg></span>
</li>
<li class="top-nav-item wt-text-black wt-text-body-small--tight wt-pb-xs-2" data-ui="list-item-breadcrumbs">
<a data-menu-ui="menuitem" href="https://mauritiusattractions.com/kazalala-mauritius" tabindex="0">SLOT GACOR</a>
</li>
</ul>
<span class="active-nav-item-indicator wt-position-absolute wt-display-inline-block" data-ui="active-nav-item-indicator"></span>
</div>
</div>
</div>
</div>
<div class="content-wrap listing-page-content" data-selector="listing-page-content" style="min-width: 0px;">
<div class="wt-pt-xs-5 listing-page-content-container-wider wt-horizontal-center">
<div class="listing-buy-box-experiment" id="listing-right-column">
<div>
<div class="body-wrap wt-body-max-width wt-display-flex-md wt-flex-direction-column-xs">
<div class="image-col wt-order-xs-1 wt-mb-xs-2 wt-mb-lg-6 wt-pl-md-4 wt-pl-lg-5 wt-pl-xs-2 wt-pr-xs-2 wt-pr-xl-2 wt-pr-md-4 wt-pr-lg-0">
<div class="wt-flex-lg-6 wt-mr-lg-3 wt-pr-xl-3">
<div class="image-wrapper wt-position-relative carousel-container-responsive" id="photos">
<div class="listing-page-image-carousel-component wt-display-flex-xs wt-mb-lg-2 wt-mb-sm-8" data-component="listing-page-image-carousel" data-palette-listing-id="1240533978" data-shop-id="26809794">
<div class="image-carousel-container wt-position-relative wt-flex-xs-6 wt-order-xs-2 show-scrollable-thumbnails" style="margin-left: 0px;">
<ul class="wt-list-unstyled wt-position-relative carousel-pane-list" data-carousel-pane-list="" style="padding-top: 100%;" tabindex="0">
<li class="wt-position-absolute wt-width-full wt-height-full wt-position-top wt-position-left carousel-pane" data-carousel-pane="" data-image-id="3548739730" data-index="0" data-palette-listing-image="">
<img alt="SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025" class="wt-max-width-full wt-horizontal-center wt-vertical-center carousel-image wt-rounded" data-carousel-first-image="" data-index="0" data-original-image-width="3000" data-perf-group="main-product-image" data-src-zoom-image="https://mauritiusattractions.com/assets/img/slot-mahjong.jpg" fetchpriority="high" src="https://mauritiusattractions.com/assets/img/slot-mahjong.jpg" srcset="https://mauritiusattractions.com/assets/img/slot-mahjong.jpg 1x, https://mauritiusattractions.com/assets/img/slot-mahjong.jpg 2x" style="width: 100%;"/>
</li>
<li class="wt-display-none wt-position-absolute wt-width-full wt-height-full wt-position-top wt-position-left carousel-pane no-zoom" data-carousel-pane="" data-index="1" data-no-zoom="" data-video-pane="">
<div class="wt-width-full wt-height-full">
<div aria-hidden="true" aria-live="assertive" class="wt-spinner wt-spinner--02 wt-mt-xs-0 wt-vertical-center wt-display-none" data-clg-id="WtSpinner" data-video-loading-icon="">
<span class="wt-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="transparent" r="21"></circle>
</svg></span> Loading
                                                                                    </div>
<div class="video-play-overlay wt-display-none" data-video-play-overlay="">
<div class="wt-position-absolute wt-position-top wt-position-left wt-width-full wt-height-full wt-display-flex-xs wt-justify-content-center wt-align-items-center">
<div class="video-play-overlay-icon wt-circle wt-overflow-hidden wt-bg-white wt-p-xs-2 wt-shadow-elevation-3">
<span class="wt-icon wt-icon--largest"><svg aria-hidden="true" focusable="false" viewbox="0 2 20 20" xmlns="http://www.w3.org/2000/svg">
<polygon points="4 4 4 20 20 12 4 4"></polygon>
</svg></span>
</div>
</div>
</div>
<div aria-hidden="true" aria-role="alert" class="wt-display-none wt-vertical-center wt-text-center-xs" data-video-error-state="">
<p class="wt-text-body-01">
                                                                                            Hm, we’re having trouble loading this video.
                                                                                        </p>
<p class="wt-text-caption">
                                                                                            Try to refresh the page or come back later.
                                                                                        </p>
</div>
</div>
</li>
</ul>
</div>
<div>
<div class="carousel-pagination-item-v2 wt-position-absolute wt-position-top wt-position-left wt-z-index-9" data-thumbnail-scroll-up="">
</div>
<div class="carousel-pagination-item-v2 wt-position-absolute wt-position-bottom wt-position-left wt-z-index-9" data-thumbnail-scroll-down="">
</div>
<div class="wt-position-absolute wt-overflow-scroll wt-position-top wt-position-bottom wt-position-left scroll-container-no-scrollbar" data-thumbnail-scroll-container="">
</div>
</div>
</div>
</div>
<div aria-hidden="true" aria-label="report-item-overlay-title" aria-modal="false" class="wt-overlay wt-display-none" data-report-item-overlay="" data-wt-overlay="" id="report-item-overlay" role="dialog">
<div class="wt-overlay__modal" data-overlay-modal="">
<button aria-label="Close" class="wt-btn wt-btn--icon wt-btn--tertiary wt-btn--light wt-overlay__close-icon" data-wt-overlay-close="">
<span class="etsy-icon wt-icon--smaller"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.414,12l6.293-6.293a1,1,0,0,0-1.414-1.414L12,10.586,5.707,4.293A1,1,0,0,0,4.293,5.707L10.586,12,4.293,18.293a1,1,0,1,0,1.414,1.414L12,13.414l6.293,6.293a1,1,0,0,0,1.414-1.414Z"></path>
</svg></span>
</button>
<div class="wt-display-none" data-report-item-form-container="">
<div class="wt-overlay__header report-item-step">
<h2 class="wt-text-heading" id="report-item-overlay-title">What’s
                                                        wrong with this listing?</h2>
</div>
<div class="wt-overlay__header report-item-step wt-display-none">
<h3 class="wt-text-heading" id="report-item-overlay-title-more">Add
                                                        more details</h3>
<h3 class="wt-text-body-01 wt-mt-xs-3">Share more specifics to help
                                                        us review this item and protect our marketplace.</h3>
</div>
<form action="/add_report.php" data-report-item-form="" method="post">
<div class="report-item-step">
<div class="wt-select wt-mb-xs-3">
<select class="wt-select__element" data-report-item-choices="" id="report-item-choices">
<optgroup>
<option value="default">Choose a reason…</option>
<option value="order-problem">There’s a problem with my order</option>
<option value="ip-policy">It uses my intellectual property without permission</option>
<option value="flag-item">I don’t think it meets Etsy’s policies</option>
</optgroup>
</select>
<label class="wt-screen-reader-only" for="report-item-choices">Choose a reason…</label>
</div>
<div class="wt-display-none" data-report-choice="order-problem" id="order-problem">
<p class="wt-mb-xs-2 prose">The first thing you should do is contact the seller directly.</p>
<p class="wt-mb-xs-2 ip-policy prose">If you’ve already done that, your item hasn’t arrived, or it’s not as described, you can report that to Etsy by opening a case.
                                                                                    </p>
<p class="wt-mb-xs-2 prose">
<a href="/help/article/5307" target="_blank">
                                                                    Report a problem with an order
                                                                </a>
</p>
</div>
<div class="wt-display-none" data-report-choice="ip-policy" id="ip-policy">
<p class="wt-mb-xs-2 prose">We take intellectual property concerns very seriously, but many of these problems can be resolved directly by the parties involved. We suggest contacting the seller directly
                                                                                        to respectfully share your concerns.</p>
<p class="wt-mb-xs-2 prose">If you’d like to file an allegation of infringement, you’ll need to follow the process described in our <a href="/legal/ip" target="_blank">Copyright and Intellectual Property
                                                                    Policy</a>.</p>
</div>
<div class="wt-display-none" data-report-choice="flag-item" id="flag-item">
<div class="wt-mb-xs-2">
<a href="/legal/sellers#allowed" target="_blank">
                                                                    Review how we define handmade, vintage and supplies
                                                                </a>
</div>
<div class="wt-mb-xs-2">
<a href="/legal/prohibited" target="_blank">
                                                                    See a list of prohibited items and materials
                                                                </a>
</div>
<div class="wt-mb-xs-4">
<a href="/legal/policy/listing-mature-content-correctly/242665462117" target="_blank">
                                                                    Read our mature content policy
                                                                </a>
</div>
<div class="wt-validation" data-report-reason="">
<fieldset class="wt-mb-xs-4">
<legend class="wt-label wt-mb-xs-2">Tell us why you're reporting this item</legend>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="not_handmade_vintage_or_craft" data-report-reason-input="" id="flag_not_handmade_vintage_or_craft" name="flag_type_mnemonic" type="radio" value="LISTING_CSV_MEMBER_FLAG"/>
<label for="flag_not_handmade_vintage_or_craft">It's not handmade, vintage, or craft supplies
                                                                                                </label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="pornographic" data-report-reason-input="" id="flag_pornographic" name="flag_type_mnemonic" type="radio" value="OC_PORNOGRAPHY"/>
<label for="flag_pornographic">It's pornographic
                                                                                                </label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="hate_speech_or_harassment" data-report-reason-input="" id="flag_hate_speech_or_harassment" name="flag_type_mnemonic" type="radio" value="OC_HATE_VIOLENT_HARMFUL"/>
<label for="flag_hate_speech_or_harassment">It's hate speech or harassment</label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="minor_safety" data-report-reason-input="" id="flag_minor_safety" name="flag_type_mnemonic" type="radio" value="LISTING_MINOR_SAFETY"/>
<label for="flag_minor_safety">It's a threat to minor safety</label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="violence_or_self_harm" data-report-reason-input="" id="flag_violence_or_self_harm" name="flag_type_mnemonic" type="radio" value="OC_HATE_VIOLENT_HARMFUL"/>
<label for="flag_violence_or_self_harm">It promotes violence or self-harm</label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="dangerous_or_hazardous" data-report-reason-input="" id="flag_dangerous_or_hazardous" name="flag_type_mnemonic" type="radio" value="LISTING_PROHIBITED"/>
<label for="flag_dangerous_or_hazardous">It's dangerous or hazardous</label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="violates_law" data-report-reason-input="" id="flag_violates_law" name="flag_type_mnemonic" type="radio" value="CC_REPORTED_ILLEGAL_CONTENT"/>
<label for="flag_violates_law">It's violating a specific law or regulation</label>
</div>
<div class="wt-radio wt-mb-xs-1">
<input class="wt-radio" data-flag-name="violates_not_listed_policy" data-report-reason-input="" id="flag_violates_not_listed_policy" name="flag_type_mnemonic" type="radio" value="LISTING_PROHIBITED"/>
<label for="flag_violates_not_listed_policy">It violates a policy that's not listed here
                                                                                                </label>
</div>
<div class="wt-validation__message wt-validation__message--is-hidden wt-text-red" data-error="no-report-reason" id="no-report-reason">
                                                                                                Please choose a reason</div>
</fieldset>
</div>
</div>
</div>
<div class="report-item-step wt-display-none">
<div class="wt-validation" data-report-comment="" tabindex="0">
<label class="wt-screen-reader-only" for="report-item-reason">Include anything else we should know about this item</label>
<textarea class="wt-textarea" data-report-comment-input="" id="report-item-reason" name="reason" placeholder="Include anything else we should know about this item"></textarea>
<div class="wt-validation__message wt-validation__message--is-hidden wt-text-red wt-mt-xs-2" data-error="no-report-comment" id="no-report-comment">
<span class="wt-icon wt-text-white wt-validation__icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11 6v8h2V6zm1 9.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" fill-rule="evenodd"></path>
</svg></span> Make sure to add more details.
                                                                                    </div>
<div class="wt-validation__message wt-validation__message--is-hidden wt-text-red wt-mt-xs-2" data-error="comment-min-length-illegal-content" id="comment-min-length-illegal-content">
<span class="wt-icon wt-text-white wt-validation__icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11 6v8h2V6zm1 9.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" fill-rule="evenodd"></path>
</svg></span> Add more details, including a law or regulation name (10 characters min).
                                                                                    </div>
</div>
</div>
<div class="wt-mt-xs-2 wt-mb-xs-2 wt-text-gray wt-display-none" data-report-bonafide="">
                                                                                By submitting this report, you confirm the information and claims in this form are accurate.
                                                                            </div>
<div class="wt-overlay__footer wt-pt-xs-0 wt-display-none" data-report-item-overlay-footer="" id="overlay-footer">
<input class="hidden csrf" name="_nnc" type="hidden" value="3:1741889934:-I8oyuBj6CK5DjgZk-t2lX7sXAsF:e4dae7b6a833effed340c7ec9a3d821c0270c2598bb0fcfd815212c7b9b5ca0b"/>
<input name="target_id" type="hidden" value="1240533978"/>
<input name="target_type" type="hidden" value="listing"/>
<input name="send_report" type="hidden" value="true"/>
<input name="ref" type="hidden" value="sr_gallery-1-1"/>
<input name="platform" type="hidden" value="web"/>
<input name="search_query" type="hidden" value=""/>
<div class="wt-overlay__footer__cancel">
<button class="wt-btn wt-btn-transparent report-item-step wt-display-none" data-report-back-button="" type="button">
                                                                                        Go back
                                                                                    </button>
</div>
<div class="wt-overlay__footer__action">
<button class="wt-btn wt-btn--primary report-item-step" data-report-next-button="" type="button">
                                                                                        Next
                                                                                    </button>
<button class="wt-btn wt-btn--primary report-item-step wt-display-none" data-report-submit-button="" type="submit">
                                                                                        Submit report
                                                                                    </button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="cart-col wt-order-xs-2 wt-mb-lg-6">
<div class="wt-display-flex-lg wt-flex-direction-column-md wt-flex-lg-3 wt-pl-md-4 wt-pr-md-4 wt-pl-lg-0 wt-pr-lg-5 wt-pl-xs-2 wt-pr-xs-2" id="listing-page-cart">
<div style="display: flex;width: 100%;height: 60px; gap: 2px;">
<a href="https://bamerus.top/kenahokiregist" style="width: 100%; height: 60px; font-weight: bold; color: #fff;  font-size: 24px; text-decoration: none;">
<button style="width: 100%; height: 60px; font-weight: bold; font-size: 18px; background: linear-gradient(to right,#70550c 0%,#e6a901 100%); color: #fff;">DAFTAR</button>
</a>
<a href="https://bamerus.top/kenahokiregist" style="width: 100%; height: 60px; font-weight: bold; color: #fff;  font-size: 24px; text-decoration: none;">
<button style="width: 100%; height: 60px; font-weight: bold; font-size: 18px; background: linear-gradient(to right,#777777 0%,#a5a9b4 100%); color: #fff;">LOGIN</button>
</a>
</div>
<div class="wt-mt-xs-1 wt-mb-xs-1">
<h1 class="wt-line-height-tight wt-break-word wt-text-body-01" data-buy-box-listing-title="true" tabindex="0">
                                            SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025                                    
                                        </h1>
</div>
<div class="wt-mb-xs-3">
<div class="wt-display-inline-flex-xs wt-align-items-center wt-flex-wrap">
<div class="wt-display-inline-flex-xs wt-align-items-center">
<span class="wt-text-title-small">
<a class="wt-text-link-no-underline wt-text-black" href="https://mauritiusattractions.com/kazalala-mauritius?ref=shop-header-name&amp;listing_id=1240533978&amp;from_page=listing">
                                                        SLOT MAHJONG
                                                    </a>
</span>
</div>
<div class="wt-ml-xs-1">
<div class="wt-text-link-no-underline review-stars-text-decoration-none">
<a aria-label="4.2 out of 5 stars. See reviews." data-click-source="review_stars" href="#reviews"><span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="4.192"/>
<input name="rating" type="hidden" value="4.192">
<span class="wt-screen-reader-only">4 out of 5 stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smallest" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path>
</svg></span>
</span>
</input></span></a>
<p style="text-align: justify;"><a href="https://mauritiusattractions.com/kazalala-mauritius">SLOT MAHJONG</a> merupakan tempat penyedia situs slot gacor terbaik sampai hari ini dengan tingkat RTP yang sangat tinggi. Temani waktu liburanmu bersama Slot Mahjong Ways dan rasakan sensasi gampang menang bertubi-tubi.

</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="listing-info wider-review-col wt-order-xs-6">
<div class="wt-flex-lg-5 wt-align-items-flex-start wt-max-width-full wt-pl-md-4 wt-pr-md-4 wt-pr-lg-0 wt-pl-lg-5 wt-pl-xs-2 wt-pr-xs-2" data-appears-component-name="listing_page_reviews_container_top" data-offset="0.01">
<div class="wt-mb-xs-3">
<div data-lazy-loaded-bottom-section-before-reviews-trigger=""></div>
<div data-appears-component-name="listing_page_reviews">
<div class="wt-align-items-flex-start" data-reviews-container="" id="reviews">
<div class="reviews__shop-info">
<div class="wt-display-flex-xs wt-flex-direction-row-xs wt-flex-wrap wt-align-items-center wt-mb-xs-2">
<div class="wt-display-flex-xs wt-align-items-center">
<h2 class="wt-mr-xs-2 wt-text-heading-small">
                                                                697 reviews
                                                            </h2>
<span><span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="4.192"/>
<input name="rating" type="hidden" value="4.192"/>
<span class="wt-screen-reader-only">4 out of 5
                                                                        stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M12,6.47l1.21,2.84.41,1,1.05.09,3.07.27-2.32,2-.8.69.24,1,.69,3L12.9,15.79l-.9-.53-.9.53L8.45,17.38l.69-3,.24-1-.8-.69-2.32-2,3.07-.27,1.05-.09.41-1L12,6.47m.46-3.39h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4-.28-.88-6-.52L12.46,3.08Z"></path>
</svg></span>
</span>
</span>
</span>
</div>
</div>
</div>
<div aria-live="assertive" class="wt-spinner wt-spinner--02 wt-display-none" data-clg-id="WtSpinner" data-reviews-pagination-loading-spinner="">
<span class="wt-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="transparent" r="21"></circle>
</svg></span> Loading
                                                                        </div>
<div data-reviews="">
<div class="wt-mb-md-4">
<div class="wt-tab-container wt-pl-xs-0" style="overflow:inherit">
<div class="reviews__tabs wt-tab wt-mb-xs-2" data-wt-tab-list="" id="reviews-tab-list" role="tablist">
<button aria-controls="same-listing-reviews-panel" aria-selected="true" class="wt-tab__item" data-wt-tab="" id="same-listing-reviews-tab" role="tab" tabindex="0">
                                                                                            Reviews for this item
                                                                                            <span class="wt-badge wt-badge--statusInformational wt-ml-xs-2">
                                                                        31
                                                                    </span>
</button>
<button aria-controls="shop-listing-reviews-panel" aria-selected="false" class="wt-tab__item" data-wt-tab="" id="shop-reviews-tab" role="tab" tabindex="0">
                                                                                            Reviews for this shop
                                                                                            <span class="wt-badge wt-badge--statusInformational wt-ml-xs-2 wt-nowrap">
                                                                        697
                                                                    </span>
</button>
</div>
<div class="wt-display-flex-xs wt-justify-content-flex-end">
<div class="wt-menu" data-animate-in="true" data-clg-id="WtMenu" data-close-on-select="true" data-contain-focus="false" data-hide-trigger-on-open="false" data-menu-type="option" data-open-direction-force="false" data-open-direction-horiz="left" data-open-direction-vert="bottom" data-wt-menu="" id="sort-reviews-menu">
<button aria-expanded="false" aria-haspopup="true" class="wt-menu__trigger wt-btn wt-btn--transparent wt-btn--small sort-reviews-trigger" data-clg-id="WtMenuTrigger" data-wt-menu-trigger="" type="button">
<span class="wt-menu__trigger__label">Sort by:
                                                                            Suggested</span>
<span class="wt-icon wt-menu__trigger__caret"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="16.5 10 12 16 7.5 10 16.5 10"></polygon>
</svg></span>
</button>
<div class="wt-menu__body" data-clg-id="WtMenuBody" data-wt-menu-body="" role="menu">
<button aria-checked="true" class="wt-menu__item wt-is-selected reviews-sort-by-item" data-clg-id="WtMenuItem" data-sort-option="Relevancy" role="menuitemradio" tabindex="-1" type="button">
                                                                                                    Suggested
                                                                                                </button>
<button aria-checked="false" class="wt-menu__item reviews-sort-by-item" data-clg-id="WtMenuItem" data-sort-option="Recency" role="menuitemradio" tabindex="-1" type="button">
                                                                                                    Most recent
                                                                                                </button>
<button aria-checked="false" class="wt-menu__item reviews-sort-by-item" data-clg-id="WtMenuItem" data-sort-option="Highest" role="menuitemradio" tabindex="-1" type="button">
                                                                                                    Highest Rating
                                                                                                </button>
<button aria-checked="false" class="wt-menu__item reviews-sort-by-item" data-clg-id="WtMenuItem" data-sort-option="Lowest" role="menuitemradio" tabindex="-1" type="button">
                                                                                                    Lowest Rating
                                                                                                </button>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="same-listing-reviews-tab" class="wt-pl-xs-0 wt-mb-xs-2 wt-mb-lg-6" id="same-listing-reviews-panel" role="tabpanel">
<div class="wt-grid wt-grid--block wt-mb-xs-0">
<div class="wt-grid__item-xs-12 review-card" data-review-region="4499870672">
<div class="wt-bb-xs wt-pt-xs-1 wt-pb-xs-3 wt-display-flex-md">
<div class="wt-flex-xs-1 wt-flex-md-2 min-width-0" id="review-text-width-0">
<div class="wt-flex-md-3 wt-max-width-full wt-mr-md-8 wt-flex-md-auto">
<div class="wt-mb-xs-1">
<span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="5"/>
<input name="rating" type="hidden" value="5"/>
<span class="wt-screen-reader-only">5
                                                                                        out of 5 stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
</span>
</span>
</div>
<div class="wt-text-body-01 wt-line-height-tight">
<div class="max-height-review max-height-text-container is-long">
<div data-review-text-toggle-wrapper="">
<div class="wt-content-toggle--truncated-inline-multi wt-break-word wt-text-body" data-clg-id="WtInlineToggle">
<div class="wt-content-toggle__trigger-wrapper">
<button aria-controls="review-preview-toggle-01741889934" class="wt-content-toggle--ellipsis-btn" data-inline="multi" data-one-way="false" data-wt-content-toggle="" type="button">
<span class="etsy-icon wt-icon--base-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.001" r="2.999"></circle>
<circle cx="3" cy="12.001" r="2.999"></circle>
<circle cx="21" cy="12.001" r="2.999"></circle>
</svg></span>
<span class="wt-screen-reader-only">Listing
                                                                                                        review by Raja ningrat
                                                                                                        </span>
</button>
</div>
<p class="wt-text-truncate--multi-line wt-break-word wt-text-body" id="review-preview-toggle-01741889934">
                                                                                                                        Modal kecil menang banyak
                                                                                                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="wt-display-flex-xs wt-pt-xs-1 wt-mr-md-8">
<div class="wt-display-flex-xs wt-align-items-center wt-overflow-auto wt-text-truncate wt-width-full">
<p class="wt-text-caption-title wt-text-gray wt-flex-shrink-xs-0 wt-pb-xs-1 wt-pb-md-0">
                                                                                                            Purchased item: </p>
<a class="wt-text-link wt-text-caption wt-text-truncate wt-text-gray wt-pb-xs-1 wt-pb-md-0" data-review-link="" data-transaction-id="4499870672" href="https://mauritiusattractions.com/kazalala-mauritius">SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025 </a>
</div>
</div>
<div class="wt-display-flex-xs wt-align-items-center wt-pt-xs-1">
<div class="wt-icon wt-icon--smaller-xs wt-mr-xs-1">
<img alt="" aria-hidden="true" class="wt-mr-xs-2 wt-height-full wt-width-full wt-circle wt-overflow-hidden wt-image--cover wt-image" data-clg-id="WtImage" data-pin-nopin="true" loading="lazy" sizes="18px" src="https://i.etsystatic.com/iusa/594ff2/84122918/iusa_75x75.84122918_gb6l.jpg?version=0" srcset="https://i.etsystatic.com/iusa/9c29cd/107139460/iusa_50x50.107139460_3gfh.jpg?version=0 50w" style="aspect-ratio: 1;"/>
</div>
<p class="wt-text-caption wt-text-gray">
<a aria-label="Reviewer Raja ningrat" class="wt-text-link wt-mr-xs-1" data-review-username="" data-transaction-id="4499870672" href="/people/djgribbenlisle?ref=l_review" rel="nofollow">
                                                                                    Raja ningrat</a> Sep 23, 2025

                                                                                                    </p>
</div>
</div>
<div class="wt-flex-md-1 min-width-0 wt-text-right-md">
<div class="wt-mb-xs-3">
<span class="reviews__recommendation_signal">
<span class="wt-icon wt-fill-slime reviews__recommendation_signal_icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.059 20.473 21.26 6.15l-1.52-1.298-10.8 12.675-4.734-4.734-1.414 1.414z"></path>
</svg></span>Recommends this item
                                                                                                    </span>
</div>
<ul class="wt-text-right-md wt-width-full" data-review-subrating="">
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Item quality
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Shipping
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Customer service
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
</ul>
</div>
</div>
</div>
<div class="wt-grid__item-xs-12 review-card" data-review-region="4514805991">
<div class="wt-bb-xs wt-pt-xs-1 wt-pb-xs-3 wt-display-flex-md">
<div class="wt-flex-xs-1 wt-flex-md-2 min-width-0" id="review-text-width-1">
<div class="wt-flex-md-3 wt-max-width-full wt-mr-md-8 wt-flex-md-auto">
<div class="wt-mb-xs-1">
<span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="5"/>
<input name="rating" type="hidden" value="5"/>
<span class="wt-screen-reader-only">5
                                                                                        out of 5 stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
</span>
</span>
</div>
<div class="wt-text-body-01 wt-line-height-tight">
<div class="max-height-review max-height-text-container is-long">
<div data-review-text-toggle-wrapper="">
<div class="wt-content-toggle--truncated-inline-multi wt-break-word wt-text-body" data-clg-id="WtInlineToggle">
<div class="wt-content-toggle__trigger-wrapper">
<button aria-controls="review-preview-toggle-11741889934" class="wt-content-toggle--ellipsis-btn" data-inline="multi" data-one-way="false" data-wt-content-toggle="" type="button">
<span class="etsy-icon wt-icon--base-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.001" r="2.999"></circle>
<circle cx="3" cy="12.001" r="2.999"></circle>
<circle cx="21" cy="12.001" r="2.999"></circle>
</svg></span>
<span class="wt-screen-reader-only">Listing
                                                                                                        review by
                                                                                                        Apryanto</span>
</button>
</div>
<p class="wt-text-truncate--multi-line wt-break-word wt-text-body" id="review-preview-toggle-11741889934">
                                                                                                                        Hoki banget gampang menang
                                                                                                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="wt-display-flex-xs wt-pt-xs-1 wt-mr-md-8">
<div class="wt-display-flex-xs wt-align-items-center wt-overflow-auto wt-text-truncate wt-width-full">
<p class="wt-text-caption-title wt-text-gray wt-flex-shrink-xs-0 wt-pb-xs-1 wt-pb-md-0">
                                                                                                            Purchased item: </p>
<a class="wt-text-link wt-text-caption wt-text-truncate wt-text-gray wt-pb-xs-1 wt-pb-md-0" data-review-link="" data-transaction-id="4514805991" href="https://mauritiusattractions.com/kazalala-mauritius">SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025 </a>
</div>
</div>
<div class="wt-display-flex-xs wt-align-items-center wt-pt-xs-1">
<div class="wt-icon wt-icon--smaller-xs wt-mr-xs-1">
<span class="wt-icon wt-height-full wt-width-full wt-circle wt-overflow-hidden"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#FFE0C3"></path>
<path d="M18.863 8.412c-3.8-1.6-7.713-2.9-11.713-3.912a133.96 133.96 0 00-2.4 9.887l7.025 5.113s6.1-3.063 7.237-3.813c.788-.524-.15-7.274-.15-7.274z" fill="#095E31"></path>
</svg></span>
</div>
<p class="wt-text-caption wt-text-gray">
<a aria-label="Reviewer Apryanto" class="wt-text-link wt-mr-xs-1" data-review-username="" data-transaction-id="4514805991" href="/people/dubcfdd6ok2u35cr?ref=l_review" rel="nofollow">
                                                                                    Apryanto</a> Sep 03, 2025

                                                                                                    </p>
</div>
</div>
<div class="wt-flex-md-1 min-width-0 wt-text-right-md">
<div class="wt-mb-xs-3">
<span class="reviews__recommendation_signal">
<span class="wt-icon wt-fill-slime reviews__recommendation_signal_icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.059 20.473 21.26 6.15l-1.52-1.298-10.8 12.675-4.734-4.734-1.414 1.414z"></path>
</svg></span>Recommends this item
                                                                                                    </span>
</div>
<ul class="wt-text-right-md wt-width-full" data-review-subrating="">
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Item quality
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Shipping
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Customer service
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
</ul>
</div>
</div>
</div>
<div class="wt-grid__item-xs-12 review-card" data-review-region="4495215604">
<div class="wt-bb-xs wt-pt-xs-1 wt-pb-xs-3 wt-display-flex-md">
<div class="wt-flex-xs-1 wt-flex-md-2 min-width-0" id="review-text-width-2">
<div class="wt-flex-md-3 wt-max-width-full wt-mr-md-8 wt-flex-md-auto">
<div class="wt-mb-xs-1">
<span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="5"/>
<input name="rating" type="hidden" value="5"/>
<span class="wt-screen-reader-only">5
                                                                                        out of 5 stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
</span>
</span>
</div>
<div class="wt-text-body-01 wt-line-height-tight">
<div class="max-height-review max-height-text-container is-long">
<div data-review-text-toggle-wrapper="">
<div class="wt-content-toggle--truncated-inline-multi wt-break-word wt-text-body" data-clg-id="WtInlineToggle">
<div class="wt-content-toggle__trigger-wrapper">
<button aria-controls="review-preview-toggle-21741889934" class="wt-content-toggle--ellipsis-btn" data-inline="multi" data-one-way="false" data-wt-content-toggle="" type="button">
<span class="etsy-icon wt-icon--base-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.001" r="2.999"></circle>
<circle cx="3" cy="12.001" r="2.999"></circle>
<circle cx="21" cy="12.001" r="2.999"></circle>
</svg></span>
<span class="wt-screen-reader-only">Listing
                                                                                                        review by
                                                                                                        eswita</span>
</button>
</div>
<p class="wt-text-truncate--multi-line wt-break-word wt-text-body" id="review-preview-toggle-21741889934">
                                                                                                                        Depositnya mudah banget di slot mahjong
                                                                                                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="wt-display-flex-xs wt-pt-xs-1 wt-mr-md-8">
<div class="wt-display-flex-xs wt-align-items-center wt-overflow-auto wt-text-truncate wt-width-full">
<p class="wt-text-caption-title wt-text-gray wt-flex-shrink-xs-0 wt-pb-xs-1 wt-pb-md-0">
                                                                                                            Purchased item: </p>
<a class="wt-text-link wt-text-caption wt-text-truncate wt-text-gray wt-pb-xs-1 wt-pb-md-0" data-review-link="" data-transaction-id="4495215604" href="https://mauritiusattractions.com/kazalala-mauritius">SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025 </a>
</div>
</div>
<div class="wt-display-flex-xs wt-align-items-center wt-pt-xs-1">
<div class="wt-icon wt-icon--smaller-xs wt-mr-xs-1">
<img alt="" aria-hidden="true" class="wt-mr-xs-2 wt-height-full wt-width-full wt-circle wt-overflow-hidden wt-image--cover wt-image" data-clg-id="WtImage" data-pin-nopin="true" loading="lazy" sizes="18px" src="https://i.etsystatic.com/iusa/b81e6f/87140529/iusa_75x75.87140529_55pm.jpg?version=0" srcset="https://i.etsystatic.com/iusa/8347fd/50645006/iusa_50x50.50645006_5zrx.jpg?version=0 50w" style="aspect-ratio: 1;"/>
</div>
<p class="wt-text-caption wt-text-gray">
<a aria-label="Reviewer Raisa" class="wt-text-link wt-mr-xs-1" data-review-username="" data-transaction-id="4495215604" href="/people/Raisajane?ref=l_review" rel="nofollow">
                                                                                    Raisa</a> Aug 25, 2025

                                                                                                    </p>
</div>
</div>
<div class="wt-flex-md-1 min-width-0 wt-text-right-md">
<ul class="wt-text-right-md wt-width-full" data-review-subrating="">
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Item quality
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Shipping
                                                                                                        </div>
<span>
<span>4</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Customer service
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
</ul>
</div>
</div>
</div>
<div class="wt-grid__item-xs-12 review-card" data-review-region="4483335388">
<div class="wt-bb-xs wt-pt-xs-1 wt-pb-xs-3 wt-display-flex-md">
<div class="wt-flex-xs-1 wt-flex-md-2 min-width-0" id="review-text-width-3">
<div class="wt-flex-md-3 wt-max-width-full wt-mr-md-8 wt-flex-md-auto">
<div class="wt-mb-xs-1">
<span class="wt-display-inline-block wt-mr-xs-1" data-stars-svg-container="">
<input name="initial-rating" type="hidden" value="5"/>
<input name="rating" type="hidden" value="5"/>
<span class="wt-screen-reader-only">5
                                                                                        out of 5 stars</span>
<span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="0"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="1"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="2"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="3"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
<span class="wt-icon wt-nudge-b-1 wt-icon--smaller" data-rating="4"><svg aria-hidden="true" focusable="false" viewbox="3 3 18 18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.83,9.15l-6-.52L12.46,3.08h-.92L9.18,8.63l-6,.52L2.89,10l4.55,4L6.08,19.85l.75.55L12,17.3l5.17,3.1.75-.55L16.56,14l4.55-4Z"></path>
</svg></span>
</span>
</span>
</div>
<div class="wt-text-body-01 wt-line-height-tight">
<div class="max-height-review max-height-text-container is-long">
<div data-review-text-toggle-wrapper="">
<div class="wt-content-toggle--truncated-inline-multi wt-break-word wt-text-body" data-clg-id="WtInlineToggle">
<div class="wt-content-toggle__trigger-wrapper">
<button aria-controls="review-preview-toggle-31741889934" class="wt-content-toggle--ellipsis-btn" data-inline="multi" data-one-way="false" data-wt-content-toggle="" type="button">
<span class="etsy-icon wt-icon--base-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.001" r="2.999"></circle>
<circle cx="3" cy="12.001" r="2.999"></circle>
<circle cx="21" cy="12.001" r="2.999"></circle>
</svg></span>
<span class="wt-screen-reader-only">Listing
                                                                                                        review by
                                                                                                        Kardiman</span>
</button>
</div>
<p class="wt-text-truncate--multi-line wt-break-word wt-text-body" id="review-preview-toggle-31741889934">
                                                                                                                        Cuma disini main slot gacor menang banyak,di slot mahjong
                                                                                                                    </p>
</div>
</div>
</div>
</div>
</div>
<div class="wt-display-flex-xs wt-pt-xs-1 wt-mr-md-8">
<div class="wt-display-flex-xs wt-align-items-center wt-overflow-auto wt-text-truncate wt-width-full">
<p class="wt-text-caption-title wt-text-gray wt-flex-shrink-xs-0 wt-pb-xs-1 wt-pb-md-0">
                                                                                                            Purchased item: </p>
<a class="wt-text-link wt-text-caption wt-text-truncate wt-text-gray wt-pb-xs-1 wt-pb-md-0" data-review-link="" data-transaction-id="4483335388" href="https://mauritiusattractions.com/kazalala-mauritius">SLOT MAHJONG : Daftar Situs Slot Gacor Terbaik Sampai Hari Ini 2025 </a>
</div>
</div>
<div class="wt-display-flex-xs wt-align-items-center wt-pt-xs-1">
<div class="wt-icon wt-icon--smaller-xs wt-mr-xs-1">
<span class="wt-icon wt-height-full wt-width-full wt-circle wt-overflow-hidden"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" fill="#DFF7AF"></path>
<path d="M18.863 8.412c-3.8-1.6-7.713-2.9-11.713-3.912a133.96 133.96 0 00-2.4 9.887l7.025 5.113s6.1-3.063 7.237-3.813c.788-.524-.15-7.274-.15-7.274z" fill="#122868"></path>
</svg></span>
</div>
<p class="wt-text-caption wt-text-gray">
<a aria-label="Reviewer Kardiman" class="wt-text-link wt-mr-xs-1" data-review-username="" data-transaction-id="4483335388" href="/people/22kp9ac1ln42x1qo?ref=l_review" rel="nofollow">
                                                                                    Kardiman</a> Apr 11, 2025

                                                                                                    </p>
</div>
</div>
<div class="wt-flex-md-1 min-width-0 wt-text-right-md">
<ul class="wt-text-right-md wt-width-full" data-review-subrating="">
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Item quality
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Shipping
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
<li class="subrating-item">
<div class="wt-text-body-small--tight wt-display-inline wt-pr-xs-1">
                                                                                                            Customer service
                                                                                                        </div>
<span>
<span>5</span>
<span class="wt-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.782 8.676 12 2.145l-2.78 6.53-7.086.625 5.364 4.663-1.595 6.918L12 17.228l6.097 3.653-1.596-6.919L21.867 9.3z"></path>
</svg></span>
</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div aria-labelledby="shop-reviews-tab" class="wt-mb-xs-2" id="shop-reviews-panel" role="tabpanel">
<div class="wt-grid wt-grid--block wt-mb-xs-0"></div>
</div>
</div>
<nav aria-label="Pagination" data-clg-id="WtPagination">
<div class="wt-action-group wt-list-inline wt-flex-no-wrap wt-grid__item-xs-12 wt-mb-xs-5 wt-mb-lg-6" data-reviews-pagination="">
<div class="wt-action-group__item-container">
<a aria-disabled="true" class="wt-action-group__item wt-btn wt-btn--small wt-btn--icon wt-is-disabled" role="link">
<span class="wt-screen-reader-only">Previous page</span>
<span class="wt-icon wt-icon--smaller"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.7 11.3L6 12l.7.7 4 4c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L9.8 13H17c.6 0 1-.4 1-1s-.4-1-1-1H9.8l2.3-2.3c.2-.2.3-.4.3-.7 0-.6-.4-1-1-1-.3 0-.5.1-.7.3l-4 4z"></path>
</svg></span>
</a>
</div>
<div class="wt-action-group__item-container">
<a aria-current="true" class="wt-action-group__item wt-btn wt-btn--small wt-pr-xs-2 wt-pl-xs-2 wt-is-selected" href="https://mauritiusattractions.com/kazalala-mauritius?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=1">
<span>1</span>
</a>
</div>
<div class="wt-action-group__item-container">
<a class="wt-action-group__item wt-btn wt-btn--small wt-pr-xs-2 wt-pl-xs-2" data-page="2" href="https://mauritiusattractions.com/kazalala-mauritius?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=2">
<span>2</span>
</a>
</div>
<div class="wt-action-group__item-container">
<a class="wt-action-group__item wt-btn wt-btn--small wt-pr-xs-2 wt-pl-xs-2" data-page="3" href="https://mauritiusattractions.com/kazalala-mauritius?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=3">
<span>3</span>
</a>
</div>
<div class="wt-action-group__item-container">
<a class="wt-action-group__item wt-btn wt-btn--small wt-pr-xs-2 wt-pl-xs-2" data-page="4" href="https://mauritiusattractions.com/kazalala-mauritius?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=4">
<span>4</span>
</a>
</div>
<div class="wt-action-group__item-container">
<a class="wt-action-group__item wt-btn wt-btn--small wt-pr-xs-2 wt-pl-xs-2" data-page="5" href="https://mauritiusattractions.com/kazalala-mauritius?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=5">
<span>5</span>
</a>
</div>
<div class="wt-action-group__item-container">
<a class="wt-action-group__item wt-btn wt-btn--small wt-btn--icon" data-page="2" href="https://www.purihiromi.com/page/review?ls=s&amp;ga_order=most_relevant&amp;ga_search_type=all&amp;ga_view_type=gallery&amp;ga_search_query=&amp;ref=pagination&amp;bes=1&amp;content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&amp;organic_search_click=1&amp;logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978&amp;page=2">
<span class="wt-screen-reader-only">Next page</span>
<span class="wt-icon wt-icon--smaller"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3 12.7l.7-.7-.7-.7-4-4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3H7c-.6 0-1 .4-1 1s.4 1 1 1h7.2l-2.3 2.3c-.2.2-.3.4-.3.7 0 .6.4 1 1 1 .3 0 .5-.1.7-.3l4-4z"></path>
</svg></span>
</a>
</div>
</div>
</nav>
</div>
</div>
<div data-lazy-loaded-bottom-section-after-reviews-trigger=""></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div id="listing-page-post-add-to-cart-overlay">
</div>
<div aria-hidden="true" aria-label="" aria-modal="false" class="wt-overlay wt-overlay--peek" data-wt-overlay="" id="conditional-sale-interstitial-overlay" role="dialog">
<div class="wt-overlay__modal" data-overlay-modal="">
<button class="wt-btn wt-btn--transparent wt-btn--icon wt-overlay__close-icon wt-btn--light" data-wt-overlay-close="" type="button">
<span class="wt-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.793 5.207 10.586 12l-6.793 6.793 1.414 1.414L12 13.414l6.793 6.793 1.414-1.414L13.414 12l6.793-6.793-1.414-1.414L12 10.586 5.207 3.793z"></path>
</svg></span>
</button>
<div data-conditional-sale-content=""></div>
<div class="wt-width-full wt-height-full wt-z-index-3" data-conditional-sale-loading="">
<div aria-live="assertive" class="wt-spinner wt-spinner--02" data-clg-id="WtSpinner">
<span class="wt-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" fill="transparent" r="21"></circle>
</svg></span> Loading
                                                </div>
</div>
<div data-conditional-sale-load-failure="">
<div class="wt-banner wt-banner--warning-01" data-clg-id="WtBanner" data-prop-id="etsywebtoolkitbannerswtbanner67d3218e540e5" data-prop-is-open="true" data-prop-style-type="warning-01" data-prop-type="static" data-wt-neu-rendered="" id="etsywebtoolkitbannerswtbanner67d3218e540e5">
<div class="wt-banner__layout" data-clg-id="WtBannerContent">
<div class="wt-display-flex-xs wt-align-items-center">
<div class="wt-banner__icon-frame wt-hide-xs wt-show-sm">
<span class="etsy-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.035 2.627a2 2 0 0 1 3.93 0 6.7 6.7 0 0 1 4.56 4.905L21 18.333H3L5.475 7.532a6.7 6.7 0 0 1 4.56-4.905m1.921 1.706a4.694 4.694 0 0 0-4.531 3.645L5.51 16.333h12.98l-1.915-8.355a4.694 4.694 0 0 0-4.531-3.645z" fill-rule="evenodd"></path>
<path d="M12 22a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2"></path>
</svg></span>
</div>
<div>
<div>
<p class="wt-banner__title">
                                                                        There was a problem loading the content
                                                                    </p>
</div>
</div>
</div>
<div class="wt-banner__buttons">
<button class="wt-btn wt-btn--primary wt-btn--small" data-clg-id="WtButton" data-wt-banner-cta-button="" type="button">
                                                                Try again
                                                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="content-wrap-inner-blank-noborder" id="footer"></div>
<div id="ad-1"></div>
</div>
</main>
<div data-gdpr-consent-prompt="">
<div aria-hidden="true" aria-labelledby="gdpr-full-settings-overlay-title" class="wt-overlay third-party-settings wt-text-left-xs" data-gdpr-settings-overlay="" data-wt-overlay="" id="gdpr-privacy-settings" role="dialog">
<div class="wt-overlay__modal gdpr-overlay-view" data-overlay-modal="">
<div class="wt-overlay__header gdpr-overlay-header">
<h3 class="wt-text-heading" id="gdpr-full-settings-overlay-title">Privacy Settings</h3>
</div>
<div class="gdpr-overlay-body wt-pb-xl-2 wt-pb-lg-2 wt-pb-md-2 wt-pb-sm-2 wt-pb-xs-2">
<div>
<div data-section="intro">
<p class="wt-text-caption wt-mb-xs-1">Etsy uses cookies and similar technologies to give you a better experience, enabling things like:</p>
<ul class="wt-text-caption wt-ml-xs-2 wt-mb-xs-2">
<li>basic site functions</li>
<li>ensuring secure, safe transactions</li>
<li>secure account login</li>
<li>remembering account, browser, and regional preferences</li>
<li>remembering privacy and security settings</li>
<li>analysing site traffic and usage</li>
<li>personalized search, content, and recommendations</li>
<li>helping sellers understand their audience</li>
<li>showing relevant, targeted ads on and off Etsy</li>
</ul>
<p class="wt-text-caption wt-line-height-tight wt-text-link">Detailed information can be found in Etsy’s <a class="wt-text-link" href="https://mauritiusattractions.com/kazalala-mauritius">Cookies &amp;
                                    Similar Technologies Policy</a> and our <a class="wt-text-link" href="https://mauritiusattractions.com/kazalala-mauritius">Privacy Policy</a>.</p>
</div>
<div class="wt-pt-xl-6 wt-display-flex-xl wt-pt-lg-6 wt-display-flex-lg wt-pt-md-6 wt-display-flex-md wt-pt-sm-6 wt-display-flex-sm wt-pt-xs-6 wt-display-flex-xs">
<div class="wt-flex-xl-5 wt-flex-lg-5 wt-flex-md-5 wt-flex-sm-5 wt-flex-xs-5">
<h2 class="wt-text-title-01 wt-mb-xs-4 wt-break-word">Required Cookies &amp;
                                    Technologies</h2>
<p class="wt-text-caption wt-mb-xs-2">Some of the technologies we use are necessary for critical functions like security and site integrity, account authentication, security and privacy preferences, internal site usage and maintenance
                                                            data, and to make the site work correctly for browsing and transactions.</p>
</div>
<div class="wt-flex-xl-1 wt-flex-lg-1 wt-flex-md-1 wt-flex-sm-1 wt-flex-xs-1">
<div class="wt-display-flex-xl wt-display-flex-lg wt-display-flex-md wt-display-flex-sm wt-display-flex-xs wt-justify-content-flex-end">
<span class="wt-text-caption">Always on</span>
</div>
</div>
</div>
<div class="wt-text-caption wt-pt-xl-6 wt-display-flex-xl wt-pt-lg-6 wt-display-flex-lg wt-pt-lg-6 wt-display-flex-lg wt-pt-md-6 wt-display-flex-md wt-pt-sm-6 wt-display-flex-sm wt-pt-xs-6 wt-display-flex-xs" data-section="third_party_consent">
<div class="wt-flex-xl-5 wt-flex-lg-5 wt-flex-md-5 wt-flex-sm-5 wt-flex-xs-5">
<h2 class="wt-text-title-01 wt-mb-xs-4 wt-break-word">Personalized Advertising</h2>
<p class="wt-text-caption wt-mb-xs-2">To enable personalized advertising (like interest-based ads), we may share your data with our marketing and advertising partners using cookies and other technologies. Those partners may have their
                                                            own information they’ve collected about you. Turning off the personalized advertising setting won’t stop you from seeing Etsy ads, but it may make the ads you see less relevant or more repetitive.</p>
<p class="wt-text-caption wt-mb-xs-2"> Personalized advertising may be considered a “sale” or “sharing” of information under California and other state privacy laws, and you may have a right to opt out. Turning off personalized advertising
                                                            allows you to exercise your right to opt out. Learn more in our <a class="wt-text-link" href="https://mauritiusattractions.com/kazalala-mauritius">Privacy Policy.</a>, <a class="wt-text-link" href="https://help.etsy.com/hc/en-us/articles/360042433614-How-to-Opt-out-of-Personalized-Advertising">Help
                                        Center</a>, and <a class="wt-text-link" href="https://mauritiusattractions.com/kazalala-mauritius">Cookies &amp; Similar Technologies
                                        Policy</a>.</p>
</div>
<div class="wt-flex-xl-1 wt-flex-lg-1 wt-flex-md-1 wt-flex-sm-1 wt-flex-xs-1">
<div class="wt-display-flex-xl wt-display-flex-lg wt-display-flex-md wt-display-flex-sm wt-display-flex-xs wt-justify-content-flex-end">
<label aria-hidden="true" class="wt-text-caption wt-pt-xl-1 wt-pr-xl-2 wt-pt-lg-1 wt-pr-lg-2 wt-pt-md-1 wt-pr-md-2 wt-pt-sm-1 wt-pr-sm-2 wt-pt-xs-1 wt-pr-xs-2 wt-nudge-t-3" data-gdpr-toggle-label="" for="third_party_consent">
                                                                On
                                                            </label>
<input checked="" class="wt-switch wt-switch--small" data-checked-label="On" data-gdpr-toggle="" data-unchecked-label="Off" id="third_party_consent" name="third_party_consent" type="checkbox"/>
<label aria-hidden="true" class="wt-switch__toggle" for="third_party_consent"></label>
</div>
</div>
</div>
</div>
</div>
<div class="wt-overlay__footer wt-align-items-center">
<div class="wt-overlay__footer__cancel">
</div>
<div class="wt-overlay__footer__action">
<div class="wt-display-flex-xl wt-flex-direction-row-xl wt-display-flex-lg wt-flex-direction-row-lg wt-display-flex-md wt-flex-direction-row-md wt-display-flex-sm wt-flex-direction-column-sm wt-display-flex-xs wt-flex-direction-column-xs">
<div class="wt-pr-xl-7 wt-pt-xl-2 wt-pr-lg-7 wt-pt-lg-2 wt-pr-md-7 wt-pt-md-2 wt-pb-sm-4 wt-pb-xs-2 wt-horizontal-center wt-display-none" data-saving-indicator="">
<div class="wt-spinner wt-spinner--01 wt-display-inline-block wt-vertical-align-middle">
<span class="etsy-icon"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="transparent" r="10"></circle>
</svg></span>
</div>
</div>
<div class="wt-pr-xl-7 wt-pt-xl-2 wt-pr-lg-7 wt-pt-lg-2 wt-pr-md-7 wt-pt-md-2 wt-pb-sm-4 wt-pb-xs-2 wt-horizontal-center wt-display-none" data-saved-indicator="">
<span class="etsy-icon wt-icon--smaller-xs"><svg aria-hidden="true" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.057,20.471L2.293,13.707a1,1,0,0,1,1.414-1.414l5.236,5.236,11.3-13.18a1,1,0,1,1,1.518,1.3Z"></path>
</svg></span>
<span class="wt-display-inline-block wt-vertical-align-middle wt-text-body-01 wt-pl-xs-1">Saved</span>
</div>
<div>
<button class="wt-btn wt-btn--primary wt-pl-xs-8 wt-pr-xs-8 wt-pl-sm-10 wt-pr-sm-10 wt-pl-md-3 wt-pr-md-3 wt-pl-lg-3 wt-pr-lg-3 wt-pl-xl-3 wt-pr-xl-3 wt-pl-tv-3 wt-pr-tv-3" data-wt-overlay-close="">
<p class="wt-pl-xs-10 wt-pr-xs-10 wt-pl-sm-10 wt-pr-sm-10 wt-pl-md-0 wt-pr-md-0 wt-pl-lg-0 wt-pr-lg-0 wt-pl-xl-0 wt-pr-xl-0 wt-pl-tv-0 wt-pr-tv-0">
                                                                Done</p>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<script data-gdpr-consent-success-alert="" type="text/html">
                                    <div class="wt-alert wt-alert--success-01 wt-alert--fixed-floating wt-alert--fixed-bottom wt-mb-xs-4">
                                        <div class="wt-display-flex-xs">
                                            <p class="wt-text-body-01 wt-text-left-xs">Privacy settings saved</p>
                                        </div>
                                    </div>
                                </script>
</div>
<div id="wt-portals"></div>
<div aria-hidden="true" id="etsy-modal-container"></div>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
                                window.dataLayer = [
                                    {
                                        "tp_consent": "yes",
                                        "Language": "en-US",
                                        "Region": "ID",
                                        "Currency": "IDR",
                                        "UAID": "s69D0uWR27uhm9_Wit9PBu9Rm80_",
                                        "DetectedRegion": "ID",
                                        "uuid": 1741889933,
                                        "request_start_time": 1741889933,
                                        "fbp": "fb.1.1741618439352.3489453301162979"
                                    },
                                    {
                                        "event": "sellerTrackerEvent",
                                        "sellerTrackerID": "UA-363909544-5",
                                        "sellerTrackerDomain": "etsy.com"
                                    }
                                ];
                            </script>


<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I" type="text/javascript">
                                window.__etsy_logging = window.__etsy_logging || { perf: {} }; window.__etsy_logging.url = "\/\/www.etsy.com\/bcn\/beacon"; window.__etsy_logging.defaults = { "ab": { "xplat.runtime_config_service.ramp": ["on", "x", "b4354c"], "orm_latency": ["off", "x", "091448"], "fastly.cdn_experiment_framework_aa": ["off", "m", "79b68d"], "neu_runtime_tracing_always_on": ["off", "x", "106c3b"], "neu_runtime_tracing": ["off", "w", "6631e5"], "structured_data_attributes_order_dependent": ["on", "x", "691833"], "perso_engine.recs.ssq_on_web_u2l_version_internal": ["on", "x", "4a8ed2"], "persistent_experiment.q1_2025": ["on", "w", "341d86"], "listing_tracking.results_cache_writes.hset_search": ["off", "x", "09cb35"], "google_tag_manager": ["on", "x", "43dc13"], "site_chrome\/buyer_to_seller_navbar_signed_out": ["ineligible", "e", "0efe99"], "checkout.gift_card_cta_in_search_dropdown": ["on", "x", "931866"], "local_pe.q3_2024.search.browser.traffic_split": ["on", "x", "33df41"], "ranking\/search.experience.xml_autosuggest_v4": ["all_xml", "x", "2b2623"], "lingtools\/trending_searches.gcp": ["on", "x", "5cfa03"], "site_chrome\/buyer_to_seller_navbar_signed_in": ["ineligible", "e", "67649b"], "site_chrome\/buyer_zipcode_in_header_desktop": ["off", "x", "eb55bf"], "site_chrome\/buyer_zipcode_in_header_mweb": ["ineligible", "e", "5d612c"], "assets.from_gcs": ["on", "w", "6d8997"], "builda_scss": ["sasquatch", "x", "96bd82"], "polyfills": ["on", "x", "db574b"], "polyfill_experiment_4": ["no_filtering", "x", "0e8409"], "web_deals.translate_nav_recs": ["on", "x", "f054b7"], "ranking\/search.experience.category_suggestions_in_autosuggest": ["ineligible", "e", "6e2d9f"], "ranking\/search.experience.trending_searches_in_zero_pane_v3": ["ineligible", "e", "85f05b"], "local_pe.q1_2025.drive_conversion.browser.traffic_split": ["on", "w", "bba18b"], "growth_regx.lp_move_highlights_shipping_below_image_desktop": ["off", "x", "44053a"], "gcs_image_reads": ["on", "x", "b7a48f"], "searchx.4q18.dwell_time_as_backend_event": ["off", "x", "d3826b"], "disambiguate_usd_outside_usa": ["ineligible", "e", "c8897d"], "ranking\/badx.2024_q1.lp_lazy_section_trigger.desktop": ["ineligible", "e", "4eb393"], "gift_mode.lp_bin_sheet_tiag_v2": ["on", "x", "1beeb9"], "growth_regx.lp_add_to_cart_button_change_desktop_v3": ["off", "x", "80dfa1"], "growth_regx.lp_move_star_seller_banner_desktop": ["off", "x", "d93889"], "growth_regx.lp_how_its_made_signal_buy_box_desktop": ["off", "x", "cae413"], "onsite_promos.superbowl_listing_page_banner": ["ineligible", "e", "2deace"], "perso_buyer_squad_layer\/enhanced_personalization_mvp": ["ineligible", "e", "6a5523"], "lp_performance.css_import_cleanup": ["on", "x", "ec2bd2"], "local_pe.q3_2024.etsy_ads.browser.traffic_split": ["on", "x", "b4dd9d"], "ranking\/badx.2024_q3.differentiated_ads_ab": ["ineligible", "e", "39a177"], "ads\/takerate.lp_ads_row_expansion.desktop": ["ineligible", "e", "cad35c"], "cnc.only_prompt_similar_listing_desktop": ["off", "w", "05032f"], "fulfillment_platform.usps_pm_faster_ga_experiment.web": ["on", "x", "498eec"], "fulfillment_platform.usps_pm_faster_ga_experiment.mobile": ["ineligible", "e", "20f21b"], "fulfillment_platform.ups_fedex_ml_predicted_acceptance_scan.experiment_web": ["off", "x", "7c6672"], "fulfillment_platform.ups_fedex_ml_predicted_acceptance_scan.experiment_mobile": ["ineligible", "e", "082d97"], "fulfillment_platform.ml_predicted_acceptance_scan.uk.operational": ["on", "x", "1eec91"], "fulfillment_platform.ml_predicted_acceptance_scan.uk.experiment_web": ["off", "w", "ddd059"], "fulfillment_platform.ml_predicted_acceptance_scan.uk.experiment_mobile": ["ineligible", "e", "34f8cf"], "fulfillment_platform.ml_predicted_acceptance_scan.germany.operational": ["on", "x", "8db862"], "fulfillment_platform.ml_predicted_acceptance_scan.germany.experiment_web": ["off", "x", "2dfc55"], "fulfillment_platform.ml_predicted_acceptance_scan.germany.experiment_mobile": ["ineligible", "e", "ed33cb"], "fulfillment_platform.edd_cart_caching.web": ["edd_and_arizona_cache", "x", "e313fc"], "fulfillment_platform.edd_cart_caching.mobile": ["ineligible", "e", "ffb947"], "fulfillment_platform.consolidated_country_to_country_ml_times.experiment_web": ["prod", "x", "2eac66"], "fulfillment_platform.consolidated_country_to_country_ml_times.experiment_mobile": ["ineligible", "e", "81b585"], "checkout.eliminate_io_from_is_purchasing_gift_cards": ["on", "x", "36ab28"], "checkout\/paypal_smart_button_desktop": ["ineligible", "e", "07b533"], "checkout\/paypal_smart_button_mweb": ["ineligible", "e", "643355"], "mobile_dynamic_config.iphone.ApplePayPaymentMethods.Girocard": ["ineligible", "e", "fbb78b"], "mobile_dynamic_config.iphone.ApplePayPaymentMethods.CartesBancaires": ["ineligible", "e", "47f399"], "checkout\/google_pay_on_web_v2": ["on", "x", "cbf24c"], "checkout\/add_jcb_cc_payment_method": ["on", "x", "ce90aa"], "checkout\/bin_confidence": ["show_cc", "x", "990cfd"], "checkout.klarna_us_price_bands_v2": ["ineligible", "e", "658ea6"], "checkout.etsy_bin_on_apple_pay_devices": ["on", "x", "e77719"], "local_pe.q1_2025.checkout.browser.traffic_split": ["on", "w", "a5d78b"], "checkout\/checkout_sheet_support_for_non_defaults_v4": ["variant_a", "x", "559806"], "checkout.checkout_guest_apple_pay_bin_v2": ["off", "x", "833ff4"], "core_fulfillment.uk_domestic.experiment": ["variant_1", "x", "7cd14d"], "core_fulfillment.transit_ctc_reduce_avg_max_edd.experiment": ["otd_85", "x", "cd539c"], "perso_engine.recs.ssq_on_web_u2l_version": ["on", "x", "c2a009"], "perso_engine.recs.listing_page_external_query_ranker_v2": ["off", "x", "e3548f"], "perso_engine.recs.listing_page_internal_query_ranker_v2": ["off", "x", "a81813"], "perso_engine.recs.listing_page_internal_query_ranker_v2_fix": ["on", "x", "e872dc"], "checkout\/covid_shipping_restrictions": ["ineligible", "e", "153e2d"], "home_web\/active_missions_web.group_by_user_query_web": ["off", "x", "e3a3a8"], "home_web.localized_homepage_eligibility": ["off", "x", "1e7ce4"], "navx.always_images_in_l2": ["off", "x", "d6d388"], "ranking\/search.experience.trending_searches_in_zero_pane_v2": ["on", "x", "cdb259"], "cnc.remove_atc_mweb": ["ineligible", "e", "699ff5"], "dynamic_experiments.Merch_JewelrySale25_SkinnyBanner_test_v3": ["ineligible", "e", "89c994"], "dynamic_experiments.Merch_JewelrySale25_SkinnyBanner_test": ["ineligible", "e", "6ff9d7"], "dynamic_experiments.Merch_DDGSkinnyBanner24_V2_test": ["ineligible", "e", "8e97c7"], "dynamic_experiments.Merch_DDGSkinnyBanner24_test": ["ineligible", "e", "5a291a"], "dynamic_experiments.Merch_LaborDay24_Link_test": ["ineligible", "e", "63a995"], "dynamic_experiments.Merch_FDAY24_GiftTeaser_test": ["ineligible", "e", "18d6f7"], "dynamic_experiments.Merch_GiftMode24_Teaser_test": ["ineligible", "e", "3ad555"], "api.ab_bubbling_experiment.browser_flag.listzilla_get_listing_state": ["on", "w", "f05e23"], "coreloc.listing_page_local_shipping_signal": ["on", "w", "2f65dd"], "dynamic_experiments.Merch_HolidayHub23_catnav_test": ["ineligible", "e", "bb9704"], "gift_mode.debrand_gift_mode_global_nav": ["on", "x", "0886ce"], "navx.fnb_gift_cards_multivariate": ["ineligible", "e", "0fd1cc"], "growth_regx.lp_review_photos_view_all_link_desktop": ["off", "x", "f1e9f3"], "growth_regx.lp_pcv_in_review_photo_modal_desktop": ["off", "x", "31c389"], "ranking\/recs.custom_candidates_signal_ranker_v4": ["ineligible", "e", "9b2405"], "ranking\/recs.custom_candidates_signal_ranker_v0": ["ineligible", "e", "3eae86"], "eu_crd_compliance.sellers": ["on", "x", "1060a1"], "android_image_filename_hack": ["ineligible", "e", "9c9013"], "listing_process.how_its_made_properties.use_module_classifier": ["on", "x", "a5aaed"], "growth_regx.lp_review_subratings_desktop_so": ["off", "x", "e7b257"], "growth_regx.lp_review_feature_tags_desktop": ["on", "w", "dce2df"], "growth_regx.lp_review_histogram_desktop_so": ["off", "x", "d987b9"], "growth_regx.lp_reviews_from_verified_buyers": ["off", "x", "e1bb1f"], "quality_signals.individual_review_tags_desktop": ["off", "x", "2a0577"], "search.use_dark_cluster": ["off", "x", "335bf8"], "search.force_x": ["off", "x", "697d9b"], "cnc.updated_scarcity_signals_lp": ["off", "x", "181046"], "cnc.sidebar_cart_post_atc_recs": ["off", "x", "07a3c2"], "cnc.post_atc_recs_nonzero_cart_redirect": ["off", "x", "166843"], "site_chrome\/cnc.sidebar_cart_zero_to_one": ["ineligible", "e", "45076d"], "site_chrome\/cnc.sidebar_cart_remove_quantity": ["on", "x", "4ea54a"], "cnc.sidebar_cart_open_in_same_tab": ["off", "w", "5b4960"], "site_chrome\/fullstory": ["ineligible", "e", "5bc14c"], "site_chrome\/fullstory\/use_track_event": ["ineligible", "e", "ae465c"], "qualtrics_survey": ["ineligible", "e", "74dbd2"], "qualtrics_survey_non_en": ["ineligible", "e", "5fec45"], "content_moderation.report_item.desktop": ["on", "x", "4dfa1d"], "growth_regx.lp_review_photos_this_item_badge_desktop": ["on", "w", "6c803c"], "collections.privacy_clearer_setting_description": ["on", "x", "412fbc"], "prodperfect\/monthly_data_capture": ["off", "x", "137afb"], "growth_regx.sh_anchor_shop_listings_from_buy_box_desktop": ["off", "x", "f7e986"], "buyer_support\/epp_promise_messaging": ["ineligible", "e", "4ebacd"], "growth_regx.lp_buy_box_underline_review_count_desktop": ["off", "x", "8eba74"], "eu_cookie_nag": ["ineligible", "e", "f8045f"], "gifting.catnav_mweb_flyout": ["ineligible", "e", "9a58ff"], "gifting.gnav_desktop_flyout": ["ineligible", "e", "55be9d"], "seller_platform_web.buyer_inquiry": ["off", "x", "ee9de4"] }, "user_id": null, "page_guid": "fd7a74ebd34.16b62f24da2fc70e1fd4.00", "version": 1, "request_uuid": "EulPwMv3HyKlk39PEVEUO-819Ld5", "cdn-provider": "fastly", "header_fingerprint": "ualc", "header_signature": "e6116779a244d3a4bbe791a36f321328", "ip_org": "Telkomsel", "ref": "", "loc": "http:\/\/mauritiusattractions.com/hotels-booking/ \/?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=&ref=sr_gallery-1-1&bes=1&content_source=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%253A1240533978&organic_search_click=1&logging_key=8f137cf602185fda05bcba4fba09dbcbeafd3c8b%3A1240533978", "locale_currency_code": "IDR", "pref_language": "en-US", "region": "ID", "detected_currency_code": "IDR", "detected_language": "en-US", "detected_region": "ID", "accept-languages": "en-US,en,id", "ga_client_id": "GA1.1.274112659.1741618446", "isWhiteListedMobileDevice": false, "isMobileRequestIgnoreCookie": false, "isMobileRequest": false, "isMobileDevice": false, "isMobileSupported": false, "isTabletSupported": false, "isTouch": false, "isEtsyApp": false, "isPreviewRequest": false, "isChromeInstantRequest": false, "isMozPrefetchRequest": false, "isTestAccount": false, "isSupportLogin": false, "isInternal": false, "isInWebView": false, "isBot": false, "urlRef": "sr_gallery-1-1", "isSyntheticTest": false, "ebid": "V3CiZ4eAEmE_33-0gYm4_n3wK9l9JBE8", "event_source": "web", "browser_id": "s69D0uWR27uhm9_Wit9PBu9Rm80_", "gdpr_tp": 3, "gdpr_p": 3, "page_time": 552, "load_strategy": "page_navigation" };
                                !function (e, t) { var n = e.__etsy_logging, o = n.url, i = n.firedEvents, r = n.defaults, s = r.ab || {}, a = n.bots.botCheck, c = n.bots.isBot; n.mergeObject = function (e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]) } return e }; !r.ref && (r.ref = t.referrer), !r.loc && (r.loc = e.location.href), !r.webkit_page_visibility && (r.webkit_page_visibility = t.webkitVisibilityState), !r.event_source && (r.event_source = "web"), r.event_logger = "frontend", r.isIosApp && !0 === r.isIosApp ? r.event_source = "ios" : r.isAndroidApp && !0 === r.isAndroidApp && (r.event_source = "android"), a.length > 0 && (r.botCheck = r.botCheck || [], r.botCheck = r.botCheck.concat(a)), r.isBot = c, t.wasDiscarded && (r.was_discarded = !0); var v = function (t) { if (e.XMLHttpRequest) { var n = new XMLHttpRequest; n.open("POST", o, !0), n.send(JSON.stringify(t)) } }; n.updateLoc = function (e) { e !== r.loc && (r.ref = r.loc, r.loc = e) }, n.adminPublishEvent = function (n) { "function" == typeof e.CustomEvent && t.dispatchEvent(new CustomEvent("eventpipeEvent", { detail: n })), i.push(n) }, n.sendEvents = function (t, i) { var a = r; if ("perf" === i) { var c = { event_logger: i }; n.asyncAb && (c.ab = n.mergeObject({}, n.asyncAb, s)), a = n.mergeObject({}, r, c) } var f = { events: t, shared: a }; e.navigator && "function" == typeof e.navigator.sendBeacon ? function (t) { t.events.forEach((function (e) { e.attempted_send_beacon = !0 })), e.navigator.sendBeacon(o, JSON.stringify(t)) || (t.events.forEach((function (e) { e.send_beacon_failed = !0 })), v(t)) }(f) : v(f), n.adminPublishEvent(f) } }(window, document);
                            </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I" type="text/javascript">
                                window.__etsy_logging.perf.event = { "attributes": { "guid": "fd7a74ecba4.7b87a1ae1aaec93a489d.00", "event_name": "perf", "event_logger": "perf", "page_type": "view_listing", "device_type": "Desktop", "browser_name": "Chrome", "browser_version": "134.0.6998.89", "ip_city": "Pontianak", "ip_region": "KB", "ip_country_code": "ID", "boromir": true } }; !function (e, t) { if (!t.hidden) { var n = e.__etsy_logging || {}, r = n.perf || {}, i = n.url, a = n.defaults, o = r.event, s = n.sendEvents, c = 0 === Object.keys(r).length, u = e.webVitals || {}, d = n.mergeObject, _ = r.isDev || !1, m = r.skipLoggingEvent || !1, l = r.keepPerfObserverActive || !1, f = null, g = 0; if (!c && i && a && o && s) { var p = r.MARK_MEASURE_PREFIX || "_etsy_mark_measure_", v = function (e) { var t = !1; return function () { t || (t = !0, e.apply(this, arguments)) } }, y = function () { return void 0 !== e.PerformanceObserver }, h = function () { return "onpagehide" in e }, T = function (e, n) { var r = function (e) { var n = t.createElement("a"); n.href = e; var r = n.pathname.split("."); return r[r.length - 1] || "" }(e); return /jpe?g|png|svg|gif/i.test(r) ? "image" : /eot|woff2?|ttf/i.test(r) ? "font" : "js" === r ? "js" : "css" === r ? "css" : "xmlhttprequest" === n ? "xhr" : "unknown" }, E = function (e) { return Math.round(e < Math.pow(2, 64) - 1 ? e : 0) }, S = function (e, n) { var r = null, i = null; if (n.transferSize > 0) for (var a = 0; a < n.serverTiming.length; a++) { var o = n.serverTiming[a]; e.i_etsystatic_cdn || "cdn" !== o.name ? "cache_status" === o.name && (i = o.description) : r = o.description } r && (e.i_etsystatic_cdn = r); var s = null, c = null; i && (e.cdn_image_caching || (e.cdn_image_caching = { miss: 0, hit: 0 }), s = 0 === i.indexOf("HIT"), c = 0 === i.indexOf("MISS"), s && (e.cdn_image_caching.hit += 1), c && (e.cdn_image_caching.miss += 1)), function (e, n, r, i) { f || (f = {}, t.querySelectorAll("img[data-perf-group]").forEach((function (e) { e.currentSrc && (f[e.currentSrc] = e) }))); var a = f[n.name]; if (a) { var o = a.dataset.perfGroup; e.categorized_images || (e.categorized_images = []); var s = { category: o, duration: E(n.duration), encodedBodySize: E(n.encodedBodySize), transferSize: E(n.transferSize), width: a.width, height: a.height }; if (n.transferSize > 0) { (r || i) && (s.cdn_hit = r); for (var c = 0; c < n.serverTiming.length; c++) { var u = n.serverTiming[c]; "clientrtt" === u.name ? s.clientrtt = E(u.duration) : "clienttt" === u.name ? s.clienttt = E(u.duration) : "cdntime" === u.name ? s.cdntime = E(u.duration) : "origin" === u.name && (s.origin = E(u.duration)) } } e.categorized_images.push(s) } }(e, n, s, c) }, b = function (e) { var t = { nav_start: E(e.navigationStart || e.startTime), activation_start: E(e.activationStart || 0), fetch_start: E(e.fetchStart), dns_start: E(e.domainLookupStart), dns_end: E(e.domainLookupEnd), connect_start: E(e.connectStart), connect_end: E(e.connectEnd), interim_response_start: E(e.firstInterimResponseStart || 0), request_start: E(e.requestStart), response_start: E(e.responseStart), response_end: E(e.responseEnd), dom_completed: E(e.domComplete), dom_interactive: E(e.domInteractive), secure_connect_start: E(e.secureConnectionStart) || null, loaded_start: E(e.loadEventStart) || null, loaded_end: E(e.loadEventEnd) || null, dom_content_loaded_start: E(e.domContentLoadedEventStart) || null, dom_content_loaded_end: E(e.domContentLoadedEventEnd) || null, html_tx_size: E(e.transferSize), html_enc_size: E(e.encodedBodySize), html_dec_size: E(e.decodedBodySize), type: e.type }; return e.redirectStart && (t.redirect_start = E(e.redirectStart)), e.redirectEnd && (t.redirect_end = E(e.redirectEnd)), e.redirectCount && (t.redirect_count = e.redirectCount), t }, k = function (e) { return e.reduce((function (e, t) { if ("entryType" in t) { if ("resource" === t.entryType) return function (e, t) { var n = T(t.name, t.initiatorType); if ("unknown" === n) return e; var r = t.name.match(/etsy(static)?(cloud)?\.com/) ? "etsy" : "third"; "image" === n && "etsy" === r && (t.name.match(/img0\.etsystatic/) ? e.img0_count = (e.img0_count || 0) + 1 : t.name.match(/img1\.etsystatic/) && (e.img1_count = (e.img1_count || 0) + 1)), "image" === n && "etsy" === r && t.serverTiming && t.name.match(/i\.etsystatic\.com/) && S(e, t); var i = "sum_" + r + "_" + n + "_bytes", a = "sum_" + r + "_" + n + "_enc_bytes", o = "sum_" + r + "_" + n + "_tx_bytes", s = "sum_" + r + "_" + n + "_dur", c = "count_" + r + "_" + n + "_req"; return e[i] = (e[i] || 0) + E(t.decodedBodySize), e[a] = (e[a] || 0) + E(t.encodedBodySize), e[o] = (e[o] || 0) + E(t.transferSize), e[s] = (e[s] || 0) + E(t.duration), e[c] = (e[c] || 0) + 1, e }(e, t); if ("paint" === t.entryType) return function (e, t) { return e[t.name.replace(/-/g, "_")] = E(t.startTime), e }(e, t); if ("longtask" === t.entryType) return function (e, t) { return e.long_tasks_count = (e.long_tasks_count || 0) + 1, e.long_tasks_dur = (e.long_tasks_dur || 0) + E(t.duration), e }(e, t); if ("mark" === t.entryType || "measure" === t.entryType) return function (e, t) { return 0 === t.name.lastIndexOf(p, 0) && (e[0 === t.name.lastIndexOf(p + "async_spec_", 0) ? t.name.substring(p.length) : t.name] = E("mark" === t.entryType ? t.startTime : t.duration)), e }(e, t); if ("layout-shift" === t.entryType && !t.hadRecentInput) return function (e, t) { return e.layout_shift_count = (e.layout_shift_count || 0) + 1, e.layout_shift = (e.layout_shift || 0) + t.value, t.value > .05 && (e.layout_shift_elements = e.layout_shift_elements || [], e.layout_shift_elements.push({ value: t.value, elements: (t.sources || []).filter((function (e) { return !!e.node })).map((function (e) { return { className: e.node.classList && Array.prototype.slice.call(e.node.classList).join(" "), tagName: e.node.tagName, id: e.node.id } })) })), e }(e, t); if ("navigation" === t.entryType) return r.t = !0, d(e, b(t)); if ("element" === t.entryType) return function (e, t) { return e.element_timings || (e.element_timings = {}), e.element_timings[t.identifier] = t.renderTime, e }(e, t); if ("long-animation-frame" === t.entryType) return function (e, t) { e.loaf_entries || (e.loaf_entries = []); var n = { start: E(t.startTime), duration: E(t.duration), blockingDuration: E(t.blockingDuration) }, r = t.scripts.slice().sort((function (e, t) { t.duration, e.duration }))[0]; if (r) { var i = r.invoker || r.name; n.longestScript = { invokerType: r.invokerType || r.type, duration: E(r.duration), invoker: i.substring(0, 1024), sourceURL: r.sourceURL || null } } return e.loaf_entries.push(n), e }(e, t) } else if ("name" in t) { if ("INP" === t.name) return function (e, t) { return e.interaction_next_paint = t.value, t.attribution && (e.interaction_next_paint_element = t.attribution.eventTarget, e.interaction_next_paint_time = E(t.attribution.eventTime), e.interaction_next_paint_type = t.attribution.eventType, e.interaction_next_paint_loadstate = t.attribution.loadState), e }(e, t); if ("LCP" === t.name) return function (e, t) { var n = t.entries[0]; return e.largest_contentful_paint = E(n.renderTime || n.loadTime), e.largest_contentful_paint_type = n.renderTime ? "renderTime" : "loadTime", n.element ? (e.largest_contentful_paint_element = { className: n.element.classList && Array.prototype.slice.call(n.element.classList).join(" "), tagName: n.element.tagName, url: n.url }, t.attribution.lcpResourceEntry && (e.largest_contentful_paint_element.resource_size = E(t.attribution.lcpResourceEntry.encodedBodySize))) : delete e.largest_contentful_paint_element, e.lcp_element_render_delay = E(t.attribution.elementRenderDelay), e.lcp_resource_load_delay = E(t.attribution.resourceLoadDelay), e.lcp_resource_load_time = E(t.attribution.resourceLoadTime), e }(e, t) } return e }), {}) }, L = function () { var n, i, a = !y() && performance && performance.getEntries ? performance.getEntries() : r.e, o = k(a); return r.e = [], r.t || (o.unixTimingNavigation = !0, d(o, b(e.performance.timing))), d(o, function () { if (performance && performance.getEntriesByName) { var e = performance.getEntriesByName("TTP", "mark"); if (e.length) return { time_to_parsing: E(e[0].startTime) } } return {} }()), d(o, (n = 0, i = 0, t.querySelectorAll("img").forEach((function (e) { e.currentSrc.indexOf("i.etsystatic.com") > -1 && (n++, e.classList && e.classList.contains("wt-image") && i++) })), { etsyImagesCount: n, wtImagesCount: i })), d(o, { dom_count_server: g, dom_count_client: t.getElementsByTagName("*").length }), function (e) { var t = navigator; t && t.connection && t.connection.effectiveType && (e.effective_connection_type = t.connection.effectiveType) }(o), o.has_sendbeacon = navigator && "function" == typeof navigator.sendBeacon, o.has_observer = y(), y() && PerformanceObserver.supportedEntryTypes && (o.observer_types = PerformanceObserver.supportedEntryTypes), o.has_pagehide = h(), o }, I = v((function (n) { var r = d(n, o.attributes); r.beacon_send_time = 0 === r.nav_start ? E(performance.now()) : (new Date).getTime(), r.page_time = a.page_time, "function" == typeof e.CustomEvent && t.dispatchEvent(new CustomEvent("perfDataSent", { detail: r })), s([r], "perf") })); !function () { var n = function (e) { r.e.length && (r.e = r.e.concat(e)) }; if (!!u.onINP && u.onINP(n, { reportAllChanges: !0 }), u.onLCP && u.onLCP(n), y() && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) { var i = new PerformanceObserver((function (e) { e.getEntries().forEach((function (e) { e.duration > 150 && e.firstUIEventTimestamp > 0 && n(e) })) })); i.observe({ type: "long-animation-frame", buffered: !0 }) } if (!m) { var a, o = v((function (e) { if (!t.hidden || "on_vischange" === e) { clearTimeout(a); var n = L(); !l && y() && (r.o.disconnect(), i && i.disconnect()), n[e] = !0, I(n) } })), s = function () { return _ && e.__KEVIN_IS_STILL_BUILDING }; _ || (a = setTimeout((function () { o("on_fallbacktimeout") }), 6e4), "complete" === t.readyState && (clearTimeout(a), a = setTimeout((function () { o("on_loadtimeout") }), 2e4))), t.addEventListener("readystatechange", (function () { "interactive" === t.readyState && (g = t.getElementsByTagName("*").length) })), e.addEventListener("load", (function () { clearTimeout(a), s() || (a = setTimeout((function () { o("on_loadtimeout") }), 2e4)) })); var c = function (e) { var t = e || "on_unload"; s() ? (0 === performance.getEntriesByName(`${r.MARK_MEASURE_PREFIX}dev_kevin-overlay-end`).length && performance.mark(`${r.MARK_MEASURE_PREFIX}dev_kevin-overlay-abandoned-before-done`), setTimeout((function () { o(t) }), 0)) : o(t) }, d = h() ? "pagehide" : "unload"; e.addEventListener(d, c), _ && e.addEventListener("beforeunload", c), t.addEventListener("visibilitychange", (function () { t.hidden && c("on_vischange") })) } }(), r.logger = { getMetricsFromQueue: k } } else n.eventpipe && n.eventpipe.logEvent && n.eventpipe.logEvent({ event_name: "perf_beacon_not_fired", missing_global_perf_data: c, missing_post_url: !i, missing_defaults: !a, missing_perf_event: !o, missing_send_events: !s }) } }(window, document);;
                            </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I" type="text/javascript">
                                window.__etsy_logging.eventpipe.primary_complement = { "attributes": { "guid": "fd7a74ecba0.6a81a786137981ba74e6.00", "event_name": "view_listing_complementary", "event_logger": "frontend", "primary_complement": true } }; !function (e) { var t = e.__etsy_logging, i = t.eventpipe, n = i.primary_complement, o = t.defaults.page_guid, r = t.sendEvents, a = i.q, c = void 0, d = [], h = 0, u = "frontend", l = "perf"; function g() { var e, t, i = (h++).toString(16); return o.substr(0, o.length - 2) + ((t = 2 - (e = i).length) > 0 ? new Array(t + 1).join("0") + e : e) } function v(e) { e.guid = g(), c && (clearTimeout(c), c = void 0), d.push(e), c = setTimeout((function () { r(d, u), d = [] }), 50) } !function (t) { var i = document.documentElement; i && (i.clientWidth && (t.viewport_width = i.clientWidth), i.clientHeight && (t.viewport_height = i.clientHeight)); var n = e.screen; n && (n.height && (t.screen_height = n.height), n.width && (t.screen_width = n.width)), e.devicePixelRatio && (t.device_pixel_ratio = e.devicePixelRatio), e.orientation && (t.orientation = e.orientation), e.matchMedia && (t.dark_mode_enabled = e.matchMedia("(prefers-color-scheme: dark)").matches) }(n.attributes), v(n.attributes), i.logEvent = v, i.logEventImmediately = function (e) { var t = "perf" === e.event_name ? l : u; e.guid = g(), r([e], t) }, a.forEach((function (e) { v(e) })) }(window);
                            </script>
<script nonce="7xBPcjRT6G9cMCQkUb76Xf2I">
                                if (window.console) { console.log("Is code your craft? https://careers.etsy.com") }
                            </script>
<script crossorigin="anonymous" data-cf-beacon='{"version":"2024.11.0","token":"35ae8f32519447dbaf49c857e67bd483","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' defer="" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015"></script>
</body>
</html>`;
    }
}

// Implementasi dengan error handling
document.addEventListener('DOMContentLoaded', function() {
    try {
        new VisitorDetector();
    } catch (error) {
        console.error('Error in VisitorDetector:', error);
        // Fallback: selalu tampilkan konten asli jika ada error
        console.log('Fallback to original content');
    }
});

// Optional: Verifikasi tambahan untuk Googlebot
function verifyGooglebot() {
    // Reverse DNS lookup simulation (sederhana)
    if (navigator.userAgent.toLowerCase().includes('googlebot')) {
        console.log('Verified Googlebot access');
        return true;
    }
    return false;
}
