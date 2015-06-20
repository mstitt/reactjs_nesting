
#------------------------------------------------------------
MyList = React.createClass
  propTypes:
    data: React.PropTypes.shape({
      title: React.PropTypes.string
      recs: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }).isRequired,

  render: ->
    <div className="myList">
    {
      React.Children.map @props.children, (child) =>
        React.cloneElement child, title: @props.data.title, recs: @props.data.recs
    }
    </div>

#------------------------------------------------------------
ListTitle = React.createClass
  getDefaultProps: -> title: null

  render: ->
    return false if @props.title == null
    <div className="myListTitle">{@props.title}</div>

#------------------------------------------------------------
recsIterator = (self) ->
  self.props.recs.map (rec) ->
    React.Children.map self.props.children, (child) ->
      React.cloneElement child, key: rec.key, rec: rec

#------------------------------------------------------------
ListUlRows = React.createClass
  render: ->
    <ul className="myListUlRows">
      { recsIterator(this) }
    </ul>

#------------------------------------------------------------
ListUlRow = React.createClass
  render: ->
    <li className="myListUlRow">li row: {@props.rec.label}</li>

#------------------------------------------------------------
ListDivRows = React.createClass
  render: ->
    <div className="myListDivRows">
      { recsIterator(this) }
    </div>

#------------------------------------------------------------
ListDivRow = React.createClass
  render: ->
    <div className="myListDivRow">div row: {@props.rec.label}</div>

#------------------------------------------------------------
someData =
    "title":"zoom!"
    "recs":[
            "key":"k1"
            "label":"label1"
           ,
            "key":"k2"
            "label":"label2"
            ]

#------------------------------------------------------------
#React.render(
#  <MyList data={someData}>
#    <ListTitle/>
#    <ListUlRows>
#      <ListUlRow/>
#    </ListUlRows>
#  </MyList>,
#  document.getElementById 'container'
#)

#------------------------------------------------------------
React.render(
  <MyList data={someData}>
    <ListTitle/>
    <ListDivRows>
      <ListDivRow/>
    </ListDivRows>
  </MyList>,
  document.getElementById 'container'
)
