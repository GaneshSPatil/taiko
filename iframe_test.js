const {
  openBrowser,
  goto,
  closeBrowser,
  radioButton,
} = require('/Users/dharmenn/Workspace/gauge_project/taiko/bin/taiko');
let foo = {};
(async () => {
  try {
    await openBrowser({ args: ['--window-size=1680,1200'] });
    // let events = await diagnostics.logConsoleInfo()
    // events.on("consoleLog", ( {value}) => {
    //   // console.log(`---------------consoleLog------------`);
    //   if(foo.hasOwnProperty(value) ) foo[value] += 1
    //   else foo[value] = 1;
    //   // console.log(value);
    // } );
    await goto(
      'file:///Users/dharmenn/Workspace/gauge_project/taiko/foo.html',
    );
    let elemWrapper = radioButton({
      id: 'someRadioButton',
    });
    let elements = await elemWrapper.elements();
    console.log(elements);
    let fo = await elements[0].isSelected();
    console.log(fo);
  } catch (error) {
    console.error(error);
  } finally {
    console.log(foo);
    await closeBrowser();
  }
})();
