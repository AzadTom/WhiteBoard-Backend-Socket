import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);



const io = new Server(server,{
    cors:{
        origin:"https://white-board-front-end.vercel.app/"
    }
})

io.on('connection',(socket)=>{

    socket.on("client-ready",()=>{

        console.log("connected!");
        socket.broadcast.emit("server-ready");

    });


    socket.on('rectangle',(rect)=>{

         socket.broadcast.emit('onrectangle',rect);  
  
    });


    socket.on('circle',(circle)=>{

        socket.broadcast.emit('oncircle',circle);  
 
   });


   socket.on('arrow',(arrow)=>{

    socket.broadcast.emit('onarrow',arrow);  

});



socket.on('scribble',(scribble)=>{

    socket.broadcast.emit('onscribble',scribble);  

});
    

})


server.listen(3001,()=>{

    console.log("server is listening on port 3001");
})



