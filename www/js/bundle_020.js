
//------------------------------------------------------------
var MyList = React.createClass({displayName: "MyList",
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string,
            recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        }).isRequired,
    },
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
    propTypes: {
        title: React.PropTypes.string,
    },
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
    propTypes: {
        recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
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
    propTypes: {
        rec: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            React.createElement("div", {className: "myListRow"}, "row: ", this.props.rec.label)
        );
    }
});

//------------------------------------------------------------
var someData = {
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
