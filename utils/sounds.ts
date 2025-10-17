// Giả sử các tệp âm thanh nằm trong thư mục /sounds
// Bạn cần thay thế các đường dẫn này bằng các tệp âm thanh thực tế của mình.
const SOUND_FILES = {
  correct: 'https://storage.googleapis.com/aistudio-hosting/prompts/demos/sound/correct-choice.mp3',
  incorrect: 'https://storage.googleapis.com/aistudio-hosting/prompts/demos/sound/wrong-choice.mp3',
  click: 'https://storage.googleapis.com/aistudio-hosting/prompts/demos/sound/button-click.mp3',
};

// Tạo một pool các đối tượng Audio để có thể phát nhiều âm thanh cùng lúc
const audioPool: { [key: string]: HTMLAudioElement[] } = {};
const POOL_SIZE = 3;

Object.keys(SOUND_FILES).forEach(key => {
    audioPool[key] = [];
    for (let i = 0; i < POOL_SIZE; i++) {
        const audio = new Audio(SOUND_FILES[key as keyof typeof SOUND_FILES]);
        audio.preload = 'auto';
        audioPool[key].push(audio);
    }
});

let currentIndex: { [key: string]: number } = {
    correct: 0,
    incorrect: 0,
    click: 0,
};

export const playSound = (soundName: keyof typeof SOUND_FILES) => {
  try {
    const pool = audioPool[soundName];
    if (pool) {
      const audio = pool[currentIndex[soundName]];
      audio.currentTime = 0;
      audio.play().catch(error => {
        // Lỗi tự động phát thường xảy ra khi người dùng chưa tương tác với trang.
        // Bỏ qua lỗi này một cách nhẹ nhàng.
        // console.error(`Could not play sound ${soundName}:`, error);
      });
      currentIndex[soundName] = (currentIndex[soundName] + 1) % POOL_SIZE;
    }
  } catch (error) {
    console.error(`Error playing sound ${soundName}:`, error);
  }
};
