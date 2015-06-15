
//------------------------------------------------------------
var MyList = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string,
            recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        }).isRequired,
    },
    render: function() {
        var self = this;
        return (
            <div className="myList">
                {
                    React.Children.map(self.props.children, function(child) {
                        return React.addons.cloneWithProps(
                            child,
                            { title: self.props.data.title, recs: self.props.data.recs }
                        )
                    })
                }
            </div>
        );
    }
});

//------------------------------------------------------------
var ListTitle = React.createClass({
    getDefaultProps: function() {return {title: null}},
    render: function() {
        if (this.props.title == null) {return false}
        return (
            <div className="myListTitle">title: {this.props.title}</div>
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
var ListUlRows = React.createClass({
    render: function() {
        return (
            <ul className="myListUlRows">
                { recsIterator(this) }
            </ul>
        );
    }
});

//------------------------------------------------------------
var ListUlRow = React.createClass({
    render: function() {
        return (
            <li className="myListUlRow">li row: {this.props.rec.label}</li>
        );
    }
});

//------------------------------------------------------------
var ListDivRows = React.createClass({
    render: function() {
        return (
            <div className="myListDivRows">
                { recsIterator(this) }
            </div>
        );
    }
});

//------------------------------------------------------------
var ListDivRow = React.createClass({
    render: function() {
        return (
            <div className="myListDivRow">div row: {this.props.rec.label}</div>
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
    <MyList data={someData}>
      <ListTitle/>
      <ListDivRows>
        <ListDivRow/>
      </ListDivRows>
    </MyList>,
    document.getElementById('container')
);
