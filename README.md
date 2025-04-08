# 🌐 Twitter & Discord Auto-Translator

<div align="right">

[English](#english) | [繁體中文](#traditional-chinese)

</div>

---

<div id="english">

<h1 align="center">Twitter & Discord Auto-Translator</h1>

<div align="center">

[Switch to 繁體中文 ↓](#traditional-chinese)

</div>

A powerful Chrome extension that automatically translates English content to Traditional Chinese on Twitter and Discord using ChatGPT 4.0 mini API. Experience seamless bilingual browsing with real-time translations!

## ✨ Features

- 🔄 Real-time translation from English to Traditional Chinese
- 🐦 Twitter integration
- 💬 Discord support
- 🤖 Powered by ChatGPT 4.0 mini API
- ⚡ Fast and efficient performance
- 🎛️ Easy toggle on/off functionality
- 🌍 Proxy support for global access

## 🚀 Quick Start

### 1. Backend Setup

#### Proxy Configuration
The extension uses a proxy to ensure stable access to various services. Here's how to set it up:

1. Obtain reliable proxy credentials from your provider
2. Navigate to the backend folder
3. Create a `.env` file with your proxy and API configurations:
   ```env
   # Proxy Settings
   PROXY_HOST=your_proxy_host        
   PROXY_PORT=your_proxy_port       
   PROXY_USERNAME=your_proxy_username 
   PROXY_PASSWORD=your_proxy_password 
   
   # OpenAI API Settings
   OPENAI_API_KEY=your_openai_api_key
   ```

#### Starting the Backend Server

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node server.js
   ```

3. Verify the server is running by checking for the success message in your terminal

### 2. Chrome Extension Installation

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top-right corner
3. Click "Load unpacked" and select the `frontend` folder
4. The extension icon should appear in your Chrome toolbar

## 📸 Screenshots

### Extension Setup
<details>
<summary>Click to view setup process</summary>

![Extension Setup](https://github.com/user-attachments/assets/0db96384-5b4f-48cf-bf31-7e934f04f26e)
</details>

### Discord Translation
<details>
<summary>Click to view Discord translation</summary>

![Discord Translation](https://github.com/user-attachments/assets/5d938e2d-ab7e-469b-89e3-02c517261bda)
</details>

### Twitter Translation
<details>
<summary>Click to view Twitter translation</summary>

![Twitter Translation](https://github.com/user-attachments/assets/08d9715f-4b3e-420e-9104-044fa64ae8e0)
</details>

## 🛠️ Usage Tips

- Ensure the backend server is running whenever you want to use the translation feature


<div align="right">

[Back to Top ↑](#english) | [切換至繁體中文 ↓](#traditional-chinese)

</div>

</div>

---

<div id="traditional-chinese">

<h1 align="center">Twitter 和 Discord 自動翻譯器</h1>

<div align="center">

[切換至英文 ↑](#english)

</div>

這是一個強大的 Chrome 擴充功能，使用 ChatGPT 4.0 mini API 自動將 Twitter 和 Discord 上的英文內容翻譯成繁體中文。體驗即時雙語瀏覽的便利！

## ✨ 功能特點

- 🔄 英文到繁體中文的即時翻譯
- 🐦 Twitter 整合
- 💬 Discord 支援
- 🤖 由 ChatGPT 4.0 mini API 提供支援
- ⚡ 快速且高效的性能
- 🎛️ 簡易開關功能
- 🌍 全球代理支援

## 🚀 快速開始

### 1. 後端設置

#### 代理配置
此擴充功能使用代理來確保穩定訪問各種服務。以下是設置方法：

1. 從您的代理提供商獲取可靠的代理憑證
2. 導航到後端資料夾
3. 創建 `.env` 檔案並填入您的代理和 API 配置：
   ```env
   # 代理設置
   PROXY_HOST=您的代理主機       
   PROXY_PORT=您的代理端口       
   PROXY_USERNAME=您的代理用戶名   
   PROXY_PASSWORD=您的代理密碼    
   
   # OpenAI API 設置
   OPENAI_API_KEY=您的OpenAI API金鑰
   ```

#### 啟動後端伺服器

1. 安裝依賴項：
   ```bash
   npm install
   ```

2. 啟動伺服器：
   ```bash
   node server.js
   ```

3. 檢查終端機中的成功訊息以驗證伺服器是否正在運行

### 2. Chrome 擴充功能安裝

1. 在 Chrome 瀏覽器中輸入 `chrome://extensions/`
2. 在右上角啟用「開發人員模式」
3. 點擊「載入未封裝項目」並選擇 `frontend` 資料夾
4. 擴充功能圖示將出現在 Chrome 工具列中

## 📸 截圖展示

### 擴充功能設置
<details>
<summary>點擊查看設置過程</summary>

![擴充功能設置](https://github.com/user-attachments/assets/0db96384-5b4f-48cf-bf31-7e934f04f26e)
</details>

### Discord 翻譯
<details>
<summary>點擊查看 Discord 翻譯效果</summary>

![Discord 翻譯](https://github.com/user-attachments/assets/5d938e2d-ab7e-469b-89e3-02c517261bda)
</details>

### Twitter 翻譯
<details>
<summary>點擊查看 Twitter 翻譯效果</summary>

![Twitter 翻譯](https://github.com/user-attachments/assets/08d9715f-4b3e-420e-9104-044fa64ae8e0)
</details>

## 🛠️ 使用提示

- 使用翻譯功能時，請確保後端伺服器正在運行


<div align="right">

[回到頂部 ↑](#traditional-chinese) | [切換至英文 ↑](#english)

</div>

</div>

---

