const express = require('express');
const app = express();
const {isiDataBarang} = require('./fungsi/fDb');

const port = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status : 200,
    pesan : "Server telah jalan"
  })
})

app.post('/tambah', async (req, res) => {
    const {gambar, barang, jumlah} = req.body
    console.log(gambar, barang, jumlah)
    const hasil = await isiDataBarang(gambar, barang, parseInt(jumlah))
    res.json({ status : 200,
        pesan : "Data berhasil ditambahkan",
        data : hasil
      })
})

app.listen(port, () => {
  console.log(`wle wle wle wle http://localhost:${port}`)
})
