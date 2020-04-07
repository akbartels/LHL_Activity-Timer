const cmdLineArgs = process.argv.slice(2);


for (const index in cmdLineArgs) {
  if (!isNaN(cmdLineArgs[index]) && (cmdLineArgs[index] > 0)) {
    setTimeout(() => {
      // console.log(cmdLineArgs[index]);
      process.stdout.write('*BEEP*\n');
    }, cmdLineArgs[index] * 1000);
  }
}

//
