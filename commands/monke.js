const api = require('imageapi.js')
module.exports = {
    minArgs: 0,
    maxArgs: 0,
    description: "MONKE RELATED PICTURES AND VIDEOS OOO OH OOOH OOEEH",
    async callback ({ message, args, client }) {
        let subreddits = [
            "monkeys",
            "ape",
            "monke",
            "monkytime",
            "monkeymemes"
            // need to find more monkey related subreddits
        ];

        let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
        let img = await api(subreddit)

        message.channel.send(img)
            }
        }