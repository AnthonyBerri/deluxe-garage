document.addEventListener("DOMContentLoaded", () => {
  console.log("Página Quem Somos carregada com sucesso!")

  function configurarBotaoVoltar() {
    const voltarBtn = document.getElementById("voltarBtn")

    if (voltarBtn) {
      voltarBtn.addEventListener("click", () => {
        console.log("Botão voltar clicado - redirecionando para home")
        mostrarAnimacaoSaida("Voltando para a página inicial...")
        setTimeout(() => {
          window.location.href = "../home/index.html"
        }, 1000)
      })
    } else {
      console.error("Botão voltar não encontrado!")
    }
  }

  function configurarBotaoLogin() {
    const loginBtn = document.getElementById("loginBtn")

    if (loginBtn) {
      loginBtn.addEventListener("click", () => {
        console.log("Botão login clicado - redirecionando para login")
        mostrarAnimacaoSaida("Redirecionando para o login...")
        setTimeout(() => {
          window.location.href = "../login/index.html"
        }, 1000)
      })
    } else {
      console.error("Botão login não encontrado!")
    }
  }

  function criarModalInteracao() {
    const modal = document.createElement("div")
    modal.id = "modalInteracao"
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      backdrop-filter: blur(5px);
    `

    const modalContent = document.createElement("div")
    modalContent.style.cssText = `
      background: white;
      padding: 30px;
      border-radius: 15px;
      text-align: center;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      transform: scale(0.7);
      transition: transform 0.3s ease;
    `

    const modalText = document.createElement("p")
    modalText.id = "modalText"
    modalText.style.cssText = `
      font-size: 18px;
      margin-bottom: 20px;
      color: #333;
      font-weight: 500;
    `

    const spinner = document.createElement("div")
    spinner.id = "spinner"
    spinner.style.cssText = `
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #2a2a2a;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto;
    `

    const style = document.createElement("style")
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in {
        animation: fadeIn 0.5s ease;
      }
    `
    document.head.appendChild(style)

    modalContent.appendChild(modalText)
    modalContent.appendChild(spinner)
    modal.appendChild(modalContent)
    document.body.appendChild(modal)

    return modal
  }

  function mostrarAnimacaoSaida(mensagem) {
    const modal = document.getElementById("modalInteracao") || criarModalInteracao()
    const modalText = document.getElementById("modalText")
    const modalContent = modal.querySelector("div")

    modalText.textContent = mensagem
    modal.style.display = "flex"

    setTimeout(() => {
      modalContent.style.transform = "scale(1)"
    }, 10)
  }

  function mostrarConfirmacaoRecarregamento() {
    const modal = document.getElementById("modalInteracao") || criarModalInteracao()
    const modalContent = modal.querySelector("div")

    modalContent.innerHTML = `
      <h3 style="margin-bottom: 15px; color: #2a2a2a;">🔄 Recarregar Página</h3>
      <p style="margin-bottom: 20px; color: #666;">Tem certeza que deseja recarregar a página?</p>
      <div style="display: flex; gap: 10px; justify-content: center;">
        <button id="confirmarRecarregar" style="
          background: #2a2a2a;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        ">Sim, recarregar</button>
        <button id="cancelarRecarregar" style="
          background: #f0f0f0;
          color: #333;
          border: 1px solid #ddd;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
        ">Cancelar</button>
      </div>
    `

    modal.style.display = "flex"
    modalContent.style.transform = "scale(1)"

    document.getElementById("confirmarRecarregar").addEventListener("click", () => {
      modalContent.innerHTML = `
        <p style="margin-bottom: 20px; color: #333; font-weight: 500;">Recarregando página...</p>
        <div style="
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #2a2a2a;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        "></div>
      `
      setTimeout(() => {
        window.location.reload(true)
      }, 800)
    })

    document.getElementById("cancelarRecarregar").addEventListener("click", () => {
      fecharModal()
    })
  }

  function fecharModal() {
    const modal = document.getElementById("modalInteracao")
    if (modal) {
      const modalContent = modal.querySelector("div")
      modalContent.style.transform = "scale(0.7)"
      setTimeout(() => {
        modal.style.display = "none"
      }, 300)
    }
  }

  function adicionarEfeitosVisuais() {
    const voltarBtn = document.getElementById("voltarBtn")
    const loginBtn = document.getElementById("loginBtn")

    if (voltarBtn) {
      voltarBtn.addEventListener("mouseenter", function () {
        this.style.transform = "translateX(-2px)"
        this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"
      })
      voltarBtn.addEventListener("mouseleave", function () {
        this.style.transform = "translateX(0)"
        this.style.boxShadow = "none"
      })
    }

    if (loginBtn) {
      loginBtn.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)"
        this.style.boxShadow = "0 4px 8px rgba(255,255,255,0.3)"
      })
      loginBtn.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)"
        this.style.boxShadow = "none"
      })
    }
  }

  function configurarNavegacaoTeclado() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const modal = document.getElementById("modalInteracao")
        if (modal && modal.style.display === "flex") {
          fecharModal()
        } else {
          console.log("Tecla ESC pressionada - voltando para home")
          mostrarAnimacaoSaida("Voltando para a página inicial...")
          setTimeout(() => {
            window.location.href = "../home/index.html"
          }, 1000)
        }
      }
    })
  }

  function configurarDeteccaoRecarregamento() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "F5" || (event.ctrlKey && event.key === "r")) {
        event.preventDefault()
        mostrarConfirmacaoRecarregamento()
        return false
      }
    })

    window.addEventListener("beforeunload", (event) => {
      const modal = document.getElementById("modalInteracao")
      if (!modal || modal.style.display !== "flex") {
        event.preventDefault()
        mostrarConfirmacaoRecarregamento()
        event.returnValue = ""
        return ""
      }
    })
  }

  function configurarDeteccaoHistorico() {
    window.history.pushState({ page: "quemSomos" }, "Quem Somos", window.location.href)

    window.addEventListener("popstate", (event) => {
      console.log("Usuário clicou no botão voltar do navegador")

      window.history.pushState({ page: "quemSomos" }, "Quem Somos", window.location.href)

      const modal = document.getElementById("modalInteracao") || criarModalInteracao()
      const modalContent = modal.querySelector("div")

      modalContent.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #2a2a2a;">⬅️ Voltar</h3>
        <p style="margin-bottom: 20px; color: #666;">Deseja voltar para a página anterior?</p>
        <div style="display: flex; gap: 10px; justify-content: center;">
          <button id="confirmarVoltar" style="
            background: #2a2a2a;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
          ">Sim, voltar</button>
          <button id="ficarPagina" style="
            background: #f0f0f0;
            color: #333;
            border: 1px solid #ddd;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
          ">Ficar aqui</button>
        </div>
      `

      modal.style.display = "flex"
      modalContent.style.transform = "scale(1)"

      document.getElementById("confirmarVoltar").addEventListener("click", () => {
        mostrarAnimacaoSaida("Voltando para a página anterior...")
        setTimeout(() => {
          window.history.go(-2)
        }, 1000)
      })

      document.getElementById("ficarPagina").addEventListener("click", () => {
        fecharModal()
      })
    })
  }

  function adicionarAnimacoesEntrada() {
    const contentWrapper = document.querySelector(".content-wrapper")

    if (contentWrapper) {
      contentWrapper.style.opacity = "0"
      contentWrapper.style.transform = "translateY(20px)"
      contentWrapper.style.transition = "opacity 0.5s ease, transform 0.5s ease"

      setTimeout(() => {
        contentWrapper.style.opacity = "1"
        contentWrapper.style.transform = "translateY(0)"
        contentWrapper.classList.add("fade-in")
      }, 100)
    }
  }

  configurarBotaoVoltar()
  configurarBotaoLogin()
  adicionarEfeitosVisuais()
  configurarNavegacaoTeclado()
  configurarDeteccaoRecarregamento()
  configurarDeteccaoHistorico()
  adicionarAnimacoesEntrada()
  criarModalInteracao()

  console.log("Todas as funcionalidades da página foram inicializadas!")
})

window.addEventListener("error", (event) => {
  console.error("Erro na página:", event.error)
})
