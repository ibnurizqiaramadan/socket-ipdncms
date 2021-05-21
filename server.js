const io = require("socket.io")(6996,{
    cors: {
        origin: ["http://localhost", "http://192.168.1.25", "http://ipdncms.test", "https://ipdncms.xyrus10.com", "http://ipdncms.xyrus10.com"],
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});
io.on("connection", socket => {

    socket.on("join", param => {
        console.log("user join")
    })

    socket.on("affectDataTable", param => {
		console.log("Affected DataTable")
        console.log(param)
		io.emit("refreshDataTable", param)
    });

    socket.on("disconnect", (reason) => {
		console.log("user leave")
	});	
});