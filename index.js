
body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
}

.unicornbtn {
  position: absolute;
  font-size: 50px;
  animation: move 3s infinite;
}

@keyframes move {
  0%   { top: 10%; left: 10%; }
  25%  { top: 70%; left: 20%; }
  50%  { top: 40%; left: 80%; }
  75%  { top: 80%; left: 50%; }
  100% { top: 10%; left: 10%; }
}
