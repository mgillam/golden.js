((options) => {
  if (options & 1) {
      console.log = () => {};
      console.debug = () => {};
      console.error = () => {};
      console.warn = () => {};
      console.info = () => {};
  }
  if (options & 2) {
    window.alert = () => {};
    window.prompt = () => { return null; };
    window.confirm = () => { return false; };
  }
  if (options & 4) {
    document.write = () => {};
    document.writeln = () => {};
  }
})(parseInt(document.querySelector("script[data-golden-options]")?.getAttribute("data-golden-options") || "3")); 