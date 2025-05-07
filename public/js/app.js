document.getElementById('btnJson').addEventListener('click', async () => {
  const artist = document.getElementById('artistSelect').value;
  try {
    const response = await fetch(`resources/${artist}.json`);
    if (!response.ok) throw new Error('Ошибка загрузки JSON');
    const data = await response.json();
    document.getElementById('jsonData').textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    document.getElementById('jsonData').textContent = err.message;
  }
});

document.getElementById('btnText').addEventListener('click', async () => {
  const artist = document.getElementById('artistSelect').value;
  try {
    const response = await fetch(`resources/${artist}.txt`);
    if (!response.ok) throw new Error('Ошибка загрузки текста');
    const text = await response.text();
    document.getElementById('textData').textContent = text;
  } catch (err) {
    document.getElementById('textData').textContent = err.message;
  }
});

document.getElementById('btnMedia').addEventListener('click', async () => {
  const artist = document.getElementById('artistSelect').value;
  const mediaDiv = document.getElementById('mediaData');
  mediaDiv.innerHTML = '';

  const mediaMap = {
    artist1: {
      img: 'https://via.placeholder.com/400x300?text=Иван+Иванов',
      video: 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4'
    },
    artist2: {
      img: 'https://via.placeholder.com/400x300?text=Мария+Петрова',
      video: 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4'
    },
    artist3: {
      img: 'https://via.placeholder.com/400x300?text=Алексей+Смирнов',
      video: 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4'
    }
  };

  try {
    const img = document.createElement('img');
    img.src = mediaMap[artist].img;
    img.alt = 'Фото артиста';
    mediaDiv.appendChild(img);

    const video = document.createElement('video');
    video.src = mediaMap[artist].video;
    video.controls = true;
    mediaDiv.appendChild(video);
  } catch (err) {
    mediaDiv.textContent = 'Ошибка загрузки медиа';
  }
});
