var hello = function (ctx, callback) {
  var obj = ctx.args[0];
  var msg = 'Hello ' + obj;
  callback(undefined, msg);
};
module.exports = {
  'name': 'io.picolabs.hello_world',
  'meta': {
    'name': 'Hello World',
    'description': '\nA first ruleset for the Quickstart\n    ',
    'author': 'Phil Windley',
    'logging': true,
    'shares': { 'hello': hello }
  },
  'rules': {
    'say_hello': {
      'name': 'say_hello',
      'select': {
        'graph': { 'echo': { 'hello': { 'expr_0': true } } },
        'eventexprs': {
          'expr_0': function (ctx, callback) {
            callback(undefined, true);
          }
        },
        'state_machine': {
          'start': [
            [
              'expr_0',
              'end'
            ],
            [
              [
                'not',
                'expr_0'
              ],
              'start'
            ]
          ]
        }
      },
      'action_block': {
        'actions': [function (ctx, callback) {
            callback(undefined, {
              'type': 'directive',
              'name': 'say',
              'options': { 'something': 'Hello World' }
            });
          }]
      }
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvID0gZnVuY3Rpb24ob2JqKXtcbiAgICAgIG1zZyA9IFwiSGVsbG8gXCIgKyBvYmo7XG4gICAgICBtc2dcbiAgICB9IiwiaGVsbG8iLCJmdW5jdGlvbihvYmope1xuICAgICAgbXNnID0gXCJIZWxsbyBcIiArIG9iajtcbiAgICAgIG1zZ1xuICAgIH0iLCJvYmoiLCJtc2cgPSBcIkhlbGxvIFwiICsgb2JqIiwibXNnIiwiXCJIZWxsbyBcIiIsIlwiSGVsbG8gXCIgKyBvYmoiLCJydWxlc2V0IGlvLnBpY29sYWJzLmhlbGxvX3dvcmxkIHtcbiAgbWV0YSB7XG4gICAgbmFtZSBcIkhlbGxvIFdvcmxkXCJcbiAgICBkZXNjcmlwdGlvbiA8PFxuQSBmaXJzdCBydWxlc2V0IGZvciB0aGUgUXVpY2tzdGFydFxuICAgID4+XG4gICAgYXV0aG9yIFwiUGhpbCBXaW5kbGV5XCJcbiAgICBsb2dnaW5nIG9uXG4gICAgc2hhcmVzIGhlbGxvXG4gIH1cbiAgZ2xvYmFsIHtcbiAgICBoZWxsbyA9IGZ1bmN0aW9uKG9iail7XG4gICAgICBtc2cgPSBcIkhlbGxvIFwiICsgb2JqO1xuICAgICAgbXNnXG4gICAgfVxuICB9XG4gIHJ1bGUgc2F5X2hlbGxvIHtcbiAgICBzZWxlY3Qgd2hlbiBlY2hvIGhlbGxvXG4gICAgc2VuZF9kaXJlY3RpdmUoXCJzYXlcIikgd2l0aFxuICAgICAgc29tZXRoaW5nID0gXCJIZWxsbyBXb3JsZFwiXG4gIH1cbn0iLCJpby5waWNvbGFicy5oZWxsb193b3JsZCIsIm5hbWUiLCJuYW1lIFwiSGVsbG8gV29ybGRcIiIsIlwiSGVsbG8gV29ybGRcIiIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb24gPDxcbkEgZmlyc3QgcnVsZXNldCBmb3IgdGhlIFF1aWNrc3RhcnRcbiAgICA+PiIsIlxuQSBmaXJzdCBydWxlc2V0IGZvciB0aGUgUXVpY2tzdGFydFxuICAgICIsImF1dGhvciIsImF1dGhvciBcIlBoaWwgV2luZGxleVwiIiwiXCJQaGlsIFdpbmRsZXlcIiIsImxvZ2dpbmciLCJsb2dnaW5nIG9uIiwib24iLCJzaGFyZXMiLCJzaGFyZXMgaGVsbG8iLCJydWxlIHNheV9oZWxsbyB7XG4gICAgc2VsZWN0IHdoZW4gZWNobyBoZWxsb1xuICAgIHNlbmRfZGlyZWN0aXZlKFwic2F5XCIpIHdpdGhcbiAgICAgIHNvbWV0aGluZyA9IFwiSGVsbG8gV29ybGRcIlxuICB9Iiwic2F5X2hlbGxvIiwic2VsZWN0IHdoZW4gZWNobyBoZWxsbyIsImVjaG8gaGVsbG8iLCJzZW5kX2RpcmVjdGl2ZShcInNheVwiKSB3aXRoXG4gICAgICBzb21ldGhpbmcgPSBcIkhlbGxvIFdvcmxkXCIiXSwibmFtZXMiOlsiaGVsbG8iLCJjdHgiLCJhcmdzIiwibXNnIiwib2JqIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFXSSxJQ0FBQSxLLEdDQVEsVSxHQUFBLEUsUUFBQSxFO0VDQVMsSSxNQUFBQyxHQUFBLENBQUFDLElBQUEsSTtFQ0NmLElDQUFDLEcsR0NBTSxRQ0FBLEdKQVdDLEdDQWpCLEM7RUNDQUMsUUFBQSxDQUFBQyxTQUFBLEVBQUFILEdBQUEsRTtDTEZGLENRWEo7QUFBQUksTUFBQSxDQUFBQyxPQUFBO0FBQUEsRSxRQ0FRLHlCREFSO0FBQUEsRSxRQUFBO0FBQUEsSUVFSSxNQ0FBLEVDQUssYUpGVDtBQUFBLElLR0ksYUNBQSxFQ0FjLDRDUEhsQjtBQUFBLElRTUksUUNBQSxFQ0FPLGNWTlg7QUFBQSxJV09JLFNDQUEsRUNBUSxJYlBaO0FBQUEsSWNRSSxRQ0FBLEl0QkFPLE9zQkFQLEV0QkFPUixLc0JBUCxFZlJKO0FBQUE7QUFBQSxFLFNBQUE7QUFBQSxJLGFnQmdCRTtBQUFBLE0sUUNBSyxXREFMO0FBQUEsTSxVRUNFO0FBQUEsUSxTQUFBLEUsUUFBQSxFLFNBQUEsRSxVQUFBO0FBQUEsUSxjQUFBO0FBQUEsVSxVQ0FZLFUsR0FBQSxFLFFBQUEsRTtZQUFBSyxRQUFBLENBQUFDLFNBQUEsUTtXREFaO0FBQUE7QUFBQSxRLGlCQUFBO0FBQUEsVTs7Y0FBQSxRO2NBQUEsSzs7OztnQkFBQSxLO2dCQUFBLFE7O2NBQUEsTzs7V0FBQTtBQUFBO0FBQUEsT0ZERjtBQUFBLE0sZ0JJRUU7QUFBQSxRLFdBQUEsVyxHQUFBLEUsUUFBQSxFO1lBQUFELFFBQUEsQ0FBQUMsU0FBQTtBQUFBLGMsUUFBQTtBQUFBLGMsUUFBQTtBQUFBLGMsV0FBQSxFLGFoQkNjLGFnQkRkO0FBQUEsZTtXQUFBO0FBQUEsT0pGRjtBQUFBLEtoQmhCRjtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF19