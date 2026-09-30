// Cada casal de padrinhos tem sua própria senha e seu próprio vídeo (ID do YouTube).
// Troque as senhas e os IDs pelos reais antes de enviar os links.
const padrinhos = {
  "cinthiasergio": { nome: "Cinthia e Sergio", video: "ID_DO_VIDEO_CINTHIA_SERGIO" },
  "biancajunior":  { nome: "Bianca e Junior",  video: "ID_DO_VIDEO_BIANCA_JUNIOR" },
  "laysethalles":  { nome: "Layse e Thalles",  video: "ID_DO_VIDEO_LAYSE_THALLES" }
};

const form = document.getElementById('passForm');
const gate = document.getElementById('gate');
const reveal = document.getElementById('reveal');
const erro = document.getElementById('erro');
const videoFrame = document.getElementById('videoFrame');
const senhaInput = document.getElementById('senha');
const voltarBtn = document.getElementById('voltarBtn');
const nomeCasal = document.getElementById('nomeCasal');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const digitado = senhaInput.value.trim().toLowerCase();
  const padrinho = padrinhos[digitado];

  if (padrinho) {
    // só carrega o vídeo certo depois da senha validada
    nomeCasal.textContent = padrinho.nome;
    videoFrame.src = "https://www.youtube-nocookie.com/embed/" + padrinho.video;
    gate.style.display = 'none';
    reveal.classList.add('show');
  } else {
    erro.textContent = 'Senha incorreta, tente de novo.';
    senhaInput.value = '';   // limpa o campo
    senhaInput.focus();      // manda o cursor de volta pra ele
  }
});