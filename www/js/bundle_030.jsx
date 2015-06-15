
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
        )
    }
});

//------------------------------------------------------------
var ListRows = React.createClass({
    render: function() {
        var self = this;
        return (
                <div className="myListRows">
                    {
                        this.props.recs.map(function(rec) {
                            return (
                                React.Children.map(
                                    self.props.children,
                                    function(child) {
                                        return React.addons.cloneWithProps(
                                            child,
                                            { key: rec.key, rec: rec }
                                        ); 
                                    }
                                )
                            );
                        })
                    }
                </div>
        );
    }
});

//------------------------------------------------------------
var ListRow = React.createClass({
    propTypes: {
        rec: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div className="myListRow">row: {this.props.rec.label}</div>
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
    <MyList data={someData}>
      <ListTitle/>
      <ListRows>
        <ListRow/>
      </ListRows>
    </MyList>,
    document.getElementById('container')
);
