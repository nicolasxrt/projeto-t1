function alterarFonte(acao) {
    const corpo = document.body;
    let tamanhoAtual = parseFloat(getComputedStyle(corpo).fontSize);
  
    if (acao === 'aumentar' && tamanhoAtual < 24) {
      corpo.style.fontSize = (tamanhoAtual + 2) + 'px';
    } else if (acao === 'diminuir' && tamanhoAtual > 12) {
      corpo.style.fontSize = (tamanhoAtual - 2) + 'px';
    }
  }
  