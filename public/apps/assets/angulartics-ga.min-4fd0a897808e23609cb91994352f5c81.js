!function(a){"use strict";a.module("angulartics.google.analytics",["angulartics"]).config(["$analyticsProvider",function(a){a.settings.trackRelativePath=!0,a.registerPageTrack(function(a){window._gaq&&_gaq.push(["_trackPageview",a]),window.ga&&ga("send","pageview",a)}),a.registerEventTrack(function(a,e){if(e.value){var n=parseInt(e.value,10);e.value=isNaN(n)?0:n}window._gaq?_gaq.push(["_trackEvent",e.category,a,e.label,e.value,e.noninteraction]):window.ga&&(e.noninteraction?ga("send","event",e.category,a,e.label,e.value,{nonInteraction:1}):ga("send","event",e.category,a,e.label,e.value))})}])}(angular);