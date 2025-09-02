const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;

function isiDataBarang(Gambar, Barang, jumlah){
    return prisma.barang.create({
        data: {
            Gambar: Gambar,
            Barang: Barang,
            jumlah: jumlah
        }
    });
}

module.exports = {isiDataBarang};
