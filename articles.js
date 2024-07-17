// const express = require('express');
// const router = express.Router();
// const Article = require('./../models/article');

// router.get('/articles/:id', async (req, res) => {
    
//     const article = await Article.findById(req.params.id);  

// });

// router.get('/:id',async(req,res)=>{
//     // res.render('show', { article });    
//     const article = await Article.findById(req.params.id)
//         // res.render('show', { article });
//         if (article==null) res.redirect('/')
//         res.render('articles/show',{article:article})
    
//     })

//   router.post('/articles', async (req, res) => {
//     let article = new Article({
//         title: req.body.title,
//         description: req.body.description,
//         markdown: req.body.markdown
//     })
//     try {
//         await article.save();
//       res.redirect(`/articles/${article._id}`);
//     } catch (e) {
//       console.error(error);
//       res.status(500).send('Error saving article');
//     }
//   });
  
// module.exports = router;




const express = require('express')
const Article=require('./../models/article')
const router = express.Router()
router.get('/new',(req,res)=>{
    res.render('articles/new',{article: new Article()})
  })
    router.get('/edit/:id',async(req,res)=>{
      const article = await Article.findById(req.params.id)
      res.render('articles/new',{article: new Article()})
    })
router.get('/:slug',async(req,res)=>{
    const article = await Article.findOne({slug: req.params.slug})
    // res.render('show', { article });
    if (article==null) res.redirect('/')
    res.render('articles/show',{article:article})
    res.redirect('/')
})
router.delete('/:id', async (req, res) => {
    try {
      await Article.findByIdAndDelete(req.params.id);
      res.sendStatus(204); // No content to send on successful deletion
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting article');
    }
  })

    // router.delete('/:id', async(req,res)=>{
    //     await Article.findByIdAndDelete(req.params.id)
    // })

    router.post('/',async(req, res,next)=>{
      req.article=new Article()
      next()
    },saveArticle('new'))

    router.put('/:id',async(req,res,next)=>{
        req.aricle=await Article.findById(req.params.id)
        next()
        },saveArticle('edit'))


        function saveArticle(path){
          return async(req,res)=>{
          let article = req.article 
            article.title = req.body.title
            article.description = req.body.description
            article.markdown = req.body.markdown
        
        try {
               article=await article.save()
                  res.redirect(`/articles/${article.slug}`)
        } catch (e) {
                  res.render(`articles/${path}`,{article:article})
                }
        }}
        
        
        module.exports = router






// router.put('/articles/:id', async (req, res) => {
//     try {
//       const article = await Article.findById(req.params.id);
//       res.render('show', { article });
//     } catch (error) {
//       console.error(error);
//       res.status(404).send('Article not found');
//     }
//   });

// })
// router.post('/articles', async (req, res) => {
//     try {
//       // Create a new article instance
//       const article = new Article({
//         title: req.body.title,
//         description: req.body.description,
//         markdown: req.body.markdown
//       });
  
//       // Save the article to the database
//       await article.save();
  
//       // Redirect to the show page
//       res.redirect(`/articles/${article._id}`);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send('Error saving article');
//     }
//   });
