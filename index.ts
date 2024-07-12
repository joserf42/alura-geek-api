// index.ts
import express from 'express';
const app = express();

app.get('/products', (req, res) => {
    // Aquí puedes devolver datos falsos (por ejemplo, desde un archivo JSON)
    const fakeProducts = [
        { id: 1, name: '', price: 80, image:'https://resources.claroshop.com/medios-plazavip/mkt/65467fc8a751e_cab_seiya-removebg-previewpng.jpg?scale=500&qlty=75' },
        { id: 2, name: 'Shiryu de Dragón', price: 80, image:'https://resources.claroshop.com/medios-plazavip/mkt/65467f8adb844_cab_shiryu-removebg-previewpng.jpg?scale=500&qlty=75' },
        { id: 3, name: 'Ikki de Fénix', price: 80, image:'https://resources.claroshop.com/medios-plazavip/mkt/65467f93dd387_cab_ikki-removebg-previewpng.jpg?scale=500&qlty=75'},
        { id: 4, name: 'Shun de Andrómeda', price: 80, image:'https://resources.claroshop.com/medios-plazavip/mkt/65467f9a54ff5_cab_shun-removebg-previewpng.jpg?scale=500&qlty=75'},
        { id: 5, name: 'Hyoga de Cisne', price: 80, image:'https://resources.claroshop.com/medios-plazavip/mkt/65467fc548bb8_cab_hyoga-removebg-previewpng.jpg?scale=500&qlty=75'}

            
    ];
    res.json(fakeProducts);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
