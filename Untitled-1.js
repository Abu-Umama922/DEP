// const express = require('express');
// const mongoose = require('mongoose');
// const articleRouter = require('./routes/articles');
// const app = express();
// const Article = require('./models/article')
// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: false }));

// mongoose.connect('mongodb://127.0.0.1:27017/mydb')
// // .then((db) => {
// //     console.log('MongoDB connected');
// //     console.log(`MongoDB Server Description:`);
// //     console.log(db.connection.serverDescription());
// //     app.listen(PORT, () => {
// //         console.log(`Server is running on port ${3000}`);
// //     });
// // })
// // .catch(err => console.error('Connection to MongoDB failed: ', err));

// app.get('/', (req, res) => {
//     const articles = [
//         {
//             title: 'Test Article 2',
//             createdAt: new Date(),
//             description: 'Test description'
//         },
//         {
//             title: 'Test Article 1',
//             createdAt: new Date(),
//             description: 'Test description'
//         }
//     ];
//     res.render('articles/index', { articles: articles });
// });

// app.use('/articles', articleRouter);
// app.listen (3000)

// mongoose.connect('mongodb://localhost/blogdb:127.0.0.1:27017'
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// )
// .then(() => {
//     console.log('MongoDB connected');
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
// })
// .catch(err => console.error('Connection to MongoDB failed: ', err));