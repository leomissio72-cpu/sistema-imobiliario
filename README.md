<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sistema Imobiliário</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <style>
    :root {
      --bg: #f4f6fb;
      --sidebar: #1a1f2e;
      --card: #ffffff;
      --muted: #64748b;
      --primary: #3b82f6;
      --accent: #2563eb;
      --success: #10b981;
      --warning: #f59e0b;
      --danger: #ef4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: #0f172a;
    }
    .app {
      display: flex;
      min-height: 100vh;
    }

    .sidebar {
      width: 260px;
      padding: 20px;
      background: var(--sidebar);
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 18px;
      transition: width 0.3s;
      flex-shrink: 0;
      z-index: 100;
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
    }
    .logo {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      flex-shrink: 0;
    }
    .brand-text h3 {
      font-size: 16px;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .brand-text small {
      font-size: 12px;
      color: var(--muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    nav {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 10px;
    }
    .nav-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
      font-weight: 600;
      text-align: left;
      width: 100%;
      min-height: 48px;
      transition: background 0.2s, color 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .nav-btn .material-icons {
      font-size: 24px;
      flex-shrink: 0;
    }
    .nav-btn .label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .nav-btn:hover {
      background: rgba(255, 255, 255, 0.05);
    }
    .nav-btn.active {
      background: rgba(59, 130, 246, 0.2);
      color: #60a5fa;
    }
    .sidebar-footer {
      margin-top: auto;
      color: var(--muted);
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .workspace {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .topbar {
      height: 68px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      background: var(--card);
      border-bottom: 1px solid rgba(15, 23, 42, 0.06);
    }
    .page-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
    }
    .user-area {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      background: linear-gradient(135deg, var(--primary), var(--accent));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .main-area {
      padding: 24px;
      overflow: auto;
    }
    .container {
      background: var(--card);
      border-radius: 12px;
      padding: 24px;
      border: 1px solid rgba(15, 23, 42, 0.06);
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
      margin-bottom: 20px;
    }
    h2 {
      margin: 0 0 16px 0;
      color: #0f172a;
      font-size: 18px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
    }
    .col-full {
      grid-column: 1 / -1;
    }
    label {
      display: block;
      margin-bottom: 6px;
      color: var(--muted);
      font-weight: 600;
      font-size: 13px;
    }
    input, select, textarea {
      width: 100%;
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid rgba(15, 23, 42, 0.1);
      background: #fff;
      color: #0f172a;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      transition: border-color 0.2s;
    }
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--primary);
    }
    textarea {
      min-height: 100px;
      resize: vertical;
    }
    .actions {
      display: flex;
      gap: 10px;
      align-items: center;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    .btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    .btn.primary {
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: #fff;
    }
    .btn.ghost {
      background: transparent;
      border: 1px solid rgba(15, 23, 42, 0.1);
      color: #0f172a;
    }
    .btn.danger {
      background: var(--danger);
      color: #fff;
    }
    .btn.success {
      background: var(--success);
      color: #fff;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 16px;
    }
    th, td {
      padding: 12px;
      border-bottom: 1px solid rgba(15, 23, 42, 0.06);
      text-align: left;
      font-size: 14px;
    }
    th {
      color: var(--muted);
      font-weight: 700;
      background: rgba(59, 130, 246, 0.03);
    }
    td .btn {
      padding: 6px 10px;
      font-size: 12px;
    }
    .no-data {
      color: var(--muted);
      padding: 40px;
      text-align: center;
    }
    .alert {
      padding: 12px 16px;
      border-radius: 8px;
      margin-bottom: 16px;
      font-size: 14px;
    }
    .alert.success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #10b981;
    }
    .alert.error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #ef4444;
    }
    .status-badge {
      display: inline-block;
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
    }
    .status-disponivel { background: #d1fae5; color: #065f46; }
    .status-alugado { background: #dbeafe; color: #1e40af; }
    .status-vendido { background: #fce7f3; color: #9f1239; }
    .status-reservado { background: #fef3c7; color: #92400e; }

    .card-imovel {
      background: #fff;
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
      transition: all 0.2s;
    }
    .card-imovel:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    .card-imovel h3 {
      margin: 0 0 8px 0;
      color: #0f172a;
      font-size: 16px;
    }
    .card-imovel p {
      margin: 4px 0;
      color: var(--muted);
      font-size: 13px;
    }
    .card-imovel .price {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary);
      margin: 8px 0;
    }

    .upload-box {
      border: 2px dashed rgba(15, 23, 42, 0.2);
      border-radius: 12px;
      padding: 30px;
      text-align: center;
      background: rgba(59, 130, 246, 0.02);
      cursor: pointer;
      transition: all 0.3s;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .upload-box:hover {
      border-color: var(--primary);
      background: rgba(59, 130, 246, 0.05);
    }
    .upload-box.dragover {
      border-color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }
    .preview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 12px;
      margin-top: 16px;
    }
    .preview-item {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      border: 2px solid rgba(15, 23, 42, 0.08);
      aspect-ratio: 1;
    }
    .preview-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .preview-item .remove-btn {
      position: absolute;
      top: 4px;
      right: 4px;
      background: var(--danger);
      color: white;
      border: none;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 16px;
      opacity: 0.9;
      transition: opacity 0.2s;
    }
    .preview-item .remove-btn:hover {
      opacity: 1;
    }

    .upload-area {
      border: 2px dashed rgba(15, 23, 42, 0.2);
      border-radius: 12px;
      padding: 40px;
      text-align: center;
      background: rgba(59, 130, 246, 0.02);
      cursor: pointer;
      transition: all 0.3s;
    }
    .upload-area:hover {
      border-color: var(--primary);
      background: rgba(59, 130, 246, 0.05);
    }
    .upload-area.dragover {
      border-color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
      margin-top: 20px;
    }
    .photo-card {
      position: relative;
      background: #fff;
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.2s;
    }
    .photo-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    .photo-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }
    .photo-info {
      padding: 12px;
    }
    .photo-info .price {
      font-size: 16px;
      font-weight: 700;
      color: var(--primary);
      margin-bottom: 4px;
    }
    .photo-info .description {
      font-size: 13px;
      color: var(--muted);
      margin-bottom: 8px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .photo-actions {
      display: flex;
      gap: 8px;
      padding: 0 12px 12px;
    }
    .photo-actions .btn {
      flex: 1;
      justify-content: center;
      padding: 6px 8px;
      font-size: 12px;
    }
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .modal.active {
      display: flex;
    }
    .modal-content {
      background: var(--card);
      border-radius: 12px;
      padding: 24px;
      max-width: 500px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .modal-header h3 {
      margin: 0;
      font-size: 18px;
    }
    .modal-close {
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: var(--muted);
      padding: 0;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      transition: all 0.2s;
    }
    .modal-close:hover {
      background: rgba(15, 23, 42, 0.05);
      color: #0f172a;
    }
    .modal img {
      width: 100%;
      border-radius: 8px;
      margin-bottom: 16px;
    }

    /* --- CSS do Carrossel (Visualização de Cliente) --- */

    .property-view-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .carousel-container {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      margin-bottom: 20px;
      background: #000;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.4s ease-in-out;
    }

    .carousel-slide {
      flex-shrink: 0;
      width: 100%;
      aspect-ratio: 16 / 9; /* Proporção widescreen para imagens */
      position: relative;
    }

    .carousel-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .carousel-caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 10px 15px;
      font-size: 14px;
    }

    .carousel-nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(0, 0, 0, 0.4);
      color: white;
      border: none;
      padding: 12px;
      cursor: pointer;
      z-index: 50;
      font-size: 24px;
      line-height: 1;
      transition: background 0.2s;
    }

    .carousel-nav-btn:hover {
      background: rgba(0, 0, 0, 0.7);
    }

    .carousel-nav-btn.prev {
      left: 10px;
      border-radius: 50%;
    }

    .carousel-nav-btn.next {
      right: 10px;
      border-radius: 50%;
    }

    .property-details .detail-item {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      border-bottom: 1px dashed rgba(15, 23, 42, 0.1);
      font-size: 15px;
    }

    .property-details .detail-item strong {
      color: #0f172a;
    }

    .property-details .detail-item span {
      color: var(--muted);
    }


    @media (max-width: 768px) {
      .sidebar {
        width: 70px;
        padding: 16px 8px;
      }
      .brand-text, .sidebar-footer, .nav-btn .label {
        display: none;
      }
      .nav-btn {
        justify-content: center;
        padding: 12px 8px;
        gap: 0;
      }
      .brand {
        justify-content: center;
        margin-bottom: 10px;
      }
      .logo {
        margin: 0 auto;
      }
      .topbar {
        padding: 0 16px;
      }
      .page-title {
        font-size: 16px;
      }
      .user-info {
        display: none;
      }
      .main-area {
        padding: 16px;
      }
      .container {
        padding: 16px;
      }
      .grid {
        grid-template-columns: 1fr;
      }
      table {
        font-size: 12px;
      }
      th, td {
        padding: 8px;
      }
      .gallery-grid {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
      .upload-area, .upload-box {
        padding: 30px 20px;
      }
      .preview-grid {
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
      }
    }

    @media (max-width: 480px) {
      .actions {
        flex-direction: column;
        width: 100%;
      }
      .btn {
        width: 100%;
        justify-content: center;
      }
      table {
        display: block;
        overflow-x: auto;
      }
      .gallery-grid {
        grid-template-columns: 1fr;
      }
      .modal-content {
        padding: 16px;
      }
    }

    .tab-content {
      display: none;
    }
    .tab-content.active {
      display: block;
    }
  </style>
</head>
<body>
  <div class="app">
    <aside class="sidebar">
      <div class="brand">
        <div class="logo">🏠</div>
        <div class="brand-text">
          <h3>Imobiliária Pro</h3>
          <small>Sistema de Gestão</small>
        </div>
        </div>
        <nav>
          <button class="nav-btn active" data-tab="cadastro">
            <span class="material-icons">add_home</span>
            <span class="label">Cadastro</span>
          </button>
          <button class="nav-btn" data-tab="imoveis">
            <span class="material-icons">home_work</span>
            <span class="label">Imóveis</span>
          </button>
          <button class="nav-btn" data-tab="galeria">
            <span class="material-icons">photo_library</span>
            <span class="label">Galeria</span>
          </button>
          <button class="nav-btn" data-tab="clientes">
            <span class="material-icons">people</span>
            <span class="label">Clientes</span>
          </button>
          <button class="nav-btn" data-tab="visitas">
            <span class="material-icons">event</span>
            <span class="label">Visitas</span>
          </button>
          <button class="nav-btn" data-tab="ferramentas">
            <span class="material-icons">calculate</span>
            <span class="label">Ferramentas</span>
          </button>
          <button class="nav-btn" data-tab="visualizacao">
            <span class="material-icons">visibility</span>
            <span class="label">Visualização Cliente</span>
          </button>
        </nav>
        <div class="sidebar-footer">
          <div style="font-size:12px;margin-top:8px">
            <strong>Armazenamento:</strong> Local
          </div>
          <div style="font-size:11px;color:rgba(255,255,255,0.5);margin-top:4px">
            Dados salvos no navegador
          </div>
        </div>
    </aside>

    <div class="workspace">
      <div class="topbar">
        <div class="page-title" id="pageTitle">Cadastro de Imóvel</div>
        <div class="user-area">
          <div class="user-info" style="text-align:right">
            <div style="font-weight:700;font-size:14px">Sistema Local</div>
            <div style="font-size:12px;color:var(--muted)">Gestão Imobiliária</div>
          </div>
          <div class="avatar">🏢</div>
        </div>
      </div>

      <main class="main-area">
        <section id="cadastro" class="tab-content active">
          <div class="container">
            <h2>Cadastro de Imóvel</h2>
            <div id="alertCadastro"></div>
            <form id="formCadastro">
              <div class="grid">
                <div>
                  <label>Tipo de Imóvel *</label>
                  <select name="tipo" required>
                    <option value="">Selecione...</option>
                    <option value="Casa">Casa</option>
                    <option value="Apartamento">Apartamento</option>
                    <option value="Terreno">Terreno</option>
                    <option value="Comercial">Comercial</option>
                    <option value="Rural">Rural</option>
                    <option value="Galpão">Galpão</option>
                    <option value="Cobertura">Cobertura</option>
                  </select>
                </div>
                <div>
                  <label>Finalidade *</label>
                  <select name="finalidade" required>
                    <option value="Venda">Venda</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Venda/Aluguel">Venda/Aluguel</option>
                  </select>
                </div>
                <div class="col-full">
                  <label>Endereço Completo *</label>
                  <input name="endereco" type="text" required placeholder="Rua, nº, bairro, cidade - UF">
                </div>
                <div>
                  <label>CEP</label>
                  <input name="cep" type="text" placeholder="00000-000">
                </div>
                <div>
                  <label>Área (m²)</label>
                  <input name="area" type="number" step="0.01" placeholder="Ex: 120.50">
                </div>
                <div>
                  <label>Quartos</label>
                  <input name="quartos" type="number" min="0" placeholder="Ex: 3">
                </div>
                <div>
                  <label>Banheiros</label>
                  <input name="banheiros" type="number" min="0" placeholder="Ex: 2">
                </div>
                <div>
                  <label>Vagas de Garagem</label>
                  <input name="vagas" type="number" min="0" placeholder="Ex: 2">
                </div>
                <div>
                  <label>Valor (R$) *</label>
                  <input name="valor" type="number" step="0.01" required placeholder="0.00">
                </div>
                <div>
                  <label>Condomínio (R$)</label>
                  <input name="condominio" type="number" step="0.01" placeholder="0.00">
                </div>
                <div>
                  <label>IPTU (R$)</label>
                  <input name="iptu" type="number" step="0.01" placeholder="0.00">
                </div>
                <div>
                  <label>Status *</label>
                  <select name="status" required>
                    <option value="Disponível">Disponível</option>
                    <option value="Alugado">Alugado</option>
                    <option value="Vendido">Vendido</option>
                    <option value="Reservado">Reservado</option>
                  </select>
                </div>
                <div>
                  <label>Proprietário</label>
                  <input name="proprietario" type="text" placeholder="Nome do proprietário">
                </div>
                <div class="col-full">
                  <label>Características / Observações</label>
                  <textarea name="observacoes" placeholder="Ex: Piscina, churrasqueira, armários embutidos, etc."></textarea>
                </div>

                <div class="col-full">
                  <label>Fotos do Imóvel</label>
                  <div class="upload-box" id="uploadBoxCadastro">
                    <span class="material-icons" style="font-size:48px;color:var(--primary);margin-bottom:12px">add_photo_alternate</span>
                    <p style="font-size:16px;font-weight:600;margin-bottom:8px;color:#0f172a">Clique ou arraste fotos aqui</p>
                    <p style="font-size:13px;color:var(--muted)">JPG, PNG, GIF (máx. 5MB cada)</p>
                    <input type="file" id="fileInputCadastro" accept="image/*" multiple style="display:none">
                </div>
                  <div class="preview-grid" id="previewGridCadastro"></div>
                </div>
              </div>
              <div class="actions">
                <button type="submit" class="btn primary">
                  <span class="material-icons">save</span> Salvar Imóvel
                </button>
                <button type="button" class="btn ghost" id="btnLimparForm">
                  <span class="material-icons">clear</span> Limpar Formulário
                </button>
                <button type="button" class="btn success" id="btnExportPdf">
                  <span class="material-icons">picture_as_pdf</span> Exportar Ficha (PDF)
                </button>
              </div>
            </form>
          </div>
        </section>

        <section id="imoveis" class="tab-content">
          <div class="container">
            <h2>Imóveis Cadastrados</h2>
            <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap">
              <input type="text" id="searchImoveis" placeholder="Pesquisar imóveis..." style="flex:1;min-width:200px">
              <button class="btn primary" id="btnRefreshImoveis">
                <span class="material-icons">refresh</span> Atualizar
              </button>
              <button class="btn success" id="btnExportCsv">
                <span class="material-icons">download</span> Exportar CSV
              </button>
            </div>
            <div id="listaImoveis"></div>
          </div>
        </section>

        <section id="galeria" class="tab-content">
          <div class="container">
            <h2>Galeria de Fotos (<span id="photoCount">0</span> fotos)</h2>
            <div id="alertGaleria"></div>
            <input type="text" id="searchGaleria" placeholder="Pesquisar fotos..." style="margin-bottom:16px">
            <div class="upload-area" id="uploadArea">
              <span class="material-icons" style="font-size:64px;color:var(--primary);margin-bottom:16px">cloud_upload</span>
              <h3 style="margin:0 0 8px 0">Adicionar Fotos à Galeria</h3>
              <p style="color:var(--muted);font-size:14px">Clique ou arraste imagens aqui</p>
              <input type="file" id="fileInput" accept="image/*" multiple style="display:none">
            </div>
            <div class="gallery-grid" id="galleryGrid"></div>
          </div>
        </section>

        <section id="clientes" class="tab-content">
          <div class="container">
            <h2>Cadastro de Clientes</h2>
            <div id="alertClientes"></div>
            <form id="formClientes">
              <div class="grid">
                <div>
                  <label>Nome Completo *</label>
                  <input name="nome" type="text" required>
                </div>
                <div>
                  <label>CPF/CNPJ</label>
                  <input name="documento" type="text">
                </div>
                <div>
                  <label>Telefone *</label>
                  <input name="telefone" type="tel" required>
                </div>
                <div>
                  <label>E-mail</label>
                  <input name="email" type="email">
                </div>
                <div>
                  <label>Interesse</label>
                  <select name="interesse">
                    <option value="Compra">Compra</option>
                    <option value="Aluguel">Aluguel</option>
                    <option value="Venda">Venda</option>
                  </select>
                </div>
                <div class="col-full">
                  <label>Observações</label>
                  <textarea name="observacoes"></textarea>
                </div>
              </div>
              <div class="actions">
                <button type="submit" class="btn primary">
                  <span class="material-icons">person_add</span> Salvar Cliente
                </button>
                <button type="button" class="btn ghost" id="btnLimparCliente">
                  <span class="material-icons">clear</span> Limpar
                </button>
              </div>
            </form>
          </div>
          <div class="container">
            <h2>Clientes Cadastrados</h2>
            <div id="listaClientes"></div>
          </div>
        </section>

        <section id="visitas" class="tab-content">
          <div class="container">
            <h2>Agendar Visita</h2>
            <div id="alertVisitas"></div>
            <form id="formVisitas">
              <div class="grid">
                <div>
                  <label>Imóvel *</label>
                  <select name="imovelId" id="selectImovel" required>
                    <option value="">Selecione um imóvel</option>
                  </select>
                </div>
                <div>
                  <label>Cliente *</label>
                  <select name="clienteId" id="selectCliente" required>
                    <option value="">Selecione um cliente</option>
                  </select>
                </div>
                <div>
                  <label>Data *</label>
                  <input name="data" type="date" required>
                </div>
                <div>
                  <label>Horário *</label>
                  <input name="horario" type="time" required>
                </div>
                <div class="col-full">
                  <label>Observações</label>
                  <textarea name="observacoes"></textarea>
                </div>
              </div>
              <div class="actions">
                <button type="submit" class="btn primary">
                  <span class="material-icons">event</span> Agendar Visita
                </button>
                <button type="button" class="btn ghost" id="btnLimparVisita">
                  <span class="material-icons">clear</span> Limpar
                </button>
              </div>
            </form>
          </div>
          <div class="container">
            <h2>Visitas Agendadas</h2>
            <div id="listaVisitas"></div>
          </div>
        </section>

        <section id="ferramentas" class="tab-content">
          <div class="container">
            <h2>Ferramentas Úteis</h2>
            <div class="grid">
              <div class="container" style="margin:0">
                <h3 style="font-size:16px;margin-bottom:12px">💰 Simulador de Financiamento</h3>
                <div style="margin-bottom:10px">
                  <label>Valor do Imóvel (R$)</label>
                  <input type="number" id="valorImovel" placeholder="0.00" step="0.01">
                </div>
                <div style="margin-bottom:10px">
                  <label>Entrada (R$)</label>
                  <input type="number" id="entrada" placeholder="0.00" step="0.01">
                </div>
                <div style="margin-bottom:10px">
                  <label>Taxa de Juros (% ao ano)</label>
                  <input type="number" id="taxaJuros" placeholder="8.5" step="0.01">
                </div>
                <div style="margin-bottom:10px">
                  <label>Prazo (meses)</label>
                  <input type="number" id="prazo" placeholder="360">
                </div>
                <button class="btn primary" onclick="calcularFinanciamento()">
                  <span class="material-icons">calculate</span> Calcular
                </button>
                <div id="resultadoFinanciamento" style="margin-top:16px;padding:12px;background:rgba(59,130,246,0.05);border-radius:8px;display:none">
                  <strong>Resultado:</strong>
                  <div style="margin-top:8px;font-size:14px" id="resultadoTexto"></div>
                </div>
              </div>

              <div class="container" style="margin:0">
                <h3 style="font-size:16px;margin-bottom:12px">📊 Estatísticas</h3>
                <div id="estatisticas"></div>
              </div>
            </div>
          </div>
        </section>

        <section id="visualizacao" class="tab-content">
          <div class="property-view-container">
            <div class="container">
              <h2 id="propertyViewTitle">Visualização de Imóvel</h2>
              <div id="propertyViewContent">
                <p class="no-data">Selecione um imóvel na aba "Imóveis Cadastrados" e clique em "Visualizar Cliente" para carregar aqui.</p>
              </div>
            </div>
          </div>
        </section>
              </main>
    </div>
  </div>

  <div class="modal" id="editModal">
    <div class="modal-content">
      <div class="modal-header">
        <h3>Editar Foto</h3>
        <button class="modal-close">
          <span class="material-icons">close</span>
        </button>
      </div>
      <img id="modalImage" src="" alt="Foto">
      <div>
        <label>Valor (R$)</label>
        <input type="number" id="modalValor" step="0.01" placeholder="Ex: 350000">
      </div>
      <div style="margin-top:12px">
        <label>Descrição</label>
        <textarea id="modalDescricao" placeholder="Descreva o imóvel..."></textarea>
      </div>
      <div class="actions">
        <button class="btn primary" onclick="salvarEdicao()">
          <span class="material-icons">save</span> Salvar
        </button>
        <button class="btn ghost" onclick="fecharModalEdicao()">
          Cancelar
        </button>
      </div>
    </div>
  </div>

  <script>
    const IMOVEIS_KEY = 'imoveis_data';
    const CLIENTES_KEY = 'clientes_data';
    const VISITAS_KEY = 'visitas_data';
    const FOTOS_KEY = 'fotos_data';

    function salvar(key, data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error('Erro ao salvar dados:', e);
        alert('Erro ao salvar dados. Verifique o espaço disponível no navegador.');
      }
    }

    function carregar(key) {
      try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
      } catch (e) {
        console.error('Erro ao carregar dados:', e);
        return [];
      }
    }

    let fotosCadastro = [];
    let fotoEditando = null;

    function mostrarAlerta(containerId, mensagem, tipo) {
      const container = document.getElementById(containerId);
      if (container) {
        container.innerHTML = `<div class="alert ${tipo}">${mensagem}</div>`;
        setTimeout(() => {
          container.innerHTML = '';
        }, 5000);
      }
    }

    function formatarMoeda(valor) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
      }).format(valor);
    }

    function gerarIdUnico() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    }

    function getBadge(status) {
      return `<span class="status-badge status-${status.toLowerCase().replace(/[^a-z0-9]/g, '')}">${status}</span>`;
    }

    const pageTitles = {
      'cadastro': 'Cadastro de Imóvel',
      'imoveis': 'Imóveis Cadastrados',
      'galeria': 'Galeria de Fotos',
      'clientes': 'Clientes',
      'visitas': 'Visitas Agendadas',
      'ferramentas': 'Ferramentas',
      'visualizacao': 'Visualização Cliente'
    };

    function trocarAba(tabId) {
      document.querySelectorAll('.nav-btn').forEach(b => {
        b.classList.remove('active');
      });

      const btnAtivo = document.querySelector(`.nav-btn[data-tab="${tabId}"]`);
      if (btnAtivo) {
        btnAtivo.classList.add('active');
      }

      document.querySelectorAll('.tab-content').forEach(t => {
        t.classList.remove('active');
      });

      const abaAtiva = document.getElementById(tabId);
      if (abaAtiva) {
        abaAtiva.classList.add('active');
        document.getElementById('pageTitle').textContent = pageTitles[tabId];
        switch(tabId) {
          case 'imoveis':
            listarImoveis();
            break;
          case 'galeria':
            listarFotos();
            break;
          case 'clientes':
            listarClientes();
            break;
          case 'visitas':
            preencherSelectsVisitas();
            listarVisitas();
            break;
            case 'ferramentas':
                calcularEstatisticas();
                break;
            // A aba 'visualizacao' é carregada via botão na listagem de imóveis
        }
      }
    }

    // --- LÓGICA DO CARROSSEL ---
    
    let currentSlideIndex = 0;

    function nextSlide(imovelId) {
        const track = document.getElementById(`carouselTrack-${imovelId}`);
        if (!track) return;
        const slides = track.children.length;
        currentSlideIndex = (currentSlideIndex + 1) % slides;
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        updateCaption(imovelId);
    }

    function prevSlide(imovelId) {
        const track = document.getElementById(`carouselTrack-${imovelId}`);
        if (!track) return;
        const slides = track.children.length;
        // Garante que o índice não seja negativo
        currentSlideIndex = (currentSlideIndex - 1 + slides) % slides;
        track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
        updateCaption(imovelId);
    }

    function updateCaption(imovelId) {
        const imovel = carregar(IMOVEIS_KEY).find(i => i.id === imovelId);
        if (!imovel || !imovel.fotos || imovel.fotos.length === 0) return;
        
        const captionElement = document.getElementById(`carouselCaptionText-${imovelId}`);
        if (captionElement) {
            const fotoInfo = imovel.fotos[currentSlideIndex];
            // Se tiver descrição, usa ela. Senão, usa um texto padrão.
            const legenda = fotoInfo.descricao || `Foto ${currentSlideIndex + 1} de ${imovel.fotos.length}`;
            captionElement.textContent = legenda;
        }
    }

    // --- FUNÇÃO DE VISUALIZAÇÃO DE CLIENTE ---

    function carregarVisualizacaoCliente(imovelId) {
        const imoveis = carregar(IMOVEIS_KEY);
        const imovel = imoveis.find(i => i.id === imovelId);
        const contentDiv = document.getElementById('propertyViewContent');
        
        if (!imovel) {
            contentDiv.innerHTML = '<p class="no-data">Imóvel não encontrado.</p>';
            trocarAba('visualizacao');
            return;
        }
        
        currentSlideIndex = 0; // Resetar o carrossel ao carregar um novo imóvel
        
        let carouselHTML = '';
        
        if (imovel.fotos && imovel.fotos.length > 0) {
            const slidesHTML = imovel.fotos.map((foto, index) => {
                // A legenda na visualização do cliente virá do JS (updateCaption)
                return `
                    <div class="carousel-slide">
                        <img src="${foto.url}" alt="${imovel.tipo} em ${imovel.endereco}">
                    </div>
                `;
            }).join('');
            
            carouselHTML = `
                <div class="carousel-container">
                    <div class="carousel-track" id="carouselTrack-${imovelId}" style="width: ${imovel.fotos.length * 100}%;">
                        ${slidesHTML}
                    </div>
                    <div class="carousel-caption">
                        <span id="carouselCaptionText-${imovelId}"></span>
                    </div>
                    ${imovel.fotos.length > 1 ? `
                        <button class="carousel-nav-btn prev" onclick="prevSlide('${imovelId}')">
                            <span class="material-icons">chevron_left</span>
                        </button>
                        <button class="carousel-nav-btn next" onclick="nextSlide('${imovelId}')">
                            <span class="material-icons">chevron_right</span>
                        </button>
                    ` : ''}
                </div>
            `;
        } else {
            carouselHTML = `
                <div class="alert error">
                    <span class="material-icons" style="vertical-align: middle;">warning</span>
                    Este imóvel não possui fotos cadastradas.
                </div>
            `;
        }
        
        contentDiv.innerHTML = `
            ${carouselHTML}
            
            <div class="container" style="margin-bottom: 20px;">
                <h3 style="font-size: 24px; margin-bottom: 8px;">${imovel.tipo} - ${imovel.finalidade}</h3>
                <p style="font-size: 18px; font-weight: 700; color: var(--primary); margin-bottom: 12px;">
                    ${formatarMoeda(imovel.valor)} ${imovel.finalidade.includes('Aluguel') ? '/ Mês' : ''}
                </p>
                <p style="font-size: 16px; color: #0f172a; margin-bottom: 20px;">
                    <span class="material-icons" style="font-size: 18px; vertical-align: middle;">location_on</span>
                    ${imovel.endereco}
                </p>
                
                <h4 style="font-size: 18px; margin-bottom: 10px; border-bottom: 1px solid rgba(15, 23, 42, 0.1);">Detalhes Principais</h4>
                <div class="property-details">
                    <div class="detail-item"><strong>Tipo:</strong> <span>${imovel.tipo}</span></div>
                    <div class="detail-item"><strong>Status:</strong> <span>${getBadge(imovel.status)}</span></div>
                    <div class="detail-item"><strong>Área:</strong> <span>${imovel.area || 'N/A'} m²</span></div>
                    <div class="detail-item"><strong>Quartos:</strong> <span>${imovel.quartos || 0}</span></div>
                    <div class="detail-item"><strong>Banheiros:</strong> <span>${imovel.banheiros || 0}</span></div>
                    <div class="detail-item"><strong>Vagas:</strong> <span>${imovel.vagas || 0}</span></div>
                </div>

                ${imovel.observacoes ? `
                    <h4 style="font-size: 18px; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid rgba(15, 23, 42, 0.1);">Descrição</h4>
                    <p style="font-size: 15px; color: #0f172a; line-height: 1.6;">${imovel.observacoes}</p>
                ` : ''}

                <div class="actions">
                    <button class="btn success" onclick="window.print()">
                        <span class="material-icons">print</span> Imprimir Ficha
                    </button>
                    <button class="btn primary" onclick="alert('Solicitação de Visita enviada! (Simulação)')">
                        <span class="material-icons">event_available</span> Agendar Visita
                    </button>
                </div>
            </div>
        `;

        trocarAba('visualizacao');
        
        if (imovel.fotos && imovel.fotos.length > 0) {
            updateCaption(imovelId); // Define a legenda da primeira imagem
        }
    }

    // --- OUTRAS FUNÇÕES (DELETAR, LISTAR, ETC.) ---

    // Função de Listar Imóveis (ATUALIZADA com botão de Visualização)
    function listarImoveis(termoPesquisa = '') {
        // ... (Seu código de listar Imóveis original) ...
        // APENAS ATUALIZANDO O TRECHO DA TABELA:

        let imoveis = carregar(IMOVEIS_KEY);
        const listaDiv = document.getElementById('listaImoveis');
        listaDiv.innerHTML = '';
        
        if (termoPesquisa) {
            const termo = termoPesquisa.toLowerCase();
            imoveis = imoveis.filter(i => 
                i.endereco.toLowerCase().includes(termo) ||
                i.tipo.toLowerCase().includes(termo) ||
                i.proprietario.toLowerCase().includes(termo)
            );
        }

        if (imoveis.length === 0) {
            listaDiv.innerHTML = '<p class="no-data">Nenhum imóvel cadastrado ou encontrado.</p>';
            return;
        }

        let tableHTML = `
            <table class="table-auto">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Endereço</th>
                        <th>Tipo/Finalidade</th>
                        <th>Valor (R$)</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
        `;

        imoveis.forEach(imovel => {
            tableHTML += `
                <tr>
                    <td>${imovel.id.substring(0, 6)}...</td>
                    <td>${imovel.endereco}</td>
                    <td>${imovel.tipo} (${imovel.finalidade})</td>
                    <td>${formatarMoeda(imovel.valor)}</td>
                    <td>${getBadge(imovel.status)}</td>
                    <td>
                        <button class="btn primary" onclick="abrirEdicaoImovel('${imovel.id}')">
                            <span class="material-icons" style="font-size:16px">edit</span> Editar
                        </button>
                        <button class="btn danger" onclick="deletarImovel('${imovel.id}')" style="margin-left:8px">
                            <span class="material-icons" style="font-size:16px">delete</span>
                        </button>
                        <button class="btn success" style="margin-left:8px" onclick="carregarVisualizacaoCliente('${imovel.id}')">
                            <span class="material-icons" style="font-size:16px">visibility</span> Cliente
                        </button>
                    </td>
                </tr>
            `;
        });

        tableHTML += '</tbody></table>';
        listaDiv.innerHTML = tableHTML;
    }
    // ... (O restante da sua função listarImoveis e outras funções originais) ...

    // O restante das suas funções JavaScript devem seguir aqui.
    // Para manter a resposta compacta, estou deixando apenas a parte ATUALIZADA/NOVA.
    // Garanta que você cole TODO o seu código JS original e substitua/adicione as funções de Carrossel/Visualização acima.

    // --- FUNÇÕES FALTANTES (COMPLETANDO OS GATILHOS) ---
    // Você deve ter as seguintes funções completas:
    // - processarCadastroImovel
    // - deletarImovel
    // - abrirEdicaoImovel
    // - processarEdicaoImovel
    // - limparFormulario
    // - exportarFichaPdf
    // - setupDragAndDrop (e helpers)
    // - listarFotos
    // - deletarFoto
    // - abrirModalEdicao (galeria)
    // - fecharModalEdicao (galeria)
    // - salvarEdicao (galeria)
    // - listarClientes
    // - processarCadastroCliente
    // - deletarCliente
    // - preencherSelectsVisitas
    // - processarAgendamentoVisita
    // - listarVisitas
    // - deletarVisita
    // - calcularFinanciamento
    // - calcularEstatisticas
    // - initApp (para iniciar os event listeners)


    // ... (O CÓDIGO JavaScript COMPLETO ORIGINAL VAI AQUI) ...
    
    // --- FUNÇÃO initApp (INÍCIO DA APLICAÇÃO) ---
    
    function initApp() {
        // Event Listeners para a Navegação
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                trocarAba(btn.dataset.tab);
            });
        });

        // Configurações de Cadastro (Formulário, Upload, Limpar)
        // Você deve ter todos os EventListeners aqui:
        // document.getElementById('formCadastro').addEventListener('submit', processarCadastroImovel);
        // document.getElementById('uploadBoxCadastro').addEventListener('click', () => { ... });
        // etc...

        // Chamada Inicial
        listarImoveis();
        calcularEstatisticas();
    }
    
    // initApp(); // Descomente esta linha se ela não estiver no seu código original

  </script>
</body>
</html>
