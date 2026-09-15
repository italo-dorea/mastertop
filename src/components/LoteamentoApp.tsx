"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  X,
  Search,
  MessageCircle,
  Globe,
  Sun,
  Droplets,
  Recycle,
  Leaf,
  Satellite,
  ShieldCheck,
  Camera,
  Route,
  UtensilsCrossed,
  Users,
  TreePine,
} from "lucide-react";
import lotesStatus from "@/content/lotes-status.json";

const CONTACT_EMAIL = "carlosaraujo@mastertopempreendimentos.com.br";
const CONTACT_WHATSAPP_DISPLAY = "(71) 99945-4369";
const CONTACT_WHATSAPP_LINK = "https://wa.me/5571999454369";
const INSTAGRAM_URL = "https://www.instagram.com/mastertopempreendimentos/";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const COLS_PER_ROW = 20; // 11 rows x 20 cols = 220 lots

type Lot = { id: string; row: string; col: number };
type LotStatus = "disponivel" | "reservado" | "vendido";

function generateLots(): Lot[] {
  const lots: Lot[] = [];
  ROWS.forEach((row) => {
    for (let c = 1; c <= COLS_PER_ROW; c++) {
      lots.push({ id: `${row}${c}`, row, col: c });
    }
  });
  return lots;
}

const LOTS = generateLots();

const POI_DATA = [
  { name: "Farol de Praia do Forte", cat: "turismo", km: 22, note: "Farol histórico dentro do Projeto Tamar" },
  { name: "Praia do Papa Gente", cat: "praia", km: 20, note: "Piscinas naturais na maré baixa" },
  { name: "Praia do Lord", cat: "praia", km: 21, note: "Águas calmas, boa para famílias" },
  { name: "Praia de Santo Antônio", cat: "praia", km: 14, note: "Piscinas naturais, menos movimentada" },
  { name: "Praia do Diogo", cat: "praia", km: 13, note: "Dunas e piscinas naturais na maré baixa" },
  { name: "Praia de Imbassaí", cat: "praia", km: 15, note: "Rio encontra o mar, orla natural" },
  { name: "Praia Pedra do Chapéu", cat: "praia", km: 21, note: "Formação rochosa característica" },
  { name: "Praia da Oca (Costa do Sauípe)", cat: "praia", km: 14, note: "Perto do complexo Costa do Sauípe" },
  { name: "Praia de Itacimirim", cat: "praia", km: 27, note: "Tranquila, pouco movimento" },
  { name: "Praia de Guarajuba", cat: "praia", km: 30, note: "Boa estrutura de bares e restaurantes" },
  { name: "Massarandupió", cat: "praia", km: 22, note: "Dunas e beach bars, perto de Subaúma" },
  { name: "Arembepe", cat: "praia", km: 46, note: "Vila de pescadores, ex-comunidade hippie" },
  { name: "Praia do Flamengo (Salvador)", cat: "praia", km: 68, note: "Bairro de Stella Maris, Salvador" },
  { name: "Orla de Stella Maris", cat: "praia", km: 70, note: "Praia urbana, boa estrutura" },
  { name: "Praia de Icaraí", cat: "praia", km: 71, note: "Extensa, em Itapuã (Salvador)" },
  { name: "Praia do Sítio do Conde", cat: "praia", km: 78, note: "No município de Conde, mais ao norte" },
  { name: "Eco Bella Argila – Fazenda Maria Farinha", cat: "fazenda", km: 3, note: "Day use com piscina de argila, trilhas e cavalgada" },
  { name: "Fazendas Santa Fé", cat: "fazenda", km: 18, note: "Condomínio de terrenos com estrutura de fazenda" },
  { name: "Condomínio Fazenda Praia do Forte", cat: "fazenda", km: 20, note: "Antiga fazenda, hoje condomínio de lotes na mata" },
  { name: "Instituto Baleia Jubarte", cat: "turismo", km: 21, note: "Centro de estudos sobre baleias" },
  { name: "Centro de Artesanato de Praia do Forte", cat: "turismo", km: 21, note: "Lojinhas e gelateria à beira-mar" },
  { name: "Vila de Praia do Forte", cat: "turismo", km: 22, note: "Calçadão com lojas, bares e restaurantes" },
  { name: "Tivoli Ecoresort Praia do Forte", cat: "resort", km: 22, note: "5 estrelas, à beira-mar" },
  { name: "Iberostar Selection Praia do Forte", cat: "resort", km: 19, note: "All inclusive" },
  { name: "Iberostar Waves Bahia", cat: "resort", km: 19, note: "All inclusive, foco em famílias" },
  { name: "Praia Sauípe Resort", cat: "resort", km: 14, note: "Complexo de resorts Costa do Sauípe" },
  { name: "Pousada Refúgio da Vila", cat: "hospedagem", km: 21, note: "Boutique, no centro da vila" },
  { name: "Al Mar Suítes", cat: "hospedagem", km: 22, note: "Em frente à igreja e à vila" },
  { name: "Pousada Casa do Forte", cat: "hospedagem", km: 21, note: "Piscina e localização central" },
  { name: "Pousada Du'Forte", cat: "hospedagem", km: 22, note: "Perto da praia e do centrinho" },
  { name: "Village Porta do Sol", cat: "hospedagem", km: 22, note: "Apartamentos por diária" },
  { name: "Via dos Corais Hotel", cat: "hospedagem", km: 21, note: "Piscina e café da manhã" },
  { name: "Bela Nordestina", cat: "restaurante", km: 22, note: "Moquecas e culinária baiana" },
  { name: "Papa Gente Restaurante", cat: "restaurante", km: 22, note: "Frutos do mar" },
  { name: "Xica's Bistrô", cat: "restaurante", km: 22, note: "Comida baiana, ambiente aconchegante" },
  { name: "Farol Restaurante e Bar", cat: "restaurante", km: 22, note: "Vista para o mar, pôr do sol" },
  { name: "Restaurante Donana", cat: "restaurante", km: 22, note: "Risotos e moquecas" },
  { name: "il Cantuccio", cat: "restaurante", km: 22, note: "Cozinha italiana" },
  { name: "Posto Petrox (BA-099)", cat: "posto", km: 20, note: "Na Estrada do Coco" },
  { name: "Posto Imbassaí (BA-099)", cat: "posto", km: 14, note: "Na Estrada do Coco" },
  { name: "Petrobras Guarajuba", cat: "posto", km: 21, note: "Na Estrada do Coco" },
  { name: "Shell Select Busca Vida", cat: "posto", km: 60, note: "Próximo a Camaçari" },
  { name: "Posto Boa União", cat: "posto", km: 58, note: "Vila de Abrantes, Camaçari" },
  { name: "Aeroporto Internacional de Salvador", cat: "aeroporto", km: 68, note: "Principal aeroporto da região" },
  { name: "Guarajuba Shopping", cat: "shopping", km: 29, note: "Praça de alimentação e lojas" },
  { name: "Outlet Premium Salvador", cat: "shopping", km: 55, note: "Marcas nacionais com desconto" },
  { name: "Shopping Bahia Outlet Center", cat: "shopping", km: 80, note: "Zona da Uruguai, Salvador" },
  { name: "Peatonal Praia do Forte", cat: "shopping", km: 22, note: "Calçadão de lojas na vila" },
  { name: "Olive Mix Supermarket", cat: "mercado", km: 21, note: "Supermercado mais conhecido da vila" },
  { name: "Hiperideal Praia do Forte", cat: "mercado", km: 20, note: "Na Estrada do Coco" },
  { name: "Supermercado O Caçador", cat: "mercado", km: 22, note: "No centro da vila" },
];

