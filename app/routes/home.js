module.exports = function(app) {
    app.get('/home', function(req,res) {
        res.render('home/index');
    });    
    app.get('/', function(req,res) {
        res.render('home/index');
    }); 
}
