const app = require('express')()

app.get('/test', (req,res)=>{

	res.send('ok');
})
app.listen(8085);
