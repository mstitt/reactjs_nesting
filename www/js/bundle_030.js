
//------------------------------------------------------------
var MyList = React.createClass({displayName: "MyList",
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string,
            recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        }).isRequired,
    },
    render: function() {
        var self = this;
        return (
            React.createElement("div", {className: "myList"}, 
                
                    React.Children.map(self.props.children, function(child) {
                        return React.cloneElement(
                          child,
                          { title: self.props.data.title, recs: self.props.data.recs }
                        )
                    })
                
            )
        );
    }
});

//------------------------------------------------------------
var ListTitle = React.createClass({displayName: "ListTitle",
    getDefaultProps: function() {return {title: null}},
    render: function() {
        if (this.props.title == null) {return false}
        return (
            React.createElement("div", {className: "myListTitle"}, "title: ", this.props.title)
        )
    }
});

//------------------------------------------------------------
var ListRows = React.createClass({displayName: "ListRows",
    render: function() {
        var self = this;
        return (
                React.createElement("div", {className: "myListRows"}, 
                    
                        this.props.recs.map(function(rec) {
                            return (
                                React.Children.map(
                                    self.props.children,
                                    function(child) {
                                        return React.cloneElement(
                                          child,
                                          { key: rec.key, rec: rec }
                                        )
                                    }
                                )
                            );
                        })
                    
                )
        );
    }
});

//------------------------------------------------------------
var ListRow = React.createClass({displayName: "ListRow",
    render: function() {
        return (
            React.createElement("div", {className: "myListRow"}, "row: ", this.props.rec.label)
        );
    }
});

//------------------------------------------------------------
var someData = {
    "title":"zoom!",
    "recs":[
        {
            "key":"k1",
            "label":"label1",
        },
        {
            "key":"k2",
            "label":"label2",
        }
    ]
}

//------------------------------------------------------------
React.render(
    React.createElement(MyList, {data: someData}, 
      React.createElement(ListTitle, null), 
      React.createElement(ListRows, null, 
        React.createElement(ListRow, null)
      )
    ),
    document.getElementById('container')
);
