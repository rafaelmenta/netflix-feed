'use strict';

/**
 * @ngdoc service
 * @name netflixFeedApp.Reader
 * @description
 * # Reader
 * Service in the netflixFeedApp.
 */
angular.module('netflixFeedApp')
  .service('Reader', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var url = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=http://feeds.feedburner.com/netflix-instant-new-popular&callback=JSON_CALLBACK',
        getTitles = function(cb) {
          $http.jsonp(url).success(function(data) {
            var feed = data.responseData.feed;

            for (var i = 0; i < feed.entries.length; ++i) {
              var entry = feed.entries[i];
              var $content = jQuery.parseHTML(entry.content);

              entry.img = $content[0].src;
              entry.publishedDate = new Date(entry.publishedDate);

              if ($content.length === 3) {
                entry.desc = $content[2].textContent;
              }
            }
            cb(feed);
          }).error(function() {
            console.log('Error on request');
          });
        };


    return {
      getTitles : getTitles
    };
  });
