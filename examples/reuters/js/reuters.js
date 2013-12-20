var Manager;

(function ($) {

  $(function () {
    Manager = new AjaxSolr.Manager({
      solrUrl: 'http://reuters-demo.tree.ewdev.ca:9090/reuters/'
    });
<<<<<<< HEAD
    Manager.addWidget(new AjaxSolr.ResultWidget({
      id: 'result',
      target: '#docs'
    }));
    Manager.addWidget(new AjaxSolr.PagerWidget({
      id: 'pager',
      target: '#pager',
      prevLabel: '&lt;',
      nextLabel: '&gt;',
      innerWindow: 1,
      renderHeader: function (perPage, offset, total) {
        $('#pager-header').html($('<span></span>').text('displaying ' + Math.min(total, offset + 1) + ' to ' + Math.min(total, offset + perPage) + ' of ' + total));
      }
    }));
    var fields = [ 'topics', 'organisations', 'exchanges' ];
    for (var i = 0, l = fields.length; i < l; i++) {
      Manager.addWidget(new AjaxSolr.TagcloudWidget({
        id: fields[i],
        target: '#' + fields[i],
        field: fields[i]
      }));
    }
    Manager.addWidget(new AjaxSolr.CurrentSearchWidget({
      id: 'currentsearch',
      target: '#selection'
    }));
    Manager.addWidget(new AjaxSolr.AutocompleteWidget({
      id: 'text',
      target: '#search',
      fields: [ 'topics', 'organisations', 'exchanges' ]
    }));
    Manager.addWidget(new AjaxSolr.BubbleChartWidget({
		id: 'bubbles_topics',
		target: '#' + 'bubbles_topics',
		field: 'topics',
		diameter: 300,
		padding: 1.5
	  }));
	  
	  
	  Manager.addWidget(new AjaxSolr.BubbleChartWidget({
		id: 'bubbles_exchanges',
		target: '#' + 'bubbles_exchanges',
		field: 'exchanges',
		diameter: 300,
		padding: 1.5
	  }));
	
	/*Manager.addWidget(new AjaxSolr.CountryCodeWidget({
      id: 'countries',
      target: '#countries',
      field: 'countryCodes'
    }));
    Manager.addWidget(new AjaxSolr.CalendarWidget({
      id: 'calendar',
      target: '#calendar',
      field: 'date'
    }));*/
=======
	
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
							
							

	
	
>>>>>>> 8268e81d32db6df8023922d6f28f2756e9d7d2c9
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