const mongoose = require('mongoose')

const connect = async () => {
    console.log("Trying to connect");
    await mongoose.connect(process.env.ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        // we're connected!
        console.log("DB connected!");
    })
}

module.exports = connect 