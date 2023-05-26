const data = {
  package_name: "Bohoso Moto",
  artist_name: "Suliana",
  release_date: "21 Januari 2019",
};

console.log(
  Object.keys(data)
    .map((key, index) => `${index + 1}`)
    .join(",")
);

const mm = {
  sample_url: "music\\song_1685087626934.mp3",
};

console.log(mm.split("\"));