const POI_CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "praia", label: "Praias" },
  { key: "fazenda", label: "Fazendas" },
  { key: "turismo", label: "Turismo" },
  { key: "resort", label: "Resorts" },
  { key: "hospedagem", label: "Hotéis/Pousadas" },
  { key: "restaurante", label: "Restaurantes" },
  { key: "posto", label: "Postos" },
  { key: "aeroporto", label: "Aeroporto" },
  { key: "shopping", label: "Shopping/Outlet" },
  { key: "mercado", label: "Mercados" },
];

const STATUS_LABEL: Record<LotStatus, string> = {
  disponivel: "Disponível",
  reservado: "Reservado",
  vendido: "Vendido",
};

function HouseIsoArt() {
  return (
    <svg viewBox="0 0 320 220" className="lp-house-svg-hero" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="160" cy="196" rx="140" ry="14" fill="#DDD3B8" />
      <polygon points="70,170 190,170 230,150 110,150" fill="#C9B48A" />
      <polygon points="70,170 110,150 110,158 70,178" fill="#B69C6E" />
      <polygon points="90,150 90,90 190,60 190,120" fill="#8C6A46" />
      <polygon points="190,60 190,120 250,140 250,80" fill="#6E5137" />
      <polygon points="90,90 190,60 250,80 150,110" fill="#A9835A" />
      <polygon points="80,92 190,58 252,78 260,88 195,68 88,102" fill="#3E4A3A" />
      <rect x="110" y="100" width="26" height="30" fill="#CDE7E4" opacity="0.85" />
      <rect x="150" y="90" width="26" height="30" fill="#CDE7E4" opacity="0.85" />
      <rect x="205" y="90" width="20" height="26" fill="#CDE7E4" opacity="0.7" />
      <circle cx="45" cy="150" r="22" fill="#6E7F52" />
      <rect x="41" y="165" width="8" height="20" fill="#5C4630" />
      <circle cx="280" cy="130" r="16" fill="#7C9163" />
      <rect x="277" y="142" width="6" height="16" fill="#5C4630" />
    </svg>
  );
}

function HouseFrontArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="150" width="220" height="30" fill="#E4D8BE" />
      <polygon points="40,150 40,80 180,80 180,150" fill="#8C6A46" />
      <polygon points="30,84 110,40 190,84" fill="#3E4A3A" />
      <rect x="55" y="100" width="30" height="34" fill="#CDE7E4" />
      <rect x="135" y="100" width="30" height="34" fill="#CDE7E4" />
      <rect x="102" y="112" width="16" height="38" fill="#5C4630" />
      <rect x="40" y="140" width="140" height="6" fill="#6E5137" />
      <rect x="40" y="112" width="140" height="4" fill="#6E5137" opacity="0.6" />
      <circle cx="20" cy="145" r="14" fill="#6E7F52" />
      <circle cx="200" cy="140" r="18" fill="#7C9163" />
    </svg>
  );
}

function HouseSideArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="150" width="220" height="30" fill="#E4D8BE" />
      <polygon points="30,150 30,70 150,50 150,130" fill="#8C6A46" />
      <polygon points="150,50 150,130 195,140 195,90" fill="#6E5137" />
      <polygon points="24,72 150,48 200,88 205,94 150,58 28,80" fill="#3E4A3A" />
      <rect x="50" y="90" width="24" height="26" fill="#CDE7E4" />
      <rect x="90" y="82" width="24" height="26" fill="#CDE7E4" />
      <rect x="160" y="98" width="18" height="24" fill="#CDE7E4" opacity="0.8" />
      <polygon points="30,150 60,140 150,140 150,150" fill="#B69C6E" />
      <circle cx="195" cy="150" r="14" fill="#6E7F52" />
    </svg>
  );
}

function HouseInteriorArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#F1E9D8" />
      <rect x="0" y="120" width="220" height="60" fill="#C9B48A" />
      <rect x="20" y="20" width="180" height="100" fill="#DCEFEA" opacity="0.6" />
      <rect x="20" y="20" width="180" height="100" fill="none" stroke="#8C6A46" strokeWidth="6" />
      <rect x="30" y="100" width="70" height="30" rx="4" fill="#6E7F52" />
      <rect x="115" y="95" width="35" height="35" rx="4" fill="#D9713C" opacity="0.85" />
      <rect x="160" y="90" width="30" height="40" fill="#8C6A46" />
      <rect x="30" y="40" width="8" height="60" fill="#6E5137" />
      <rect x="182" y="40" width="8" height="60" fill="#6E5137" />
    </svg>
  );
}

