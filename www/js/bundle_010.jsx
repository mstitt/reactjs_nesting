
//------------------------------------------------------------
var MyList = React.createClass({
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
    render: function() {
        return (
            <div className="myListTitle">title: {this.props.title}</div>
        )
    }
});

//------------------------------------------------------------
var ListRows = React.createClass({
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
    <MyList data={someData} />,
    document.getElementById('container')
);
