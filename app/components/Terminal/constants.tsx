/* Functions ******************************************************************/
const daysOfCoding = () => {
  const today: any                 = new Date();
  const dateStartedCoding: any     = new Date("03/02/2015");
  const millisecondsPerDay: number = 24 * 60 * 60 * 1000;

  return Math.floor((today - dateStartedCoding) / (millisecondsPerDay));
}

/* Constants ******************************************************************/

const asciiArt = [
'(\xa0Welcome\xa0traveler!\xa0)\xa0\xa0\xa0\xa0\xa0\xa0root@root',
'\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0---------',
'\xa0\xa0\xa0\xa0\xa0\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0OS:\xa0BryOS\xa013.37\xa0armv7l',
'\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0.--.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Host:\xa0The\xa0Cloud\xa0(tm)',
'\xa0\xa0\xa0\xa0\xa0\xa0\xa0|o_o\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Kernel:\xa05.4.0-bleeding-edge',
 `\xa0\xa0\xa0\xa0\xa0\xa0\xa0|:_/\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Uptime:\xa0${daysOfCoding()}\xa0days`,
'\xa0\xa0\xa0\xa0\xa0\xa0//\xa0\xa0\xa0\\ \\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Packages:\xa042',
'\xa0\xa0\xa0\xa0\xa0(|\xa0\xa0\xa0\xa0\xa0|\xa0)\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Shell:\xa0brysh\xa00.2',
"\xa0\xa0\xa0\xa0/'\\_\xa0\xa0\xa0_/'\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CPU:\xa0CPU\xa0(4)",
'\xa0\xa0\xa0\xa0\\___)=(___/\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RAM:\xa01265MiB\xa0/\xa08196MiB',
];

const availableCommands = [
  { command: 'clear', description: 'Clear the terminal screen' },
  { command: 'help', description: 'List available commands' },
  { command: 'hire', description: "Download Bryan's resume" },
  { command: 'projects', description: "List Bryan's code project repositories" },
  { command: 'uptime', description: 'Print how long Bryan has been coding' },
  { command: 'exit', description: 'Exit current terminal session' },
];

const linuxList = ['ps', 'pwd', 'touch', 'mv', 'grep', 'sed', 'awk', 'tail', 'sudo', 'kill', 'killall', 'kill -9', 'top', 'htop', 'free', 'df', 'du', 'du -h', 'df -h', 'ls', 'ls -a', 'ls -l', 'ls -a -l', 'cat', 'cat README.md', 'cat LICENSE', 'cat package.json', 'cat package-lock.json', 'hostname', 'curl'];

const helpMsg = [
  `\xa0`,
  'Type "help" for a list of available commands.',
  `\xa0`,
];

const initialMessageLines = asciiArt.concat(helpMsg);

export { availableCommands, linuxList, initialMessageLines, daysOfCoding };
