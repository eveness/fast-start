var bs = require("browser-sync").create(),
    DEST_PATH = './public/';

bs.watch(DEST_PATH + "*.html").on("change", bs.reload);
bs.watch(DEST_PATH + "*.css").on("change", function() {bs.reload(DEST_PATH + "*.css")});
bs.watch(DEST_PATH + "*.js").on("change", bs.reload);

bs.init({
    server: DEST_PATH,
    ghostMode: true
});

