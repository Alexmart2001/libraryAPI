module.exports = (app) => {
    var pedCtrl = require('../controlador/libro');


    app.route('/api/getAllLibros')
        .get(pedCtrl.getAllLibros);

    app.route('/api/getLibro')
        .post( pedCtrl.getLibro) ;

    app.route('/api/delLibro')
        .post(pedCtrl.delLibro);

    app.route('/api/createLibro')
        .post(pedCtrl.createLibro);

    app.route('/api/updateLibro')
        .post(pedCtrl.updateLibro);
}
