// Generated by CoffeeScript 1.9.3
(function() {
  var ListDivRow, ListDivRows, ListTitle, ListUlRow, ListUlRows, MyList, recsIterator, someData;

  MyList = React.createClass({
    propTypes: {
      data: React.PropTypes.shape({
        title: React.PropTypes.string,
        recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
      }).isRequired
    },
    render: function() {
      return React.createElement("div", {
        "className": "myList"
      }, React.Children.map(this.props.children, (function(_this) {
        return function(child) {
          return React.addons.cloneWithProps(child, {
            title: _this.props.data.title,
            recs: _this.props.data.recs
          });
        };
      })(this)));
    }
  });

  ListTitle = React.createClass({
    getDefaultProps: function() {
      return {
        title: null
      };
    },
    render: function() {
      if (this.props.title === null) {
        return false;
      }
      return React.createElement("div", {
        "className": "myListTitle"
      }, this.props.title);
    }
  });

  recsIterator = function(self) {
    return self.props.recs.map(function(rec) {
      return React.Children.map(self.props.children, function(child) {
        return React.addons.cloneWithProps(child, {
          key: rec.key,
          rec: rec
        });
      });
    });
  };

  ListUlRows = React.createClass({
    render: function() {
      return React.createElement("ul", {
        "className": "myListUlRows"
      }, recsIterator(this));
    }
  });

  ListUlRow = React.createClass({
    render: function() {
      return React.createElement("li", {
        "className": "myListUlRow"
      }, "li row: ", this.props.rec.label);
    }
  });

  ListDivRows = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "myListDivRows"
      }, recsIterator(this));
    }
  });

  ListDivRow = React.createClass({
    render: function() {
      return React.createElement("div", {
        "className": "myListDivRow"
      }, "div row: ", this.props.rec.label);
    }
  });

  someData = {
    "title": "zoom!",
    "recs": [
      {
        "key": "k1",
        "label": "label1"
      }, {
        "key": "k2",
        "label": "label2"
      }
    ]
  };

  React.render(React.createElement(MyList, {
    "data": someData
  }, React.createElement(ListTitle, null), React.createElement(ListDivRows, null, React.createElement(ListDivRow, null))), document.getElementById('container'));

}).call(this);
