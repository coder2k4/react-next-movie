export default async (req, res) => {

    if (req.method === 'POST') {
        const postData = JSON.parse(req.body)
        console.log(postData)

        return res.json({
            status: 'Saving Post to DB!',
            ...postData
        })
    } else {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = response.data

        return res.json(posts.slice(0, 20))
    }
}