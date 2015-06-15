
//------------------------------------------------------------
var MyList = React.createClass({displayName: "MyList",
    render: function() {
        return (
            React.createElement("div", {className: "myList"}, 
                React.createElement(ListTitle, {title: this.props.data.title}), 
                React.createElement(ListRows, {recs: this.props.data.recs})
            )
        );
    }
});

//------------------------------------------------------------
var ListTitle = React.createClass({displayName: "ListTitle",
    render: function() {
        return (
            React.createElement("div", {className: "myListTitle"}, "title: ", this.props.title)
        )
    }
});

//------------------------------------------------------------
var ListRows = React.createClass({displayName: "ListRows",
    render: function() {
        return (
            React.createElement("div", {className: "myListRows"}, 
                
                    this.props.recs.map(function(r) {
                        return React.createElement(ListRow, {key: r.key, rec: r})
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
    React.createElement(MyList, {data: someData}),
    document.getElementById('container')
);
