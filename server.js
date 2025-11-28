const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'data.json');

// 中间件
app.use(cors()); // 允许跨域
app.use(express.json({ limit: '50mb' })); // 解析 JSON，支持大文件（图片）
app.use(express.static(__dirname)); // 静态文件服务

// 保存数据接口
app.post('/api/save-data', (req, res) => {
    try {
        const data = req.body;
        
        // 验证数据格式
        if (!data.dishes || !Array.isArray(data.dishes)) {
            return res.status(400).json({ 
                success: false, 
                message: '数据格式错误：缺少 dishes 字段' 
            });
        }
        
        // 添加版本和时间戳
        const saveData = {
            version: '1.0',
            exportTime: new Date().toLocaleString('zh-CN'),
            dishes: data.dishes || [],
            orders: data.orders || [],
            wishes: data.wishes || []
        };
        
        // 写入文件
        fs.writeFileSync(DATA_FILE, JSON.stringify(saveData, null, 2), 'utf-8');
        
        console.log(`✅ 数据已保存 - ${saveData.exportTime}`);
        console.log(`   菜品: ${saveData.dishes.length} 道`);
        console.log(`   订单: ${saveData.orders.length} 个`);
        console.log(`   心愿: ${saveData.wishes.length} 个`);
        
        res.json({ 
            success: true, 
            message: '数据保存成功',
            timestamp: saveData.exportTime
        });
    } catch (error) {
        console.error('❌ 保存失败:', error);
        res.status(500).json({ 
            success: false, 
            message: '服务器错误：' + error.message 
        });
    }
});

// 获取数据接口（可选）
app.get('/api/get-data', (req, res) => {
    try {
        if (!fs.existsSync(DATA_FILE)) {
            return res.json({ 
                version: '1.0',
                exportTime: new Date().toLocaleString('zh-CN'),
                dishes: [],
                orders: [],
                wishes: []
            });
        }
        
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        res.json(JSON.parse(data));
    } catch (error) {
        console.error('❌ 读取失败:', error);
        res.status(500).json({ 
            success: false, 
            message: '读取数据失败：' + error.message 
        });
    }
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   🍳 崔宝的御膳房 - 数据服务已启动    ║
╠════════════════════════════════════════╣
║  本地访问: http://localhost:${PORT}       ║
║  局域网访问: http://[IP地址]:${PORT}      ║
╠════════════════════════════════════════╣
║  API 接口:                             ║
║  - POST /api/save-data  保存数据       ║
║  - GET  /api/get-data   获取数据       ║
╚════════════════════════════════════════╝
    `);
});
