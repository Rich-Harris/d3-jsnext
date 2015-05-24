import { d3_transition_tween } from './tween';
import { d3_transitionPrototype } from './transition';

var undefined;

d3_transitionPrototype.text = function(value) {
  return d3_transition_tween(this, "text", value, d3_transition_text);
};

function d3_transition_text(b) {
  if (b == null) b = "";
  return function() { this.textContent = b; };
}

export { d3_transition_text };