function LeisureHeroArt() {
  return (
    <svg viewBox="0 0 320 220" className="lp-house-svg-hero" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="320" height="140" fill="#BFE0DC" />
      <path d="M0,140 Q80,110 160,140 T320,140 V220 H0 Z" fill="#8FBFA8" />
      <path d="M0,150 Q90,175 180,150 T320,158 V220 H0 Z" fill="#6E8F6A" opacity="0.6" />
      <path d="M40,220 C70,170 60,120 110,90 C150,66 170,40 160,0 L200,0 C190,50 170,70 150,100 C120,135 130,175 150,220 Z" fill="#7FB9C9" opacity="0.85" />
      <circle cx="60" cy="120" r="18" fill="#5C7A4F" />
      <rect x="57" y="132" width="6" height="16" fill="#4A3826" />
      <circle cx="250" cy="110" r="22" fill="#4F6E45" />
      <rect x="246" y="126" width="8" height="20" fill="#4A3826" />
      <circle cx="285" cy="130" r="14" fill="#6E8F58" />
      <rect x="282" y="140" width="6" height="14" fill="#4A3826" />
      <line x1="90" y1="105" x2="230" y2="95" stroke="#4A3826" strokeWidth="2" />
      <rect x="86" y="100" width="6" height="45" fill="#6B5236" />
      <rect x="226" y="90" width="6" height="45" fill="#6B5236" />
      <polygon points="150,200 190,200 182,182 158,182" fill="#D9C79A" />
      <polygon points="146,182 194,182 170,166 " fill="#8C6A46" />
      <rect x="163" y="188" width="6" height="12" fill="#6E5137" />
    </svg>
  );
}

function TrailsArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#CFE6D6" />
      <path d="M0,60 Q60,20 120,55 T220,40" stroke="#EFE7D6" strokeWidth="14" fill="none" strokeLinecap="round" />
      <circle cx="40" cy="140" r="20" fill="#5C7A4F" />
      <rect x="36" y="155" width="8" height="18" fill="#4A3826" />
      <circle cx="90" cy="120" r="26" fill="#4F6E45" />
      <rect x="85" y="140" width="10" height="22" fill="#4A3826" />
      <circle cx="150" cy="135" r="18" fill="#6E8F58" />
      <rect x="146" y="150" width="8" height="18" fill="#4A3826" />
      <circle cx="190" cy="115" r="22" fill="#5C7A4F" />
      <rect x="185" y="132" width="9" height="20" fill="#4A3826" />
    </svg>
  );
}

function ArborismoArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#DCEFE2" />
      <rect x="30" y="60" width="10" height="110" fill="#6E5137" />
      <rect x="170" y="40" width="10" height="130" fill="#6E5137" />
      <circle cx="35" cy="55" r="26" fill="#5C7A4F" />
      <circle cx="175" cy="35" r="30" fill="#4F6E45" />
      <line x1="45" y1="90" x2="165" y2="70" stroke="#8C6A46" strokeWidth="3" />
      <line x1="45" y1="115" x2="165" y2="100" stroke="#8C6A46" strokeWidth="3" />
      <rect x="90" y="88" width="26" height="6" fill="#D9713C" />
      <rect x="115" y="106" width="26" height="6" fill="#D9713C" />
      <circle cx="103" cy="80" r="9" fill="#2A2620" />
      <rect x="99" y="88" width="8" height="16" fill="#2A2620" />
    </svg>
  );
}

function RiverBeachArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#EFE7D6" />
      <path d="M0,60 C60,40 60,90 120,80 C160,73 170,50 220,55 V180 H0 Z" fill="#7FB9C9" />
      <path d="M0,110 C70,95 90,135 150,120 C175,113 195,120 220,112 V180 H0 Z" fill="#E4D8BE" />
      <circle cx="40" cy="140" r="16" fill="#6E7F52" />
      <rect x="36" y="153" width="8" height="16" fill="#4A3826" />
      <circle cx="190" cy="130" r="14" fill="#7C9163" />
    </svg>
  );
}

function BeachCabinArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#F1E9D8" />
      <rect x="0" y="120" width="220" height="60" fill="#E4D8BE" />
      <path d="M0,120 C60,100 90,132 150,112 C175,104 200,112 220,105 V125 H0 Z" fill="#7FB9C9" opacity="0.8" />
      <polygon points="70,120 150,120 138,80 82,80" fill="#D9C79A" />
      <polygon points="62,80 158,80 110,50" fill="#8C6A46" />
      <rect x="95" y="95" width="30" height="25" fill="#3E4A3A" />
      <rect x="55" y="120" width="6" height="20" fill="#6E5137" />
      <rect x="159" y="120" width="6" height="20" fill="#6E5137" />
    </svg>
  );
}

function StableArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#EFE7D6" />
      <rect x="0" y="140" width="220" height="40" fill="#D9C79A" />
      <polygon points="30,140 30,90 190,90 190,140" fill="#8C6A46" />
      <polygon points="18,92 110,55 202,92" fill="#5C4630" />
      <rect x="45" y="105" width="26" height="35" fill="#3E2E1E" />
      <rect x="90" y="105" width="26" height="35" fill="#3E2E1E" />
      <rect x="135" y="105" width="26" height="35" fill="#3E2E1E" />
      <rect x="0" y="150" width="220" height="4" fill="#6E5137" />
      <rect x="0" y="160" width="220" height="4" fill="#6E5137" />
      <path d="M170,150 q-4,-22 10,-28 q6,-3 8,4 q1,5 -3,7 q6,2 5,9 l-2,10 q-1,4 -5,4 h-3 l-1,-9 q-4,1 -6,-1 l-3,10 h-4 q0,-8 4,-16 z" fill="#4A3826" />
    </svg>
  );
}

function PedaloArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#EAF3EF" />
      <path d="M0,90 C50,70 70,105 120,90 C160,78 190,95 220,85 V180 H0 Z" fill="#7FB9C9" />
      <path d="M0,120 C60,105 90,135 150,120 C175,113 195,120 220,113 V180 H0 Z" fill="#6EA9BC" opacity="0.7" />
      <ellipse cx="70" cy="100" rx="26" ry="10" fill="#D9713C" />
      <ellipse cx="130" cy="100" rx="26" ry="10" fill="#D9713C" />
      <rect x="70" y="88" width="60" height="14" rx="6" fill="#F1E9D8" />
      <circle cx="100" cy="82" r="10" fill="#3E4A3A" />
      <circle cx="45" cy="70" r="14" fill="#6E7F52" />
      <circle cx="175" cy="65" r="18" fill="#5C7A4F" />
    </svg>
  );
}

function RusticRestaurantArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#F1E9D8" />
      <rect x="0" y="135" width="220" height="45" fill="#DCEFE2" opacity="0.5" />
      <polygon points="20,135 20,85 200,85 200,135" fill="#8C6A46" />
      <polygon points="8,88 110,45 212,88" fill="#5C4630" />
      <rect x="40" y="100" width="140" height="8" fill="#6E5137" opacity="0.5" />
      <rect x="35" y="115" width="30" height="20" fill="#3E4A3A" />
      <rect x="90" y="115" width="30" height="20" fill="#3E4A3A" />
      <rect x="145" y="115" width="30" height="20" fill="#3E4A3A" />
      <rect x="12" y="135" width="10" height="45" fill="#6E5137" />
      <rect x="198" y="135" width="10" height="45" fill="#6E5137" />
    </svg>
  );
}

function RusticKioskArt() {
  return (
    <svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="220" height="180" fill="#EAF3EF" />
      <path d="M0,140 C60,125 90,150 150,135 C175,128 195,135 220,128 V180 H0 Z" fill="#7FB9C9" opacity="0.6" />
      <polygon points="70,140 150,140 150,105 70,105" fill="#3E4A3A" opacity="0.15" />
      <polygon points="60,108 160,108 130,72 90,72" fill="#8C6A46" />
      <polygon points="50,72 170,72 110,45" fill="#5C4630" />
      <rect x="80" y="108" width="12" height="32" fill="#6E5137" />
      <rect x="128" y="108" width="12" height="32" fill="#6E5137" />
      <circle cx="35" cy="150" r="14" fill="#6E7F52" />
      <circle cx="190" cy="145" r="16" fill="#5C7A4F" />
    </svg>
  );
}

function GatehouseArt() {
  return (
    <svg viewBox="0 0 320 220" className="lp-house-svg-hero" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="320" height="150" fill="#DCEFEA" />
      <rect x="0" y="150" width="320" height="70" fill="#DDD3B8" />
      <polygon points="110,220 210,220 175,150 145,150" fill="#B9AE93" />
      <line x1="160" y1="220" x2="160" y2="150" stroke="#EFE7D6" strokeWidth="4" strokeDasharray="10,10" />
      <rect x="60" y="105" width="70" height="50" fill="#8C6A46" />
      <polygon points="52,108 130,88 208,108" fill="#3E4A3A" />
      <rect x="80" y="120" width="30" height="30" fill="#CDE7E4" />
      <rect x="128" y="140" width="70" height="6" fill="#D9713C" />
      <circle cx="128" cy="143" r="6" fill="#3E4A3A" />
      <rect x="230" y="90" width="5" height="60" fill="#5C4630" />
      <rect x="222" y="82" width="24" height="12" rx="3" fill="#2A2620" />
      <circle cx="60" cy="140" r="18" fill="#6E7F52" />
      <circle cx="270" cy="130" r="22" fill="#5C7A4F" />
    </svg>
  );
}

