# React.js Nesting

This is a study of nesting within React.js.

My goal is to encapsulate the creation of various types of lists.  I
forsee common behaviors, such as scrolling/pagination, and also would
like the ability to vary the types of HTML tags used to make up the
list.  Some projects may call for a `<table>`, but others might benefit
from nested `<div>` elements or a `<ul>` type of thing.

Here is my first-cut: [JSX Source:
www/js/bundle_010.jsx](www/js/bundle_010.jsx).

As a next refinement, let's add parameter validation: [JSX Source:
www/js/bundle_020.jsx](www/js/bundle_020.jsx).

One thing bugs me, though!  Changing the type of tags used to
construct my list will require invasive coding changes.  I want it to
be easy.  I want to be able to code like this at the top level:

    <MyList data={someData}>
      <ListTitle/>
      <ListDivRows>
        <ListDivRow/>
      </ListDivRows>
    </MyList>,

That way, I could switch from using `<ListDivRow/>` to
`<ListTableRow/>` with minimal effort.

React.js does provide for a parent tag which can iterate on its
children.  Let's convert to that approach: [JSX Source:
www/js/bundle_030.jsx](www/js/bundle_030.jsx).

With that working, time to introduce inner tags which actually do
generate the list with different tagging approaches: [JSX Source:
www/js/bundle_040.jsx](www/js/bundle_040.jsx).

What will this all look like as CoffeeScript?  [JSX Source:
 www/js/bundle_050.jsx](www/js/bundle_050.jsx).
