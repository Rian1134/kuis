import { useState } from "react";
import { Link } from "react-router";

const Kuis = () => {
  const soalData = [
    {
      nomor: 1,
      soal: "Erick von Manstein merupakan salah satu Marsekal Lapangan yang ahli strategi yang brilian, namun dia dipecat oleh Adolf Hitler karena...",
      pilihan: {
        A: "sering mengabaikan perintah Fuhrer.",
        B: "menolak kamp konsentrasi di Auschwitz.",
        C: "sering berselisih soal strategi perang dengan Fuhrer dan konflik dengan jenderal lainnya.",
        D: "selalu mementingkan pendapat sendiri tanpa negosiasi yang jelas.",
      },
      jawaban: "C",
    },
    {
      nomor: 2,
      soal: "Jenderal lapangan yang sangat setia kepada Adolf Hitler adalah...",
      pilihan: {
        A: "Wilhelm Keitel, Alfred Jodl, Erwin Rommel.",
        B: "Erich von Manstein, Erwin Rommel, Heinrich Himmler.",
        C: "Joseph Goebbels, Heinrich Himmler, Reinhard Heydrich.",
        D: "Heinrich Himmler, Reinhard Heydrich, Wilhelm Keitel.",
      },
      jawaban: "D",
    },
    {
      nomor: 3,
      soal: "Siapakah veteran Perang Dunia I yang berhasil membangun Jerman kembali saat Perang Dunia II dari setelah kehancuran Perang Dunia I?",
      pilihan: {
        A: "Otto von Bismarck",
        B: "Adolf Hitler",
        C: "Heinz Guderian",
        D: "Franz von Papen",
      },
      jawaban: "B",
    },
    {
      nomor: 4,
      soal: "Pengikut setia sang wakil tuhan sekarang adalah...",
      pilihan: {
        A: "Friedrich Merz",
        B: "Olaf Scholz",
        C: "Raden Cokroaminoto Hanyokrokusumo Girindrawardana Kusumawardani Jagadpramujo Sangromodhananjoyo",
        D: "Raden Pandji Wirasmo Notonindito",
      },
      jawaban: "C",
    },
    {
      nomor: 5,
      soal: "Sikap positif yang harus kita teladani dari para pahlawan Nazi, antara lain...",
      pilihan: {
        A: "pantang mundur, malas bekerja dan pemberani",
        B: "semangat, malas dan cinta tanah air",
        C: "optimis, pemberani dan semangat nasionalisme tinggi",
        D: "pemberani, rajin, dan suka melawan",
      },
      jawaban: "C",
    },
    {
      nomor: 6,
      soal: "Cornelis de Houtman datang ke Nusantara pada tahun 1596 dan Napoleon Bonaparte berhasil menguasai Nusantara pada tahun 1806. Berapakah selisih tahun antara Cornelis de Houtman dengan Napoleon Bonaparte ke Nusantara?",
      pilihan: {
        A: "2 abad 1 dekade",
        B: "3 abad 2 dekade",
        C: "4 abad 5 dekade",
        D: "5 abad 7 dekade",
      },
      jawaban: "A",
    },
    {
      nomor: 7,
      soal: "Vergeltungswaffe 2, rudal balistik jarak jauh operasional dan modern pertama di dunia yang diciptakan oleh ilmuwan Nazi adalah...",
      pilihan: {
        A: "Adolf Hitler",
        B: "Erwin Rommel",
        C: "Reinhard Heydrich",
        D: "Wernher von Braun",
      },
      jawaban: "D",
    },
    {
      nomor: 8,
      soal: "Fliegerfaust adalah peluncur roket anti pesawat yang pertama di dunia yang diciptakan pada tahun...",
      pilihan: {
        A: "1940",
        B: "1944",
        C: "1920",
        D: "1922",
      },
      jawaban: "B",
    },
    {
      nomor: 9,
      soal: "Adolf Hitler lahir di Braunau, Austria, 20 April 1889 dan menjadi Kanselir Jerman pada tahun 1933. Puncak karirnya menjadi Fuhrer pada tahun 1934. Apa nama partai Hitler?",
      pilihan: {
        A: "DAP yang kemudian menjadi NSDAP",
        B: "CDU dan CSU",
        C: "NSDAP dan NAZI",
        D: "NAZI dan AFD",
      },
      jawaban: "A",
    },
    {
      nomor: 10,
      soal: "Pada saat awal kemerdekaan Indonesia 1945 terjadi peristiwa kekerasan dan pembantaian terhadap warga sipil Belanda yang dilakukan oleh para kelompok kemerdekaan Indonesia yaitu...",
      pilihan: {
        A: "TKR, TRI dan BKR",
        B: "laskar rakyat, milisi rakyat dan LRDR",
        C: "TNI, Tjakrabirawa dan DKP",
        D: "TKR, TNI, dan BKR",
      },
      jawaban: "B",
    },
  ];

  // State untuk menyimpan jawaban user
  const [jawabanUser, setJawabanUser] = useState({});

  // State untuk status submit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 1. Fungsi untuk menghitung jawaban BENAR
  const hitungBenar = () => {
    let benar = 0;
    soalData.forEach((soal) => {
      if (jawabanUser[soal.nomor] === soal.jawaban) {
        benar++;
      }
    });
    return benar;
  };

  // 2. Fungsi untuk menghitung jawaban SALAH
  const hitungSalah = () => {
    let salah = 0;
    soalData.forEach((soal) => {
      // Cek jika dijawab DAN jawabannya salah
      if (jawabanUser[soal.nomor] && jawabanUser[soal.nomor] !== soal.jawaban) {
        salah++;
      }
    });
    return salah;
  };

  // 3. Fungsi untuk menghitung jawaban TIDAK DIJAWAB
  const hitungTidakDijawab = () => {
    let tidakDijawab = 0;
    soalData.forEach((soal) => {
      // Cek jika tidak ada jawaban untuk soal tersebut
      if (!jawabanUser[soal.nomor]) {
        tidakDijawab++;
      }
    });
    return tidakDijawab;
  };

  // 4. Fungsi untuk menghitung TOTAL yang sudah dijawab
  const hitungTotalDijawab = () => {
    return Object.keys(jawabanUser).length;
  };

  // 5. Fungsi untuk menghitung PERSENTASE nilai
  const hitungPersentase = () => {
    const total = soalData.length;
    const benar = hitungBenar();
    return total > 0 ? Math.round((benar / total) * 100) : 0;
  };

  // 10. Fungsi untuk SUBMIT jawaban
  const handleSubmit = () => {
    const totalDijawab = hitungTotalDijawab();
    if (totalDijawab === 0) {
      alert("Silakan jawab minimal satu soal terlebih dahulu!");
      return;
    }
    setIsSubmitted(true);
  };

  // 11. Fungsi untuk RESET kuis
  const handleReset = () => {
    setJawabanUser({});
    setIsSubmitted(false);
  };

  // 12. Fungsi untuk menangani PEMILIHAN jawaban
  const handlePilihJawaban = (nomor, pilihan) => {
    if (!isSubmitted) {
      setJawabanUser({
        ...jawabanUser,
        [nomor]: pilihan,
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col justify-center items-center p-3 mt-30">
        <div className="card w-full flex flex-col ">
          <div className="card-body">
            <h1 className="text-center text-2xl font-bold mb-5 text-indigo-700">
              Statistik
            </h1>
            <p className="flex justify-between mb-4">
              <span className="bg-green-400 text-white px-4 rounded-md">
                Benar
              </span>
              <span className="bg-sky-400 text-white px-4 rounded-md">
                {hitungBenar()}
              </span>
            </p>
            <p className="flex justify-between mb-4">
              <span className="bg-red-500 text-white px-4 rounded-md ">
                Salah
              </span>
              <span className="bg-sky-400 text-white px-4 rounded-md">
                {hitungSalah()}
              </span>
            </p>
            <p className="flex justify-between mb-4">
              <span className="bg-gray-500 text-white px-4 rounded-md me-4">
                tidak dijawab
              </span>
              <span className="bg-sky-400 text-white px-4 rounded-md">
                {hitungTidakDijawab()}
              </span>
            </p>
            <p className="flex justify-between mb-4">
              <span className="bg-blue-500 text-white px-4 rounded-md me-4">
                Nilai
              </span>
              <span className="bg-sky-400 text-white px-4 rounded-md">
                {hitungPersentase()}%
              </span>
            </p>
          </div>
          <Link to={'/'} onClick={handleReset} className="btn-primary m-5">Kembali</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">
      {soalData.map((soal) => (
        <div key={soal.nomor} className="card mb-4">
          <div className="card-body">
            <div className="text-sm mb-4">
              <p>{soal.soal}</p>
            </div>

            <div>
              {Object.entries(soal.pilihan).map(([key, value]) => (
                <div key={key} className="mb-3">
                  <input
                    type="radio"
                    name={`soal-${soal.nomor}`}
                    value={key}
                    onChange={() => handlePilihJawaban(soal.nomor, key)}
                    className="me-4"
                  />
                  <label className="text-sm">{value}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      {!isSubmitted ? (
        <button onClick={handleSubmit} className="btn-success">Submit</button>
      ) : (
        <button onClick={handleReset}>Ulangi</button>
      )}
    </div>
  );
};

export default Kuis;
