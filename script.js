document.getElementById('year').textContent = new Date().getFullYear();

const ctaSection = document.querySelector('.cta-section');

if (ctaSection && !document.getElementById('alem-do-codigo')) {
  const personalSection = document.createElement('section');
  personalSection.className = 'section section-soft';
  personalSection.id = 'alem-do-codigo';
  personalSection.innerHTML = `
    <div class="container two-col">
      <div>
        <p class="eyebrow">ALÉM DO CÓDIGO</p>
        <h2>Tecnologia, estrada e boas experiências.</h2>
      </div>
      <div class="prose">
        <p>Tenho interesse por tecnologia, inteligência artificial e automação, principalmente quando essas áreas são aplicadas para resolver problemas reais, simplificar processos e criar soluções úteis no dia a dia. Também gosto de desenvolver projetos próprios como forma de aprender, testar novas ideias e evoluir tecnicamente de maneira prática.</p>
        <p>Fora da tecnologia, sou apaixonado por carros e passo um bom tempo cuidando do meu próprio carro, acompanhando manutenção e pensando em melhorias. Também gosto muito de viajar, especialmente de carro. Para mim, pegar a estrada traz uma sensação de liberdade, permite conhecer novos lugares e cria bons momentos de lazer com a família.</p>
      </div>
    </div>
  `;

  ctaSection.parentNode.insertBefore(personalSection, ctaSection);
}
