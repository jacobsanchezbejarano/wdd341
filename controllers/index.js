get_name = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.statusCode = 200;
    res.send('Nola Justiniano');
}

module.exports = {
    get_name
};