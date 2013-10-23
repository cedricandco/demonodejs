var request = require("superagent");

exports.index = function (req, res) {
    request.post(process.env.NEO4J_REST_URL + '/cypher').send({
        query: 'START n = node(1) RETURN n.Name;'
    }).end(function(neo4jres) {
        res.send(neo4jres.text);
    })
}