export default function LoteamentoApp() {
  const [view, setView] = useState("catalogo");
  const [filter, setFilter] = useState("todos");
  const [poiFilter, setPoiFilter] = useState("todos");
  const [search, setSearch] = useState("");
  const [selectedLot, setSelectedLot] = useState<Lot | null>(null);
  const [formState, setFormState] = useState({ nome: "", telefone: "", email: "", mensagem: "" });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [localReserved, setLocalReserved] = useState<Record<string, boolean>>({});

  function statusOf(id: string): LotStatus {
    if (localReserved[id]) return "reservado";
    return ((lotesStatus as Record<string, LotStatus>)[id]) || "disponivel";
  }

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3200);
  }

  function openLot(lot: Lot) {
    setSelectedLot(lot);
    setFormState({ nome: "", telefone: "", email: "", mensagem: "" });
  }

  async function submitReservation(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedLot) return;
    if (!formState.nome.trim() || !formState.telefone.trim()) {
      showToast("Preencha nome e telefone.");
      return;
    }
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        "form-name": "reserva-lote",
        lote: selectedLot.id,
        nome: formState.nome,
        telefone: formState.telefone,
        email: formState.email,
        mensagem: formState.mensagem,
      }).toString();

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      if (!res.ok) throw new Error("form submission failed");

      setLocalReserved((prev) => ({ ...prev, [selectedLot.id]: true }));
      showToast(`Pedido de reserva do lote ${selectedLot.id} enviado. Entraremos em contato.`);
      setSelectedLot(null);
    } catch {
      showToast("Não foi possível enviar agora. Tente novamente ou fale no WhatsApp.");
    }
    setSubmitting(false);
  }

  const counts = LOTS.reduce(
    (acc, l) => {
      const s = statusOf(l.id);
      acc[s] = (acc[s] || 0) + 1;
      return acc;
    },
    { disponivel: 0, reservado: 0, vendido: 0 } as Record<LotStatus, number>
  );

  const filteredLots = LOTS.filter((l) => {
    const s = statusOf(l.id);
    if (filter !== "todos" && s !== filter) return false;
    if (search.trim() && !l.id.toLowerCase().includes(search.trim().toLowerCase())) return false;
    return true;
  });

  const poiList = POI_DATA.filter((p) => poiFilter === "todos" || p.cat === poiFilter).sort((a, b) => a.km - b.km);

  return (
    <div className="lp-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap');

        .lp-root {
          --sand: #EFE7D6;
          --sand-deep: #E4D8BE;
          --ocean: #164B4A;
          --ocean-deep: #0E3634;
          --dune: #6E7F52;
          --sunset: #D9713C;
          --ink: #2A2620;
          --paper: #FBF8F1;
          --line: rgba(42,38,32,0.14);
          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--ink);
          background: var(--sand);
          position: relative;
          border-radius: 18px;
          overflow: hidden;
        }
        .lp-serif { font-family: 'Fraunces', Georgia, serif; }

        .lp-hero {
          background: linear-gradient(160deg, var(--ocean) 0%, var(--ocean-deep) 100%);
          color: var(--paper);
          padding: 28px 20px 22px;
          position: relative;
          overflow: hidden;
        }
        .lp-hero::after {
          content: '';
          position: absolute;
          right: -40px; top: -40px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(217,113,60,0.18);
        }
        .lp-eyebrow {
          font-size: 12.5px;
          color: rgba(251,248,241,0.75);
          margin-bottom: 6px;
          letter-spacing: 0.02em;
        }
        .lp-hero h1 {
          font-size: 26px;
          line-height: 1.15;
          margin: 0 0 8px;
          font-weight: 600;
          position: relative;
        }
        .lp-hero p {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(251,248,241,0.88);
          max-width: 46ch;
          margin: 0 0 16px;
          position: relative;
        }
        .lp-stats {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          position: relative;
        }
        .lp-stat {
          background: rgba(251,248,241,0.1);
          border: 1px solid rgba(251,248,241,0.2);
          border-radius: 10px;
          padding: 8px 12px;
          min-width: 84px;
        }
        .lp-stat b { display:block; font-size: 18px; font-family:'Fraunces', serif; }
        .lp-stat span { font-size: 11.5px; color: rgba(251,248,241,0.75); }

        .lp-nav {
          display: flex;
          gap: 6px;
          padding: 12px 16px;
          background: var(--paper);
          border-bottom: 1px solid var(--line);
          position: sticky;
          top: 0;
          z-index: 5;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .lp-nav::-webkit-scrollbar { display: none; }
        .lp-nav button {
          flex: 0 0 auto;
          white-space: nowrap;
          border: none;
          background: transparent;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--ink);
          opacity: 0.55;
          cursor: pointer;
        }
        .lp-nav button.active {
          background: var(--sand-deep);
          opacity: 1;
        }

        .lp-body { padding: 16px; }

        .lp-controls {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
          flex-wrap: wrap;
        }
        .lp-search {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 9px;
          padding: 7px 10px;
          flex: 1;
          min-width: 120px;
        }
        .lp-search input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 13.5px;
          width: 100%;
          color: var(--ink);
        }
        .lp-filters { display: flex; gap: 6px; flex-wrap: wrap; }
        .lp-chip {
          border: 1px solid var(--line);
          background: var(--paper);
          border-radius: 20px;
          padding: 6px 12px;
          font-size: 12.5px;
          font-weight: 500;
          cursor: pointer;
          color: var(--ink);
          opacity: 0.7;
        }
        .lp-chip.active {
          background: var(--ocean);
          color: var(--paper);
          border-color: var(--ocean);
          opacity: 1;
        }

        .lp-legend {
          display: flex;
          gap: 14px;
          font-size: 12px;
          margin-bottom: 12px;
          color: rgba(42,38,32,0.7);
        }
        .lp-legend span { display:flex; align-items:center; gap:5px; }
        .lp-dot { width: 9px; height: 9px; border-radius: 50%; display:inline-block; }

        .lp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(46px, 1fr));
          gap: 5px;
        }
        .lp-lot {
          aspect-ratio: 1;
          border-radius: 6px;
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10.5px;
          font-weight: 600;
          cursor: pointer;
          background: #C9E4CE;
          color: #1D3A22;
          transition: transform 0.12s ease;
        }
        .lp-lot:active { transform: scale(0.94); }
        .lp-lot.reservado { background: #F5D9B8; color: #7A4A16; }
        .lp-lot.vendido { background: #D8D2C4; color: #6B6656; cursor: default; }

        .lp-empty {
          text-align: center;
          padding: 40px 20px;
          color: rgba(42,38,32,0.55);
          font-size: 13.5px;
        }

        .lp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20,18,14,0.45);
          display: flex;
          align-items: flex-end;
          z-index: 50;
        }
        .lp-sheet {
          background: var(--paper);
          width: 100%;
          border-radius: 18px 18px 0 0;
          padding: 20px;
          max-height: 86vh;
          overflow-y: auto;
        }
        .lp-sheet-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 4px;
        }
        .lp-sheet h2 {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          margin: 0;
        }
        .lp-close {
          background: var(--sand-deep);
          border: none;
          border-radius: 50%;
          width: 30px; height: 30px;
          display: flex; align-items:center; justify-content:center;
          cursor: pointer;
        }
        .lp-sheet .lp-meta { font-size: 13px; color: rgba(42,38,32,0.65); margin: 4px 0 16px; }

        @media (min-width: 768px) {
          .lp-overlay { align-items: center; justify-content: center; padding: 24px; }
          .lp-sheet { width: 620px; max-width: 100%; border-radius: 18px; max-height: 85vh; }
        }

        .lp-field { margin-bottom: 12px; }
        .lp-field label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 5px;
          color: rgba(42,38,32,0.75);
        }
        .lp-field input, .lp-field textarea {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 10px 11px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          box-sizing: border-box;
          background: #fff;
        }
        .lp-field textarea { resize: none; min-height: 60px; }

        .lp-submit {
          width: 100%;
          background: var(--ocean);
          color: var(--paper);
          border: none;
          border-radius: 9px;
          padding: 12px;
          font-size: 14.5px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 6px;
        }
        .lp-submit:disabled { opacity: 0.6; }

        .lp-house-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          background: var(--sand);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 8px;
          margin-bottom: 16px;
          cursor: pointer;
          text-align: left;
        }
        .lp-house-cta svg { width: 64px; height: 44px; border-radius: 8px; flex-shrink: 0; }
        .lp-house-cta-text b { display: block; font-size: 13px; margin-bottom: 2px; }
        .lp-house-cta-text span { font-size: 11.5px; color: rgba(42,38,32,0.6); }

        .lp-poi-list { display: flex; flex-direction: column; gap: 8px; }
        .lp-poi-item {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 10px 12px;
        }
        .lp-poi-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }
        .lp-poi-name { font-size: 13.5px; font-weight: 600; }
        .lp-poi-km {
          font-size: 11.5px;
          font-weight: 600;
          background: var(--sand-deep);
          padding: 2px 8px;
          border-radius: 20px;
          flex-shrink: 0;
        }
        .lp-poi-note { font-size: 12px; color: rgba(42,38,32,0.6); }

        .lp-map-frame {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--line);
        }
        .lp-map-frame iframe { display: block; }

        .lp-house { display: flex; flex-direction: column; gap: 16px; }
        .lp-house-hero {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 14px;
          overflow: hidden;
        }
        .lp-house-svg-hero { width: 100%; display: block; background: linear-gradient(180deg, #DCEFEA 0%, #EFE7D6 70%); }
        .lp-house-hero-text { padding: 16px; }
        .lp-house-tag {
          font-size: 11.5px;
          font-weight: 600;
          color: var(--ocean);
          letter-spacing: 0.02em;
        }
        .lp-house-hero-text h2 { font-size: 19px; margin: 5px 0 8px; }
        .lp-house-hero-text p { font-size: 13.5px; line-height: 1.5; color: rgba(42,38,32,0.75); margin: 0; }

        .lp-sys-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
        }
        .lp-sys-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          color: var(--ocean);
        }
        .lp-sys-card b { font-size: 13px; color: var(--ink); }
        .lp-sys-card span { font-size: 11.5px; color: rgba(42,38,32,0.65); line-height: 1.4; }

        .lp-house-specs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        .lp-spec {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 10px 12px;
        }
        .lp-spec b { display: block; font-family: 'Fraunces', serif; font-size: 16px; }
        .lp-spec span { font-size: 11.5px; color: rgba(42,38,32,0.6); }

        .lp-house-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 10px;
        }
        .lp-house-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 12px;
          overflow: hidden;
        }
        .lp-house-card svg { width: 100%; display: block; }
        .lp-house-card span {
          display: block;
          padding: 8px 10px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(42,38,32,0.7);
        }
        .lp-house-note {
          font-size: 11.5px;
          color: rgba(42,38,32,0.5);
          text-align: center;
          margin: 0;
        }

        .lp-footer {
          background: var(--ocean-deep);
          color: var(--paper);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .lp-footer-title { font-size: 15px; margin-bottom: 2px; }
        .lp-footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(251,248,241,0.9);
          text-decoration: none;
          font-size: 13.5px;
        }
        .lp-brand-link {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid rgba(251,248,241,0.4);
        }

        .lp-toast {
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--ink);
          color: var(--paper);
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 13px;
          z-index: 60;
          box-shadow: 0 6px 18px rgba(0,0,0,0.25);
        }
      `}</style>

      <div className="lp-hero">
        <div className="lp-eyebrow">
          <Link href="/" className="lp-brand-link">
            MASTERTOP EMPREENDIMENTOS
          </Link>{" "}
          · REGIÃO DE PRAIA DO FORTE, BA
        </div>
        <h1 className="lp-serif">Ecofazenda Mucugê</h1>
        <p>
          220 lotes de 1.000 m² em 33,5 hectares, a poucos minutos de Praia do Forte. Reserve o seu diretamente pelo mapa de lotes.
        </p>
        <div className="lp-stats">
          <div className="lp-stat">
            <b>{counts.disponivel}</b>
            <span>Disponíveis</span>
          </div>
          <div className="lp-stat">
            <b>{counts.reservado}</b>
            <span>Reservados</span>
          </div>
          <div className="lp-stat">
            <b>{counts.vendido}</b>
            <span>Vendidos</span>
          </div>
        </div>
      </div>

      <div className="lp-nav">
        <button className={view === "catalogo" ? "active" : ""} onClick={() => setView("catalogo")}>
          Mapa de lotes
        </button>
        <button className={view === "casa" ? "active" : ""} onClick={() => setView("casa")}>
          Casa modelo
        </button>
        <button className={view === "infraestrutura" ? "active" : ""} onClick={() => setView("infraestrutura")}>
          Infraestrutura
        </button>
        <button className={view === "arredores" ? "active" : ""} onClick={() => setView("arredores")}>
          Arredores
        </button>
        <button className={view === "localizacao" ? "active" : ""} onClick={() => setView("localizacao")}>
          Localização
        </button>
        <button className={view === "lazer" ? "active" : ""} onClick={() => setView("lazer")}>
          Área de lazer
        </button>
      </div>

      <div className="lp-body">
        {view === "catalogo" && (
          <>
            <div className="lp-controls">
              <div className="lp-search">
                <Search size={15} color="#6b6656" />
                <input placeholder="Buscar lote (ex: A5)" value={search} onChange={(e) => setSearch(e.target.value)} />
              </div>
            </div>
            <div className="lp-filters" style={{ marginBottom: 14 }}>
              {(["todos", "disponivel", "reservado", "vendido"] as const).map((f) => (
                <button key={f} className={`lp-chip ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
                  {f === "todos" ? "Todos" : STATUS_LABEL[f]}
                </button>
              ))}
            </div>
            <div className="lp-legend">
              <span><i className="lp-dot" style={{ background: "#C9E4CE" }} /> Disponível</span>
              <span><i className="lp-dot" style={{ background: "#F5D9B8" }} /> Reservado</span>
              <span><i className="lp-dot" style={{ background: "#D8D2C4" }} /> Vendido</span>
            </div>

            {filteredLots.length === 0 ? (
              <div className="lp-empty">Nenhum lote encontrado com esse filtro.</div>
            ) : (
              <div className="lp-grid">
                {filteredLots.map((lot) => {
                  const s = statusOf(lot.id);
                  return (
                    <div
                      key={lot.id}
                      className={`lp-lot ${s}`}
                      onClick={() => s !== "vendido" && openLot(lot)}
                      title={`Lote ${lot.id} — ${STATUS_LABEL[s]}`}
                    >
                      {lot.id}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {view === "casa" && (
          <div className="lp-house">
            <div className="lp-house-hero">
              <HouseIsoArt />
              <div className="lp-house-hero-text">
                <span className="lp-house-tag">Modelo sugerido para os lotes</span>
                <h2 className="lp-serif">Casa ecológica em madeira · 2 quartos</h2>
                <p>
                  Estrutura compacta em madeira de reflorestamento, pensada para se integrar ao terreno arborizado do
                  loteamento. Ventilação cruzada, varanda coberta e sistemas autônomos de energia, água e esgoto.
                </p>
              </div>
            </div>

            <div className="lp-house-specs">
              <div className="lp-spec"><b>2</b><span>Quartos</span></div>
              <div className="lp-spec"><b>Madeira</b><span>Estrutura principal</span></div>
              <div className="lp-spec"><b>Sim</b><span>Varanda coberta</span></div>
              <div className="lp-spec"><b>Off-grid</b><span>Energia solar</span></div>
            </div>

            <div className="lp-house-hero-text" style={{ padding: "4px 2px 0" }}>
              <span className="lp-house-tag">Sistemas sustentáveis</span>
              <h2 className="lp-serif" style={{ fontSize: 17 }}>Autonomia e baixo impacto</h2>
            </div>

            <div className="lp-sys-grid">
              <div className="lp-sys-card">
                <Sun size={20} />
                <b>Energia solar off-grid</b>
                <span>Painéis fotovoltaicos com banco de baterias, sem depender da rede elétrica.</span>
              </div>
              <div className="lp-sys-card">
                <Recycle size={20} />
                <b>Sistema biodigestor</b>
                <span>Trata o esgoto da casa no local e gera biofertilizante para jardim e horta.</span>
              </div>
              <div className="lp-sys-card">
                <Droplets size={20} />
                <b>Reservação de água autônoma</b>
                <span>Captação de chuva com cisterna e tratamento próprio, independente da rede pública.</span>
              </div>
              <div className="lp-sys-card">
                <Leaf size={20} />
                <b>Integração ao ecoambiente</b>
                <span>Projeto pensado para dialogar com a vegetação nativa do lote e da área de lazer.</span>
              </div>
              <div className="lp-sys-card">
                <Satellite size={20} />
                <b>Internet via satélite</b>
                <span>Conexão independente de infraestrutura local, com sinal mesmo em áreas afastadas.</span>
              </div>
            </div>

            <div className="lp-house-gallery">
              <div className="lp-house-card">
                <HouseFrontArt />
                <span>Fachada frontal</span>
              </div>
              <div className="lp-house-card">
                <HouseSideArt />
                <span>Vista isométrica 3D</span>
              </div>
              <div className="lp-house-card">
                <HouseInteriorArt />
                <span>Sala integrada</span>
              </div>
            </div>
            <p className="lp-house-note">Imagens ilustrativas em 3D do modelo proposto — não representam o projeto executivo final.</p>
          </div>
        )}

        {view === "infraestrutura" && (
          <div className="lp-house">
            <div className="lp-house-hero">
              <GatehouseArt />
              <div className="lp-house-hero-text">
                <span className="lp-house-tag">Estrutura do empreendimento</span>
                <h2 className="lp-serif">Infraestrutura</h2>
                <p>
                  Acesso coletivo ecológico aos lotes, portaria com controle de entrada e vigilância digital,
                  somados às áreas comuns de restaurante rústico e lazer compartilhado.
                </p>
              </div>
            </div>

            <div className="lp-sys-grid">
              <div className="lp-sys-card">
                <Route size={20} />
                <b>Acesso coletivo ecológico</b>
                <span>Vias internas de baixo impacto ligando todos os lotes, integradas à vegetação nativa.</span>
              </div>
              <div className="lp-sys-card">
                <ShieldCheck size={20} />
                <b>Portaria com controle de acesso</b>
                <span>Entrada única monitorada, com identificação de moradores e visitantes.</span>
              </div>
              <div className="lp-sys-card">
                <Camera size={20} />
                <b>Vigilância digital</b>
                <span>Câmeras nos pontos estratégicos do loteamento e das áreas comuns.</span>
              </div>
              <div className="lp-sys-card">
                <UtensilsCrossed size={20} />
                <b>Restaurante rústico</b>
                <span>Espaço gastronômico de uso coletivo, em estilo rústico integrado à natureza.</span>
              </div>
              <div className="lp-sys-card">
                <Users size={20} />
                <b>Área de lazer comum</b>
                <span>Parque, trilhas, arborismo, prainha e demais espaços compartilhados por todos os moradores.</span>
              </div>
              <div className="lp-sys-card">
                <Satellite size={20} />
                <b>Internet via satélite</b>
                <span>Conexão disponível em todo o loteamento, independente de infraestrutura local.</span>
              </div>
              <div className="lp-sys-card">
                <TreePine size={20} />
                <b>Área de APP e RL</b>
                <span>11,5 hectares de Área de Preservação Permanente e Reserva Legal preservados no empreendimento.</span>
              </div>
            </div>
            <p className="lp-house-note">Imagem ilustrativa em 3D da portaria — não representa o projeto executivo final.</p>
          </div>
        )}

        {view === "arredores" && (
          <div className="lp-house">
            <div className="lp-house-hero-text" style={{ padding: "2px 2px 0" }}>
              <span className="lp-house-tag">Num raio de até 80 km</span>
              <h2 className="lp-serif">O que tem por perto</h2>
              <p>
                Praias, pontos turísticos, hospedagem, restaurantes, postos, aeroporto, shopping e mercados na
                região de Praia do Forte e arredores.
              </p>
            </div>

            <div className="lp-filters">
              {POI_CATEGORIES.map((c) => (
                <button key={c.key} className={`lp-chip ${poiFilter === c.key ? "active" : ""}`} onClick={() => setPoiFilter(c.key)}>
                  {c.label}
                </button>
              ))}
            </div>

            <div className="lp-poi-list">
              {poiList.map((p) => (
                <div className="lp-poi-item" key={p.name}>
                  <div className="lp-poi-top">
                    <span className="lp-poi-name">{p.name}</span>
                    <span className="lp-poi-km">{p.km} km</span>
                  </div>
                  <span className="lp-poi-note">{p.note}</span>
                </div>
              ))}
            </div>
            <p className="lp-house-note">Distâncias aproximadas em linha reta a partir do terreno de referência.</p>
          </div>
        )}

        {view === "localizacao" && (
          <div className="lp-house">
            <div className="lp-map-frame">
              <iframe
                title="Localização Ecofazenda Mucugê"
                src="https://www.google.com/maps?q=-12.385083,-38.030583&z=14&output=embed"
                width="100%"
                height="220"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lp-house-hero-text" style={{ padding: "4px 2px" }}>
              <span className="lp-house-tag">Litoral norte da Bahia</span>
              <h2 className="lp-serif">Onde fica</h2>
              <p>
                O terreno está na região de Praia do Forte, distrito de Mata de São João (BA), acessado pela Estrada
                do Coco (BA-099) — uma das rodovias mais bem conservadas do litoral norte baiano.
              </p>
            </div>

            <div className="lp-house-specs">
              <div className="lp-spec"><b>~70 km</b><span>De Salvador (centro)</span></div>
              <div className="lp-spec"><b>~56 km</b><span>Do Aeroporto de Salvador</span></div>
              <div className="lp-spec"><b>Praia do Forte</b><span>Vila e orla mais próximas</span></div>
              <div className="lp-spec"><b>BA-099</b><span>Estrada do Coco, duplicada</span></div>
            </div>

            <div className="lp-poi-item">
              <div className="lp-poi-top" style={{ marginBottom: 6 }}>
                <MapPin size={13} /> <b>Coordenadas de referência</b>
              </div>
              <span className="lp-poi-note" style={{ fontStyle: "normal" }}>
                12°23&apos;06,3&quot;S 38°01&apos;50,1&quot;W
              </span>
            </div>

            <p className="lp-house-note">
              A região reúne praias preservadas, reservas ecológicas e rios de água doce, com fácil acesso por estrada
              duplicada a partir de Salvador.
            </p>
          </div>
        )}

        {view === "lazer" && (
          <div className="lp-house">
            <div className="lp-house-hero">
              <LeisureHeroArt />
              <div className="lp-house-hero-text">
                <span className="lp-house-tag">Áreas comuns do loteamento</span>
                <h2 className="lp-serif">Área de lazer ecológica</h2>
                <p>
                  Parque arborizado com trilhas ecológicas, circuito de arborismo, prainha à beira do rio com cabana
                  de praia, baia de cavalos, pedalinho aquático, restaurante e quiosque rústicos — pensados para uso
                  coletivo de todos os moradores.
                </p>
              </div>
            </div>

            <div className="lp-house-specs">
              <div className="lp-spec"><b>Parque</b><span>Área verde comum</span></div>
              <div className="lp-spec"><b>Trilhas</b><span>Percursos ecológicos</span></div>
              <div className="lp-spec"><b>Arborismo</b><span>Circuito entre árvores</span></div>
              <div className="lp-spec"><b>Prainha</b><span>À beira do rio</span></div>
              <div className="lp-spec"><b>Baia</b><span>Cavalos para passeio</span></div>
              <div className="lp-spec"><b>Pedalinho</b><span>Passeio aquático no rio</span></div>
            </div>

            <div className="lp-house-gallery">
              <div className="lp-house-card">
                <TrailsArt />
                <span>Trilhas no parque</span>
              </div>
              <div className="lp-house-card">
                <ArborismoArt />
                <span>Arborismo</span>
              </div>
              <div className="lp-house-card">
                <RiverBeachArt />
                <span>Prainha à beira do rio</span>
              </div>
              <div className="lp-house-card">
                <BeachCabinArt />
                <span>Cabana de praia</span>
              </div>
              <div className="lp-house-card">
                <StableArt />
                <span>Baia de cavalos</span>
              </div>
              <div className="lp-house-card">
                <PedaloArt />
                <span>Pedalinho aquático</span>
              </div>
              <div className="lp-house-card">
                <RusticRestaurantArt />
                <span>Restaurante rústico</span>
              </div>
              <div className="lp-house-card">
                <RusticKioskArt />
                <span>Quiosque rústico</span>
              </div>
            </div>
            <p className="lp-house-note">Imagens ilustrativas em 3D das áreas de lazer propostas — não representam o projeto executivo final.</p>
          </div>
        )}
      </div>

      <div className="lp-footer">
        <div className="lp-footer-title lp-serif">Fale com o corretor</div>
        <a className="lp-footer-link" href={CONTACT_WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={16} /> WhatsApp · {CONTACT_WHATSAPP_DISPLAY}
        </a>
        <a className="lp-footer-link" href={`mailto:${CONTACT_EMAIL}`}>
          <Mail size={16} /> {CONTACT_EMAIL}
        </a>
        <Link className="lp-footer-link" href="/">
          <Globe size={16} /> mastertopempreendimentos.com.br
        </Link>
        <a className="lp-footer-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> @mastertopempreendimentos
        </a>
      </div>

      {selectedLot && (
        <div className="lp-overlay" onClick={() => setSelectedLot(null)}>
          <div className="lp-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="lp-sheet-head">
              <h2 className="lp-serif">Lote {selectedLot.id}</h2>
              <button className="lp-close" onClick={() => setSelectedLot(null)} aria-label="Fechar">
                <X size={16} />
              </button>
            </div>
            <div className="lp-meta">
              <MapPin size={13} style={{ verticalAlign: -2, marginRight: 4 }} />
              1.000 m² · Quadra {selectedLot.row} · Ecofazenda Mucugê, região de Praia do Forte (BA)
            </div>

            <button
              type="button"
              className="lp-house-cta"
              onClick={() => {
                setSelectedLot(null);
                setView("casa");
              }}
            >
              <HouseIsoArt />
              <div className="lp-house-cta-text">
                <b>Casa ecológica em madeira · 2 quartos</b>
                <span>Modelo sugerido para este lote — toque para ver as imagens</span>
              </div>
            </button>

            <button
              type="button"
              className="lp-house-cta"
              onClick={() => {
                setSelectedLot(null);
                setView("lazer");
              }}
            >
              <LeisureHeroArt />
              <div className="lp-house-cta-text">
                <b>Área de lazer ecológica</b>
                <span>Parque, trilhas, arborismo e prainha à beira do rio</span>
              </div>
            </button>

            <form onSubmit={submitReservation}>
              <div className="lp-field">
                <label>Nome completo</label>
                <input
                  value={formState.nome}
                  onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                  placeholder="Seu nome"
                />
              </div>
              <div className="lp-field">
                <label>Telefone / WhatsApp</label>
                <input
                  value={formState.telefone}
                  onChange={(e) => setFormState({ ...formState, telefone: e.target.value })}
                  placeholder="(71) 90000-0000"
                />
              </div>
              <div className="lp-field">
                <label>E-mail (opcional)</label>
                <input
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="voce@email.com"
                />
              </div>
              <div className="lp-field">
                <label>Mensagem (opcional)</label>
                <textarea
                  value={formState.mensagem}
                  onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })}
                  placeholder="Tem alguma preferência ou dúvida sobre o lote?"
                />
              </div>
              <button className="lp-submit" type="submit" disabled={submitting}>
                {submitting ? "Enviando..." : "Reservar este lote"}
              </button>
            </form>
            <a
              className="lp-footer-link"
              style={{ justifyContent: "center", marginTop: 10, color: "var(--ocean)", fontWeight: 600 }}
              href={`${CONTACT_WHATSAPP_LINK}?text=${encodeURIComponent(
                `Olá! Tenho interesse no lote ${selectedLot.id} da Ecofazenda Mucugê (Praia do Forte).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> Prefiro falar direto no WhatsApp
            </a>
          </div>
        </div>
      )}

      {toast && <div className="lp-toast">{toast}</div>}
    </div>
  );
}
