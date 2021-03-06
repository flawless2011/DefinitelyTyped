import stringify = require("csv-stringify");

let stream: stringify.Stringifier;

stringify([["1", "2", "3"], ["4", "5", "6"]], (error: Error, output: string): void => {
  // nothing
});

stringify([["1", "2", "3"], ["4", "5", "6"]], {
	delimiter: ","
}, (error: Error, output: string): void => {
  // nothing
});

stringify([["1", true, new Date()], ["4", false, new Date()]], {
	delimiter: ",",
  formatters: {
    bool: value => value ? 'yes' : 'no',
    date: value => value.toISOString()
  }
}, (error: Error, output: string): void => {
  // nothing
});

stream = stringify({ delimiter: "," });

stream.write(["1", "2", "3"]);
stream.write(["4", true, new Date()], 'utf8', (err: Error, output: string): void => {
  // nothing
});

const transform: NodeJS.ReadWriteStream = stream;

stream = stringify();
