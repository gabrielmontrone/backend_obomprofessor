const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(process.env.apiKEY);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

const generateContent = async (prompt) => {
  try {
    const result = await model.generateContent([prompt]);
    if (result.response && result.response.text) {
      return result.response.text();
    } else {
      throw new Error('Resposta inválida da API');
    }
  } catch (error) {
    console.error('Erro ao gerar conteúdo:', error);
    throw new Error('Erro ao gerar conteúdo');
  }
};

module.exports = { generateContent };
