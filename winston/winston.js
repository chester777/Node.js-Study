var winston = require('winston')
var Logger = winston.Logger
var File = winston.transports.File
var Console = winston.transports.Console

var options = {

	levels: {
		info: 0,
		normal: 1,
		minor: 2,
		critical: 3
	},

	colors: {
		info: 'green',
		normal: 'blue',
		minor: 'yellow',
		critical: 'red'
	},

	transports: [
		new File({
			name: 'log-file',
			filename: 'log-file.log',
			level: 'info'
		}),

		new Console({
			level: 'critical', // Modifying this option, you can contol logger output level.
			colorize: true
		})
	]
}

var logger = new Logger(options)
logger.info('info!!');
logger.normal('normal!!');
logger.minor('minor!!');
logger.critical('critical!!');