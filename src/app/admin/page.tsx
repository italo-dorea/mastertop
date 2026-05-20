"use client";

import { useState } from "react";
import { Octokit } from "@octokit/rest";
import CryptoJS from "crypto-js";
import { Lock, Unlock, Save, Loader2, Plus, Trash2, Home as HomeIcon, Wrench, BarChart2 } from "lucide-react";
import servicosDataOriginal from "@/content/servicos.json";
import homeDataOriginal from "@/content/home.json";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [octokit, setOctokit] = useState<Octokit | null>(null);
  
  const [servicos, setServicos] = useState(servicosDataOriginal);
  const [home, setHome] = useState(homeDataOriginal);
  const [activeTab, setActiveTab] = useState<"home" | "servicos">("home");
  
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ text: "", type: "" });

  const REPO_OWNER = process.env.NEXT_PUBLIC_GITHUB_OWNER || "";
  const REPO_NAME = process.env.NEXT_PUBLIC_GITHUB_REPO || "";
  const ENCRYPTED_TOKEN = process.env.NEXT_PUBLIC_ENCRYPTED_GITHUB_TOKEN || "";

  // Helper to handle authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!ENCRYPTED_TOKEN) {
        alert("Token criptografado não configurado no ambiente.");
        return;
      }
      
      const bytes = CryptoJS.AES.decrypt(ENCRYPTED_TOKEN, password);
      const decryptedToken = bytes.toString(CryptoJS.enc.Utf8);
      
      if (decryptedToken && (decryptedToken.startsWith("github_pat_") || decryptedToken.startsWith("ghp_"))) {
        const client = new Octokit({ auth: decryptedToken });
        setOctokit(client);
        setIsAuthenticated(true);
        setPassword(""); // clear password from state
      } else {
        alert("Senha incorreta ou token inválido.");
      }
    } catch (err) {
      alert("Senha incorreta.");
    }
  };

  const handleSave = async () => {
    if (!octokit) return;
    setIsSaving(true);
    setSaveMessage({ text: "", type: "" });

    try {
      // 1. Save services
      const servicosPath = "src/content/servicos.json";
      const servicosContent = JSON.stringify(servicos, null, 2);
      let servicosSha = "";
      try {
        const response = await octokit.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: servicosPath,
        });
        if (!Array.isArray(response.data) && response.data.type === "file") {
          servicosSha = response.data.sha;
        }
      } catch (err) {
        console.log("servicos.json não existe no repo, será criado.");
      }

      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: servicosPath,
        message: "Update servicos.json via Admin Panel",
        content: Buffer.from(servicosContent).toString("base64"),
        sha: servicosSha || undefined,
      });

      // 2. Save home config
      const homePath = "src/content/home.json";
      const homeContent = JSON.stringify(home, null, 2);
      let homeSha = "";
      try {
        const response = await octokit.repos.getContent({
          owner: REPO_OWNER,
          repo: REPO_NAME,
          path: homePath,
        });
        if (!Array.isArray(response.data) && response.data.type === "file") {
          homeSha = response.data.sha;
        }
      } catch (err) {
        console.log("home.json não existe no repo, será criado.");
      }

      await octokit.repos.createOrUpdateFileContents({
        owner: REPO_OWNER,
        repo: REPO_NAME,
        path: homePath,
        message: "Update home.json via Admin Panel",
        content: Buffer.from(homeContent).toString("base64"),
        sha: homeSha || undefined,
      });

      setSaveMessage({ text: "Alterações salvas com sucesso! O site será atualizado em alguns minutos.", type: "success" });
    } catch (err: any) {
      setSaveMessage({ text: "Erro ao salvar: " + err.message, type: "error" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleServiceChange = (index: number, field: string, value: string) => {
    const newServicos = [...servicos];
    newServicos[index] = { ...newServicos[index], [field]: value };
    setServicos(newServicos);
  };

  const addService = () => {
    setServicos([...servicos, { id: `new-${Date.now()}`, title: "Novo Serviço", description: "", icon: "default" }]);
  };

  const removeService = (index: number) => {
    const newServicos = [...servicos];
    newServicos.splice(index, 1);
    setServicos(newServicos);
  };

  const handleHomeHeroChange = (field: string, value: string) => {
    setHome({
      ...home,
      hero: {
        ...home.hero,
        [field]: value,
      },
    });
  };

  const handleHomeStatChange = (index: number, field: "value" | "label", value: string) => {
    const newStats = [...home.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setHome({
      ...home,
      stats: newStats,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-2xl max-w-md w-full text-mastertop-dark">
          <div className="flex justify-center mb-6 text-mastertop-gold">
            <Lock size={48} />
          </div>
          <h1 className="text-2xl font-heading font-bold text-center text-mastertop-dark mb-6">Acesso Restrito</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Senha Mestra</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-mastertop-gold outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-mastertop-blue hover:bg-mastertop-gold text-white py-3 rounded-xl font-semibold transition-colors"
            >
              <Unlock size={18} /> Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pb-20 text-mastertop-dark">
      <div className="bg-slate-50 border-b border-slate-200 text-mastertop-dark py-6 shadow-md sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="font-heading font-bold text-2xl flex items-center gap-2">
            Painel Administrativo
          </h1>
          <button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-mastertop-gold hover:bg-mastertop-blue text-white px-6 py-2 rounded-xl font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
          >
            {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            Salvar Alterações
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8">
        {saveMessage.text && (
          <div className={`p-4 rounded-xl mb-6 font-medium ${saveMessage.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {saveMessage.text}
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex gap-4 mb-6 border-b border-slate-200 pb-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`px-4 py-2 rounded-lg font-heading font-medium flex items-center gap-2 transition-colors ${activeTab === "home" ? "bg-mastertop-gold text-white" : "hover:bg-slate-100 text-gray-600 hover:text-mastertop-dark"}`}
          >
            <HomeIcon size={18} /> Página Inicial (Home)
          </button>
          <button
            onClick={() => setActiveTab("servicos")}
            className={`px-4 py-2 rounded-lg font-heading font-medium flex items-center gap-2 transition-colors ${activeTab === "servicos" ? "bg-mastertop-gold text-white" : "hover:bg-slate-100 text-gray-600 hover:text-mastertop-dark"}`}
          >
            <Wrench size={18} /> Serviços
          </button>
        </div>

        {activeTab === "home" ? (
          <div className="space-y-6">
            {/* Hero Section Edit */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-heading font-bold text-mastertop-dark mb-6 flex items-center gap-2">
                Textos do Banner Principal (Hero)
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Título Principal</label>
                  <input 
                    type="text" 
                    value={home.hero.title} 
                    onChange={(e) => handleHomeHeroChange("title", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subtítulo</label>
                  <textarea 
                    value={home.hero.subtitle} 
                    onChange={(e) => handleHomeHeroChange("subtitle", e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Texto do Botão (CTA)</label>
                    <input 
                      type="text" 
                      value={home.hero.ctaText} 
                      onChange={(e) => handleHomeHeroChange("ctaText", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Link do Botão (CTA)</label>
                    <input 
                      type="text" 
                      value={home.hero.ctaLink} 
                      onChange={(e) => handleHomeHeroChange("ctaLink", e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Section Edit */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-heading font-bold text-mastertop-dark mb-6 flex items-center gap-2">
                Métricas e Indicadores
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {home.stats.map((stat, index) => (
                  <div key={index} className="p-4 border border-slate-200 bg-white rounded-xl space-y-4 shadow-sm">
                    <div className="text-sm font-semibold text-mastertop-gold">Indicador #{index + 1}</div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Valor (ex: 150+)</label>
                      <input 
                        type="text" 
                        value={stat.value} 
                        onChange={(e) => handleHomeStatChange(index, "value", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-xs focus:ring-2 focus:ring-mastertop-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-500 mb-1">Título/Descrição</label>
                      <input 
                        type="text" 
                        value={stat.label} 
                        onChange={(e) => handleHomeStatChange(index, "label", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-xs focus:ring-2 focus:ring-mastertop-gold outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-heading font-bold text-mastertop-dark">Catálogo de Serviços</h2>
              <button onClick={addService} className="text-mastertop-gold hover:text-mastertop-blue flex items-center gap-1 font-medium text-sm">
                <Plus size={18} /> Adicionar Serviço
              </button>
            </div>

            <div className="space-y-6">
              {servicos.map((servico, index) => (
                <div key={servico.id} className="p-6 border border-slate-200 rounded-xl relative group bg-white shadow-sm">
                  <button 
                    onClick={() => removeService(index)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remover Serviço"
                  >
                    <Trash2 size={20} />
                  </button>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ID (Identificador Único)</label>
                      <input 
                        type="text" 
                        value={servico.id} 
                        onChange={(e) => handleServiceChange(index, "id", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Ícone</label>
                      <select 
                        value={servico.icon}
                        onChange={(e) => handleServiceChange(index, "icon", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                      >
                        <option value="rig">Plataforma (Rig)</option>
                        <option value="bolt">Energia (Bolt)</option>
                        <option value="globe">Geotérmica (Globe)</option>
                        <option value="car">Automotiva (Car)</option>
                        <option value="default">Geral (Tools)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                      <input 
                        type="text" 
                        value={servico.title} 
                        onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm font-bold focus:ring-2 focus:ring-mastertop-gold outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
                      <textarea 
                        value={servico.description} 
                        onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 rounded-lg text-sm focus:ring-2 focus:ring-mastertop-gold outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-center text-sm text-slate-500 mt-12">
          Lembre-se: Ao clicar em Salvar, o GitHub recriará o site estático automaticamente. O processo pode levar de 1 a 3 minutos para aparecer no ar.
        </div>
      </div>
    </div>
  );
}
