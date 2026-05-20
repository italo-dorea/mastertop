const CryptoJS = require("crypto-js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("--- Gerador de Token Criptografado para o Admin ---\n");

rl.question("Cole o seu GitHub Personal Access Token (PAT): ", (token) => {
  rl.question("Digite a Senha Mestra que você quer usar para acessar o painel: ", (password) => {
    
    // Criptografa o token usando a senha fornecida
    const encryptedToken = CryptoJS.AES.encrypt(token.trim(), password).toString();
    
    console.log("\n✅ Criptografia concluída com sucesso!");
    console.log("\n=======================================================");
    console.log("COPIE O CÓDIGO ABAIXO PARA O SEU ARQUIVO .env.local:");
    console.log("=======================================================\n");
    console.log(`NEXT_PUBLIC_ENCRYPTED_GITHUB_TOKEN="${encryptedToken}"`);
    console.log("\nLembre-se da sua Senha Mestra! Ela será solicitada na página /admin.");
    
    rl.close();
  });
});
