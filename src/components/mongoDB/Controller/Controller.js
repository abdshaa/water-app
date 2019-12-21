import { Router, Route, Switch } from "react-router";
 
// using CommonJS modules
var Router = require("react-router").Router;
var Route = require("react-router").Route;
var Switch = require("react-router").Switch;

ReactDOM.render((
    <Router>
      <Route path="/" component={Home} />
      <Route path="/users" component={About} />
    </Router>
  ), document.getElementById('root'));

Models.post.Post.findOneAndUpdate({ _id: res._id }, { $inc: { clicks: 1 } }, {new: true },function(err, response) {
    if (err) {
    callback(err);
   } else {
    callback(response);
   }})