const timerArray = process.argv.slice(2);

if (!timerArray) return
for (const time of timerArray) {
  if (time < 0 || isNaN(time)) continue
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000)
}

