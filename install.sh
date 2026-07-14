#!/usr/bin/env bash
# frontend-simple: instala o plugin e liga o auto-update em um passo.
# Uso: curl -fsSL https://raw.githubusercontent.com/SoberanusOnline/frontend-simple/main/install.sh | bash
set -euo pipefail
echo ">> Adicionando marketplace..."
claude plugin marketplace add SoberanusOnline/frontend-simple || true
echo ">> Instalando plugin..."
claude plugin install frontend-simple@frontend-simple || true
echo ">> Ligando auto-update (extraKnownMarketplaces no settings do usuario)..."
node -e '
const fs=require("fs"),os=require("os");
const p=os.homedir()+"/.claude/settings.json";
let j={}; try{ j=JSON.parse(fs.readFileSync(p,"utf8")); }catch(e){}
fs.writeFileSync(p+".bak-frontend-simple", JSON.stringify(j,null,2));
j.extraKnownMarketplaces=j.extraKnownMarketplaces||{};
j.extraKnownMarketplaces["frontend-simple"]={source:{source:"github",repo:"SoberanusOnline/frontend-simple"},autoUpdate:true};
fs.writeFileSync(p, JSON.stringify(j,null,2));
console.log("auto-update: ON");'
echo ">> Pronto. Reinicie o Claude Code (ou rode /reload-plugins) e peca: \"quero fazer um site\"."
