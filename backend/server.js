const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://frontend-ruddy-eight-91.vercel.app'
  ],
  credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.use('/api/orders', ordersRouter);
app.use('/api/products', productsRouter);

const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173',
      'https://frontend-ruddy-eight-91.vercel.app'
    ],
    methods: ['GET', 'POST']
  }
});

let activeSessions = new Set();

io.on('connection', (socket) => {
  console.log('Новое подключение:', socket.id);
  activeSessions.add(socket.id);

  io.emit('sessions-count', activeSessions.size);

  socket.on('disconnect', () => {
    console.log('Отключение:', socket.id);
    activeSessions.delete(socket.id);
    io.emit('sessions-count', activeSessions.size);
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    time: new Date().toISOString(),
    sessions: activeSessions.size
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
  console.log(`API доступно по адресу http://localhost:${PORT}`);
  console.log(`WebSocket доступен по ws://localhost:${PORT}`);
});