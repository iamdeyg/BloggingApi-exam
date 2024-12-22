//make time readable for human
const humanizeTime = (time) => {
    if(time < 0.5){
        return "less than a minute"
    }
    if((time >= 0.5) && (time < 1.5)){
        return "a minute"
    }
    return `${Math.ceil(time)} minutes`
}
// count Number of words in the article body
const noOfWords = (words) => {
    counts = words.trim().split(/\s+/)
    return counts.filter(count => count.length > 0).length

}
//calculate read time based on the number of words in the article and the base wordPerMinute(200 WPM)
const readTime = (words) => {
    const WPM = process.env.WORD_PER_MINUTE
    time = noOfWords(words)/WPM
    return humanizeTime(time)
}

const error = (code, message) => {
    const error = new Error(message)
    error.statusCode = code
    throw error
}

module.exports = {
    readTime,
    error
}