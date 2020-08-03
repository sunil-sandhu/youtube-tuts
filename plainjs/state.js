export function setState(element, action) {
  action(document.getElementById(element));
}
