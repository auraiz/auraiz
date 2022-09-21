const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi 我是JC 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

📚 GitHub Stats
[![JC GitHub stats](https://github-readme-stats.vercel.app/api?username=captainjie&hide_title=true&hide_border=true&show_icons=true&include_all_commits=true&line_height=21&bg_color=0,EC6C6C,FFD479,FFFC79,73FA79&theme=graywhite&count_private=true&locale=cn)](https://github.com/captainjie/github-readme-stats)

💻 My Most Used Languages
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=captainjie&hide_title=true&hide_border=true&layout=compact&bg_color=0,73FA79,73FDFF,D783FF&theme=graywhite&count_private=true&locale=cn)](https://github.com/captainjie/github-readme-stats)

---

⏰ Updated on ${new Date().toUTCString()}

![Progress Bar CI](https://github.com/captainjie/captainjie/workflows/Progress%20Bar%20CI/badge.svg)\
`

console.log(readme)
