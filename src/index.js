const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'telehealth-ehr-portal-nextjs-ts-v2026-11',
        category: 'Telehealth & Electronic Health Records',
        tech: 'TypeScript / Next.js React App',
        status: 'active'
    });
});

app.listen(PORT, () => {
    console.log(`[telehealth-ehr-portal-nextjs-ts-v2026-11] Service listening on port ${PORT}`);
});
