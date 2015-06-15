
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
                        return React.addons.cloneWithProps(
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
        );
    }
});

//------------------------------------------------------------
var recsIterator = function(self) {
    return (
        self.props.recs.map(function(rec) {
            return (
                React.Children.map(
                    self.props.children,
                    function(child) {
                        return React.addons.cloneWithProps(
                            child,
                            { key: rec.key, rec: rec }
                        )
                    }
                )
            )
        })
    )
}

//------------------------------------------------------------
var ListUlRows = React.createClass({displayName: "ListUlRows",
    render: function() {
        return (
            React.createElement("ul", {className: "myListUlRows"}, 
                 recsIterator(this) 
            )
        );
    }
});

//------------------------------------------------------------
var ListUlRow = React.createClass({displayName: "ListUlRow",
    render: function() {
        return (
            React.createElement("li", {className: "myListUlRow"}, "li row: ", this.props.rec.label)
        );
    }
});

//------------------------------------------------------------
var ListDivRows = React.createClass({displayName: "ListDivRows",
    render: function() {
        return (
            React.createElement("div", {className: "myListDivRows"}, 
                 recsIterator(this) 
            )
        );
    }
});

//------------------------------------------------------------
var ListDivRow = React.createClass({displayName: "ListDivRow",
    render: function() {
        return (
            React.createElement("div", {className: "myListDivRow"}, "div row: ", this.props.rec.label)
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
//React.render(
//    <MyList data={someData}>
//      <ListTitle/>
//      <ListUlRows>
//        <ListUlRow/>
//      </ListUlRows>
//    </MyList>,
//    document.getElementById('container')
//);

//------------------------------------------------------------
React.render(
    React.createElement(MyList, {data: someData}, 
      React.createElement(ListTitle, null), 
      React.createElement(ListDivRows, null, 
        React.createElement(ListDivRow, null)
      )
    ),
    document.getElementById('container')
);
