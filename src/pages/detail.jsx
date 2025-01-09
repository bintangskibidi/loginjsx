import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams(); // Mengambil nilai parameter dari URL
  const [produk, setProduk] = useState(null);

  // Mengambil data produk berdasarkan id
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/minumans/${id}`);
        setProduk(response.data);
      } catch (error) {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      }
    };

    fetchData();
  }, [id]); // Menambahkan id ke dalam dependency array

  if (!produk) {
    return <div>Loading...</div>; // Menampilkan loading jika data belum ada
  }

  return (
    <div>
      <h1>{produk.produk}</h1>
      <p>Harga: {produk.harga}</p>
      <p>Deskripsi: {produk.deskripsi}</p>
      <img src={produk.gambar} alt={produk.produk} />
    </div>
  );
}

export default Detail;