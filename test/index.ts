declare var require: any;

const testsContext = require.context('.', true, /\.test.ts$/);
testsContext.keys().forEach(testsContext);
