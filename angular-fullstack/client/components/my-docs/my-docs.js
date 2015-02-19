'use strict';

angular.module('angularFullstackApp').
  directive('myDocs', function() {
    function anchor(title) {
      return title.replace(/\s+/, '-');
    };
    return {
      scope: {},
      templateUrl: '/components/my-docs/my-docs.html',
      transclude: true,
      controller: function($scope) {
	var sections = $scope.sections = [];

	this.addSection = function(section) {
	  section.anchor = anchor(section.title)
	  sections.push(section);
	}
      }
    };
  }).
  directive('mySection', function() {
    return {
      require: '^myDocs',
      scope: {
	title: '@'
      },
      templateUrl: '/components/my-docs/my-section.html',
      transclude: true,
      link: function(scope, element, attrs, docsCtrl) {
	docsCtrl.addSection(scope);
      }
    }
  });


