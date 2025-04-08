import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { SocksProxyAgent } from 'socks-proxy-agent';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const proxyUrl = `socks5://${process.env.PROXY_USERNAME}:${process.env.PROXY_PASSWORD}@${process.env.PROXY_HOST}:${process.env.PROXY_PORT}`;
const agent = new SocksProxyAgent(proxyUrl);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  fetch: (url, options) => fetch(url, { ...options, agent }),
});

app.post('/translate', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Translate the following to Traditional Chinese. Only return the translation.' },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1024
    });

    const content = completion.choices?.[0]?.message?.content || '翻譯失敗';
    res.json({ translation: content });
  } catch (err) {
    console.error('❌ Translation error:', err.message);
    res.status(500).json({ error: 'Translation failed' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});