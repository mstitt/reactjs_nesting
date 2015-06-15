
//------------------------------------------------------------
var MyList = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string,
            recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
        }).isRequired,
    },
    render: function() {
        return (
            <div className="myList">
                <ListTitle title={this.props.data.title} />
                <ListRows recs={this.props.data.recs} />
            </div>
        );
    }
});

//------------------------------------------------------------
var ListTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
    },
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
    propTypes: {
        recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    },
    render: function() {
        return (
            <div className="myListRows">
                {
                    this.props.recs.map(function(r) {
                        return <ListRow key={r.key} rec={r}/>
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
    <MyList data={someData} />,
    document.getElementById('container')
);
