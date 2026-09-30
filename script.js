// Cada padrinho tem sua própria senha e seu próprio vídeo (ID do YouTube).
// Troque as senhas e os IDs pelos reais antes de enviar os links.
const padrinhos = {
  "joao2026":   { nome: "João",  video: "ID_DO_VIDEO_JOAO" },
  "maria2026":  { nome: "Maria", video: "ID_DO_VIDEO_MARIA" },
  "pedro2026":  { nome: "Pedro", video: "ID_DO_VIDEO_PEDRO" }
};

const form = document.getElementById('passForm');
const gate = document.getElementById('gate');
const reveal = document.getElementById('reveal');
const erro = document.getElementById('erro');
const videoFrame = document.getElementById('videoFrame');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const digitado = document.getElementById('senha').value.trim().toLowerCase();
  const padrinho = padrinhos[digitado];

  if (padrinho) {
    // só carrega o vídeo certo depois da senha validada
    videoFrame.src = "https://www.youtube-nocookie.com/embed/" + padrinho.video;
    gate.style.display = 'none';
    reveal.classList.add('show');
  } else {
    erro.textContent = 'Senha incorreta, tente de novo.';
  }
});
