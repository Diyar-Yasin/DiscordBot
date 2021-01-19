const os = require('os');

// Platform
// Gives you the platform your OS is
console.log(os.platform());

// CPU Arch
// Gives you the CPU architecture
console.log(os.arch());

// CPU Core Info
// Gives info on each core in the CPU
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
// Gives the home directory path
console.log(os.homedir());

// Uptime
// The amount of time  your system has been up in seconds
console.log(os.uptime());