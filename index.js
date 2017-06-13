const regex = /\{\{(.+?)\}\}/g;

function renderer(str, vars) {
  for (var va in vars) {
    if (vars.hasOwnProperty(va)) {
      this[va] = vars[va];
    }
  }

  this.str = str;

  const renderVars = str.match(regex)

  for (var i = 0; i < renderVars.length; i++) {
    this.str = this.str.replace(
      renderVars[i],
      eval(`this.${renderVars[i].substring(2, renderVars[i].length-2)}`)
    );
  }
}


module.exports = (str, vars) => {
  let renderObj = new renderer(str, vars);
  return renderObj.str;
};
