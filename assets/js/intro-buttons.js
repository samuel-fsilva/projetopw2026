const introButtons = document.querySelectorAll(".tabs-link");
const panelProfile = document.getElementById("tabs-panel-profile");
const intoParagraph = panelProfile.querySelector("p");
const margin = 1.5;
const texts = [
  [
    "Zelo é uma marca que possui um site e um aplicativo integrados a uma inteligência artificial própria, desenvolvidos com foco no público idoso. A plataforma tem como objetivo auxiliar seus usuários a utilizarem a tecnologia de forma mais segura, simples e objetiva.",
  ],
  [
    "O principal objetivo da Zelo é promover a inclusão digital da população idosa, oferecendo uma ferramenta capaz de reduzir as dificuldades encontradas no uso de dispositivos e serviços tecnológicos.",
    "Por meio de uma inteligência artificial própria, a plataforma busca proporcionar maior autonomia, segurança e confiança aos usuários durante a realização de tarefas do cotidiano digital.",
  ],
  [
    "A Zelo funciona por meio de um site e aplicativo integrados a uma inteligência artificial desenvolvida para auxiliar idosos em tempo real. Ao utilizar a plataforma, o usuário pode fazer perguntas, solicitar orientações ou pedir ajuda para realizar diferentes atividades tecnológicas, como utilizar aplicativos, acessar serviços digitais ou identificar possíveis riscos online.",
    " A inteligência artificial analisa cada solicitação e fornece instruções claras e objetivas, adaptadas às necessidades do público-alvo, tornando a experiência mais simples, acessível e segura.",
  ],
].map((text) =>
  text.map(
    (paragraph) =>
      `<p style="margin-top: ${margin}em; style="margin-bottom: ${margin}em">${paragraph}</p>`,
  ),
);
console.log(texts);

introButtons.forEach((button) => {
  button.addEventListener("click", () => {
    panelProfile.innerHTML = "";
    console.log(button.id);
    if (button.id == "tabs-list-profile") {
      for (let i = 0; i < texts[0].length; i++) {
        panelProfile.innerHTML = panelProfile.textContent + texts[0][i];
      }
    } else if (button.id == "tabs-list-vision") {
      for (let i = 0; i < texts[1].length; i++) {
        panelProfile.innerHTML = panelProfile.textContent + texts[1][i];
      }
      intoParagraph.innerText = "b";
    } else if (button.id == "tabs-list-history") {
      for (let i = 0; i < texts[2].length; i++) {
        panelProfile.innerHTML = panelProfile.textContent + texts[2][i];
      }
    }
  });
});
