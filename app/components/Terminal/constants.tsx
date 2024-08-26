/* Functions ******************************************************************/
const daysOfCoding = () => {
  const today: any                 = new Date();
  const dateStartedCoding: any     = new Date("03/02/2015");
  const millisecondsPerDay: number = 24 * 60 * 60 * 1000;

  return Math.floor((today - dateStartedCoding) / (millisecondsPerDay));
}

/* Constants ******************************************************************/

const asciiArt = `
  ░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0░░░░\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0░░░░\xa0\xa0\xa0\xa0\xa0\xa0░░
  ▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒▒▒▒
  ▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓▓▓\xa0\xa0\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0▓▓
  █\xa0\xa0████\xa0\xa0██\xa0\xa0███\xa0\xa0██████\xa0\xa0█████\xa0\xa0████\xa0\xa0████████\xa0\xa0█
  █\xa0\xa0\xa0\xa0\xa0\xa0\xa0███\xa0\xa0████\xa0\xa0█████\xa0\xa0██████\xa0\xa0\xa0\xa0\xa0\xa0████\xa0\xa0\xa0\xa0\xa0\xa0██
`;

const availableCommands = [
  { command: 'clear', description: 'Clear the terminal screen' },
  { command: 'help', description: 'List available commands' },
  { command: 'hire', description: "Download Bryan's resume" },
  { command: 'projects', description: "List Bryan's code project repositories" },
  { command: 'uptime', description: 'Print how long Bryan has been coding' },
  { command: 'exit', description: 'Exit current terminal session' },
];

const linuxList = ['ps', 'pwd', 'touch', 'mv', 'grep', 'sed', 'awk', 'tail', 'sudo', 'kill', 'killall', 'kill -9', 'top', 'htop', 'free', 'df', 'du', 'du -h', 'df -h', 'ls', 'ls -a', 'ls -l', 'ls -a -l', 'cat', 'cat README.md', 'cat LICENSE', 'cat package.json', 'cat package-lock.json', 'hostname', 'curl'];

const systemInfo = [
  `\xa0`,
  'System Information:',
  '-------------------',
  'OS: BryOS 1.0',
  'Kernel: 5.4.0-bleeding-edge',
  `Uptime: ${daysOfCoding()} days`,
  'Packages: 42',
  'Shell: brysh 0.1',
  '-------------------',
  `\xa0`,
  'Type "help" for a list of available commands.',
  `\xa0`,
];

const initialMessageLines = asciiArt.trim().split('\n').concat(systemInfo);

export { availableCommands, linuxList, initialMessageLines, daysOfCoding };
