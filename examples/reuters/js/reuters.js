var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://reuters-demo.tree.ewdev.ca:9090/reuters/'
    });
	
    var fields = [ 'topics', 'organisations', 'exchanges' ];
	
							Manager.addWidget(new AjaxSolr.BubbleChartWidget({
								id: 'bubbles_topics',
								target: '#' + 'bubbles_topics',
								field: 'topics',
								diameter: 960,
								padding: 1.5
							  }));
							  
							  
							  Manager.addWidget(new AjaxSolr.BubbleChartWidget({
								id: 'bubbles_exchanges',
								target: '#' + 'bubbles_exchanges',
								field: 'exchanges',
								diameter: 960,
								padding: 1.5
							  }));
							
							

	
	
    Manager.init();
    Manager.store.addByValue('q', '*:*');
    var params = {
      facet: true,
      'facet.field': [ 'topics', 'organisations', 'exchanges', 'countryCodes' ],
      'facet.limit': 20,
      'facet.mincount': 1,
      'f.topics.facet.limit': 50,
      'f.countryCodes.facet.limit': -1,
      'facet.date': 'date',
      'facet.date.start': '1987-02-26T00:00:00.000Z/DAY',
      'facet.date.end': '1987-10-20T00:00:00.000Z/DAY+1DAY',
      'facet.date.gap': '+1DAY',
      'json.nl': 'map'
    };
    for (var name in params) {
      Manager.store.addByValue(name, params[name]);
    }
    Manager.doRequest();
  });

  $.fn.showIf = function (condition) {
    if (condition) {
      return this.show();
    }
    else {
      return this.hide();
    }
  }

})(jQuery);
