// client/src/App.tsx (ou onde estiver seu App.tsx)
import React from 'react';

// Seus ícones SVGs foram incluídos no código, mas o ideal seria usar uma biblioteca de ícones real.

// Definição dos itens de navegação (Menu Principal)
const navItems = [
    { name: 'Cadastro', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
    )}, 
    { name: 'Imóveis', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v2m7-7h.01M7 16h.01"></path></svg>
    )}, 
    { name: 'Galeria', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    )}, 
    { name: 'Clientes', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h.01M10 11H6a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2v-6a2 2 0 00-2-2zm-6 0h.01M17 8h.01M10 4h.01m-3 7h.01M17 14h.01"></path></svg>
    )}, 
    { name: 'Visitas', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    )}, 
    { name: 'Ferramentas', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 8h.01m-6.938 4h13.856M5.012 10.5h13.974c.487 0 .863.456.685.91a4.99 4.99 0 01-.137.288c-.628 1.48-1.554 2.802-2.738 3.903-1.184 1.101-2.508 1.954-3.903 2.508C10.42 18.067 9.53 18 8.5 18"></path></svg>
    )}, 
    { name: 'Visualização Cliente', icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
    )}
];

function App() {
  return (
    // Fundo Azul Claro (bg-blue-50) e tipografia moderna
    <div className="min-h-screen bg-blue-50 font-sans antialiased">

      {/* 1. Cabeçalho Superior (Navbar) */}
      <header className="bg-blue-800 text-white p-4 shadow-xl">
        <div className="mx-auto max-w-7xl flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Imobiliária Pro</h1>
            <p className="text-sm text-blue-300 mt-1">Sistema de Gestão</p>
          </div>
          {/* Botão de Perfil/Usuário */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 3a10 10 0 11-20 0 10 10 0 0120 0z"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Barra de Navegação Horizontal (Menu Principal) */}
      <nav className="bg-white p-4 shadow-md mt-6 mx-auto max-w-7xl rounded-lg">
        <div className="flex justify-around items-center">
            {navItems.map((item, index) => (
                <button
                    key={index}
                    className="flex flex-col items-center p-2 rounded-lg text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition duration-150 ease-in-out"
                >
                    {item.icon}
                    <span className="text-xs font-medium mt-1 whitespace-nowrap">{item.name}</span>
                </button>
            ))}
        </div>
      </nav>

      {/* 3. Conteúdo Principal */}
      <main className="p-4 mx-auto max-w-7xl">
        <h2 className="text-2xl font-semibold mt-10 mb-4 text-blue-800">Cadastro de Imóvel</h2>

        {/* Exemplo de Card de Conteúdo */}
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-medium mb-4 text-gray-700">Detalhes do Novo Imóvel</h3>
            <p className="text-gray-600">
                Aqui você pode começar a adicionar os campos do seu formulário (Rua, Cidade, Preço, etc.)
            </p>
            {/* O conteúdo do seu formulário "Cadastro de Imóvel" virá aqui */}
        </div>
      </main>
    </div>
  );
}

export default App;
