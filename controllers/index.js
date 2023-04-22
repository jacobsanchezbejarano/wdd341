get_name = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.send('Nola Justiniano');
}

module.exports = {
    get_name
};